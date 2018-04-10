import CategoryList from './../components/categories';
import ProductList from './../components/products';
import NotFound from './../components/layouts/NotFound';
const routers = [
    {
        path: '/',
        exact: true,
        component: ProductList
    },
    {
        path: '/category',
        exact: true,
        component: CategoryList
    },
     {
         path: '',
         exact: true,
         component: NotFound
     },
];

export default routers;