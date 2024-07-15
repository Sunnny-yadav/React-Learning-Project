import "./App.css";
import Layout from "./components/Layout";
import Form from "./components/Form";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import Afterlogin from "./components/Afterlogin";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <> 
    {/* root1 layout  */}
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Form />} />
        <Route path="/Login" element={<Form />} />
      </Route>
      {/* this is an another route which will not use the outlet of root layout ....this for new page...in shortcut language we can say it as root2 layout  */}
      <Route path="/Login/AfterLogin" element={<Afterlogin />} /> 
    </>
  )
);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
