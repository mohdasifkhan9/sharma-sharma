"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { consultationSchema, type ConsultationInput } from "@/lib/schemas";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

const fieldCls =
  "w-full border-b border-line bg-transparent py-3 text-navy outline-none transition-colors placeholder:text-muted/60 focus:border-gold";
const labelCls = "overline text-muted";

export function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
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
    const res = await fetch("/api/consultation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setStatus("success");
      reset();
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-4 rounded-[4px] border border-gold/40 bg-paper p-10"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-cream">
          <Check className="h-5 w-5" />
        </span>
        <h3 className="font-serif text-3xl text-navy">Thank you.</h3>
        <p className="max-w-sm text-[15px] leading-relaxed text-muted">
          Your consultation request has been received. A senior counsel will be in
          touch within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="link-underline text-sm text-navy"
        >
          Submit another request
        </button>
      </motion.div>
    );
  }

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
    </form>
  );
}
