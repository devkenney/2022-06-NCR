module.exports.area = (radius) => {
  return (Math.pow(radius, 2) * Math.PI)
}

module.exports.circumference = (radius) => {
  return (radius * 2 * Math.PI);
}