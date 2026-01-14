import ContactForm from "../_components/ContactForm";
import ContactSection from "../_components/ContactSection";

export const metadata = {
  title: "Contact Us | Tesla Express Cargo",
  description:
    "Reach out to Tesla Express Cargo Support Team for shipping inquiries, delivery support, and tracking assistance. Our team is ready to help.",
};

function page() {
  return (
    <div>
      <ContactSection />

      <ContactForm />
    </div>
  );
}

export default page;
