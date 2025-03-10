import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import { UserDataContext } from './context/userContext'
import Start from './pages/Start'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignUp />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignUp />} />
        <Route path='/home' element={
          <UserProtectWrapper>
              <Home />
          </UserProtectWrapper>
          } />
          <Route path='/user/logout' element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }></Route>
        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
              <CaptainHome/>
          </CaptainProtectWrapper>
          } />
      </Routes>
    </div>
  )
}

export default App
