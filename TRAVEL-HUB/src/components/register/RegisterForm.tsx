import { SlPlane } from "react-icons/sl";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <form className="w-full max-w-120 bg-(--white) rounded-3xl shadow py-5 px-10 flex flex-col items-center gap-5 pt-10">
      <div className="flex flex-col items-center gap-2">
        <span className="p-3 rounded-full text-(--white) text-lg sm:text-2xl bg-(--indigo)">
          <SlPlane />
        </span>
        <h3 className="text-(--heading) text-3xl font-semibold">
          Create Account
        </h3>
        <p className="text-(--text-normal)">Join TravelHub and start exploring</p>
      </div>

      <div className="w-full flex flex-col items-start gap-2">
        <p className="text-md font-semibold">Name</p>
        <input type="text" className="w-full border border-(--heading) px-3 py-1.5 rounded-lg" placeholder="Enter your name" />
      </div>
      <div className="w-full flex flex-col items-start gap-2">
        <p className="text-md font-semibold">Surname</p>
        <input type="text" className="w-full border border-(--heading) px-3 py-1.5 rounded-lg" placeholder="Enter your surname" />
      </div>
      <div className="w-full flex flex-col items-start gap-2">
        <p className="text-md font-semibold">Email</p>
        <input type="email" className="w-full border border-(--heading) px-3 py-1.5 rounded-lg" placeholder="Enter your email" />
      </div>
      <div className="w-full flex flex-col items-start gap-2">
        <p className="text-md font-semibold">Password</p>
        <input type="password" className="w-full border border-(--heading) px-3 py-1.5 rounded-lg" placeholder="Enter your password" />
      </div>
      <div className="w-full flex flex-col items-start gap-2">
        <p className="text-md font-semibold">Confirm Password</p>
        <input type="password" className="w-full border border-(--heading) px-3 py-1.5 rounded-lg" placeholder="Confirm your password" />
      </div>

      <button className="w-full text-(--white) text-[16px] font-semibold bg-(--indigo) rounded-lg cursor-pointer py-2">
        Register
      </button>
      <div className="flex items-center gap-2">
        Already have an account?
        <Link className="text-(--indigo)" to="/login">
          Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
