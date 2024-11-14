import React from 'react'
import { FaPaperPlane,FaClock, FaEye, } from "react-icons/fa";
import { LuMousePointerClick,warnin } from "react-icons/lu";
import { MdError,MdWarning,MdUnsubscribe } from "react-icons/md";
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';
import RecentActivityFeed from '../components/ActivityFeed';
import Footer from '../components/Footer';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, ArcElement, CategoryScale);

const Dashboard = () => {
  const openClickRateData = {
    labels: ["2024-11-01", "2024-11-02", "2024-11-03", "2024-11-04", "2024-11-05"], // Example dates
    datasets: [
        {
            label: 'Open Rate (%)',
            data: [60, 65, 70, 75, 72], // Sample open rate data
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.4,
        },
        {
            label: 'Click-Through Rate (%)',
            data: [30, 32, 34, 35, 33], // Sample click-through rate data
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
            tension: 0.4,
        }
    ]
};

const openClickRateOptions = {
    responsive: true,
    plugins: {
        legend: { position: 'top' },
        tooltip: { mode: 'index', intersect: false },
    },
    interaction: { mode: 'index', intersect: false },
    scales: {
        x: { title: { display: true, text: 'Date' } },
        y: { title: { display: true, text: 'Percentage (%)' } }
    }
};

// Data for Delivery Breakdown Pie Chart
const deliveryBreakdownData = {
    labels: ['Sent', 'Opened', 'Clicked', 'Bounced'],
    datasets: [{
        data: [300, 150, 50, 20], // Example data
        backgroundColor: [
            'rgba(54, 162, 235, 0.6)', // Sent (blue)
            'rgba(75, 192, 192, 0.6)', // Opened (green)
            'rgba(255, 99, 132, 0.6)', // Clicked (red)
            'rgba(255, 206, 86, 0.6)'  // Bounced (yellow)
        ],
        hoverOffset: 4
    }]
};

const deliveryBreakdownOptions = {
    responsive: true,
    plugins: {
        legend: { position: 'top' },
        tooltip: {
            callbacks: {
                label: function(context) {
                    const label = context.label || '';
                    const value = context.raw;
                    return `${label}: ${value}`;
                }
            }
        }
    }
}
  return (
    <div className='dashboardPage'>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="kpi-carousel"></div>
        <div className="kpi-cards">
          <div className="cards">
            <div className="top"><FaPaperPlane size={"3rem"}/></div>
            <div className="mid"><h3>Total Sent</h3></div>
            <div className="bottom"><div className="value">5120</div><div className="desc">"Total emails successfully sent from all campaigns"</div></div>
          </div>
          <div className="cards">
            <div className="top"><FaClock size={"3rem"}/></div>
            <div className="mid"><h3>Scheduled</h3></div>
            <div className="bottom"><div className="value">2152</div><div className="desc">"Emails currently queued to be sent at scheduled times"</div></div>
          </div>
          <div className="cards">
            <div className="top"><LuMousePointerClick fill='white' size={"4rem"}/></div>
            <div className="mid"><h3>Clicked</h3></div>
            <div className="bottom"><div className="value">4562</div><div className="desc">"Number of recipients who clicked a link in the email"</div></div>
          </div>
          <div className="cards">
            <div className="top"><FaEye size={"3.5rem"}/></div>
            <div className="mid"><h3>Opened</h3></div>
            <div className="bottom"><div className="value">4152</div><div className="desc">"Total unique opens across all campaigns"</div></div>
          </div>
          <div className="cards">
            <div className="top"><MdWarning size={"3.5rem"}/></div>
            <div className="mid"><h3>Bounced</h3></div>
            <div className="bottom"><div className="value">2132</div><div className="desc">"Number of emails that couldn’t be delivered"</div></div>
          </div>
          <div className="cards">
            <div className="top"><MdError  size={"3.5rem"}/></div>
            <div className="mid"><h3>Failed</h3></div>
            <div className="bottom"><div className="value">1121</div><div className="desc">"Emails that encountered errors and couldn’t be sent"</div></div>
          </div>
          <div className="cards">
            <div className="top"><MdUnsubscribe size={"4rem"}/></div>
            <div className="mid"><h3>Unsubscribed</h3></div>
            <div className="bottom"><div className="value">564</div><div className="desc">"Number of recipients who unsubscribed"</div></div>
          </div>
        </div>
        <div className="charts">
        <div className='line'>
            <h3>Open Rate and Click-Through Rate Over Time</h3>
            <Line data={openClickRateData} options={openClickRateOptions} />
        </div>
        <div className='pie' >
            <h3>Delivery Breakdown</h3>
            <Pie data={deliveryBreakdownData} options={deliveryBreakdownOptions} />
        </div>
        </div>
        <div className="recent-activity-feed"><RecentActivityFeed/></div>
      <Footer/>
      </div>
    </div>
  )
}

export default Dashboard