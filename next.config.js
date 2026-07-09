const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'v3b.fal.media' },
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  }
}
module.exports = nextConfig