//skriv ett test på denna

export default function calcTimeDiff(start, end) {
  const dateFuture = end;
  const dateNow = start;
  
  const seconds = Math.floor((dateFuture - (dateNow))/1000);
  const minutes = Math.floor(seconds/60);
  const hours = Math.floor(minutes/60);
  const days = Math.floor(hours/24);
  
  hours = hours-(days*24);
  minutes = minutes-(days*24*60)-(hours*60);
  seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

  return `${minutes}.${seconds}`;
}
