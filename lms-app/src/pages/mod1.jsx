import React from 'react';
import ReactPlayer from 'react-player';

const Module1 = () => {
    return (
        <div>
            <h1>Module1</h1>
            <div className='video'>
            <ReactPlayer url='https://www.youtube.com/watch?v=pw9coI5Ugbo' />
            </div>
        </div>
    );
};

export default Module1;