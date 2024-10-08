import { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSearch,
  handleSearch,
}) {
  // State to track if the component is rendered on the client
  const [isClient, setIsClient] = useState(false);

  // State to manage the search field input value
  const [searchValue, setSearchValue] = useState("");

  // Ensure this runs only on the client after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handler for search input field change
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <header
        className={`main-header header-style-one outer-box-position ${
          isSearch ? "mobile-search-active" : ""
        }`}
      >
        {/* Header Lower */}
        <div className="header-lower">
          <div className="main-box">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <img
                    className="w-100"
                    src={
                      scroll && isClient
                        ? "/images/logo-black.svg"
                        : "/images/logo-white.svg"
                    }
                    alt="Logo"
                    title="DHANANI"
                  />
                </Link>
              </div>
            </div>

            {/* Nav Box */}
            <div className="nav-outer">
              <nav className="nav main-menu">
                <Menu />
              </nav>
              <div className="outer-box">
                {/* <button className="ui-btn cart-btn">
                  <i className="icon fal fa-shopping-cart"></i>
                  <span className="count">0</span>
                </button>

                <div className="header-search">
                  <form method="post" action="/">
                    <div className="form-group">
                      <input
                        type="text"
                        name="search-field"
                        value={searchValue}
                        onChange={handleSearchChange}
                        placeholder="Search"
                        required
                      />
                      <button type="submit" className="icon">
                        <i className="fal fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div> */}

                {/* <div className="btn-box">
                  <Link href="tel:+92(8800)9806" className="info-btn-two">
                    <i className="icon fa fa-phone"></i>
                    <small>Make A Call:</small>
                    <strong>+36 55 540 069</strong>
                  </Link>
                </div> */}

                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <span className="icon lnr-icon-bars"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenu ? "active" : ""}`}>
          <div className="menu-backdrop" onClick={handleMobileMenu} />
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <Link href="/">
                  <img
                    className="w-100"
                    src={
                      scroll && isClient
                        ? "/images/logo-black.svg"
                        : "/images/logo-white.svg"
                    }
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="close-btn" onClick={handleMobileMenu}>
                <i className="icon fa fa-times"></i>
              </div>
            </div>
            <MobileMenu />
            <ul className="contact-list-one light">
              <li>
                <i className="icon lnr-icon-phone-handset"></i>
                <span className="title">Call Now</span>
                <div className="text">
                  <Link href="tel:+92880098670">+92 (8800) - 98670</Link>
                </div>
              </li>
              <li>
                <i className="icon lnr-icon-envelope1"></i>
                <span className="title">Send Email</span>
                <div className="text">
                  <Link href="mailto:help@company.com">help@company.com</Link>
                </div>
              </li>
              <li>
                <i className="icon lnr-icon-map-marker"></i>
                <span className="title">Address</span>
                <div className="text">66 Broklyant, New York India 3269</div>
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <Link href="#">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-pinterest"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Header Search */}
        <div className={`search-popup ${isSearch ? "active" : ""}`}>
          <span className="search-back-drop" onClick={handleSearch} />
          <button className="close-search" onClick={handleSearch}>
            <span className="fa fa-times"></span>
          </button>
          <div className="search-inner">
            <form method="post" action="/">
              <div className="form-group">
                <input
                  type="search"
                  name="search-field"
                  value={searchValue}
                  onChange={handleSearchChange}
                  placeholder="Search..."
                  required
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Sticky Header */}
        <div
          className={`sticky-header ${
            scroll && isClient ? "fixed-header animated slideInDown" : ""
          }`}
        >
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo">
                <Link href="/">
                  <img
                    className="w-100"
                    src={
                      scroll && isClient
                        ? "/images/logo-black.svg"
                        : "/images/logo-white.svg"
                    }
                    alt="DHANANI"
                  />
                </Link>
              </div>
              <div className="nav-outer">
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <Menu />
                  </div>
                </nav>
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <span className="icon fa-sharp far fa-bars"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
