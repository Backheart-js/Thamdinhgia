import Customers from '../pages/Customers';
import Dashboard from '../pages/Dashboard';
import Employees from '../pages/Employees';
import Department from '../pages/Department';
import Login from '../pages/Login';

const PrivateRoutes = [
    { path:'/', component: Dashboard },
    { path:'/customers', component: Customers },
    { path:'/employees', component: Employees },
    { path:'/department', component: Department },
    { path:'/login', component: Login, layout: null },

]

export default PrivateRoutes;