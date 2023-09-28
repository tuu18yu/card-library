/* JS Library usage examples */
"use strict";


const set1 = new CardSet({
	width: 80,
    height: 80,
	roundedEdge: true,
	front: 'transparent',
	back: 'red',
    setName: 'drag',
    parent: '#basic-example'
})

set1.makeCards(9)

const input = []
for (let i = 0; i < 9; i++){
    input.push(i)
}

for (const card of input) {
    set1.setCardText([card], 'back', card, 'white', 'Arial', '50px')
}

set1.setCardImage([0], "front", "winter1.png")
set1.setCardImage([1], "front", "winter2.png")
set1.setCardImage([2], "front", "winter3.png")
set1.setCardImage([3], "front", "winter4.png")
set1.setCardImage([4], "front", "winter5.png")
set1.setCardImage([5], "front", "winter6.png")
set1.setCardImage([6], "front", "winter7.png")
set1.setCardImage([7], "front", "winter8.png")
set1.setCardImage([8], "front", "winter9.png")
set1.setCardColour([1, 3, 5, 7], "back", "green")

set1.setDropPosition(600, 380, true)
set1.setCardPosition('all', 600, 380, 0)
set1.setDragAndDrop('all')
set1.setFlipCards('all')

set1.setDropPosition(680, 380, true)
set1.setDropPosition(520, 380, true)
set1.setDropPosition(600, 460, true)
set1.setDropPosition(680, 460, true)
set1.setDropPosition(520, 460, true)
set1.setDropPosition(600, 300, true)
set1.setDropPosition(680, 300, true)
set1.setDropPosition(520, 300, true)

const set2 = new CardSet({
	width: 100,
    height: 100,
	roundedEdge: false,
	front: 'LavenderBlush',
	back: 'LavenderBlush',
    setName: 'animation',
    parent: '#animation-example'
})

set2.makeCards(1)
set2.setCardPosition([0], 50, 800, null)


// set2.moveCards([0], 200, 750, 5, false, null)
// set2.setRotateCards([0], -20, 1)


set2.setCardImage([0], "front", "rabbit.png")
set2.setCardImage([0], "back", "rabbit-flip.png")
set2.setFlipCards([0])
set2.setRemoveFlipCards([0])

let current = 0

$('#hop').click(function(e) {
    e.preventDefault();
    
    if (current == 0) {
        set2.setRotateCards([0], 60, 5)
        set2.moveCards([0], 150, 950, 5, false, null)
        current++
    }
    else if (current == 1) {
        set2.setRotateCards([0], -30, 5)
        set2.moveCards([0], 350, 750, 5, false, null)
        current++
    }
    else if (current == 2) {
        set2.setRotateCards([0], 60, 5)
        set2.moveCards([0], 550, 950, 5, false, null)
        current++
    }
    else if (current == 3) {
        set2.setRotateCards([0], -30, 5)
        set2.moveCards([0], 750, 750, 5, false, null)
        current++
    }
    else if (current == 4) {
        set2.setRotateCards([0], 60, 5)
        set2.moveCards([0], 950, 950, 5, false, null)
        current++
    }
    else if (current == 5) {
        set2.setRotateCards([0], -30, 5)
        set2.moveCards([0], 1100, 800, 5, false, null)
        current++
    }
    else if (current == 6) {
        set2.flipCards([0])
        current++
    }
    else if (current == 7) {
        set2.setRotateCards([0], -60, 5)
        set2.moveCards([0], 950, 950, 5, false, null)
        current++
    }
    else if (current == 8) {
        set2.setRotateCards([0], 30, 5)
        set2.moveCards([0], 750, 750, 5, false, null)
        current++
    }
    else if (current == 9) {
        set2.setRotateCards([0], -60, 5)
        set2.moveCards([0], 550, 950, 5, false, null)
        current++
    }
    else if (current == 10) {
        set2.setRotateCards([0], 30, 5)
        set2.moveCards([0], 350, 750, 5, false, null)
        current++
    }
    else if (current == 11) {
        set2.setRotateCards([0], -60, 5)
        set2.moveCards([0], 150, 950, 5, false, null)
        current++
    }
    else if (current == 12) {
        set2.setRotateCards([0], 30, 5)
        set2.moveCards([0], 50, 800, 5, false, null)
        current++
    }
    else{
        set2.flipCards([0])
        current = 0
    }

})


// $('#makeCardsForm').submit(function(e) {
//     e.preventDefault();
//     const newCards = parseInt($('#nCards').val())
//     const existing = set1.numberOfCards
//     const input = []
//     set1.makeCards(newCards)

//     for (let i = 0; i < newCards; i++){
//         input.push(existing + i)
//     }

//     for (const card of input) {
//         set1.setCardText([card], 'back', card, 'black', 'Arial', '50px')
//     }

//     set1.setCardPosition(input, 600, 250)
//     set1.setDragAndDrop(input)
//     set1.setFlipCards(input)

// })

// $('#moveCardsRightForm').submit(function(e) {
//     e.preventDefault();
//     const cardID = parseInt($('#moveRightID').val())
//     set1.moveCards([cardID], 400, 250, 2)
// })

// $('#moveCardsLeftForm').submit(function(e) {
//     e.preventDefault();
//     const cardID = parseInt($('#moveLeftID').val())
//     set1.moveCards([cardID], 800, 250, 2)
// })

// $('#rotateCardsForm').submit(function(e) {
//     e.preventDefault();
//     const cardID = parseInt($('#rotateID').val())
//     const cardDeg = parseInt($('#rotateDegree').val())
//     set1.setRotateCards([cardID], cardDeg, 1)
// })

$('#swapCardsForm').submit(function(e) {
    e.preventDefault();
    const cardID1 = parseInt($('#swapID1').val())
    const cardID2 = parseInt($('#swapID2').val())
    set1.swapCards(cardID1, cardID2, 5)
})

