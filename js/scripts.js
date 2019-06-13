
$(document).ready(function() {
    $("form#cryptoForm").submit(function(event) {
        var userInput = $("#userInput").val().toLowerCase();

        if (userInput === "") {
            alert("Please enter a sentence!"); 
        } else {
            messageCharacters = userInput.replace(/[ !%$;.,_'-?]/g,'')

            messageCharacters = messageCharacters.split("");

            // Section for removing any potential punctuation or spaces. This way works, but another less complicated way is to use regex, as above, which alters the string directly instead of splitting it first.

            // for (var index = 0; index < messageCharacters.length; index++) {  
            //     if (messageCharacters[index] === "." || messageCharacters[index] === "," || messageCharacters[index] === "!"  || messageCharacters[index] === "?" || messageCharacters[index] === " ") {
            //         messageCharacter.splice(index, 1,);
            //     }
            // }
            
            messageCharacters = messageCharacters.join("").split("");

            alert(messageCharacters);
            debugger;
            var messageLength = messageCharacters.length;
            
            var squareSize = 0;
            for (var index = 1; (index*index) <= messageLength; index++ ){
                squareSize = index;
            }
            
            var endResult = "";
            var rows = [];
            var finalResult = ""

            for (var index = 0; index < messageLength; index += squareSize) {
                rows.push(messageCharacters.slice(index, index + squareSize));
            }

            for (var index = 0; index < squareSize; index++) {
                for (var jindex = 0; jindex < rows[index].length; jindex++) {
                    endResult += rows[jindex][index];
                }
            }
            console.log(endResult);
            // for (var index = 0; index < endResult.length; index++) {

            // }

            // add a space every 5 characters with regex would be like this: 
            finalResult = endResult.replace(/(.{5})/g,"$1 ");

            $("#resultantPrint").append("<p>" + finalResult + "</p>");
        }

        
        
        
        
        event.preventDefault();
    });
});

