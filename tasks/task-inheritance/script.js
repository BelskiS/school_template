function Builder(value) {
  this.value = value
}

Builder.prototype.get = function get() {
  return this.value
}

function IntBuilder(value = 0) {
  Builder.call(this, value)
}

IntBuilder.random = function random(from, to) {
  return Math.floor(Math.random() * (Math.floor(to) - Math.ceil(from))) + Math.ceil(from)
}

IntBuilder.prototype = Object.create(Builder.prototype)
IntBuilder.prototype.constructor = IntBuilder

IntBuilder.prototype.plus = function plus(...n) {
  this.value = n.reduce((sum, current) => sum + current, this.value)
  return this
}
IntBuilder.prototype.minus = function minus(...n) {
  this.value = n.reduce((sum, current) => sum - current, this.value)
  return this
}
IntBuilder.prototype.multiply = function multiply(n) {
  this.value *= n
  return this
}
IntBuilder.prototype.divide = function divide(n) {
  this.value = Math.floor(this.value / n)
  return this
}
IntBuilder.prototype.mod = function mod(n) {
  this.value %= n
  return this
}

// // EXAMPLE:
IntBuilder.random(10, 100) // 42;

const intBuilder = new IntBuilder(10) // 10;
intBuilder
  .plus(2, 3, 2) // 17;
  .minus(1, 2) // 14;
  .multiply(2) // 28;
  .divide(4) // 7;
  .mod(3) // 1;
  .get() // -> 1;

class StringBuilder extends Builder {
  constructor(value = '') {
    super(value)
  }

  plus(...str) {
    this.value += str.join('')
    return this
  }

  minus(n) {
    this.value = this.value.slice(0, -n)
    return this
  }

  multiply(int) {
    this.value = this.value.repeat(int)
    return this
  }

  divide(n) {
    const k = Math.floor(this.value.length / n)
    this.value = this.value.slice(0, k)
    return this
  }

  remove(str) {
    this.value = this.value.split(str).join('')
    return this
  }

  sub(from, n) {
    this.value = this.value.split('').splice(from, n).join('')
    return this
  }
}

// EXAMPLE:
const strBuilder = new StringBuilder('Hello') // 'Hello';
strBuilder
  .plus(' all', '!') // 'Hello all!'
  .minus(4) // 'Hello '
  .multiply(3) // 'Hello Hello Hello '
  .divide(4) // 'Hell';
  .remove('l') // 'He';
  .sub(1, 1) // 'e';
  .get() // -> 'e';
