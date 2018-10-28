const EventsArray = [
  'submition',
  'click',
  'change',
  'mouseout',
  'mouseenter',
  'mouseover',
  'mouseout',
  'keydown',
  'keyup',
  'keypress'
]

module.exports = () => {
  for (let event of EventsArray) {
    HTMLElement.prototype[event] = function (callback) {
      const eventToAttach = event === 'submition' ? 'submit' : event
      this.addEventListener(eventToAttach, callback)
    }
  }

  for (let event of EventsArray) {
    NodeList.prototype[event] = function (callback) {
      this.forEach(function (element) {
        element.addEventListener(event, callback)
      })
      // addEvent.call(null, event, callback)
    }
  }
}
