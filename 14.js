const event=require('events')
const em=new event()
function s1()
{
    console.log('first')
}
function s2()
{
    console.log('second')
}
//  event listeners
em.on('start',s1)
em.on('start',s2)

em.emit('start')
console.log(em.listenerCount('start'))
em.removeListener('start',s2)
console.log(em.listenerCount('start'))
