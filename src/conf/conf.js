export const Auth ={
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteDbId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    pixabayApi: import.meta.env.VITE_PIXABYA_API,
    unsplashApi: import.meta.env.VITE_UNSPLASH_API,
    pexelsApi: import.meta.env.VITE_PEXEL_API,
}
