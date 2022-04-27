import {makeAutoObservable} from 'mobx'

export class UserStore{
    constructor(){
        this._navigate = true
        this._isAuth = false
        makeAutoObservable(this)
    }
    setNavigate(bool){
        this._navigate = bool
    }
    setIsAuth(bool){
        this._isAuth = bool
    }
    get navigate(){
        return  this._navigate
    }
    get isAuth(){
        return  this._isAuth
    }
}