/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/TahirShaikh85/blogposts-for-blog-project/main/images/**',
            },
        ],
    },
};

export default nextConfig;
