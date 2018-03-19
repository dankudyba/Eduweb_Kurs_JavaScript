(function() {

    let btn = document.querySelector("#getNumbers"),
        output = document.querySelector("#showNumbers");


    function getRandom(min, max) {

        return Math.round(Math.random()*(49-1)+1);

    }

    function showRandomNumbers() {

        var numbers = [],
            random;

        for(var i=0; i<6; i++) {
            random = getRandom(1, 49);

            while(numbers.indexOf(random) !== -1) {
                random = getRandom(1, 49);
            }

            numbers.push(random);
            
        }
        
        output.value = numbers.join(", ");
    }


    btn.onclick = showRandomNumbers;

})();

