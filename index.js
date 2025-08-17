const experss = require('express');
const app = experss();

const Path = require('path');
// middleware
app.use(experss.json());
app.use(experss.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(experss.static(Path.join(__dirname, "public")));


//route
 app.get('/', function(req,res){
  res.render("index.ejs")
 })

// start the server
app.listen(3005, () => {
  console.log('Server is running on port 3005');
});