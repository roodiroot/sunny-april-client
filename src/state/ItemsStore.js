import { makeAutoObservable } from "mobx"

export class ItemStore {
    constructor(){
        this._items = [
            {id: 1, name: 'Кот тигровый окрас', rate: 0, price: 24000, hit: false,  img: 'https://www.purinaone.ru/cat/sites/default/files/2020-06/zachem-kastrirovat-kota-ili-koshku.jpg'},
            {id: 2, name: 'Кот дикий глаз', rate: 0, price: 15990, hit: false,  img: 'https://kupipet.ru/upload/medialibrary/4c3/4c336f7a5acfe8ee6a9e98aa49e26631.jpg'},
            {id: 3, name: 'Кот серый тухляк', rate: 0, price: 65000, hit: false,  img: 'https://pet-mir.ru/wp-content/uploads/2016/06/britanskaya-korotkosherstnaya-3.jpg'},
            {id: 4, name: 'Кошка Регина Дубовицкая', rate: 0, price: 37900, hit: false,  img: 'https://mrkot.com/wp-content/uploads/2018/09/luxfon.com-31738-700x560.jpg'},
            {id: 5, name: 'Кот жиртрест', rate: 0, price: 28900, hit: true,  img: 'https://animallist.ru/assets/i/ai/4/7/4/i/3249776.jpg'},
            {id: 6, name: 'Кот смотрящий в даль', rate: 0, price: 55090, hit: true,  img: 'https://aroundpet.ru/wp-content/uploads/sportivnye-porody-koshek-2.jpg'},
            {id: 7, name: 'Кот серый один на миллион', rate: 0, price: 100000, hit: false,  img: 'https://storyfox.ru/wp-content/uploads/2018/01/12-kopiya-20.jpg'},
            {id: 8, name: 'Кошка красивая серая', rate: 0, price: 13990, hit: true,  img: 'https://rb7.ru/system/images/image_links/308769/koshka156482.jpg'},
            {id: 9, name: 'Два кота по цене одного', rate: 0, price: 49900, hit: false,  img: 'https://pm1.narvii.com/7461/9a2e74562eb1914b7ed4613288368ba224b69bb1r1-1200-750v2_hq.jpg'},
            {id: 10, name: 'Кот майкунокосящий', rate: 0, price: 34999, hit: false,  img: 'https://i.pinimg.com/originals/8d/45/fe/8d45fe1f588f002e062bdc02180c6806.jpg'},
            {id: 11, name: 'Кот белое облачко', rate: 0, price: 29009, hit: true,  img: 'https://catshere.ru/wp-content/uploads/2017/03/angora_cat_05-1024x693.jpg'},
            {id: 12, name: 'Кот прекрасный Ораньжевый', rate: 0, price: 33999, hit: true,  img: 'https://cs9.pikabu.ru/post_img/2017/06/19/6/og_og_149786016625260184.jpg'},
        ]
        this._types = [
            {id: 1, name: 'Овощи'},
            {id: 2, name: 'Фрукты'},
            {id: 3, name: 'Бахчевые'},
            {id: 4, name: 'Кустарниковые'},
            {id: 5, name: 'Ростущие'},
            {id: 6, name: 'Проростающие'},
        ]
        this._brands = [
            {id: 1, name: 'Антоновка'},
            {id: 2, name: 'Николаевский'},
            {id: 3, name: 'Дворовый'},
            {id: 4, name: 'Красиво-Пейзажный'},
            {id: 5, name: 'Черный Учкудук'},
            {id: 6, name: 'Новгородский'},
        ]
        makeAutoObservable(this)
    }
    setItems(item){
        this._items = item
    }
    setTypes(type){
        this._types = type
    }
    setBrands(brand){
        this._brands = brand
    }
    get items(){
        return this._items
    }
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
}