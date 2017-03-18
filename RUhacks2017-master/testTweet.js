var x = document.getElementById('tweet-box-home-timeline');

var start = '{\"text\": \" '
var end = ' \"}'
var message = 'what a time to be alive sad sorrow';
var data = '';

//Gets stuff in message box
message  = x.innerText;

// Get the main tweet button  (there are more than one, but the main one is the first).
var y = document.getElementsByClassName("btn primary-btn tweet-action tweet-btn js-tweet-btn");

// Listen for a click event for the tweet button. It executes the function in the second argument. The third argument species a 'trickle down' model, as opposed to a 'bubble-up' model so that we can bypass twitter's main event handler (which is to send the tweet).

y[0].addEventListener("click", function(event){tweetParser(event)}, true);

function tweetParser(event){
    console.log('test!');

    // var isMean = true;
    // do stuff here, like API calls, etc...

    function yourFunction(callback){
      $.ajax({
          url: "https://watson-api-explorer.mybluemix.net/tone-analyzer/api/v3/tone?version=2016-05-19&text=",
          type: 'POST',
          dataType: 'json',
          contentType: 'application/json',
          processData: false,
          data: "" + start + message + end,
          success: function (data) {
          alert(JSON.stringify(data));
          //data = JSON.stringify(data.document_tone.tone_categories[0].tones[0].tone_id);
          },
          error: function(){
              alert("Cannot get data");
          }

          }).done(function(result) {
              /* do something with the result here */
              alert("asdfdafasdf" + x);
              x = JSON.stringify(result.document_tone.tone_categories[0].tones[0].tone_id);
              // document.write(x);
              if(x>0.5){
                isMean = true;
              }
              callback(result); // invokes the callback function passed as parameter
        });
    }

    yourFunction(function(result) {
        x = (JSON.stringify(result.document_tone.tone_categories[0].tones[0].score));

        if(x < 0.05){
        alert("That is offensive");
        }

    });

    if (isMean){
        alert('kinda mean fam, sure you wanna tweet that?');
        // if they want to change...
        event.stopPropagation(); // stops the twitter sending the tweet

    };
}
