const mongoose = require('mongoose');
// const dbSecret = process.env['DB_URI'];



// remember to whitelist IP in database (or whitelist connections from everywhere)
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`Mongodb connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb