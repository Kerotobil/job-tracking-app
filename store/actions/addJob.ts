import { AddJob } from "../types/job"

type Props = {
    item: AddJob;
}

export const addJob = (props: Props) => {
    return { type: props.item.type, payload: props.item.payload }
}