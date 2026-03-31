import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import PlaySelectedMovie from './PlaySelectedMovie'

const Body = () => {

  
  

    const appRoute = createBrowserRouter([
        {path:'/',element:<Login/>},
        {path:'/browse',element:<Browse/>},
        {path:'/play',element:<PlaySelectedMovie/>}
    ])
  return (
    <div>
        <RouterProvider router={appRoute}/>
    </div>
  )
}

export default Body