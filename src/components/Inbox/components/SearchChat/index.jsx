import React from 'react';
import './SearchChat.css';

function SearchChat({searchValue, setSearchValue}) {

//   const onSearchValueChange = (event) => {
//     console.log("event.target.value");
//     setSearchValue(event.target.value);
//   }

  return (
    <input 
    className="Search" 
    placeholder="Buscar" 
    // value= {searchValue}
    // onChange = {onSearchValueChange}
    />
  );
}

export { SearchChat };
