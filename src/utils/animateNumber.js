export default function animateNumber(
  startNumber,
  finalNumber,
  duration,
  callback
) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const increasingNumber = Math.floor(
      progress * (finalNumber - startNumber) + startNumber
    );
    // console.log(increasingNumber)
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
    callback(increasingNumber);
  };
  window.requestAnimationFrame(step);
}
