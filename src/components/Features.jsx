import Services from "./Services";

export default function Features() {
  return (
    <section className="w-full h-fit py-8 pb-16 bg-white text-black flex flex-col gap-12">
      <Services />
      <article className="flex flex-col gap-8 justify-center items-center">
        <h2 className="text-2xl">Managing content for</h2>
        <div className="flex gap-12 justify-center items-center text-5xl text-red">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-tiktok"></i>
          <i className="fa-brands fa-pinterest-p"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-viber"></i>
        </div>
      </article>
    </section>
  );
}
