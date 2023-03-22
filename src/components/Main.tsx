import styled from "styled-components";
import photo from "../assets/photo.svg"
import {List} from "./List";

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 536px);
  background: #2C2C2E;
  margin-top: 200px;
`;

const Article = styled.div`
  padding: 82px 0 0 56px;
  display: inline-block;
  width: 55%;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;

  span {
    color: #1EAB5F;
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
`;

const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  color: #FFFFFF;
  margin: 42px 0;
  letter-spacing: 0.34px;
`;

const Image = styled.img`
  padding-right: 112px;
  float: right;
  margin-top: 20px;
`;

const ListContainer = styled.div`
  padding: 0 40px;
  box-sizing: border-box;
  width: 100%;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(4, 1fr);
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 426px;
  height: 56px;
  border: 1px solid #1EAB5F;
  border-radius: 5px;
  background: #2C2C2E;
  margin-bottom: 16px;
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
`;


export const Main = () => {
    return (
        <Container>
            <Article>
                <Title>Все материалы о нашей компании и услугах которые мы оказываем</Title>
                <Subtitle>Здесь вы найдете ответы на самые распространенные вопросы, инструкции и
                    кейсы наших клиентов
                </Subtitle>
                <Text><span>Хотите с нами связаться</span>, оставьте заявку и
                    специалист свяжется с вами в течение 30 минут.
                </Text>
                <form>
                    <Input/>
                    <Button>Оставить заявку</Button>
                </form>
            </Article>
            <Image src={photo}/>
            <ListContainer>
                <List title="О компании" items={["Основная информация", "История компании"]}/>
                <List title="Стройка и ремонт" items={["Кейсы наших клиентов", "Услуги которые мы оказываем", "Часто задаваемые вопросы"]}/>
                <List title="Покупка недвижимости" items={["Кейсы наших клиентов", "Топ 30 вопросов инвесторов"]}/>
                <List title="Маркетинговые услуги" items={["Кейсы наших клиентов", "Услуги которые мы оказываем"]}/>
            </ListContainer>
        </Container>
    )
}