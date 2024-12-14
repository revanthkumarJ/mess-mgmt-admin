import React, { useState, useEffect } from 'react';
import FeedBackAnalyticsGraph from "../components/graphs/FeedBackAnalyticsGraph";
import { getFeedBackData } from '../api/getFeedBackdata';

export default function FeedbackAnalytics() {
  const [value, setValue] = useState([]);

  const getData = async () => {
    try {
      const vv = await getFeedBackData();
      setValue(vv);
      console.log(vv);
    } catch (error) {
      console.error("Error fetching feedback data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (value.length === 0) {
    return <div>Loading feedback data...</div>;
  }

  return (
    <FeedBackAnalyticsGraph data={value} />
  );
}


// const messAnalyticsData = [
//   {
//     mess: 'Mess 1',
//     categories: {
//       Timeliness: 3.1,
//       Neatness_cleanliness: 3.8,
//       Food_quality: 2.5,
//       Taste_of_curries: 1.9,
//       Snacks_tea_coffee_breakfast: 2.3,
//       Quantity_of_food_as_per_menu: 2.8,
//       Employee_courtesy: 4.4,
//       Uniform_wearing_by_employees: 5,
//       Cooking_as_per_menu: 3.5,
//       Cleanliness_of_wash_basins_and_wash_area: 1.9,
//     },
//     overallAverage: 3.17,
//   },
//   {
//     mess: 'Mess 2',
//     categories: {
//       Timeliness: 3.8,
//       Neatness_cleanliness: 3.1,
//       Food_quality: 2.8,
//       Taste_of_curries: 2.5,
//       Snacks_tea_coffee_breakfast: 3.1,
//       Quantity_of_food_as_per_menu: 3.8,
//       Employee_courtesy: 2.3,
//       Uniform_wearing_by_employees: 4.4,
//       Cooking_as_per_menu: 4,
//       Cleanliness_of_wash_basins_and_wash_area: 3.5,
//     },
//     overallAverage: 3.23,
//   },
//   {
//     mess: 'Mess 3',
//     categories: {
//       Timeliness: 1.9,
//       Neatness_cleanliness: 2.5,
//       Food_quality: 2.3,
//       Taste_of_curries: 2.8,
//       Snacks_tea_coffee_breakfast: 3.1,
//       Quantity_of_food_as_per_menu: 3.5,
//       Employee_courtesy: 3.8,
//       Uniform_wearing_by_employees: 3.1,
//       Cooking_as_per_menu: 5,
//       Cleanliness_of_wash_basins_and_wash_area: 2.5,
//     },
//     overallAverage: 3.0,
//   },
//   {
//     mess: 'Mess 4',
//     categories: {
//       Timeliness: 4.4,
//       Neatness_cleanliness: 3.5,
//       Food_quality: 3.1,
//       Taste_of_curries: 2.3,
//       Snacks_tea_coffee_breakfast: 1.9,
//       Quantity_of_food_as_per_menu: 2.8,
//       Employee_courtesy: 5,
//       Uniform_wearing_by_employees: 4,
//       Cooking_as_per_menu: 3.1,
//       Cleanliness_of_wash_basins_and_wash_area: 3.8,
//     },
//     overallAverage: 3.39,
//   },
//   {
//     mess: 'Mess 5',
//     categories: {
//       Timeliness: 2.8,
//       Neatness_cleanliness: 3.1,
//       Food_quality: 3.8,
//       Taste_of_curries: 3.5,
//       Snacks_tea_coffee_breakfast: 4,
//       Quantity_of_food_as_per_menu: 2.3,
//       Employee_courtesy: 3.5,
//       Uniform_wearing_by_employees: 5,
//       Cooking_as_per_menu: 2.8,
//       Cleanliness_of_wash_basins_and_wash_area: 2.3,
//     },
//     overallAverage: 3.36,
//   },
//   {
//     mess: 'Mess 6',
//     categories: {
//       Timeliness: 5,
//       Neatness_cleanliness: 4,
//       Food_quality: 4.4,
//       Taste_of_curries: 3.1,
//       Snacks_tea_coffee_breakfast: 2.8,
//       Quantity_of_food_as_per_menu: 3.5,
//       Employee_courtesy: 3.8,
//       Uniform_wearing_by_employees: 2.8,
//       Cooking_as_per_menu: 2.3,
//       Cleanliness_of_wash_basins_and_wash_area: 4.4,
//     },
//     overallAverage: 3.61,
//   },
//   {
//     mess: 'Mess 7',
//     categories: {
//       Timeliness: 2.3,
//       Neatness_cleanliness: 2.8,
//       Food_quality: 3.1,
//       Taste_of_curries: 3.8,
//       Snacks_tea_coffee_breakfast: 3.5,
//       Quantity_of_food_as_per_menu: 4.4,
//       Employee_courtesy: 2.8,
//       Uniform_wearing_by_employees: 2.3,
//       Cooking_as_per_menu: 5,
//       Cleanliness_of_wash_basins_and_wash_area: 3.1,
//     },
//     overallAverage: 3.31,
//   },
//   {
//     mess: 'Mess 8',
//     categories: {
//       Timeliness: 3.1,
//       Neatness_cleanliness: 3.5,
//       Food_quality: 2.8,
//       Taste_of_curries: 4.4,
//       Snacks_tea_coffee_breakfast: 4,
//       Quantity_of_food_as_per_menu: 3.8,
//       Employee_courtesy: 3.5,
//       Uniform_wearing_by_employees: 3.1,
//       Cooking_as_per_menu: 2.8,
//       Cleanliness_of_wash_basins_and_wash_area: 2.3,
//     },
//     overallAverage: 3.38,
//   },
//   {
//     mess: 'Mess 9',
//     categories: {
//       Timeliness: 4,
//       Neatness_cleanliness: 3.8,
//       Food_quality: 3.5,
//       Taste_of_curries: 3.8,
//       Snacks_tea_coffee_breakfast: 3.1,
//       Quantity_of_food_as_per_menu: 3.5,
//       Employee_courtesy: 4.4,
//       Uniform_wearing_by_employees: 4,
//       Cooking_as_per_menu: 3.8,
//       Cleanliness_of_wash_basins_and_wash_area: 4,
//     },
//     overallAverage: 3.74,
//   },
// ];
