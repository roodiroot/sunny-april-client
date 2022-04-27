import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import st from './Counter.module.scss'
const Counter = observer(({numberFunc, style}) => {
    const [number, setNumber] = useState(1)

    const dicrement = () => {
        if(number - 1 >= 0) {
            return number - 1
        } else {
            return number
        }
    }

    useEffect(() => {
        numberFunc(number)
    }, [number])
    

    return (
        <div style={style} className={st.wrapper}>
            <div onClick={() => setNumber(dicrement())} className={st.minus}><span>-</span></div>
            <div className={st.countWrapper}><input style={{textAlign: 'center'}} onChange={e => setNumber(e.target.value)} value={number} type="text"  /></div>
            <div onClick={() => setNumber(number + 1)} className={st.plas}><span>+</span></div>
        </div>
    )
})
export default Counter;