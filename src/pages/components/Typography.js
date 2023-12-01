export default function Typography({
  children,
  variant,
  className,
  color = "text-darkText",
  ...rest
}) {
  if (variant === "h5") {
    return (
      <div {...rest} className={`${className} ${color} text-h5`}>
        {children}
      </div>
    );
  }
  if (variant === "h6") {
    return (
      <div {...rest} className={`${className} ${color} text-h6`}>
        {children}
      </div>
    );
  }
  if (variant === "sub_bold") {
    return (
      <div
        {...rest}
        className={`${className}  ${color} sm:text-[18px] text-[14px]  font-bold leading-[27px] `}
      >
        {children}
      </div>
    );
  }
  if (variant === "sub1") {
    return (
      <div {...rest} className={`${className}  ${color} text-sub1 `}>
        {children}
      </div>
    );
  }
  if (variant === "sub2") {
    return (
      <div {...rest} className={`${className}  ${color} text-sub2 `}>
        {children}
      </div>
    );
  }
  if (variant === "body1") {
    return (
      <div
        {...rest}
        className={`${className}  ${color} sm:text-body1  text-body2`}
      >
        {children}
      </div>
    );
  }
  if (variant === "body2") {
    return (
      <p {...rest} className={`${className}  ${color} text-body2 `}>
        {children}
      </p>
    );
  }
}
