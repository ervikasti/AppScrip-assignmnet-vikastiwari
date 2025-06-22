import React, { useState } from "react";
import { navItems } from "../../configs/navigation";
import MobileMenu from "../MobileMenu/Mobilemenu";
import styles from "./Header.module.css";
import { navIcons } from "../../configs/navicons";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <section className={styles.header_actions}>
        {/* Mobile Hamburger */}
        <button
          className={styles.mobile_menu_button}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
        {/* Logo */}
        <a href="/">
          <img
            className={styles.logo}
            src="/images/Logo.png"
            alt="Brand Logo"
          />
        </a>
        <h1>LOGO</h1>
        {/* Additional Elements (Cart, Theme Toggle) */}
        <section className={styles.icon_nav}>
          {navIcons.map(
            items => (
              <a href="/" key={items.id}>
                <img
                  className={styles.icon_nav_img}
                  src={items.path}
                  alt={items.label}
                />
              </a>
            ))
          }
        </section>
      </section>

      {/* Desktop Navigation */}
      <nav className={styles.desktop_nav}>
        {navItems.map((item) => (
          <a key={item.name} href={item.href} className={styles.nav_link}>
            {item.name}
          </a>
        ))}
      </nav>

      {/* Mobile Menu (Conditional) */}
      {isMobileMenuOpen && <MobileMenu items={navItems} />}
    </header>
  );
};

export default Header;
