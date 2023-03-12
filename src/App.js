import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddUser from './AddUser';
import './App.css';
import Home from './Home';
import Update from './Update';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/user')
    },
    {
      path: '/user',
      element: <AddUser></AddUser>
    },
    {
      path: '/update/:id',
      element: <Update></Update>,
      loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`)

    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
