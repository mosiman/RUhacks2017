// Get the main tweet button  (there are more than one, but the main one is the first). 
var y = document.getElementsByClassName("btn primary-btn tweet-action tweet-btn js-tweet-btn");

// Listen for a click event for the tweet button. It executes the function in the second argument. The third argument species a 'trickle down' model, as opposed to a 'bubble-up' model so that we can bypass twitter's main event handler (which is to send the tweet). 

y[0].addEventListener("click", function(event){tweetParser(event)}, true);

function tweetParser(event){
    console.log('test!');
    
    var isMean = true;
    // do stuff here, like API calls, etc...
    
    if (isMean){
        alert('kinda mean fam, sure you wanna tweet that?');
        // if they want to change...
        event.stopPropagation(); // stops the twitter sending the tweet

    };
}

