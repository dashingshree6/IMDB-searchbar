import React from 'react';

const Searchbox = ({setInput, searchChange}) => {
    return (
       <div className='pa2'>
           <input
           className='pa3 ba b--green bg-lightest-blue' 
           type="search" 
           placeholder="Enter the series name"
           onChange={searchChange}/>
       </div> 
            )
}
export default Searchbox;
