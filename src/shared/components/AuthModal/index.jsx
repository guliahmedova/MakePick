import { close } from "@/shared/media/imgs";
import { useEffect, useState } from "react";

const AuthModal = ({ openAuthModal, setAuthModal }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        if (openAuthModal) {
            setIsModalOpen(true);
        } else {
            setIsModalOpen(false);
        }
    }, [openAuthModal]);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setLoginData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const res = await fetch('./login.json', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const users = await res.json();
            const user = users.find(u => u.email === loginData.email && u.password === loginData.password);

            if (user) {
                alert("Login successful");
            } else {
                alert("Invalid username or password");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={`${openAuthModal ? 'fixed' : 'hidden'} top-0 bottom-0 left-0 inset-0 right-0 bg-black/40 z-50`}>
            <button className="ml-auto block w-8 h-8 rounded-full m-3" onClick={() => setAuthModal(false)}><img src={close} alt="" className="rounded-full" /></button>
            <div className={`flex flex-col items-center justify-center lg:h-full h-fit transition-all duration-500 ease-in-out ${isModalOpen ? 'scale-100' : 'scale-0'}`}>
                <div className="bg-white lg:w-4/12 md:w-7/12 w-11/12 h-fit rounded shadow">
                    <form action="#" className="p-6">
                        <h4 className="text-[#009e7f] font-medium text-xl text-center">Welcome Back</h4>
                        <p className="font-medium text-gray-500 text-center mt-5">Login with your email & password</p>
                        <input type="email" placeholder="joe@gmail.com" name="email" value={loginData.email} onChange={handleChange} className="bg-gray-100 mt-3 block w-full py-4 px-2 border shadow-sm rounded-md outline-[#009e7f]" />
                        <input type="password" name="password" value={loginData.password} onChange={handleChange} className="bg-gray-100 mt-3 block w-full py-4 px-2 border shadow-sm rounded-md outline-[#009e7f]" />
                        <button type="button" onClick={handleSubmit} className="bg-[#009e7f] shadow-md rounded-md text-white font-medium w-full mt-3 py-4 text-xl">Continue</button>
                        <p className="text-center mt-3 flex items-center gap-3 text-gray-500"><span className="h-px opacity-10 w-full bg-black"></span><span>or</span><span className="h-px opacity-10 w-full bg-black"></span></p>
                        <p className="text-center mt-6 font-medium text-gray-500">Don't have any account? <span className="text-[#009e7f] cursor-pointer">Sign Up</span></p>
                    </form>
                    <p className="text-center font-medium bg-gray-100 py-5 text-gray-500">Forgot your password? <span className="text-[#009e7f] cursor-pointer">Reset It</span></p>
                </div>
            </div>
        </div>
    )
}

export default AuthModal