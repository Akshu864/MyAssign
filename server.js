/***************************
*  WEB322 - Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: [Your Name] Student ID: [Your Student ID] Date: [Date]
*
*  Online (Cyclic) URL: [URL to your app on Cyclic]
*
****************************/

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const data = `<p>Mohammad Shamas - 037465064</p><p>My favorite movie is The Lion King</p>`;
    res.send(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});