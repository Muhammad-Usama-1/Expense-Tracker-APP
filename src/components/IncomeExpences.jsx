import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpences = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  // console.log(amounts);

  const incomes = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);
  // console.log(incomes);
  const expenses = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            +${incomes}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            -${Math.abs(expenses)}
          </p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpences;
