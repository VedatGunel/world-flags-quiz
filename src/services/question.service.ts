import countriesJson from "../assets/countries.json";
import * as _ from "underscore";

export interface Country {
    name: string;
    value: string;
    flag: string;
}

/*enum QuestionType {
    TEXT_OPTIONS,
    FLAG_OPTIONS
}*/

export interface Question<T> {
    options: T[];
    correctAnswer: T;
}

class QuestionService {
    private availableQuestions;
    public constructor() {
        this.availableQuestions = _.shuffle(countriesJson);
    }
    getQuestion(): Question<Country> {
        const shuffledCountries = _.shuffle(this.availableQuestions);
        const selectedCountries = shuffledCountries.slice(0, 4).map(country => {
            return {
                name: country.name.common,
                value: country.cca2,
                flag: country.flags.svg,
            };
        });

        const correctIndex = Math.floor(Math.random() * 4);
        const correctAnswer = selectedCountries[correctIndex];
        console.log(this.availableQuestions.length);
        this.availableQuestions = this.availableQuestions.filter(q => {
            return q.cca2 !== correctAnswer.value;
        });

        return {
            options: selectedCountries,
            correctAnswer,
        };
    }
}

export const questionService = new QuestionService();
