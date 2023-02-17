import { Request, Response } from 'express';
import axios from 'axios';

export class Drink {

     public async getCocktail(req: Request, res: Response ) {
        let query = req.params.drink;
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
        .then(result => {
            res.status(201).send(result.data);
        }).catch(err => {
            console.log(err)
        })
    }

}