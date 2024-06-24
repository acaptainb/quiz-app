import { triviaController } from "./controllers/triviaController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [triviaController],
    view: ''
  }
])