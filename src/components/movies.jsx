import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'
import Like from './like';

class Movies extends Component {
    state = {
        movies: getMovies()
    }
    render() {
        return (<React.Fragment>
            <h2 className="my-4">{this.renderTitle()}</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableRows()}
                </tbody>
            </table>
        </React.Fragment >);
    }

    renderTableRows = () => {
        return this.state.movies.map(movie => <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td><Like isLiked={movie.isLiked} onLikeToggle={() => this.handleLikeToggled(movie)}></Like></td>
            <td>
                <button className="btn btn-danger" onClick={() => this.handleMovieDelete(movie)}> Delete</button>
            </td>
        </tr>)
    }

    renderTitle = () => {
        if (this.state.movies.length === 0)
            return "There are no movies in the database"
        else
            return `Showing ${this.state.movies.length} movies in the database`
    }

    handleMovieDelete = (movie) => {
        //console.log(movie);
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    }

    handleLikeToggled = (movie) => {
        let movies = [...this.state.movies];
        let index = movies.indexOf(movie);
        movies[index].isLiked = !movies[index].isLiked
        this.setState({ movies });
    }
}

export default Movies;