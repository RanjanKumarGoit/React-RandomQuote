import React, { useState, useEffect } from 'react';



const Quotes = () => {
  const [colour, setColour] = useState('red');
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const changeColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    // console.log(randomColor)
    // setColour(randomColor)
    document.getElementsByTagName("BODY")[0].style.backgroundColor= '#' + randomColor;
    
  }
  useEffect(() => {
    getQuote()
    console.log("first")
  }, []);

  const getQuote = () => {
    let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
  }

  const handleClick = () => {
    getQuote();
    changeColor();
  }

  return (
    <div id="quote-box">
      <div id="text"><p>{quote}</p></div>
      <div id="author"><p>{author}</p></div>

      <div id="buttons">
        <button onClick={handleClick} id="new-quote">New Quote</button>
      </div>
    </div>
  )
}

export default Quotes;