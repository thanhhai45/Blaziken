import CategoryList from './../components/categories';
import ProductList from './../components/products';
import Author from './../components/authorize';
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
    // {
    //     path: '/author',
    //     exact: true,
    //     component: Author
    // },
];

export default routers;