import React, { Component } from 'react'
import "../../css/sidebar.css"
import joke from  "../../res/images/joke.jpg"


export default class ShowImage extends Component {

  constructor(props){
    super(props);
  }
  closeSideBar(){
    document.getElementById("sideBar").style.transform="translateY(200%)";
  }
  render() {
    return (
      <>
      <div className='sideBar' id="sideBar">
        <button className="close" onClick={()=>{this.closeSideBar()}}>
            Close
        </button>
        <div className="imageHolder" >
          <img src={this.props.frameLink} />
        </div>

        <div className="imgTitle">
          --| {this.props.frameName} |--
        </div>

      </div>
      
      </>
    )
  }
}
