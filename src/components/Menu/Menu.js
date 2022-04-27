import { NavLink } from 'react-router-dom';
import { menuLinks } from '../../routes';
import st from './Menu.module.scss'
const Menu = ({style, variant}) => {
    const colorStyle = (variant) => {
        if(variant === 'footer') {
            return st.menuFooter
        } else {
            return st.menu
        }

    }
    return (
        <ul style={style} className={colorStyle(variant)}>
            {
                menuLinks.map(i => 
                    <li key={i.path} className={st.menuItem}><NavLink to={i.path} className={st.menuLink}>{i.name}</NavLink></li>
                    )
            }
        </ul>
    );
};
export default Menu;