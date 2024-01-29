import { Client, Databases, ID, Query } from "appwrite";
import { Auth } from ".././conf/conf";

class staredService {
   client = new Client();
   database;

   constructor() {
      this.client
         .setEndpoint(Auth.appwriteUrl)
         .setProject(Auth.appwriteProjectId);
      this.database = new Databases(this.client);
   }

   async setFavorite(data, userID) {
      try {
         return await this.database.createDocument(
            Auth.appwriteDbId,
            Auth.appwriteCollectionId,
            ID.unique(),
            {data, userID}
         );
      } catch (error) {
         console.log("Set Favorite", error);
      }
   }
   async listFavorite(userID) {
      try {
         return await this.database.listDocuments(
            Auth.appwriteDbId,
            Auth.appwriteCollectionId,
            [Query.equal('userID', userID)]
         );
      } catch (error) {
         console.log("List favorite", error);
      }
   }
   async deletefavorite(docID) {
      try {
         return await this.database.deleteDocument(
            Auth.appwriteDbId,
            Auth.appwriteCollectionId,
            docID
         );
      } catch (error) {
         console.log("delete favorite", error);
      }
   }
}

const StaredService = new staredService();

export default StaredService;
