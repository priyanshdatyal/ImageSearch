import axios from 'axios';
import React, { Component, useState } from 'react'
import "../../css/searchbar.css"
import { ShimmerSimpleGallery } from 'react-shimmer-effects';
export default class SearchBar extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      word:this.props.searched,
      gallery:[]
    }
  }
  
  changeWord(e){
    this.state.word=e.target.value;
    
  }
  render(){
  return (
    <div className='searchBar' >
      <input id="searchit" onChange={(e)=>this.state.word=e.target.value} value={this.word} placeholder="Search for the ...."/>
      <div className="searchIcon" onClick={()=>{this.props.changeSearched(this.state.word)}}>
        <img src='https://cdn-icons-png.flaticon.com/512/122/122932.png'/>
      </div>
      <div className="pageCounter">
        <div className="pageNav" onClick={()=>{this.props.prevPage()}}>
        &lt;
        </div>
        <div className="pageNav" onClick={()=>{this.props.nextPage()}}>
        &gt;
        </div>
      </div>
      <div className="pageCounterNum">
        <p>
        {this.props.pageNumber}/{this.props.totalPages}
        </p>
      
      </div>
    </div>
  );
  }
}
