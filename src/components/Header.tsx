import styled from "styled-components";
import {ReactComponent as Logo} from "../assets/logo.svg";
import {ReactComponent as Phone} from "../assets/phone.svg";
import {ReactComponent as Point} from "../assets/point.svg";
import {ReactComponent as Hamburger} from "../assets/hamburger.svg";
import {Menu} from "./Menu";
import {MediaLinks} from "./MediaLinks";

const Container = styled.header`
  position: fixed;
  width: 100%;
  height: 200px;
  left: 0;
  top: 0;
  background: #2C2C2E;
  padding: 39.5px 0 0 40px;
  box-shadow: -11px -10px 51px rgba(0, 0, 0, 0.25), 0px 0px 26px rgba(0, 0, 0, 0.53);
`;

const Hat = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  width: 100%;
  column-gap: 89px;`;

const Contacts = styled.ul`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  list-style-type: none;
  color: #1EAB5F;
  position: relative;
  margin: 0;
  padding-left: 40px;
  letter-spacing: 0px;
`;

const SocialMedia = styled.ul`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  list-style-type: none;
  color: #1EAB5F;
  position: relative;
  margin: 0;
  padding-left: 10px;
`;

const StyledPhone = styled(Phone)`
  position: absolute;
  top: 0;
  left: 12px;
`;

const StyledPoint = styled(Point)`
  position: absolute;
  top: 30px;
  left: 15px;
`;

const Number = styled.li`
  flex: none;
  order: 1;
  flex-grow: 0;
`;


const Text = styled.li`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
`;

const EntryButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  gap: 10px;
  width: 315px;
  height: 57px;
  border: none;
  background: #444343;
  box-shadow: 0px 0px 4px rgba(51, 51, 51, 0.5);
  border-radius: 5px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 10px;
  color: #FFFFFF;
  padding: 0;
`;

export const Header = () => {

    return (
        <Container>
            <Hat>
                <Logo/>
                <Contacts>
                    <StyledPhone/>
                    <Number>+34 624 36 23 26</Number>
                    <StyledPoint/>
                    <Text>Звоните, мы онлайн</Text>
                </Contacts>
                <SocialMedia>
                    <MediaLinks width="203px"/>
                    <StyledPoint/>
                    <Text>Пишите, мы онлайн</Text>
                </SocialMedia>
                <EntryButton>
                    Записаться на экскурсию
                </EntryButton>
                <Hamburger/>
            </Hat>
            <Menu
                items={["Выполненные работы", "Каталог готовых объектов", "Магазин стройматериалов", "Блог", "О нас"]}/>

        </Container>
    )
}