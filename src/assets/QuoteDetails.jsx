import React, { useState } from "react";
import "./QuoteDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const QuoteDetails = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const [showRole, setShowRole] = useState(false);

  const toggleRole = () => {
    setShowRole(!showRole);
  };

  const [isProcurementOpen, setIsProcurementOpen] = useState(false);

  const toggleProcurementMenu = () => {
    setIsProcurementOpen(!isProcurementOpen);
  };

  const items = [
    {
      name: "Oxygen concentrator",
      id: "#283753",
      variant: "Blue",
      quantity: "100 pieces",
      price: "$200.00",
      amount: "$2,000.00",
      deliveryDate: "2024-08-07",
      image: "Leading media.png",
    },
    {
      name: "Mechanical ventilator",
      id: "#283753",
      variant: "NIL",
      quantity: "45 Kg",
      price: "$350.00",
      amount: "$2,500.00",
      deliveryDate: "2024-08-07",
      image: "Leading media.png",
    },
    {
      name: "Patient Monitor",
      id: "#283753",
      variant: "Blue",
      quantity: "30 Units",
      price: "$300.00",
      amount: "$1,500.00",
      deliveryDate: "2024-08-07",
      image: "Leading media.png",
    },
    {
      name: "Mechanical ventilator",
      id: "#283753",
      variant: "Blue",
      quantity: "35 Units",
      price: "$200.00",
      amount: "$1,500.00",
      deliveryDate: "2024-08-07",
      image: "Leading media.png",
    },
  ];
  return (
    <div className="quote-details-container">
      <aside className="sidebar">
        <div className="logo">
          <img src="Group.png" alt="MAP Logo" />
          <p>
            <span className="no-wrap">Medical Advanced</span> Platform
          </p>
        </div>
        <ul className="menu">
          <li>
            <span className="menu-icon dashboard-icon"></span>
            Dashboard
          </li>
          <li>
            <span className="menu-icon inventory-icon"></span>
            Inventory
          </li>
          <li className={`submenu ${isProcurementOpen ? "open" : ""}`}>
            <div className="submenu-header" onClick={toggleProcurementMenu}>
              <span className="menu-icon procurement-icon"></span>
              Procurement
              <span
                className={`chevron-icon ${
                  isProcurementOpen ? "chevron-up" : "chevron-down"
                }`}
              ></span>
            </div>
            <ul className={`submenu-list ${isProcurementOpen ? "show" : ""}`}>
              <li>
                <Link to="/quotes" className="submenu-link">
                  Quotes
                </Link>
              </li>
              <li>Orders</li>
            </ul>
          </li>
          <li className="submenu">
            <span className="menu-icon finance-icon"></span>
            Finance
          </li>
          <li>
            <span className="menu-icon communication-icon"></span>
            Communication
            <span className="badge">10</span>
          </li>
          <li>
            <span className="menu-icon calendar-icon"></span>
            Calendar
            <span className="badge">10</span>
          </li>
          <li>
            <span className="menu-icon contracts-icon"></span>
            Contracts
          </li>
        </ul>
        <hr />
        <ul className="bottom-menu">
          <li>
            <span className="menu-icon support-icon"></span>Support
          </li>
          <li>
            <span className="menu-icon settings-icon"></span>Settings
          </li>
        </ul>
        <div className="user-profile">
          <img className="profile-pic" src="ai.jpg" alt="Mark Benson" />
          <div className="user-info">
            <p>Mark Benson</p>
            <div className="email-section">
              <p>markbenson@core...</p>
              <img src="sign-out.png" alt="Profile Icon" />
            </div>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="header">
          <div className="back-button">
            <span className="arrow-left">
              <FontAwesomeIcon icon={faArrowLeft} />
              Back
            </span>
          </div>
          <div className="search-bar-container">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input
              type="text"
              placeholder="Search here..."
              className="search-bar"
            />
          </div>

          <div className="header-icons">
            <span className="notification-icon">
              <i class="fa-regular fa-bell"></i>
            </span>
            <span className="notification-icon2">
              <i class="fa-regular fa-comments"></i>
            </span>
            <div className="user-avatar-container" onClick={toggleMenu}>
              <img
                className="user-avatar"
                src="Avatars.png" // Replace with the actual image path or URL
                alt="User Avatar"
              />
              <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
              {isMenuOpen && (
                <div className="megamenu">
                  <ul>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li>Logout</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>

        <section className="quote-info-section">
          <div className="quote-info-header">
            <h1>Quote details</h1>
            <p>Created on Wed, 12th June 2022, 08:00am</p>
          </div>
          <div className="quote-actions">
            <button className="respond-button">Respond</button>
            <button className="reject-button">
              <i class="fa-solid fa-xmark"></i>Reject
            </button>
          </div>
        </section>

        <section className="quote-information-container">
          <div className="quote-header">
            <h2>Quote Information</h2>
            <span className="delivery-date">
              Expected delivery date: 2024-12-02
            </span>
          </div>
          <div className="quote-content">
            <div className="quote-details">
              <div className="detail-item">
                <span className="detail-titlef">Title</span>
                <p className="detail-content">Request for Equipments</p>
              </div>
              <div className="detail-item">
                <span className="detail-titles">RFQ No</span>
                <p className="detail-contents">RQ #01234</p>
              </div>
              <div className="detail-item">
                <span className="detail-titlet">Requestor</span>
                <div className="requestor-info">
                  <div className="requestor-avatar">JD</div>
                  <p className="requestor-name">
                    Jane Doe
                    <span className="iconJane" onClick={toggleRole}>
                      ↓
                    </span>
                    {showRole && (
                      <span className="requestor-role">
                        Head Nurse, Paediatrics
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-titlefourth">Status</span>
                <span className="status-badge">Awaiting</span>
              </div>
              <div className="detail-item">
                <span className="detail-titlefifth">Department</span>
                <p className="detail-content">Maternity</p>
              </div>
            </div>
            <div className="client-details">
              <div className="client-card">
                <i class="fa-solid fa-building"></i>
                <span className="client-title">Client</span>
                <div className="client-info">
                  <div className="client-avatar">W</div>
                  <div>
                    <p className="client-name">Westland Hospital</p>
                    <p className="client-address">Clear street</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="table-container">
          <h3>Item(s)</h3>
          <div className="table-wrapper">
            <table className="items-table">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" className="select-all-checkbox" />
                    Items
                  </th>
                  <th>Variants</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>Expected Delivery Date</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input type="checkbox" className="row-checkbox" />
                      <img
                        src={item.image}
                        alt={item.name}
                        className="item-image"
                      />
                      <div className="item-details">
                        <span className="item-name">{item.name}</span>
                        <span className="item-id">{item.id}</span>
                      </div>
                    </td>
                    <td>{item.variant}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.amount}</td>
                    <td>{item.deliveryDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="total-wrapper">
              <div className="sub-total">Sub Total: $8,000.00</div>
              <div className="total">
                Total: <span className="total-amount">$8,750.00</span>
              </div>
            </div>
          </div>
        </section>
        <section className="terms-and-attachments">
          <div className="header">
            <div className="icon">
              <i class="fa-regular fa-file"></i>
            </div>

            <div className="text">
              <span className="title">Terms and Attachments</span>
              <span className="subtitle">
                Review payment and delivery terms
              </span>
            </div>
            <div className="toggle-icon">
              <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default QuoteDetails;
