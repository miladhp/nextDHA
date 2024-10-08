"use client";

import Link from "next/link";
import { useState } from "react";
import { MobileMenuItem } from "../elements/MobileMenuItem";
import { MenuTree } from "@/constants/global";

export default function MobileMenu({ handleMobileMenu }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const [activeIds, setActiveIds] = useState([]);

  const handleToggle = (key) => {
    if (activeIds.includes(key)) {
      setActiveIds((oldArr) => oldArr.filter((k) => k !== key));
    } else {
      setActiveIds((oldArr) => [...oldArr, key]);
    }
  };

  return (
    <>
      {MenuTree && MenuTree.length > 0 && (
        <ul className="navigation clearfix">
          {MenuTree.map((item) =>
            MobileMenuItem(item, activeIds.includes(item.id), handleToggle)
          )}
        </ul>
      )}
      {/* <ul className="navigation clearfix">
        <li className={isActive.key === 1 ? "dropdown current" : "dropdown"}>
          <Link href="/">Home</Link>
          <ul style={{ display: `${isActive.key === 1 ? "block" : "none"}` }}>
            <li>
              <Link href="/" onClick={handleMobileMenu}>
                Home page 01
              </Link>
            </li>
            <li>
              <Link href="/index-2" onClick={handleMobileMenu}>
                Home page 02
              </Link>
            </li>
            <li>
              <Link href="/index-3" onClick={handleMobileMenu}>
                Home page 03
              </Link>
            </li>
            <li>
              <Link href="/index-4" onClick={handleMobileMenu}>
                Home page 04
              </Link>
            </li>
            <li>
              <Link href="/index-5" onClick={handleMobileMenu}>
                Home page 05
              </Link>
            </li>
          </ul>
          <div
            className={
              isActive.key === 1 ? "dropdown-btn open" : "dropdown-btn"
            }
            onClick={() => handleToggle(1)}
          >
            <span className="fa fa-angle-right" />
          </div>
        </li>

        <li className={isActive.key === 2 ? "dropdown current" : "dropdown"}>
          <Link href="#">Pages</Link>
          <ul style={{ display: `${isActive.key === 2 ? "block" : "none"}` }}>
            <li>
              <Link href="/about" onClick={handleMobileMenu}>
                About
              </Link>
            </li>
            <li
              className={
                isActive.subMenuKey === 2.1 ? "dropdown current" : "dropdown"
              }
            >
              <Link href="#">Country</Link>
              <ul
                style={{
                  display: `${isActive.subMenuKey === 2.1 ? "block" : "none"}`,
                }}
              >
                <li>
                  <Link href="/page-country" onClick={handleMobileMenu}>
                    Country Grid
                  </Link>
                </li>
                <li>
                  <Link href="/page-country-details" onClick={handleMobileMenu}>
                    Country Details
                  </Link>
                </li>
              </ul>
              <div
                className={
                  isActive.subMenuKey === 2.1
                    ? "dropdown-btn open"
                    : "dropdown-btn"
                }
                onClick={() => handleToggle(2, 2.1)}
              >
                <span className="fa fa-angle-right" />
              </div>
            </li>

            <li
              className={
                isActive.subMenuKey === 2.2 ? "dropdown current" : "dropdown"
              }
            >
              <Link href="#">Coaching</Link>
              <ul
                style={{
                  display: `${isActive.subMenuKey === 2.2 ? "block" : "none"}`,
                }}
              >
                <li>
                  <Link href="/page-course" onClick={handleMobileMenu}>
                    Coaching Grid
                  </Link>
                </li>
                <li>
                  <Link href="/page-course-details" onClick={handleMobileMenu}>
                    Coaching Details
                  </Link>
                </li>
              </ul>
              <div
                className={
                  isActive.subMenuKey === 2.2
                    ? "dropdown-btn open"
                    : "dropdown-btn"
                }
                onClick={() => handleToggle(2, 2.2)}
              >
                <span className="fa fa-angle-right" />
              </div>
            </li>

            <li
              className={
                isActive.subMenuKey === 2.3 ? "dropdown current" : "dropdown"
              }
            >
              <Link href="#">Team</Link>
              <ul
                style={{
                  display: `${isActive.subMenuKey === 2.3 ? "block" : "none"}`,
                }}
              >
                <li>
                  <Link href="/page-team" onClick={handleMobileMenu}>
                    Team Grid
                  </Link>
                </li>
                <li>
                  <Link href="/page-team-details" onClick={handleMobileMenu}>
                    Team Details
                  </Link>
                </li>
              </ul>
              <div
                className={
                  isActive.subMenuKey === 2.3
                    ? "dropdown-btn open"
                    : "dropdown-btn"
                }
                onClick={() => handleToggle(2, 2.3)}
              >
                <span className="fa fa-angle-right" />
              </div>
            </li>

            <li
              className={
                isActive.subMenuKey === 2.4 ? "dropdown current" : "dropdown"
              }
            >
              <Link href="#">Shop</Link>
              <ul
                style={{
                  display: `${isActive.subMenuKey === 2.4 ? "block" : "none"}`,
                }}
              >
                <li>
                  <Link href="/shop-products" onClick={handleMobileMenu}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop-products-sidebar"
                    onClick={handleMobileMenu}
                  >
                    Products with Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/shop-product-details" onClick={handleMobileMenu}>
                    Product Details
                  </Link>
                </li>
                <li>
                  <Link href="/shop-cart" onClick={handleMobileMenu}>
                    Cart
                  </Link>
                </li>
                <li>
                  <Link href="/shop-checkout" onClick={handleMobileMenu}>
                    Checkout
                  </Link>
                </li>
              </ul>
              <div
                className={
                  isActive.subMenuKey === 2.4
                    ? "dropdown-btn open"
                    : "dropdown-btn"
                }
                onClick={() => handleToggle(2, 2.4)}
              >
                <span className="fa fa-angle-right" />
              </div>
            </li>

            <li>
              <Link href="/page-testimonial" onClick={handleMobileMenu}>
                Testimonial
              </Link>
            </li>
            <li>
              <Link href="/page-faq" onClick={handleMobileMenu}>
                Faq
              </Link>
            </li>
            <li>
              <Link href="/page-404" onClick={handleMobileMenu}>
                404
              </Link>
            </li>
          </ul>
          <div
            className={
              isActive.key === 2 ? "dropdown-btn open" : "dropdown-btn"
            }
            onClick={() => handleToggle(2)}
          >
            <span className="fa fa-angle-right" />
          </div>
        </li>

        <li className={isActive.key === 3 ? "dropdown current" : "dropdown"}>
          <Link href="#">Visa</Link>
          <ul style={{ display: `${isActive.key === 3 ? "block" : "none"}` }}>
            <li>
              <Link href="/page-services" onClick={handleMobileMenu}>
                Visa Grid
              </Link>
            </li>
            <li>
              <Link href="/page-service-details" onClick={handleMobileMenu}>
                Visa Details
              </Link>
            </li>
          </ul>
          <div
            className={
              isActive.key === 3 ? "dropdown-btn open" : "dropdown-btn"
            }
            onClick={() => handleToggle(3)}
          >
            <span className="fa fa-angle-right" />
          </div>
        </li>

        <li className={isActive.key === 4 ? "dropdown current" : "dropdown"}>
          <Link href="#">Blog</Link>
          <ul style={{ display: `${isActive.key === 4 ? "block" : "none"}` }}>
            <li>
              <Link href="/news-grid" onClick={handleMobileMenu}>
                News Grid
              </Link>
            </li>
            <li>
              <Link href="/news-details" onClick={handleMobileMenu}>
                News Details
              </Link>
            </li>
          </ul>
          <div
            className={
              isActive.key === 4 ? "dropdown-btn open" : "dropdown-btn"
            }
            onClick={() => handleToggle(4)}
          >
            <span className="fa fa-angle-right" />
          </div>
        </li>

        <li>
          <Link href="/page-contact" onClick={handleMobileMenu}>
            Contact
          </Link>
        </li>
      </ul> */}
    </>
  );
}
