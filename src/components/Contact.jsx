import ContactSocials from "./ContactSocials";
import EmailForm from "./EmailForm";
import hashtag from "../assets/hashtag.jpg";



export default function Contact() {
  return (
    <section className="w-full min-h-screen pt-20 bg-contact bg-cover flex flex-col gap-12 justify-center items-start">
      <div className="relative w-4/5 mx-auto flex justify-start items-center">
        <EmailForm />
        <ContactSocials />
      </div>
    </section>
  );
}
