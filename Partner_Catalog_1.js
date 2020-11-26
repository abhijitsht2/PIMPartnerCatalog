import React, { useState, Component } from 'react';
import './Partner_Catalog_1.css';
import Header from './header';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { render } from "react-dom";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ChckCellRenderer from "./ChckCellRenderer";
import StateCellRenderer from "./StateCellRenderer";
import $ from 'jquery';
import Setting from '../../Icon.png';
import Filter from '../../Iconfilter.png';
import Column from '../../Iconcolumn.png';
import Group from '../../Icongroup.png';
import Sort from '../../Iconsort.png';
import ListIcon from '../../Iconlist.png';
import GridIcon from '../../Icongrid.png';
import Demo from './demo';
import history from '../../history';


class PartnerCatalog1 extends Component {
  constructor(props) {
    
    super(props);
    this.quickSearch = this.quickSearch.bind(this);
    this.gridApi= "this is a test";
    $(document).ready(function(){

      
     $('#category').click(function(){
      $('#refreshIcon').toggleClass("refreshVisible");
     });

     $('#cancel').click(function(){
      $('#productGrid').css("width","1390px");
      $('#productGrid').css("margin-left","50px");
      $('.topnav').css("margin-left","50px");
      $('.topnav .search-container').addClass("searchAlignRight");
      $('.listgrid').addClass("listAlignRight");
     });
     $('#btn').click(function(){
      $('#productGrid').css("width","1120px");
      $('#productGrid').css("margin-left","250px");
      $('.topnav').css("margin-left","250px");
      $('.topnav .search-container').removeClass("searchAlignRight");
      $('.listgrid').removeClass("listAlignRight");
     });
      var toggler = document.getElementsByClassName("filterCaret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    
    this.parentElement.querySelector(".filterNested").classList.toggle("filterInActive");
  });
}

var togglerTele = document.getElementsByClassName("filterTeleCaret");
var i;

for (i = 0; i < togglerTele.length; i++) {
  togglerTele[i].addEventListener("click", function() {
    
    this.parentElement.querySelector(".filterTeleNested").classList.toggle("filterActive");
  });
}

var togglerAudioVideo = document.getElementsByClassName("filterAudioVideoCaret");
var i;

for (i = 0; i < togglerAudioVideo.length; i++) {
  togglerAudioVideo[i].addEventListener("click", function() {
    
    this.parentElement.querySelector(".filterAudioVideoNested").classList.toggle("filterActive");
  });
}

$(".caret").click(function(){
$(".nested").toggleClass("active");
console.log($(".caret")[0].className);
if($(".caret")[0].className.includes("fa-chevron-right")){
  $(".caret").removeClass("fas fa-chevron-right");
  $(".caret").addClass("fas fa-chevron-down");
}
else{
  $(".caret").removeClass("fas fa-chevron-down");
  $(".caret").addClass("fas fa-chevron-right");
}
});

$(".caretgroup").click(function(){
  $(".nestedgroup").toggleClass("active");
  console.log($(".caretgroup")[0].className);
  if($(".caretgroup")[0].className.includes("fa-chevron-right")){
    $(".caretgroup").removeClass("fas fa-chevron-right");
    $(".caretgroup").addClass("fas fa-chevron-down");
  }
  else{
    $(".caretgroup").removeClass("fas fa-chevron-down");
    $(".caretgroup").addClass("fas fa-chevron-right");
  }
  });
  
    });


    this.state = {
      columnDefs: [
        {
          field: "select",
          cellRenderer: "chckCellRenderer",
          cellRendererParams: {
            clicked: function(field) {
              alert(`${field} was clicked`);
            }
          },
          minWidth: 126
        },
        {
          headerName: "SKU No.",
          field: "skuno",
          minWidth: 125
        },
        {
          headerName: "Product Description",
          field: "productdescription",
          minWidth: 312
        },
        {
          headerName: "Enrichment %",
          field: "enrichment",
          minWidth: 150
        },
        {
          headerName: "State",
          field: "state",
          cellRenderer: "stateCellRenderer",
          cellRendererParams: {
            clicked: function(field) {
              alert(`${field} was clicked`);
            }
          },
          minWidth: 150,
          
        }
        
      ],
      defaultColDef: {
        flex: 1,
        minWidth: 100,
        resizable: true
      },
      autoGroupColumnDef: {
        flex: 1,
        minWidth: 180,
      },
      frameworkComponents: {
        chckCellRenderer: ChckCellRenderer,
        stateCellRenderer:StateCellRenderer
      },
      rowData: []
    };
  }
  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
