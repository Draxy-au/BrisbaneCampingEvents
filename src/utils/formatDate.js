export function formatDateForInput(date) {
  const formatted = new Date(date).toISOString().slice(0, 10)
  const newDate = new Date(formatted)
  return newDate.toDateString()
}