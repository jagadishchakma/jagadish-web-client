import React from 'react';
import {
    Route, Switch
} from 'react-router-dom';
import AddCategory from '../Admin/AddCategory/AddCategory';
import AddPost from '../Admin/AddPost/AddPost';
import AddTag from '../Admin/AddTag/AddTag';
import Dashboard from '../Admin/Dashboard';
import ManageCategory from '../Admin/ManageCategory/ManageCategory';

const AdminRoute = () => {
    return (
        <Switch>
            <Route exact path="/admin">
                <Dashboard/>
            </Route>
            <Route exact path="/admin/addCategory">
                <AddCategory/>
            </Route>
            <Route exact path="/admin/manageCategory">
                <ManageCategory/>
            </Route>
            <Route exact path="/admin/addPost">
                <AddPost/>
            </Route>
            <Route exact path="/admin/managePost">

            </Route>
            <Route exact path="/admin/addTag">
                <AddTag/>
            </Route>
            <Route exact path="/admin/manageTag">

            </Route>
        </Switch>
    );
};

export default AdminRoute;