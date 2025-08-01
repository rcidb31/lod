import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DateOnlyPicker() {
  return (
    <div id="date-picker">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Selecciona una fecha"
        disablePast
        defaultValue={dayjs().subtract(1, 'day')}
        views={['year', 'month', 'day']}
      />
    </LocalizationProvider>
    </div>
  );
}
