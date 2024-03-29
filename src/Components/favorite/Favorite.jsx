import React, { useEffect, useState } from "react";
import StaredService from "../../appwriteService/stared";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Card, Loading } from "../../Components/index";
import "./Favorite.css"

function Favorite() {
   const [favoriteList, setFavoriteList] = useState(null);
   const [load, setLoad] = useState(true)
   const user = useSelector((state) => state.auth);
   useEffect(() => {
      if (user.loggedin) {
         StaredService.listFavorite(user.userData.$id).then((data) => {
            let newData = data.documents.map((items) => {
               let d = JSON.parse(items.data);
               d.docID = items.$id;
               return d;
            });
            if(newData.length > 0){
               setFavoriteList(newData);
            }else{
               setFavoriteList(null)
            }
         
         }).catch(error => console.log(error)).finally(()=> setLoad(false))
      }else{
         setLoad(false)
      }
   }, []);
   return load? <Loading/> :(!user.loggedin? <h1 className="fav-h1">Login To see Favorites</h1> : (
      <div>
         <div className="images-container">
            {!favoriteList? <h1 style={{color: "#39d15a"}}>Set Favorite To see Here</h1>  : favoriteList.map((photo) => (
               <Card key={uuidv4()} data={photo} />
            ))}
         </div>
      </div>
   ))
}

export default Favorite;
