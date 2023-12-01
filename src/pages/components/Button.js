export default function Button({
  children,
  variant,
  className,
  width = "w-full ",
  height="45px",
  padding = "px-4 py-2",
  ...rest
}) {
  if (variant === "contained")
    return (
      <button
        {...rest}
        className={`${className} ${width} ${padding} ${height}  bg-redPrimary disabled:bg-[#EEEEEE] disabled:text-lightGrayText text-body1 hover:bg-redSecondary text-white rounded-md`}
      >
        {children}
      </button>
    );
  if (variant === "outlined")
    return (
      <button
        {...rest}
        className={`${className} ${width} ${padding} ${height}  border border-grayLine text-body1 bg-white hover:bg-defaultBg text-darkText rounded-md `}
      >
        {children}
      </button>
    );
  if (variant === "outlined_red")
    return (
      <button
        {...rest}
        className={`${className} ${width} ${padding} ${height}  border border-redPrimary text-redPrimary text-body1 bg-white hover:bg-defaultBg  rounded-md `}
      >
        {children}
      </button>
    );
}
