import { useState,useEffect, useMemo } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";


function App() {

  const [questionNumber,setquestionNumber]=useState(1);
  const [stop,setStop]=useState(false);
  const [earned,setEarned]=useState("Rs 0");

  const data = [
    {
      id: 1,
      question: "Who is the greatest footballer of all time?",
      answers:[
        {
          text:"Cristiano Ronaldo",
          correct: true,
        },
        {
          text:"Lionel Messi",
          correct: false,
        },
        {
          text:"Diego Maradona",
          correct: false,
        },
        {
          text:"Pele",
          correct: false,
        },
      ],
    },
    
      ];
  

const moneyPyramid = useMemo(() => 
 [
    { id: 1, amount:  "Rs 100" },
    { id: 2, amount:  "Rs 200" },
    { id: 3, amount:  "Rs 300" },
    { id: 4, amount:  "Rs 400" },
    { id: 5, amount:  "Rs 500" },
    { id: 6, amount:  "Rs 1000" },
    { id: 7, amount:  "Rs 2000" },
    { id: 8, amount:  "Rs 4000" },
    { id: 9, amount:  "Rs 8000" },
    { id: 10, amount:  "Rs 16000" },
    { id: 11, amount:  "Rs 32000" },
    { id: 12, amount:  "Rs 64000" },
    { id: 13, amount:  "Rs 125000" },
    { id: 14, amount:  "Rs 250000" },
    { id: 15, amount:  "Rs 500000" },
    { id: 16, amount:  "Rs 1000000" },
  
  ].reverse(),
  []
);

useEffect (() =>  {
     questionNumber >1 && 
     setEarned(moneyPyramid.find((m) =>  m.id === questionNumber - 1).amount);
    
},[moneyPyramid,questionNumber]);


  return (
    <div className="app">
          <div className="main">
            {stop ? ( 
            <h1 className="endText">You earned: {earned}</h1>
            ) : (

<> 
<div className="top">
<div className="timer">
  <Timer setStop={setStop} questionNumber={questionNumber}/></div>
</div>
<div className="bottom">

<Trivia 
data={data} 
setStop={setStop} 
questionNumber={questionNumber}
setquestionNumber={setquestionNumber}
/>
</div> 
</>
)}
          
</div>


          
          
          <div className="pyramid">
          <ul className= "moneyList">
            {moneyPyramid.map((m) => (
            <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
            ))}
          </ul>
     </div>
    </div>
  

  );
}

export default App;
