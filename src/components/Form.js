import React from 'react';
const Form = (props) => {

  const showCard = () => {
    document.querySelector('.result-card').classList.add('show-result-card');
  }

  return (
    <div className="form-search">
      <h4>Search for your favorite Movie!!</h4>
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
            <button type="submit" class="searchButton" onClick={showCard}>
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    </div >
  );
}

export default Form;