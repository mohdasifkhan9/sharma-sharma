/**
 * Sharma & Sharma Intellectual Property Law
 * Google Apps Script - Consultation Form CRM Webhook (Code.gs)
 *
 * This script handles webhook submissions from the Next.js frontend,
 * validates the payloads, saves the data to Google Sheets, sends notifications
 * to the firm, and issues confirmation emails to the visitors.
 *
 * Setup:
 * 1. Open Google Sheets.
 * 2. Click Extensions > Apps Script.
 * 3. Replace the Code.gs contents with this file.
 * 4. Run `runSetup()` to configure the sheet.
 * 5. Deploy as a Web App (Deploy > New Deployment > Web App, set access to "Anyone").
 * 6. Copy the Web App URL and paste it into your Next.js frontend environment config.
 */

// =========================================================================
// CONFIGURATION CONSTANTS
// =========================================================================
const CONFIG = {
  SHEET_NAME: "Consultation Requests",
  FIRM_NAME: "Sharma & Sharma Intellectual Property Law",
  WEBSITE_URL: "https://ipmark.in",
  NOTIFICATION_EMAIL: "info@ipmark.in",
  OFFICE_ADDRESS: "466, Western Wing,\nTis Hazari Courts,\nDelhi 110006,\nIndia",
  COLORS: {
    PRIMARY_NAVY: "#16213A",
    SECONDARY_NAVY: "#223052",
    GOLD: "#B08D57",
    LIGHT_GOLD: "#C9A877",
    CREAM_BG: "#FAF8F4",
    WHITE: "#FFFFFF",
    LINE_BORDER: "#E8E2D8",
    MUTED_GREY: "#666666"
  },
  HEADERS: [
    "Timestamp",
    "Full Name",
    "Email",
    "Phone",
    "Company",
    "Area of Interest",
    "Message",
    "User Agent",
    "IP Address",
    "Status"
  ]
};

// =========================================================================
// MAIN ENTRY POINTS (WEBHOOK HANDLERS)
// =========================================================================

/**
 * Handle HTTP POST requests (form submissions)
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return createResponse(400, "Empty payload received.");
    }

    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseError) {
      return createResponse(400, "Malformed JSON payload.");
    }

    // Validate request contents
    var validation = validateRequest(data);
    if (!validation.isValid) {
      return createResponse(422, validation.message);
    }

    // Process and sanitize data fields
    var sanitizedData = {
      fullName: sanitizeString(data.fullName),
      email: data.email.trim().toLowerCase(),
      phone: sanitizeString(data.phone),
      company: sanitizeString(data.company || "N/A"),
      service: sanitizeString(data.service),
      message: sanitizeString(data.message),
      submittedAt: data.submittedAt ? new Date(data.submittedAt) : new Date(),
      userAgent: data.userAgent || e.userAgent || "Unknown",
      ip: data.ip || "Unknown"
    };

    // Get and prepare active sheet
    var sheet = setupSheet();
    
    // Save to Google Sheet
    saveSubmission(sanitizedData, sheet);

    // Send emails (fail-safe layout)
    try {
      sendNotificationEmail(sanitizedData);
    } catch (emailErr) {
      Logger.log("Notification email error: " + emailErr.toString());
    }

    try {
      sendAutoReply(sanitizedData);
    } catch (replyErr) {
      Logger.log("Visitor auto-reply error: " + replyErr.toString());
    }

    return createResponse(200, "Enquiry received successfully.");
  } catch (error) {
    Logger.log("CRITICAL ERROR in doPost: " + error.toString());
    return createResponse(500, "Internal Server Error. Please contact administrator.");
  }
}

/**
 * Handle HTTP GET requests (health checks and list requests)
 */
function doGet(e) {
  try {
    var status = checkSheetStatus();
    return createResponse(200, "Service is active.", status);
  } catch (error) {
    Logger.log("ERROR in doGet: " + error.toString());
    return createResponse(500, "Internal Server Error.");
  }
}

