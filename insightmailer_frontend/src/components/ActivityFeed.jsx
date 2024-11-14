import React, { useEffect, useState } from 'react';

const RecentActivityFeed = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // WebSocket connection to the backend
    const socket = new WebSocket('ws://your-backend-server.com/socket');

    // When a new message is received (activity update), add it to the activity feed
    socket.onmessage = (event) => {
      const newActivity = JSON.parse(event.data);

      setActivities((prevActivities) => [
        newActivity,
        ...prevActivities.slice(0, 9), // Keep the most recent 10 activities
      ]);
    };

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="activity-feed">
      <h3>Recent Activity</h3>
      <ul>
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <li key={index} className="activity-item">
              <span className="activity-time">
                {new Date(activity.timestamp).toLocaleTimeString()}
              </span>
              <span className="activity-description">{activity.message}</span>
            </li>
          ))
        ) : (
          <p>No recent activity</p>
        )}
      </ul>
    </div>
  );
};

export default RecentActivityFeed;
