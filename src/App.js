import React, { useState, useEffect } from "react";
import "./App.css";
import SubComponent1 from "./SubComponent1";
import NewExpence from "./component/NewExpence/NewExpence";
import Expences from "./component/Expences";

const App = () => {
    const [data, setData] = useState([]);

    // Fetch expenses from the server
    const fetchExpenses = async () => {
        try {
            const response = await fetch('http://localhost:8080/expense/v1/list/expense');
            const data = await response.json();
            console.log("Fetched data:", data);
            setData(data);
        } catch (error) {
            console.error('Error fetching expenses:', error);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    // Post a new expense to the server
    const postExpense = async (expense) => {
        try {
            const response = await fetch('http://localhost:8080/expense/v1/create/expense', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(expense),
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error posting expense:', error);
            throw error;
        }
    };

    // Handle adding a new expense
    const addExpenseHandler = async (expense) => {
        console.log("Adding expense:", expense);

        try {
            // Post the new expense
            const newExpense = await postExpense(expense);
            console.log("New expense added:", newExpense);

            // Fetch the updated list of expenses
            fetchExpenses();
        } catch (error) {
            console.error('Error adding expense:', error);
        }
    };

    return (
        <div className="container-fluid">
            <SubComponent1 />
            <NewExpence onAddExpense={addExpenseHandler} />
            <Expences item={data} />
        </div>
    );
};

export default App;
