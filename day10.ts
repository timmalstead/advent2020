// Day 10 Input
const input10: string = `73
114
100
122
10
141
89
70
134
2
116
30
123
81
104
42
142
26
15
92
56
60
3
151
11
129
167
76
18
78
32
110
8
119
164
143
87
4
9
107
130
19
52
84
55
69
71
83
165
72
156
41
40
1
61
158
27
31
155
25
93
166
59
108
98
149
124
65
77
88
46
14
64
39
140
95
113
54
66
137
101
22
82
21
131
109
45
150
94
36
20
33
49
146
157
99
7
53
161
115
127
152
128`

const arr10: number[] = input10
  // Input split on each line
  .split(/\n/)
  // Each string in the resulting array converted to a number
  .map((s: string) => Number(s))
  // Sorted from smallest to largest
  .sort((smaller: number, bigger: number) => smaller - bigger)

// Values of one and three jolt differences, we know there will be one of each to start
let [oneJoltDiffs, threeJoltDiffs] = [1, 1]

// Loop, starting from the second element of the array
for (let i = 1; i <= arr10.length; i++) {
  // Current value of the array
  const currentNum: number = arr10[i]
  // Previous value of the arrya
  const previousNum: number = arr10[i - 1]
  // If 1, adds one to oneJoltDiffs
  if (currentNum - previousNum === 1) oneJoltDiffs++
  // If 3, adds one to threeJoltDiffs
  else if (currentNum - previousNum === 3) threeJoltDiffs++
}

// Final answer
const partOneAnswer: number = oneJoltDiffs * threeJoltDiffs

// Trib sequence applied to input array, and last number returned from that
const partTwoAnswer: number = arr10
  .reduce(
    (array: number[], value) => {
      array[value] =
        (array[value - 3] || 0) +
        (array[value - 2] || 0) +
        (array[value - 1] || 0)
      return array
    },
    [1]
  )
  .pop()

console.log(`The answer to part one is ${partOneAnswer}
The answer to part two is ${partTwoAnswer}`)
