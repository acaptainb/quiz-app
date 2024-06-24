export class Trivia {
    constructor(data) {
        this.question = data.question
        this.correstanswer = data.correct_answer
        this.category = data.category
    }



    get questionTemplate() {
        return `
        <div class="border rounded p-3 m-5">
        <p class="fs-3">${this.question}</p>
        <div class="row text-center text-light">
        <div class="col-6 ">
        <div class="row justify-content-center">
        <div class="col-6 border rounded">
        <button class="btn px-5 text-light">
        <p class="fs-2 px-2">True</p>
        </button>
        </div>
        </div>
        </div>
        <div class="col-6 ">
        <div class="row justify-content-center">
        <div class="col-6 border rounded">
        <button class="btn px-5 text-light">
        <p class="fs-2 px-2">False</p>
        </button>
        </div>
        </div>
        </div>
        </div>
      </div>
        `
    }
}

// const dataApi = {
//     category: "Entertainment: Books"
// ​​​
// correct_answer: "True"
// ​​​
// difficulty: "hard"
// ​​​
// incorrect_answers: Array["False"]
// ​​​category: "Entertainment: Books"
// ​​​
// correct_answer: "True"
// ​​​
// difficulty: "hard"
// ​​​
// incorrect_answers: Array["False"]
// ​​​
// question: "Harry Potter was born on July 31st, 1980."
// ​​​
// type: "boolean"
// question: "Harry Potter was born on July 31st, 1980."
// ​​​
// type: "boolean"
// }