// =========================================================================
// DATA VALIDATION & SANITIZATION
// =========================================================================

/**
 * Validates request object parameters
 */
function validateRequest(data) {
  if (!data) {
    return { isValid: false, message: "Payload missing." };
  }

  // Honeypot anti-spam check (if frontend provides hidden anti-spam field)
  if (data.honey || data.honeypot) {
    return { isValid: false, message: "Spam submission rejected." };
  }

  // Required parameters verification
  var required = ["fullName", "email", "phone", "service", "message"];
  for (var i = 0; i < required.length; i++) {
    var field = required[i];
    if (!data[field] || String(data[field]).trim() === "") {
      return { isValid: false, message: "Field '" + field + "' is required." };
    }
  }

  // Email format verification
  var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailReg.test(String(data.email).trim())) {
    return { isValid: false, message: "Invalid email format." };
  }

  return { isValid: true };
}

/**
 * Sanitizes input string to prevent XSS/injection issues
 */
function sanitizeString(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

// =========================================================================
// SHEET SETUP & OPERATIONS
// =========================================================================

/**
 * One-click initialization setup function
 */
function runSetup() {
  try {
    var sheet = setupSheet();
    
    // Clear and reset headers to guarantee formatting
    sheet.clear();
    sheet.getRange(1, 1, 1, CONFIG.HEADERS.length).setValues([CONFIG.HEADERS]);

    // Format headers
    var headerRange = sheet.getRange(1, 1, 1, CONFIG.HEADERS.length);
    headerRange.setFontWeight("bold");
    headerRange.setFontColor(CONFIG.COLORS.WHITE);
    headerRange.setBackground(CONFIG.COLORS.PRIMARY_NAVY);
    headerRange.setFontFamily("Inter");
    headerRange.setFontSize(10);
    
    // Freezes header row
    sheet.setFrozenRows(1);

    // Apply column widths
    var widths = [160, 150, 180, 120, 150, 160, 280, 150, 110, 100];
    for (var i = 0; i < widths.length; i++) {
      sheet.setColumnWidth(i + 1, widths[i]);
    }

    // Enable grids, filters, and borders
    sheet.getRange(1, 1, 500, CONFIG.HEADERS.length).setBorder(
      true, true, true, true, true, true, 
      CONFIG.COLORS.LINE_BORDER, 
      SpreadsheetApp.BorderStyle.SOLID
    );

    // Add a filters bar on the headers
    var filter = sheet.getFilter();
    if (filter) filter.remove();
    headerRange.createFilter();

    // Insert mock setup row
    var testData = {
      fullName: "Test User",
      email: "test@example.com",
      phone: "9999999999",
      company: "IPMark Demo",
      service: "Trademark Registration",
      message: "This is a test consultation generated during setup.",
      submittedAt: new Date(),
      userAgent: "Setup Agent",
      ip: "127.0.0.1"
    };
    saveSubmission(testData, sheet);

    Logger.log("SUCCESS: runSetup() completed setup successfully.");
    return { status: "Success", message: "Setup completed." };
  } catch (error) {
    Logger.log("ERROR in runSetup: " + error.toString());
    throw error;
  }
}

/**
 * Configures the Active Sheet and returns the spreadsheet instance
 */
function setupSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
  }
  return sheet;
}

/**
 * Saves a sanitized submission object into Google Sheets
 */
function saveSubmission(data, sheet) {
  var row = [
    formatTimestamp(data.submittedAt),
    data.fullName,
    data.email,
    data.phone,
    data.company,
    data.service,
    data.message,
    data.userAgent,
    data.ip,
    "Pending Review"
  ];
  sheet.appendRow(row);
}

// =========================================================================
// EMAIL WORKFLOWS
// =========================================================================

/**
 * Sends a premium HTML email alert to the firm
 */
