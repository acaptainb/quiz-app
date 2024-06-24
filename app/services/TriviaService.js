import { AppState } from "../AppState.js";
import { Trivia } from "../models/Trivia.js";

class TriviaService {
    async getQuestions() {
        // @ts-ignore
        const response = await axios.get('https://opentdb.com/api.php?amount=10&category=10&type=boolean')

        console.log('data', response.data);

        const questions = response.data.results.map((questionPOJO) => new Trivia(questionPOJO))
        AppState.trivia = questions
        console.log('0^0', AppState.trivia);



    }
}


export const triviaService = new TriviaService()