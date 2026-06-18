import { SlPlane } from "react-icons/sl";
import { Link } from "react-router-dom";

const LoginForm = () => {
    return(
    <form className="w-full max-w-120 bg-(--white) rounded-3xl shadow py-5 px-10 flex flex-col items-center gap-5 pt-10">
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="p-3 rounded-full text-(--white) text-lg sm:text-2xl bg-(--indigo) flex items-center justify-center">
          <SlPlane />
        </span>
        <h3 className="text-(--heading) text-3xl font-bold mt-2">
          TravelHub
        </h3>
        <p className="text-(--text-normal) text-sm">
          Welcome back! Please login to your account
        </p>
      </div>

      <div className="w-full flex flex-col items-start gap-2">
        <p className="text-sm font-semibold text-(--heading)">Email Address</p>
        <input type="email" className="w-full border border-gray-300 px-3 py-2 rounded-lg " placeholder="Enter your email" />
      </div>

      <div className="w-full flex flex-col items-start gap-2">
        <p className="text-sm font-semibold text-(--heading)">Password</p>
        <input type="password" className="w-full border border-gray-300 px-3 py-2 rounded-lg " placeholder="Enter your password"  />
      </div>

      <div className="w-full flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 cursor-pointer text-(--heading) font-medium">
        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-(--indigo) " />
          Remember me
      </label>
      <Link className="text-(--indigo) font-medium hover:underline" to="/forgot-password">
        Forgot Password?
      </Link>
    </div>

    
    <Link  to = {`/Home`} className="w-full text-(--white) text-[16px] font-semibold bg-(--indigo) rounded-lg cursor-pointer py-2.5 mt-2 hover:opacity-90 transition-opacity flex items-center justify-center">
      Login
    </Link>

    <div className="flex items-center gap-1 text-sm text-(--text-normal) mt-2">
      Don't have an account?
      <Link className="text-(--indigo) font-semibold hover:underline" to="/register">
      Register
      </Link>
    </div>
  </form>

    );

}

export default LoginForm;