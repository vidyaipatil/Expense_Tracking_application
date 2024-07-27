
import "./ExpenceDate.css"

function ExpenceDate(props){
    const month = props.date.toLocaleString('en-US', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });

    return (<div className="main2">
        <div className="e1">{day}</div>
        <div className="e2">{month}</div> 
        <div className="e3">{year}</div>
      </div >);
}

export default ExpenceDate