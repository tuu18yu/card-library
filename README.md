
## Api Methods

<h3>Getting Started</h3>

To start card.js library, you must begin with creating CardSet object.

Width and height must be an integer value (unit is pixel), valid string for declaring colour of the front and back of the card, some string value for the name of the card, and string of class, id, .. of the parent object where card would be declared in.
           
<pre> const set = new CardSet({ 
        width: 500,
        height: 800,
        roundedEdge: true
        front: 'true',
        back: 'transparent',
        setName: 'foo',
        parent: '.bar'
    })
</pre>
Make cards by inputting the number of cards desired
<pre>set.makeCards(10)</pre>

Set position of cards by giving in the list of cardIDs which all integers, to apply to all cards simply input string 'all' instead of list.
Second parameter is x location of card, and third is y location of the card. The last parameter is an integer value of drop position ID if card is set
to be positioned at a drop position, otherwise null.

<pre>set.setCardPosition([0, 2, 3], 50, 800, null)</pre>

<h3>Setting Draggable and Droppable Cards</h3>

<p>To make card draggable and droppable,setDragAndDrop must be called where the parameter is a list of card IDs or string 'all'. This will allow cards to be draggable</p>
<pre>set.setDragAndDrop([0, 2, 3])</pre>

<p>Then we need to set drop positions to drop dragged cards. First and second parameters are x and y position for the drop position and last value takes in boolen when true, it shows line to indicate drop position</p>
<pre>set.setDropPosition(30, 50, true)</pre>

<h3>Setting Flippable Cards</h3>
<p>To make card flippable, setFlipCards must be called where the parameter is a list of card IDs or string 'all'. This will allow cards to be flipped on click</p>
<pre>set.setFlipCards('all')</pre>

<p>Similarly, to turn off the ability to flip card on click setRemoveFlipCards can be called.</p>
<pre>set.setRemoveFlipCards([0, 2, 5])</pre>

<p>Cards can also be flippled by calling flipCards</p>
<pre>set.flipCards([0])</pre>

<h3>Rotating, Moving and Swapping Cards</h3>
<p>First parameter takes in list or card IDs or string 'all', second parameter is the degree the user desire to rotate, and last parameter is number of degree moving in each frame. The lower the number is slower 
the animation, and degree must be divisible by this value.</p>
<pre>set.setRotateCards('all', 60, 5)</pre>

<p>moveCards is similar to setRotateCards, but insetead of degrees second and third parameter takes in x and y position of desired location. And fourth
parameter sets the speed but second and third values must be divisble by this value. The fifth boolean value is set to be true, is desired location is a drop position, otherwise false, and last 
parameter is the drop position id it's applicable otherwise null.
</p>
<pre>set.moveCards('all', 300, 400, 10, true, 1)</pre>

<p>swapCards takes in the two card IDs for first two parameter, and last parameter takes in speed. Similarly the position of two cards must be divisible by this value.
</p>
<pre>set.swapCards(0, 2, 10)</pre>

<h3>Customizing Cards</h3>
<p>Colour of card can be changed by calling setCardColour. First parameter takes in list of card IDs or 'all', second parameter takes in side of card ('front' or 'back'), and last parameter is the colour of the card</p>
<pre>set.setCardColour('all', 'front', 'blue')</pre>

<p> Text can be written to card as well. Last parameter is the text size</p>
<pre>set.setCardText('all', 'front', 'text', 'textColor', 'textFont', 10)</pre>

<p>Image can also be set to card where last parameter takes in strin url of the image.</p>
<pre>set.setCardImage('all', front, '/image.jpg')</pre>
