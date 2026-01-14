"use client";

import { useState } from "react";
import ContactFormInput from "./ContactFormInput";
import toast from "react-hot-toast";
import { createServiceRequest } from "../_lib/actions";
import { MiniSpinner } from "./MiniSpinner";

function Form() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const visitorName = formData.get("name");
    const visitorEmail = formData.get("email");
    const visitorPhone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const newFormData = {
      visitorName,
      visitorEmail,
      visitorPhone,
      subject,
      message,
    };

    try {
      setIsLoading(true);

      await createServiceRequest(newFormData);

      await fetch("/api/service-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFormData),
      });

      toast.success("Message sent!");
      e.target.reset();
    } catch (err) {
      toast.error("Failed to send. Try again!");
    }
    setIsLoading(false);
  }

  return (
    <form
      data-aos="zoom-in"
      className="flex flex-col gap-3 px-4 sm:px-6 sm:mx-10 rounded-2xl py-6 bg-white/15 text-white/75 border shadow-white  lg:px-8 lg:py-10  "
      onSubmit={handleSubmit}
    >
      <div className=" lg:grid lg:grid-cols-2 lg:gap-5 ">
        <ContactFormInput label="Name*" placeholder="Enter your email" type="text" name="name" />

        <ContactFormInput label="Email*" placeholder="Enter your email" name="email" type="email" />

        <ContactFormInput label="Phone Number*" placeholder="Enter your phone number" type="text" name="phone" />

        <ContactFormInput label="Subject / Reason*" placeholder="Reason for contacting" type="text" name="subject" />

        <div className="text-start">
          <label className="block text-[0.85rem] mb-2 sm:text-[1rem] lg:text-[1.1rem]">Message*</label>
          <textarea
            name="message"
            className="p-2 sm:p-5 text-gray-700  text-[0.75rem] sm:text-[0.9rem] border shadow-white bg-primary-100 rounded-lg w-full focus:outline-none lg:text-[1.1rem]"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-accent-600  transition-colors duration-300 ease-in-out 
               hover:bg-accent-700 mt-4 sm:mt-4 text-[0.8rem] sm:text-[0.95rem] text-primary-50
       px-6 py-2 sm:py-2  rounded-full lg:mt-8 lg:px-10 lg:text-[1rem] col-span-2"
        >
          {isLoading ? <MiniSpinner /> : "Submit Now"}
        </button>
      </div>
    </form>
  );
}

export default Form;
