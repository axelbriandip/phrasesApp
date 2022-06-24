import React from 'react';

const AuthorBox = ({name}) => {
    return (
        <div className='container-author'>
            <span className='author'>{name}</span>
        </div>
    );
};

export default AuthorBox;