function normalizeJsBasicsLabel(label) {
    // write your code here
    let result = label
    result = result.trim()
    result = result.toLowerCase()
    result = result.replace(/[^a-z0-9]+/g, "-")

    return "js-basic-" + result;
}