function sendNotificationEmail(data) {
  var subject = "New Consultation Request | Sharma & Sharma";
  
  var htmlBody = 
    "<div style=\"background-color:" + CONFIG.COLORS.CREAM_BG + "; padding: 40px; font-family:'Georgia', serif; color:" + CONFIG.COLORS.PRIMARY_NAVY + ";\">" +
      "<div style=\"max-width: 600px; margin: 0 auto; background-color:" + CONFIG.COLORS.WHITE + "; border: 1px solid " + CONFIG.COLORS.LINE_BORDER + "; padding: 45px; border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);\">" +
        "<h2 style=\"margin-top: 0; font-weight: normal; color:" + CONFIG.COLORS.PRIMARY_NAVY + "; font-size: 24px; border-bottom: 2px solid " + CONFIG.COLORS.GOLD + "; padding-bottom: 15px; letter-spacing: -0.01em;\">" +
          "New Enquiry Deposited" +
        "</h2>" +
        "<p style=\"font-size: 14px; color:" + CONFIG.COLORS.MUTED_GREY + "; line-height: 1.5; font-family: sans-serif;\">" +
          "A visitor has submitted a request for legal consultation on the IPMark portal. Details are categorized below:" +
        "</p>" +
        "<table style=\"width: 100%; border-collapse: collapse; margin: 30px 0; font-size: 13px; font-family: sans-serif;\">" +
          "<tr style=\"border-bottom: 1px solid " + CONFIG.COLORS.LINE_BORDER + ";\">" +
            "<td style=\"padding: 10px 0; font-weight: bold; width: 35%; color:" + CONFIG.COLORS.PRIMARY_NAVY + ";\">Full Name</td>" +
            "<td style=\"padding: 10px 0; color:" + CONFIG.COLORS.MUTED_GREY + ";\">" + data.fullName + "</td>" +
          "</tr>" +
          "<tr style=\"border-bottom: 1px solid " + CONFIG.COLORS.LINE_BORDER + ";\">" +
            "<td style=\"padding: 10px 0; font-weight: bold; color:" + CONFIG.COLORS.PRIMARY_NAVY + ";\">Email</td>" +
            "<td style=\"padding: 10px 0; color:" + CONFIG.COLORS.MUTED_GREY + ";\"><a href=\"mailto:" + data.email + "\" style=\"color:" + CONFIG.COLORS.GOLD + "; text-decoration: none;\">" + data.email + "</a></td>" +
          "</tr>" +
          "<tr style=\"border-bottom: 1px solid " + CONFIG.COLORS.LINE_BORDER + ";\">" +
            "<td style=\"padding: 10px 0; font-weight: bold; color:" + CONFIG.COLORS.PRIMARY_NAVY + ";\">Phone</td>" +
            "<td style=\"padding: 10px 0; color:" + CONFIG.COLORS.MUTED_GREY + ";\">" + data.phone + "</td>" +
          "</tr>" +
          "<tr style=\"border-bottom: 1px solid " + CONFIG.COLORS.LINE_BORDER + ";\">" +
            "<td style=\"padding: 10px 0; font-weight: bold; color:" + CONFIG.COLORS.PRIMARY_NAVY + ";\">Company</td>" +
            "<td style=\"padding: 10px 0; color:" + CONFIG.COLORS.MUTED_GREY + ";\">" + data.company + "</td>" +
          "</tr>" +
          "<tr style=\"border-bottom: 1px solid " + CONFIG.COLORS.LINE_BORDER + ";\">" +
            "<td style=\"padding: 10px 0; font-weight: bold; color:" + CONFIG.COLORS.PRIMARY_NAVY + ";\">Area of Interest</td>" +
            "<td style=\"padding: 10px 0; color:" + CONFIG.COLORS.GOLD + "; font-weight: 600;\">" + data.service + "</td>" +
          "</tr>" +
          "<tr style=\"border-bottom: 1px solid " + CONFIG.COLORS.LINE_BORDER + ";\">" +
            "<td style=\"padding: 10px 0; font-weight: bold; color:" + CONFIG.COLORS.PRIMARY_NAVY + ";\">Timestamp</td>" +
            "<td style=\"padding: 10px 0; color:" + CONFIG.COLORS.MUTED_GREY + ";\">" + formatTimestamp(data.submittedAt) + "</td>" +
          "</tr>" +
        "</table>" +
        "<div style=\"background-color:" + CONFIG.COLORS.CREAM_BG + "; padding: 20px; border-left: 3px solid " + CONFIG.COLORS.GOLD + "; margin-bottom: 30px;\">" +
          "<span style=\"font-size: 10px; font-weight: bold; tracking: 0.1em; color:" + CONFIG.COLORS.GOLD + "; font-family: sans-serif; display: block; margin-bottom: 8px; text-transform: uppercase;\">MESSAGE MEMO</span>" +
          "<p style=\"margin: 0; font-size: 14px; line-height: 1.6; color:" + CONFIG.COLORS.PRIMARY_NAVY + "; white-space: pre-wrap;\">" + data.message + "</p>" +
        "</div>" +
        "<div style=\"border-t: 1px solid " + CONFIG.COLORS.LINE_BORDER + "; padding-top: 15px; font-size: 11px; color:" + CONFIG.COLORS.MUTED_GREY + "; font-family: sans-serif; line-height: 1.4;\">" +
          "<strong>Filing Metadata:</strong><br />" +
          "User Agent: " + data.userAgent + "<br />" +
          "IP: " + data.ip +
        "</div>" +
      "</div>" +
    "</div>";

  MailApp.sendEmail({
    to: CONFIG.NOTIFICATION_EMAIL,
    subject: subject,
    htmlBody: htmlBody
  });
}

