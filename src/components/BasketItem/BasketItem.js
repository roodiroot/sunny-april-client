import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../..'
import { ITEM_ROUTE } from '../../utils/constance'
import Counter from '../Counter/Counter'
import Icon from '../Icon/Icon'
import st from './BasketItem.module.scss'
const BasketItem = observer(({ item }) => {
    const [sum, setSum] = useState(0)
    const { basketItem } = useContext(Context)
    const numberFunc = (num) => {
        setSum(num * item.price)
    }
    const dropItem = () => {
        const newMass = basketItem.basketItem.filter(i => i.id !== item.id)
        basketItem.setBasketItem(newMass)
    }

    
    return (
        <div className={st.itemWrapper}>
            <div className={st.itemImg}><img src={item.img} alt="" /></div>
            <div className={st.itemBody}>
                <div className={st.itemName}><NavLink className={st.itemLink} to={ITEM_ROUTE + '/' + item.id}>{item.name}</NavLink></div>
                <Counter style={{ flex: '1 1 20%' }} numberFunc={numberFunc} />
                <div className={st.itemPrice}>{item.price + ' ' + '₽'}</div>
                <div className={st.itemSumm}>{sum + ' ' + '₽'}</div>
                <Icon onClick={dropItem} style={{ flex: '1 1 5%' }} classIcon='icon-drop' />
            </div>
        </div>
    )
})
export default BasketItem;