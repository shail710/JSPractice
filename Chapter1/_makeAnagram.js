function makeAnagram(a, b) {
    let stringA = new Map();
    let stringB = new Map();
    let count = 0;

    //calculate occurances for each letter in A and B
    for (let i = 0; i < a.length; i++) {
        let char = a[i]
        if (stringA.has(char)) {
            let val = stringA.get(char)
            stringA.set(char, val+1)
        }
        else stringA.set(char, 1)
    }
    for (let i = 0; i < b.length; i++) {
        let char = b[i]
        if (stringB.has(char)) {
            let val = stringB.get(char)
            stringB.set(char, val + 1)
        }
        else stringB.set(char, 1)
    }

    //Find how much items to remove from A to get it the same as B
    stringA.forEach((value, key) => {
        if (!(stringB.has(key))) {
            //Remove all occurances of this letter since its never in B
            count = count + stringA.get(key)
        }
        else {
            //Get how many times this char occurs in B
            let bOccr = stringB.get(key)
            //Need to remove the difference between what A has and B has
            let diff = value - bOccr
            if (diff > 0) {
                count = count + diff
            }
        }
    })

    //Find how much items to remove from B to get it the same as A
    stringB.forEach((value, key) => {
        if (!(stringA.has(key))) {
            //Remove all occurances of this letter since its never in A
            count = count + stringB.get(key)
        }
        else {
            //Get how many times this char occurs in A
            let aOccr = stringA.get(key)
            //Need to remove the difference between what A has and B has
            let diff = value - aOccr
            if (diff > 0) {
                count = count + diff
            }
        }
    })
    return count
}