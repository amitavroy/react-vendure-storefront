import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  href: string;
}

export const ButtonLink: React.FC<Props> = ({ text, href }) => {
  return (
    <Link href={href}>
      <a className="inline-block px-12 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring cursor-pointer">
        {text}
      </a>
    </Link>
  );
};
