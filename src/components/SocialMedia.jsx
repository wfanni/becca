import lia from "../assets/lia.png";
import nora from "../assets/nora.png";
import lilla from "../assets/lilla.png";
import fanni from "../assets/fanni.png";
import noemi from "../assets/noemi.png";
import Work from "./Work";
import WorkWrapper from "./WorkWrapper";




export default function SocialMedia({ content }) {
  return (
    <WorkWrapper content={content} >
      <Work content={content} >
        <article className="flex flex-col gap-6 justify-center items-start">
          <h3 className="text-2xl font-playfair font-semibold">Total Reach:</h3>
          <div className="flex gap-48 justiy-center items-center">
            <div className="relative w-fit p-4 flex flex-col justify-center items-center gap-4 after:content-[''] after:absolute after:top-[2.2rem] after:left-[110%] after:w-[125%] after:border-t-2">
              <span className="text-3xl">2022</span>
              <label className="-mt-4 text-4xl text-red font-semibold">
                905,1K
              </label>
              <label className="flex gap-4 text-lg items-center">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-tiktok"></i>
              </label>
            </div>
            <div className="relative w-fit p-4 flex flex-col justify-center items-center gap-4">
              <span className="text-3xl">2023</span>
              <label className="-mt-4 text-4xl text-red text-2xl font-semibold">
                1 689,5K
              </label>
              <label className="flex gap-4 text-lg items-center">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook-f"></i>
              </label>
            </div>
          </div>
        </article>
        <article className="flex flex-col gap-6 justify-center items-start">
          <h3 className="text-xl">
            Inluencers and well-knows Hungarian personalities I collaborated
            with:
          </h3>
          <div className="flex justify-center items-center gap-12">
            <div className="flex flex-col gap-2 justify-center items-center">
              <img className="w-36" src={lia} />
              <label className="font-semibold">Pokorny Lia</label>
              <span>actress</span>
              <a href="">Link to post</a>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <img className="w-36" src={nora} />
              <label className="font-semibold">Ördög Nóra</label>
              <span>TV presenter | journalist</span>
              <a href="">Link to post</a>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <img className="w-36" src={lilla} />
              <label className="font-semibold">Polyák Lilla</label>
              <span>actress | singer</span>
              <a href="">Link to post</a>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <img className="w-36" src={fanni} />
              <label className="font-semibold">Weisz Fanni</label>
              <span>model</span>
              <a href="">Link to post</a>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <img className="w-36" src={noemi} />
              <label className="font-semibold">Pásztor Noémi</label>
              <span>handball player</span>
              <a href="">Link to post</a>
            </div>
          </div>
        </article>
      </Work>
    </WorkWrapper>
  );
}
