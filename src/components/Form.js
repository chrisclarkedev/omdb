import React from 'react';

const Form = (props) => {

  const showCard = () => {
    document.querySelector('.results').classList.add('show-results');
  }
  return (
    <div className="form-search">
      <p>Search for your favorite Movie!!</p>
      <form onSubmit={props.getMovie}>
        <input
          type="text"
          name="movieTitle"
          placeholder="Search Film" />
        <button onClick={showCard}>Search</button>
      </form>
    </div>
  );
}

export default Form;