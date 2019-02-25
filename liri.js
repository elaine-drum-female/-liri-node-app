// Required modules
var fs = require('fs');
var dotenv = require("dotenv").config();

// Required Axios
var axios = require('axios');

//Required Moment
var moment = require('moment');

// Spotify keys to access their API

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
console.log(spotify);

// Required ENV to hold the secret Info above

var keys = require("./keys.js");

// BandsinTown keys to access their API

var bandsInTownAPI = keys.bandsInTownAPI.key;
console.log(bandsInTownAPI);

// BandsinTown keys to access their API

var omdbiAPI = keys.omdbiapi.key;
console.log(omdbiAPI);

// Taking user command and input through processArgv variables
var instructions = process.argv[2];
var inputInfo = process.argv.slice(3).join(" ");



// Using switch case to choose commands

switch (instructions) {
    case "concert-this":
        bandsRun(inputInfo);
        break;
    case "spotify-this-song":
        yesSong(inputInfo);
        break;
    case "movie-this":
        yesMovie(inputInfo);
        break;
    case "do-what-it-says":
        yeswhatItSays(inputInfo);
        break;
    default:
        console.log("Invalid command");
        break;
}


// ====================================
//Node cli for BandsinTown
// ====================================

function bandsRun(inputInfo) {
    var bandstownAPI = "https://rest.bandsintown.com/artists/Ace+Of+Base/events?app_id=%22%20+%20codingbootcamp";
    console.log(bandstownAPI);
    request(bandstownAPI, function (error, response, body) {
        if (!inputInfo) {
            var concerts = JSON.parse(body);
            for (var i = 0; i < concerts.length; i++) {
                console.log('-----------------------------------------------------') +
                    console.log("Artist(s): " + concerts);
                console.log("Name of the venue: " + concerts[i].venue.name);
                console.log("Venue Location: " + concerts[i].venue.city);
                console.log("Date of Event: " + moment(concerts[i].datatime).format("MM/DD/YYYY"));
                console.log('-------------------------------------------------');
            }
        } else {
            console.log('Sorry there was an error');
        }
    });
}



//Node cli for Spotify

function yesSong(inputInfo) {
    if (inputInfo === undefined) {
        // get ACE of Base song: The Sign
        inputInfo = "The Sign";
    }
    spotify.search({
            type: "track",
            query: inputInfo
        }),
        function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            console.log(data);
        }

    var songs = data.track.items;


    for (var i = 0; i < songs.length; i++) {

        "------------------------------------------------------" +

        console.log("\nArtist(s): " + response.track.items[i].artist[0].name);
        console.log("\nSong Name: " + 'Ooh love this song: ' + response.track.items[i].name);
        console.log("nPreview Link: " + 'The preview url is: ' + response.track.items[i].preview_url);
        console.log("n\Album Link: " + 'The song album is: ' + response.track.items[i].album.name);
        console.log('--------------------------------------');
    }
};


// Node cli for OMDBI 

function yesMovie(inputInfo) {
    if (inputInfo === undefined) {
        inputInfo = "Mr.Nobody"
        console.log("If you have not watched \'Mr.Nobody\', 'then you should: http://www.imdb.com/title/tt0485947/");
        console.log("It's on Netflix!");
    }

    var queryURL = "http://www.omdbapi.com/?t=" + inputParameter + "&y=&plot=short&apikey=ffa07ec4";
    request(queryURL, function (error, response, body) {
        if (!error) {
            var movies = JSON.parse(body);
            console.log("Title: " + movies.title);
            console.log("Release Year: " + movies.year);
            console.log("IMDB Rating: " + movies.imdbRating);
            console.log("Rotten Tomatoes Rating: " + getRottenTomatoesRatingVal(movies));
            console.log("Country of Production: " + movies.Country);
            console.log("Language: " + movies.Language);
            console.log("Plot: " + movies.Plot);
            console.log("Actors: " + movies.Actors);
        } else {
            console.log('Sorry there was an error');
        }
    });
}
