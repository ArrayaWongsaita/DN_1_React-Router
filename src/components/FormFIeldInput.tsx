import type { InputHTMLAttributes } from "react";

type FormFIeldInputProps = {
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function FormFIeldInput({
  label,
  error,
  ...forInput
}: FormFIeldInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={forInput.id}>{label}</label>
      <input className="border border-gray-700" type="text" {...forInput} />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
