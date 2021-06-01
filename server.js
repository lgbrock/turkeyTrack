// Requiring our dependencies
// const path = require('path');
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const connectDb = require('./config/database')
const homeRoutes = require('./routes/home')
const authRoutes = require('./routes/auth')
const taskRoutes = require('./routes/task')


// Initialize express
const app = express()

// Load config setting the .env path to /config/.env
dotenv.config({ path: './config/.env' });

// Load passport config
require('./config/passport')(passport);

// Connect to Database
connectDb()

// Calling our packages
app.set('view engine', 'ejs'); // Sets the view engine to render our ejs
app.use(express.static('public')); // Tells express to serve up these 'static' files
// app.use('/api/v1/tasks', tasks)
app.use(cors()); // allows for cross origin resource sharing
app.use(morgan('dev')); // Logging middleware. Check console for logs

// Body Parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Setup Sessions - stored in Mongodb - middleware for passport
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  );

// Initialize passport sessions - persists auth until user logs out
app.use(passport.initialize());
app.use(passport.session());

//Static Folder
app.use(express.static("public"));

// Routes
app.use('/', homeRoutes);
app.use('/auth', authRoutes);
app.use('/api/v1/tasks', taskRoutes);

if(process.env.NODE_ENV !== 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html' )))
}

// Initializing our PORT
let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}... Lets eat`.blue.bold);
})