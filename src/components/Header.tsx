import styled from "styled-components";
import {ReactComponent as Logo} from "../assets/logo.svg";
import {ReactComponent as Phone} from "../assets/phone.svg";
import {ReactComponent as Point} from "../assets/point.svg";
import {ReactComponent as Hamburger} from "../assets/hamburger.svg";
import {Menu} from "./Menu";
import {ReactComponent as WhatsUp} from "../assets/whatsup.svg";
import {ReactComponent as Telegram} from "../assets/telegram.svg";
import {ReactComponent as Insta} from "../assets/insta.svg";
import {ReactComponent as FacebookLogo} from "../assets/facebook.svg";
import {ReactComponent as Email} from "../assets/email.svg";

const Container = styled.header`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 200px;
  left: 0;
  top: 0;
  background: #2C2C2E;
  padding: 40px;
  box-shadow: -11px -10px 51px rgba(0, 0, 0, 0.25), 0px 0px 26px rgba(0, 0, 0, 0.53);
  @media (max-width: 320px) {
    height: 60px;
    padding: 0 16px;
  }
`;

const Hat = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  width: 100%;
`;

const StyledLogo = styled(Logo)`
  @media (max-width: 320px) {
    width: 100px;
  }
`;

const Contacts = styled.ul`
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  list-style-type: none;
  color: #1EAB5F;
  position: relative;
  margin: 0;
  padding-left: 40px;
  letter-spacing: 0px;
  @media (max-width: 320px) {
    font-size: 12px;
    padding-left: 0;
    display: block;
  }
`;

const SocialMedia = styled.ul`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  list-style-type: none;
  color: #1EAB5F;
  position: relative;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 320px) {
    display: none;
  }
`;

const StyledPhone = styled(Phone)`
 
  @media (max-width: 320px) {
    width: 14px;
    height: 14px;
  }
`;

const StyledPoint = styled(Point)`
  @media (max-width: 320px) {
    width: 8px;
    height: 8px;
  }
`;

const StyledHamburger = styled(Hamburger)`
  position: relative;

`;

const StyledFacebookLogo = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #FFFF;
  z-index: 1;
`;

const Number = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 320px) {
    font-size: 12px;
    gap: 2px;

    margin: 0 0 -7px 0;
  }
`;


const Text = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

const EntryButton = styled.button`
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
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 10px;
  color: #FFFFFF;
  letter-spacing: 1.1px;
  @media (max-width: 320px) {
    display: none;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 12px;
  margin: 0 0 5px 0;
`;

export const Header = () => {

    return (
        <Container>
            <Hat>
                <StyledLogo/>
                <Contacts>

                    <Number><StyledPhone/>+34 624 36 23 26</Number>

                    <Text><StyledPoint/>Звоните, мы онлайн</Text>
                </Contacts>
                <SocialMedia>
                    <Links>
                        <WhatsUp/>
                        <Telegram/>
                        <Insta/>
                        <StyledFacebookLogo><FacebookLogo/></StyledFacebookLogo>
                        <Email/>
                    </Links>

                    <Text><StyledPoint/>Пишите, мы онлайн</Text>
                </SocialMedia>
                <EntryButton>
                    Записаться на экскурсию
                </EntryButton>
                <StyledHamburger/>
            </Hat>
            <Menu
                items={["Выполненные работы", "Каталог готовых объектов", "Магазин стройматериалов", "Блог", "О нас"]}/>
        </Container>
    )
}