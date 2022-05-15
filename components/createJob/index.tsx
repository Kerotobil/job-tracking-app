import { Button, FormControl, MenuItem, Select, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addJob } from '../../store/actions/addJob';
import { Priority } from '../../store/types/job';
import styles from './createJob.module.scss';

export const CreateJob = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState<{ jobName: string; priority: Priority }>({
    jobName: '',
    priority: 'Regularly',
  });
  const priority: { type: Priority; text: string }[] = [
    { type: 'Urgent', text: 'Urgent' },
    { type: 'Regularly', text: 'Regularly' },
    { type: 'Important', text: 'Important' },
  ];

  return (
    <Formik
      initialValues={form}
      onSubmit={(values) => {
        console.log(values);
        dispatch(addJob({ item: { type: 'ADD_JOB', payload: { text: values.jobName, priority: values.priority } } }));
      }}
    >
      {(formikProps) => (
        <Form>
          <div className={styles.container}>
            <div className={styles.jobNameContainer}>
              <div>
                <label>{'Job Name'}</label>
              </div>
              <TextField
                name="jobName"
                value={formikProps.values.jobName}
                onChange={formikProps.handleChange}
                className={styles.jobName}
                size="small"
                placeholder="What are you going to do?"
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
              <div>
                <label>{''}</label>
              </div>
              <Button type="submit" className={styles.createButton} variant="contained">
                Create
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
