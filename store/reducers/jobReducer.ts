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
        default:
            return state;
    }

}

export default jobReducer;