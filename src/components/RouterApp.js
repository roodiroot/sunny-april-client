import { useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Context } from "..";
import Shop from "../pages/Shop";
import { authRouts, pablicRouts } from "../routes";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/constance";

const RouterApp = () => {
    const { user } = useContext(Context)
    let location = useLocation().pathname
    useEffect(() => {
        if (location === REGISTRATION_ROUTE || location === LOGIN_ROUTE) {
            user.setNavigate(false)
        } else {
            user.setNavigate(true)
        }
    }, [location])
    let isAuth = true
    return (
        <Routes>
            {
                isAuth && authRouts.map(i =>
                    <Route key={i.path} path={i.path} element={<i.Component />} exact />
                )
            }
            {
                pablicRouts.map(i =>
                    <Route key={i.path} path={i.path} element={<i.Component />} exact />
                )
            }
            <Route path='*' element={<Shop />} exact />
        </Routes>
    );
};
export default RouterApp;