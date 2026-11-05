"use client";

import { PersonalInformationDataType } from "../types";


interface SocialIconsProps {
  personalData: PersonalInformationDataType;
  menuOpen?: boolean;
  className?: string;
}

export default function SocialIcons({
  personalData,
  menuOpen = false,
  className = "",
}: SocialIconsProps) {
  if (!personalData?.social) return null;

  return (
    <ul className={`social-icons ${className} ${menuOpen ? "menu-active" : ""}`}>
      <li>
        <a
          href={personalData.social.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github Account"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </li>
      <li>
        <a
          href={personalData.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin Account"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </li>
      <li>
        <a
          href={personalData.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Whatsapp Number"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </li>
      <li>
        <a
          href={`mailto:${personalData.social.mail}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mail"
        >
          <i className="fa-solid fa-at"></i>
        </a>
      </li>
    </ul>
  );
}
