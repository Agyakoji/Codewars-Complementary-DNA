// In DNA strings, symbols 'A' and 'T' are complements of each other, as 'C' and 'G'.
// Your function receives one side of the DNA (string, except for Haskell); 
// you need to return the other complementary side. DNA strand is never empty or there's no DNA at all

                // SOLUTION
function DNAStrand(dna){
    // Declare an empty variable to hold the returned DNA complement
    let result = ''

    // Checking for the complement of each of the DNA symbols
    for(let i = 0; i < dna.length; i++){
        // comparing the DNA symbols for each complement
        if(dna[i] === 'A'){
            result += 'T'
        }else if(dna[i] === 'T'){
            result += 'A'
        }else if(dna[i] === 'C'){
            result += 'G'
        }else if(dna[i] === 'G'){
            result += 'C'
        }else{
            return 'You\'re an alien'
        }
    }
    return result
}
alert(DNAStrand('CATGGA'))



                // Using switch statement
// function DNAStrand(dna){
//     let result = ''
//     for(let i = 0; i < dna.length; i++){
//         switch(dna[i]){
//             case 'A':
//             result += 'T'
//             break;

//             case 'T':
//             result += 'A';
//             break;

//             case 'G':
//             result += 'C'
//             break;

//             case 'C':
//             result += 'G'
//             break;

//             default:
//             return 'You are not from this planet!'
//         }
//     }
//     return result
// }
// alert(DNAStrand('AGATTC'))



// function DNAStrand(dna){
//    let sequence = {
//        'A':'T',
//        'T':'A',
//        'G':'C',
//        'C':'G'
//    }
//    return dna.replace(/A|T|G|C/g, function (matched){
//        return sequence [matched]
//    })
// }
// alert(DNAStrand('AGATTC'))
