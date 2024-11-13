import React from 'react'
import { BsGrid, BsBell,BsSearch,BsLaptop } from "react-icons/bs";
import { GiMoonBats,GiBoomerangSun } from "react-icons/gi";
import { IoMailOpenOutline } from "react-icons/io5";
const Header = () => {
  return (
    <div className='headerPage'>
      <div className="nav-toggler">&#9776;</div>
      <div className='header-options'>
        <div className="search-button"><BsSearch />
          <div className="searchbox">
            <input type="search" name="searchbox" id="searchbox" placeholder='Search...' />
            <div className="closebtn">x</div>
          </div>
        </div>
        <div className="theme-switcher"><GiBoomerangSun />
          <div className="themebox">
            <div className="option"><GiBoomerangSun />Light</div>
            <div className="option"><GiMoonBats />Dark</div>
            <div className="option"><BsLaptop/>System</div>
          </div>
        </div>
        <div className="shortcuts"><BsGrid/>
          <div className="shortcutbox">
            <div className="head">
              <div>Shortcuts</div>
              <div className="add">+</div>
            </div>
            <div className="main">
              <div className="option">
                <div className="img"></div>
                <h5 className="name">Calander</h5>
                <h6 className="descp">Appointments</h6>
              </div>
              <div className="option">
                <div className="img"></div>
                <h5 className="name">Calander</h5>
                <h6 className="descp">Appointments</h6>
              </div>
              <div className="option">
                <div className="img"></div>
                <h5 className="name">Calander</h5>
                <h6 className="descp">Appointments</h6>
              </div>
              <div className="option">
                <div className="img"></div>
                <h5 className="name">Calander</h5>
                <h6 className="descp">Appointments</h6>
              </div>
              <div className="option">
                <div className="img"></div>
                <h5 className="name">Calander</h5>
                <h6 className="descp">Appointments</h6>
              </div>
              <div className="option">
                <div className="img"></div>
                <h5 className="name">Calander</h5>
                <h6 className="descp">Appointments</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="notification-bell"><BsBell/>
          <div className="notificationbox">
            <div className="head">
              <h5>Notification</h5>
              <div className="status"></div>
              <div className="markAllBtn"><IoMailOpenOutline /></div>
            </div>
            <div className="main">
              <div className="notification">
                <div className="img"></div>
                <div className="content">
                  <h6>Congratulation lettie</h6>
                  <p>Won the monthly best seller gold badge</p>
                  <div className="time">1h ago</div>
                </div>
              </div>
            </div>
            <div className='tail'><button className="viewAllBtn">View All Notification</button></div>
          </div>
        </div>
        <div className="profile-button">
          <div className="profilebox">
            <div className="top">
              <div className="img"></div>
              <div className="details">
                <div className="name">Mohd Saad</div>
                <div className="access">Admin</div>
              </div>
            </div>
            <div className="mid">
              <div className="myprofile">My Profile</div>
              <div className="settings">Settings</div>
              <div className="myprofile">My Profile</div>
            </div>
            <div className="mid2">
              <div className="Docs">Documentation</div>
              <div className="FAQ">FAQs</div>
              <button className="logout">Logout</button>
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header