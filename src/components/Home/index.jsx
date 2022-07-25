import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FranLuz from "../../assets/images/fran-luz.png"

import AnimatedLetters from '../AnimatedLetters'


import './index.scss'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['F', 'r', 'a', 'n']
  const jobArray = [
    'f',
    'u',
    'l',
    'l',
    ' ',
    's',
    't',
    'a',
    'c',
    'k',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() =>{
     setTimeout(()=> {
      setLetterClass('text-animate-hover')
    }, 4000)
  },[])

 


  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _14`}>I</span>
          <span className={`${letterClass} _15`}>'m</span> <span></span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={15}
          />
        </h1>
        <h2>Junior front-end developer / Junior back-end developer</h2>
        <Link to="/contact" className="flat-button">
          {' '}
          CONTACT ME{' '}
        </Link>
      </div>
      <div className='franIntro'>
        <img src={FranLuz} alt="fran"/>
      </div>
    </div>
  )
}

export default Home
