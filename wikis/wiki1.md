##Responsive Web Design##

Responsive Web Design is the practice of building websites that work and read well on all screens regardless of size or device type.It's purpose is to make a better viewing experience for everyone.

##Responsive vs. Adaptive vs. Mobile##

Responsive and Adaptive design are often confused and interchanged for each other as they have several similarities. Responsive means that it reacts quickly and positively to changes and Adaptive means that it can easily be modified to a new purpose or situation.

Responsive websites tend to continually change based on different factors while adaptive websites are built to a group of preset factors.

The current most popular technique is responsive web design, which utilizes responsiveness and adaptivity.

##Flexible Layouts##

Responsive web design has 3 parts: flexible layouts, media queries, and flexible media.

Flexible layouts is the practice of building websites with a flexible grid layout that is capable of dynamically resizing. Flexible grids are typically built with relative measurements such as percentages or em units. Flexible layouts do not advocate for the use of fixed units of measurement such as inches or pixels due to the variety of screen/viewer sizes.

Ethan Marcotte, the person who coined the term "responsive web design", pointed out an easy formula to help with this:

target ÷ context = result

Using the flexible grid formula, we can take all fixed measurements and turn them into relative measurements. Regardless of the size of the screen, the relative measurements will scale proportionally. That being said, it's not always enough and sometimes scaling proportionally can make things illegible or will cause the layout to break, which is where media queries come in.

##Media Queries##

Media Queries were initially built as an extension to media types found when targeting and including styles. They provide the ability to specify different styles for specific browsers and device circumstances, such as the width of the viewport or the device orientation.

There are a few ways to use media queries, namely the @media rule instead of an existing file sheet, importing a new style sheet with the @import rule, or linking to a separate style sheet from within the HTML document. Best practice is to use the @media rule inside an existing stylesheet to avoid unnecessary HTTP requests.

Each media query may include a media type followed by one or more expressions such as all, screen, print, tv, or braille. If a media type is not specified, it will default to "screen". The media query expression that follows a type may include different features or values which can be allocated to true or false. If they are allocated to true, the styles will apply. If they are allocated to false, the styles are ignored.

##Logical Operators##

Logical Operators in media queries can build powerful expressions. There are 3 different logical operators, including and, not, and only.

Using the "and" logical operator allows an extra condition to be added. Multiple individual media queries can be separated by commas, acting as an unspoken "or" operator.

Using the "not" logical operator negates the query, specifying any query but the one identified.

The "only" logical operator is new and not recognized by user agents using the HTML4 algorithm, which hides styles from devices and browsers that don't support media queries.

##Flexible Media##

As viewports change size, media such as images or videos don't always follow suit. Those media types need to be flexible and scalable. A quick way to do this is by using the "max width" property of 100%, which ensures that any viewport will scale down any media to the width of its container.

That doesn't work with all media, however, particularly if the media is embedded. To make embedded media fully responsive, the embedded element needs to be positioned absolutely within a parent element. The parent element needs to have a max width of 100% so that it can scale based on the width of the viewport. The parent also needs to have a height of "0" to trigger the hasLayout mechanism within internet explorer.

Padding is then added to the bottom of the parent element with a value that is set to the same aspect ratio of the video, which allows the height of the parent to be proportional of its width.
