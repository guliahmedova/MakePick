import { avatar, close } from "@/shared/media/imgs"
import { NavLink } from "react-router-dom"

const Sidebar = ({ showSidebar, setShowSidebar }) => {
    return (
        <div className={`bg-black/10 w-full h-screen fixed ease-in-out duration-300 ${showSidebar ? 'left-0' : 'left-[-100%]'} top-0 bottom-0`}>
            <aside className="bg-white h-screen sm:w-96 shadow-lg overflow-y-scroll">
                <button type="button" className="w-10 bg-transparent py-5 mx-10" onClick={() => setShowSidebar(false)}><img src={close} alt="" /></button>
                <div className="bg-gray-100 flex items-center gap-5 px-10 py-10">
                    <img src={avatar} alt="" className="w-16 rounded-full" />
                    <span>
                        <h3 className="font-bold mb-2">David Kinderson</h3>
                        <span className="font-light">+990 374 987</span>
                    </span>
                </div>
                <ul className="px-10 my-10 flex gap-4 flex-col font-medium text-slate-700 border-b pb-20">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>
                <ul className="px-10 flex gap-4 flex-col font-medium text-slate-700 pb-10">
                    <li><NavLink to="settings">Your Account Settings</NavLink></li>
                    <li>Logout</li>
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar