import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            };
        },
        addTopicQuiz: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizIds); 
        }
    }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addTopicQuiz } = topicsSlice.actions;
export default topicsSlice.reducer;