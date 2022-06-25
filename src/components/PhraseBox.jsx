import React from 'react';

const PhraseBox = ({phrase, color}) => {
    return (
        <div className='container-phrase'>
            <i className="fa-solid fa-quote-left quote" style={{color: `${color}`}}></i>
            <span className='phrase'>{phrase}</span>
        </div>
    );
};

export default PhraseBox;