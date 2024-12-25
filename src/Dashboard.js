import React from "react";
import Item from './Item';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PendingIcon from '@mui/icons-material/Pending';
import TimerIcon from '@mui/icons-material/Timer';
const Dashboard = () => {
  // Array containing data for the cards
  const cardData = [
    { number: 16, title: "Quotes Accepted", timePeriod: "All", week:"Week",month:"Month",icon: <CheckCircleIcon />  },
    { number: 24, title: "Quotes Rejected", timePeriod: "All ", week:"Week",month:"Month",icon:  <CancelIcon />  },
    { number: 50, title: "Pending Quotes", timePeriod: "All ", week:"Week",month:"Month" ,icon: <PendingIcon /> },
    { number: 10, title: "Expired Quotes", timePeriod: "All ", week:"Week",month:"Month" ,icon: <TimerIcon /> },
  ];

  return (
    <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      gap: '10px',
      padding: '16px',
    
    }}
  >
      {cardData.map((data, index) => (
        // Render Card component for each item in cardData
        <Item
          key={index}
          number={data.number}
          title={data.title}
          timePeriod={data.timePeriod}
          week={data.week}
          month={data.month}
          icon={data.icon}
        />
      ))}
    </div>
  );
};

export default Dashboard;
