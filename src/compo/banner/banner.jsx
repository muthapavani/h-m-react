import { Component } from "react";
import "./banner.css"
class Banner extends Component{
  render(){
    return(<>
    <div className="head1">
      <h3>Exclusive offer: FREE SHIPPING for 24 hours!</h3>
      <p>Use code: HMFREESHIP</p>
    </div>
    <div className="images">
    <div className="img1">
    <img  src="https://www2.hm.com/content/dam/global_campaigns/season_01/women/ws11l/WS11L-3x2-1.jpg" alt="image" height="600px" width="1140px"></img>
    <div className="box"> 
     <p> <b className="cost">Rs.3,399.00</b> <s>Rs.3,3999.00</s></p>
     
      <b>Doule-reasted twil...  &gt;</b>
    </div>
    <div className="text1">
    <pre >N e w  a r r i v a l s</pre>
    <h1>In focus: Neutral tones</h1>
    <button className="imgb">Shop now</button>
    </div>
    </div>
    <div className="img1">
    <img src="https://image.hm.com/content/dam/global_campaigns/season_01/men/start-page-assets/w6/MS11E6-16x9-Startpage-Teaser-1-w6.jpg?imwidth=4800" alt="image" height="600px" width="1140px"></img>
    <div className="text2">
      <h1>Denim roundup</h1>
      <p>Get to know the fit. A quick guide to signature jeans styles.</p>
      <button className="imgb" >Shop now </button>
    </div>
    <div className="box1">
      <p><b className="cost"> Rs.1,699.00 </b><s> Rs.1,999.00 </s></p>
      <p>Loose Jeans &gt;</p>
    </div>
    </div >
    
    <div className="img1"> 
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdJm7fzHNX1aHbJPmIjxWkedVO0AS5vL8dDg&s" alt="image"height="150px"width="1140px"></img>
      <div className="text3">
      <h1>The Sound of Style just dropped</h1>
      <p>Win Lollapalooza tickets, giveaways, unlock VIP access & so much more.</p>
      <div className="buttons">
        <button>Become a member</button>
        <button>Shop now</button>
        <button>Learn more</button>
      </div>
      </div>
    </div>
    </div>
    
    </>)

  }
  
}
export default  Banner