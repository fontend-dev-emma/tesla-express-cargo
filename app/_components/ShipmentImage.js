import Image from "next/image";

function ShipmentImage({ imageUrl, alt }) {
  return (
    <div className="flex justify-center w-full">
      <Image
        src={imageUrl}
        alt={alt}
        width={300}
        height={200}
        className="rounded-md object-contain w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[500px]"
      />
    </div>
  );
}

export default ShipmentImage;
