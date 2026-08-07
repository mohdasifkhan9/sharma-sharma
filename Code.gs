/**
 * Sharma & Sharma Intellectual Property Law
 * Google Apps Script - Auto-Create Sheet on Run
 * 
 * 🚀 Just click RUN and everything is set up automatically!
 */

// =========================================================================
// CONFIGURATION
// =========================================================================
const CONFIG = {
  SHEET_ID: "12w5EZOsJnbk7ISaR32f99NyILbo5VfgDYgFObQaDM2Y",
  SHEET_NAME: "Consultation Requests",
  FIRM_NAME: "Sharma & Sharma Intellectual Property Law",
  WEBSITE_URL: "https://ipmark.in",
  NOTIFICATION_EMAIL: "info@ipmark.in",
  OFFICE_ADDRESS: "466, Western Wing,\nTis Hazari Courts,\nDelhi 110006,\nIndia",
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
// 🚀 RUN THIS FUNCTION - ONE CLICK SETUP
// =========================================================================

/**
 * 🚀 RUN THIS FUNCTION - Click the Run button ▶
 * This will automatically:
 * 1. Create the sheet if it doesn't exist
 * 2. Set up all headers
 * 3. Format the sheet beautifully
 * 4. Add a test entry
 * 5. Show you the sheet link
 */
function runSetup() {
  try {
    console.log("🚀 Starting automatic setup...");
    
    // Step 1: Get or create sheet
    console.log("📊 Creating/checking sheet...");
    var sheet = getOrCreateSheet();
    
    // Step 2: Clear and set headers
    console.log("📋 Setting up headers...");
    setupHeaders(sheet);
    
    // Step 3: Format the sheet
    console.log("🎨 Formatting sheet...");
    formatSheet(sheet);
    
    // Step 4: Add test data
    console.log("🧪 Adding test entry...");
    addTestData(sheet);
    
    // Step 5: Show success
    console.log("✅ SETUP COMPLETE!");
    console.log("📊 View your sheet: https://docs.google.com/spreadsheets/d/" + CONFIG.SHEET_ID);
    
    return "✅ Setup completed successfully! Check your Google Sheet.";
    
  } catch (error) {
    console.error("❌ Setup failed:", error.message);
    return "❌ Setup failed: " + error.message;
  }
}

// =========================================================================
// SHEET FUNCTIONS
// =========================================================================

/**
 * Gets or creates the sheet
 */
function getOrCreateSheet() {
  var ss = SpreadsheetApp.openById(CONFIG.SHEET_ID);
  var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    console.log("✅ New sheet created: " + CONFIG.SHEET_NAME);
  } else {
    console.log("✅ Sheet already exists: " + CONFIG.SHEET_NAME);
  }
  
  return sheet;
}

/**
 * Sets up headers
 */
function setupHeaders(sheet) {
  // Clear existing data
  sheet.clear();
  
  // Set headers
  sheet.getRange(1, 1, 1, CONFIG.HEADERS.length).setValues([CONFIG.HEADERS]);
  
  // Format headers
  var headerRange = sheet.getRange(1, 1, 1, CONFIG.HEADERS.length);
  headerRange.setFontWeight("bold");
  headerRange.setBackground("#16213A");
  headerRange.setFontColor("#FFFFFF");
  headerRange.setHorizontalAlignment("center");
  headerRange.setFontSize(11);
  
  // Freeze header row
  sheet.setFrozenRows(1);
  
  console.log("✅ Headers set up");
}

/**
 * Formats the sheet
 */
function formatSheet(sheet) {
  // Set column widths
  var widths = [160, 150, 180, 120, 150, 160, 280, 150, 110, 100];
  for (var i = 0; i < widths.length; i++) {
    sheet.setColumnWidth(i + 1, widths[i]);
  }
  
  // Add borders
  var lastColumn = CONFIG.HEADERS.length;
  sheet.getRange(1, 1, 500, lastColumn).setBorder(
    true, true, true, true, true, true,
    "#E8E2D8",
    SpreadsheetApp.BorderStyle.SOLID
  );
  
  console.log("✅ Sheet formatted");
}

/**
 * Adds test data
 */
function addTestData(sheet) {
  var testData = [
    formatTimestamp(new Date()),
    "Test - Setup Complete",
    "test@example.com",
    "9999999999",
    "Test Company",
    "Trademark Registration",
    "This is a test entry created during setup.",
    "Setup Script",
    "127.0.0.1",
    "Test Entry"
  ];
  sheet.appendRow(testData);
  console.log("✅ Test entry added");
}

// =========================================================================
// MAIN HANDLERS (For Form Submissions)
// =========================================================================

