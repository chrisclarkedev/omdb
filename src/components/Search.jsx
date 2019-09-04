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
    await axios.get(`${DOMAIN}?apikey=${API_KEY}&t=${movieTitle}`)
      .then((res) => {
        console.log(res);
        const title = res.data.Title;
        const year = res.data.Year;


        this.setState({ title: title })
        this.setState({ year: year })
      }).catch(err => {

      })

  }


  render() {
    console.log(this.state.title);
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
        <Form getMovie={this.getMovie} />
        <h2>The title of the movie is{this.state.title}</h2>
        <h2>The year this came out was {this.state.year}</h2>
      </>
    );
  }
}

export default Search;