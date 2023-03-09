interface AuthInputProps {
  label: string;
  name: string;
  value: any;
  required?: boolean;
  doNotRender?: boolean;
  type?: "text" | "email" | "password";
  changeValue: (newValue: any) => void;
}

export function AuthInput({
  doNotRender,
  name,
  required,
  type,
  label,
  value,
  changeValue,
}: AuthInputProps) {
  return doNotRender ? null : (
    <div className="flex flex-col mt-6 relative">
      <input
        name={name}
        placeholder=" "
        type={type ?? "text"}
        id={label}
        value={value}
        onChange={(e) => changeValue?.(e.target.value)}
        required={required}
        className={`
          px-4 py-3 rounded-lg mt-2 font-default
          border focus:border-blue-500 bg-neutral-900
          focus:outline-none text-sm font-light
          peer
        `}
      />
       <label
        htmlFor={label}
        className="font-default
          absolute scale-75 origin-[0]
          transform duration-300 -translate-y-4
          peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-2
          peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-85
          peer-focus:px-4 peer-focus:-translate-y-4 left-4
          font-light peer-focus:bg-neutral-900
        "
      >
        {label}
      </label>
    </div>
  );
}

