import conf from "../conf/conf.js";
import {Client , ID , Databases , Storage , Query} from 'appwrite';

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
      
            this.client 
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.account = new Account(this.client);
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
        
    

    }

    async createPost({title ,slug, title, content,featuredImage ,status , userId}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,  {
                title,
                content,
                featuredImage,
                status,
                userId,
                createdAt: Date.now()
            })
        } catch (error){
            console.log("Appwrite sevice :: createPost :: error",error);
        }
    }


    async updatePost(slug,{title, content,featuredImage ,status}){
        try {
           return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
            title,
            content,
            featuredImage,
            status
           } ) 
        } catch (error) {
            console.log("Appwrite sevice :: updatePost :: error",error);
            
        }
    }

    
    async deleteDocument(slug){
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug);
            return true;
        } catch (error) {
            console.log("Appwrite sevice :: deleteDocument :: error",error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug);
        } catch (error) {
        console.log("Appwrite sevice :: getPost :: error",error);  
        return false          
        }

    }
    

    async getPosts(queries = [Query.equal('status','active')]){
        try {

            return await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,queries)
        } catch (error) {
            console.log("Appwrite sevice :: getPosts :: error",error);
            return false;
        }
    }


    async uploadFile(file){
        try {
            return await  this.bucket.createFile(conf.appwriteBucketId,ID.unique(),file);
        } catch (error) {
            console.log("Appwrite sevice :: fileUpload :: error",error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            return this.bucket.deleteFile(conf.appwriteBucketId,fileId);
        } catch (error) {
            console.log("Appwrite sevice :: fileDelete :: error",error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appwriteBucketId,fileId);
    
    }
}


const service = new Service();

export default service;
