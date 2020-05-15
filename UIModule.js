var UIModule = (function(){

    // classes used to select HTML elements 

    var DOMElements = {
        // indicators - test control
        timeLeft:'',//HTML element displaying time Left
        //test results 
        wpm:'',
        wpmChange:'',
        cpm:'',
        cpmChange:'',
        accuracy:'',
        accuracyChange:'', // user input
        textInput:'',
        nameInput:'', // test words 
        content:document.getElementById('content'),
        activeWord:'', // modal 
        modal:''    
    };

    var splitArray = function(string){
        return string.split('');
    };

    var addSpace = function(array){
        array.push(' ');
        return array;
    };

    var addSpanTags = function(array){
        return array.map(function(currentCharacter){
            return '<span>' + currentCharacter + '</span>';
        });
    };

    var addWordSpanTags = function(array){
        array.push('</span>');
        array.unshift('<span>');
        return array;
    };

    var joinEachWord = function(array){
        return array.join('');
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

        fillContent : function(array,lineReturn){
            var content = array.map(splitArray);
            content = content.map(addSpace);
            content = content.map(addSpanTags);
            content = content.map(addWordSpanTags);
            content = content.map(joinEachWord);
            content = content.join('');
            content = content.replace('<span>|</span>','<span>&crarr;</span>');
            content = content.split('<span></span>').join('<span>&crarr;</span>');    
            content = content.split('<span>'+ lineReturn +'</span>').join('<span>&crarr;</span>');    
            DOMElements.content.innerHTML = content;
        },
        formatWord : function(wordObject, wordHTML){},
        setActiveword : function(index){},
        deactivateCurrentWord : function(){},
        scroll : function(){}
    }
})();