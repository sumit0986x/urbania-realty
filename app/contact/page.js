
import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";
import Banner from "@/components/ui/Banner";

export default function Contact() {
    const dummyContact = [
    {
      id: 1,
      title: "Office Address",
      subtitle: "",
      description:`501, Vastu Precinct, Atchuytrao Patwardhan Marg, Lokhandwala Complex, Andheri (West), Mumbai 400 053.`,
      icon: "/icon/location.svg",
      alt:"location",
    },
    {
      id: 2,
      title: "Phone Number",
      subtitle: "+91 9930 55 9000",
      description:``,
      icon: "/icon/phone.svg",
      alt:"phone",

    },
            {
      id: 3,
      title: "Email ID",
      subtitle: "info@urbaniarealty.in",
description:``,
      icon: "/icon/email.svg",
      alt:"email",

    },
    {
      id: 4,
      title: "Send Enquiry on",
      subtitle: "Whatsapp",
description:``,
      icon: "/icon/whatsapp.svg",
      alt:"whatsapp",

    },

  ];
  return (
    <>
      <Banner
        title="Contact us"
        description="Explore ideas and inspirations driving premium living experiences."
        backgroundImage="/banner/contact.png"
      />
      <ContactForm/>
      <ContactCard contactdata={dummyContact}/>

      <div className="w-full h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16988.35575264885!2d72.82102261980603!3d19.139402369639633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b618f9fb64ed%3A0x27c2298d58a9bb9d!2sURBANIA%20REALTY%20LLP%20-%20Real%20Estate%20Company!5e0!3m2!1sen!2sin!4v1758695301814!5m2!1sen!2sin"
          width="100%"
          height="550"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="container mx-auto py-40 bg-[#fff6e3]">
        <h2 className="w-full md:w-[60%] mx-auto text-center">
          Every detail speaks elegance. Let’s help you make it yours.
        </h2>
      </div>
    </>
  );
}
