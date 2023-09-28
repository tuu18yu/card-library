"use strict";

const set1 = new CardSet({
	width: 800,
    height: 500,
	roundedEdge: true,
	front: 'PowderBlue',
	back: 'PowderBlue',
    setName: 'homepage-title',
    parent: '.title-container'
})


set1.makeCards(1)
set1.setCardPosition([0], 0, 0, null)
set1.setCardImage([0], "front", "cardjs.png")
set1.setFlipCards([0])

const set2 = new CardSet({
	width: 200,
    height: 200,
	roundedEdge: true,
	front: 'transparent',
	back: 'transparent',
    setName: 'homepage',
    parent: '#card-back-homepage-title-0'
})

set2.makeCards(2)
set2.setCardPosition([0], 100, 120, null)
set2.setCardImage([0], "back", "example_link.png")
set2.setCardColour([0], "back", "DarkOrange")

set2.setCardPosition([1], 500, 120, null)
set2.setCardImage([1], "back", "api_link.png")
set2.setCardColour([1], "back", "DarkOrange")



$("#card-homepage-0").on('click', function() {
    location.href = 'examples.html'    
})

$("#card-homepage-0").hover(function(){
    set2.setRotateCards([0], 360, 10)
})

$("#card-homepage-1").on('click', function() {
    location.href = 'api.html'    
})

$("#card-homepage-1").hover(function(){
    set2.setRotateCards([1], -360, 10)
})




