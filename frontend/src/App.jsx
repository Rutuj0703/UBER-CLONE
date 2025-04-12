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
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'
import Pickup from './pages/Pickup'
import OTP from './components/OTP'
import FinishRide from './components/FinishRide'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/riding' element={<Riding />} />
        <Route path='/captain-riding' element={<CaptainRiding />} />
        <Route path='/picking-up' element={<Pickup />} />
        <Route path='/otp' element={<OTP />} />
        <Route path='/finish-ride' element={<FinishRide />} />
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
