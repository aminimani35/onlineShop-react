import {
  Grid,
  Paper,
  TextField,
  makeStyles,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
const useStyles = makeStyles({
  FormWrapper: {
    margin: "1rem .5rem",
    backgroundColor: "Transparent",
    display: "flex",
    justifyContent: "center",
  },
  Form: {
    padding: "2rem 4rem",
    backgroundColor: "#fff",
    maxWidth: "40vw",
  },
  TextField: {
    width: "100%",
    marginTop: "1rem",
    border: "none !important",
    outline: "none",
    backgroundColor: "#e5e5e5",
    padding: ".5rem",
    borderRadius: ".6rem",
  },
});

const Form = () => {
  const classes = useStyles();
  return (
    <Grid item className={classes.FormWrapper}>
      <Paper className={classes.Form}>
        <Typography variant="h4" component="h4">
          ارتباط با ما
        </Typography>
        <form>
          <TextField
            disableUnderline={true}
            className={classes.TextField}
            placeholder="نام و نام خانوادگی"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PermIdentityIcon style={{ color: "red" }} />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />
          <TextField
            className={classes.TextField}
            placeholder="پست الکترونیکی"
            type="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PermIdentityIcon style={{ color: "red" }} />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />
          <TextField
            className={classes.TextField}
            multiline
            rows={4}
            placeholder="متن پیام"
            type="email"
            InputProps={{
              disableUnderline: true,
            }}
          />
        </form>
      </Paper>
    </Grid>
  );
};
export default Form;
