const express = require('express');
const htmlroutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.use('/api', apiRoutes)
app.use('/', htmlroutes)

app.listen(PORT, () => console.log("listening on port " +PORT));


