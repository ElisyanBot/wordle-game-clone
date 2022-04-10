//skriv ett test på denna

export default function calcTimeDiff(start, end) {
  const dateFuture = end;
  const dateNow = start;
  
  let seconds = Math.round((dateFuture - (dateNow))/1000, 1);
  let minutes = Math.floor(seconds/60);
  let hours = Math.floor(minutes/60);
  let days = Math.floor(hours/24);
  
  hours = hours-(days*24);
  minutes = minutes-(days*24*60)-(hours*60);
  seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

  return `${minutes} min ${seconds} sec`;
}
