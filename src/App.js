import './App.css';
import React from 'react';
import {useState} from 'react';


function App() {
  let divTask2=React.createRef();
  let count4 = 0;
  let checkboxTask5=React.createRef();
  let textOut5=React.createRef();
  let selectTask6=React.createRef();
  const[output6,setOutput]=useState();
  let divTask7=React.createRef();
  let rangeInput=React.createRef();
  let divOut8=React.createRef();
  const[out9Put,setOut9put]=useState();
  let textInput10=React.createRef();



  function task1() {
    console.log('task2');
  }
  function task2() {
    divTask2.current.classList.add('active');
  }
  function task3(event) {
    console.log(event.target.value);
  }
  function task4() {
    count4++;
    console.log(count4);
  }
  function task5() {
    if (checkboxTask5.current.checked){
      // console.log(checkboxTask5.current.value);
      textOut5.current.innerHTML=checkboxTask5.current.value;
    }else{
      // console.log(0);
      textOut5.current.innerHTML=0;
  }
}
  function task6() {
    setOutput(selectTask6.current.value);
  }
  function task7() {
    function randomInt(a,b){
      let rand=a+Math.random()*(b+1-a);
      return Math.floor(rand);
    }
    let x=randomInt(0,255);
    // console.log(x);
    // function color(){
    //   return `rgb(${x},${x},${x})`;
    // }
    divTask7.current.style.backgroundColor=`rgb(${x},${x},${x})`;
  }
  function task8(event) {
    let val=event.key;
    if(!isNaN(val)){
      divOut8.current.innerHTML+=1;
    }else{
      divOut8.current.innerHTML+=0;
    }
  }
  function task9() {
    setOut9put(rangeInput.current.value);
  }

  let ar10 = [5, 6, 7];
  function task10() {
  ar10.push(textInput10.current.value);
  console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2} ref={divTask2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3}/>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5} ref={checkboxTask5}/>
        <div className="out-5" ref={textOut5}></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={selectTask6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6">{output6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={divTask7}></div>
        <button className="task-7" onClick={task7}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div className="out-8" ref={divOut8}></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9} ref={rangeInput}></input>
        <div className="out-9">{out9Put}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={textInput10}></input>
        <button className="task-10" onClick={task10}>Push</button>
      </section>
    </>
  );
}

export default App;
