"use strict";
console.log('----------')
console.log('SCRIPT: Creating and loading our JS libraries')

const cardSets = []

function CardSet(option) {
    this.numberOfCards = 0
    this.numberOfDropPositions = 0
	this.cards = {}
    this.dropPositions = {}
    this.setName = option.setName
    this.width = option.width
    this.height = option.height
	this.roundedEdge = option.roundedEdge
	this.front = option.front
	this.back = option.back
    this.parent = option.parent
    cardSets.push(this)
}

CardSet.prototype = {
    getNumberOfCards: function() {
        return this.numberOfCards
    },

    getNumberOfDropPositions: function() {
        return this.numberOfDropPositions
    },

    makeCards: function(nCards) {
        for (let i = 0; i < nCards; i++) {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
            card.setAttribute('id', 'card-' + this.setName + '-' + this.numberOfCards)
            card.style.width = this.width + 'px'
            card.style.height = this.height + 'px'
            card.style.zIndex = this.numberOfCards + 1


            const container = document.createElement('div')
            container.setAttribute('class', 'card-container')
            card.append(container)

            const front = document.createElement('div')
            front.setAttribute('class', 'card-front')
            front.setAttribute('id', 'card-front-' + this.setName + '-' + this.numberOfCards)
            front.style.backgroundColor = this.front
            container.append(front)

            const back = document.createElement('div')
            back.setAttribute('class', 'card-back')
            back.setAttribute('id', 'card-back-' + this.setName + '-' + this.numberOfCards)
            back.style.backgroundColor = this.back
            container.append(back)

            if (this.roundedEdge) {
                front.style.borderRadius = '10%'
                back.style.borderRadius = '10%'
            }

            const parent = $(this.parent) 

            parent.append(card)
		    this.cards[this.numberOfCards] = {nID: this.numberOfCards, id: 'card-' + this.setName + '-' + this.numberOfCards, card: card, flip: null, x: null, y: null, tilt: 0, z: this.numberOfCards + 1, xdrop: null, ydrop: null}
            this.numberOfCards++
        }
    },

    setCardPosition: function(cardId, x, y, inDrop) {
        if (cardId === 'all') {
            for (let i in this.cards) {
                const card = this.cards[i].card
                if (inDrop === null) {
                    this.cards[i].x = x
                    this.cards[i].y = y
                    card.style.left = '0px'
                    card.style.top = '0px'
                }
                else {
                    this.cards[i].x = 0
                    this.cards[i].y = 0
                    this.cards[i].xdrop = this.dropPositions[inDrop].x + 2
                    this.cards[i].ydrop = this.dropPositions[inDrop].y + 2
                    card.style.left = '0px'
                    card.style.top = '0px'
                    $('#' + this.dropPositions[inDrop].id).append($('#' + this.cards[i].id))
                }
            }
        }

        else {
            for (let j = 0; j < cardId.length; j++) {
                let i = cardId[j]
                const card = this.cards[i].card
                if (inDrop === null) {
                    this.cards[i].x = x
                    this.cards[i].y = y
                    card.style.left = x + 'px'
                    card.style.top = y + 'px'
                }
                else {
                    this.cards[i].x = 0
                    this.cards[i].y = 0
                    this.cards[i].xdrop = this.dropPositions[inDrop].x + 2
                    this.cards[i].ydrop = this.dropPositions[inDrop].y + 2
                    card.style.left = '0px'
                    card.style.top = '0px'
                    $('#' + this.dropPositions[inDrop].id).append($('#' + this.cards[i].id))
                }
            }
        }
    },
    
    setFlipCards: function(cardId) {
        if (cardId === 'all') {
            for (let i in this.cards) {
                if (this.cards[i].flip === null) {
                    this.cards[i].flip = true
                    $('#' + this.cards[i].id).click(function(e) {
                        e.stopPropagation();
                        $(this).toggleClass('flip-card-Y')
                    })
                }

                else {
                    this.cards[i].flip = true
                    $('#' + this.cards[i].id).on('click', function(e) {
                        e.stopPropagation();
                        $(this).toggleClass('flip-card-Y')
                    })
                }
                // if (direction === 'X') {
                //     this.cards[i].flip = 'X'
                //     $('#' + this.cards[i].id).click(function() {
                //         console.log('flip')
                //         $(this).toggleClass('flip-card-X')
                //     })
                // }
                // else {
                //     this.cards[i].flip = 'Y'
                //     $('#' + this.cards[i].id).click(function() {
                //         console.log('flip')
                //         $(this).toggleClass('flip-card-Y')
                //     })
                // }
            }
        }

        else {
            for (let j = 0; j < cardId.length; j++) {
                let i = cardId[j]
                if (this.cards[i].flip === null) {
                    this.cards[i].flip = true
                    $('#' + this.cards[i].id).click(function(e) {
                        e.stopPropagation();
                        $(this).toggleClass('flip-card-Y')
                    })
                }

                else {
                    this.cards[i].flip = true
                    $('#' + this.cards[i].id).on('click', function(e) {
                        e.stopPropagation();
                        $(this).toggleClass('flip-card-Y')
                    })
                }
            }
        }
    },

    setRemoveFlipCards: function(cardId) {
        if (cardId === 'all') {
            for (let i in this.cards) {
                this.cards[i].flip = false
                $('#' + this.cards[i].id).off('click')
                // if (this.cards[i].flip === 'X') {
                //     this.cards[i].flip = false
                //     $('#' + this.cards[i].id).removeClass('flip-card-X')
                //     $('#' + this.cards[i].id).off('click')
                // } else {
                //     this.cards[i].flip = false
                //     $('#' + this.cards[i].id).removeClass('flip-card-Y')
                //     $('#' + this.cards[i].id).off('click')
                // }
            }
        }

        else {
            for (let j = 0; j < cardId.length; j++) {
                let i = cardId[j]
                this.cards[i].flip = false
                $('#' + this.cards[i].id).off('click')
            }
        }
    },

    flipCards: function(cardId) {
        if (cardId === 'all') {
            for (let i in this.cards) {
                $('#' + this.cards[i].id).toggleClass('flip-card-Y')
            }
        }

        else {
            for (let j = 0; j < cardId.length; j++) {
                let i = cardId[j]
                $('#' + this.cards[i].id).toggleClass('flip-card-Y')
            }
        }
    },

    setRotateCards: function(cardList, degree, speed) {
        if (cardList === 'all') {
            for (let i in this.cards) {
                const targetCard = this.cards[i]
                let pos = targetCard.tilt % 360 
                animateRotate(targetCard, pos)
            }
        }

        else {
            for (let j = 0; j < cardList.length; j++) {
                let i = cardList[j]
                const targetCard = this.cards[i]
                let pos = targetCard.tilt % 360 
                animateRotate(targetCard, pos)
            }
        }

        function animateRotate(targetCard, pos) {
            let id = null
            clearInterval(id)
            id = setInterval(frame, 10)
            function frame() {
                if (pos === degree) {
                    clearInterval(id);
                } else {
                    if (pos < degree) {
                        pos += speed
                    }
                    else if (pos > degree) {
                        pos -= speed
                    }

                    targetCard.card.style.transform = `rotate(${pos}deg)`
                    targetCard.tilt = pos
                }
            }
        }
    },

    moveCards: function(cardList, newX, newY, speed, isDropped, parent) {
        if (cardList === 'all') {
            for (let i in this.cards) {
                const targetCard = this.cards[i]
                let posX = targetCard.x
                let posY = targetCard.y
            
                animateMove(targetCard, posX, posY, isDropped, parent)

            }
        }

        else {
            for (let j = 0; j < cardList.length; j++) {
                let i = cardList[j]
                const targetCard = this.cards[i]
                let posX = targetCard.x
                let posY = targetCard.y
                animateMove(targetCard, posX, posY, isDropped, parent)
            }
        }

        function animateMove(targetCard, posX, posY, isDropped, parent) {
            let id = null
            clearInterval(id)
            id = setInterval(frame, 10)
            function frame() {
                if (posX === newX & posY===newY) {
                    clearInterval(id);
                    if (isDropped) {
                        const card = document.querySelector('#' + targetCard.id)
                        card.parentNode.removeChild(card)
                        targetCard.x = 0
                        targetCard.y = 0
                        card.style.left = '0px'
                        card.style.top = '0px'
                        parent.appendChild(card)
                    }
                } else {
                    if (posX < newX) {
                        posX += speed
                    }
                    if (posY < newY) {
                        posY += speed
                    }
                    if (posX > newX) {
                        posX -= speed
                    }
                    if (posY > newY) {
                        posY -= speed
                    }

                    targetCard.card.style.left = posX + 'px'
                    targetCard.card.style.top = posY + 'px'
                    targetCard.x = posX
                    targetCard.y = posY
                }
            }
        }
    },

    setCardImage: function(cardId, side, srcURL) {
        if (cardId === 'all') {
            for (let i in this.cards) {
                const cardSide = this.cards[i].card.querySelector(`.card-${side}`)
                const cardimg = document.createElement('img')
                cardimg.setAttribute('class', 'cardimg')
                cardimg.src = srcURL
                cardSide.appendChild(cardimg)
            }
        }

        else {
            for (let j = 0; j < cardId.length; j++) {
                let i = cardId[j]
                const cardSide = this.cards[i].card.querySelector(`.card-${side}`)
                const cardimg = document.createElement('img')
                cardimg.setAttribute('class', 'cardimg')
                cardimg.src = srcURL
                cardSide.appendChild(cardimg)
            }
        }
    },


    setCardColour: function(cardId, side, color) {
        if (cardId === 'all') {
            for (let i in this.cards) {
                const cardSide = this.cards[i].card.querySelector(`.card-${side}`)
                cardSide.style.backgroundColor = color
            }
        }

        else {
            for (let j = 0; j < cardId.length; j++) {
                let i = cardId[j]
                const cardSide = this.cards[i].card.querySelector(`.card-${side}`)
                cardSide.style.backgroundColor = color
            }
        }
    },

    setCardText: function(cardId, side, text, textColor, textFont, textSize) {
        if (cardId === 'all') {
            for (let i in this.cards) {
                const cardSide = this.cards[i].card.querySelector(`.card-${side}`)
                cardSide.innerText = text
                cardSide.style.color = textColor
                cardSide.style.font = textFont
                cardSide.style.fontSize = textSize
            }
        }

        else {
            for (let j = 0; j < cardId.length; j++) {
                let i = cardId[j]
                const cardSide = this.cards[i].card.querySelector(`.card-${side}`)
                cardSide.innerText = text
                cardSide.style.color = textColor
                cardSide.style.font = textFont
                cardSide.style.fontSize = textSize
            }
        }
    },
    

    swapCards: function(card1, card2, speed) {

        let card1x = this.cards[card1].x
        let card1y = this.cards[card1].y
        let card1z = this.cards[card1].z
        let card1Dropped = false

        if (card1x === 0) {
            card1x = this.cards[card1].xdrop
            card1y = this.cards[card1].ydrop
            this.cards[card1].x = card1x
            this.cards[card1].y = card1y
            card1Dropped = true
        } 

        let card2x = this.cards[card2].x
        let card2y = this.cards[card2].y
        let card2z = this.cards[card2].z
        let card2Dropped = false

        if (card2x === 0) {
            card2x = this.cards[card2].xdrop
            card2y = this.cards[card2].ydrop
            this.cards[card2].x = card2x
            this.cards[card2].y = card2y
            card2Dropped = true
        } 

        const card1_object = document.querySelector('#' + this.cards[card1].id)
        let card1_parent = null
        if (card1Dropped) {
            card1_parent = card1_object.parentNode
            card1_parent.removeChild(card1_object)
            card1_parent.parentNode.appendChild(card1_object)
            card1_object.style.left = card1x + 'px'
            card1_object.style.top = card1y + 'px'
        }

        const card2_object = document.querySelector('#' + this.cards[card2].id)
        let card2_parent = null
        if (card2Dropped) {
            card2_parent = card2_object.parentNode
            card2_parent.removeChild(card2_object)
            card2_parent.parentNode.appendChild(card2_object)
            card2_object.style.left = card2x + 'px'
            card2_object.style.top = card2y + 'px'
        }

        this.cards[card1].z = card2z
        card1_object.style.zIndex = card2z

        this.cards[card2].z = card1z
        card2_object.style.zIndex = card1z

        this.moveCards([card1], card2x, card2y, speed, card1Dropped, card2_parent)
        this.moveCards([card2], card1x, card1y, speed, card2Dropped, card1_parent)

    },

    setDropPosition: function(x, y, show) {
        const drop = document.createElement('div')
        const self = this
        drop.setAttribute('class', 'dropPosition')
        drop.setAttribute('id', 'dropPosition-' + this.setName + '-' + this.numberOfDropPositions)
        drop.style.width = this.width + 'px'
        drop.style.height = this.height + 'px'

        if (this.roundedEdge) {
            drop.style.borderRadius = '10%'
        }

        if (show) {
            drop.style.borderStyle = 'dashed'
            drop.style.borderColor = 'lightgray'
        }

        drop.style.zIndex = '0'
        drop.style.left = x + 'px'
        drop.style.top = y + 'px'

        drop.addEventListener('dragover', function(e) {
            e.preventDefault()
        })
        drop.addEventListener('dragenter', function(e) {
            e.preventDefault()
        })
        drop.addEventListener('dragleave', function(e) {
            e.preventDefault()
        })
        drop.addEventListener('drop', function(e) {
            const draggedCardID = e.dataTransfer.getData("text")
            const draggedCard = document.querySelector('#' + draggedCardID)
            draggedCard.style.left = 0 + 'px'
            draggedCard.style.top = 0 + 'px'
            const z = this.childNodes.length
            draggedCard.style.zIndex = z
            draggedCard.parentElement.removeChild(draggedCard)
            this.append(draggedCard)

            const start = 5 + self.setName.length + 1
            const i = parseInt(draggedCardID.substring(start))
            self.cards[i].x = 0
            self.cards[i].y = 0
            self.cards[i].xdrop = x + 2
            self.cards[i].ydrop = y + 2
            self.cards[i].z = z

            self.dropped = true
      
        })

        const parent = $(this.parent) 
        parent.append(drop)
        this.dropPositions[this.numberOfDropPositions] = {nID: this.numberOfDropPositions, id: 'dropPosition-' + this.setName + '-' + this.numberOfDropPositions, x: x, y: y}
    },

    setDragAndDrop: function(cardId) {
        if (cardId === 'all') {
            for (let i in this.cards) {
                const dragCard = this.cards[i].card
                dragCard.setAttribute('draggable', 'true')
                dragCard.addEventListener('dragstart', function(e) {
                    setTimeout(() => $(this).toggleClass('invisible'), 0)
                    e.dataTransfer.setData("text", e.currentTarget.id);
                })

                dragCard.addEventListener('dragend', function() {
                    $(this).removeClass('invisible')
                })
            }
        }

        else {
            for (let j = 0; j < cardId.length; j++) {
                let i = cardId[j]
                const dragCard = this.cards[i].card
                dragCard.setAttribute('draggable', 'true')
                dragCard.addEventListener('dragstart', function(e) {
                    setTimeout(() => $(this).toggleClass('invisible'), 0)
                    e.dataTransfer.setData("text", e.currentTarget.id);
                })

                dragCard.addEventListener('dragend', function() {
                    $(this).removeClass('invisible')
                })
               
            }
        }
    }

}





