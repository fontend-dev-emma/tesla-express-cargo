function Icon({ Icon, color = false }) {
  return (
    <span className={`bg-primary-100 shadow  p-2 sm:p-4 rounded-full ${color ? "bg-teal-500 scale-125" : ""}`}>
      <Icon className={`w-6 h-6 sm:w-10 sm:h-10  text-teal-700 ${color ? " scale-125 " : ""}`}></Icon>
    </span>
  );
}

export default Icon;
