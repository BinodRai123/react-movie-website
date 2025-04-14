const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="search">
      <div>
        <img src="public/icons/magnifier.svg" alt="search logo" />

        <input type="text"
         placeholder="You Can Watch 10,000 Of Movies"
         value={searchTerm}
         onChange={(e) => {setSearchTerm(e.target.value)}}
         />
      </div>
    </div>
  );
};

export default Search;
