import styled from "styled-components";
import {ReactComponent as CheckIcon} from "../assets/check.svg";

const StyledCheckIcon = styled(CheckIcon)`
  fill: #E7B97E;
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

const Container = styled.div`
  width: 100%;
`;

const Title = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid #FFFFFF;
  margin-bottom: 40px;
  padding-bottom: 16px;
`;

const Text = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #FFFFFF;
`;

const Ul = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;

`;
const Li = styled.div`
  display: flex;
  align-items: center;

`;


export const List = ({items, title}: any) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Ul>
                {items.map((item: any) => (
                    <Li>
                        <StyledCheckIcon/>
                        <Text>{item}</Text>
                    </Li>
                ))}
            </Ul>
        </Container>
    )
}