import { type SetStateAction } from "react";

interface ToggleMenuProps {
  isOpen: boolean;
  setIsOpen: (value: SetStateAction<boolean>) => void;
}

export default function ToggleMenu({ isOpen, setIsOpen }: ToggleMenuProps) {
  return (
    <button
      className="p-2 rounded-md border border-transparent focus:border-pink-400 text-ghost-white hover:text-pink-400 hover:cursor-pointer"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 "
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  );
}
