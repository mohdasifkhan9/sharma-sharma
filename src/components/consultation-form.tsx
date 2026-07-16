"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { consultationSchema, type ConsultationInput } from "@/lib/schemas";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

const fieldCls =
  "w-full border-b border-line bg-transparent py-3 text-navy outline-none transition-colors placeholder:text-muted/60 focus:border-gold";
const labelCls = "overline text-muted";

export function ConsultationForm() {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationInput>({
    resolver: zodResolver(consultationSchema),
    defaultValues: { service: services[0] },
  });

  const onSubmit = async (data: ConsultationInput) => {
    setErrorMsg(null);
    try {
      const webhookUrl = "https://script.google.com/macros/s/AKfycby-dk4Q95MOD_u653N-kwX2kd4_32Ha7Pzz5kgGWHeD4kdkt9j_rDlOA8H9oJL14f3ElQ/exec";
      const payload = {
        fullName: data.name,
        email: data.email,
        phone: data.phone || "",
        company: data.company || "",
        service: data.service,
        message: data.message,
        submittedAt: new Date().toISOString(),
        userAgent: typeof window !== "undefined" ? navigator.userAgent : "Unknown",
        ip: "Browser Submission",
      };

      await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      reset();
      router.push("/contact/thanks");
    } catch (err) {
      setErrorMsg("Submission error. Please check your connection and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label className={labelCls}>Full Name *</label>
          <input {...register("name")} className={fieldCls} placeholder="Your name" />
          {errors.name && <p className="mt-1 text-xs text-forest">{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelCls}>Email *</label>
          <input {...register("email")} className={fieldCls} placeholder="you@company.com" />
          {errors.email && <p className="mt-1 text-xs text-forest">{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelCls}>Phone</label>
          <input {...register("phone")} className={fieldCls} placeholder="+91" />
        </div>
        <div>
          <label className={labelCls}>Company</label>
          <input {...register("company")} className={fieldCls} placeholder="Brand / Company" />
        </div>
      </div>

      <div>
        <label className={labelCls}>Area of Interest *</label>
        <select {...register("service")} className={cn(fieldCls, "appearance-none")}>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs text-forest">{errors.service.message}</p>}
      </div>

      <div>
        <label className={labelCls}>How can we help? *</label>
        <textarea
          {...register("message")}
          rows={4}
          className={cn(fieldCls, "resize-none")}
          placeholder="Tell us about your brand and what you'd like to protect."
        />
        {errors.message && <p className="mt-1 text-xs text-forest">{errors.message.message}</p>}
      </div>

      <div className="flex flex-col items-start gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-navy px-8 py-4 text-sm font-medium text-cream disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Request Consultation
              <span className="text-gold">→</span>
            </>
          )}
        </button>

        {errorMsg && (
          <p className="text-sm text-forest font-medium">{errorMsg}</p>
        )}
      </div>
    </form>
  );
}
