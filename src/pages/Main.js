import { useNavigate } from 'react-router-dom';
import st from '../assets/style/main.module.scss'
import Button from '../components/Button/Button';
import { SHOP_ROUTE } from '../utils/constance';
import banana from '../assets/img/main/banana.png'
import { useContext } from 'react';
import { Context } from '..';
import BlockProducts from '../components/BlockProducts/BlockProducts';

const Main = () => {
    const { item } = useContext(Context)
    const navigate = useNavigate()
    let mass = item.items.filter(i => i.hit === true)
    let massNoHit = item.items.filter(i => i.hit !== true)

    return (
        <div className="mainPage auto-flex">
            <div className="container">
                <div className={st.mainBlock}>
                    <div className={st.textBlock}>
                        <h1>Интернет магазин самых классных товаров</h1>
                        <div className={st.descriptionBlock}>Здесь мы продаем все что вам захочется. Любое ваше желание. Вам просто нужно загадатьжелание и товар будет у вас дома</div>
                        <Button onClick={() => navigate(SHOP_ROUTE)} variant='buttonBorder'>К товарам</Button>
                    </div>
                    <div className={st.imgBlock}>
                        <img src={banana} alt="" />
                    </div>
                </div>
                <BlockProducts mass={massNoHit} name='Новинки' >Здесь мы продаем все что вам захочется.
                    Любое ваше желание. Вам просто нужно загадатьжелание и товар будет у вас дома
                </BlockProducts>
                <BlockProducts mass={mass} name='ХИТ-категории' >Здесь мы продаем все что вам захочется.
                    Любое ваше желание. Вам просто нужно загадатьжелание и товар будет у вас дома
                </BlockProducts>
            </div>
        </div>
    );
};
export default Main;