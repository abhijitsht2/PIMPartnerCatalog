import React, { useState } from "react";
import './StateCellRenderer.css';
import $ from 'jquery';
function StateCellRenderer(props){
   
    $(document).ready(function(){
        $(".Arrow").click(function(){
          $('#productGrid').css("width","400px");
          $('.productNavbar').toggleClass("productNavbarActive");
          $('.attributeTab').toggleClass("productDetailsVisible"); 
          $('.mapCatalog').toggleClass("mapCatalogVisible");
        });
      });
    return(
      <div>
        <i className="fa fa-refresh refresh" aria-hidden="true"></i><span className="sync">Synced</span><button id="ViewItem" className="Arrow"><i class='fas fa-chevron-right'></i></button>
      </div>
    );
  }


export default StateCellRenderer;
