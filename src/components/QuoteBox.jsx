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

    const author = quotes[index].author;
    const phrase = quotes[index].quote;

    return (
        <div className='quote-box'>
            <PhraseBox phrase={phrase}/>
            <AuthorBox name={author}/>
            <div className='buttonChangeQuote' onClick={changeQuote}></div>
        </div>
    );
};

export default QuoteBox;