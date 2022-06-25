import React, { useState } from 'react';
import quotes from '../quotes.json';
import AuthorBox from './AuthorBox';
import PhraseBox from './PhraseBox';

const QuoteBox = () => {
    const random = Math.floor(Math.random() * quotes.length);
    const [index, setIndex] = useState(random);
    const changeQuote = () => {
        const random = Math.floor(Math.random() * quotes.length);
        setIndex(random)
    }
    const colors = ["#c8ca66", "#c63637", "#42ab49", "#5086c1", "#a68069", "#8f7193"];
    const indexRandomColor = Math.floor(Math.random() * colors.length);
    const color = colors[indexRandomColor];

    const author = quotes[index].author;
    const phrase = quotes[index].quote;

    document.body.style.backgroundColor = color;
    return (
        <div className='quote-box' style={{color: `${color}`}}>
            <PhraseBox phrase={phrase} color={color}/>
            <AuthorBox name={author}/>
            <div className='buttonChangeQuote' style={{backgroundColor: `${color}`}} onClick={changeQuote}>
                <i className="fa-solid fa-angle-right" style={{color: "#eee"}}></i>
            </div>
        </div>
    );
};

export default QuoteBox;