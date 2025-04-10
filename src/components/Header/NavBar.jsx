import React from "react";
import CartWidget from "./CartWidget";
import "./Navbar.css";

const NavBar = () => {
  const menuItems = [
    {
      name: "iPhone",
      links: [
        "Ver todos los modelos",
        "iPhone 16 Pro",
        "iPhone 16",
        "iPhone 15",
        "Comparar modelos",
        "Cambiarse desde Android",
      ],
    },
    {
      name: "Mac",
      links: [
        "MacBook Air",
        "MacBook Pro",
        "iMac",
        "Mac mini",
        "Comparar modelos",
      ],
    },
    {
      name: "SmartWatch",
      links: [
        "Apple Watch Series 9",
        "Apple Watch SE",
        "Apple Watch Ultra",
        "Comparar modelos",
      ],
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/images/appleLogo.webp"
            alt="Logo"
            width="100"
            height="100"
            className="d-inline-block align-top"
          />
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            {menuItems.map((item) => (
              <li key={item.name} className="nav-item dropdown">
                <button className="nav-link" aria-haspopup="true"> {/* Quitamos dropdown-toggle */}
                  {item.name}
                </button>
                <div className="dropdown-menu">
                  {item.links.map((link) => (
                    <a key={link} className="dropdown-item" href="#">
                      {link}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;