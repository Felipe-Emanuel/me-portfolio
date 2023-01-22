interface AuthInputProps {
  label: string;
  value: any;
  required?: boolean;
  doNotRender?: boolean;
  type?: "text" | "email" | "password";
  changeValue: (newValue: any) => void;
}

export function AuthInput({
  doNotRender,
  required,
  type,
  label,
  value,
  changeValue,
}: AuthInputProps) {
  return doNotRender ? null : (
    <div className="flex flex-col mt-4">
      <label>{label}</label>
      <input
        type={type ?? "text"}
        value={value}
        onChange={(e) => changeValue?.(e.target.value)}
        required={required}
        className={`
            px-4 py-3 rounded-lg bg-gray-200 mt-2
            border focus:border-blue-500 focus:bg-white
            focus:outline-none
        `}
      />
    </div>
  );
}
