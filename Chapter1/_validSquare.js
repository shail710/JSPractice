//Leetcode 593

function validSquare(p1, p2, p3, p4){
    let lengths = [];
    lengths.push(calculateDistance(p1, p2));
    lengths.push(calculateDistance(p1, p3));
    lengths.push(calculateDistance(p1, p4));
    lengths.push(calculateDistance(p2, p3));
    lengths.push(calculateDistance(p2, p4));
    lengths.push(calculateDistance(p3, p4));

    lengths = lengths.sort((a,b) => a-b);

    if(!(lengths[0] === lengths[1] && lengths[1] === lengths[2] && lengths[2] === lengths[3])) return false;

    if(lengths[3] === lengths[4]) return false;

    if(lengths[4] !== lengths[5]) return false;

    return true;
}

function calculateDistance(a,b){
    return Math.sqrt(Math.pow(b[0] - a[0] , 2) + Math.pow(b[1] - a[1], 2));
}