import {
  createBrowserRouter,
} from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddPlant from "../pages/AddPlant";
import AllPlants from "../pages/AllPlants";
import DetailPlant from "../pages/DetailPlant";
import Error from "../pages/Error";
import MyPlants from "../pages/MyPlants";
import UpdateMyPlants from "../pages/UpdateMyPlants";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../components/Loading";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('https://mango-server-phi.vercel.app/plants'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: 'add-plant',
        element: <PrivateRoute>
          <AddPlant></AddPlant>
        </PrivateRoute>
      },
      {
        path: 'plants',
        Component: AllPlants,
        loader: () => fetch('https://mango-server-phi.vercel.app/plants'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: 'details/:id',
        loader: ({ params }) => fetch(`https://mango-server-phi.vercel.app/plants/${params.id}`),
        Component: DetailPlant,
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: 'my-plants',
        loader: () => fetch('https://mango-server-phi.vercel.app/plants'),
        element: <PrivateRoute>
          <MyPlants></MyPlants>
        </PrivateRoute>
      },
      {
        path: 'update/:id',
        loader: ({ params }) => fetch(`https://mango-server-phi.vercel.app/plants/${params.id}`),
        Component: UpdateMyPlants
      }
    ]
  },
  {
    path: 'login',
    Component: Login
  },
  {
    path: 'register',
    Component: Register
  },
  {
    path: '/*',
    Component: Error
  }
]);

export default router;