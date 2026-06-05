# Web-Scraper

## Setup

### Initialization

- Clone repo.
- Install Node.js (via nvm)
- Install yarn

### Installtion

```bash
nvm use
yarn install
npx playwright install chromium
```

### Start a server

```bash
yarn run start
```

## Codeforces Problem Scraper API

### Endpoint

`POST /api/scraper`

Scrapes Codeforces problem statements and returns structured problem data.

---

## Request Body

```json
{
  "problems": [
    {
      "contestId": 2231,
      "problemIndex": "A"
    },
    {
      "contestId": 2230,
      "problemIndex": "A"
    },
    {
      "contestId": 2030,
      "problemIndex": "C"
    }
  ]
}
```

### Fields

| Field          | Type     | Description                                     |
| -------------- | -------- | ----------------------------------------------- |
| `contestId`    | `number` | Codeforces contest ID                           |
| `problemIndex` | `string` | Problem letter/index (e.g. `A`, `B`, `C`, `D1`) |

---

## Success Response

**Status:** `200 OK`

```json
{
  "problems": [
    {
      "url": "https://codeforces.com/problemset/problem/2231/A",
      "title": "A. Construct an Array",
      "timeLimit": "1 second",
      "memoryLimit": "256 megabytes",
      "problemStatement": "You are given an integer n𝑛n. You need to construct an array of integers a1,a2,…,ana_1, a_2, \\ldots, a_n such that the following conditions are satisfied: 1≤ai≤2⋅n1 \\leq a_i \\leq 2 \\cdot n for all ii from 11 to nn.  All elements of the array and the sums of adjacent elements are pairwise distinct. In other words, among the numbers {a1,a2,…,an,a1+a2,a2+a3,…,an−1+an}\\{a_1, a_2, \\ldots, a_n, a_1 + a_2, a_2 + a_3, \\ldots, a_{n - 1} + a_n\\}, there should not be two equal numbers.",
      "inputSpecification": "Each test contains multiple test cases. The first line contains the number of test cases tt (1≤t≤1001 \\le t \\le 100). The description of the test cases follows. The only line of each test case contains one integer nn (1≤n≤5001 \\le n \\le 500).",
      "outputSpecification": "For each test case, output an array of length nn that satisfies the condition of the problem. It can be shown that such an array always exists under the given constraints.",
      "inputTestCase": "3\n1\n3\n6",
      "outputTestCase": "1 6 2 38 1 11 2 3 4",
      "note": "NoteIn the second example, all elements and adjacent sums form the set 6,2,3,8,5\\textbf{6}, \\textbf{2}, \\textbf{3}, 8, 5, all of whose elements are distinct.In the third example, all elements and adjacent sums form the set 8,1,11,2,3,4,9,12,13,5,7\\textbf{8}, \\textbf{1}, \\textbf{11}, \\textbf{2}, \\textbf{3}, \\textbf{4}, 9, 12, 13, 5, 7, whose elements are also distinct."
    },
    {
      "url": "https://codeforces.com/problemset/problem/2230/A",
      "title": "A. Optimal Purchase",
      "timeLimit": "2 seconds",
      "memoryLimit": "512 megabytes",
      "problemStatement": "You have a group of $$$n$$$ students who need access to an online course. Two types of access keys are available in the store:  Individual key: costs $$$a$$$ dollars and gives access to one student.  Group key: costs $$$b$$$ dollars and gives access to a group of up to three students inclusive. A group key can also be used for fewer students (one or two), and its price does not change.Your task is to determine the minimum amount of money needed to provide access to the online course for all $$$n$$$ students.",
      "inputSpecification": "The first line contains one integer $$$t$$$ ($$$1 \\le t \\le 10^4$$$) — the number of test cases. Each test case consists of one line containing three integers $$$n, a, b$$$ ($$$1 \\le n, a, b \\le 10^8$$$) — the number of students, the cost of an individual key, and the cost of a group key.",
      "outputSpecification": "For each test case, output one integer — the minimum amount of money needed to provide access to the online course for all $$$n$$$ students.",
      "inputTestCase": "9\n5 10 25\n4 10 50\n1 20 15\n1 10 25\n100000000 100 290\n2 10 15\n300 1 1\n4 10 12\n11 10 20",
      "outputTestCase": "454015109666666670151002280",
      "note": "NoteIn the first example, you can buy $$$1$$$ group key and $$$2$$$ individual keys.In the second example, you can buy $$$4$$$ individual keys.In the third example, you can buy $$$1$$$ group key.In the fourth example, you can buy $$$1$$$ individual key."
    },
    {
      "url": "https://codeforces.com/problemset/problem/2030/C",
      "title": "C. A TRUE Battle",
      "timeLimit": "2 seconds",
      "memoryLimit": "256 megabytes",
      "problemStatement": "Alice and Bob are playing a game. There is a list of 𝑛nn booleans, each of which is either true or false, given as a binary string ∗∗^{\\text{∗}} of length 𝑛nn (where 𝟷1\\texttt{1} represents true, and 𝟶0\\texttt{0} represents false). Initially, there are no operators between the booleans.Alice and Bob will take alternate turns placing and or or between the booleans, with Alice going first. Thus, the game will consist of 𝑛−1n−1n-1 turns since there are 𝑛nn booleans. Alice aims for the final statement to evaluate to true, while Bob aims for it to evaluate to false. Given the list of boolean values, determine whether Alice will win if both players play optimally.To evaluate the final expression, repeatedly perform the following steps until the statement consists of a single true or false:   If the statement contains an and operator, choose any one and replace the subexpression surrounding it with its evaluation.  Otherwise, the statement contains an or operator. Choose any one and replace the subexpression surrounding the or with its evaluation.  For example, the expression true or false and false is evaluated as true or (false and false) === true or false === true. It can be shown that the result of any compound statement is unique.∗∗^{\\text{∗}}A binary string is a string that only consists of characters 𝟶0\\texttt{0} and 𝟷1\\texttt{1}",
      "inputSpecification": "The first line contains 𝑡tt (1≤𝑡≤1041≤t≤1041 \\leq t \\leq 10^4) — the number of test cases. The first line of each test case contains an integer 𝑛nn (2≤𝑛≤2⋅1052≤n≤2⋅1052 \\leq n \\leq 2 \\cdot 10^5) — the length of the string. The second line contains a binary string of length 𝑛nn, consisting of characters 𝟶0\\texttt{0} and 𝟷1\\texttt{1} — the list of boolean values. It is guaranteed that the sum of 𝑛nn over all test cases does not exceed 2⋅1052⋅1052 \\cdot 10^5.",
      "outputSpecification": "For each testcase, output \"YES\" (without quotes) if Alice wins, and \"NO\" (without quotes) otherwise. You can output \"YES\" and \"NO\" in any case (for example, strings \"yES\", \"yes\" and \"Yes\" will be recognized as a positive response).",
      "inputTestCase": "5\n2\n11\n3\n010\n12\n101111111100\n10\n0111111011\n8\n01000010",
      "outputTestCase": "YES\nNO\nYES\nYES\nNO",
      "note": "NoteIn the first testcase, Alice can place and between the two booleans. The game ends as there are no other places to place operators, and Alice wins because true and true is true.In the second testcase, Alice can place or between the middle true and the left false. Bob can place and between the middle true and the right false. The statement false or true and false is false.Note that these examples may not be the best strategies for either Alice or Bob."
    }
  ]
}
```
