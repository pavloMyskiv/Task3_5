import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routing } from './routing/routing';

const App = () => <RouterProvider router={routing} />;

export default App;
