import sos from "../assets/sos.png";

export default function Work({ children, content }) {
  return (
    <section className={`w-full min-h-screen flex flex-col gap-6 justify-center items-center ${content.works[0].bgStyles}`}>
      <article className="w-4/5 min-h-screen flex flex-col gap-4 ">
        <div className="flex gap-6 items-center">
          {content.title === "Social Media" ? <img className="w-20" src={content.logo} /> : content.title === "Webdesign" ? <i className={`w-12 text-4xl text-red ${content.logo}`}></i> : null}
          <h1 className="text-3xl font-semibold">
            {content.works[0].title}
          </h1>
        </div>
        <p className="w-1/2">{content.works[0].intro}</p>
        {children}
      </article>
    </section>
  );
}
