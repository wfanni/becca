export default function WorkWrapper({ children, content }) {
  return (
    <main className="w-full min-h-screen pb-20 flex flex-col gap-6 justify-center items-center">
      <div className={`${content.bgStyles} w-full h-screen flex flex-col gap-12 justify-center items-center`}>
        <h1 className="text-center font-semibold text-5xl">
          {content.title}
        </h1>
        <h2 className="w-1/2 text-xl text-center">{content.intro}</h2>
      </div>
      {children}
    </main>
  )
}
