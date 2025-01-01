import React, { useState } from "react";
import "./QuoteDetails.css";
import "./QuotesPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const QuotesPage = () => {
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

        <form className="quote-form">
          <section className="request-info">
            <h2>Request for Quote</h2>
            <p>Fill out these details to send the RFQ</p>
            <div className="form-grid">
              <div className="form-group">
                <label>RFQ No</label>
                <input type="text" placeholder="RFQ #01234" />
              </div>
              <div className="form-group">
                <label>Title</label>
                <input type="text" placeholder="Request for Equipments" />
              </div>
              <div className="form-group">
                <label>Department</label>
                <select>
                  <option value="maternity">Maternity</option>
                </select>
              </div>
              <div className="form-group">
                <label>Expected delivery date</label>
                <input type="date" />
                <span className="calculated">
                  Calculated based on lead time and issue date
                </span>
              </div>
            </div>
          </section>

          <section className="add-items">
            <h2>Add Items</h2>
            <table className="items-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Variant</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Expected Delivery Date</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="actions-oxygen">
                      <select>
                        <option value="blue">Oxygen Concentrator</option>
                      </select>
                      <select>
                        <option value="blue">Mechanical Ventilator</option>
                      </select>
                      <select>
                        <option value="blue">Patient Monitor</option>
                      </select>
                      <select>
                        <option value="blue">Mechanical Ventilator</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div className="actions-oxygen">
                      <select>
                        <option value="blue">Blue</option>
                      </select>
                      <select>
                        <option value="blue">Blue</option>
                      </select>
                      <select>
                        <option value="blue">Blue</option>
                      </select>
                      <select>
                        <option value="blue">Blue</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div className="actions-oxygen">
                      <input type="number" defaultValue="100" />
                      <input type="number" defaultValue="100" />
                      <input type="number" defaultValue="100" />
                      <input type="number" defaultValue="100" />
                    </div>
                  </td>
                  <td>
                    <div className="actions-oxygen">
                      <input type="text" defaultValue="$12.00" />
                      <input type="text" defaultValue="$12.00" />
                      <input type="text" defaultValue="$12.00" />
                      <input type="text" defaultValue="$12.00" />
                    </div>
                  </td>
                  <td>
                    <div className="actions-oxygen">
                      <input type="date" />
                      <input type="date" />
                      <input type="date" />
                      <input type="date" />
                    </div>
                  </td>
                  <td>
                    <div className="actionsprice-oxygen">
                      <span>$1200.00</span>
                      <span>$1200.00</span>
                      <span>$1200.00</span>
                      <span>$1200.00</span>
                    </div>
                  </td>
                  <td>
                    <div className="delete-actions">
                      <button className="delete-btn">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                      <button className="delete-btn">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                      <button className="delete-btn">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                      <button className="delete-btn">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Repeat rows for more items */}
              </tbody>
            </table>
            <div className="total-section">
              <span>Sub Total: $1200.00</span>
            </div>
          </section>

          <section className="note-section">
            <label className="note-label">Note</label>
            <textarea placeholder="Enter note here"></textarea>
            <span>0/200</span>
          </section>

          <div className="form-actions">
            <button className="cancel-btn">Cancel</button>
            <button className="save-draft-btn">Save as Draft</button>
            <button className="continue-btn">Continue</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default QuotesPage;
