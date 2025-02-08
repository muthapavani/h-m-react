import { Component } from "react";
import "./footer.css"
class Footer extends Component{
    render(){
        return(<>
        <div className="main">
        <div className="footer">
        <div>
            <p>Shop</p>
            <small>Ladies</small><br></br>
            <small>Men</small><br></br>
            <small>Baby</small><br></br>
            <small>kids</small><br></br>
            <small>Home</small><br></br>
            <small>Magazine</small><br></br>
        </div>
        <div>
            <p>Corporate info</p>
            <small>Career at H&M</small><br></br>
            <small>About H&M group</small><br></br>
            <small>Sustainability H&M Group</small><br></br>
            <small>Press</small><br></br>
            <small>Investor relations</small><br></br>
            <small>Corporate governance</small><br></br>
        </div>
        <div>
            <p>Help</p>
            <small>Customer Service</small><br></br>
            <small>My H&M</small><br></br>
            <small>Find a store</small><br></br>
            <small>Legal & privacy</small><br></br>
            <small>Contact</small><br></br>
            <small>Secure shopping</small><br></br>
            <small>Cookie Notice</small><br></br>
            <small>Cookie Settings</small><br></br>
        </div>
        <div>
            <p> Sign up now and be the first<br></br>
                 to know about exclusive offers, <br></br>
                 latest fashion news & style tips!</p>
            <h5 className="read">Read more  &gt;</h5>
        </div>
        </div>
        <div className="logos">
        <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="logo" height="30px"/>
        <img src="https://e7.pngegg.com/pngimages/927/226/png-clipart-tiktok-white-logo-social-media-icons-thumbnail.png" alt="logo" height="30px"/>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Black.png" alt="logo" height="30px"/>
        <img src="https://i.pinimg.com/736x/40/e2/6b/40e26beab6a4049d7d52cee459a7dbb8.jpg" alt="logo" height="30px"/>
       <img src="https://www.figma.com/community/resource/97c7d705-c136-472a-aebe-4c0b23f615df/thumbnail" alt="logo" height="30px"/>
       <img src="https://e7.pngegg.com/pngimages/226/903/png-clipart-logo-social-media-facebook-brand-social-media-text-logo.png" alt="logo" height="30px"/>
       </div>
       <div className="ftr">
       <p>The content of this site is copyright-protected and is the property of H & M Hennes & Mauritz AB.</p>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYMtXfjuAa0peUTAKumX4eXMYi7145maNog&s " height="50px" width="50px"/>
       <h4>INDIA | Rs.</h4>
       </div>
        </div>
        </>
        )
    }
}
export default Footer