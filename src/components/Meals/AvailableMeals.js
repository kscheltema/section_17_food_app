// import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

// const AvailableMeals = () => {
//   const [meals, setMeals] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchMeals = async () => {
//       const response = await fetch(
//         "https://burgerbuilder-89b34-default-rtdb.firebaseio.com/meals.json"
//       );
//       const responseData = await response.json();
//       //firebase specific responseData will be an object

//       const loadedMeals = [];
//       for (const key in responseData) {
//         loadedMeals.push({
//           id: key,
//           name: responseData[key].name,
//           description: responseData[key].description,
//           price: responseData[key].price,
//         });
//       }
//       setMeals(loadedMeals);
//       setIsLoading(false);
//     };
//     fetchMeals();
//   }, []); //only need to run this component once thus no dependance required.

//   if (isLoading) {
//     return (
//       <section className={classes.MealsLoading}>
//         <p>Loading.....</p>
//       </section>
//     );
//   }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
