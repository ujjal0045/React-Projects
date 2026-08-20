import "./Lottery.css";

export default function Lottery(){

  let lotteryCheck = (num) =>{
    const result = document.querySelector(".result");
    result.innerText = `Checking... 🎲`;
    result.style.color = "white";
    let sum = 0;
    while(num > 0){
      let digit = num % 10;
      sum += digit;
      num = Math.floor(num / 10);
    }
    if(sum === 15){
      setTimeout(() => {
        result.innerText = `Congratuation, You won $1000 Dollar`;
        result.style.color = "green";
      }, 1000);
    } else{
      setTimeout(()=>{
        result.innerText = `Lose the game! try again...`;
        result.style.color = "red";
      },1000);
    }
  }

  let getRandomNumber = ()=>{
    const lotteryNum = document.getElementById("lottery-number");
    const digit = Math.floor(Math.random() * 900) + 100;
    lotteryNum.innerText = digit;
    lotteryCheck(digit);
  }

  return(
    <div className="container">
      <h2 className="head">Lottery Game</h2>
      <span className="result"></span>
      <p className="ticket">Lottery Ticket: <span id="lottery-number">000</span></p>
      <button onClick={getRandomNumber} id="btn">Get New Ticket</button>
    </div>
  );
}