import "./navbar.css";

import { useState, useEffect, useCallback } from "react";

const InterimNavbarBlog = (props) => {
  const { background, color } = props;
  const navStyle = {
    backgroundColor: background || "black",
    color: color || "white",
  };
  const navStyleMobile = {
    color: "white",
  };

  //Hook for menu arrow:
  const [isServicesArrowChanged, setIsServicesArrowChanged] = useState("▼");
  const servicesArrowDocumentClick = () => {
    setIsServicesArrowChanged("▼");
  };
  const [isResourcesArrowChanged, setIsResourcesArrowChanged] = useState("▼");
  const resourcesArrowDocumentClick = () => {
    setIsResourcesArrowChanged("▼");
  };
  const [isAboutUsArrowChanged, setIsAboutUsArrowChanged] = useState("▼");
  const aboutusArrowDocumentClick = () => {
    setIsAboutUsArrowChanged("▼");
  };
  //Hook for Services:
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const toggleServicesMenu = () => {
    if (isServicesVisible) {
      setIsServicesVisible(false);
      setIsServicesArrowChanged("▼");
    } else {
      setIsServicesVisible(true);
      setIsResourcesVisible(false);
      setIsAboutUsVisible(false);
      setIsServicesArrowChanged("▲");
      setIsResourcesArrowChanged("▼");
      setIsAboutUsArrowChanged("▼");
    }
  };
  const servicesDocumentClick = () => {
    setIsServicesVisible(false);
  };
  //Hook For Resources:
  const [isResourcesVisible, setIsResourcesVisible] = useState(false);
  const toggleResourcesMenu = () => {
    if (isResourcesVisible) {
      setIsResourcesVisible(false);
      setIsResourcesArrowChanged("▼");
    } else {
      setIsResourcesVisible(true);
      setIsServicesVisible(false);
      setIsAboutUsVisible(false);
      setIsResourcesArrowChanged("▲");
      setIsServicesArrowChanged("▼");
      setIsAboutUsArrowChanged("▼");
    }
  };
  const resourcesDocumentClick = () => {
    setIsResourcesVisible(false);
  };
  //Hook For About Us:
  const [isAboutUsVisible, setIsAboutUsVisible] = useState(false);
  const toggleAboutUsMenu = () => {
    if (isAboutUsVisible) {
      setIsAboutUsVisible(false);
      setIsAboutUsArrowChanged("▼");
    } else {
      setIsAboutUsVisible(true);
      setIsServicesVisible(false);
      setIsResourcesVisible(false);
      setIsAboutUsArrowChanged("▲");
      setIsServicesArrowChanged("▼");
      setIsResourcesArrowChanged("▼");
    }
  };
  const aboutUsDocumentClick = () => {
    setIsAboutUsVisible(false);
  };
  //Hook for Hamburger Icon:
  const [isNavListVisible, setisNavListVisible] = useState(false);
  const handleHamburgerClick = () => {
    if (isNavListVisible) {
      setisNavListVisible(false);
    } else {
      setisNavListVisible(true);
    }
  };
  //combined Document-handler functions:
  const handleDocumentClick = useCallback(() => {
    servicesDocumentClick();
    resourcesDocumentClick();
    aboutUsDocumentClick();
    servicesArrowDocumentClick();
    resourcesArrowDocumentClick();
    aboutusArrowDocumentClick();
  }, []);

  //hide the dropdowns once the screen is resized:
  const handleResize = () => {
    setisNavListVisible(false);
    setIsServicesVisible(false);
    setIsResourcesVisible(false);
    setIsAboutUsVisible(false);
  };

  useEffect(() => {
    // if (
    //   navStyle.backgroundColor === "transparent" ||
    //   navStyle.backgroundColor === "white"
    // ) {
    //   setIsLogoBlack(false);
    // } else {
    //   setIsLogoBlack(true);
    // }

    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleDocumentClick]);
  //closing the menu on mobile screen:
  const closeMenu = () => {
    setisNavListVisible(false);
  };
  return (
    <nav className="navbar" style={navStyle}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <h2 style={navStyle}>collegium</h2>
          </a>
        </div>
        <div
          className="menu-icon"
          onClick={handleHamburgerClick}
          style={navStyle}
        >
          &#9776;
        </div>

        <ul
          className={`nav-list ${isNavListVisible ? "show" : ""}`}
          onClick={(e) => e.stopPropagation()}
          // style={navStyleMobile}
        >
          <li className="close-button" onClick={closeMenu}>
            &#10006;
          </li>
          <a href="/" style={isNavListVisible ? navStyleMobile : navStyle}>
            <li className="nav-link-menu">Home</li>
          </a>
          <li
            className="nav-link-menu"
            onClick={toggleServicesMenu}
            style={isNavListVisible ? navStyleMobile : navStyle}
          >
            Services<span className="service-tab-space">&emsp;</span>
            <span
              className="dropdown-arrow"
              style={isNavListVisible ? navStyleMobile : navStyle}
            >
              {isServicesArrowChanged}
            </span>
            {isServicesVisible && (
              <ul
                className="sub-menu"
                style={isNavListVisible ? navStyleMobile : navStyle}
              >
                <a
                  href="/owners"
                  style={isNavListVisible ? navStyleMobile : navStyle}
                >
                  <li className="nav-link-submenu">Owners</li>
                </a>
                <a
                  href="/owners-team"
                  style={isNavListVisible ? navStyleMobile : navStyle}
                >
                  <li className="nav-link-submenu">Owners Team</li>
                </a>
                <a
                  href="/vendors"
                  style={isNavListVisible ? navStyleMobile : navStyle}
                >
                  <li className="nav-link-submenu">Vendors</li>
                </a>
              </ul>
            )}
          </li>
          <a href="/blogs" style={isNavListVisible ? navStyleMobile : navStyle}>
            <li className="nav-link-menu">Blogs</li>
          </a>
          <a
            href="/contactus"
            style={isNavListVisible ? navStyleMobile : navStyle}
          >
            <li className="nav-link-menu">Contact Us</li>
          </a>
          <a
            href="/platform/login"
            style={isNavListVisible ? navStyleMobile : navStyle}
          >
            <li className="nav-link-menu">Platform</li>
          </a>
          <a
            href="/admin/login"
            style={isNavListVisible ? navStyleMobile : navStyle}
          >
            <li className="nav-link-menu">Admin</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default InterimNavbarBlog;
