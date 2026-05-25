function isValidJsBasicsIdentifier(name) {
    // write your code here
    if (typeof name !== "string") return false;
    name = name.trim();

    if (name.length === 0) return false;

    const reserve = ["let", "const", "var", "class", "function", "return"]
    if (reserve.includes(name)) return false;

    return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name);

}

console.log(isValidJsBasicsIdentifier("Helo91$A01"));