import { observer } from 'mobx-react-lite';
import { useContext, useTransition } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '..';
import st from '../assets/style/auth.module.scss'
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/constance';

const Auth = observer(() => {
    const { user } = useContext(Context)

    const logIn = () => {
        if (user.isAuth === true) {
            user.setIsAuth(false)
        } else {
            user.setIsAuth(true)
        }
    }

    return (
        <div className="auth auto-flex">
            <div className={st.content}>
                {user.isAuth ? <div className={st.header}>Авторизация</div> : <div className={st.header}>Регистрация</div>}
                {user.isAuth
                    ?
                    <div className={st.diskription}>Если у вас еще нет акаунта <br />попробуйте{' '}
                        <span >
                            <NavLink className={st.diskriptionSpan} onClick={() => logIn()} to={REGISTRATION_ROUTE}>зарегестрироваться</NavLink>
                        </span>
                    </div>
                    :
                    <div className={st.diskription}>Если у вас уже есть аккаунт, тожда <br />вы можете{' '}
                        <span >
                            <NavLink className={st.diskriptionSpan} onClick={() => logIn()} to={LOGIN_ROUTE}>авторизоваться</NavLink>
                        </span>
                    </div>
                }

                <div className={st.form}>
                    <Input type='email' placeholder='Введите email' />
                    <Input type='password' placeholder='Введите password' />
                </div>
                <Button  variant='buttonBg'>{user.isAuth ? 'Авторизоваться' : 'Зарегестрироваться'}</Button>
            </div>
        </div>
    );
});
export default Auth;