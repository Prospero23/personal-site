import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  a: ({ children, href, ...props }) => (
    <a
      {...props}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-pink-400"
    >
      {children}
    </a>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
