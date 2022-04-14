import { render } from '@testing-library/react'
import axios from 'axios';
import React, { Component } from 'react'
import "../../css/gallery.css"
import { ShimmerSimpleGallery   } from 'react-shimmer-effects';
// import Shimmer from "react-shimmer-effect";

export default class Gallery extends Component{

  constructor(props){
    super(props)
  }

  componentDidlMount(){
    console.log(JSON.stringify(this.props.gallery))
    // document.getElementById("shimmer").style.display="none";
  }

  render(){
  return (
    <>
    {
      this.props.gallery.length
      ?
      <div className='gallery' id="gallery">
        {this.props.gallery}
      </div>
      :<ShimmerSimpleGallery  row="4" col="4"  gap="30" className="shimmer" card imageHeight={300} />
    }


    {/* {this.props.gallery} */}
    </>
  );
  }
}
