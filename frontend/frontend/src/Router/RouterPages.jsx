import { Routes, Route } from "react-router-dom";
import { Account, Home, SignUp, Login } from "../Pages/index.js";

const RouterPages = () => {
  const isUserSignIn = !!localStorage.getItem("token");

  console.log("is authenticated : " + isUserSignIn);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="/login" element={<Login />} />

        {/* <Route path="*" element={<h1>asdad</h1>} /> */}

        {/* {isUserSignIn ? <Route path="/account" element={<Account />} /> : ""} */}
        
        {isUserSignIn && <Route path="/account" element={<Account />} />}
      </Routes>
    </>
  );
};

export default RouterPages;
