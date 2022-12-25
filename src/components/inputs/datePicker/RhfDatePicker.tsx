import { DatePicker } from '@mui/x-date-pickers';
import moment from 'moment';
import { useController } from 'react-hook-form';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { RhfTextField } from '../textField/RhfTextField';

export type RhfDatePickerProps<T extends FieldValues> = UseControllerProps<T> & {
  dateFormat: string;
  placeholder: string;
};

export const RhfDatePicker = <T extends FieldValues>(props: RhfDatePickerProps<T>) => {
  const { name, control, dateFormat, placeholder } = props;
  const {
    field: { onChange, value },
    formState: { errors },
  } = useController<T>({ name, control });

  const onSelectDate = (e: Date | null) => {
    onChange(e);
  };

  const onChangeText = (value: string) => {
    onChange(moment(value, dateFormat, true));
  };

  return (
    <DatePicker
      value={value || null}
      onChange={(e: Date | null) => onSelectDate(e)}
      renderInput={(params) => (
        <RhfTextField
          {...params}
          inputProps={{
            ...params.inputProps,
            placeholder: placeholder,
          }}
          error={!!errors[name]}
          onChange={(e) => {
            if (!/^\d*$/.test(e.target.value)) return;
            onChangeText(e.target.value);
          }}
          defaultValue={undefined}
          name={name}
          control={control}
        />
      )}
    />
  );
};
