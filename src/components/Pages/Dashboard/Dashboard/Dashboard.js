import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import ManageOrders from '../ManageOrders/ManageOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import AdminRoute from '../../../../PrivateRoutes/AdminRoute';
import UserRoute from '../../../../PrivateRoutes/UserRoute';
import DashboardOptions from '../DashboardOptions/DashboardOptions';

const Dashboard = () => {
    const { admin } = useAuth()
    const { path } = useRouteMatch();

    return (
        <div>
            <DashboardOptions />

            <Switch>
                <Route exact path={`${path}`}>
                    {admin?<MakeAdmin />:<Pay />}
                </Route>
                <UserRoute path={`${path}/my-orders`}>
                    <MyOrders />
                </UserRoute>
                <UserRoute path={`${path}/review`}>
                    <Review />
                </UserRoute>
                <AdminRoute path={`${path}/manage-orders`}>
                    <ManageOrders />
                </AdminRoute>
                <AdminRoute path={`${path}/add-product`}>
                    <AddProduct />
                </AdminRoute>
                <AdminRoute path={`${path}/manage-products`}>
                    <ManageProducts />
                </AdminRoute>
            </Switch>
        </div>
    )
}

export default Dashboard
