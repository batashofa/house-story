import styled from "styled-components";
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import video1 from "../assets/video1.png";
import video2 from "../assets/video2.png";
import video3 from "../assets/video3.png";
import {ReactComponent as DevLogo} from "../assets/devlogo.svg";
import {MediaLinks} from "./MediaLinks";


const Container = styled.footer`
  position: fixed;
  display: flex;
  width: 100%;
  height: 336px;
  left: 0;
  bottom: 0;
  background: #2C2C2E;
  box-shadow: -11px -10px 51px rgba(0, 0, 0, 0.25), 0px 0px 26px rgba(0, 0, 0, 0.53), inset 4px 4px 27px rgba(137, 137, 137, 0.33);
`;

const List = styled.ul`
  display: flex;
  flex-flow: column;
  list-style-type: none;
  gap: 30px;

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
`;

const LeftBlock = styled.div`
  padding: 20px;

`;
const MiddleBlock = styled.div`
  padding: 20px;

`;
const RightBlock = styled.div`
  padding: 20px;

`;
const Text = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: #1EAB5F;
`;

const LogoText = styled.div`
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
                    <Image src={video2}/>
                    <Image src={video3}/>
                </Carousel>
                <LogoText><DevLogo/><span>Alfa Digital Agency – разработка высоко конверсионных сайтов</span></LogoText>
            </LeftBlock>
            <MiddleBlock>
            <List>
                <ListItem>Главная</ListItem>
                <ListItem>Каталог готовых объектов</ListItem>
                <ListItem>Магазин стройматериалов</ListItem>
                <ListItem>Блог</ListItem>
                <ListItem>Выезд специалиста</ListItem>
                <ListItem>Контакты</ListItem>
            </List>
            </MiddleBlock>
            <RightBlock>
                <MediaLinks width="310px"/>

            </RightBlock>
        </Container>
    )
}