import React from 'react';
import { useRef, useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import html from './imgs/html.png'
import redux from './imgs/redux.png'
import swift from './imgs/swift.png'
import mongodb from './imgs/mongodb.png'


function App() {
  const imgs = [
    {id : 3 , source : swift},
    {id : 0 , source : html},
    {id : 2 , source : mongodb },
    {id : 1 , source : redux}

  ]

  const words = [
    {id : 2 , answer : "mongodb"},
    {id : 0 , answer : "html"},
    {id : 3 , answer : "swift"},
    {id : 1 , answer : "redux"},
  ]
  

  const wordcolor = useRef(words.map(() => React.createRef()))
  const imgbackground = useRef(imgs.map(() => React.createRef()))

  const [choosingimg , setchoosingimg] = useState()
  const [choosingword , setchoosingword] = useState()
  

  const imganswer =(id)=> {
    setchoosingimg(imgs[id].id)
    imgbackground.current[imgs[id].id].current.style.backgroundColor = 'lightblue'
    console.log(choosingimg)
  }

  const wordanswer =(id)=> {
    setchoosingword(words[id].id)
    console.log(choosingword)
  }

  useEffect(() => {
    if(choosingimg !== undefined && choosingword !== undefined){
      if(choosingimg === choosingword){
        wordcolor.current[choosingword].current.style.backgroundColor = 'lightgreen';
        imgbackground.current[choosingimg].current.style.backgroundColor = 'lightgreen'
        setchoosingimg()
        setchoosingword()
      }else{
        wordcolor.current[choosingword].current.style.backgroundColor = 'red'
        imgbackground.current[choosingimg].current.style.backgroundColor = 'red'
        setchoosingimg()
        setchoosingword()
      }
    }
  },[imganswer, wordanswer])


  return (
    <div className="App">
      <h1>project</h1>
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