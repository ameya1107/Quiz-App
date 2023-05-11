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


    {
      id: 2,
      question: "why did madhav and anish's accident happen?",
      answers:[
        {
          text:"Too much beer",
          correct: false,
        },
        {
          text:"Manhoos Mukund",
          correct: true,
        },
        {
          text:"Anish",
          correct: false,
        },
        {
          text:"Bad condition of road",
          correct: false,
        },
      ],
    },

    {
      id: 3,
      question: "why didnt bhandhari come at the accident?",
      answers:[
        {
          text:"NBC",
          correct: false,
        },
        {
          text:"Bua ki aadat",
          correct: false,
        },
        {
          text:"Fake Friend",
          correct: true,
        },
        {
          text:"Arthritis",
          correct: false,
        },
      ],
    },

    {
      id: 4,
      question: "Are anish and gunit friends?",
      answers:[
        {
          text:"YES",
          correct: false,
        },
        {
          text:"NO",
          correct: false,
        },
        {
          text:"CANT SAY",
          correct: false,
        },
        {
          text:"2K KI UDHARI",
          correct: true,
        },
      ],
    },

    {
      id: 5,
      question: "which cig is the best?",
      answers:[
        {
          text:"advance",
          correct: false,
        },
        {
          text:"mild",
          correct: false,
        },
        {
          text:"ice burst",
          correct: false,
        },
        {
          text:"rich and smooth",
          correct: true,
        },
      ],
    },

    {
      id: 6,
      question: "which branch of lnmiit is the best?",
      answers:[
        {
          text:"cse",
          correct: false,
        },
        {
          text:"cce",
          correct: false,
        },
        {
          text:"ece",
          correct: false,
        },
        {
          text:"mech",
          correct: true,
        },
      ],
    },

    {
      id: 7,
      question: "which was the best trip?",
      answers:[
        {
          text:"Bhangarh",
          correct: false,
        },
        {
          text:"Sambhar",
          correct: false,
        },
        {
          text:"Pachmari",
          correct: false,
        },
        {
          text:"O O ganja ganja",
          correct: true,
        },
      ],
    },

    {
      id: 8,
      question: "national bird of india?",
      answers:[
        {
          text:"chicken",
          correct: false,
        },
        {
          text:"piegon",
          correct: false,
        },
        {
          text:"ostrich",
          correct: false,
        },
        {
          text:"narendra modi",
          correct: true,
        },
      ],
    },

    {
      id: 10,
      question: "Teetar k do aage teetar,teetar k do peeche teetar,daye teetar baye teetar,bolo kitne teetar?",
      answers:[
        {
          text:"5",
          correct: false,
        },
        {
          text:"4",
          correct: false,
        },
        {
          text:"3",
          correct: true,
        },
        {
          text:"Ma chudaye",
          correct: false,
        },
      ],
    },

    {
      id: 10,
      question: "konsi car se ajmer jaaye?",
      answers:[
        {
          text:"baleno",
          correct: false,
        },
        {
          text:"venue",
          correct: false,
        },
        {
          text:"ignis",
          correct: true,
        },
        {
          text:"i10 grand",
          correct: false,
        },
      ],
    },

    {
      id: 11,
      question: "whose burger is the best?",
      answers:[
        {
          text:"Mcd",
          correct: false,
        },
        {
          text:"BK",
          correct: false,
        },
        {
          text:"KFC",
          correct: true,
        },
        {
          text:"mujhe kya pata mai to vadapav kahata hoon",
          correct: false,
        },
      ],
    },

    {
      id: 12,
      question: "satyam ka best friend kon hai?",
      answers:[
        {
          text:"Preetam",
          correct: true,
        },
        {
          text:"Madhav",
          correct: false,
        },
        {
          text:"Akshat",
          correct: false,
        },
        {
          text:"Bhandhari",
          correct: false,
        },
      ],
    },


    {
      id: 13,
      question: "best coffee kaha ki hai?",
      answers:[
        {
          text:"NBC",
          correct: false,
        },
        {
          text:"FNP",
          correct: false,
        },
        {
          text:"Starbucks",
          correct: false,
        },
        {
          text:"Only Beer",
          correct: true,
        },
      ],
    },

    {
      id: 14,
      question: "best ipl team?",
      answers:[
        {
          text:"MI",
          correct: true,
        },
        {
          text:"RCB",
          correct: false,
        },
        {
          text:"CSK",
          correct: false,
        },
        {
          text:"KKR",
          correct: false,
        },
      ],
    },

    {
      id: 15,
      question: "vibhishan kon tha?",
      answers:[
        {
          text:"Kaurav",
          correct: false,
        },
        {
          text:"pandav",
          correct: false,
        },
        {
          text:"ravan ka bro",
          correct: true,
        },
        {
          text:"lnmiit ka har dusra aadmi",
          correct: false,
        },
      ],
    },

    {
      id: 16,
      question: "best shop at lnmiit?",
      answers:[
        {
          text:"BABA",
          correct: true,
        },
        {
          text:"Amul",
          correct: false,
        },
        {
          text:"Bazinga",
          correct: false,
        },
        {
          text:"Food Barn",
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
