import styled from "styled-components";
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import video1 from "../assets/video1.png";
import video2 from "../assets/video2.png";
import video3 from "../assets/video3.png";
import {ReactComponent as DevLogo} from "../assets/devlogo.svg";
import {ReactComponent as Home} from "../assets/home.svg";
import {ReactComponent as Catalog} from "../assets/catalog.svg";
import {ReactComponent as Shop} from "../assets/shop.svg";
import {ReactComponent as Blog} from "../assets/blog.svg";
import {ReactComponent as People} from "../assets/people.svg";
import {ReactComponent as Contacts} from "../assets/contacts.svg";
import {ReactComponent as WhatsUp} from "../assets/whatsup.svg";
import {ReactComponent as Telegram} from "../assets/telegram.svg";
import {ReactComponent as Insta} from "../assets/insta.svg";
import {ReactComponent as FacebookLogo} from "../assets/facebook.svg";
import {ReactComponent as Youtube} from "../assets/youtube.svg";
import {ReactComponent as ArrowRight} from "../assets/arrowRight.svg";
import {ReactComponent as FlagRus} from "../assets/flagrus.svg";
import {ReactComponent as ArrowTop} from "../assets/arrowTop.svg";


const Container = styled.footer`
  position: fixed;
  display: flex;
  width: 100%;
  height: 336px;
  left: 0;
  bottom: 0;
  background: #2C2C2E;
  box-shadow: -11px -10px 51px rgba(0, 0, 0, 0.25), 0px 0px 26px rgba(0, 0, 0, 0.53), inset 4px 4px 27px rgba(137, 137, 137, 0.33);
  @media (max-width: 320px) {
    flex-flow: column-reverse;
    height: 221px;
  }
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: column;
  list-style-type: none;
  padding: 3px 0 0 3px;
  flex-flow: column;
  gap: 22px;
`;
const Image = styled.img`
  width: 200px;
  height: 120px;
  border-radius: 5px;
`;

const ListItem = styled.li`
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  gap: 20px;
`;


const LeftBlock = styled.div`
  padding: 20px;
  @media (max-width: 320px) {
    padding: 16px;
  }

`;
const MiddleBlock = styled.div`
  padding: 20px 40px;
  @media (max-width: 320px) {
    display: none;
  }

`;
const RightBlock = styled.div`
  padding: 20px;
  @media (max-width: 320px) {
    padding: 0 16px;
  }
`;
const Text = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: #1EAB5F;
  @media (max-width: 320px) {
    display: none;
  }
`;

const LogoText = styled.div`
  margin: 33px 0 0 20px;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 19px;
  //color: #4A90AE;
  background: linear-gradient(90.69deg, #1C5771 -13.81%, #4A90AE 23.87%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  span {
    margin-left: 20px;
  }
  @media (max-width: 320px) {
    margin: 0;
    font-size: 12px;

  }
`;

const Links = styled.div`
  display: flex;
  gap: 30px;
`;

const StyledArrowTop = styled(ArrowTop)`
    margin-left: auto;
`;

const StyledFacebookLogo = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #FFFF;
  z-index: 1;
`;

const Doc = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1EAB5F;
  flex: none;
  order: 0;
  flex-grow: 0;
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: 320px) {
    display: none;
  }
`;

const Select = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 16px;
  isolation: isolate;
  background: rgb(44, 44, 46);
  font-size: 16px;
  margin: 30px 0;
  gap: 10px;

  width: 310px;
  height: 63px;
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  @media (max-width: 320px) {
    font-size: 12px;
    width: 288px;
    height: 34px;
    margin:16px 0;
  }
`;
export const Footer = () => {
    return (
        <Container>
            <LeftBlock>
                <Text>Видеоотзывы от партнёров</Text>

                <Carousel
                    centerMode
                    centerSlidePercentage={33.33}
                    emulateTouch
                    width={660}
                    dynamicHeight
                    showStatus={false}
                    showArrows={false}
                    showThumbs={false}
                >
                    <Image src={video1}/>
                    <Image src={video2}/>
                    <Image src={video3}/>
                    <Image src={video1}/>
                </Carousel>
                <LogoText><DevLogo/><span>Alfa Digital Agency – разработка высоко конверсионных сайтов</span></LogoText>
            </LeftBlock>
            <MiddleBlock>
                <List>
                    <ListItem><Home/>Главная</ListItem>
                    <ListItem><Catalog/>Каталог готовых объектов</ListItem>
                    <ListItem><Shop/>Магазин стройматериалов</ListItem>
                    <ListItem><Blog/>Блог</ListItem>
                    <ListItem><People/>Выезд специалиста</ListItem>
                    <ListItem><Contacts/>Контакты</ListItem>
                </List>
            </MiddleBlock>
            <RightBlock>
                <Doc>
                    Смотреть все документы<ArrowRight/>
                </Doc>
                <Select>
                    Политика конфиденциальности<StyledArrowTop/>
                </Select>
                <Select>
                    <FlagRus/>Русский<StyledArrowTop/>
                </Select>
                <Links>
                    <WhatsUp/>
                    <Telegram/>
                    <Insta/>
                    <Youtube/>
                    <StyledFacebookLogo><FacebookLogo/></StyledFacebookLogo>
                </Links>

            </RightBlock>
        </Container>
    )
}