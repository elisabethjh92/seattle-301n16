##Flexbox Layout##

The Flexbox Layout module provides a more efficient way to style items in a container even when their size is unknown or dynamic. The flex layout gives containers the ability to alter the height, width, and order and to best fill the available space of the items within it. It also expands items to fill available free space or shrinks them to prevent overflow. It can handle layouts in any direction, whether horizontal or vertical. That being said, they work well for pages but don’t have the flexibility to support large or complex applications.

##Basics and Terminology##

Display - defines a flex container, inline or block depending on given value, enables a flex context for all its given children.

Order - Flex items are laid out in the source order by default, order property controls the order in which they appear in the flex container.

Flex-direction - Establishes main-axis which defines the direction flex items are placed in the flex container.

Flex-grow - defines the ability for a flex item to grow if necessary, accepts a unites value that serves as a proportion, dictates what amount of the available space inside the flex container the item should take up.

Flex-shrink - Defines the ability for a flex item to shrink if necessary, negative numbers are invalid.
