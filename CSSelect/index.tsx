import React from 'react';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  InputLabelProps,
  FormControlProps
} from "@material-ui/core";
import clsx from "clsx";
import { styles } from './styles';
import {makeStyles} from "@material-ui/core/styles";
import {SelectProps} from "@material-ui/core/Select/Select";
import {ReactComponent as IconOpen} from "../../../../../themes/assets/icons/select-open_24.svg";

const useStyles = makeStyles(styles);
const {NODE_ENV}=process.env;

interface CSSelectProps extends SelectProps{
  value: unknown,
  options: any[],
  InputLabelProps?: InputLabelProps
  formControlProps?: FormControlProps,
  onChange: (event: React.ChangeEvent<{ value: unknown; }>) => void,
  iterableKey?: string,
  labelKey?: string
}
const CSSelect = ({
  value,
  options,
  onChange,
  label,
  InputLabelProps,
  formControlProps,
  iterableKey = 'id',
  labelKey = 'name',
  ...props
}: CSSelectProps) => {

  const classes = useStyles({
    sizeSmall: Boolean(formControlProps?.size === "small")
  });

  const listStyle = clsx({
    [classes.list]: true,
    [classes.listGray]: props?.color === 'secondary'
  });

  const logMissingProps = (item: any)=>{
    const isString = typeof item === 'string';
    const noLabelKey = !isString && !item[labelKey];
    const noIterableKey = !isString && !item[iterableKey];
    const showLog = noLabelKey || noIterableKey;
    if (NODE_ENV === 'development' && showLog){
      // eslint-disable-next-line no-console
      console.log('=================');
      // eslint-disable-next-line no-console
      console.table(item);
      // eslint-disable-next-line no-console
      noIterableKey && console.warn(`item[${iterableKey}] does not exists in MenuItem \n Add 'iterableKey' as prop`);
      // eslint-disable-next-line no-console
      noLabelKey && console.warn(`item[${labelKey}] does not exists in MenuItem \n Add 'iterableKey' as prop`);
      // eslint-disable-next-line no-console
      console.log('=================');
    }
  };

  return (
    <FormControl
      fullWidth
      variant="filled"
      className={classes.csSelect}
      {...formControlProps}>

      { label && (
        <InputLabel {...InputLabelProps}>
          {label}
        </InputLabel>
      )}

      <Select
        {...props}
        MenuProps={{
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          },
          classes: {
            paper: classes.dropdownStyle,
            list: listStyle
          }
        }}
        IconComponent={(props) => {
          return (
            <IconOpen className={clsx(props.className,classes.selectIcon)}/>
          );
        }}
        value={value || ""}
        onChange={onChange}>

        {options.map((item) => {
          const isString = typeof item === 'string';
          logMissingProps(item);

          return (
            <MenuItem
              value={isString ? item : item[iterableKey]}
              key={isString ? item : item[iterableKey]}>
              {isString ? item.charAt(0).toUpperCase() + item.slice(1) : item[labelKey]?.charAt(0).toUpperCase() + item[labelKey]?.slice(1)}
            </MenuItem>
          );
        })}

      </Select>
    </FormControl>
  );
};

export default CSSelect;

