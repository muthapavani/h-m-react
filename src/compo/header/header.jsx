import { Component } from "react";
import "./header.css"
class Header extends Component{
  render(){
    return(<>
    <div className="head">
    <div className="nav1">
        <p>Sustainability</p>
        <p>Customer Service</p>
        <p>Newsletter </p>
    </div>
    <div className="nav2">
        <img src="https://brandeps.com/logo-download/H/H-&-M-logo-01.png" alt="logo" height="100px" width="100px"></img>
    </div>
    <div className="nav3">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAFor78-cQbTbBsdmi1-6j4V8hxcmMuJnpCA&s" height="40px" width="40px"></img>
        <span>Sign in</span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8OG1DLKTSfQccSHBvyuzb26CDgL4GqA2EA&s" alt="favorites" height="40px" width="40px"></img>
        <span>Favourites</span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUE_xjuc12LxMGXVYud22gf8i0uwg-VTs8oQ&s" alt="shopping" height="40px" width="40px"></img>
        <span>Shopping bag (0)</span>
         
    </div>
    </div>
    <div className="header"> 
      <p>Ladies</p>
      <p>Men</p>
      <p>Baby</p>
      <p>Kids</p>
      <p>Home</p>
      <p>Sale</p>
    </div>
    <div className="offer"> 
      <p>Use code: HMFREESHIP to get free shipping today</p>
      <p>Free & flexible 15 days return</p>

      <p>Estimated delivery time: 2-7 days </p>
      
    </div>
    </>)
  } 
}
export default Header