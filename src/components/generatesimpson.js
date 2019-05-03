import React from 'react';

const GenerateSimpson = ({selectSimpson}) =>{
    return(
        <div className="GenerateSimpson">
        <button onClick={selectSimpson}>Get Simpson Quote</button>
        </div>

    );
}

export default GenerateSimpson;