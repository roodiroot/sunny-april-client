import logo from '../../assets/img/logo/logo.png'
import logoShwarc from '../../assets/img/logo/logo-shwarc.png'
const Logo = ({variant, translateY}) => {
    return (

        <div className="logo">
            <img style={{transform: `translateY(${translateY})`}} src={variant === 'shwarc' ? logoShwarc : logo } alt="" />
        </div>
    );
};

export default Logo;