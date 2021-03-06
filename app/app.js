const express = require("express"); //assigns express
const app = express(); //executes express
const PORT = process.env.PORT || 4001;


app.use(express.urlencoded({extended: false})); //Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
;//Create a new middleware function to serve files from within a given root directory.
//app.use("/", express.static(__dirname + '/html'))

app.use(express.static("views"));
app.set('view engine', 'ejs');  
// app.use(express.static(__dirname + '/public'));
app.use(express.static( 'public'));

app.post("/invitation",(req,res,next) => {
    const greeting = req.body.greeting;
    const event = req.body.event;
    const message = req.body.message;
  res.render('invitation-card',{
    greeting: greeting,
    event: event,
    message: message
  });
  //res.send(req.body)

});  

app.defaultConfiguration;
app.listen(PORT, () => { //Listen for connections.
    console.log(`Listening on port: ${PORT}`);
});
    
