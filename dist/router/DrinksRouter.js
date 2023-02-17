"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DrinkController_1 = require("../controllers/DrinkController");
const router = (0, express_1.Router)();
const drink = new DrinkController_1.Drink();
router.get('/:drink', drink.getCocktail);
exports.default = router;
