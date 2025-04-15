import {createRoot} from 'react-dom/client'
import './app/styles/index.scss'
import '@mantine/core/styles.css';

import {routeTree} from './routeTree.gen'
import {createRouter, RouterProvider} from '@tanstack/react-router';

const router = createRouter({routeTree})
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const App = () => {
    return <h1>Hello World</h1>;
};

createRoot(document.getElementById('root')!).render(
    <>
        <App/>
        <RouterProvider router={router}/>
    </>
)
