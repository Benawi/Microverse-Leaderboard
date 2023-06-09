export default class Store {
  constructor() {
    this.data = [];
    this.scoresUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/266Uox8RtUVX6YlFdld7/scores/';
  }

  async addScore(user, score) {
    this.obj = {
      user,
      score,
    };

    const promise = await fetch(this.scoresUrl, {
      method: 'POST',
      body: JSON.stringify(this.obj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const json = await promise.json().result;
    return json;
  }

    #privateSetData() {
    this.data = fetch(this.scoresUrl)
      .then((response) => response.json())
      .then((json) => (json.result));
  }

    getData() {
      this.#privateSetData();
      return this.data;
    }
}