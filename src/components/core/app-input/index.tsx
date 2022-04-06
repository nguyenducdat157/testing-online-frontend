/* eslint-disable react-hooks/exhaustive-deps */
import {
  FormControl,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  InputBase,
  InputBaseProps,
} from "@mui/material";
import clsx from "clsx";
import React, { useCallback } from "react";
import { useController, UseControllerProps } from "react-hook-form";
import NumberFormat from "react-number-format";
import { checkValueAmount } from "src/utils/index";
import { percentField } from "src/utils/validation";
import useStyles from "./styles";

export interface AppInputProps<T> extends InputBaseProps {
  label?: string;
  subLabel?: React.ReactNode;
  labelProps?: FormLabelProps;
  controller: UseControllerProps<T>;
  helperText?: string | React.ReactNode;
  classNames?: string;
  inputNumber?: boolean;
  inputPostal?: boolean;
  inputPercent?: boolean;
  inputAmount?: boolean;
  inputAddress?: boolean;
  asset?: string;
}

const AppInput = <T extends Record<string, any>>({
  label,
  subLabel,
  labelProps,
  controller,
  className,
  classNames,
  fullWidth,
  required,
  helperText,
  error,
  inputNumber = false,
  inputPostal = false,
  inputPercent = false,
  inputAmount = false,
  inputAddress = false,
  asset,
  disabled,
  placeholder,
  ...rest
}: AppInputProps<T>) => {
  const {
    field: { name, onChange, value, ref, onBlur },
    fieldState: { error: errorDefault },
  } = useController(controller);
  const styles = useStyles();

  const handleOnChange = (e: any) => {
    let input = e.target.value;
    if (inputNumber) {
      return onChange(input.toString().replace(/[^0-9]/g, ""));
    } else if (inputPostal) {
      return onChange(input.toString().replace(/[^0-9+]/g, ""));
    } else if (inputPercent) {
      return onChange(percentField(input));
    } else if (inputAddress) {
      return onChange(input.replace(/[^a-zA-Z0-9]/g, ""));
    } else {
      return onChange(input);
    }
  };
  const classLabel = label
    ? ` ${styles.formControl} ${classNames} `
    : ` ${className} `;
  const classDisabled = disabled ? ` ${styles.disableBox} ` : " ";

  return (
    <FormControl
      fullWidth={fullWidth}
      error={error}
      required={required}
      className={classLabel + classDisabled}
    >
      {label && <FormLabel {...labelProps}>{label}</FormLabel>}
      {subLabel}
      <AppStyledInput
        className={className}
        id={name}
        name={name}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
        onBlur={onBlur}
        inputRef={ref}
        disabled={disabled}
        placeholder={placeholder || label || ""}
        inputAmount={inputAmount}
        asset={asset}
        {...rest}
      />
      {(helperText || errorDefault?.type === "required") && (
        <FormHelperText className={styles.helperText} component="div">
          {helperText
            ? helperText
            : errorDefault?.type === "required"
            ? `${label || placeholder} requirements`
            : ""}
        </FormHelperText>
      )}
    </FormControl>
  );
};

type Props = {
  [key: string]: any;
};

export const AppStyledInput: React.FC<Props> = ({
  classes,
  inputProps,
  inputAmount,
  asset,
  onChange,
  ...rest
}) => {
  //   const allLimit = useAppSelector((state) => state.marketReducer.allLimit);
  const styles = useStyles();
  const config = {
    inputProps: {
      ...inputProps,
      title: "",
      "aria-label": "",
      maxLength: inputProps?.maxLength || 255,
    },
    classes: {
      ...classes,
      root: clsx(classes?.root, styles.root),
      input: clsx(classes?.input, styles.input),
      multiline: clsx(classes?.multiline, styles.multiline),
      disabled: clsx(classes?.disabled, styles.disabled),
      focused: clsx(classes?.focused, styles.focused, styles.focused),
      error: clsx(classes?.error, styles.error),
      inputAdornedStart: clsx(
        classes?.inputAdornedStart,
        styles.inputAdornedStart
      ),
      inputAdornedEnd: clsx(classes?.inputAdornedEnd, styles.inputAdornedEnd),
      adornedStart: clsx(classes?.adornedStart, styles.adornedStart),
      adornedEnd: clsx(classes?.adornedEnd, styles.adornedEnd),
    },
    onChange,
    ...rest,
  };

  const renderNumberFormat = () => {
    const onChangeNew = config.onChange;
    delete config.onChange;
    return (
      <NumberFormat
        customInput={InputBase}
        {...config}
        onValueChange={(values) => {
          const { floatValue } = values;
          const e = {
            target: {
              value: floatValue,
            },
          };
          onChangeNew(e);
        }}
        thousandsGroupStyle="thousand"
        prefix=""
        decimalSeparator="."
        displayType="input"
        type="text"
        thousandSeparator={true}
        allowNegative={true}
        // decimalScale={Number(allLimit?.[asset]?.amount_precision)}
      />
    );
  };

  return inputAmount ? renderNumberFormat() : <InputBase {...config} />;
};

export const AppInputDecimal: React.FC<InputBaseProps> = (props) => {
  const onChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      const ok = checkValueAmount.test(e.target.value);

      if (ok) {
        props?.onChange?.(e);
      }
    },
    [props.onChange]
  );

  return <AppStyledInput {...props} onChange={onChange} />;
};

export default AppInput;
