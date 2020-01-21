##SuperAgent##

SuperAgent is a lightweight ajax API made for flexibility, readability, and a low learning curve due to frustrations with many of the existing APIs. 

A request can be initiated by invoking the appropriate method on the request object, then calling .then() or .end() to send the request.

Absolute URLs can be used.

DELETE, HEAD, PATCH, PUT, and POST can also be used if you change the method name. 

You can set header fields by invoking .set() with a field name and value.

The .query() method accepts objects, which when used with the GET method will form a query string. The .query() method also accepts strings. 
