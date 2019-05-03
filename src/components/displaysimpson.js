import React from 'react';

const DisplaySimpson = ({simpson}) =>{
    return (
        <div>
            <img src={simpson.image} alt="simpson"/>
            <h2>{simpson.character}  </h2>
            <q>{simpson.quote}</q>
            
                    </div>
    )
}

export default  DisplaySimpson;