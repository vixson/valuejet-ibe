import { cn } from "@/lib/utils";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  startIcon?: React.ReactNode;
  containerClass?: string;
  helperText?: string;
  error?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  className,
  helperText,
  error,
  containerClass,
  id,
  startIcon,
  type,
  label,
  name,
  placeholder,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col", containerClass)}>
      <label
        htmlFor={name}
        className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
      >
        {label}:
      </label>
      <div className="relative">
        {startIcon && (
          <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>{startIcon}</span>
          </div>
        )}

        <input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          className={cn(
            "text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400",
            { "pl-10": startIcon },
            { "border-destructive": error },
            className
          )}
          {...props}
        />
      </div>
      {!!helperText && (
        <p className={cn("text-xs mt-2 ml-2", { "text-destructive": error })}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default CustomInput;
