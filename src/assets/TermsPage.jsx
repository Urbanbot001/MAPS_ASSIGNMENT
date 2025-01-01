import React, { useState } from "react";
import "./QuoteDetails.css";
import "./QuotesPage.css";
import "./TermsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const TermsPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const [isProcurementOpen, setIsProcurementOpen] = useState(false);

  const toggleProcurementMenu = () => {
    setIsProcurementOpen(!isProcurementOpen);
  };

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

        <header className="form-header">
          <h1>Quotes / Quote Response</h1>
        </header>

        <div className="progress-bar">
          <div className="progress-step active">
            <Link to="/quotes" className="stepnumber-link">
              <div className="step-number">1</div>
            </Link>
            <div className="step-info">
              <span className="step-title">Request Information</span>
              <span className="step-description">
                Provide details about the RFQ
              </span>
            </div>
          </div>
          <div className="progress-step">
            <Link to="/termspage" className="stepnumber-link">
              <div className="step-number">2</div>
            </Link>
            <div className="step-info">
              <span className="step-title">Terms and Attachments</span>
              <span className="step-description">
                Payment and delivery terms
              </span>
            </div>
          </div>
          <div className="progress-step">
            <Link to="/review" className="stepnumber-link">
              <div className="step-number">3</div>
            </Link>
            <div className="step-info">
              <span className="step-title">Review</span>
              <span className="step-description">
                Confirm all information provided
              </span>
            </div>
          </div>
        </div>
        <div className="terms-container">
          <h2 className="terms-title">Terms and Attachments</h2>
          <p className="terms-subtitle">
            Provide detailed information on payment and delivery terms
          </p>
          <form className="terms-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="payment-terms" className="form-label">
                  Payment Terms
                </label>
                <select id="payment-terms" className="form-select">
                  <option value="net30">Net 30</option>
                  <option value="net15">Net 15</option>
                  <option value="prepaid">Prepaid</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="delivery-schedule" className="form-label">
                  Delivery Schedule
                </label>
                <select id="delivery-schedule" className="form-select">
                  <option value="immediate">Immediate delivery</option>
                  <option value="scheduled">Scheduled delivery</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="shipping-method" className="form-label">
                  Shipping Method
                </label>
                <select id="shipping-method" className="form-select">
                  <option value="courier">Courier Services</option>
                  <option value="freight">Freight</option>
                  <option value="pickup">Pickup</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="lead-time" className="form-label">
                  Lead Time
                </label>
                <div className="lead-time-container">
                  <input
                    type="number"
                    id="lead-time"
                    className="form-input"
                    defaultValue="10"
                  />
                  <select className="form-select lead-time-select">
                    <option value="days">Days</option>
                    <option value="weeks">Weeks</option>
                  </select>
                </div>
              </div>
            </div>

            <span className="attachments-text">Attachments</span>
            <p className="attachments-text2">
              Attach all necessary files or documents
            </p>
            <div className="form-group attachments">
              <label className="form-cloudicon">
                <i class="fa-solid fa-cloud-arrow-up"></i>
              </label>
              <div className="upload-area">
                <p>
                  <span className="click-uploadtext">Click to upload</span> or
                  drag and drop
                </p>
                <p className="upload-note">
                  SVG, PNG, JPG, or GIF (max. 800x800px)
                </p>
                <p className="or-tag">OR</p>
                <button type="button" className="browse-btn">
                  Browse Files
                </button>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn cancel-btn">
                Cancel
              </button>
              <button type="button" className="btn draft-btn">
                Save as draft
              </button>
              <button type="submit" className="btn continue-btn">
                Continue
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default TermsPage;
