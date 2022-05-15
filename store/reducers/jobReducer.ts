import { JobActions, JobState } from "../types/job";

const defaultState: JobState = {
    item: []
}

const jobReducer = (state: JobState = defaultState, action: JobActions): JobState => {

    switch (action.type) {
        case "ADD_JOB": {
            state.item.push(action.payload)
            return { ...state }
        }
        case "UPDATE_JOB": {
            const itemIndex = state.item.findIndex(
                (item) => item.text == action.payload.text
            );
            state.item[itemIndex].priority = action.payload.priority;
            return { ...state }
        }
        case "DELETE_JOB": {
            return { ...state, item: state.item.filter(e => e.text != action.payload.text) }
        }
        default:
            return state;
    }

}

export default jobReducer;