import React from 'react'
import { useState } from 'react';

const Searchbar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search:', query);
    
  };
  return (
    <form
      onSubmit={handleSearch}
      className=" lg:ml-50 lg:mr-50 flex items-center border border-black-300  px-4 py-4 mt-8 shadow-sm bg-gray-300"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search at least 3 characters"
        className="flex-grow bg-transparent focus:outline-none text-m text-gray-700"
      />

    </form>
  )
}

export default Searchbar