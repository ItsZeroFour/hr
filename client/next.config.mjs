/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Ensure we have a rule for SVG files
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.pdf$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      }
    );

    return config;
  },
};

export default nextConfig;
