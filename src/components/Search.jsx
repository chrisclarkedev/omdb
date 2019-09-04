import React from 'react';
import axios from 'axios';
import Form from './Form';
const DOMAIN = 'http://www.omdbapi.com/';
const API_KEY = '2abf65eb';
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`


class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      year: '',
      genre: '',
      plot: '',
    }
  }

  getMovie = async (e) => {
    e.preventDefault();
    const movieTitle = e.target.elements.movieTitle.value;
    await axios.get(`${BASE_URL}t=${movieTitle}`)
      .then((res) => {
        const title = res.data.results["0"].title;


        this.setState({ title: title })
      }).catch(err => {

      })

  }


  render() {
    return (
      <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p>This is the search section</p>
        <Form getHero={this.getMovie} />
      </>
    );
  }
}

export default Search;