var eventsModule = (function(dModule,cModule,uModule,wModule){
    var addEventListeners = function(){
        // character typing error listener 
        // click on download button event listener 
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

                // set the active word : UI Module

                // format the active word : UI Module   

                // focus on text input : UI Module

                // add event listener  

            addEventListeners();
        }
    };

})(dataModule,certificateModule,UIModule,wordsModule);