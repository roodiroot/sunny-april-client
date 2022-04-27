import st from './FooterLogin/FooterLogin.module.scss'
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import SocialLink from "./SocialLink/SocialLink";

const Footer = observer(() => {
    const { user } = useContext(Context)

    return (
        <footer>
            {
                user.navigate
                    ?
                    <div className="footer">
                        <div className="topLine">
                            <Logo variant='shwarc' />
                            <Menu variant='footer' />
                        </div>
                        <div className="middleLine">
                            <SocialLink variant='twiter' />
                            <SocialLink variant='vk' />
                            <SocialLink variant='whatsapp' />
                        </div>
                        <div className="bottomLine">
                            <span>© All right reservid Sunny April Group 2022</span>
                        </div>
                    </div>
                    :
                    <div className={st.bottomLine}>
                        <span>© All right reservid Sunny April Group 2022</span>
                    </div>
            }

        </footer>

    );
});
export default Footer;