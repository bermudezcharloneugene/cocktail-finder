import { Router } from "express";
import { Drink } from "../controllers/DrinkController";

const router = Router();
const drink = new Drink();

router.get('/:drink', drink.getCocktail)

export default router;