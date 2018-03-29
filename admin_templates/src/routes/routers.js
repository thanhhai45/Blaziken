import Demo from './../components/authorize';
import Demo1 from './../components/categories';
import Demo2 from './../components/dashboard';
import Demo3 from './../components/products';

const routers = [
    {
        path: '/',
        exact: true,
        component: Demo2
    },
    {
        path: '/category',
        exact: true,
        component: Demo1
    },
    {
        path: '/author',
        exact: true,
        component: Demo
    },
    {
        path: '/product',
        exact: true,
        component: Demo3
    },
];

export default routers;