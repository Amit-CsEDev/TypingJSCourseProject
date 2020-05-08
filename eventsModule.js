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
                dModule.fillListOfTestWords(textNumber);

                // fill the list of test words : UI Module  

                // set the total test time 

                // update the time left : data Module
                
                // update time left : UI Module 

                // move to a new word : data Module

                // set the active word : UI Module

                // format the active word : UI Module   

                // focus on text input : UI Module

                // add event listener  

            addEventListeners();
        }
    };

})(dataModule,certificateModule,UIModule,wordsModule);