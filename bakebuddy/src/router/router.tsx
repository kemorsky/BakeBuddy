import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Baking from '../components/Baking/Baking'
import Breakfast from '../components/Breakfast/Breakfast'
import Lunch from '../components/Lunch/Lunch';
import Dinner from '../components/Dinner/Dinner';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
      },
    {
      path: '/baking',
      element: <Baking />
    },
    {
        path: '/breakfast',
        element: <Breakfast />
    },
    {
        path: '/lunch',
      element: <Lunch />
    },
    {
      path: '/dinner',
    element: <Dinner />
  }
    
]);

export default router;