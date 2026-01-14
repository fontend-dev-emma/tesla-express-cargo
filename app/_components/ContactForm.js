import Form from "@/app/_components/Form";

function ContactForm() {
  return (
    <section className="px-4  sm:px-16 py-20  lg:px-28 text-white/90  ">
      <div className="  bg-gradient-to-br  from-teal-800 via-teal-600 to-emerald-400 border shadow-white rounded-3xl text-center px-4 py-6 pt-10 sm:pt-16 lg:px-10  ">
        <h3
          data-aos="fade-up"
          className="text-2xl mb-2 sm:mb-4 sm:text-4xl lg:text-5xl
        lg:mb-6
        "
        >
          Contact Us Team
        </h3>
        <p data-aos="fade-up" className="text-[0.7rem] sm:text-[0.9rem] text-white/70 mb-4 lg:text-[1.1rem] lg:mb-8">
          Your business matters to us. Reach out today and let’s discuss how we can deliver reliable logistics solutions tailored to your needs.
        </p>

        <Form />
      </div>
    </section>
  );
}

export default ContactForm;
