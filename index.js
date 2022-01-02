
class Fumon {
  constructor (selector) {
    this.element = document.querySelector(selector)
    this.element.addEventListener('keyup', this.call.bind(this))
  }

  call () {
    if (this.element.value !== '') {
      this.reset()
      clearTimeout(this.waiting)
      clearTimeout(this.blowing)
      this.waiting = setTimeout(this.blow.bind(this), 1500)
    }
  }

  blow () {
    this.element.style.transition = 'all 2s ease-out'
    this.element.style.opacity = '0'
    this.blowing = setTimeout(() => {
      this.element.value = ''
      this.reset()
    }, 2000)
  }

  reset () {
    this.element.style.transition = 'all 0.25s ease-out'
    this.element.style.opacity = '1'
  }
}

export { Fumon }