const data = [
        {skuno: 500009070, productdescription: "AMAZON FIRETV STICK LITE", enrichment: 95,state:"Updated"},
        {skuno: 500009070, productdescription: "AMAZON FIRETV STICK LITE", enrichment: 96,state:"Updated"},
        {skuno: 500009070, productdescription: "AMAZON FIRETV STICK LITE", enrichment: 97,state:"Synced"},
        {skuno: 500009070, productdescription: "AMAZON FIRETV STICK LITE", enrichment: 98,state:"Synced"}
    ];
    this.setState({ rowData: data });
    this.gridApi.setQuickFilter(document.getElementById('globalsearch').value);
  };
  openNav(){   
  $('#mySidebar').toggleClass("sidebarFilterToggle");
  $('#productGrid').toggleClass("faded");

  }

  openCity(cityName){
    var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
}
quickSearch(){
  this.gridApi.setQuickFilter(document.getElementById('globalsearch').value);
}
TeleParentClick(){
  if($("#televisionparent").is(':checked')){
  $("#televisioncroma").prop("checked", true);
  $("#televisionhitachi").prop("checked", true);
}
else{
  $("#televisioncroma").prop("checked", false);
  $("#televisionhitachi").prop("checked", false);
}
}

AudioVideoParentClick(){
  if($("#audiovideo").is(':checked')){
  $("#audiovideoaudio").prop("checked", true);
  $("#audiovideovideo").prop("checked", true);
}
else{
  $("#audiovideoaudio").prop("checked", false);
  $("#audiovideovideo").prop("checked", false);
}
}

AllClick(){
  if($("#all").is(':checked')){
    $("#televisionparent").prop("checked", true);
    $("#audiovideo").prop("checked", true);
    $("#audiovideoaudio").prop("checked", true);
    $("#audiovideovideo").prop("checked", true);
    $("#televisioncroma").prop("checked", true);
    $("#televisionhitachi").prop("checked", true);
    $("#homeappliances").prop("checked", true);
    $("#phoneswearables").prop("checked", true);
    $("#kitchenappliances").prop("checked", true);
    $("#computerstablets").prop("checked", true);
    $("#cameras").prop("checked", true);
    $("#grooming").prop("checked", true);
    $("#gaming").prop("checked", true);
    $("#accessories").prop("checked", true);
  }
  else{
    $("#televisionparent").prop("checked", false);
    $("#audiovideo").prop("checked", false);
    $("#audiovideoaudio").prop("checked", false);
    $("#audiovideovideo").prop("checked", false);
    $("#televisioncroma").prop("checked", false);
    $("#televisionhitachi").prop("checked", false);
    $("#homeappliances").prop("checked", false);
    $("#phoneswearables").prop("checked", false);
    $("#kitchenappliances").prop("checked", false);
    $("#computerstablets").prop("checked", false);
    $("#cameras").prop("checked", false);
    $("#grooming").prop("checked", false);
    $("#gaming").prop("checked", false);
    $("#accessories").prop("checked", false);
  }
}
  
CancelFilter(){
  $('#mySidebar').toggleClass("sidebarFilterToggle");
  $('#productGrid').toggleClass("faded");
}

