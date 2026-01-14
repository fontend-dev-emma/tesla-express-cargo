import Image from "next/image";

function AwardeeCard({ name, description, img, title }) {
  return (
    <div className="bg-black/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#007F73]"></div>
        <Image
          src={img}
          alt="BMW X3"
          width={500}
          height={500}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="inline-block px-3 py-1 bg-[#007F73] bg-opacity-10 text-[#007F73] text-xs sm:text-sm font-medium rounded-full mb-3">
          {title}
        </div>
        <p className="text-sm sm:text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default AwardeeCard;
