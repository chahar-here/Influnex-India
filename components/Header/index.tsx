"use client";
import menuData from "./menuData";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./resizable-navbar";
import { useState } from "react";
import ThemeToggler from "./ThemeToggler";

export function Header() {
  // const navItems = [
  //   {
  //     name: "Features",
  //     link: "#features",
  //   },
  //   {
  //     name: "Pricing",
  //     link: "#pricing",
  //   },
  //   {
  //     name: "Contact",
  //     link: "#contact",
  //   },
  // ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={menuData.map((item) => ({
              title: item.title,
              path: item.path || "",
              submenu: item.submenu?.map((sub) => ({
                title: sub.title,
                path: sub.path || "",
              })),
            }))}
          />
          <div className=" z-999 flex items-center gap-4">
            <ThemeToggler/>
            {/* No need of login */}
            {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {/* {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))} */}
            <NavItems
            items={menuData.map((item) => ({
              title: item.title,
              path: item.path || "",
              submenu: item.submenu?.map((sub) => ({
                title: sub.title,
                path: sub.path || "",
              })),
            }))}
          />
            <div className="flex w-full flex-col gap-4">
              {/* No need of Login Button Here */}
              {/* <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton> */}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* <DummyContent /> */}

      {/* Navbar */}
    </div>
  );
}
