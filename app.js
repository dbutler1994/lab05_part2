// getting required modules
const express = require("express");
const app = express();
const path = require("path");

// middleware and config
app.set("view engine", "ejs");

// global data


// home route
app.get("/",  async (req, res) => {

    let url = "http://universities.hipolabs.com/search?country=australia";
    let reponse = await fetch(url);
    let unis = await reponse.json();

    
    let countries = [{name:"Austrailia"},{name:"Denmark"},{name:"France"},{name:"USA"}];
    
    //let firstUni = unis[0];
    res.render("index", {uniData : unis, countryData : countries});
})


// denmark route
app.get("/denmark",  async (req, res) => {

    let url = "http://universities.hipolabs.com/search?country=denmark";
    let reponse = await fetch(url);
    let unis = await reponse.json();

    let countries = [{name:"Austrailia"},{name:"Denmark"},{name:"France"},{name:"USA"}];
    
    //let firstUni = unis[0];
    res.render("index", {uniData : unis, countryData : countries});
})

//austrailia route
app.get("/austrailia",  async (req, res) => {

    let url = "http://universities.hipolabs.com/search?country=australia";
    let reponse = await fetch(url);
    let unis = await reponse.json();

    let countries = [{name:"Austrailia"},{name:"Denmark"},{name:"France"},{name:"USA"}];
    
    //let firstUni = unis[0];
    res.render("index", {uniData : unis, countryData : countries});
})

// ireland route
app.get("/france",  async (req, res) => {

    let url = "http://universities.hipolabs.com/search?country=france";
    let reponse = await fetch(url);
    let unis = await reponse.json();

    let countries = [{name:"Austrailia"},{name:"Denmark"},{name:"France"},{name:"USA"}];
    
    //let firstUni = unis[0];
    res.render("index", {uniData : unis, countryData : countries});
})

// USA route
app.get("/usa",  async (req, res) => {

    let url = `http://universities.hipolabs.com/search?country=United States`;
    let reponse = await fetch(url);
    let unis = await reponse.json();
    let country = "United States";

    let countries = [{name:"Austrailia"},{name:"Denmark"},{name:"France"},{name:"USA"}];
    
    //let firstUni = unis[0];
    res.render("index", {uniData : unis, countryData : countries});
})



// simple listener. bootstrapping the app
app.listen(3000, (err)=> {
    if(err) throw err;
    console.log("Server listening on //localhost:3000");
})