SearchCategoryInfo(){
var input, filter,ulcatnested,licatnested,ulcatchildnested,licatchildnested,ulimmchild,liimmchild, label, i,j,k,l, txtValue;
    input = document.getElementById("searchCategory");
    
    filter = input.value.toUpperCase();
    ulcatnested = document.getElementById("filterNestedUL");
    licatnested = ulcatnested.getElementsByTagName("li");
    
    if(filter!=""){
    for (i = 0; i < licatnested.length; i++) {
      
      label = licatnested[i].getElementsByTagName("label")[0];
        txtValue = label.textContent || label.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          console.log(txtValue);
          licatnested[i].style.display = "";
          ulimmchild=ulcatnested.getElementsByTagName("ul");
          for(l=0;l<ulimmchild.length;l++){
            console.log(ulimmchild.length);
            ulimmchild[l].style.display="";
            liimmchild = ulimmchild[l].getElementsByTagName("li");
            for(k=0;k<liimmchild.length;k++){
                liimmchild[k].style.display = "";
            }
        }
        }
         else {
          licatnested[i].style.display = "none";
        }
    }
  }
  else{
    ulcatnested.style.display= "";
    for (i = 0; i < licatnested.length; i++) {
      
      label = licatnested[i].getElementsByTagName("label")[0];
        txtValue = label.textContent || label.innerText;
          console.log(txtValue);
          licatnested[i].style.display = "";
          ulimmchild=ulcatnested.getElementsByTagName("ul");
          for(l=0;l<ulimmchild.length;l++){
            console.log(ulimmchild.length);
            ulimmchild[l].style.display="";
            liimmchild = ulimmchild[l].getElementsByTagName("li");
            for(k=0;k<liimmchild.length;k++){
                liimmchild[k].style.display = "";
            }
        }
        
    }
  }
    ulcatchildnested=ulcatnested.getElementsByTagName("ul");

    // for(j=0;j<ulcatchildnested.length;j++){
    //   licatchildnested = ulcatchildnested[j].getElementsByTagName("li");

    //   for(k=0;k<licatchildnested.length;k++){
    //     label = licatchildnested[k].getElementsByTagName("label")[0];
    //     txtValue = label.textContent || label.innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //       console.log(txtValue);
    //       licatchildnested[k].style.display = "block";
    //     } else {
    //       licatchildnested[k].style.display = "none";
    //     }
    //   }

    // }
    

}
GotoDashboard(){
  history.push('/dashboard');
}
  render() {
    return (<div>
      <Header />
      <div className="Partner1Background">
      <div className="catalogStatus">  
      <button className="Icon" onClick={this.GotoDashboard}><i className='fas fa-chevron-left'></i></button>
      <div class="c100 p88 center Oval">
        <span>88.8%</span>
        <div class="slice">
            <div class="bar"></div>
            <div class="fill"></div>
        </div>
    </div>
      <div className="Standard"><p>Croma Retail (V6)</p>
      </div>
      <div className="maindiv">
          <div className="leftdiv" ><p className="Not-Filtered">15345 SKUs | </p></div>
          <div className="rightdiv"><a href="#" className="text-style-1">More Details</a></div>
      </div>
      </div>
      <div className="catalogMapping">
      <Demo />
      </div>
      </div>
      <input type="checkbox" id="check" />
      <label for="check">
      <img src={Setting} id="btn"/>
        <i className="fa fa-chevron-left" id="cancel"></i>
      </label>
      <div className="sidebar">
        <div className="sidebarheader"><div className="actionDetails"><a href="#" className="setting"><img src={Setting}/></a></div><div className="actionsPara"><p>Actions</p></div></div>
        <ul className="sidebaricon">
          <li id="filters"><div className="iconDetails"><a href="#"><img src={Filter}/></a></div><div className="iconsPara"><p>Filters</p></div><div className="filterIconBox"><i className='fas fa-chevron-right caret'></i></div>
          <ul className="nested">
      <li><a href="#" id="category" onClick={this.openNav}>By Category</a><div id="refreshIcon" className="refreshInvisible"><i class="fa fa-refresh" aria-hidden="true"></i></div></li>
      <li><a href="#" id="brand">By Brand</a></li>
      <li><a href="#" id="status">By Status</a></li>
      </ul>
          </li>
          <li><div className="iconDetails"><a href="#"><img src={Column}/></a></div><div className="iconsPara"><p>Columns</p></div></li>
          <li><div className="iconDetails"><a href="#"><img src={Group}/></a></div><div className="iconsPara"><p>Group</p></div><div className="filterIconBox"><i className='fas fa-chevron-right caretgroup'></i></div>
          <ul className="nestedgroup">
      <li><a href="#" id="group1">By Group1</a></li>
      <li><a href="#" id="group2">By Group2</a></li>
      <li><a href="#" id="group3">By Group3</a></li>
      </ul>
          </li>
          <li><div className="iconDetails"><a href="#"><img src={Sort}/></a></div><div className="iconsPara"><p>Sort</p></div></li>
        </ul>
      </div>
      <div id="mySidebar" class="sidebarFilter">
      <div>
      <input id="searchCategory" className="Input-Field" type="text" placeholder="Search in categories" name="search"/>
      <button className="button-9-9" type="submit" onClick={this.SearchCategoryInfo}><i className="fa fa-search"></i></button>
      </div>
      <div>
      <ul id="filterUL">
  <li><span className="filterCaret"> <i className='fas fa-chevron-right '></i>
  <input id="all" type="checkbox" className="Checkbox_Checked_Background" onClick={this.AllClick}/>
  <label for="all" className="Column-Title">All</label></span>
    <ul id="filterNestedUL" className="filterNested">
  <li><span className="filterTeleCaret"> <i className='fas fa-chevron-right telespacing'></i></span>
  <input id="televisionparent" type="checkbox" className="Checkbox_Checked_BackgroundTele" onClick={this.TeleParentClick}/>
  <label for="all" className="Column-Title-Item">Televisions</label>
    <ul id="filterTeleNested" className="filterTeleNested">
      <li><input id="televisioncroma" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Croma</label></li>
      <li><input id="televisionhitachi" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Hitachi</label></li>
    </ul>
  </li>
  <li>
  <span className="filterAudioVideoCaret"> <i className='fas fa-chevron-right telespacing'></i></span>
  <input id="audiovideo" type="checkbox" className="Checkbox_Checked_BackgroundTele" onClick={this.AudioVideoParentClick}/>
  <label for="all" className="Column-Title-Item">Audio & Video</label>
  <ul id="filterAudioVideoNested" className="filterAudioVideoNested">
  <li><input id="audiovideoaudio" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Audio</label></li>
  <li><input id="audiovideovideo" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Video</label></li>
  </ul>
  </li>
  <li>
  <span className="filterHomeCaret"> <i className='fas fa-chevron-right telespacing'></i></span>
  <input id="homeappliances" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Home Appliances</label>
  </li>
  <li>
  <span className="filterPhone"> <i className='fas fa-chevron-right telespacing'></i></span>
  <input id="phoneswearables" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Phones & Wearables</label>
  </li>
  <li>
  <span className="filterKitchen"> <i className='fas fa-chevron-right telespacing'></i></span>
  <input id="kitchenappliances" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Kitchen Appliances</label>
  </li>
  <li>
  <span className="filterComputer"> <i className='fas fa-chevron-right telespacing'></i></span>
  <input id="computerstablets" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Computers & Tablets</label>
  </li>
  <li>
  <span className="filterCamera"> <i className='fas fa-chevron-right telespacing'></i></span>  
  <input id="cameras" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Cameras</label></li>
  <li>
  <span className="filterGrooming"> <i className='fas fa-chevron-right telespacing'></i></span>  
  <input id="grooming" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Grooming & Wellness</label></li>
  <li>
  <span className="filterGaming"> <i className='fas fa-chevron-right telespacing'></i></span> 
  <input id="gaming" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Gaming</label>
  </li>
  <li>
  <span className="filterAccessories"> <i className='fas fa-chevron-right telespacing'></i></span> 
  <input id="accessories" type="checkbox" className="Checkbox_Checked_BackgroundTele"/>
  <label for="all" className="Column-Title-Item">Accessories</label>
  </li>
    </ul>
  </li>
</ul>
  <button className="filterCancel" onClick={this.CancelFilter}>Cancel</button>
  <button className="filterApply">Apply</button>
  </div>
</div>
      <div class="topnav">
  <a id="selectedProduct" className="selectProduct" href="#home">Select (0/15334)</a>
  <div className="search-container">
      <input id="globalsearch" className="searchinput" type="text" placeholder="Search" name="search"/>
      <button className="search" type="submit" onClick={this.quickSearch}><i className="fa fa-search"></i></button>
  </div>
  <div class="listgrid">
  <div class="square1"><a href="#" className="listgridLink"> <img className="Rectangle1" src={ListIcon} id="listicon"/></a></div>
<div class="square2"><a href="#" className="listgridLink"><img className="Rectangle2" src={GridIcon} id="gridicon"/></a></div>
</div>
</div>
      <div id="productGrid" className="ag-theme-alpine">
      <AgGridReact
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            frameworkComponents={this.state.frameworkComponents}
            onGridReady={this.onGridReady}
            rowData={this.state.rowData}

          />
      </div>
      <div className="productDtlsBar">
      <div class="productNavbar productNavbarInvisible">
        <div> <p className="productName">Samsung 198 L 3 Star Direct Cool Inverter Refrigerator ... </p><button className="closeBtn"><i class="fa fa-times" aria-hidden="true"></i></button></div>
      
      <p className="productSubName">Croma/Home Appliances/Refrigerators/Single Door Refrigerators</p>
     
      </div>
      <div className="attributeTab productDetailsInvisible">
      <div class="tab">
  <button class="tablinks" onClick={() => this.openCity('General')}>General</button>
  <button class="tablinks" onClick={() => this.openCity('Attributes')}>Attributes</button>
  <button class="tablinks" onClick={() => this.openCity('Hierarchy')}>Hierarchy</button>
  <button class="tablinks" onClick={() => this.openCity('Pricing')}>Pricing</button>
  <button class="tablinks" onClick={() => this.openCity('DigiAssets')}>Digital Assets</button>
</div>

<div id="General" class="tabcontent">
  <h4>1.Product Type</h4>
  <p>Type:Refrigerator</p>
</div>

<div id="Attributes" class="tabcontent">
  <h4>Attribute</h4>
  <p>Samsung is a high coolant refrigerator.</p> 
</div>

<div id="Hierarchy" class="tabcontent">
  <h4>Hierarchy</h4>
  <p></p>
</div>
<div id="Pricing" class="tabcontent">
  <h4>Pricing</h4>
  <p>Tokyo is the capital of Japan.</p>
</div>
<div id="DigiAssets" class="tabcontent">
  <h4>Digital Assets</h4>
  <p>Tokyo is the capital of Japan.</p>
</div>
</div>
</div>

    </div>);
  }
}

export default PartnerCatalog1
