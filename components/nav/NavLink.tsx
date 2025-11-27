import Link from "next/link";
import TransitionLink from "../utils/TransitionLink";

interface NavLinkProps {
  href: string;
  text: string;
  onClick: () => void;
}

export default function NavLink({ href, text, onClick }: NavLinkProps) {
  return (
    <TransitionLink
      href={href}
      onClick={onClick}
      className="text-ghost-white hover:underline underline-offset-4 active:text-pink-400"
    >
      {text}
    </TransitionLink>
  );
}
