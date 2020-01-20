import React from "react";
import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils, Admin, Resource } from "react-admin";
import { createBrowserHistory as createHistory } from 'history';
//驗證登入狀態
import { AuthProvider } from './Lib/Oauth';
//Container
import { Dashboard } from './Containers/Dashboard';
import { Sqlconfig } from "./Containers/Sqlconfig";
import { OrderList } from "./Containers/OrderList";
import { NotFound } from './Containers/NotFound';

//theme
import { createMuiTheme } from '@material-ui/core/styles';
//icon
import DashboardIcon from '@material-ui/icons/Dashboard';
import StorageIcon from '@material-ui/icons/Storage';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
// import jsonServerProvider from 'ra-data-json-server';


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

export const theme = createMuiTheme({
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
    MuiIconButton: {
      colorPrimary: {
        color: '#f50057',
      }
    },
    MuiCardContent: {
      root: {
        background: '#383838',
      }
    }
  },
});

const history = createHistory();
const App = () => (
  <Admin theme={theme} title="Payment System" authProvider={AuthProvider} dataProvider={dataProvider} catchAll={NotFound} history={history}>
    <Resource name="dashboard" options={{ label: 'Dashboard' }} list={Dashboard} icon={DashboardIcon} />
    <Resource name="order" options={{ label: '贊助訂單紀錄' }} list={OrderList} icon={PaymentIcon} />
    <Resource name="sqlconfig" options={{ label: '主機資料設定' }} list={Sqlconfig} icon={StorageIcon} />
    <Resource name="v1/payconfig" options={{ label: '綠界金流設定' }} icon={AccountBalanceIcon} />
  </Admin>
);

export default App;
