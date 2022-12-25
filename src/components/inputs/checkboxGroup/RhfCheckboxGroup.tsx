import { DeepMap, FieldError, useController } from 'react-hook-form';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { CheckboxGroup, CheckboxGroupProps } from './CheckboxGroup';
import React from 'react';

export type RhfCheckboxGroupProps<T extends FieldValues> = Omit<
  CheckboxGroupProps,
  'checkedValues'
> &
  UseControllerProps<T>;

export const RhfCheckboxGroup = <T extends FieldValues>(
  props: RhfCheckboxGroupProps<T>
): JSX.Element => {
  const { name, control } = props;
  const {
    field: { ref, onChange, value: checkedValues, ...rest },
    formState: { errors },
  } = useController<T>({ name, control });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newCheckedValueList: string[] = [];
    if (e.target.checked) {
      // add to non duplicated array when checked
      newCheckedValueList = [...new Set([...checkedValues, e.target.value])];
    } else {
      // remove from non duplicated array when checked off
      newCheckedValueList = [...checkedValues].filter((value) => value !== e.target.value);
    }
    return newCheckedValueList;
  };

  return (
    <CheckboxGroup
      inputRef={ref}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(handleChange(e))}
      {...rest}
      checkBoxPropsList={props.checkBoxPropsList}
      checkedValues={[...checkedValues]}
      errorMessage={errors[name] && `${(errors[name] as DeepMap<FieldValues, FieldError>).message}`}
    />
  );
};
