##Functional Programming##

Functional programming is a style of building the structure and elements of computer programs that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.

##Pure Functions##

Functions are pure if they return the same result if given the same arguments. They are also pure if they do not cause any observable side effects. 

If a function reads external files, it is not a pure function. 

Any function that relies on a random number generator cannot be pure. 

##Benefits of Pure Functions##

The code is easier to test and nothing needs to be mocked, so you can unit test pure functions with different contexts.

##Immutability##

When data is immutable, its state cannot change after it’s created. If you want to change an immutable object, you can’t. Instead, you create a new object with the new value.
