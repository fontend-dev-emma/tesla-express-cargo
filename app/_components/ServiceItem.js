import { ArrowUpRight } from "lucide-react";

function ServiceItem({ children, Icon, heading }) {
  return (
    <div data-aos="fade-up" className=" group p-4 m-8 hero hover:bg-primary-950 rounded-xl hover:text-primary-100 shadow">
      <div className="flex justify-between mb-20">
        <span className="bg-black/5 p-2 hover:bg-primary-100 rounded-full group-hover:bg-primary-100 ">
          {Icon && <Icon className=" items-center group-hover:text-primary-950 h-5 sm:h-7 sm:w-7 w-5  stroke-[1]  " />}
        </span>
        <span>
          <ArrowUpRight className="h-5 w-5 stroke-[2] items-center sm:h-7 sm:w-7 " />
        </span>
      </div>

      <h3 className="text-xl xl:text-2xl font-bold mb-3 xl:mb-5">{heading}</h3>

      <p className="text-[0.7rem] sm:text-[0.8rem] text-primary-600 group-hover:text-primary-50">{children}</p>
    </div>
  );
}

export default ServiceItem;
