import About from "./pages/About";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import Contacts from "./pages/Contacts";
import Item from "./pages/Item";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import { ABOUT_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, CONTACTS_ROUTE, ITEM_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/constance";

export const pablicRouts = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: ITEM_ROUTE + '/:id',
        Component: Item
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
]
export const authRouts = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]
export const menuLinks = [
    {
        name: 'Главная',
        path: MAIN_ROUTE
    },
    {
        name: 'Магазин',
        path: SHOP_ROUTE
    },
    {
        name: 'О нас',
        path: ABOUT_ROUTE
    },
    {
        name: 'Контакты',
        path: CONTACTS_ROUTE
    },
    {
        name: 'Админ панель',
        path: ADMIN_ROUTE
    }
]