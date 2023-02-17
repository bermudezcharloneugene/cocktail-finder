"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drink = void 0;
const axios_1 = __importDefault(require("axios"));
class Drink {
    getCocktail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = req.params.drink;
            axios_1.default.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
                .then(result => {
                res.status(201).send(result.data);
            }).catch(err => {
                console.log(err);
            });
        });
    }
}
exports.Drink = Drink;
