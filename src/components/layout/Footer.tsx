import Link from "next/link";
import * as React from "react";

const sections = [
  {
    title: "Company",
    links: [
      {
        href: "",
        label: "About",
      },
      {
        href: "",
        label: "Features",
      },
    ],
  },
  {
    title: "Socials",
    links: [
      {
        href: "",
        label: "Twitter",
      },
      {
        href: "",
        label: "Contact Us",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        href: "",
        label: "Privacy Policy",
      },
      {
        href: "",
        label: "Terms & Conditions",
      },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="border-gray-200 dark:bg-gray-900">
      <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-3">
        {sections.map((section, key) => (
          <div key={key}>
            <h2 className="mb-6 text-sm font-bold uppercase text">{section.title}</h2>
            <ul>
              {section.links.map((link, index) => (
                <li className="mb-4" key={index}>
                  <Link href={link.href}>
                    <a href="#" className="hover:underline font-medium link-item text">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <span className="block py-4 text-sm text-center text">
        © 2022 {""}
        <a href="#" className="hover:underline">
          Company™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};
