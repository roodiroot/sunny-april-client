import st from './Button.module.scss'
const Button = ({classIcon, children, variant, onClick}) => {

    const style = (variant) => {
        if(variant === "buttonBg") {
            return st.buttonBg
        }
        if(variant === "buttonBorder") {
            return st.buttonBorder
        }
        if(variant === "buttonShwarc") {
            return st.buttonShwarc
        }
    }
    return (
        <div className={style(variant)}>
            <button onClick={onClick} className={st.button}>
                <div className={classIcon + ' ' + st.icon}></div>
                <span>{children}</span>
            </button>
        </div>
    );
};
export default Button;