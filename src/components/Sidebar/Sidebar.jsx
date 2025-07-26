import React from 'react'
import img from "../../assets/rasm.jpg"
import { Link } from 'react-router-dom'
import './Sidebar.css'
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
  FaUser,
  FaFileAlt,
  FaImages,
  FaBars,
  FaEnvelopeOpenText,
  FaChevronDown,
  FaTimes
} from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { icon: FiHome, text: "Home", path: "/" },
    { icon: FaUser, text: "About", path: "/about" },
    { icon: FaChevronDown, text: "Skills", path: "/skills" },
    { icon: FaFileAlt, text: "Resume", path: "/resume" },
    { icon: FaImages, text: "Portfolio", path: "/portfolio" },
    { icon: FaBars, text: "Services", path: "/services" },
    { icon: FaEnvelopeOpenText, text: "Contact", path: "/contact" }
  ]

  return (
    <>
      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <div className="sidebar-content">
          <div className="profile-section">
            <img
              src={img}
              alt="Profile"
              className="profile-img"
            />
            <h2 className="name">Xojiakbar Qodirjanov</h2>
          </div>

          <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaSkype /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>

          <nav className="navigation">
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link to={item.path} onClick={toggleSidebar}>
                    <item.icon className="nav-icon" />
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
    </>
  )
}

export default Sidebar