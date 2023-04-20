/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  // using database only for test and dvelopment, not using the 
  // real database connection that has realdata from users.
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "hirafa",
        mongodb_password: "academind123",
        mongodb_cluster: "maincluster",
        mongodb_database: "main",
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        MONGODB_URI: process.env.MONGODB_URI,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
      },
      
    };
  }
  //change the below env obj values to any other mongodb username,
  // passord, cluster or database for PRODUCTION
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "hirafa",
      mongodb_password: "academind123",
      mongodb_cluster: "maincluster",
      mongodb_database: "main",
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      MONGODB_URI: process.env.MONGODB_URI,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  };
};
