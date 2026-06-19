import { useState } from "react";
import { SlPlane } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Šifre se ne poklapaju!");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    if (existingUsers.some((user: any) => user.email.toLowerCase() === formData.email.toLowerCase())) {
      alert("Korisnik sa ovim email-om već postoji!");
      return;
    }

    const newUser = {
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      password: formData.password 
    };
    
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Uspešna registracija! Sada se možete ulogovati.");
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-120 bg-(--white) rounded-3xl shadow py-5 px-10 flex flex-col items-center gap-5 pt-10">
      <div className="flex flex-col items-center gap-2">
        <span className="p-3 rounded-full text-(--white) text-lg sm:text-2xl bg-(--indigo)">
          <SlPlane />
        </span>
        <h3 className="text-(--heading) text-3xl font-semibold">Create Account</h3>
        <p className="text-(--text-normal)">Join TravelHub and start exploring</p>
      </div>

      <div className="w-full flex flex-col items-start gap-2">
        <p className="text-md font-semibold">Name</p>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border border-(--text-normal) px-4 py-2 focus:outline-(--indigo) rounded-lg" placeholder="Enter your name" />
      </div>
      <div className="w-full flex flex-col items-start gap-2">
        <p className="text-md font-semibold">Surname</p>
        <input type="text" name="surname" value={formData.surname} onChange={handleChange} required className="w-full border border-(--text-normal) px-4 py-2 focus:outline-(--indigo) rounded-lg" placeholder="Enter your surname" />
      </div>
      <div className="w-full flex flex-col items-start gap-2">
        <p className="text-md font-semibold">Email</p>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-(--text-normal) px-4 py-2 focus:outline-(--indigo) rounded-lg" placeholder="Enter your email" />
      </div>
      <div className="w-full flex flex-col items-start gap-2">
        <p className="text-md font-semibold">Password</p>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full border border-(--text-normal) px-4 py-2 focus:outline-(--indigo) rounded-lg" placeholder="Enter your password" />
      </div>
      <div className="w-full flex flex-col items-start gap-2">
        <p className="text-md font-semibold">Confirm Password</p>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="w-full border border-(--text-normal) px-4 py-2 focus:outline-(--indigo) rounded-lg" placeholder="Confirm your password" />
      </div>

      <button type="submit" className="w-full text-(--white) text-[16px] font-semibold bg-(--indigo) rounded-lg cursor-pointer py-2">
        Register
      </button>
      <div className="flex items-center gap-2">
        Already have an account?
        <Link className="text-(--indigo)" to="/login">Login</Link>
      </div>
    </form>
  );
};

export default RegisterForm;