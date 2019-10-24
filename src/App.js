import React from "react";
import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource } from "react-admin";
//驗證登入狀態
import AuthProvider from './AuthProvider';
//Component
import Dashboard from './Component/Dashboard';
import { UserList } from "./Component/UserList/";
import { PostList, PostEdit, PostCreate } from "./Component/PostList/";
//icon
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");
const App = () => (
  <Admin authProvider={AuthProvider} dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
