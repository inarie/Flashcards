import { createSlice } from '@reduxjs/toolkit';
import { addTopicQuiz } from '../topics/topicsSlice';

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = {
                id: action.payload.id,
                topicId: action.payload.topicId,
                name: action.payload.name,
                cardIds: action.payload.cardIds
            };
        }
    }
});

export const addQuizTopic = quiz => {
    const { quizId, name, topicId, cardIds } = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addTopicQuiz( { quizId: quizId, topicId: topicId } ));
    }
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;