export function formatDateForDisplay(date) {
  const formatted = new Date(date).toLocaleDateString("en-AU").slice(0, 10)
  const day = formatted.slice(0,2);
  const month = formatted.slice(3,5);
  const year = formatted.slice(6,10);
  const newDate = new Date(`${year}-${month}-${day}`)
  return newDate.toDateString()
}

export function formatDateForInput(date) {
  const formatted = new Date(date).toLocaleDateString("en-AU").slice(0, 10);
  const day = formatted.slice(0,2);
  const month = formatted.slice(3,5);
  const year = formatted.slice(6,10);
  return `${year}-${month}-${day}`;
}