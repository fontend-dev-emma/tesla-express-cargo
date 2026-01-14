import Image from "next/image";
import Link from "next/link";

function ServiceCard({ img, freight, children, Icon, hrefPath }) {
  return (
    <div
      data-aos="fade-up"
      className="p-3 bg-primary-100 shadow rounded-xl md:p-4 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
    >
      <div href={hrefPath}>
        <Link href={hrefPath}>
          <Image src={img} width={500} height={500} alt={`Photo of ${freight}`} className="rounded-xl" />
        </Link>
      </div>
      <p className="my-3 text-[1.3rem] font-extrabold ">{freight}</p>
      <div className="flex items-center gap-3">
        <p className="text-[0.7rem] md:text-[0.75rem] text-primary-600 ">{children}</p>
        <span className="bg-primary-950 p-2 md:p-3 rounded-full justify-center items-center">
          <Link href={hrefPath}>
            <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary-50 " />
          </Link>
        </span>
      </div>
    </div>
  );
}

export default ServiceCard;
