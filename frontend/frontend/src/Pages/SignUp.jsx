import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:3530/register", data).then((res) => {
      console.log(res.data);
      navigate("/login")
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = () => {
    axios
      .get("http://localhost:3530/register")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="w-fill h-screen flex">
        <div className="w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-center border rounded-lg w-[600px] h-[400px] p-9"
          >
            <label htmlFor=""> Email</label>
            <br />
            <input
              type="text"
              {...register("email", { required: true })}
              className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
            />
            <br />
            <br />
            <label htmlFor=""> Username</label>
            <br />
            <input
              type="text"
              {...register("userName", { required: true })}
              className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
            />
            <br />
            <br />
            <label htmlFor=""> Password</label>
            <br />
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
            />
            <br />
            <br />

            <button className="w-[200px] h-[50px] border hover:bg-teal-900">
              Sign Up
            </button>
          </form>
        </div>
        <div className="w-[50%] h-[100%] flex justify-center items-center bg-teal-800">
          <h2 className="text-3xl text-white">SIGNUP</h2>
        </div>
      </div>
    </>
  );
};

export default SignUp;
