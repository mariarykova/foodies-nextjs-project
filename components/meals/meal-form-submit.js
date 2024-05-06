"use client";

import { useFormStatus } from "react-dom";

export default function MealFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disable={pending} type="submit">
      {pending ? "Sumbitting..." : "Share meal"}
    </button>
  );
}