/**
 * Sends confirmation email response to the visitor
 */
function sendAutoReply(data) {
  var subject = "We've received your consultation request";
  
  var htmlBody = 
    "<div style=\"background-color:" + CONFIG.COLORS.CREAM_BG + "; padding: 40px; font-family:'Georgia', serif; color:" + CONFIG.COLORS.PRIMARY_NAVY + ";\">" +
      "<div style=\"max-width: 600px; margin: 0 auto; background-color:" + CONFIG.COLORS.WHITE + "; border: 1px solid " + CONFIG.COLORS.LINE_BORDER + "; padding: 45px; border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);\">" +
        "<h2 style=\"margin-top: 0; font-weight: normal; color:" + CONFIG.COLORS.PRIMARY_NAVY + "; font-size: 24px; border-bottom: 2px solid " + CONFIG.COLORS.GOLD + "; padding-bottom: 15px; letter-spacing: -0.01em;\">" +
          "Sharma &amp; Sharma" +
        "</h2>" +
        "<p style=\"font-size: 15px; line-height: 1.6; margin-bottom: 20px;\">Dear " + data.fullName + ",</p>" +
        "<p style=\"font-size: 15px; line-height: 1.6; margin-bottom: 20px;\">" +
          "Thank you for contacting Sharma &amp; Sharma Intellectual Property Law." +
        "</p>" +
        "<p style=\"font-size: 15px; line-height: 1.6; margin-bottom: 25px;\">" +
          "We have successfully received your consultation request regarding <strong>" + data.service + "</strong>. " +
          "One of our Intellectual Property experts will review your enquiry and respond within one business day." +
        "</p>" +
        "<div style=\"border-top: 1px solid " + CONFIG.COLORS.LINE_BORDER + "; padding-top: 20px; font-size: 13px; color:" + CONFIG.COLORS.MUTED_GREY + "; line-height: 1.5; font-family: sans-serif;\">" +
          "<strong style=\"color:" + CONFIG.COLORS.PRIMARY_NAVY + ";\">Office Address:</strong><br />" +
          "466, Western Wing<br />" +
          "Tis Hazari Courts<br />" +
          "Delhi 110006<br />" +
          "India<br /><br />" +
          "<strong>Email:</strong> <a href=\"mailto:" + CONFIG.NOTIFICATION_EMAIL + "\" style=\"color:" + CONFIG.COLORS.GOLD + "; text-decoration: none;\">" + CONFIG.NOTIFICATION_EMAIL + "</a><br />" +
          "<strong>Website:</strong> <a href=\"" + CONFIG.WEBSITE_URL + "\" style=\"color:" + CONFIG.COLORS.GOLD + "; text-decoration: none;\">ipmark.in</a>" +
        "</div>" +
        "<div style=\"margin-top: 40px; font-size: 12px; border-top: 1px solid " + CONFIG.COLORS.LINE_BORDER + "; padding-top: 15px; color:" + CONFIG.COLORS.MUTED_GREY + "; text-align: center;\">" +
          "Regards,<br /><strong>Sharma &amp; Sharma</strong><br />Intellectual Property Law" +
        "</div>" +
      "</div>" +
    "</div>";

  MailApp.sendEmail({
    to: data.email,
    subject: subject,
    htmlBody: htmlBody
  });
}

