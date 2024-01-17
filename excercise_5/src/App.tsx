/*
Level 0: Excersice 5 from blindma1den discord server

5. Develop a finance management application with the following features:
* 		The user records their total income.
* 		There are categories: Medical expenses, household expenses, leisure, savings, and education.
* 		The user can list their expenses within the categories and get the total for each category.
* 		The user can obtain the total of their expenses.
* 		If the user spends the same amount of money they earn, the system should display a message advising the user to reduce expenses in the category where they have spent the most money.
* 		If the user spends less than they earn, the system displays a congratulatory message on the screen.
* 		If the user spends more than they earn, the system will display advice to improve the user's financial health.
*/


import AppRouter from "./routes"
import {AppContextProvider} from "./context/AppContext"
function App() {
  return (
    <AppContextProvider>
      <AppRouter/>
    </AppContextProvider>
  );
}

export default App
