import React, { Fragment } from "react";
import classes from './MovieList.module.css';
import IMovieListProps from '../../interfaces/IMovieListProps';
import IMovie from "../../interfaces/IMovie";
import Movie from "../Movie/Movie";

const MovieList = (props: IMovieListProps) => {
    return (
        <Fragment>
            <ul className={classes['movies-list']}>
                {
                    props.movies.map((item: IMovie)=> {
                        return (
                                <Movie movie={item}/>
                            );
                    })
                }
            </ul>
        </Fragment>
    );
};

export default MovieList;