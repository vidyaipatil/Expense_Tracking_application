import "./NewExpence.css"
import ExpenceForm from "./ExpenceForm"


function NewExpence(props){

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData)
        console.log(expenseData)
    };

    return (
        <div className="NewExpence  bg-success">
            <ExpenceForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>
    );

}
export default NewExpence