import { createStyles } from "@material-ui/core";
import {palette} from "../../../../../themes/primary/palette";

export const styles = () => createStyles({
  csSelect: {
    '& [class*=MuiInputLabel-root]': {
      marginTop: -4,

      '&[class*=MuiInputLabel-marginDense]': {
        fontSize: 14,
        transform: 'translate(9px, 20px) scale(1)'
      },
      '&[class*=MuiInputLabel-shrink]': {
        transform: 'translate(12px, 12px) scale(0.75)'
      }
    },
    '& > div': {
      borderRadius: '4px 4px 0 0'
    },
    '& > [class*=MuiFilledInput-marginDense]': {
      borderRadius: '0 0 0 0 !important'
    },
    '& [class*=inputMarginDense]': {
      paddingTop: 13,
      paddingBottom: 12
    },
    '& [class*=MuiInputLabel-shrink] + div > [class*=inputMarginDense]': {
      paddingTop: 19,
      paddingBottom: 6
    },
    '& [class*=MuiInputLabel-shrink] + div > [class*=MuiSelect-root]:not([class*=inputMarginDense])': {
      paddingTop: 22,
      paddingBottom: 10
    },
    '& [class*=MuiSelect-root]': {
      backgroundColor: palette.common.white,
      color: palette.text?.primary,
      borderRadius: '4px 4px 0 0',
      '&:-webkit-autofill': {
        WebkitTextFillColor: palette.text?.primary
      },
      '&:hover': {
        backgroundColor: palette.common.white
      },
      '&:focus': {
        backgroundColor: palette.common.white
      },
      '&[class*=disabled]': {
        backgroundColor: palette.common.white,
        color: palette.common.grayText,
        cursor: 'not-allowed'
      }
    },
    '& [class*=MuiFilledInput-colorSecondary] [class*=MuiSelect-root]': {
      backgroundColor: '#E8EDF1',
      color: '#4C5862',
      '&:-webkit-autofill': {
        WebkitTextFillColor: '#4C5862'
      },
      '&:hover': {
        backgroundColor: '#e8edf1'
      },
      '&:focus': {
        backgroundColor: '#E8EDF1'
      },
      '&[class*=disabled]': {
        backgroundColor: '#E8EDF1',
        color: palette.common.grayText
      }
    }
  },
  selectIcon: {
    position: 'absolute',
    top: 'unset',
    right: ({sizeSmall}: {sizeSmall: boolean}) => sizeSmall ? 13 : 19,
    display: 'inline-block',
    cursor: 'pointer',
    pointerEvents: 'none'
  },
  dropdownStyle: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    boxShadow: '0px 7px 22px rgba(22, 79, 132, 0.2)'
  },
  list: {
    paddingTop: 12,
    paddingBottom: 12,
    "& li": {
      color: '#4C5862',
      fontWeight: 500,
      fontSize: ({sizeSmall}: {sizeSmall: boolean}) => sizeSmall ? '14px' : '16px',
      lineHeight: ({sizeSmall}: {sizeSmall: boolean}) => sizeSmall ? '20px' : '24px',
      letterSpacing: '0.25px',
      paddingTop: 4,
      paddingBottom: 4,
      '&:hover': {
        backgroundColor: 'rgba(15, 116, 176, 0.07)'
      },
      '&:active': {
        backgroundColor: 'rgba(15, 116, 176, 0.07)'
      },
      '&.Mui-selected': {
        backgroundColor: 'rgba(15, 116, 176, 0.20)',
        '&:hover': {
          backgroundColor: 'rgba(15, 116, 176, 0.07)'
        }
      }
    }
  },
  listGray: {
    backgroundColor: '#E8EDF1',
    "& li": {
      '&:hover': {
        backgroundColor: '#eef5f9'
      },
      '&:active': {
        backgroundColor: '#eef5f9'
      },
      '&.Mui-selected': {
        backgroundColor: '#f6f8fa',
        '&:hover': {
          backgroundColor: '#eef5f9'
        }
      }
    }
  }
});