import './App.css';
import React from 'react'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import PartyPage from './pages/PartyPage';
import CreateParty from './pages/CreateParty';
import { useState } from 'react';
import AboutUs from './pages/AboutUs';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';
import Missing from './pages/Missing';
import Orders from './pages/Orders';
import PaymentMethods from './pages/PaymentMethods';


function App() {

  const [parties, setParties] = useState([])
  
  
  return (
    <div className="App">
      <AuthProvider>
        <Header />
            <Routes>
              <Route exact path="/" element={<HomePage
                parties={parties}
                setParties={setParties}
              />}></Route>
              <Route path="/parties" element={<HomePage
                parties={parties}
                setParties={setParties}
              />}></Route>
              <Route path="/parties/:id" element={<PartyPage />}></Route>
              {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
              <Route path="/about" element={<AboutUs />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="*" element={<Missing />} />
              <Route
                  path="/parties/create"
                  element={
                    <PrivateRoute>
                      <CreateParty />
                    </PrivateRoute>
                  }
                />
              <Route
                  path="/orders"
                  element={
                    <PrivateRoute >
                      <Orders />
                    </PrivateRoute>
                  }
                />
              <Route
                  path="/payment-methods"
                  element={
                    <PrivateRoute >
                      <PaymentMethods />
                    </PrivateRoute>
                  }
                />      
              <Route exact
                  path="/dashboard"
                  element={
                    <PrivateRoute >
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
            </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
