import React from 'react'

import Header from '../SubComponents/Header';
import SearchBar from '../SubComponents/SearchBar';
import GalleryContainer from '../SubComponents/GalleryContainer';
import ShowImage from "../SubComponents/ShowImage"
import { useEffect, useState } from 'react';
// import { useStateWithCallbackLazy } from 'useStateWithCallbackLazy';
import { ShimmerIm } from 'react-shimmer-effects';
import axios from 'axios';

export default function Home() {

    
  const[searched,setSearched] = useState("abstract");
  var srch = "abstract";
  const[totalPages,setPages] = useState(1) ;
  const[gallery,setGallery]=useState([]);
  const[frameLink,setframeLink]=useState("https://media3.giphy.com/media/sVviof0Avpff3UsHd1/giphy.gif");
  const[frameName,setframeName]=useState("Abstract");
  const[pageNumber,setpageNumber]=useState(1);
  const[LoadPage,setLoadPage]=useState(1);
  const apiKey='9d841379b48aef4a7ff223c4f64ae6aa'
  const secret='1fa192fdfb394e2f'

  useEffect(()=>{
    changeGallery();    
  },[])
  

  function Search(newSearched){
    setSearched(newSearched)
    changeGallery()
  }

  async function changeGallery(){
    await axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+apiKey+'&tags='+searched+'&per_page=66&page='+pageNumber+'&format=json&nojsoncallback=1')
    .then(function(j){
      setPages(j.data.photos.pages)
      let picArray= j.data.photos.photo.map((pic) => {
      
      var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
      
      return(
        <div className="img_container" key={pic.id}>
          <img alt={searched} src={srcPath} key={pic.id} onClick={()=>{setFrame(srcPath,pic.title)}}></img>
        </div>
        
      )
    })
    setGallery(picArray);
  }.bind(this))
  }

  function setFrame(link,name){
    document.getElementById("sideBar").style.transform="translateY(0%)";
    document.getElementById("sideBar").style.boxShadow="0px 0px 100px 1px black";
    setframeLink(link)
    setframeName(name)
  }

  function prevPage(){
    if(pageNumber>1){
      setpageNumber(pageNumber-1);
      changeGallery(searched)
    }
  }

  function nextPage(){
    if(pageNumber<totalPages){
      setpageNumber(pageNumber+1);
      changeGallery(searched)
    }
  }


  return (
      
    <div className="main-con" id="main-con">
        <Header></Header>
        <SearchBar pageNumber={pageNumber} totalPages={totalPages} searched={searched} changeSearched={(newSearched)=>Search(newSearched)} prevPage={()=>{prevPage()}} nextPage={()=>{nextPage()}}></SearchBar>
        <GalleryContainer gallery={gallery}></GalleryContainer>
        <ShowImage frameLink={frameLink} frameName ={frameName} ></ShowImage>
      </div> 
  )
}
