import { useState } from 'react';
import './Navbar.scss'
import { Link } from 'react-router-dom';
import { FaAlignJustify } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='navbar'>
      <div className="navbar_left">
        <p className='navbar_left_text'><Link className='link' to='/'>Jeff Tech</Link></p>
      </div>
      <div className="navbar_right">
        <div className='right_group'>
          <p><Link className='link' to='/'>Home</Link></p>
          <p><Link className='link' to='/about'>About us</Link></p>
          <p><Link className='link' to='/contact'>Contact us</Link></p>
        </div>
      </div>
      <div className="navbar_right_mobile">
        <button>
          <FaAlignJustify className="icon" onClick={toggleDropdown} />
        </button>
        {isDropdownOpen &&
          <div className={`dropdown_content slide-in-right`}>
            <p><Link className='link' to='/'>Home</Link></p>
            <p><Link className='link' to='/about'>About us</Link></p>
            <p><Link className='link' to='/contact'>Contact us</Link></p>
          </div>
        }
        {!isDropdownOpen &&
          <div className={`dropdown_content slide-out-right`}>
            <p><Link className='link' to='/'>Home</Link></p>
            <p><Link className='link' to='/about'>About us</Link></p>
            <p><Link className='link' to='/contact'>Contact us</Link></p>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar