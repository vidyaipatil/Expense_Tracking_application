import "./ExpenceItem.css";
import ExpenceDate from "./ExpenceDate";

function ExpenceItem(props) {
  console.log(props.title)
  console.log(props.url)
  
  return (
    <div >
      <div className="card box" style={{ width: '18rem' }}>
        <img src={props.url} className="card-img-top" alt="..."   style={{ height: '200px' }}/>
        <div className="card-body">
          <ExpenceDate  date={ new Date(props.date)}/>
          <h5 className="card-title title text-center">{props.title}</h5>
          {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a> */}
          <div className="amount text-center bg-success">${props.amount}</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenceItem;
