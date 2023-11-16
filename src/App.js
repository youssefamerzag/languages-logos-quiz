import React from 'react';
import { useRef, useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import html from './imgs/html.png'
import redux from './imgs/redux.png'
import swift from './imgs/swift.png'
import mongodb from './imgs/mongodb.png'
import Reactlogo from './imgs/reactjs.png';
import ruby from './imgs/ruby.png'
import typescript from './imgs/typescript.png'
import nodejs from './imgs/nodejs.png'



function App() {
  const imgs = [
    {id : 7 , source : typescript},
    {id : 2 , source : swift},
    {id : 1 , source : html},
    {id : 4 , source : Reactlogo},
    {id : 5 , source : nodejs},
    {id : 0 , source : mongodb },
    {id : 3 , source : redux},
    {id : 6 , source : ruby},



  ]

  const words = [
    {id : 0 , answer : "mongodb"},
    {id : 1 , answer : "html"},
    {id : 2 , answer : "swift"},
    {id : 3 , answer : "redux"},
    {id : 4 , answer : "React JS"},
    {id : 5 , answer : "Node JS"},
    {id : 6 , answer : "Ruby"},
    {id : 7 , answer : "Typescript"},
  ]
  

  const wordcolor = useRef(words.map(() => React.createRef()))
  const imgbackground = useRef(imgs.map(() => React.createRef()))

  const [choosingimg , setchoosingimg] = useState()
  const [choosingword , setchoosingword] = useState()
  const [score , setscore] = useState(0)
  

  const imganswer =(id)=> {
    setchoosingimg(imgs[id].id)
    imgbackground.current[imgs[id].id].current.style.backgroundColor = 'lightblue'
    console.log(choosingimg)
  }

  const wordanswer =(id)=> {
    setchoosingword(words[id].id)
    wordcolor.current[words[id].id].current.style.backgroundColor = 'lightblue'
    console.log(choosingword)
  }

  useEffect(() => {
    if(choosingimg !== undefined && choosingword !== undefined){
      if(choosingimg === choosingword){
        setscore(score + 1)
        if(score === 8 - 1) {alert('You Win')}
        wordcolor.current[choosingword].current.style.backgroundColor = 'lightgreen';
        imgbackground.current[choosingimg].current.style.backgroundColor = 'lightgreen'
        setchoosingimg()
        setchoosingword()
      }else{
        alert('You Lose!!!')
        window.location.reload();
        wordcolor.current[choosingword].current.style.backgroundColor = 'red'
        imgbackground.current[choosingimg].current.style.backgroundColor = 'red'
        setchoosingimg()
        setchoosingword()
      }

    }
  },[imganswer, wordanswer])

 
  return (
    <div className="App">
      <h1>Quiz</h1>
      <h1>Your Score : {score} / 8</h1>
      <div id='imgs'>
        {imgs.map((img, index) => 
            <img ref={imgbackground.current[img.id]}  onClick={() => imganswer(index)} key={index} src={img.source} ></img>
          )}
      </div>
      <div id='words'>
        {words.map((word , index) => 
            <p ref={wordcolor.current[word.id]} onClick={() => wordanswer(index)} key={index} id={word.id}>{word.answer}</p>
          )}
      </div>
    </div>
  );
}

export default App;