import { ThunkDispatch } from "redux-thunk";

interface Urgent {
    sira: 0
    text: "acil"
}
interface Regularly {
    sira: 1
    text: "normal"
}
interface Trivial {
    sira: 2
    text: "önemsiz"
}

type Priority = Urgent | Regularly | Trivial;

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