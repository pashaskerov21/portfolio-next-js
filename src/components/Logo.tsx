"use client";

import { useMemo } from "react";

interface LogoProps {
  firstName?: string;
  lastName?: string;
  className?: string;
  infinite?: boolean;
}

export default function Logo({
  firstName,
  lastName,
  className,
  infinite = false,
}: LogoProps) {
  const animationDelay = 0.08;

  const getFirstNameLetters = useMemo(
    () => (firstName ? firstName.split("") : []),
    [firstName]
  );

  const getLastNameLetters = useMemo(
    () => (lastName ? lastName.split("") : []),
    [lastName]
  );

  return (
    <div
      className={`logo-wrapper ${infinite ? "infinite" : ""} ${className}`}
    >
      {firstName && (
        <div>
          {getFirstNameLetters.map((letter, i) => (
            <span
              key={`first-${i}`}
              style={{ animationDelay: `${i * animationDelay}s` }}
            >
              {letter}
            </span>
          ))}
        </div>
      )}

      {lastName && (
        <div>
          {getLastNameLetters.map((letter, i) => (
            <span
              key={`last-${i}`}
              style={{
                animationDelay: `${
                  getFirstNameLetters.length * animationDelay +
                  i * animationDelay
                }s`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
