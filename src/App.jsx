import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './action';
import Posts from './Posts';



function App() {

    return (
        <div>
            <Posts />
        </div>
    )
}

export default App;