function RoutesPath({ route, Icon, children, heading }) {
  return (
    <div
      data-aos="zoom-out"
      className="group p-4 lg:p-5 m-8 border-2 
      rounded-xl bg-black/5  transform transition duration-300 hover:scale-110"
    >
      <div className="flex justify-between mb-8">
        <span className="bg-black/5 p-3  rounded-full  ">
          {Icon && <Icon className=" items-center group-hover:text-primary-950 h-5 sm:h-7 sm:w-7 w-5  stroke-[1] lg:h-10 lg:w-10  " />}
        </span>
        <span className="text-4xl lg:text-5xl font-bold text-primary-300 ">{route}</span>
      </div>

      <h3 className="text-xl font-bold mb-3">{heading}</h3>
      <p className="text-[0.78rem] text-primary-600 sm:text-[0.92rem]">{children}</p>
    </div>
  );
}

export default RoutesPath;
