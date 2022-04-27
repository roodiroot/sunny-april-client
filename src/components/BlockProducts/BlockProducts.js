import CardItem from "../CardItem/CardItem";
import TitlePage from "../TitlePage/TitlePage";
import st from './BlockProducts.module.scss'

const BlockProducts = ({mass, children, name}) => {
    return (
        <div className={st.newProducts}>
            <TitlePage name={name}>{children}</TitlePage>
            <div className={st.newList}>
                {mass.map(i =>
                    <CardItem key={i.id} item={i} />
                )}
            </div>
        </div>
    )
};
export default BlockProducts;