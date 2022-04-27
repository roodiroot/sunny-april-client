import TitlePage from "../components/TitlePage/TitlePage";
import st from '../assets/style/shop.module.scss'
import CardItem from "../components/CardItem/CardItem";
import { useContext, useState } from "react";
import { Context } from "..";
import Button from "../components/Button/Button";

const Shop = () => {
    const [activeType, setActiveType] = useState(false)
    const [activeBrand, setActiveBrand] = useState(false)
    const { item } = useContext(Context)


    return (
        <div className="shop auto-flex">
            <div className="container">
                <TitlePage name='Магазин'>Здесь вы найдете все что вам необходимо,
                    внимательно выбирайте все что вам нужно
                </TitlePage>
                <div className={st.shopWrapper}>
                    <div className={st.navColumn}>
                        <div className={st.titleNav}>Сортировать товары:</div>
                        <div className={st.titleType}>
                            <div onClick={() => setActiveType(!activeType)} className={st.titleTypeItem}>
                                <span>По типу</span>
                                <div className="icon-arrow"></div>
                            </div>
                            <ul className={activeType ? "itemsList active" : "itemsList" }>
                                {item.types.map(t => <li key={t.id}>{t.name}</li>)}
                            </ul>
                        </div>
                        <div style={{ marginBottom: '29px' }} className={st.titleBrand}>
                            <div onClick={() => setActiveBrand(!activeBrand)} className={st.titleTypeItem}>
                                <span>По бренду</span>
                                <div className="icon-arrow"></div>
                            </div>
                            <ul className={activeBrand ? "itemsList active" : "itemsList" }>
                                {item.brands.map(t => <li key={t.id}>{t.name}</li>)}
                            </ul>
                        </div>
                        <Button variant='buttonBg'>Сбросить фильтр</Button>
                    </div>
                    <div className={st.itemsColumn}>
                        {
                            item.items.map(i =>
                                <CardItem key={i.id} item={i} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Shop;