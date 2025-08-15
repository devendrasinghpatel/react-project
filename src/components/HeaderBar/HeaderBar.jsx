import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import searchImg from "../../assets/images/search.png";
import brandlogo from "../../assets/images/rcrm_logo.png";
import pluscircle from "../../assets/images/plus.png";
import gifticon from "../../assets/images/gift.png";
import mailicon from "../../assets/images/envelope.png";
import notificationicon from "../../assets/images/bell.png";

export default function HeaderBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header-bar">
        <div className="left">
          <div className="search-box desktop-only">
            <img src={searchImg} alt="" />
            <input type="text" placeholder="Search Pipeline" />
          </div>
        </div>
        <div className="center">
          <img src={brandlogo} alt="" />
        </div>
        <div className="right">
          <div className="desktop-only">
            <div className="toolbar">
              <div className="icon-btn icon-btn-blue"><img src={pluscircle} alt="Plus" /></div>
              <p className="pipe">|</p>
              <div className="icon-btn"><img src={gifticon} alt="Gift" /></div>
              <div className="icon-btn"><img src={mailicon} alt="Mail" /></div>
              <div className="icon-btn"><img src={notificationicon} alt="Bell" /></div>

              <div className="profile">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" />
                  <div className="profile-info">
                    <span className="name">Phyllis Yang</span>
                    <span className="company">Silicon Links Inc</span>
                  </div>
              </div>
            </div>
          </div>
          <button
            className="hamburger mobile-only"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}