import { Client, Account, ID } from "appwrite";

import config from "../conf/config";

export class AuthService {

    client = new Client()

    account;

    constructor() {
        this.client
        .setEndpoint(config.AppwriteUrl) 
        .setProject(config.ProjectId);
        this.account = new Account(this.client);
    }



    async createAccount({ email, password, name }) {
        try {

            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                const logInData= {
                    email, 
                    password
                };
                return this.login(logInData);

            } else {

                return userAccount;
            }


        } catch (error) {
            throw error;
        }
    }



    async login({email, password}) {
        try {
            console.log("login tried fn call from auth.js", email," and  ", password)
            const userLogin = await this.account.createEmailSession(email, password);
            return userLogin;
        } catch (error) {
            throw error;
        }

    }



    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
           if(error.type ==='general_unauthorized_scope')
            console.log("User not Logged in...");
        

        }
    }


    async logout(){
        try {
                return await this.account.deleteSessions();
        } catch (error) {
            console.log("APPWRITE_SERVICE::LOGOUT ERROR ",error);
        }
    }

}

const authService = new AuthService()
export default authService 
