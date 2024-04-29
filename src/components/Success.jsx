export default function Success() {
  return (
    <article className="w-full h-fit flex gap-12 pt-8 justify-center items-center text-4xl text-red">
      <div className="flex flex-col gap-2 jusify-center items-center">
        <i className="fa-solid fa-heart"></i>
        <label className="text-sm">[number of likes]</label>
      </div>
      <div className="flex flex-col gap-2 jusify-center items-center">
        <i className="fa-solid fa-comment"></i>
        <label className="text-sm">[number of comments]</label>
      </div>
      <div className="flex flex-col gap-2 jusify-center items-center">
        <i className="fa-solid fa-paper-plane"></i>
        <label className="text-sm">[number of shares]</label>
      </div>
    </article>
  );
}
