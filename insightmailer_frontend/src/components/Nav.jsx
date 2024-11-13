import React from 'react'
import { TbSmartHome,  } from "react-icons/tb";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { SlArrowRight } from "react-icons/sl";
import {TbReportAnalytics, TbBrandCampaignmonitor, TbProgressCheck,TbSettings } from "react-icons/tb";

const Nav = ({handleNavToggle}) => {
  const handleClick = (e)=> {
    e.stopPropagation();
    console.log(e.target);
  }
  
  return (
    <div className='navPage hidden'>
      <div className="nav-cover" onClick={()=>handleNavToggle()}></div>
      <div className="navBar">
        <div className="nav-head">
          <div className="logo"></div>
          <h4 className="brand">Insight Mailer</h4>
          <div className="closebtn" onClick={()=>handleNavToggle()}>X</div>
        </div>
        <div className="nav-body">
          <div className="nav-dashboard" onClick={(e)=>handleClick(e)}>
            <div className="link"><TbSmartHome /><h5>Dashboard</h5><div className="arrow"><SlArrowRight  /></div></div>
            <div className="options">
              <div className="kpi-cards">&#9741; &nbsp;&nbsp;KPI Cards</div>
              <div className="charts">&#9741; &nbsp;&nbsp;Charts</div>
              <div className="recent-activity">&#9741; &nbsp;&nbsp;Recent Activity</div>
            </div>
          </div>
          <div className="email-campaign" onClick={(e)=>handleClick(e)}>
            <div className="link"><TbBrandCampaignmonitor /><h5>Email Campaign</h5><div className="arrow"><SlArrowRight  /></div></div>
            <div className="options">
              <div className="campaign-list">&#9741; &nbsp;&nbsp;Campaign List</div>
              <div className="new-campaign">&#9741; &nbsp;&nbsp;New Campaign</div>
            </div>
          </div>
          <div className="nav-Schedule-manager">
            <div className="link"><RiCalendarScheduleLine /><h5>Schedule Manager</h5></div>
          </div>
          <div className="nav-analytics" onClick={(e)=>handleClick(e)}>
            <div className="link"><TbReportAnalytics /><h5>Analytics</h5><div className="arrow"><SlArrowRight  /></div></div>
            <div className="options">
              <div className="overall-matrics">&#9741; &nbsp;&nbsp;Matrics</div>
              <div className="perormance-table">&#9741; &nbsp;&nbsp;Performance Table</div>
              <div className="charts">&#9741; &nbsp;&nbsp;Interactive Charts</div>
              <div className="campaign-view">&#9741; &nbsp;&nbsp;Detailed View</div>
            </div>
          </div>
          <div className="nav-status-tracker"><div className="link"><TbProgressCheck />
          <h5>Realtime Status</h5></div></div>
          <div className="nav-account-settings"><div className="link"><TbSettings /><h5>Settings</h5></div></div>
        </div>
      </div>
    </div>
  )
}

export default Nav