##EJS Partials##

Partials are like functions and make large websites easier to maintain because you don't have to go and change a piece of text in every page it appears on. Instead, you define that reusable bundle of code in a file and include it wherever you need it.

Including a partial in EJS is quite easy and straightforward. You use <%- include( PARTIAL_FILE ) %> where the partial file is relative to the template you use it in.

The <%- %> tags allow us to output the unescaped content onto the page. This is important hen using the include() statement since you don’t want EJS to escape your HTML characters like ‘<’, ‘>’, etc.

