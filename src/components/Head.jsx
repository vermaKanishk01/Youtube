import { useDispatch } from "react-redux";
import youtubeLogo from "../assets/youtube.png";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className="grid grid-flow-col p-4 m-2 shadow-lg">
            <div onClick={toggleMenuHandler} className="flex gap-2 justify-center items-center col-span-1">
                <img className="h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRznCJiKYnWlULwVdamBMhLCU6jx2ICvEvw7uHwlT43rA&s=10" alt="menu" />
                <img className="h-12" src={youtubeLogo} alt="youtube_logo" />
            </div>
            <div className="col-span-10 flex justify-center items-center">
                <input className="w-1/2 border border-gray-400 p-3 rounded-l-3xl" type="text" />
                <button className="border border-gray-400 bg-gray-200 p-3 rounded-r-3xl">Search</button>
            </div>
            <div className="flex items-center">
                <img className="h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlH0LzDqJTeorkc_ZfZUGGtjWrHOKqRzRLTAyr6TVZDg&s=10" alt="user" />
            </div>
        </div>
    )
}

export default Head