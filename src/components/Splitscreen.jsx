import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: ${(props) => props.weight};
`;

const Pane = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  display: flex;
`;

export default function Splitscreen({
  children,
  leftWeight = "50%",
  rightWeight = "50%",
  footer = false,
  gap = 4,
  width = "full"
}) {
  const [Left, Right, Bottom] = children;

  console.log(leftWeight, rightWeight)

  return (
    <>
      <Container className={`w-${width} flex flex-row gap-${gap}`}>
        <Container weight={leftWeight}>
          <Pane>{Left}</Pane>
        </Container>
        <Container weight={rightWeight}>
          <Pane>{Right}</Pane>
        </Container>
      </Container>
      {footer && <Footer className={`w-${width}`}>{Bottom}</Footer>}
    </>
  );
}
