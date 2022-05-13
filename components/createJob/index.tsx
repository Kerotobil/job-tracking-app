import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./createJob.module.scss"

export const CreateJob = () => {

    interface Priority {
        type: "urgent" | "regularly" | "trivial"
        sira: number,
        text: string
    }

    const priority: Priority[] = [
        { type: "urgent", sira: 0, text: "Acil" },
        { type: "regularly", sira: 1, text: "Normal" },
        { type: "trivial", sira: 2, text: "Önemsiz" }
    ]

    const [select, setSelect] = useState<Priority>();

    const handleSelect = (select: Priority) => {

        setSelect(select)
    }

    return (
        <div className={styles.container}>
            <div className={styles.jobNameContainer}>
                <div><label>{"İş Adı"}</label></div>
                <TextField className={styles.jobName} size="small" placeholder="Ne İşin Var?" variant="outlined" />
            </div>
            <div className={styles.priorityContainer}>
                <div>
                    <label>{"Öncelik"}</label>
                </div>
                <FormControl className={styles.selectPriority} size="small">
                    <Select
                        onChange={(e) => console.log(e)}>
                        {priority.map((item, index) => (<MenuItem key={index} value={item.type}>{item.text}</MenuItem>))
                        }
                    </Select>
                </FormControl>
            </div>
            <div className={styles.ButtonContainer}>
                <div><label>{""}</label></div>
                <Button className={styles.createButton} variant="contained" >Oluştur</Button>
            </div>
        </div>)
}