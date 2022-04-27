import { useContext, useEffect } from "react";
import { Context } from "..";
import TitlePage from "../components/TitlePage/TitlePage";

import BasketItem from "../components/BasketItem/BasketItem";
import Button from "../components/Button/Button";
import { observer } from "mobx-react-lite";

const Basket = observer(() => {
    const { basketItem } = useContext(Context)


    return (
        <div className="basket auto-flex">
            <div className="container">
                <TitlePage name='Корзина'>Здесь формируется общая стоимость
                    всех товаров которые раньше вы положили в корзину. А так же
                    создается заказ
                </TitlePage>
                <div className="basketWrapper">

                    {
                        basketItem.basketItem.map(i =>
                            <BasketItem key={i.id} item={i} />
                        )
                    }
                    <div className="footerBasket">
                        <div className="basketOrder">
                            <span>123456</span>
                        </div>
                        <div className="basketDescript">
                            <TitlePage name='Корзина'>Здесь формируется общая стоимость
                                всех товаров которые раньше вы положили в корзину. А так же
                                создается заказ
                            </TitlePage>
                            <br/>
                            <br/>
                            <Button variant='buttonBorder'>Обратный звонок</Button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
})
export default Basket;