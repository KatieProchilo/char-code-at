## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
   * [CLI Tool](#CLI-Tool)
   * [Package](#Package)

# char-code-at

A simple npm package to get the ASCII character codes of any string.

## Installation

```npm install char-code-at```

## Usage

### CLI Tool

char-code-at can be used as a CLI tool. Most simply:

```
λ char-code-at Hi

CHAR: "H"               CHAR CODE: 72
CHAR: "i"               CHAR CODE: 105
```

You can also pass in whitespace:

```
λ char-code-at "Hi, world"

CHAR: "H"               CHAR CODE: 72
CHAR: "i"               CHAR CODE: 105
CHAR: ","               CHAR CODE: 44
CHAR: " "               CHAR CODE: 32
CHAR: "w"               CHAR CODE: 119
CHAR: "o"               CHAR CODE: 111
CHAR: "r"               CHAR CODE: 114
CHAR: "l"               CHAR CODE: 108
CHAR: "d"               CHAR CODE: 100
```

The `--start` or `-s` flag indicates the first index that will be analyzed:

```
λ char-code-at Hello -s 2

CHAR: "l"               CHAR CODE: 108
CHAR: "l"               CHAR CODE: 108
CHAR: "o"               CHAR CODE: 111
```

Conversely, the `--end` or `-e` flag indicates the last index that will be analyzed:

```
λ char-code-at Hello -e 2

CHAR: "H"               CHAR CODE: 72
CHAR: "e"               CHAR CODE: 101
CHAR: "l"               CHAR CODE: 108
```

Use both flags together to narrow your results even further:

```
λ char-code-at "Hi, world" -s 4 -e 5

CHAR: "w"               CHAR CODE: 119
CHAR: "o"               CHAR CODE: 111
```

### Package

Access char-code-at functionality from your JavaScript or [TypeScript](https://github.com/KatieProchilo/StartTypeScript) code. To start, require the package:

```javascript
const charCodeAt = require('../char-code-at');
```

```javascript
charCodeAt.printCharCodes("Hi, world", 4, 5);
```