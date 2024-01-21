// TODO: create range function to loop over a range of numbers
function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

export { range };
