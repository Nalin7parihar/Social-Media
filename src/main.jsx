import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider,  createBrowserRouter } from 'react-router-dom'
import App from './routes/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'  
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CreatePost from './components/createpost.jsx';
import Postlist from './components/Postlist.jsx'
import {Provider} from 'react-redux'
import socialStore from './store/index.js'

const router = createBrowserRouter([
  {path : '/', element : <App/>,children : [
    {path: '/', element: <Postlist/>},
    {path: '/create-post', element: <CreatePost/>},
  ],
},
 

]);
createRoot(document.getElementById('root')).render(

  
  <StrictMode>
    <Provider store = {socialStore}>
    <RouterProvider router = {router}/>
    </Provider>
  </StrictMode>
)
