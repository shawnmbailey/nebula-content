import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../JokeBox.css'

function JokeBox() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    async function fetchJoke() {
      const response = await axios.get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' }
      });
      setJoke(response.data.joke);
    }
    fetchJoke();
  }, []);

  return (
    <div className="joke-box">
      <div className="joke">{joke}</div>
      <button onClick={() => window.location.reload()}>Get Another Joke</button>
    </div>
  );
}

export default JokeBox;
