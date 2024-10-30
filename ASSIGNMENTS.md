# Assignments

## Server -> Client Component + Data Fetching
Start the application and open Web Tools > Network tab (through F12 or right-click > Insepct). Follow produce:
- Click on "Movies". Inspect the "Preview" and/or "Response" for the /movies-request. What do you notice?
- Click to open any movie details. Inspect the "Preview" and/or "Response" for the /movies/id-request. What do you notice?

<details>
    <summary>Assignment and explanation</summary>
Assignment: Open the file <code>movies/[id]/page.jsx</code> and convert it into a Client Component. What do you notice?

Server Components will be pre-rendered in build time and results in a "full HTML page". When we convert it into a Client Component, the component will be rendered in the browser and will act as a React Component (with re-rendering behavior demonstrated here) and allow you to use "hooks" and other "React features".

Be aware that async/await is not supported in Client Components (you will se an error in the Console), although it practically works in this case. To solve this, we would need to split the data fetching and rendering in two different (type of) components.

Also note that the MoviePoster-component is now a Client Component, even though it is not marked as such through the "use client"-directive. This is because it is imported into and is a child of a Client Component.
</details>

### Environment Vars and Secrets
- Inspect the Network tab and open the request for first "page.js" resource. Find `./app/movies/[id]/page.jsx` in the source code. Scroll to the right, or find, `.mockapi.io/sec/movies/\").concat(id))`. What do you see?

<details>
    <summary>Assignment and explanation</summary>
    Assignment: Remove the "use client"-directive and redo the procedure. What do you see?
    
    Environment variables, like API keys or other secrets, are by default available to Server Components are are evaluated at the server and not transported to the browser. Client Components will have access to environment variables with the NEXT_PUBLIC-prefix. To avoid keys and secrets being shared to the client, always make sure to not include the prefix if the client does not need it, and use the key on the server instead.

    Optional: you can remove the NEXT_PUBLI-prefic from the environment variable if you want (and is recommended), but the Server Component will have no need to transport the env var to the browser.
</details>

## Built-in Components
### Navigation
Start the application, go to the home/root page if not already there, and open Web Tools > Network tab (through F12 or right-click > Inspect). Follow procedure:
- Click on "Watchlists"
- Click on "Movies"
- Click on "Watchlists" again. What do you notice?
- Click on "Profile". What do you notice?

<details>
    <summary>Assignment and explanation</summary>
    Assignment: Change the "Profile" link to use the <code>Link</code>-component, refresh the page if not already automatically refreshed, and redo the procedure. You should notice that all pages only cause a network request once and no full page reload is performed.
    We see that routes rendered through the built-in <code>Link</code>-component generates network requests only once, and is later cached.
    The "Profile" page will cause a full page reload because it is not using the build-in navigation element.
</detail>

### Page, Layout, Loading and Error
- Navigate to "Movies"

<details>
    <summary>Assignment and explanation</summary>
    Assignment: Create a new component Loading in the "all movies" directory, and return a text (f.ex. "Loading...").
    Import the Loading-component and wrap the rendering logic of the "all movies"-component in a React.Suspense-component, providing <cpde>Loading</code> component as a prop "fallback".

    Refresh the page a few times. What do you see?

    When we use the React.Suspense with a fallback, the loading-component will be shown while a network request is pending. It is recommended to use the file name conventions, and especially on Route Segments.

    Bonus assignment: Redo the procedure to handle *unexpected runtime errors*. "Mess up" the API-url or similar to cause an error.
</detail>

## Debugging
<details>
    <summary>Assignment and explanation</summary>
    Assignment: Attach a debugger for Server Components in your preferred way from Next Documentation > Configuring > Debugging

    Server components and "console logs" will not be displayed in the browser - breakpoints and logging for Server Components needs to be done through attachine a debugger.

    Client Components can be debugged in the web browser's DevTools -> Sources/Debugger tab, as one might be used to from "classic" React.
</detail>

If you would like to explore styling and visuals, do these assignments:

### Images
- Navigate to a movie detail. What do you think of the image styling?
- Open the movie-poster-component and inspect it. What do you see?

<details>
    <summary>Assignment and explanation</summary>
    Assignment: Replace the native <code>img</code>-element with the <code>Image</code>`-component from <code>next/image</code>. What do you notice when you refresh the page?

    Supply values to the <code>width</code> and <code>height</code> props for the component as you see fit. What do you see?

    Since Next does not have access to remote images, we need to specify the width and height manually (this is automatic for local images). The reason why it is necessary to specify these values is to prevent a "layout shift" (umbrella term). Note that remote image sources must be "allow-listed" in `next.config.js` file.
</detail>

## CSS
- Open the All Movies page
- Create a new file `global.css` in this directory and give a text color to `.heading`-elements and add the class to the `h2`-element in the component. Import the stylesheet in the component.
- Provide the heading in the Movie Detail component with the same class name (`heading`). What do you see?
- Create a new file `styles.module.css` in the movie detail directory and provide a *different* text color for the class. Import the stylesheet into the component. What do you see?

<details>
    <summary>Explanation</summary>

    Global styles apply to every route from where the stylesheet is imported, and should result in the same heading colors for All Movies and Movie Details pages.

    "Traditionally", we would expect that rules defined for an class name will override rules provided for a "sub"-class-name (which one takes precedence can depend on the order top-to-bottom).

    Next.js will scope the styles for the component through generating unique class names to avoid "same-name-collisions".
</detail>