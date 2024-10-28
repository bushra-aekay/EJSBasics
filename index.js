import express from "express";
import { dirname } from "path";
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


var date = new Date(); //gets current date and storing in var date.
// var date = new Date("June 24, 2023 11:13:00"); //assigning a custom date
var day = date.getDay(); //method to get the day of the date returned above and stores in var called day.
console.log(day);

let type = 'a weekday';
let adv = 'its time to chill and procastinate';

if (day === 0 || day ===6){
    type = 'the weekend';
    adv = 'time to lock in bestie'
}

app.get("/", (req,res) =>{
    res.render(__dirname + "/views/index.ejs",{
        dayType: type,
        advice: adv,
    });
});

app.listen( port, ()=>{
    console.log(`Listening for requests at ${port} `);
});
