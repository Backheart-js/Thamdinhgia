import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

const PrivateRoutes = [
    { path:'/', component: Dashboard },
    { path:'/login', component: Login, layout: null },

]

export default PrivateRoutes;