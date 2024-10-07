import { useState } from 'react';
import Link from 'next/link';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

export default function Header2({ scroll, isSearch, handleSearch, isMobileMenu, handleMobileMenu }) {
  // State to manage search input value
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <header className={`main-header header-style-two ${isSearch ? 'mobile-search-active' : ''}`}>
        {/* Header Top */}
        <div className="header-top">
          <div className="bg-lines"></div>
          <div className="inner-container">
            <div className="top-left">
              <ul className="social-icon-one light">
                <li><Link href="#"><span className="fab fa-twitter"></span></Link></li>
                <li><Link href="#"><span className="fab fa-youtube"></span></Link></li>
                <li><Link href="#"><span className="fab fa-linkedin-in"></span></Link></li>
              </ul>
            </div>
            <div className="top-right">
              <ul className="list-style-one light">
                <li><i className="fal fa-clock"></i> Monday - Friday: 9.00am - 10.00pm</li>
                <li><i className="far fa-map-marker-alt"></i> Richardson, California 62639</li>
                <li><i className="far fa-envelope"></i> <Link href="mailto:visago@mail.com">visago@mail.com</Link></li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Header Top */}

        {/* Header Lower */}
        <div className="header-lower">
          <div className="main-box">
            <div className="logo-box">
              <div className="logo"><Link href="/"><img src="images/logo-3.png" alt="Logo" title="Visago" /></Link></div>
            </div>

            <div className="nav-outer">
              <nav className="nav main-menu">
                <Menu />
              </nav>

              <div className="outer-box">
                <button className="ui-btn cart-btn"> <i className="icon fal fa-shopping-cart"></i> <span className="count">0</span> </button>
                <div className="divider"></div>
                <div className="header-search">
                  <form method="post" action="/">
                    <div className="form-group">
                      <input
                        type="text"
                        name="search-field"
                        value={searchValue}
                        onChange={handleInputChange}
                        placeholder="Search"
                        required
                      />
                      <button type="submit" className="icon"><i className="fal fa-search"></i></button>
                    </div>
                  </form>
                </div>
                <div className="btn-box">
                  <Link href="page-contact" className="theme-btn btn-style-one hover-dark">
                    <span className="btn-title">Request a Quote</span>
                  </Link>
                </div>
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <span className="icon lnr-icon-bars"></span></div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Lower */}

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenu ? 'active' : ''}`}>
          <div className="menu-backdrop" onClick={handleMobileMenu}></div>
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <Link href="/"><img src="/images/logo-3.png" alt="" /></Link>
              </div>
              <div className="close-btn" onClick={handleMobileMenu}><i className="icon fa fa-times"></i></div>
            </div>
            <MobileMenu />
            <ul className="contact-list-one">
              <li><i className="icon lnr-icon-phone-handset"></i><span className="title">Call Now</span>
                <div className="text"><Link href="tel:+92880098670">+92 (8800) - 98670</Link></div>
              </li>
              <li><i className="icon lnr-icon-envelope1"></i><span className="title">Send Email</span>
                <div className="text"><Link href="mailto:help@company.com">help@company.com</Link></div>
              </li>
              <li><i className="icon lnr-icon-map-marker"></i><span className="title">Address</span>
                <div className="text">66 Broklyant, New York India 3269</div>
              </li>
            </ul>
            <ul className="social-links">
              <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
              <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
              <li><Link href="#"><i className="fab fa-pinterest"></i></Link></li>
              <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
            </ul>
          </nav>
        </div>
        {/* End Mobile Menu */}

        {/* Header Search */}
        <div className={`search-popup ${isSearch ? 'active' : ''}`}>
          <span className="search-back-drop" onClick={handleSearch}></span>
          <button className="close-search" onClick={handleSearch}><span className="fa fa-times"></span></button>
          <div className="search-inner">
            <form method="post" action="">
              <div className="form-group">
                <input
                  type="search"
                  name="search-field"
                  value={searchValue}
                  onChange={handleInputChange}
                  placeholder="Search..."
                  required
                />
                <button type="submit"><i className="fa fa-search"></i></button>
              </div>
            </form>
          </div>
        </div>
        {/* End Header Search */}

        {/* Sticky Header */}
        <div className={`sticky-header ${scroll ? 'fixed-header animated slideInDown' : ''}`}>
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo">
                <Link href="/"><img src="/images/logo.svg" alt="Logo" /></Link>
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
        {/* End Sticky Menu */}
      </header>
    </>
  );
}
