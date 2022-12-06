var computerChoices = ["r", "p", "s"];

var wins = 0;
var losses = 0;
var ties = 0;

function r() {
    userGuess = "r";
     {
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
        if(userGuess === "r" || userGuess === "p" || userGuess === "s") {
            alert("The computer chose " + computerGuess)
    
            if (
                (userGuess === "r" && computerGuess === "s") ||
                (userGuess === "p" && computerGuess === "r") ||
                (userGuess === "s" && computerGuess === "p")
            ){
                wins++;
                alert("You've won " + wins + " time(s)!");
                document.getElementById("results").innerHTML = "total wins " + wins + " total ties " + ties + " total losses " + losses
            } else if (userGuess === computerGuess) {
                ties++;
                alert("You've tied " + ties + " time(s)!");
                document.getElementById("results").innerHTML = "total wins " + wins + " total ties " + ties + " total losses " + losses
            } else {
                losses++;
                alert("You've lost " + losses + " time(s)!");
                document.getElementById("results").innerHTML = "total wins " + wins + " total ties " + ties + " total losses " + losses
                }
            }
        }
    }

    function p() {
        userGuess = "p";
         {
            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        
            if(userGuess === "r" || userGuess === "p" || userGuess === "s") {
                alert("The computer chose " + computerGuess)
        
                if (
                    (userGuess === "r" && computerGuess === "s") ||
                    (userGuess === "p" && computerGuess === "r") ||
                    (userGuess === "s" && computerGuess === "p")
                ){
                    wins++;
                    alert("You've won " + wins + " time(s)!");
                    document.getElementById("results").innerHTML = "total wins " + wins + " total ties " + ties + " total losses " + losses
                } else if (userGuess === computerGuess) {
                    ties++;
                    alert("You've tied " + ties + " time(s)!");
                    document.getElementById("results").innerHTML = "total wins " + wins + " total ties " + ties + " total losses " + losses
                } else {
                    losses++;
                    alert("You've lost " + losses + " time(s)!");
                    document.getElementById("results").innerHTML = "total wins " + wins + " total ties " + ties + " total losses " + losses
                    }
                }
            }
        }

        function s() {
            userGuess = "s";
             {
                var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            
                if(userGuess === "r" || userGuess === "p" || userGuess === "s") {
                    alert("The computer chose " + computerGuess)
            
                    if (
                        (userGuess === "r" && computerGuess === "s") ||
                        (userGuess === "p" && computerGuess === "r") ||
                        (userGuess === "s" && computerGuess === "p")
                    ){
                        wins++;
                        alert("You've won " + wins + " time(s)!");
                        document.getElementById("results").innerHTML = "total wins " + wins + " total ties " + ties + " total losses " + losses
                    } else if (userGuess === computerGuess) {
                        ties++;
                        alert("You've tied " + ties + " time(s)!");
                        document.getElementById("results").innerHTML = "total wins " + wins + " total ties " + ties + " total losses " + losses
            } else {
                losses++;
                alert("You've lost " + losses + " time(s)!");
                document.getElementById("results").innerHTML = "total wins " + wins + " total ties " + ties + " total losses " + losses
            }
        }
    }
}

var computerChoices = ["r", "p", "s"];

var wins = 0;
var losses = 0;
var ties = 0;

function r() {
    userGuess = "r";
     {
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
        if(userGuess === "r" || userGuess === "p" || userGuess === "s") {
            alert("The computer chose " + computerGuess)
    
            if (
                (userGuess === "r" && computerGuess === "s") ||
                (userGuess === "p" && computerGuess === "r") ||
                (userGuess === "s" && computerGuess === "p")
            ){
                wins++;
                alert("You've won " + wins + " time(s)!");
                document.getElementById("results").innerHTML = "total wins " + wins + " total ties " + ties + " total losses " + losses
            } else if (userGuess === computerGuess) {
                ties++;
                alert("You've tied " + ties + " time(s)!");
                document.getElementById("results").innerHTML = "total wins " + wins + " total ties " + ties + " total losses " + losses
            } else {
                losses++;
                alert("You've lost " + losses + " time(s)!");
                document.getElementById("results").innerHTML = "total wins " + wins + " total ties " + ties + " total losses " + losses
                }
            }
        }
    }

    function p() {
        userGuess = "p";
         {
            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        
            if(userGuess === "r" || userGuess === "p" || userGuess === "s") {
                alert("The computer chose " + computerGuess)
        
                if (
                    (userGuess === "r" && computerGuess === "s") ||
                    (userGuess === "p" && computerGuess === "r") ||
                    (userGuess === "s" && computerGuess === "p")
                ){
                    wins++;
                    alert("You've won " + wins + " time(s)!");
                    document.getElementById("results").innerHTML = "total wins " + wins + " total ties " + ties + " total losses " + losses
                } else if (userGuess === computerGuess) {
                    ties++;
                    alert("You've tied " + ties + " time(s)!");
                    document.getElementById("results").innerHTML = "total wins " + wins + " total ties " + ties + " total losses " + losses
                } else {
                    losses++;
                    alert("You've lost " + losses + " time(s)!");
                    document.getElementById("results").innerHTML = "total wins " + wins + " total ties " + ties + " total losses " + losses
                    }
                }
            }
        }

        function s() {
            userGuess = "s";
             {
                var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            
                if(userGuess === "r" || userGuess === "p" || userGuess === "s") {
                    alert("The computer chose " + computerGuess)
            
                    if (
                        (userGuess === "r" && computerGuess === "s") ||
                        (userGuess === "p" && computerGuess === "r") ||
                        (userGuess === "s" && computerGuess === "p")
                    ){
                        wins++;
                        alert("You've won " + wins + " time(s)!");
                        document.getElementById("results").innerHTML = "total wins " + wins + " total ties " + ties + " total losses " + losses
                    } else if (userGuess === computerGuess) {
                        ties++;
                        alert("You've tied " + ties + " time(s)!");
                        document.getElementById("results").innerHTML = "total wins " + wins + " total ties " + ties + " total losses " + losses
            } else {
                losses++;
                alert("You've lost " + losses + " time(s)!");
                document.getElementById("results").innerHTML = "total wins " + wins + " total ties " + ties + " total losses " + losses
            }
        }
    }
}

        