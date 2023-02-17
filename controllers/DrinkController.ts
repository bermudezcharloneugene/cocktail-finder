import axios from 'axios';

export default class Drink implements Cocktail {

    public get(name: String): any {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

}