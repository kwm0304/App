import './App.css';
import { BrowserRouter as Routes, Route, Router } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Modal from 'react-modal'

import Calendar from './components/Calendar';
import FinancialSummary from './components/FinancialSummary'

const httpLink = createHttpLink({
  uri: '/graohql'
});

const authLink = setContext((_, { headers}) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

Modal.setAppElement('#root')

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* Nav*/}
        <Routes>
          <Route 
          path="/"
          element={<Calendar />}
          />
          <Route
          path="/finances"
          element={<FinancialSummary />}
          />        
        </Routes>
      </Router>

    </ApolloProvider>
  );
}

export default App;
