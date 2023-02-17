import { Router } from "express";
import Drink from "../controllers/DrinkController";

const router = Router();
const drink = new Drink();

router.route('/drink').get((req, res) => drink.get('asd'))