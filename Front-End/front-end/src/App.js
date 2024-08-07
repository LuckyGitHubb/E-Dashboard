// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import { Provider } from 'react-redux';
import store from './apps/store';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route element={<PrivateComponent />}>
            <Route path='/' element={<h1>Product Listing Components</h1>} />
            <Route path='/add' element={<h1>Add Product Components</h1>} />
            <Route path='/update' element={<h1>Update Product Components</h1>} />
            <Route path='/logout' element={<h1>Logout Components</h1>} />
            <Route path='/profile' element={<h1>Profile Components</h1>} />
            </Route>
            <Route path='/login' element={<Login/>}/>

            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
        <></>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
