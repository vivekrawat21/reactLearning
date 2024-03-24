const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL), //The string means the value is string
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECTID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTIONID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASEID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}
export default conf;