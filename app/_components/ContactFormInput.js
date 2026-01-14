function ContactFormInput({ label, placeholder, type = "text", name }) {
  return (
    <div className="text-start">
      <label htmlFor={name} className="block text-[0.75rem] sm:text-[0.9rem] mb-2 md:text[0.95rem] lg:text-[1.1rem]">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`p-2 sm:p-3 text-[0.75rem] text-gray-700 sm:text-[0.85rem] border shadow-white bg-primary-100 rounded-lg w-full focus:outline-none md:text-[1rem] lg:text-[1.2rem] ${
          type === "file" ? "md:text-[1rem] md:px-4 lg:px-8 lg:text-[1.2rem]" : ""
        }`}
        required
      />
    </div>
  );
}

export default ContactFormInput;
