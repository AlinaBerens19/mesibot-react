import './App.css';
import React from 'react'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import PartyPage from './pages/PartyPage';
import CreateParty from './pages/CreateParty';
import AboutUs from './pages/AboutUs';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';
import Missing from './pages/Missing';
import Orders from './pages/Orders';
import PaymentMethods from './pages/PaymentMethods';
import { DataProvider } from './context/DataContext';
import Unauthorized from './pages/Unauthorized';
import ManagerDashboard from './pages/ManagerDashboard';
import RegisterPage from './pages/RegisterPage';


function App() {


  return (
    <div className="App">
      <AuthProvider>
        <DataProvider>
        <Header />
            <Routes>
              {/* Public Routes */}
              <Route exact path="/" element={<HomePage />}></Route>
              <Route path="/parties" element={<HomePage />}></Route>
              <Route path="/parties/:id" element={<PartyPage />}></Route>
              <Route path="/about" element={<AboutUs />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/unauthorized" element={<Unauthorized />}></Route>
              <Route path="/register" element={<RegisterPage />}></Route>
              
              {/* Private Routes */}
              <Route
                  path="/parties/create"
                  element={
                    <PrivateRoute allowedRoles={2}>
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
                    <PrivateRoute allowedRoles={2}>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />

                <Route exact
                  path="/dashboard/manager"
                  element={
                    <PrivateRoute allowedRoles={1}>
                      <ManagerDashboard />
                    </PrivateRoute>
                  }
                />

            {/* Missing Route */}
            <Route path="*" element={<Missing />} /> 

            </Routes>
        <Footer />
        </DataProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
