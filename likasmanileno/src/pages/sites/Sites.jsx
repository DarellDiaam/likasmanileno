import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import  "./sites.scss";
import Sitedata from "../../components/datatable_site/Sitedata";
import React, { useState } from "react";



function Sites() {
  
  return (
    <div className="sites">
    <Sidebar/>
        <div className="sitesContainer">
            <Navbar/>
            <Sitedata/>
        </div>
    </div>
  )
}

export default Sites