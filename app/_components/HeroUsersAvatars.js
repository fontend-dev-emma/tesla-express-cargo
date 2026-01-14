import A from "@/assets/testimonial-1.png";
import B from "@/assets/testimonial-2.png";
import C from "@/assets/testimonial-3.png";
import D from "@/assets/testimonial-4.png";
import Image from "next/image";

function HeroUsersAvatars() {
  const images = [A, B, C, D];

  return (
    <div className="flex items-center">
      {images.map((img, index) => (
        <div key={index} className={`rounded-full border-2 border-white ${index === 0 ? "-ml-0" : "-ml-2"}`}>
          <Image src={img} width={30} height={30} className="rounded-full   border-1 border-white" alt="image of  User" />
        </div>
      ))}
    </div>
  );
}

export default HeroUsersAvatars;
