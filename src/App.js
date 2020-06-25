import React from 'react';
import './App.css';
import ReactAnime from 'react-animejs'

const {Anime, stagger} = ReactAnime

const App = () => {
  const textToAnimate = 'Coming soon...'  

  return (
    <div className="App">
      <Anime className='visualiser' initial={[
        {
          targets: ".character",
          keyframes: [
            { translateY: -80 },
            { translateY: 0 }
          ],
          easing: 'cubicBezier(.5, .05, .1, .3)',
          loop: true,
          delay: stagger(100)
        }
      ]}>
        {textToAnimate.split('').map(character => {
          return <div className='character'>{character}</div>
        })}
      </Anime>

    </div>
  );
}

export default App;