// =========================================================================
// UTILITY & API FUNCTIONS
// =========================================================================

/**
 * Formats date object to system timezone string
 */
function formatTimestamp(date) {
  return Utilities.formatDate(
    date,
    Session.getScriptTimeZone(),
    "yyyy-MM-dd HH:mm:ss"
  );
}

/**
 * Builds standard JSON HTTP response payloads
 */
function createResponse(statusCode, message, details) {
  var response = {
    status: statusCode === 200 ? "success" : "error",
    code: statusCode,
    message: message
  };
  if (details) {
    response.details = details;
  }
  
  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Returns basic diagnostic status of Sheets CRM database
 */
function checkSheetStatus() {
  var sheet = setupSheet();
  var lastRow = sheet.getLastRow();
  return {
    sheetName: CONFIG.SHEET_NAME,
    totalRecords: lastRow > 1 ? lastRow - 1 : 0,
    headers: CONFIG.HEADERS
  };
}

/**
 * API hook to fetch all records in JSON format (Diagnostic helper)
 */
function getAllConsultations() {
  try {
    var sheet = setupSheet();
    var lastRow = sheet.getLastRow();
    if (lastRow <= 1) return [];
    
    var data = sheet.getRange(2, 1, lastRow - 1, CONFIG.HEADERS.length).getValues();
    var list = [];
    
    for (var i = 0; i < data.length; i++) {
      var row = data[i];
      list.push({
        timestamp: row[0],
        fullName: row[1],
        email: row[2],
        phone: row[3],
        company: row[4],
        service: row[5],
        message: row[6],
        userAgent: row[7],
        ip: row[8],
        status: row[9]
      });
    }
    return list;
  } catch (error) {
    Logger.log("ERROR in getAllConsultations: " + error.toString());
    return [];
  }
}

/**
 * Clear all consultations rows from active sheet (Reset hook)
 */
function deleteAllConsultations() {
  try {
    var sheet = setupSheet();
    var lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      sheet.deleteRows(2, lastRow - 1);
    }
    Logger.log("SUCCESS: Cleared all consultations from sheet database.");
    return { status: "Success", message: "Database cleared." };
  } catch (error) {
    Logger.log("ERROR in deleteAllConsultations: " + error.toString());
    return { status: "Error", message: error.toString() };
  }
}

// =========================================================================
// TESTING & DIAGNOSTICS
// =========================================================================

/**
 * Simulates a webhook POST request directly within Apps Script console
 */
function testDoPost() {
  var mockEvent = {
    postData: {
      contents: JSON.stringify({
        fullName: "Test Webhook User",
        email: "test_webhook@example.com",
        phone: "8888888888",
        company: "Mock Webhook Inc",
        service: "Copyright Registration",
        message: "Simulating form POST submission diagnostics inside Code.gs script environment.",
        submittedAt: new Date().toISOString(),
        userAgent: "Console Tester",
        ip: "127.0.0.1"
      })
    }
  };
  
  var response = doPost(mockEvent);
  Logger.log("Mock doPost response payload: " + response.getContent());
}
