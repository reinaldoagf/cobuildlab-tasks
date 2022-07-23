
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./containers/Layout";
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import TasksPage from './components/pages/TasksPage';
import './App.css';

function App() {
  return (    
    <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={ <LoginPage /> }/>
                        <Route exact path="/register" element={ <RegisterPage /> }/>
                        <Route exact path="/tasks" element={ <TasksPage /> }/>                        
                    </Routes>
                </Layout>
            </BrowserRouter>
  );
}

export default App;
