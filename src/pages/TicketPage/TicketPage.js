import React from "react";
import Card from "../../components/Ticket/Card";
import TopNavbar from '../../components/LandingPage/Nav/TopNavbar';
import Footer from '../../components/LandingPage/Sections/Footer.jsx'
const TicketPage = () => {
  return (
    <div className="bg-[#f6f6f6]">
      <div className="bg-white">
        <TopNavbar />
      </div>

      <div className="container pt-28 pb-3">
        <Card />
      </div>
      <Footer/>
    </div>
  );
};

export default TicketPage;
