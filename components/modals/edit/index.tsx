import { Button, FormControl, MenuItem, Select, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { Job, Priority } from '../../../store/types/job';
import styles from './edit.module.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
interface Props {
  job: Job;
  saveEvent: (e: Priority) => void;
  cancelEvent: () => void;
}

export const EditModal = (props: Props) => {
  const [form, setForm] = useState<{ jobName: string; priority: Priority }>({
    jobName: props.job?.text,
    priority: props.job?.priority,
  });
  const priority: { type: Priority; text: string }[] = [
    { type: 'Urgent', text: 'Urgent' },
    { type: 'Regularly', text: 'Regularly' },
    { type: 'Important', text: 'Important' },
  ];
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.modalTitle}>Job Edit</h1>
      </div>

      <Formik
        initialValues={form}
        onSubmit={(values) => {
          props.saveEvent(values.priority);
        }}
      >
        {(formikProps) => (
          <Form>
            <div className={styles.formContainer}>
              <div className={styles.jobNameContainer}>
                <div>
                  <label>{'Job Name'}</label>
                </div>
                <TextField
                  name="jobName"
                  disabled
                  value={formikProps.values.jobName}
                  onChange={formikProps.handleChange}
                  className={styles.jobName}
                  size="small"
                  variant="outlined"
                />
              </div>
              <div className={styles.priorityContainer}>
                <div>
                  <label>{'Priority'}</label>
                </div>
                <FormControl className={styles.selectPriority} size="small">
                  <Select
                    name="priority"
                    value={formikProps.values.priority}
                    onChange={(e) => formikProps.handleChange(e)}
                  >
                    {priority.map((item, index) => (
                      <MenuItem key={index} value={item.type}>
                        {item.text}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className={styles.ButtonContainer}>
                <Button onClick={() => props.cancelEvent()} className={styles.createButton} variant="outlined">
                  Cancel
                </Button>
                <Button type="submit" className={styles.createButton} variant="contained">
                  Save
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
