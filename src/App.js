import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"
import store from "./app/store";
import router from "./components/Routes/Routes";
import  { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="container mx-auto">
      <Toaster/>
       <Provider store = {store}>
       <RouterProvider router={router} />

       </Provider>
   
    </div>
  );
}

export default App;
