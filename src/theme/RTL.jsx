import {
  createMuiTheme,
  StylesProvider,
  jssPreset,
  ThemeProvider,
} from "@material-ui/core/styles";
import rtl from "jss-rtl";
import { create } from "jss";
import CssBaseLine from "@material-ui/core/CssBaseline";
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export const theme = createMuiTheme({
  palette: {
    background: {
      default: "#edf6f9",
    },
    primary: {
      main: "#2F80ED",
    },
  },
  typography: {
    fontFamily: "Shabnam",
  },
  tableCell: {
    fontFamily: "ShabnamFD",
  },
  direction: "rtl",
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          padding: "2rem",
          fontFamily: "ShabnamFD",
        },
      },
    },
  },
});

const RTL = (props) => {
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <CssBaseLine />
        {props.children}
      </ThemeProvider>
    </StylesProvider>
  );
};
export default RTL;
