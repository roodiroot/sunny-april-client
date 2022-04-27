import st from './TitlePage.module.scss'
const TitlePage = ({name, children}) => {
    return (
        <div className={st.titlePage}>
            <div className={st.title}>{name}</div>
            <div className={st.description}>{children}</div>
        </div>
    )
}
export default TitlePage;