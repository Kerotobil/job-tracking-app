import { UpdateJob } from "../types/job"

type Props = {
    item: UpdateJob;
}

export const updateJob = (props: Props) => {
    return { type: props.item.type, payload: props.item.payload }
}