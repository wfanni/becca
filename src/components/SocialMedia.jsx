import lia from "../assets/influencers/lia.png";
import nora from "../assets/influencers/nora.png";
import lilla from "../assets/influencers/lilla.png";
import fanni from "../assets/influencers/fanni.png";
import noemi from "../assets/influencers/noemi.png";
import tejmadar from '../assets/reels/tejmadar.png';
import donuterie from '../assets/reels/donuterie.png';
import dolcissima from '../assets/reels/dolcissima.png';
import WorkWrapper from "./WorkWrapper";

export default function SocialMedia({ content }) {
  return (
    <WorkWrapper content={content}>
      <section
        className={`w-full min-h-screen mb-8 flex flex-col gap-6 justify-center items-center ${content.works[0].bgStyles} only:mb-0`}
      >
        <article className="w-4/5 min-h-screen flex flex-col gap-4 ">
          <div className="flex gap-6 items-center">
            {content.works[0].hasLogo ? (
              <img className="w-20" src={content.works[0].logo} />
            ) : (
              <i
                className={`w-12 text-4xl text-red ${content.works[0].logo}`}
              ></i>
            )}
            <h1 className="text-3xl font-semibold">{content.works[0].title}</h1>
          </div>
          <p className="w-1/2">{content.works[0].intro}</p>
          <article className="flex flex-col gap-6 justify-center items-start">
            <h3 className="text-2xl font-playfair font-semibold">
              Total Reach:
            </h3>
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
              Influencers and well-known Hungarian personalities I collaborated
              with:
            </h3>
            <div className="flex justify-center items-center gap-12">
              <div className="flex flex-col gap-2 justify-center items-center">
                <img className="w-36" src={lia} />
                <label className="font-semibold">Pokorny Lia</label>
                <span>actress</span>
                <a className="text-red" href="">
                  Link to post
                </a>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <img className="w-36" src={nora} />
                <label className="font-semibold">Ördög Nóra</label>
                <span>TV presenter | journalist</span>
                <a className="text-red" href="">
                  Link to post
                </a>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <img className="w-36" src={lilla} />
                <label className="font-semibold">Polyák Lilla</label>
                <span>actress | singer</span>
                <a className="text-red" href="">
                  Link to post
                </a>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <img className="w-36" src={fanni} />
                <label className="font-semibold">Weisz Fanni</label>
                <span>model</span>
                <a className="text-red" href="">
                  Link to post
                </a>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <img className="w-36" src={noemi} />
                <label className="font-semibold">Pásztor Noémi</label>
                <span>handball player</span>
                <a className="text-red" href="">
                  Link to post
                </a>
              </div>
            </div>
          </article>
        </article>
      </section>

      <section
        className={`w-full min-h-screen mb-8 flex flex-col gap-6 justify-center items-center ${content.works[1].bgStyles} only:mb-0`}
      >
        <article className="w-4/5 min-h-screen flex flex-col gap-4 ">
          <div className="flex gap-6 items-center">
            {content.works[1].hasLogo ? (
              <img className="w-20" src={content.works[1].logo} />
            ) : (
              <i
                className={`w-12 text-4xl text-red ${content.works[1].logo}`}
              ></i>
            )}
            <h1 className="text-3xl font-semibold">{content.works[1].title}</h1>
          </div>
          <p className="w-1/2">{content.works[1].intro}</p>
        <article className="flex flex-col gap-4">
          <h3 className="text-xl">Check out the reels below:</h3>
          <div className="flex gap-8">
            <a className="relative group w-fit before:flex before:justify-center before:items-center before:text-2xl before:font-bold before:font-playfair hover:before:content-['Tejmadár'] hover:before:absolute hover:before:z-10 hover:before:bg-white/70 hover:before:w-full hover:before:h-full hover:before:scale-105 before:transition-all before:duration-all" href="https://www.instagram.com/reel/C9C9op5IiAS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img className="w-60 rounded-2xl group-hover:scale-105 transition-all duration-200" src={tejmadar}/></a>
            <a className="relative group w-fit before:flex before:justify-center before:items-center before:text-2xl before:font-bold before:font-playfair hover:before:content-['Donuterie'] hover:before:absolute hover:before:z-10 hover:before:bg-white/70 hover:before:w-full hover:before:h-full hover:before:scale-105 before:transition-all before:duration-all" href="https://www.instagram.com/reel/C9PxKDKIDQJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img className="w-60 rounded-2xl group-hover:scale-105 transition-all duration-200" src={donuterie}/></a>
            <a className="relative group w-fit before:flex before:justify-center before:items-center before:text-2xl before:font-bold before:font-playfair hover:before:content-['Dolcissima'] hover:before:absolute hover:before:z-10 hover:before:bg-white/70 hover:before:w-full hover:before:h-full hover:before:scale-105 before:transition-all before:duration-all" href="https://www.instagram.com/reel/C9STkeGoA38/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img className="w-60 rounded-2xl group-hover:scale-105 transition-all duration-200" src={dolcissima}/></a>
          </div>
        </article>
        </article>
      </section>
    </WorkWrapper>
  );
}
