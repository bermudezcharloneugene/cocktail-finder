import { Router } from "express";
import { Drink } from "../controllers/DrinkController";

const router = Router();

router.route('/drink').get(Drink)