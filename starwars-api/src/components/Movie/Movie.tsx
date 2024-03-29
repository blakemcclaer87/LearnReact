import React, { Fragment } from "react";
import IMovieProps from "../../interfaces/IMovieProps";
import classes from './Movie.module.css';

const Movie = (props: IMovieProps) => {
    return (
        <li className={classes.movie}>
            <h2>
                {props.movie.title}
            </h2>
            <h3>
                {props.movie.openingText}
            </h3>
            <h3>
                {props.movie.releaseDate.toDateString()}
            </h3>
        </li>
    );
}

export default Movie;