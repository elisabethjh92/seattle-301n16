##Call Stack##

A call pass is a mechanism for an interpreter to keep track of its place in a script that calls multiple functions such as what function is currently being run and what functions are being called from within that function.

When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.

Any functions that are called by that function are added to the stack further up and are run when their calls are reached. 

When the current function is finished, the interpreter takes it off stack and resumes execution where it left off in the last code listing.

If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.
