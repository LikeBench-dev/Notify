export default function loadMore (res, num = 2) {
    const messages = []

    // if > 3
    if (res.length > num) {
        for (let i = 0; i < num; i++) {
            // main - false to main - true
            res[i].main = true
            messages.push(res[i])
        }
        //back messages
        return messages
        // if < 3
    } else {
        for (let i = 0; i < res.length; i++) {
            res[i].main = true
            messages.push(res[i])
        }
        //back messages
        return messages
    }
}
