import { FormControl, MenuItem, Select, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { string } from 'yup';
import { Priority } from '../../../store/types/job';
import styles from './filter.module.scss';
interface Props {
  textFilter: (e: string | undefined) => void;
  priorityFilter: (e: Priority | undefined) => void;
}
const priority: { type: Priority; text: string }[] = [
  { type: 'Urgent', text: 'Acil' },
  { type: 'Regularly', text: 'Normal' },
  { type: 'Important', text: 'Önemli' },
];

export const TextFilter = (props: Props) => {
  const [text, setText] = useState<string | undefined>();
  const [filterPriority, setFilterPriority] = useState<Priority>();

  useEffect(() => {
    props.textFilter(text);
  }, [text]);

  useEffect(() => {
    props.priorityFilter(filterPriority);
  }, [filterPriority]);

  return (
    <div className={styles.container}>
      <div className={styles.FormContainer}>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.textFieldContainer}
          size="small"
        />
        <FormControl className={styles.selectContainer} size="small">
          <Select defaultValue="Regularly" onChange={(value) => setFilterPriority(value.target.value as Priority)}>
            {priority.map((item, index) => (
              <MenuItem key={index} value={item.type}>
                {item.text}
              </MenuItem>
            ))}
            <MenuItem key={'default'} value={''}>
              {'--'}
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
