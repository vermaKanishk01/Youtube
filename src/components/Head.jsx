import { useDispatch, useSelector } from "react-redux";
import youtubeLogo from "../assets/youtube.png";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const searchCache = useSelector(store => store.search);
    const dispatch = useDispatch();

    useEffect(() => {
        
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery]);
            }else{
                getSearchSuggestions()
            }
        }, 200);
    
        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        // console.log("API call:-", searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);

        dispatch(cacheResults({
            [searchQuery]: json[1],
        }));
    }

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className="flex justify-between py-4 px-11 shadow-lg">
            <div onClick={toggleMenuHandler} className="flex gap-2 justify-center items-center col-span-1">
                <img className="h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRznCJiKYnWlULwVdamBMhLCU6jx2ICvEvw7uHwlT43rA&s=10" alt="menu" />
                <img className="h-12" src={youtubeLogo} alt="youtube_logo" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <div>
                    <input
                        className="w-lg border border-gray-400 p-3 rounded-l-3xl"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="border border-gray-400 bg-gray-200 p-3 rounded-r-3xl">Search</button>
                </div>
                <div className={suggestions.length > 0 ? `absolute border border-gray-200 bg-white py-2 px-5 w-lg top-20 rounded-lg mr-17 shadow-lg` : 'hidden'}>
                    <ul>
                        {
                            suggestions?.map((s) => (
                                <li key={s} className="py-2 px-2 shadow-sm hover:bg-gray-200 cursor-pointer">{s}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="flex items-center">
                <img className="h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlH0LzDqJTeorkc_ZfZUGGtjWrHOKqRzRLTAyr6TVZDg&s=10" alt="user" />
            </div>
        </div>
    )
}

export default Head