import st from './Row.module.scss'
const Row = ({ title, description }) => {
    return (
        <table className={st.table}>
            <tbody>
                <tr className={st.row} ><td className={st.title}>{title}:</td><td className={st.description} >{description}</td></tr>
            </tbody>
        </table>
    )
}
export default Row;