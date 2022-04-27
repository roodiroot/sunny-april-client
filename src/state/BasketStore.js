import { makeAutoObservable } from "mobx"

export class BasketStore {
    constructor(){
        this._basketItem = []
        this._basketSumm =[]
        makeAutoObservable(this)
    }
    setBasketItem(item){
        this._basketItem = item
    }
    setBasketSumm(summ){
        this._basketSumm = summ
    }
    get basketItem(){
        return this._basketItem
    }
    get basketSumm(){
        return this._basketSumm
    }
}