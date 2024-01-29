import React, { useEffect, useState } from "react";
import StaredService from "../../appwriteService/stared";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Card } from "../../Components/index";
import "./Favorite.css"

function Favorite() {
   const [favoriteList, setFavoriteList] = useState([]);
   const user = useSelector((state) => state.auth);
   console.log(user);
   useEffect(() => {
      if (user.loggedin) {
         StaredService.listFavorite(user.userData.$id).then((data) => {
            let newData = data.documents.map((items) => {
               let d = JSON.parse(items.data);
               d.docID = items.$id;
               return d;
            });
            setFavoriteList(newData);
         });
      }
   }, []);
   return !user.loggedin? <h1 className="fav-h1">Login To see Favorites</h1> : (
      <div>
         <div className="images-container">
            {favoriteList.map((photo) => (
               <Card key={uuidv4()} data={photo} />
            ))}
         </div>
      </div>
   );
}

export default Favorite;
