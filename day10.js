// Day 10 Input
var input10 = "73\n114\n100\n122\n10\n141\n89\n70\n134\n2\n116\n30\n123\n81\n104\n42\n142\n26\n15\n92\n56\n60\n3\n151\n11\n129\n167\n76\n18\n78\n32\n110\n8\n119\n164\n143\n87\n4\n9\n107\n130\n19\n52\n84\n55\n69\n71\n83\n165\n72\n156\n41\n40\n1\n61\n158\n27\n31\n155\n25\n93\n166\n59\n108\n98\n149\n124\n65\n77\n88\n46\n14\n64\n39\n140\n95\n113\n54\n66\n137\n101\n22\n82\n21\n131\n109\n45\n150\n94\n36\n20\n33\n49\n146\n157\n99\n7\n53\n161\n115\n127\n152\n128";
var arr10 = input10
    // Input split on each line
    .split(/\n/)
    // Each string in the resulting array converted to a number
    .map(function (s) { return Number(s); })
    // Sorted from smallest to largest
    .sort(function (smaller, bigger) { return smaller - bigger; });
// Values of one and three jolt differences, we know there will be one of each to start
var _a = [1, 1], oneJoltDiffs = _a[0], threeJoltDiffs = _a[1];
// Loop, starting from the second element of the array
for (var i = 1; i <= arr10.length; i++) {
    // Current value of the array
    var currentNum = arr10[i];
    // Previous value of the arrya
    var previousNum = arr10[i - 1];
    // If 1, adds one to oneJoltDiffs
    if (currentNum - previousNum === 1)
        oneJoltDiffs++;
    // If 3, adds one to threeJoltDiffs
    else if (currentNum - previousNum === 3)
        threeJoltDiffs++;
}
// Final answer
var partOneAnswer = oneJoltDiffs * threeJoltDiffs;
// Trib sequence applied to input array, and last number returned from that
var partTwoAnswer = arr10
    .reduce(function (array, value) {
    array[value] =
        (array[value - 3] || 0) +
            (array[value - 2] || 0) +
            (array[value - 1] || 0);
    return array;
}, [1])
    .pop();
console.log("The answer to part one is " + partOneAnswer + "\nThe answer to part two is " + partTwoAnswer);