function doPost(e) {
  try {
    // Parse incoming data
    var rawData = e.postData ? e.postData.contents : null;
    if (!rawData) {
      return createResponse(400, "Empty payload received.");
    }

    var data = JSON.parse(rawData);
    console.log("📝 Received: " + data.email);

    // Get or create sheet
    var sheet = getOrCreateSheet();
    
    // Validate
    var validation = validateRequest(data);
    if (!validation.isValid) {
      return createResponse(422, validation.message, validation.errors);
    }

    // Sanitize
    var sanitized = {
      fullName: sanitize(data.fullName),
      email: data.email.trim().toLowerCase(),
      phone: sanitize(data.phone),
      company: sanitize(data.company || "N/A"),
      service: sanitize(data.service || "General Consultation"),
      message: sanitize(data.message || "No additional details provided."),
      submittedAt: data.submittedAt ? new Date(data.submittedAt) : new Date(),
      userAgent: data.userAgent || "Unknown",
      ip: data.ip || "Unknown"
    };

    // Save to sheet
    saveSubmission(sanitized, sheet);

    // Send emails
    try {
      sendNotificationEmail(sanitized);
      sendAutoReply(sanitized);
    } catch (emailErr) {
      console.log("⚠️ Email error: " + emailErr.toString());
    }

    return createResponse(200, "Enquiry received successfully.");

  } catch (error) {
    console.log("❌ ERROR: " + error.toString());
    return createResponse(500, "Internal Server Error.", { error: error.toString() });
  }
}

function doGet(e) {
  return createResponse(200, "Service is active.", {
    status: "running",
    sheet: CONFIG.SHEET_NAME
  });
}

function doOptions() {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}

// =========================================================================
// VALIDATION
// =========================================================================

function validateRequest(data) {
  var errors = {};

  if (!data) {
    return { isValid: false, message: "Empty payload", errors: { general: "No data" } };
  }

  var required = ["fullName", "email", "phone"];
  for (var i = 0; i < required.length; i++) {
    var field = required[i];
    if (!data[field] || String(data[field]).trim() === "") {
      errors[field] = field + " is required";
    }
  }

  if (data.email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(data.email).trim())) {
      errors.email = "Invalid email format";
    }
  }

  if (Object.keys(errors).length > 0) {
    return { isValid: false, message: "Validation failed", errors: errors };
  }

  return { isValid: true };
}

function sanitize(str) {
  if (!str) return "";
  return String(str).trim();
}

// =========================================================================
// SAVE TO SHEET
// =========================================================================

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
  console.log("✅ Saved: " + data.email);
}

// =========================================================================
// EMAIL FUNCTIONS
// =========================================================================

function sendNotificationEmail(data) {
  var subject = "🆕 New Consultation Request | Sharma & Sharma";
  
  var html = `
    <h2>New Consultation Request</h2>
    <table style="width:100%; border-collapse:collapse;">
      <tr><td style="padding:8px; background:#f5f5f5; font-weight:bold;">Name</td><td style="padding:8px;">${data.fullName}</td></tr>
      <tr><td style="padding:8px; background:#f5f5f5; font-weight:bold;">Email</td><td style="padding:8px;">${data.email}</td></tr>
      <tr><td style="padding:8px; background:#f5f5f5; font-weight:bold;">Phone</td><td style="padding:8px;">${data.phone}</td></tr>
      <tr><td style="padding:8px; background:#f5f5f5; font-weight:bold;">Company</td><td style="padding:8px;">${data.company}</td></tr>
      <tr><td style="padding:8px; background:#f5f5f5; font-weight:bold;">Service</td><td style="padding:8px;">${data.service}</td></tr>
      <tr><td style="padding:8px; background:#f5f5f5; font-weight:bold;">Message</td><td style="padding:8px;">${data.message}</td></tr>
    </table>
  `;

  MailApp.sendEmail({
    to: CONFIG.NOTIFICATION_EMAIL,
    subject: subject,
    htmlBody: html,
    replyTo: data.email
  });
}

function sendAutoReply(data) {
  var subject = "We've received your consultation request | Sharma & Sharma";

  var html = `
    <p>Dear ${data.fullName},</p>
    <p>Thank you for contacting <strong>Sharma & Sharma Intellectual Property Law</strong>.</p>
    <p>We have received your consultation request regarding <strong>${data.service}</strong>.</p>
    <p>Our IP counsel will review your enquiry and respond within one business day.</p>
    <hr>
    <p style="font-size:12px; color:#666;">
      <strong>Sharma & Sharma</strong><br>
      ${CONFIG.OFFICE_ADDRESS.replace(/\n/g, "<br>")}<br>
      <a href="mailto:${CONFIG.NOTIFICATION_EMAIL}">${CONFIG.NOTIFICATION_EMAIL}</a><br>
      <a href="${CONFIG.WEBSITE_URL}">${CONFIG.WEBSITE_URL}</a>
    </p>
  `;

  MailApp.sendEmail({
    to: data.email,
    subject: subject,
    htmlBody: html
  });
}

// =========================================================================
// UTILITIES
// =========================================================================

function formatTimestamp(date) {
  return Utilities.formatDate(
    date,
    Session.getScriptTimeZone(),
    "dd MMM yyyy, hh:mm a"
  );
}

function createResponse(statusCode, message, details) {
  var response = {
    status: statusCode === 200 ? "success" : "error",
    code: statusCode,
    message: message
  };
  if (details) {
    response.details = details;
  }
  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

// =========================================================================
// TESTING
// =========================================================================

function testDoPost() {
  var mock = {
    postData: {
      contents: JSON.stringify({
        fullName: "Test Client",
        email: "test@example.com",
        phone: "9999999999",
        company: "Test Corp",
        service: "Trademark Registration",
        message: "This is a test submission.",
        submittedAt: new Date().toISOString(),
        userAgent: "Test Runner",
        ip: "127.0.0.1"
      })
    }
  };
  var response = doPost(mock);
  console.log(response.getContent());
  return response.getContent();
}
