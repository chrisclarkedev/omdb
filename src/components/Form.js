import React from 'react';
const Form = (props) => {

  // const showCard = () => {
  //   document.querySelector('.results').classList.add('show-results');
  // }

  return (
    <div className="form-search">
      <p>Search for your favorite Movie!!</p>
      <form onSubmit={props.getMovie}>
        <div id="wrap">
          <div className="search">
            <input
              id="search"
              name="search"
              type="text"
              class="searchTerm"
              name="movieTitle"
              placeholder="Search Here.." />
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    </div >
  );
}

export default Form;