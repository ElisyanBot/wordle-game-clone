export default function pagination(scoreList, pageSize, pageNr = 1) {
  const page = parseInt(pageNr);
  const pageLimit = parseInt(pageSize);
  if (typeof page !== typeof 5 || typeof pageLimit !== typeof 5) {
    return scoreList;
  }

  const pageStart = (page - 1) * pageLimit; //- 1 to get index with base 0
  const pageEnd = pageStart + pageLimit;

  //filtration
  let filteredScores = { data: [], meta: {} };
  scoreList.forEach((score) => {
    if (
      scoreList.indexOf(score) >= pageStart &&
      scoreList.indexOf(score) < pageEnd
    ) {
      filteredScores.data.push(score);
    }
  });


  filteredScores.meta = {
    totalPages: Math.ceil(scoreList.length / pageLimit),
  };

  return filteredScores;
}
