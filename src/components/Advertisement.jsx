import Work from "./Work";
import WorkWrapper from "./WorkWrapper";

export default function Advertisement({ content }) {
  return (
    <WorkWrapper content={content}>
      <Work content={content}>

      </Work>
    </WorkWrapper>
  );
}
