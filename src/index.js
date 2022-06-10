module.exports = function toReadable(number) {
    let units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let dozens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let mod = number % 10;

    if (number < 20) return units[number];
    if (number < 100)
        return `${dozens[Math.trunc(number / 10) - 2]}${
            mod ? " " + units[mod] : ""
        }`;
    if (number < 1000)
        return `${units[Math.trunc(number / 100)]} hundred ${
            number % 100 == 0 ? "" : toReadable(number % 100)
        }`.trim();
};
