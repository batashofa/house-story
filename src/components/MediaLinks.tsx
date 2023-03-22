import styled from "styled-components";
import {ReactComponent as WhatsUp} from "../assets/whatsup.svg";
import {ReactComponent as Telegram} from "../assets/telegram.svg";
import {ReactComponent as Insta} from "../assets/insta.svg";
import {ReactComponent as Facebook} from "../assets/facebook.svg";
import {ReactComponent as Email} from "../assets/email.svg";


export const MediaLinks = ({width}: any) => {
    const Links = styled.div`
      display: flex;
      justify-content: space-between;
      width: ${width};
    `;
    return (
        <Links>
            <WhatsUp/>
            <Telegram/>
            <Insta/>
            <Facebook/>
            <Email/>
        </Links>
    )
}