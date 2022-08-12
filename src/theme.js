import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
  components: {
    MuiDialog: {
        styleOverrides: {
            paper: {
                maxWidth: '747px',
                width: '100%'
            }
        }
    },
    MuiLink: {
        styleOverrides: {
            root: {
                textDecoration:'none',
                fontWeight:400,
                ':hover': {
                    color: '#1976d2',
                    textDecoration:'underline',
                }
            }
        }
    }
  }
});

export {theme}