import { Component } from "react"
import Header from "./compo/header/header"
import Banner from "./compo/banner/banner"
import Cards from "./compo/cards/cards"
import Footer from "./compo/footer/footer"
class App extends Component{
  render(){
    return(<>
    <Header/>
    <Banner/>
    <Cards/>
    <Footer/>

    </>)
  }
}
export default App