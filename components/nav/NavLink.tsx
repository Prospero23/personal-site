import Link from "next/link";

interface NavLinkProps{
  href: string;
  text: string;
  onClick: () => void;
}

export default function NavLink({href, text, onClick}: NavLinkProps){
 return(
    <Link
    href={href}
    onClick={onClick}
    className="text-white hover:border-b border-pink-400 active:text-pink-400"
  >
    {text}
  </Link>
 )
}