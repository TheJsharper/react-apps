

const GAME_WORDS = [
    'REACT',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'HTML',
    'ANGULAR',
    'SOLID',
    'NODE',
    'VUEJS',
    'SVELTE',
    'EXPRESS',
    'MONGODB',
    'POSTGRES',
    'DOCKER',
    'KUBERNETES',
    'WEBPACK',
    'VITE',
    'TAILWIND',
];

export interface ScrambleWordsState {
    currentWord: string;
    errorCounter: number;
    guess: string;
    isGameOver: boolean;
    maxAllowErrors: number;
    maxSkips: number;
    points: number;
    scrambleWord: string;
    skipCounter: number;
    words: string[];
    totalLength: number;

}

export type ScrambleWordsAction =
    { type: 'SET_GUESS', payload: string }
    | { type: 'CHECK_ANSWER' }
    | { type: 'SKIP_WORD' }
    | { type: 'START_NEW_GAME', paayload: ScrambleWordsState }


const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

const scrambleWord = (word: string = '') => {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};

export const getInitialScrambleWordsState = (): ScrambleWordsState => {

    const shuffleWords = shuffleArray([...GAME_WORDS])

    return {
        currentWord: shuffleWords[0],
        errorCounter: 0,
        guess: '',
        isGameOver: false,
        maxAllowErrors: 3,
        maxSkips: 3,
        points: 0,
        scrambleWord: scrambleWord(shuffleWords[0]),
        skipCounter: 0,
        words: shuffleWords,
        totalLength: shuffleArray.length,

    }
}


export const scrambleWordReducer = (state: ScrambleWordsState, action: ScrambleWordsAction): ScrambleWordsState => {


    switch (action.type) {
        case 'SET_GUESS':
            return { ...state, guess: action.payload.trim().toUpperCase() }

        case 'CHECK_ANSWER':
            if (state.currentWord === state.guess) {
                const newWords = state.words.slice(1);
                return {
                    ...state,
                    words: newWords,
                    points: state.points + 1,
                    guess: '',
                    scrambleWord: scrambleWord(newWords[0]),
                    isGameOver: (state.errorCounter + 1) >= state.maxAllowErrors
                }

            }
            return {
                ...state,
                errorCounter: state.errorCounter + 1,

            }

        case 'SKIP_WORD':
            if (state.skipCounter >= state.maxSkips) return { ...state }

            const updatedWords = state.words.slice(1);

            return {
                ...state,
                skipCounter: state.skipCounter + 1,
                words: updatedWords,
                currentWord: updatedWords[0],
                scrambleWord: scrambleWord(updatedWords[0]),
                guess: '',


            }

        case 'START_NEW_GAME':

            return { ...action.paayload }

        default:
            return { ...state }

    }
}