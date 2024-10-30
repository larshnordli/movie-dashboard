import * as React from "react";
import MoviePoster from "../movie-poster/movie-poster";

export default async function Page({params}) {
    const id = (await params).id;
    const data = await fetch(`https://${process.env.NEXT_PUBLIC_API_SECRET}.mockapi.io/sec/movies/${id}`);
    const movie = await data.json();

    return (
    <>
        <h2>{movie.title}</h2>
        <MoviePoster src={movie.poster}/>
        <p>{movie.description}</p>
    </>
    );
  }