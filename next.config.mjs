/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        HOST:"http://localhost:4000/api",
        CONTROLLER_AUTH:"/auth",
        CONTROLLER_PERSON:"/person",
        CONTROLLER_USER:"/user",
        CONTROLLER_CATALOG:"/catalog",
        CONTROLLER_MENU:"/menu",
    }
};

export default nextConfig;
