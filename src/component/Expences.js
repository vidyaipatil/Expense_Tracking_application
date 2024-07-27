import "./Expences.css"

import ExpenceItem from "./ExpenceItem";

function Expences(props){
     return (<div className="container-fluid d-flex main">
        {
            props.item.map(
                expense =>(
                    <ExpenceItem
                    className="expense-item"
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                    url={expense.url}
                />

                )
            )
        }
       
    
    </div>
    
    

     );
}

export default Expences