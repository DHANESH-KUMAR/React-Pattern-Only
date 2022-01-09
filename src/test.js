function isAnagram(first, second) {
    var res1 = {},
        res2 = {},
        result = true;

    for (let i = 0; i < first.length; i++) {
        if (res1.hasOwnProperty(first[i])) {
            res1[first[i]] = res1[first[i]] + 1
        } else {
            res1[first[i]] = 1
        }
    }
    for (let j = 0; j < second.length; j++) {
        if (res2.hasOwnProperty(second[j])) {
            res2[second[j]] = res2[second[j]] + 1
        } else {
            res2[second[j]] = 1
        }
    }

    for (let k in res1) {
        if (!res2.hasOwnProperty(k)) {
            return false;
        }
        if (res2[k] !== res1[k]) {
            return false
        }
    }

    for (let k in res2) {
        if (!res1.hasOwnProperty(k)) {
            return false;
        }
        if (res1[k] !== res2[k]) {
            return false
        }
    }
    return result;

}

var r = isAnagram("armyy", "ymary");
console.log(r)