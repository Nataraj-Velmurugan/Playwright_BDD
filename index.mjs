let  blocks = "WBWBWB", k = 2

var minimumRecolors = function() {

    let result = [];

    for(let i=0; i<blocks.length - k; i++) {
        let itr = i, temp=0, j=i;
        while(itr < k+i) {
            if(blocks[j++] === "B") {
                itr++;
                temp++
            } else {
                temp=0;
                break;
            }
        }

        if(temp === k) return 0

    }

    for(let i=0; i<=blocks.length-k ; i++) {
        
        let j = i, count = 0; 

        while(j < k+i ) {
            if(blocks[j] === 'W') count++
            j++
        } 
        
        result.push(count)
    }

    return Math.min(...result)

};

console.log(minimumRecolors());

