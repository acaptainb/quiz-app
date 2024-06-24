import { AppState } from "../AppState.js";
import { triviaService } from "../services/TriviaService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class triviaController {
    constructor() {
        console.log('Trivia controller');
        this.getQuestions()

        AppState.on('trivia', this.drawQuestions)
    }




    async testPromise() {
        const myPromise = await new Promise((resolve, reject) => {
            setTimeout(() => {

                resolve("Promise has been resolved");
            }, 300);
        });
        console.log(myPromise);
    }



    async getQuestions() {
        try {
            console.log('getting questions 📡');
            await triviaService.getQuestions()
            Pop.success("WE GOT THE questions")
            //if an error is thrown by the try, we catch it here and run other code 
        } catch (error) {
            Pop.error(error)
            console.error("TRIED TO GET THE questions AND FAILED", error)
        }

    }

    drawQuestions() {
        const questions = AppState.trivia
        let innerHTMLString = ''
        questions.forEach((q) => innerHTMLString += q.questionTemplate)
        setHTML('question', innerHTMLString)
    }
}