import RandomSearch from './pages/RandomSearch';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([{ path: `*`, element: <RandomSearch /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
