module.exports = function check(str, bracketsConfig) {

    let arr = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (bracketsConfig[j][0] == str[i]) {
                if (bracketsConfig[j][0] != bracketsConfig[j][1]) {
                    arr.push(str[i]);
                    break;
                } else {
                    if (arr.length == 0) {
                        arr.push(str[i]);
                        break;
                    } else {
                        if (arr[arr.length - 1] != str[i]) {
                            arr.push(str[i]);
                            break;
                        }
                    }
                }
            }

            if (bracketsConfig[j][1] == str[i]) {
                if (bracketsConfig[j][0] != bracketsConfig[j][1]) {
                    if (!arr.length) {
                        return false;
                    }
                    if (arr[arr.length - 1] == bracketsConfig[j][0]) {
                        arr.pop()
                        break;
                    }
                } else {
                    if (arr[arr.length - 1] == str[i] && arr.length != 0) {
                        arr.pop()
                        break;
                    }
                }
            }
        }
    }
    return (!arr.length) ? true : false;

}
