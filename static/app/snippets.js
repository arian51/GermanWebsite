    .then(x => {
        for (let i = 0; i < x.length; i++) {
            console.log(x[i].word);
        }
    })
    .then(x => { return x }).resolve();


   //////////////////////////////////////


       while (counter < nugget.length) {
        occurance[counter] = nugget[counter];
        occNum[counter] = 1;
        for (let i = 1; i < length; i++) {
            if (occurance[counter] === nugget[i]) {
                console.log('t' + occurance[counter])
                occNum[counter]++;
                if(occNum[counter] > 1){
                nugget.splice(i, 1);
                length--;
                }
            }
        }
        counter++;
    }