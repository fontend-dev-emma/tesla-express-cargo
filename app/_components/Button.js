function Button({ onClick, children, textColor, bgColor, size, hover }) {
  const buttonSizes = {
    small: `text-sm text-center px-16 py-2 `,
    medium: `text-[1.4rem] py-5 px-6 `,
    large: ` text-xs sm:text-base py-2 w-full max-w-2xl`,
  };

  return (
    <button
      data-aos="fade-up"
      onClick={onClick}
      className={`${bgColor} ${textColor} ${buttonSizes[size]} ${hover}  rounded-full transition-all ring-2 ring-white/5 text-center sm:py-3 `}
    >
      <span className="sm:text-[1rem]">{children}</span>
    </button>
  );
}

export default Button;
