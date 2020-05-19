var eventsModule = (function(dModule,cModule,uModule,wModule){
    var addEventListeners = function(){
        // character typing error listener 

        // click on download button event listener 
        uModule.getDOMElements().textInput.addEventListeners('keydown',function(event){
            //if the test ended, do nothing
            if(dModule.testEnded()){
                return;
            }
            //if the test has not started yet,start the test and countdown
            if(!dModule.testStarted()){
                //start the test
            }
            //get typed word: UI Module
            var typedWord = uModule.getTypedWord();

            //update current word: data module
            dModule.updateCurrentWord(typedWord);
            //format the active word

            //check if the user pressed space or enter
            if(uModule.spacePressed() || uModule.enterPressed()){
                //empty text input

                //deactivate current word

                //move to a new word:data module

                //set active word : UI module

                //format the active word : UI module

                //scroll word into middle
            }
        });
        // click on restart button event listener  done through location.reload function in html page in restart button
    };
    return {
        // init function, initializes the test before start 
        init : function(duration,textNumber){
                // fill the list of test words : data module

                var words = wModule.getWords(textNumber);

                dModule.fillListOfTestWords(textNumber,words);

                // fill the list of test words : UI Module  
                var LineReturn = dModule.getLineReturn();
                var testWords = dModule.getListOfTestWords();
                uModule.fillContent(testWords , lineReturn);
                // set the total test time 
                dModule.setTestTime(duration);
                // update the time left : data Module
                dModule.initializeTimeLeft();
                // update time left : UI Module
                var timeLeft = dModule.getTimeLeft(); 
                uModule.updateTimeLeft(timeLeft);
                // move to a new word : data Module
                dModule.moveToNewWord();
                // set the active word : UI Module
                var index = dModule.getCurrentWordIndex();
                uModule.setActiveword(index);
                // format the active word : UI Module   
                var currentWord = dModule.getCurrentWord();
                uModule.formatWord(currentWord);

                // focus on text input : UI Module
                uModule.inputfocus();

                // add event listener  

            addEventListeners();
        }
    };

})(dataModule,certificateModule,UIModule,wordsModule);