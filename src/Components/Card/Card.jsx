import { Link } from "react-router-dom";
import "./Card.css";
import { useState } from "react";
import StaredService from "../../appwriteService/stared";
import { useSelector } from "react-redux";

export default function Card({ data }) {
   const [favorite, setfavorite] = useState(data.favorite);
   const [docid, setdocid] = useState(data.docID);
   const user = useSelector((state) => state.auth.userData);
   async function favoriteHandler() {
      setfavorite((prev) => !prev);
      if (!favorite) {
         try {
            if (!docid) {
               data.favorite = true;
               let updocId = await StaredService.setFavorite(
                  JSON.stringify(data),
                  user.$id
               );
               setdocid(updocId.$id);
            }
         } catch (error) {
            console.log("error set favorite", error);
         }
      } else {
         try {
            if (docid) {
               data.favorite = false;
               await StaredService.deletefavorite(docid);
               setdocid(null);
            }
         } catch (error) {
            console.log("error delete favorite", error);
         }
      }
   }
   return (
      <div className="image-div">
         <div className="favorite-div">
            <button onClick={() => favoriteHandler()}>
               {!favorite ? (
                  <i className="fa-regular fa-star"></i>
               ) : (
                  <i className="fa-solid fa-star"></i>
               )}
            </button>
         </div>
         <div className="image" onDoubleClick={() => favoriteHandler()}>
            <img src={data.imageSrc} alt={data.imageAltTag} />
         </div>
         <div className="tittle">
            <p>
               <Link to={data.pageUrl} target="_blank">
                  {data.description}
               </Link>
            </p>
            <p>
               <span className="image-by">By</span>{" "}
               <Link to={data.authorUrl} target="_blank">
                  {data.AutherName}
               </Link>
            </p>
         </div>
      </div>
   );
}
