import { Button } from '@mui/material';
import { Job } from '../../../store/types/job';
import styles from './delete.module.scss';

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
          <h1 className={styles.modalQuestion}>Are you sure you want to delete it? </h1>
        </div>
      </div>
      <div className={styles.ButtonContainer}>
        <Button onClick={() => props.cancelEvent()} className={styles.createButton} variant="outlined" color="error">
          No
        </Button>
        <Button onClick={() => props.saveEvent()} className={styles.createButton} variant="contained" color="error">
          Delete
        </Button>
      </div>
    </div>
  );
};
