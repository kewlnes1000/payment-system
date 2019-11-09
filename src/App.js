import React from "react";
import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils, Admin, Resource } from "react-admin";
import { createBrowserHistory as createHistory } from 'history';
//驗證登入狀態
import AuthProvider from './Oauth';
//Component
import Dashboard from './Component/Dashboard';
import { UserList } from "./Component/UserList";
import { OrderList } from "./Component/OrderList";
import NotFound from './Component/NotFound';

//theme
import { createMuiTheme } from '@material-ui/core/styles';
//icon
import DashboardIcon from '@material-ui/icons/Dashboard';
import StorageIcon from '@material-ui/icons/Storage';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
// import jsonServerProvider from 'ra-data-json-server';ㄋ


const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
}
const dataProvider = simpleRestProvider('/api', httpClient);
// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const history = createHistory();
const theme = createMuiTheme({
  typography: {
    "fontFamily": "\"Noto Sans TC\", sans-serif",
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  },
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
  overrides: {
    MuiButton: { // override the styles of all instances of this component
      textPrimary: {
        color: '#f50057',
      },
      root: { // Name of the rule
        color: 'white', // Some CSS
      },
    },
    MuiCardContent: {
      root: {
        background: '#383838',
      }
    }
  },
});
const App = () => (
  <Admin theme={theme} title="Payment System" authProvider={AuthProvider} dataProvider={dataProvider} theme={theme} catchAll={NotFound} history={history}>
    <Resource name="dashboard" options={{ label: 'Dashboard' }} list={Dashboard} icon={DashboardIcon} />
    <Resource name="order" options={{ label: '贊助訂單紀錄' }} list={OrderList} icon={PaymentIcon} />
    <Resource name="v1/sqlconfig" options={{ label: '資料庫設定' }} list={UserList} icon={StorageIcon} />
    <Resource name="v1/payconfig" options={{ label: '綠界金流設定' }} list={UserList} icon={AccountBalanceIcon} />
  </Admin>
);

export default App;
