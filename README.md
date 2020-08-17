# sorting-algorithms 📦

A collection of popular sorting algorithms implemented in declarative TypeScript 🚀.

## Quick Start

No production dependences are required, though if you want to clone and develop, you aught to `npm install` to stay in concordance with the project's styling and linting practices.

## Why?

Why not? Sorting algorithms are, of course, implemented ad-nauseam, but it never hurts ya' to give them a go yourself 😉.

That notwithstanding, most implementations of the below algorithms tend to be super-obfuscated by dated and terse syntax. That's not how I prefer to read code, and that's not how I prefer to write code: it's my goal to implement most of the 'useful' or 'interesting' (subjective view here) sorting algorithms in a modern, semi-declarative style.

### A Note on Efficiency

Most algorithm text's implementations will be skewed toward simplicity and readability and almost totally lose sight of efficiency and performance. The latter, which is then left as a, say it with me:

    "an exercise to the reader" 🎉

cue groaning noises 🙄. While the implementations here won't be 100% production ready, they will be skewed _more_ towards the performance side of things; implementations that are _more_ practical than _readable_ (though we'll strive for both).

On the other hand, don't expect any code golfing: _sometimes_, for the sake of readability, we'll explicitly write out a step or two that could've been compacted into one: more often than not, this won't sacrifice performance, just imaginary whitespace points 💲.

## The List

We'll aim to implement many of the popular and standard sorting algorithms, along with some common variations and optimizations thereof (such as merge sort's natural run implementation).

Here's a list of algorithms either implemented, or to be implemented in no particular order (though this should be grouped in some fashion; todo!):

-   [x] `quicksort`
    -   [x] Hoare partitioning scheme
    -   [x] Lomuto partitioning scheme
-   [x] `insertion sort`
-   [x] `merge sort`
    -   [x] Standard
    -   [ ] Natural run variation
-   [ ] `bubble sort`
-   [ ] `timsort`
-   [ ] `radix sort`
-   [ ] `heapsort`
-   [ ] `tree sort`
-   [ ] `introsort`

## A Brief Explanation of Each Algorithm

Below will be a general overview of each algorithm: how they work from both a high and low level perspective. We'll also list the **average**, **best**, and **worst** case runtime complexities, as well as memory complexity and stability.

### `quicksort`

...

-   average: `O(n*log(n))`
-   **best**: `O(n*log(n))`
-   worst: `O(n^2)`
-   memory: `log(n)`
-   stability: `false`

### `insertion sort`

...

-   average: `O(n^2`)
-   **best**: `O(n)`
-   worst: `O(n^2)`
-   memory: `1`
-   stability: `false`
    ...
