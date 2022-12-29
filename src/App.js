import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"
import store from "./app/store";
import router from "./components/Routes/Routes";

function App() {
  return (
    <div className="container mx-auto">
       <Provider store = {store}>
       <RouterProvider router={router} />

       </Provider>
   
    </div>
  );
}

export default App;
