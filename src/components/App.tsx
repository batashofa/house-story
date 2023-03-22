import {Header} from "./Header";
import {Footer} from "./Footer";

export const App = ({children}: any) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}