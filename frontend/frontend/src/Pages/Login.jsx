import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();


  const onSubmit = async(data) => {
    await axios.post("http://localhost:3530/login", data)
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem('token', token)
      navigate("/account");
    })
    .catch(()=>{
      alert('Invalid credentials')
    })
  };



  return (
    <>
      <div className="w-fill h-screen flex">
        <div className="w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-center border rounded-lg w-[600px] h-[400px] p-9"
          >
            <label htmlFor=""> Username</label>
            <br />
            <input
              type="text"
              placeholder="User name"
              {...register("userName", { required: true })}
              className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
            />
            <br />
            <br />
            <label htmlFor=""> Password</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
            />
            <br />
            <br />

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[200px] h-[50px]"
              type="subbmit"
            >
              Log In
            </button>
          </form>
        </div>
        <div className="w-[50%] h-[100%] flex justify-center items-center bg-teal-800">
          <h2 className="text-3xl text-white">Login</h2>
        </div>
      </div>
    </>
  );
};

export default Login;
