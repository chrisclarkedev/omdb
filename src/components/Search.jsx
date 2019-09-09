import React from 'react';
import axios from 'axios';
import Form from './Form';
const DOMAIN = 'http://www.omdbapi.com/';
const API_KEY = '2abf65eb';


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
        const poster = res.data.Poster;
        const genre = res.data.Genre;
        const plot = res.data.Plot;


        this.setState({ title: title })
        this.setState({ year: year })
        this.setState({ poster: poster })
        this.setState({ genre: genre })
        this.setState({ plot: plot })
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
        <Form getMovie={this.getMovie} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="wrapper">
          <div className="container">
            <div className="img-container">
              <br></br>
              <img src={this.state.poster} />
              <div className="title">
                <h6><span>release year</span></h6>
                <p>{this.state.year}</p>
              </div>
            </div>
            <div className="content">
              <div className="plot">
                <h3>{this.state.title}</h3>
                <p1>{this.state.genre}</p1>
                <p>{this.state.plot}</p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </>
    );
  }
}

export default Search;