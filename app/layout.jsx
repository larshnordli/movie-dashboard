import * as React from "react";
import Link from "next/link";

export default function RootLayout({
    children,
  }) {
    return (
      <html lang="en">
        <body>
          <h1>MovieBuff</h1>
          <nav>
            <Link href="/watchlists">Watchlists</Link>
            <Link href="/movies">Movies</Link>
            <a href="/profile">Profile</a>
          </nav>
          <main>
            {children}
          </main>
        </body>
      </html>
    )
  }