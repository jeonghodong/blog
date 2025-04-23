import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "solid" | "outline" | "ghost";
  color?: "primary" | "secondary" | "success" | "danger" | "warning";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, size = "md", variant = "solid", color = "primary", disabled = false, fullWidth = false, className = "", type = "button", leftIcon, rightIcon, isLoading = false, onClick, ...props }: ButtonProps) => {
  // Base styles
  const baseStyles = "font-medium rounded transition-all duration-200 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

  // Size variations
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-4 py-2 text-base gap-2",
    lg: "px-6 py-2.5 text-lg gap-2.5",
    xl: "px-8 py-3 text-xl gap-3",
  };

  // Color variations for different variants
  const colorStyles = {
    solid: {
      primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
      secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
      success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
      danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
      warning: "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400",
    },
    outline: {
      primary: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
      secondary: "border-2 border-gray-600 text-gray-600 hover:bg-gray-50 focus:ring-gray-500",
      success: "border-2 border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500",
      danger: "border-2 border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-500",
      warning: "border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 focus:ring-yellow-400",
    },
    ghost: {
      primary: "text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
      secondary: "text-gray-600 hover:bg-gray-50 focus:ring-gray-500",
      success: "text-green-600 hover:bg-green-50 focus:ring-green-500",
      danger: "text-red-600 hover:bg-red-50 focus:ring-red-500",
      warning: "text-yellow-600 hover:bg-yellow-50 focus:ring-yellow-400",
    },
  };

  // Loading animation
  const LoadingSpinner = () => (
    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );

  // Full width style
  const fullWidthStyle = "w-full";

  // Combine all styles
  const buttonStyles = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${colorStyles[variant][color]}
    ${fullWidth ? fullWidthStyle : ""}
    ${className}
  `;

  return (
    <button className={buttonStyles} onClick={onClick} disabled={disabled || isLoading} type={type} {...props}>
      {isLoading && <LoadingSpinner />}
      {!isLoading && leftIcon}
      {children}
      {!isLoading && rightIcon}
    </button>
  );
};

export default Button;
