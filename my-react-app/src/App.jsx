
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Login from './features/Auth/components/Login'
import Register from './features/Auth/components/Register'
import UserProfile from './features/User/components/UserProfile'
import Footer from './components/footer'

function App() {

  return (
    <div className="App">
        <Header/>
        <UserProfile /> 
        <Register />
        <Routes>
            <Route path="/" element={<UserProfile />} />
            <Route path="/Register" element={< Register/>}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/UserProfile" element={<UserProfile />}></Route>
        </Routes>

        <Footer />
    </div>
  )
}

export default App
