const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "public" directory
app.use(express.static((__dirname+ '/public')));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

// Start the server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
