import Services from "./Services";


export default function Features() {
  return (
    <section className="w-full h-fit py-8 pb-16 bg-green/60 text-black flex flex-col gap-12">
        <h1 className="text-4xl text-center">My Services</h1>
      <Services />
      <hr className="w-4/5 mx-auto h-0 border-t-2 border-red"/>
      <article className="flex flex-col gap-8 justify-center items-center">
        <h2 className="text-2xl">Managing content for</h2>
        <div className="flex gap-12 justify-center items-center text-5xl">
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
