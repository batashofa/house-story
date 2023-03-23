import styled from "styled-components";
import {ReactComponent as CheckIcon} from "../assets/check.svg";

const StyledCheckIcon = styled(CheckIcon)`
  fill: #E7B97E;
  width: 24px;
  height: 24px;
  margin-right: 16px;

  @media (max-width: 320px) {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
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
  padding-bottom: 16px;
     @media (max-width: 320px) {
       font-weight: 400;
       font-size: 16px;
       line-height: 19px;
       color: #E7B97E;
       padding-bottom: 0;
       margin: 23px 0 15px 0;
       border: none;
     }
`;

const Text = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #FFFFFF;
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

const Ul = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
  @media (max-width: 320px) {
    gap: 8px;
  }
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