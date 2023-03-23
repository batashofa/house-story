import styled from "styled-components";
import photo from "../assets/photo.svg"
import {List} from "./List";
import {ReactComponent as Email} from "../assets/email.svg";
import {ReactComponent as ArrowDown} from "../assets/arrowDown.svg";
import {ReactComponent as Fire} from "../assets/fire.svg";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 536px);
  background: #2C2C2E;
  margin-top: 200px;
  @media (max-width: 320px) {
    width: 288px;
    margin-top: 60px;
    margin-bottom: 221px;
    height: 100%;
    padding: 20px 16px;
  }
`;

const Article = styled.div`
  padding: 82px 0 0 56px;
  display: inline-block;
  width: 55%;
  @media (max-width: 320px) {
    width: 100%;
    padding: 0;
  }
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;

  span {
    color: #1EAB5F;
  }

  @media (max-width: 320px) {
    font-size: 12px;
    padding: 11px 0 0 0;
    line-height: 14px;
    svg {
      display: none;
    }
  }
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
  line-height: 47px;
  margin: 0;
  text-transform: uppercase;
  background: linear-gradient(91.24deg, #1EAB5F 0.36%, #E7B97E 103.9%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 320px) {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    width: 288px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  color: #FFFFFF;
  margin: 42px 0;
  letter-spacing: 0.34px;
  @media (max-width: 320px) {
    font-size: 16px;
    margin: 7px 0px;
    line-height: 19px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

const Image = styled.img`
  padding-top: 22px;
  padding-right: 112px;
  float: right;
  @media (max-width: 320px) {
    display: none;
  }
`;

const ListContainer = styled.div`
  padding: 50px 40px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  gap: 40px;
  @media (max-width: 320px) {
    flex-flow: column;
    padding: 38px 0 25px 0;
    gap: 5px;
  }
`;

const Social = styled.div`
  position: fixed;
  width: 62px;
  height: 86px;
  right: 0;
  top: 276px;
  background: #2C2C2E;
  box-shadow: -11px -10px 51px rgba(0, 0, 0, 0.25), 0px 0px 26px rgba(0, 0, 0, 0.53), inset 4px 4px 27px rgba(137, 137, 137, 0.33);
  border-radius: 10px 0 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  gap: 10px;
  @media (max-width: 320px) {
    width: 28px;
    height: 52px;
    border-radius: 2px 0 0 2px;
    gap: 0;
    top: 88px;

    svg {
      width: 20px;
      height: 20px;
    }

  }
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 426px;
  height: 56px;
  border: 1px solid #1EAB5F;
  border-radius: 5px;
  background: #2C2C2E;
  margin-bottom: 16px;
  &::placeholder{
    padding-left: 16px;
    color: #FFFF;
  }
  @media (max-width: 320px) {
    width: 288px;
    height: 40px;
    margin-top: 6px;
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  gap: 10px;
  width: 426px;
  height: 56px;
  background: #1EAB5F;
  border-radius: 5px;
  border: none;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #F0FCF6;
  margin: 10px 0 0 0;
  @media (max-width: 320px) {
    width: 288px;
    height: 40px;
    font-size: 14px;
    margin: 0;
  }

`;


export const Main = () => {
    return (
        <Container>
            <Article>
                <Title>Все материалы о нашей компании и услугах которые мы оказываем</Title>
                <Subtitle>Здесь вы найдете ответы на самые распространенные вопросы, инструкции и
                    кейсы наших клиентов
                </Subtitle>
                <Text><span>Хотите с нами связаться</span>, оставьте заявку
                    <br/> и специалист свяжется с вами в течение 30 минут.<Fire/>
                </Text>
                <form>
                    <Input placeholder="Номер телефона"/>
                    <Button>Оставить заявку</Button>
                </form>
            </Article>
            <Image src={photo}/>
            <ListContainer>
                <List title="О компании" items={["Основная информация", "История компании"]}/>
                <List title="Стройка и ремонт"
                      items={["Кейсы наших клиентов", "Услуги которые мы оказываем", "Часто задаваемые вопросы"]}/>
                <List title="Покупка недвижимости" items={["Кейсы наших клиентов", "Топ 30 вопросов инвесторов"]}/>
                <List title="Маркетинговые услуги" items={["Кейсы наших клиентов", "Услуги которые мы оказываем"]}/>
            </ListContainer>
            <Social>
                <Email/>
                <ArrowDown/>

            </Social>
        </Container>
    )
}