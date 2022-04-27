import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../..'
import st from './AddItem.module.scss'
const AddItem = observer(({variant, onClick}) => {
    const variantButton = () => {
        if(variant === 'bg') {
            return st.addButtonBG
        }
        if(variant === 'add') {
            return st.addButtonPlas
        }
    }

    return (
        <div onClick={onClick}>
            <div className={variantButton()}><span>{variant === 'bg' ? '✓' : '+' }</span></div>
        </div>
    )
})
export default AddItem;