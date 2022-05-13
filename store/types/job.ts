import { ThunkDispatch } from "redux-thunk";

export type Priority = "Urgent" | "Regularly" | "Important";

export type Job = {
    text: string;
    priority: Priority
}

export interface AddJob {
    type: "ADD_JOB"
    payload: Job;
}

export interface JobState {
    item: Job[];
}

export type JobActions = AddJob;

export type ListAction = JobActions;
export type ListDispatch = ThunkDispatch<JobState, void, ListAction>