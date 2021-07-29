import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Fish Curry",
    description: "Finest fish and veggies",
    price: 180,
  },
  {
    id: "m2",
    name: "Indian Thali",
    description: "A Indian specialty!",
    price: 200,
  },
  {
    id: "m3",
    name: "Nonveg Burger",
    description: "Contains Chicken",
    price: 85,
  },
  {
    id: "m4",
    name: "BreakFast",
    description: "Healthy...Contains fruits,salad,juice",
    price: 190,
  },
];
const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      id={meal.id}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
