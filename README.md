# Photolabs
PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts. A pre-existing API was used to build a frontend user experience for users to interact with photos!

## Fulfilled Requirements 

### Functional Requirements

* The client-side consists of the development of a React single page application (SPA) called PhotoLabs
* The server and persistence layer given as follows:
  * The data layer consists of PostgreSQL database
  * The API server consists of a Node Express.js server application
  * The server/persistence layer may require modifications for stretch goals
* The client will communicate with the API over HTTP using the JSON format

### Behavioural Requirements

1. A user can view photos from the homepage loaded from the API.
2. The user can navigate to different photo categories, also called topics.
3. The user can click on a photo to view a larger version of the photo and relevant / similar photos.
4. The user can like a photo from anywhere within the application where the photo is displayed.
5. The user can view a heart icon with a notification in the navigation if there are liked photos.
6. The navigation will consist of different topics and heart icon.
7. The client-side application will make API requests to load and persist data (i.e. relevant data is not lost after a session restarts, so after a browser refresh).

### Streches
* UI Feedback: incorporated styling updates to align with all the designer's feedback.
* Reducers with Lookup and constants: to eliminate if conditions and switch/case statements, the reducer was created by using constant values with an object lookup, taking advantage of computed property names.
* Axios: used the Axios library instead of Fetch to retrieve data. Axios is isomorphic (= it can run in the browser and nodejs with the same codebase). On the client-side (browser) it uses XMLHttpRequests.

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

### [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

### [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

For more information regarding creating the database and seeds, plase access the [backend README](./backend/README.md)

### Technical Specifications with API References

* [React](https://reactjs.org/)
* [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#gatsby-focus-wrapper)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [Express](https://expressjs.com/)
* [Axios](https://axios-http.com/docs/intro)

## Screenshots

1. Home page
!["Home page"](https://github.com/raubersn/photolabs/blob/main/docs/home.jpg)

2. Topics can be selected for filtering the photos, and an icon indicates if favourite photos were selected
!["Topics can be selected for filtering the photos, and an icon indicates if favourite photos were selected"](https://github.com/raubersn/photolabs/blob/main/docs/favourites.jpg)

3. Photos filtered by the topic _Travel_
!["Photos filtered by the topic _Travel_"](https://github.com/raubersn/photolabs/blob/main/docs/filter.png)

4. Photos can be enlarged in a modal window for more details
!["Photos can be enlarged in a modal window for more details"](https://github.com/raubersn/photolabs/blob/main/docs/modal.jpg)

5. Related photos are displayed in the modal window for further navigation
!["Related photos are displayed in the modal window for further navigation"](https://github.com/raubersn/photolabs/blob/main/docs/related.jpg)