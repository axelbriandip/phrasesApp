import React from 'react';

const PhraseBox = ({phrase}) => {
    return (
        <div className='container-phrase'>
            <span className='phrase'>{phrase}</span>
        </div>
    );
};

export default PhraseBox;