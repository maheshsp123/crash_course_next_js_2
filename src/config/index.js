// config/index.js

const development = {
    apiEndPoint: 'http://localhost:3000/api2',
    // other development-specific configurations
  };
  
  const production = {
    apiEndPoint: 'https://yourdomain.com/api2',
    // other production-specific configurations
  };
  
  const config = process.env.NODE_ENV === 'production' ? production : development;
  
  export default config;
  