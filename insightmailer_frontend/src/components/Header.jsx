import React from 'react'
import { BsGrid, BsBell,BsSearch,BsLaptop } from "react-icons/bs";
import { GiMoonBats,GiBoomerangSun } from "react-icons/gi";
import { IoMailOpenOutline } from "react-icons/io5";
const Header = ({handleNavToggle}) => {
  const handleToggle = (path) => {
    let arr = ["searchbox","themebox","shortcutbox","notificationbox","profilebox"]
    for(let x = 0; x<5;x++){
      if(path != arr[x]){
      document.querySelector(`.${arr[x]}`).classList.remove("hidden");
      document.querySelector(`.${arr[x]}`).classList.add("hidden");}
    }
    let target = document.querySelector(`.${path}`)
    target.classList.toggle("hidden");
  }
  return (
    <div className='headerPage'>
      <div className="nav-toggler" onClick={()=> handleNavToggle()}>&#9776;</div>
      <div className='header-options'>
        <div className="search-button"><BsSearch onClick={()=>handleToggle("searchbox")}/>
          <div className="searchbox hidden">
            <input type="search" name="searchbox" id="searchbox" placeholder='Search...' />
            <div className="closebtn" onClick={()=> handleToggle("searchbox")}>x</div>
          </div>
        </div>
        <div className="theme-switcher"><GiBoomerangSun  onClick={()=>handleToggle("themebox")}/>
          <div className="themebox hidden">
            <div className="option"><GiBoomerangSun />Light</div>
            <div className="option"><GiMoonBats />Dark</div>
            <div className="option"><BsLaptop/>System</div>
          </div>
        </div>
        <div className="shortcuts"><BsGrid onClick={()=>handleToggle("shortcutbox")}/>
          <div className="shortcutbox hidden">
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
        <div className="notification-bell"><BsBell onClick={()=>handleToggle("notificationbox")}/>
          <div className="notificationbox hidden">
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
          <div className="profile-cover" onClick={()=>handleToggle("profilebox")}></div>
          <div className="profilebox hidden">
            <div className="top">
              <div className='profile-details'>
                <div className="img"></div>
                <div className="details">
                  <div className="name">Mohd Saad</div>
                  <div className="access">Admin</div>
                </div>
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