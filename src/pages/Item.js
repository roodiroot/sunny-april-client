import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import st from '../assets/style/item.module.scss'
import AddItem from '../components/AddItem/AddItem';
import Button from '../components/Button/Button';
import Counter from '../components/Counter/Counter';
import Hit from '../components/Hit/Hit';
import Row from '../components/Row/Row';
const Item = observer(() => {
    const item = { id: 123, name: 'Кот прекрасный Ораньжевый', rate: 0, price: 34999, hit: true, img: 'https://www.purinaone.ru/cat/sites/default/files/2020-06/zachem-kastrirovat-kota-ili-koshku.jpg', description: 'Краткое описание элемента, которое погает пользователю понять что за продукт он покупает. По факту еще одна продажа' }
    const info = [
        { title: 'Цвет', description: 'Рыжий' },
        { title: 'Выражение лица', description: 'Странное' },
        { title: 'Страна изготовитель', description: 'Россия' },
    ]
    const [summ, setSumm] = useState(0)

    const numberFunc = (num) => {
        if(num >= 0) {
            setSumm(num * item.price)
        } else {
            setSumm(0)
        }

    }
    return (
        <div className="item auto-flex">
            <div className="container">
                <div className={st.titleBlock}>
                    <div className={st.subTitle}>Наименование</div>
                    <div className={st.title}>{item.name}</div>
                </div>
                <div className={st.mainBlock}>
                    <div className={st.imgBlock}>
                        {item.hit && <Hit />}
                        <img src={item.img} alt="фото" />
                    </div>
                    <div className={st.discriptionBlock}>
                        <div className={st.topLine}>
                            <div className={st.textBlock}>
                                <div className={st.art}>арт{item.id}</div>
                                <div className={st.descript}>{item.description}</div>
                            </div>
                            <AddItem onClick={(e) => e.stopPropagation()} variant='bg' />
                        </div>

                        <div className={st.table}>
                            {info.map(i =>
                                <Row key={i.title} title={i.title} description={i.description} />
                            )}
                        </div>

                        <div className={st.goOrder}>
                            <div className={st.counterTitle}>Колличество:</div>
                            <div className={st.counterAndOrder}>
                                <Counter numberFunc={numberFunc} />
                                <Button variant='buttonBg'> В корзину</Button>
                            </div>
                        </div>

                        <div className={st.priceBlock}>
                            <div className={st.counterAndOrder}>
                                <div className={st.priceTitle}>Цена:</div>
                                <div className={st.priceOne}>{item.price + ' ' + '₽'}</div>
                            </div>
                            <div className={st.priceAll}>{summ + ' ' + '₽'}</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
})
export default Item;