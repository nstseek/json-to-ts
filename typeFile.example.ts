/* Generated type */

export type ConvertedType = {
  children: string;
  theme: {
    breakpoints: {
      keys: string[];
      values: { xs: number; sm: number; md: number; lg: number; xl: number };
      unit: string;
    };
    direction: string;
    components: {
      MuiDialogContent: { styleOverrides: {} };
      MuiButton: {
        styleOverrides: {
          containedSizeSmall: {
            paddingLeft: string;
            paddingRight: string;
          };
          outlinedSizeSmall: { padding: string };
          outlinedSizeMedium: { padding: string };
          outlinedSizeLarge: { padding: string };
          iconSizeSmall: { '& > *:first-of-type': { fontSize: number } };
          iconSizeMedium: { '& > *:first-of-type': { fontSize: number } };
          iconSizeLarge: { '& > *:first-of-type': { fontSize: number } };
        };
        defaultProps: {
          variant: string;
          color: string;
          size: string;
          disableRipple: boolean;
        };
      };
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: string;
            padding: string;
            fontSize: string;
          };
        };
        defaultProps: {
          placement: string;
          TransitionComponent: { propTypes: {} };
        };
      };
      MuiPaper: { styleOverrides: { root: { overflow: string } } };
      MuiCard: { styleOverrides: {} };
      MuiStepper: { styleOverrides: { root: { padding: number } } };
      MuiTablePagination: {
        styleOverrides: {
          selectLabel: { margin: number };
          displayedRows: { margin: number };
        };
      };
      MuiCssBaseline: {
        styleOverrides: {
          'body': {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: string;
            letterSpacing: string;
            color: string;
            backgroundColor: string;
            height: string;
            background: string;
          };
          'html': { height: string; background: string };
          '#root': { height: string; background: string };
        };
      };
      MuiAlert: {
        defaultProps: { variant: string; severity: string };
        styleOverrides: { icon: { display: string } };
      };
      MuiAutocomplete: {
        defaultProps: { fullWidth: boolean };
        styleOverrides: {};
      };
      MuiAvatar: { styleOverrides: { root: { fontSize: string } } };
      MuiToggleButton: {
        defaultProps: {
          color: string;
          size: string;
          disableRipple: boolean;
        };
        styleOverrides: {
          root: {
            'boxShadow': string;
            'textTransform': string;
            '&:hover': { boxShadow: string };
            '&:active': { boxShadow: string };
            '&.Mui-selected': { backgroundColor: string };
          };
          sizeSmall: {
            minHeight: number;
            minWidth: number;
            fontSize: number;
            padding: string;
          };
          sizeMedium: {
            minHeight: number;
            minWidth: number;
            fontSize: number;
            padding: string;
          };
          sizeLarge: {
            minHeight: number;
            minWidth: number;
            fontSize: number;
            padding: string;
          };
        };
      };
      MuiIconButton: {
        defaultProps: { color: string };
        styleOverrides: { sizeSmall: { fontSize: number } };
      };
      MuiCardContent: { styleOverrides: { root: { padding: string } } };
      MuiCardActions: {
        styleOverrides: { root: { padding: string } };
      };
      MuiCheckbox: { styleOverrides: {} };
      MuiChip: { styleOverrides: {} };
      MuiBackdrop: { defaultProps: { 'data-qa': string } };
      MuiDialog: {
        defaultProps: { 'data-qa': string };
        styleOverrides: {
          paperWidthSm: { maxWidth: string };
          paperFullScreen: {
            width: string;
            maxWidth: string;
            maxHeight: string;
            margin: string;
            borderRadius: string;
          };
        };
      };
      MuiDialogActions: {
        styleOverrides: { root: { padding: string } };
      };
      MuiFormControlLabel: { styleOverrides: {} };
      MuiInputAdornment: { styleOverrides: {} };
      MuiInputBase: {
        styleOverrides: {
          root: { '&.MuiInputBase-adornedEnd': { paddingRight: number } };
        };
      };
      MuiLink: {
        defaultProps: { underline: string };
        styleOverrides: {
          root: { '&:hover': { cursor: string } };
          underlineNone: {
            '&:focus, &:hover, &:visited, &:link, &:active': {
              textDecoration: string;
            };
          };
        };
      };
      MuiListItemSecondaryAction: {
        styleOverrides: {
          root: {
            display: string;
            textAlign: string;
            alignItems: string;
            right: number;
            position: string;
            top: number;
            transform: string;
          };
        };
      };
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: string;
            fontSize: number;
            minWidth: string;
          };
        };
      };
      MuiListItemText: {
        defaultProps: {
          secondaryTypographyProps: {
            variant: string;
            display: string;
            alignItems: string;
          };
        };
        styleOverrides: {};
      };
      MuiListItemAvatar: { styleOverrides: {} };
      MuiMenu: { defaultProps: { elevation: number }; styleOverrides: {} };
      MuiMenuItem: {
        defaultProps: { disableRipple: boolean };
        styleOverrides: {};
      };
      MuiPopover: { defaultProps: {}; styleOverrides: { root: {} } };
      MuiFormControl: {
        defaultProps: { fullWidth: boolean };
        styleOverrides: {};
      };
      MuiFormGroup: { styleOverrides: {} };
      MuiRadio: { styleOverrides: {} };
      MuiSelect: {
        defaultProps: { fullWidth: boolean; variant: string };
        styleOverrides: {
          select: {
            'textAlign': string;
            'paddingLeft': string;
            '&:focus': { backgroundColor: string };
            '& .MuiListItemText-primary': { lineHeight: string };
            '& .MuiListItemText-secondary': {
              textOverflow: string;
              overflow: string;
            };
          };
        };
      };
      MuiSwitch: {
        defaultProps: { disableRipple: boolean };
        styleOverrides: {};
      };
      MuiTypography: {
        defaultProps: { variantMapping: { groupTitle: string } };
        styleOverrides: {};
      };
      MuiTableContainer: {
        styleOverrides: {
          root: { padding: string; border: string };
        };
      };
      MuiTableCell: { styleOverrides: {} };
      MuiTableRow: { styleOverrides: { head: { height: string } } };
      MuiTableBody: { styleOverrides: {} };
      MuiTableFooter: { styleOverrides: {} };
      MuiTabs: {
        styleOverrides: {
          indicator: {
            display: string;
            justifyContent: string;
            backgroundColor: string;
          };
        };
      };
      MuiTab: {
        defaultProps: { disableRipple: boolean };
        styleOverrides: {};
      };
      MuiTextField: {
        defaultProps: { variant: string; fullWidth: boolean };
        styleOverrides: {};
      };
      MuiFormHelperText: { styleOverrides: {} };
      MuiInputLabel: {
        styleOverrides: { shrink: { fontSize: number; top: number } };
      };
      MuiFilledInput: {
        defaultProps: { disableUnderline: boolean };
        styleOverrides: {};
      };
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: { '& legend': { width: string } };
        };
      };
      MuiToggleButtonGroup: { styleOverrides: {} };
      MuiSvgIcon: {
        styleOverrides: {
          fontSizeLarge: { fontSize: string };
          fontSizeSmall: { fontSize: string };
        };
      };
      MuiDataGrid: {
        styleOverrides: {
          main: { overflow: string };
          columnHeaderCheckbox: { padding: number };
        };
      };
    };
    palette: {
      mode: string;
      primary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
        lighter: string;
        darker: string;
      };
      neutral: {
        main: string;
        dark: string;
        lighter: string;
        light: string;
        darker: string;
        contrastText: string;
      };
      secondary: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
        darker: string;
      };
      error: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
        lighter: string;
        darker: string;
      };
      success: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
        lighter: string;
        darker: string;
      };
      warning: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
        lighter: string;
        darker: string;
      };
      ocean: { light: string; main: string };
      black: { main: string };
      system: { red: string };
      disabled: { main: string };
      bg: { superLightPurple: string; vividLightPurple: string };
      helpers: { light: string; main: string };
      contrastThreshold: number;
      tonalOffset: number;
      common: { black: string; white: string };
      info: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
        lighter: string;
        darker: string;
      };
      grey: {
        '50': string;
        '100': string;
        '200': string;
        '300': string;
        '400': string;
        '500': string;
        '600': string;
        '700': string;
        '800': string;
        '900': string;
        'A100': string;
        'A200': string;
        'A400': string;
        'A700': string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
        tertiary: string;
        contrastText: string;
      };
      divider: string;
      background: { paper: string; default: string };
      action: {
        active: string;
        hover: string;
        hoverOpacity: number;
        selected: string;
        selectedOpacity: number;
        disabled: string;
        disabledBackground: string;
        disabledOpacity: number;
        focus: string;
        focusOpacity: number;
        activatedOpacity: number;
      };
      errorSecondary: {
        main: string;
        dark: string;
        darker: string;
        contrastText: string;
      };
      tertiary: {
        main: string;
        lighter: string;
        light: string;
        dark: string;
        darker: string;
        contrastText: string;
      };
      dataVisualization: {
        category1: string;
        category2: string;
        category3: string;
        category4: string;
        category5: string;
        category6: string;
        category7: string;
        category8: string;
        category9: string;
      };
    };
    shape: { borderRadius: number };
    typography: {
      fontFamily: string;
      h1: {
        'fontWeight': string;
        'fontSize': string;
        'lineHeight': string;
        'letterSpacing': string;
        'color': string;
        'fontFamily': string;
        '&.semi-bold': { fontWeight: number };
        '@media (max-width: 600px)': {
          '&:not(.unresponsive)': {
            fontSize: string;
            letterSpacing: string;
            lineHeight: string;
          };
        };
      };
      h2: {
        'fontWeight': string;
        'fontSize': string;
        'lineHeight': string;
        'letterSpacing': string;
        'color': string;
        'fontFamily': string;
        '@media (max-width: 600px)': {
          '&:not(.unresponsive)': {
            fontSize: string;
            letterSpacing: string;
            lineHeight: string;
          };
        };
      };
      h3: {
        'fontWeight': string;
        'fontSize': string;
        'lineHeight': string;
        'letterSpacing': string;
        'color': string;
        'fontFamily': string;
        '&.subtitle': { color: string };
      };
      h4: {
        'fontWeight': string;
        'fontSize': string;
        'lineHeight': string;
        'letterSpacing': string;
        'color': string;
        'fontFamily': string;
        '&.semi-bold': { fontWeight: number };
        '&.subtitle': {
          lineHeight: string;
          letterSpacing: string;
          fontWeight: number;
        };
        '@media (min-width: 960px)': {
          fontSize: string;
          lineHeight: string;
        };
      };
      h5: {
        fontFamily: string;
        fontWeight: number;
        fontSize: number;
        lineHeight: string;
        letterSpacing: string;
        color: string;
      };
      h6: {
        'fontFamily': string;
        'fontWeight': number;
        'fontSize': number;
        'lineHeight': string;
        'letterSpacing': string;
        'color': string;
        '&.subtitle': { fontWeight: number };
      };
      body1: {
        fontFamily: string;
        fontWeight: string;
        fontSize: number;
        lineHeight: string;
        letterSpacing: string;
        color: string;
      };
      body2: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: number;
        letterSpacing: string;
        color: string;
      };
      htmlFontSize: number;
      fontSize: number;
      fontWeightLight: number;
      fontWeightRegular: number;
      fontWeightMedium: number;
      fontWeightBold: number;
      subtitle1: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: number;
      };
      subtitle2: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: number;
      };
      button: {
        fontFamily: string;
        fontWeight: string;
        fontSize: string;
        lineHeight: number;
        textTransform: string;
        letterSpacing: string;
      };
      caption: {
        fontFamily: string;
        fontWeight: string;
        fontSize: string;
        lineHeight: string;
        letterSpacing: string;
      };
      overline: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: number;
        textTransform: string;
      };
      inherit: {
        fontFamily: string;
        fontWeight: string;
        fontSize: string;
        lineHeight: string;
        letterSpacing: string;
      };
      groupTitle: {
        fontSize: string;
        letterSpacing: string;
        fontWeight: string;
        lineHeight: string;
        textTransform: string;
        color: string;
        display: string;
      };
    };
    unstable_sxConfig: {
      border: { themeKey: string };
      borderTop: { themeKey: string };
      borderRight: { themeKey: string };
      borderBottom: { themeKey: string };
      borderLeft: { themeKey: string };
      borderColor: { themeKey: string };
      borderTopColor: { themeKey: string };
      borderRightColor: { themeKey: string };
      borderBottomColor: { themeKey: string };
      borderLeftColor: { themeKey: string };
      outline: { themeKey: string };
      outlineColor: { themeKey: string };
      borderRadius: { themeKey: string };
      color: { themeKey: string };
      bgcolor: { themeKey: string; cssProperty: string };
      backgroundColor: { themeKey: string };
      p: {};
      pt: {};
      pr: {};
      pb: {};
      pl: {};
      px: {};
      py: {};
      padding: {};
      paddingTop: {};
      paddingRight: {};
      paddingBottom: {};
      paddingLeft: {};
      paddingX: {};
      paddingY: {};
      paddingInline: {};
      paddingInlineStart: {};
      paddingInlineEnd: {};
      paddingBlock: {};
      paddingBlockStart: {};
      paddingBlockEnd: {};
      m: {};
      mt: {};
      mr: {};
      mb: {};
      ml: {};
      mx: {};
      my: {};
      margin: {};
      marginTop: {};
      marginRight: {};
      marginBottom: {};
      marginLeft: {};
      marginX: {};
      marginY: {};
      marginInline: {};
      marginInlineStart: {};
      marginInlineEnd: {};
      marginBlock: {};
      marginBlockStart: {};
      marginBlockEnd: {};
      displayPrint: { cssProperty: boolean };
      display: {};
      overflow: {};
      textOverflow: {};
      visibility: {};
      whiteSpace: {};
      flexBasis: {};
      flexDirection: {};
      flexWrap: {};
      justifyContent: {};
      alignItems: {};
      alignContent: {};
      order: {};
      flex: {};
      flexGrow: {};
      flexShrink: {};
      alignSelf: {};
      justifyItems: {};
      justifySelf: {};
      gap: {};
      rowGap: {};
      columnGap: {};
      gridColumn: {};
      gridRow: {};
      gridAutoFlow: {};
      gridAutoColumns: {};
      gridAutoRows: {};
      gridTemplateColumns: {};
      gridTemplateRows: {};
      gridTemplateAreas: {};
      gridArea: {};
      position: {};
      zIndex: { themeKey: string };
      top: {};
      right: {};
      bottom: {};
      left: {};
      boxShadow: { themeKey: string };
      width: {};
      maxWidth: {};
      minWidth: {};
      height: {};
      maxHeight: {};
      minHeight: {};
      boxSizing: {};
      fontFamily: { themeKey: string };
      fontSize: { themeKey: string };
      fontStyle: { themeKey: string };
      fontWeight: { themeKey: string };
      letterSpacing: {};
      textTransform: {};
      lineHeight: {};
      textAlign: {};
      typography: { cssProperty: boolean; themeKey: string };
    };
    mixins: {
      toolbar: {
        'minHeight': number;
        '@media (min-width:0px)': {
          '@media (orientation: landscape)': { minHeight: number };
        };
        '@media (min-width:600px)': { minHeight: number };
      };
    };
    shadows: string[];
    transitions: {
      easing: {
        easeInOut: string;
        easeOut: string;
        easeIn: string;
        sharp: string;
      };
      duration: {
        shortest: number;
        shorter: number;
        short: number;
        standard: number;
        complex: number;
        enteringScreen: number;
        leavingScreen: number;
      };
    };
    zIndex: {
      mobileStepper: number;
      fab: number;
      speedDial: number;
      appBar: number;
      drawer: number;
      modal: number;
      snackbar: number;
      tooltip: number;
    };
  };
};
