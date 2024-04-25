import Work from "./Work";
import WorkWrapper from "./WorkWrapper";
import product1 from "../assets/massage-tool1.png";
import product2 from "../assets/massage-tool2.png";
import product3 from "../assets/massage-tool3.png";
import eszter from "../assets/massage-eszter.png";



export default function Webdesign({ content }) {
    return (
      <WorkWrapper content={content} >
        <Work content={content}>
        <article className="flex flex-col gap-16 justify-center items-start">
          <p className="flex items-center">I also shot photos for her website and social media platforms<i className="px-2 pr-4 text-2xl text-red fa-brands fa-facebook-f"></i><i className="text-2xl text-red fa-brands fa-instagram"></i> </p>
          <div className="flex gap-4 justiy-center items-center">
            <img className="w-48 -mb-6 rounded-2xl place-self-end shadow-xl" src={product1} />
            <img className="w-60 rounded-2xl shadow-xl" src={eszter} />
            <img className="w-40 -mt-6 rounded-2xl place-self-start shadow-xl" src={product3} />
          </div>
        </article>
        </Work>

      </WorkWrapper>
    );
  }