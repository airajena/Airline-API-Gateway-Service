const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const rateLimit = require('express-rate-limit');

const app = express();

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 50, 
    message: "Too many requests from this IP, please try again after a minute.",
    headers: true, 
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(limiter);

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});