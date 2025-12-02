const mongoose = require('mongoose');

const dbConnector = async () => {
  try {
    const dbURL = process.env.DB_URL || 'mongodb://localhost:27017/forum';
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // спира сървъра при грешка
  }
};

module.exports = dbConnector;
