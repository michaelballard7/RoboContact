import React  from 'react'

const SearchBox = (props) => {
    return (
      <div>
        <input 
          type='text' 
          placeholder="Search for a friend"  className="pa3 ma4 ba b--green bg-lightest-blue" 
          onChange={props.searchChange} 
        />
      </div>
    )

}

export default SearchBox;