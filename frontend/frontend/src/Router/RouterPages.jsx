import { Routes, Route } from "react-router-dom"
import {Account,Home, SignUp, Login} from "../Pages/index.js"

const RouterPages = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      
      <Route path="/login" element={<Login/>}/>
    </Routes>
    
    </>
  )
}

export default RouterPages