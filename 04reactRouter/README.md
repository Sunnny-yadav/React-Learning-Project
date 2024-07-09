# React Router Project

This project is a web application built using React and React Router. It demonstrates the usage of React Router for client-side routing to create a multi-page application without full page reloads.

## Features

- **Client-Side Routing**: Efficient navigation between different pages within the application.
- **Nested Routes**: Supports nested routing to structure the app with parent-child relationships.
- **Route Parameters**: Dynamic routes with URL parameters to capture specific values.
- **Data Loading**: Fetches data using loaders for specific routes.

## Technologies Used

- **React**: Used for building the user interface and managing state.
- **React Router**: Provides navigation and routing capabilities.
- **useDataLoader Hook**: for accessing the value stored in loader attribute
- **useEffect Hook**: Handles side effects such as data fetching and updating the document title.
- **CSS Modules/Tailwind CSS**: For styling the components.


## Learnings
- **Link**:  Used to create navigational links that allow users to navigate around the application
- **NavLink**: A special version of the Link component that will add styling attributes to the rendered element when it matches the current URL.
- **Outlet**:  Used as a placeholder in parent components to render child routes. It is essential for nested routing
## How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sunnny-yadav/react-learning-projects.git
   cd react-learning-projects/04reactRouter

2. **Install Dependencis:**
   ```bash
   npm i
   ```
3. **Install React Router dependencies:**
   ```bash 
   npm install react-router-dom
   ```
4. **Start the development server:**
   ```bash
      npm run dev 
   ```

