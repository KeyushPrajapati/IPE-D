var event = require('events')
var em = new event()

em.on('circle', (e) => {
    console.log(e)
})
em.on('square', (e) => {
    console.log(e)
})

function circles(r) {
    if (r < 0) {
        em.emit('circle', 'redius must be positive')
    } else {
        em.emit('circle', `area=${Math.PI*r*r}`)
    }
}

function squares(side) {
    if (side < 0) {
        em.emit('square', 'side must be positive')
    } else {
        em.emit('square', `area=${side*4}`)
    }
}

circles(-1)
squares(-1)
console.log(em.listenerCount('circle'))