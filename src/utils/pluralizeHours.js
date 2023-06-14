const pluralizeHours = (hours) => {
  if (hours % 10 === 1 && hours % 100 !== 11) {
    return `${hours} час`
  } if (hours % 10 >= 2 <= 4 && (hours % 100 < 10 || hours % 100 >= 20)) {
    return `${hours} часа`
  }
  return `${hours} часов`
}

export default pluralizeHours
