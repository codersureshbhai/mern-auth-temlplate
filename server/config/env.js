const validateEnv = () => {
  const requiredEnv = [
    "MONGO_URI",
    "JWT_SECRET",
    "CLIENT_URL",
  ];

  requiredEnv.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`Missing environment variable: ${key}`);
    }
  });
};

export default validateEnv;