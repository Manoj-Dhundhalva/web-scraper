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
      "contestId": 2220,
      "problemIndex": "D1"
    },
    {
      "contestId": 2169,
      "problemIndex": "C"
    }
  ]
}
```

## Response

```json
{
  "problems": [
    {
      "url": "https://codeforces.com/problemset/problem/2231/A",
      "title": "A. Construct an Array",
      "timeLimit": "1 second",
      "memoryLimit": "256 megabytes",
      "problemStatement": "You are given an integer $$$n$$$. You need to construct an array of integers $$$a_1, a_2, \\ldots, a_n$$$ such that the following conditions are satisfied: $$$1 \\leq a_i \\leq 2 \\cdot n$$$ for all $$$i$$$ from $$$1$$$ to $$$n$$$.  All elements of the array and the sums of adjacent elements are pairwise distinct. In other words, among the numbers $$$\\{a_1, a_2, \\ldots, a_n, a_1 + a_2, a_2 + a_3, \\ldots, a_{n - 1} + a_n\\}$$$, there should not be two equal numbers.",
      "specification": {
        "input": "Each test contains multiple test cases. The first line contains the number of test cases $$$t$$$ ($$$1 \\le t \\le 100$$$). The description of the test cases follows. The only line of each test case contains one integer $$$n$$$ ($$$1 \\le n \\le 500$$$).",
        "output": "For each test case, output an array of length $$$n$$$ that satisfies the condition of the problem. It can be shown that such an array always exists under the given constraints."
      },
      "testCase": {
        "input": "3\n1\n3\n6",
        "output": "1\n6 2 3\n8 1 11 2 3 4"
      },
      "note": "NoteIn the second example, all elements and adjacent sums form the set $$$\\textbf{6}, \\textbf{2}, \\textbf{3}, 8, 5$$$, all of whose elements are distinct.In the third example, all elements and adjacent sums form the set $$$\\textbf{8}, \\textbf{1}, \\textbf{11}, \\textbf{2}, \\textbf{3}, \\textbf{4}, 9, 12, 13, 5, 7$$$, whose elements are also distinct."
    },
    {
      "url": "https://codeforces.com/problemset/problem/2220/D1",
      "title": "D1. Unique Values (Easy version)",
      "timeLimit": "2 seconds",
      "memoryLimit": "256 megabytes",
      "problemStatement": "The difference between the easy version and hard version is the maximum number of queries allowed. In this version, it is 66.There is a secret array $$$a$$$ of length $$$2n+1$$$, whose elements are integers from $$$1$$$ to $$$n$$$. Each value appears exactly twice, except for one value, which appears exactly three times.Your goal is to find the three positions of the value that appears three times.To do this, you may ask the following query at most 66 times:   Choose an integer $$$k$$$ and an array $$$s$$$ of $$$k$$$ distinct indices between $$$1$$$ and $$$2n+1$$$.  You will receive the number of different values among $$$a_{s_1}, a_{s_2}, \\ldots, a_{s_k}$$$ that appear exactly once, or, in other words, the count of values that are not repeated. For example, if the values $$$a_{s_1}, \\ldots, a_{s_k}$$$ are $$$\\{2, 1, 2, 3, 2, 3, 6, 7\\}$$$, the answer to the query will be 3, as 1, 6, 7 are the only values that appear exactly once. 3 appears 2 times and 2 appears 3 times, which is more than once, so they are not counted.",
      "specification": {
        "input": "Each test contains multiple test cases. The first line contains the number of test cases $$$t$$$ ($$$1 \\le t \\le 500$$$). The description of the test cases follows. The first line of each test case contains a single integer $$$n$$$ ($$$2 \\le n \\le 1000$$$). The array $$$a$$$ is fixed for the test case and does not change during the interaction. In other words, the interactor is not adaptive. It is guaranteed that the sum of $$$n$$$ over all test cases does not exceed $$$2 \\cdot 10^4$$$.",
        "output": ""
      },
      "testCase": {
        "input": "1\n2\n\n0\n\n2\n\n2\n\n0\n\n1",
        "output": "? 2 1 2\n\n? 2 1 4\n\n? 2 1 5\n\n? 5 1 2 3 4 5\n\n? 4 1 2 3 4\n\n! 1 2 3"
      },
      "note": "NoteThe secret array is $$$a = [1, 1, 1, 2, 2]$$$.In the first query, we ask for the number of values that appear exactly once in $$$[a_1, a_2] = [1, 1]$$$, since value 1 is repeated, the answer is 0.In the second query, we ask for the number of values that appear exactly once in $$$[a_1, a_4] = [1, 2]$$$, since values 1 and 2 appear exactly once, the answer is 2.In the fourth query, we ask for the number of values that appear exactly once in $$$[a_1, a_2, a_3, a_4, a_5] = [1, 1, 1, 2, 2]$$$, since values 1 and 2 are repeated, the answer is 0.At the end, we print that the indices of the value repeated three times are 1, 2 and 3."
    },
    {
      "url": "https://codeforces.com/problemset/problem/2169/C",
      "title": "C. Range Operation",
      "timeLimit": "2 seconds",
      "memoryLimit": "512 megabytes",
      "problemStatement": "You are given an integer array $$$a$$$ of length $$$n$$$. You can perform the following operation: choose a range $$$[l, r]$$$ ($$$1 \\le l \\le r \\le n$$$) and replace the value of elements $$$a_l, a_{l+1}, \\dots, a_r$$$ with $$$(l + r)$$$.Your task is to calculate the maximum possible total array sum if you can perform the aforementioned operation at most once.",
      "specification": {
        "input": "The first line contains a single integer $$$t$$$ ($$$1 \\le t \\le 10^4$$$) — the number of test cases. The first line of each test case contains a single integer $$$n$$$ ($$$1 \\le n \\le 2 \\cdot 10^5$$$). The second line contains $$$n$$$ integers $$$a_1, a_2, \\dots, a_n$$$ ($$$0 \\le a_i \\le 2n$$$). Additional constraint on the input: the sum of $$$n$$$ over all test cases doesn't exceed $$$2 \\cdot 10^5$$$.",
        "output": "For each test case, print a single integer — the maximum possible total array sum if you can perform the aforementioned operation at most once."
      },
      "testCase": {
        "input": "4\n3\n2 5 1\n2\n4 4\n4\n1 3 2 1\n5\n3 2 0 9 10",
        "output": "13\n8\n20\n32"
      },
      "note": "NoteIn the first example, you can perform the operation on the subarray $$$[3, 3]$$$, resulting in the array $$$[2, 5, 6]$$$ and the sum $$$13$$$.In the second example, you don't need to perform any operation.In the third example, you can perform the operation on the subarray $$$[1, 4]$$$, resulting in the array $$$[5, 5, 5, 5]$$$ and the sum $$$20$$$.In the fourth example, you can perform the operation on the subarray $$$[2, 3]$$$, resulting in the array $$$[3, 5, 5, 9, 10]$$$ and the sum $$$32$$$."
    }
  ]
}
```
