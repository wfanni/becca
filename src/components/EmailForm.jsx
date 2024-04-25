import { useState } from "react";
import emailjs from "@emailjs/browser";
import SuccessEmailModal from "./SuccessEmailModal";

export default function EmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  function handleEmailSubmmit(e) {
    e.preventDefault();

    const serviceID = "service_0xjps9h";
    const templateID = "template_9sq63vf";
    const publicKey = "WK_mSWr-jo0b-aJwL";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Becca",
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setSuccess(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  }
  return (
    <div className="w-1/2 flex flex-col gap-4 justify-center items-center">
      <h1 className="text-4xl font-semibold self-center">Contact Me</h1>

      <form
        onSubmit={(e) => handleEmailSubmmit(e)}
        className="relative z-10 w-full h-fit p-8 bg-white rounded-3xl shadow-smooth flex flex-col gap-6 justify-center items-center"
      >
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Your name"
          required
          className="w-full py-2 px-4 bg-light-gray border-2 border-transparent outline-none rounded-full hover:border-red focus:border-red transition-all duration-200"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Your email"
          required
          className="w-full py-2 px-4 bg-light-gray border-2 border-transparent outline-none rounded-full hover:border-red focus:border-red transition-all duration-200"
        />
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Your message"
          rows="4"
          required
          className="w-full py-2 px-4 bg-light-gray border-2 border-transparent outline-none rounded-2xl hover:border-red focus:border-red transition-all duration-200"
        />
        <button className="w-fit py-2 px-12 bg-red rounded-full text-white font-semibold hover:bg-black hover:shadow-md transition-all duration-300" type="submit">
          Send
        </button>
      </form>
      <SuccessEmailModal isSuccess={success} setIsSuccess={setSuccess} />
    </div>
  );
}
