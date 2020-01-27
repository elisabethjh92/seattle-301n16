##CSS Grid##

CSS Grid is a 2D system that handles columns and rows that helps change the way we design grid interfaces. To get started, you have to define a container element as a grid with display: grid, set the column and row sizes with grid-template-columns and grid-template-rows, then place its child elements into the grid with grid-column and grid-row. The source order of the grid items does not matter. 

grid-container -> The element on which display: grid is applied. It is the direct parent of all grid items. 

grid-item -> The children of the grid container.

grid-line -> The dividing lines that make up the structure of the grid. They can be vertical or horizontal and and reside on either side of a row or column.

grid-track -> The space between two adjacent grid lines. 

grid-cell -> The space between two adjacent row and two adjacent column grid lines. 

grid-area -> The total space surrounded by four grid lines. It may be comprised of any number of grid cells. 
