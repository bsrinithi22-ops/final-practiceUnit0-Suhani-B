// ==============================
// NUTRITION DIET CHART PROGRAM
// ==============================

// PSEUDOCODE:
// 1. Create food objects
// 2. Store foods in an array
// 3. Loop through foods
// 4. Add total calories
// 5. Check if user is over calorie goal

// ------------------------------
// Creating and Using Objects
// ------------------------------
let food1 = {
  name: "Oatmeal",
  calories: 150
};

let food2 = {
  name: "Grilled Chicken",
  calories: 300
};

let food3 = {
  name: "Salad",
  calories: 100
};

// ------------------------------
// Building Arrays
// ------------------------------
let meals = [food1, food2, food3];

// ------------------------------
// Using Arrays + Operations
// ------------------------------
let totalCalories = 0;

for (let i = 0; i < meals.length; i++) {
  totalCalories += meals[i].calories;
}

// ------------------------------
// Stringing Characters Together
// ------------------------------
console.log("Total Calories Consumed: " + totalCalories);

// ------------------------------
// Control Structures and Logic
// ------------------------------
let calorieGoal = 2000;

if (totalCalories > calorieGoal) {
  console.log("You exceeded your calorie goal!");
} else if (totalCalories < calorieGoal) {
  console.log("You are under your calorie goal.");
} else {
  console.log("You met your calorie goal exactly!");
}

// ------------------------------
// Values, Data Types, Operations
// ------------------------------
let remainingCalories = calorieGoal - totalCalories;
console.log("Remaining Calories: " + remainingCalories);