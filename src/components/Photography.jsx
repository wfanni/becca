import Work from "./Work";
import WorkWrapper from "./WorkWrapper";

export default function Photography({ content }) {
    return (
      <WorkWrapper content={content}>
      <Work content={content} />
    </WorkWrapper>
    );
  }