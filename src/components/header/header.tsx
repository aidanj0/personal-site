"use client";

import { Ubuntu } from "next/font/google";
import Link from "next/link";

const ubuntu = Ubuntu({
  weight: "400",
});

export const Header = () => {
  /**
   * Global theme logic
   */
  const setDarkTheme = () => {
    localStorage.setItem("currentTheme", "dark");
    document.documentElement.style.setProperty(
      "--theme-base",
      "var(--ctp-frappe-base)",
    );
    document.documentElement.style.setProperty(
      "--theme-text",
      "var(--ctp-frappe-text)",
    );
    document.documentElement.style.setProperty(
      "--theme-crust",
      "var(--ctp-frappe-crust)",
    );
    document.documentElement.style.setProperty(
      "--theme-mantle",
      "var(--ctp-frappe-mantle)",
    );
    document.documentElement.style.setProperty(
      "--theme-mauve",
      "var(--ctp-frappe-mauve)",
    );
  };
  const setLightTheme = () => {
    localStorage.setItem("currentTheme", "light");
    document.documentElement.style.setProperty(
      "--theme-base",
      "var(--ctp-latte-base)",
    );
    document.documentElement.style.setProperty(
      "--theme-text",
      "var(--ctp-latte-text)",
    );
    document.documentElement.style.setProperty(
      "--theme-crust",
      "var(--ctp-latte-crust)",
    );
    document.documentElement.style.setProperty(
      "--theme-mantle",
      "var(--ctp-latte-mantle)",
    );
    document.documentElement.style.setProperty(
      "--theme-mauve",
      "var(--ctp-latte-mauve)",
    );
  };
  const toggleTheme = () => {
    switch (localStorage.getItem("currentTheme")) {
      case "dark":
        setLightTheme();
        break;
      case "light":
        setDarkTheme();
        break;
      default:
        console.log(
          "Found unexpected value for 'currentTheme' - " +
            localStorage.getItem("currentTheme"),
        );
    }
  };
  /**
   * Global theme initialization
   */
  if (
    typeof localStorage !== "undefined" &&
    !localStorage.getItem("currentTheme")
  ) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)")
    ) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  } else if (
    typeof localStorage !== "undefined" &&
    !document.documentElement.style.getPropertyValue("--theme-crust")
  ) {
    if (localStorage.getItem("currentTheme") === "dark") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
    sessionStorage.setItem("themeInitFlag", "true");
  }
  /**
   * Rest of the Header component
   */
  const links = [
    {
      url: "/",
      txt: "home",
    },
    {
      url: "/subdir",
      txt: "other",
    },
  ];
  const style: string =
    "text-3xl mx-16 my-4 cursor-pointer text-theme-text hover:text-theme-mauve " +
    ubuntu.className;
  const elements = links.map((link) => (
    <Link className={style} href={link.url} key={link.url}>
      {link.txt}
    </Link>
  ));
  return (
    <div className="bg-theme-crust flex justify-around">
      <div className="flex justify-center">{elements}</div>
      <div className="flex justify-end">
        <button className={style} onClick={toggleTheme}>
          theme
        </button>
      </div>
    </div>
  );
};
