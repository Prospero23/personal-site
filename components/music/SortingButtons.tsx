import { Dispatch, SetStateAction } from "react";

interface SortingButtonsProps{
    isLaptop: boolean;
    setIsLaptop: Dispatch<SetStateAction<boolean>>
}

export default function SortingButtons({isLaptop, setIsLaptop}: SortingButtonsProps){
        const handleClickLaptop = () => {
          setIsLaptop(true);
        };
        const handleClickSax = () => {
          setIsLaptop(false);
        };
    
    return(
        <div className="absolute right-0 top-14  sm:right-16 sm:top-14 flex flex-col justify-center text-2xl sm:text-2xl lg:text-4xl xl:text-6xl p-4 lg:p-8 z-10">
            <button
            className={`z-10 block ${
                !isLaptop ? "underline text-purple-600" : "text-white"
            } hover:text-purple-600`}
            onClick={handleClickSax}
            >
            Sax
            </button>
            <button
            className={`z-10 block ${
                isLaptop ? "underline text-red-600" : "text-white"
            } hover:text-red-600`}
            onClick={handleClickLaptop}
            >
            Laptop
            </button>
        </div>

    )
}