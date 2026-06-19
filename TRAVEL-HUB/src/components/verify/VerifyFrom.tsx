import { SlPlane } from "react-icons/sl";
import { useNavigate } from "react-router-dom";


const VerifyForm = () => {
    const navigate = useNavigate();

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/reset");
  };
    return(
        <form onSubmit={handleVerify} className="w-full max-w-120 bg-(--white) rounded-3xl shadow py-5 px-10 flex flex-col items-center gap-5 pt-10">
            <div className="flex flex-col items-center gap-2 text-center">
                <span className="p-3 rounded-full text-(--white) text-lg sm:text-2xl bg-(--indigo) flex items-center justify-center">
                    <SlPlane />
                </span>
                <h3 className="text-(--heading) text-3xl font-bold mt-2">
                    Verify your email
                </h3>
            </div>

            <div className="w-full flex flex-col items-start gap-2 mt-2">
                <p className="text-sm font-semibold text-(--heading)">Email Address</p>
                <input type="email" className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm " placeholder="Enter your email" 
                />
            </div>

            <button className="w-full text-(--white) text-[16px] font-semibold bg-(--indigo) rounded-lg cursor-pointer py-2.5 mt-2 hover:opacity-90 transition-opacity flex items-center justify-center">
                Send Link
            </button>
        </form>
    );

}

export default VerifyForm;