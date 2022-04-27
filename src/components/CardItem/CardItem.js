import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../..';
import { ITEM_ROUTE } from '../../utils/constance';
import AddItem from '../AddItem/AddItem';
import Hit from '../Hit/Hit';
import st from './CardItem.module.scss'
const CardItem = observer(({ hit, item }) => {
    const navigate = useNavigate()
    let { basketItem } = useContext(Context)
    const [varBut, setVarBat] = useState(false)

    useEffect(()=> {
        basketItem.basketItem.forEach(element => {
            if(element.id === item.id) {
                setVarBat(true)
            } 
        });

    }, [])

    const addItemBasket = (e) => {
        let wItem = true
        basketItem.basketItem.forEach(element => {
            if(element.id === item.id) {
                wItem = false
            } 
        });
        if(wItem){
            basketItem.basketItem.push(item)
            setVarBat(true)
            e.stopPropagation()
        } else {
            e.stopPropagation()
        }
    }

    
    
    return (
        <div onClick={() => navigate(ITEM_ROUTE + '/' + item.id)} className={st.bodyItem}>
            {item.hit && <Hit />}
            <div className={st.imgMain}><img src={item.img} alt="" /></div>
            <div className={st.discriptBlock}>
                <div className={st.title}>{item.name}</div>
                <div className={st.type}>Цитрусовый</div>
                <div className={st.brand}>Бахчевые</div>
                <div className={st.priceAddBlock}>
                    <div className={st.priceBlock}>
                        <div className={st.titlePrice}>Цена:</div>
                        <div className={st.price}>{item.price} ₽</div>
                    </div>
                    <AddItem onClick={addItemBasket} variant={varBut ? 'bg' : 'add'} />
                </div>
            </div>
        </div>
    )
})
export default CardItem;