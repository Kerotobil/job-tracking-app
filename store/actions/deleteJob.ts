import { DeleteJob } from "../types/job"

type Props = {
    item: DeleteJob;
}

export const deleteJob = (props: Props) => {
    return { type: props.item.type, payload: props.item.payload }
}