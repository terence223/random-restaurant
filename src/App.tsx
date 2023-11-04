import RandomSearch from './pages/RandomSearch';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  overflow: hidden;
  border-radius: 6px;
  margin: 0 auto;
`;

const router = createBrowserRouter([{ path: `*`, element: <RandomSearch /> }]);

function App() {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
