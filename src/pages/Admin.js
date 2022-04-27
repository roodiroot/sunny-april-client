import Button from "../components/Button/Button";
import TitlePage from "../components/TitlePage/TitlePage";

const Admin = () => {
    return (
        <div className="admin auto-flex">
            <div className="container">
                <TitlePage name='Админ панель'>Здесь можно добавить различные
                    типы бренды и товары для продажи в магазине
                </TitlePage>
                <div style={{
                    padding: '60px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.7em'
                }}>
                    <Button variant='buttonBorder' >Добавить тип</Button>
                    <Button variant='buttonBorder' >Добавить бренд</Button>
                    <Button variant='buttonBg'>Добавить элемент</Button>
                </div>
            </div>
        </div>
    )
}
export default Admin;