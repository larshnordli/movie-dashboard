import * as React from "react";
import Link from "next/link";

export default async function Page() {
    const data = await fetch(`https://${process.env.NEXT_PUBLIC_API_SECRET}.mockapi.io/sec/movies`);
    const movies = await data.json();

    return (
        <>
            <h2>All Movies</h2>
            <ol>
            {
                movies.map(movie =>
                    <li>
                        <Link key={movie.id} href={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>)
            }
            </ol>
        </>
    );
  }