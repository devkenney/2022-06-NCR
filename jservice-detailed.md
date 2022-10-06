# jService Homework Detailed Instructions

## Components needed:

  - Score component - keeps track of player score
  - Score buttons - Should have an increase score button and a decrease score button that both change the score by either +100 or -100
  - Get Question button - This should make a call to the jService API that grabs a random question for you to display to the user.
  - Details of the question:
    - Category - The category of the question (from the data you received from the API)
    - Points - (called value) How many points the question is worth (also from the API)
    - Answer - The answer to the Jeopardy question (remember, the player provides the question)
    - Question button - reveals the question when it is clicked

Sample API response:

```
[
  {
    "id": 122969,
    "answer": "peanut butter",
    "question": "Take a legume whose pod develops underground, roast it, then grind it into a paste to make this",
    "value": 1000,
    "airdate": "2009-07-17T12:00:00.000Z",
    "created_at": "2022-07-27T01:27:24.369Z",
    "updated_at": "2022-07-27T01:27:24.369Z",
    "category_id": 13947,
    "game_id": 3102,
    "invalid_count": null,
    "category": {
      "id": 13947,
      "title": "transformed food",
      "created_at": "2022-07-27T01:27:23.436Z",
      "updated_at": "2022-07-27T01:27:23.436Z",
      "clues_count": 5
    }
  }
]
```

The values you need to worry about are:
  - answer
  - question
  - value
  - category.title

all of these key value pairs are Strings except for value which is a Number.


Important to note, that for the base app to work, you are only required to make the points go up or down by 100. If you have time after you finish and you're feeling particularly adventurous, then you can make the player's points go up and down by the value associated with the API request.

## Buttons

  - Increase/Decrease score button:
    - you will need a function attached to them that increases the value of the *state* of `score` using a `setScore` function. All they will do is something along the lines of `setScore(score + 100)`.
  - Reset score button:
    - This one is **NOT** required for completion of the homework. However, all this button has to do is set the score back to 0.
  - Get Question button:
    - This button needs to be attached to a function that grabs the required data from the jService API. You will need to use `fetch` along with the URL that was given in the homework to get the data, and a `response.json()` to parse the response into readable JSON. You then need to set the data you get to a state variable (maybe called `data`) so that you can access it anywhere on your page.
  - Reveal Question button:
    - This one can be done almost purely with CSS. All it has to do is show the question that was grabbed from the API when it is clicked. Bonus points if you can figure out how to hide it again when a new question is grabbed from the API! Think about the `display` property when dealing with showing and hiding data!