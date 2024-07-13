function Button({
  children,
  type = "button",
  size = "md",
  color = "orange",
  ...rest
}) {
  const fontSize = {
    sm: "py-1 px-4 text-sm",
    md: "py-1 px-4 text-base",
    lg: "py-2 px-6 text-lg",
  };

  const bgColor = {
    gray: `bg-gray-900`,
    orange: "bg-orange-500",
    red: "bg-red-500",
  };

  return (
    <button
      type={type}
      className={`${bgColor[color]} ${fontSize[size]} text-white font-semibold ml-2 hover:bg-amber-400 rounded`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
