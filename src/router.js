import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import Details from "./components/Details";


const router = createBrowserRouter([
    {path:"/",element:<App/>},
    {path:"/place/:title",element:<Details/>}
])


export default router