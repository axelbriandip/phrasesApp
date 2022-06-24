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

    const author = quotes[index].author;
    const phrase = quotes[index].quote;

    return (
        <div>
            <AuthorBox name={author}/>
            <PhraseBox phrase={phrase}/>
            <button onClick={changeQuote}>Cambiar autor</button>
        </div>
    );
};

export default QuoteBox;