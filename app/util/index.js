const prefix = (value) => {
  return (value < 10) ? `0${value}` : value;
};

export const formatTime = (time) => {
  let min = Math.floor(time / 60);
  let sec = Math.floor(time - (min * 60));
  return `${prefix(min)} : ${prefix(sec)}`;
}
