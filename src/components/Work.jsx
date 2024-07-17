export default function Work({ children, content }) {
  return (
    <>
      {content.works.map((work) => (
          <section
            key={work.name}
            className={`w-full min-h-screen mb-8 flex flex-col gap-6 justify-center items-center ${work.bgStyles} only:mb-0`}
          >
            <article className="w-4/5 min-h-screen flex flex-col gap-4 ">
              <div className="flex gap-6 items-center">
                {work.hasLogo ? (
                  <img className="w-20" src={work.logo} />
                ) : (
                  <i className={`w-12 text-4xl text-red ${work.logo}`}></i>
                )}
                <h1 className="text-3xl font-semibold">{work.title}</h1>
              </div>
              <p className="w-1/2">{work.intro}</p>
              {children}
            </article>
          </section>
        ))}
    </>
  );
}
