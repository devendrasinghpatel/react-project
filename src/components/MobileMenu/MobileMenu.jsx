
// export default function MobileMenu({ open, onClose }) {
//   return (
//     <div className={`mobile-menu ${open ? "open" : ""}`}>
//       <button className="close-btn" onClick={onClose}>✕</button>
//       <div className="menu-content">
//         <input type="text" placeholder="Search Pipeline" />
//         <button className="update-btn">Request Profile Update</button>
//         <img src="/user.jpg" alt="User" className="avatar" />
//       </div>
//     </div>
//   );
// }

import searchImg from "../../assets/images/search.png";
import pluscircle from "../../assets/images/plus.png";
import gifticon from "../../assets/images/gift.png";
import mailicon from "../../assets/images/envelope.png";
import notificationicon from "../../assets/images/bell.png";
export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu ${open ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>✕</button>
      <div className="toolbar">
        <div className="left">
          <div className="search-box desktop-only">
            <img src={searchImg} alt="" />
            <input type="text" placeholder="Search Pipeline" />
          </div>
        </div>
        <div className="right">
        <div className="icon-btn icon-btn-blue"><img src={pluscircle} alt="Plus" /></div>
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
    </div>
  );
}