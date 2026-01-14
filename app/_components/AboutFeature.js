function AboutFeature({ colored, heading, children, Icon }) {
  return (
    <div className="duration-300 ease-in-out hover:scale-105">
      <div className={`px-5 py-6 m-4 bg-white/55 ${colored ? "hero" : ""}  shadow rounded-3xl`}>
        <p className={`mb-12 p-3 bg-primary-100 rounded-full items-center justify-center w-fit ${colored ? "bg-primary-900" : ""}`}>
          <Icon className={`h-7 w-7 ${colored ? "text-accent-400" : ""}`} />
        </p>

        <div>
          <h3 className="text-[1.4rem] font-bold mb-3">{heading}</h3>
          <p className={`text-[0.7rem] text-primary-600 ${colored ? "text-primary-950" : ""}`}>{children}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutFeature;
