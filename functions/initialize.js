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
    const eventToAttach = event === 'submition' ? 'submit' : event

    HTMLElement.prototype[event] = function (callback) {
      this.addEventListener(eventToAttach, callback)
    }

    NodeList.prototype[event] = function (callback) {
      this.forEach(function (element) {
        element.addEventListener(eventToAttach, callback)
      })
      // addEvent.call(null, event, callback)
    }
  }
}
