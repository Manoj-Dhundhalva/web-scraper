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

## Response

```json
{
  "problems": [
    {
      "url": "https://codeforces.com/problemset/problem/2231/A",
      "title": "A. Construct an Array",
      "timeLimit": "1 second",
      "memoryLimit": "256 megabytes",
      "problemStatement": "You are given an integer nn. You need to construct an array of integers a1,a2,…,ana_1, a_2, \\ldots, a_n such that the following conditions are satisfied: 1≤ai≤2⋅n1 \\leq a_i \\leq 2 \\cdot n for all ii from 11 to nn.  All elements of the array and the sums of adjacent elements are pairwise distinct. In other words, among the numbers {a1,a2,…,an,a1+a2,a2+a3,…,an−1+an}\\{a_1, a_2, \\ldots, a_n, a_1 + a_2, a_2 + a_3, \\ldots, a_{n - 1} + a_n\\}, there should not be two equal numbers.",
      "specification": {
        "input": "Each test contains multiple test cases. The first line contains the number of test cases tt (1≤t≤1001 \\le t \\le 100). The description of the test cases follows. The only line of each test case contains one integer nn (1≤n≤5001 \\le n \\le 500).",
        "output": "For each test case, output an array of length nn that satisfies the condition of the problem. It can be shown that such an array always exists under the given constraints."
      },
      "testCase": {
        "input": "3\n1\n3\n6",
        "output": "1\n6 2 3\n8 1 11 2 3 4"
      },
      "note": "NoteIn the second example, all elements and adjacent sums form the set 6,2,3,8,5\\textbf{6}, \\textbf{2}, \\textbf{3}, 8, 5, all of whose elements are distinct.In the third example, all elements and adjacent sums form the set 8,1,11,2,3,4,9,12,13,5,7\\textbf{8}, \\textbf{1}, \\textbf{11}, \\textbf{2}, \\textbf{3}, \\textbf{4}, 9, 12, 13, 5, 7, whose elements are also distinct."
    },
    {
      "url": "https://codeforces.com/problemset/problem/2230/A",
      "title": "A. Optimal Purchase",
      "timeLimit": "2 seconds",
      "memoryLimit": "512 megabytes",
      "problemStatement": "You have a group of nn students who need access to an online course. Two types of access keys are available in the store:  Individual key: costs aa dollars and gives access to one student.  Group key: costs bb dollars and gives access to a group of up to three students inclusive. A group key can also be used for fewer students (one or two), and its price does not change.Your task is to determine the minimum amount of money needed to provide access to the online course for all nn students.",
      "specification": {
        "input": "The first line contains one integer tt (1≤t≤1041 \\le t \\le 10^4) — the number of test cases. Each test case consists of one line containing three integers n,a,bn, a, b (1≤n,a,b≤1081 \\le n, a, b \\le 10^8) — the number of students, the cost of an individual key, and the cost of a group key.",
        "output": "For each test case, output one integer — the minimum amount of money needed to provide access to the online course for all nn students."
      },
      "testCase": {
        "input": "9\n5 10 25\n4 10 50\n1 20 15\n1 10 25\n100000000 100 290\n2 10 15\n300 1 1\n4 10 12\n11 10 20",
        "output": "45\n40\n15\n10\n9666666670\n15\n100\n22\n80"
      },
      "note": "NoteIn the first example, you can buy 11 group key and 22 individual keys.In the second example, you can buy 44 individual keys.In the third example, you can buy 11 group key.In the fourth example, you can buy 11 individual key."
    },
    {
      "url": "https://codeforces.com/problemset/problem/1830/C",
      "title": "C. Hyperregular Bracket Strings",
      "timeLimit": "3 seconds",
      "memoryLimit": "256 megabytes",
      "problemStatement": "You are given an integer nn and kk intervals. The ii-th interval is [li,ri][l_i,r_i] where 1≤li≤ri≤n1 \\leq l_i \\leq r_i \\leq n.Let us call a regular bracket sequence†,‡^{\\dagger,\\ddagger} of length nn hyperregular if for each ii such that 1≤i≤k1 \\leq i \\leq k, the substring ¯slisli+1…sri\\overline{s_{l_i} s_{l_{i}+1} \\ldots s_{r_i}} is also a regular bracket sequence.Your task is to count the number of hyperregular bracket sequences. Since this number can be really large, you are only required to find it modulo 998244353998\\,244\\,353.†^\\dagger A bracket sequence is a string containing only the characters \"(\" and \")\".‡^\\ddagger A bracket sequence is called regular if one can turn it into a valid math expression by adding characters + and 1. For example, sequences (())(), (), (()(())) and the empty string are regular, while )(, ((), and (()))( are not.",
      "specification": {
        "input": "Each test contains multiple test cases. The first line of input contains a single integer tt (1≤t≤1051 \\le t \\le 10^5) — the number of test cases. The description of test cases follows. The first line of each test case contains two integers nn and kk (1≤n≤3⋅1051 \\le n \\le 3 \\cdot 10^5, 0≤k≤3⋅1050 \\le k \\le 3 \\cdot 10^5) — the length of the hyperregular bracket sequences and the number of intervals respectively. The following kk lines of each test case contains two integers lil_i and rir_i (1≤l≤r≤n1 \\le l \\le r \\le n). It is guaranteed that the sum of nn across all test cases does not exceed 3⋅1053 \\cdot 10^5 and the sum of kk across all test cases does not exceed 3⋅1053 \\cdot 10^5.",
        "output": "For each test case, output the number of hyperregular bracket sequences modulo 998244353998\\,244\\,353."
      },
      "testCase": {
        "input": "7\n6 0\n5 0\n8 1\n1 3\n10 2\n3 4\n6 9\n1000 3\n100 701\n200 801\n300 901\n28 5\n1 12\n3 20\n11 14\n4 9\n18 19\n4 3\n1 4\n1 4\n1 4",
        "output": "5\n0\n0\n4\n839415253\n140\n2"
      },
      "note": "Note  For the first testcase, the 55 hyperregular bracket strings of length 66 are: ((())), (()()), (())(), ()(()) and ()()(). For the second testcase, there are no regular bracket strings of length 55, and consequently, there are no hyperregular bracket strings of length 55. For the third testcase, there are no hyperregular bracket strings of length 88 for which the substring [1…3][1 \\ldots 3] is a regular bracket string. For the fourth testcase, there 44 hyperregular bracket strings are: ((())(())), ((())()()), ()()((())) and ()()(()())"
    }
  ]
}
```
