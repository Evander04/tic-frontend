/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        HOST:"http://localhost:4000/api",
        PREFIX_GAME:"/game",
        AUTH_PREFIX:"Bearer"
    }
};

export default nextConfig;
