import { Client, Account, ID } from "appwrite";
import { Auth } from ".././conf/conf";

export class AuthService {
   client = new Client();
   account;

   constructor() {
      this.client
         .setEndpoint(Auth.appwriteUrl)
         .setProject(Auth.appwriteProjectId);
      this.account = new Account(this.client);
   }

   CreatAccount = async ({ email, password, name }) => {
      try {
         const userAccount = await this.account.create(
            ID.unique(),
            email,
            password,
            name
         );
         if (userAccount) {
            return this.loginUser({ email, password });
         } else {
            return userAccount;
         }
      } catch (error) {
         throw error;
      }
   };

   loginUser = async ({ email, password }) => {
      try {
         return await this.account.createEmailSession(email, password);
      } catch (error) {
         throw error;
      }
   };

   logoutUser = async () => {
      try {
         await this.account.deleteSessions();
      } catch (error) {
         throw error;
      }
   };

   currentUser = async () => {
      try {
         return await this.account.get();
      } catch (error) {
         console.log("CurrentUser::", error);
      }
      return null;
   };
}

const authService = new AuthService();

export default authService;
