/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        HOST:"http://localhost:4000/api",
        AUTH_PREFIX:"Bearer"
    }
};

export default nextConfig;
