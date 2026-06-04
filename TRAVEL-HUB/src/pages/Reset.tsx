import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuPlane } from "react-icons/lu";

export default function Reset() {
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#e6edff] px-4 py-8">
      <div className="w-full max-w-[300px] rounded-[22px] bg-white px-8 py-6 shadow-xl sm:max-w-[320px] sm:px-9">
        <div className="mb-5 flex flex-col items-center">
          <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600">
            <LuPlane className="h-[18px] w-[18px] text-white" />
          </div>

          <h1 className="text-center text-[22px] font-bold leading-tight text-gray-900">
            Reset your password
          </h1>

          <p className="mt-1 text-center text-xs text-gray-500">
            Please enter your new password
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-3">
            <label
              htmlFor="newPassword"
              className="mb-1.5 block text-xs font-semibold text-gray-700"
            >
              New Password
            </label>

            <input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="h-8 w-full rounded-md border border-gray-300 px-3 text-xs text-gray-900 outline-none transition focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="mb-1.5 block text-xs font-semibold text-gray-700"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="h-8 w-full rounded-md border border-gray-300 px-3 text-xs text-gray-900 outline-none transition focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
            />
          </div>

          {error && (
            <p className="mb-3 text-center text-xs text-red-500">{error}</p>
          )}

          <button
            type="submit"
            className="h-[34px] w-full rounded-md bg-indigo-600 text-xs font-semibold text-white transition hover:bg-indigo-700"
          >
            Save password
          </button>
        </form>
      </div>
    </div>
  );
}