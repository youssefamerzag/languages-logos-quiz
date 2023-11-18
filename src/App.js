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

const imgs = [
  { id: 0, source: mongodb },
  { id: 1, source: html },
  { id: 2, source: swift },
  { id: 3, source: redux },
  { id: 4, source: Reactlogo },
  { id: 5, source: nodejs },
  { id: 6, source: ruby },
  { id: 7, source: typescript },
]
const words = [
  { id: 0, answer: "mongodb" },
  { id: 1, answer: "html" },
  { id: 2, answer: "swift" },
  { id: 3, answer: "redux" },
  { id: 4, answer: "React JS" },
  { id: 5, answer: "Node JS" },
  { id: 6, answer: "Ruby" },
  { id: 7, answer: "Typescript" },
]

const randomWord = [...words].sort(() => Math.random() - 0.5)
const randomImgs = [...imgs].sort(() => Math.random() - 0.5)

function App() {


  const wordcolor = useRef(words.map(() => React.createRef()))
  const imgbackground = useRef(imgs.map(() => React.createRef()))

  const [choosingimg, setchoosingimg] = useState()
  const [choosingword, setchoosingword] = useState()
  const [score, setscore] = useState(0)


  const imganswer = (id) => {
    setchoosingimg(imgs[id].id)
    imgbackground.current[imgs[id].id].current.style.backgroundColor = 'lightblue'
    if (choosingimg !== undefined) {
      imgbackground.current[choosingimg].current.style.backgroundColor = null;
    }
    console.log(choosingimg)
  }


  const wordanswer = (id) => {
    setchoosingword(words[id].id)
    wordcolor.current[words[id].id].current.style.background = 'lightblue';
    if (choosingword !== undefined) {
      wordcolor.current[choosingword].current.style.background = null
    }
  }


  useEffect(() => {
    if (choosingimg !== undefined && choosingword !== undefined) {
      if (choosingimg === choosingword) {
        setscore(score + 1)
        if (score === 8 - 1) {
          alert('You Win!!')
          window.location.reload()
        }
        wordcolor.current[choosingword].current.style.backgroundColor = 'lightgreen';
        imgbackground.current[choosingimg].current.style.backgroundColor = 'lightgreen'
        setchoosingimg()
        setchoosingword()
      } else {
        alert('You Lose!!!')
        window.location.reload();
        wordcolor.current[choosingword].current.style.backgroundColor = 'red'
        imgbackground.current[choosingimg].current.style.backgroundColor = 'red'
        setchoosingimg()
        setchoosingword()
      }

    }
  }, [imganswer, wordanswer])


  return (
    <div className="App">
      <div id='link'>
        <a href='https://github.com/youssefamerzag'><img width="50" height="50" src="https://img.icons8.com/glyph-neue/64/github.png"   alt="github"/></a>
        <a href='https://linkedin.com/in/youssefamerzag'><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/></a>
      </div>
      <h1>Your Score : {score} / 8</h1>
      <div id='imgs'>
        {randomImgs.map((img, index) =>
          <img ref={imgbackground.current[img.id]} onClick={() => imganswer(img.id)} key={img.id} id={img.id} src={img.source} ></img>
        )}
      </div>
      <div id='words'>
        {randomWord.map((word, index) =>
          <p ref={wordcolor.current[word.id]} onClick={() => wordanswer(word.id)} key={word.id} id={word.id}>{word.answer}</p>
        )}
      </div>
    </div>
  );
}

export default App;