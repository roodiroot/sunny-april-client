import { NavLink, useNavigate } from "react-router-dom";
import { BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/constance";
import Button from "./Button/Button";
import Icon from "./Icon/Icon";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import st from './HeaderLogin/HeaderLogin.module.scss'
import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
    const { user } = useContext(Context)

    const navigate = useNavigate()
    return (
        <header>
            {user.navigate
                ?
                <div className="header">
                    <div className="container">
                        <div className="headerLeft">
                            <Logo translateY='35px' />
                            <Menu style={{ marginLeft: '33px' }} />
                        </div>
                        <div className="headerRight">
                            <Icon classIcon='icon-user' to={'/lk'}/>
                            <Icon basket classIcon='icon-Basket' to={BASKET_ROUTE} />
                            <Button onClick={() => navigate(LOGIN_ROUTE)} variant='buttonBg' classIcon='icon-login'>Авторизация</Button>
                        </div>
                    </div>
                </div>
                :
                <div className={st.HeaderRegister}>
                    <div className={`${st.container} container`}>
                        <Logo translateY='35px' />
                        <NavLink to={SHOP_ROUTE} >
                            <div className={st.fedback}>
                                <div className={`${st.icon} icon-arrow-left`}></div>
                                <div className={st.fedbackItem}>Вернуться к покупкам</div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            }



        </header>
    );
});
export default Header;