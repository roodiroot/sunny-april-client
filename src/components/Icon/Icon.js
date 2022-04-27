import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../..';
import st from './Icon.module.scss'
const Icon = observer(({ classIcon, to, basket, style, onClick }) => {
    const [num, setNum] = useState(0)
    const { basketItem } = useContext(Context)


    useEffect(() => {
        setNum(basketItem.basketItem.length)
    }, [basketItem.basketItem.length])



    // setNum(signal)
    // console.log(basketItem.basketItem.length)   
    if (to) {
        return (
            <NavLink style={style} to={to}>
                <div className={st.iconsProject}>
                    <div className={classIcon}>

                    </div>
                    {basket && num > 0 && <div className={st.basketCount}><span>{num}</span></div>}
                </div>
            </NavLink>
        );
    } else {
        return (
            <div onClick={onClick} style={style} >
                <div className={st.iconsProject}>
                    <div className={classIcon}>
    
                    </div>
                    {basket && num > 0 && <div className={st.basketCount}><span>{num}</span></div>}
                </div>
            </div>
        );
    }

    
});
export default Icon;