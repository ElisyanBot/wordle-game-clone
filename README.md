# wordle-game-clone

## game-api-routs

|path| verb| Comment |
|----------------|-----|-------------------------|
|-|||
|/api/word| post | {word: [["w"], ["o"],["r"], ["d"]], id: uuid} |
|-|||
|/api/word| get | get random word |
|/api/word?length=Number| get | get random word with length === Num |
|/api/word?mulitChar=false| get | get random word with 1 repeated char|


---

## highscore-api-routs

|path| verb| Comment |
|----------------|-----|-------------------------|
|-|||
|/api/highscore | post | { userName, wordleWord, attempts, completeTime, wordLength, multiChar }|
|-|||
|/api/highscore | get | fetch full highscore list | 
|/api/highscore?wordLength=Number | get |fetches all word with number |
|/api/highscore?pageSize=Number | get | fetches the amount of word as Number |
|/api/highscore?pageNr=Number | get | fetches page number -> needs pageSize to work |
