import styled from "styled-components";

const Container = styled.ul`
  box-sizing: border-box;
  display: flex;
  gap: 45px;
  list-style-type: none;
  width: 84%;
  padding: 0;
  margin: 27px 0 0;
  @media (max-width: 320px) {
    display: none;
  }
`;
const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 39px;
  padding: 0 20px;
  border: 1px solid #F1F1F140;
  border-radius: 5px;
  font-size: 16px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.8);
`;

export const Menu = ({items}: any) => {

    return (
        <Container>
            {items.map((item: any) => (
                <MenuItem>{item}</MenuItem>
            ))}
        </Container>
    )
}