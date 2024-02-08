import React, { useState } from 'react'
const PuttingIt = (props) => {
    const {fname, lname, color} = props;
    const [state, setState] = useState(props.initialState);

    return (
        <div>
            <h1>{fname} {lname}</h1>
            <h3>Age: {state}</h3>
            <h3>Hair Color: {color}</h3>
            <button onClick={ () => setState(state - 1)}>Birthday button for {fname} {lname}</button>
        </div>
        
    )

}

export default PuttingIt