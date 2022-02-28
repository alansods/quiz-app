const formatTime = (time) => {
  if(time < 60) {
    return time < 10 ? `0${time} segundos` : `${time} segundos`
  } else {
    return Math.floor(time / 60) + " minuto e " + (time % 60) + " segundos"
  }
}

export {
  formatTime
}