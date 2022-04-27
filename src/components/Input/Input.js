import st from './Input.module.scss'


const Input = ({placeholder, type}) => {
    return (
        <div className={st.inputWrapper}><input  placeholder={placeholder} className={st.input} type={type} /></div>
    );
};
export default Input; 