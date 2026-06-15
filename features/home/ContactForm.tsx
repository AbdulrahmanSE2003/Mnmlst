"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

// 1. Correct schema definition
const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters.").trim(),
  email: z.string().email("Invalid email address."),
  idea: z
    .string()
    .min(10, "Please describe your idea more clearly. (10 characters min"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const { handleSubmit, control } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", idea: "" },
  });

  async function onSubmit(data: FormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-foreground max-sm:w-full text-background rounded-xl p-5 w-[42.5%]"
    >
      <FieldGroup>
        <FieldSet>
          <FieldGroup>
            {/* Name */}
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  className="space-y-1.5"
                >
                  <FieldLabel htmlFor="name">Full name</FieldLabel>
                  <Input {...field} id="name" placeholder="Pedro Lopez" />
                  {/* 2. Fix: Pass error message string instead of object */}
                  {fieldState.error && (
                    <FieldError>{fieldState.error.message}</FieldError>
                  )}
                </Field>
              )}
            />
            {/* Email */}
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  className="space-y-1.5"
                >
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    placeholder="someone@example.com"
                  />
                  {fieldState.error && (
                    <FieldError>{fieldState.error.message}</FieldError>
                  )}
                </Field>
              )}
            />
            {/* Idea */}
            <Controller
              name="idea"
              control={control}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  className="space-y-1.5"
                >
                  <FieldLabel htmlFor="idea">Your Idea</FieldLabel>
                  <Textarea
                    {...field}
                    id="idea"
                    placeholder="Tell me about your project"
                  />
                  {fieldState.error && (
                    <FieldError>{fieldState.error.message}</FieldError>
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </FieldSet>
        <Button
          type="submit"
          variant="secondary"
          disabled={status === "loading" || status === "success"}
          className="py-6 text-md font-medium w-full"
        >
          {status === "loading" && "Sending..."}
          {status === "success" && "Message sent ✓"}
          {status === "error" && "Failed — try again"}
          {status === "idle" && "Send"}
        </Button>
      </FieldGroup>
    </form>
  );
};

export default ContactForm;
