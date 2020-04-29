var UIModule = (function(){

    // classes used to select HTML elements 

    var DOMElements = {
        // indicators - test control
        timeLeft,//HTML element displaying time Left
        //test results 
        wpm,wpmChange,cpm,cpmChange,accuracy,accuracyChange, // user input
        textInput,nameInput, // test words 
        content,activeWord, // modal 
        modal
    };

    return {
        // get DOM elements 
        getDOMElements(){},
        // Indicators - Test Control 
        updateTimeLeft : function(){},
        // results
        updateResults : function(){},
        fillModal : function(){},
        showModal : function(){},
        // user input
        inputfocus : function(){},
        isNameEmpty : function(){},
        flagNameInput : function(){},
        spacePressed : function(){},
        enterPressed : function(){},
        emptyInput : function(){},
        getTypedWord : function(){},

        // test words

        fillContent : function(){},
        formatWord : function(wordObject, wordHTML){},
        setActiveword : function(index){},
        deactivateCurrentWord : function(){},
        scroll : function(){}
    }
})();