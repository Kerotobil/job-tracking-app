import { Button, FormControl, MenuItem, Select, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { Job, Priority } from '../../../store/types/job';
import styles from './edit.module.scss';
import { useState } from 'react';
interface Props {
  job: Job;
  saveEvent: () => void;
  cancelEvent: () => void;
}

export const DeleteModal = (props: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <h1>Are you sure you want to delete it? </h1>
        </div>
      </div>
      <Button onClick={() => props.cancelEvent()} className={styles.createButton} variant="contained">
        No
      </Button>
      <Button onClick={() => props.saveEvent()} className={styles.createButton} variant="contained">
        Yes
      </Button>
    </div>
  );
};
