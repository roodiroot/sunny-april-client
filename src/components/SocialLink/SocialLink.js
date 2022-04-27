import st from './SocialLink.module.scss'
const SocialLink = ({variant}) => {
    const logoName = (variant) => {
        if(variant === 'twiter') {
            return "icon-twitter"
        }
        if(variant === 'vk') {
            return "icon-vk"
        }
        if(variant === 'whatsapp') {
            return "icon-whatsapp"
        }
    }
    return (
        <div className={st.socialLink}>
            <div className={logoName(variant)}></div>
        </div>
    )
}
export default SocialLink;