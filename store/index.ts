import { combineReducers } from "redux";
import jobReducer from "./reducers/jobReducer";
import { JobState } from "./types/job";

export interface AppState {
    job: JobState;
}

const rootReducer = combineReducers<AppState>({
    job: jobReducer,
});

export default rootReducer;
