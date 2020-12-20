import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Paper from "@material-ui/core/Paper";

const SearchMovie = (props) => {
  const [name, setName] = useState("");
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="standard-adornment-amount">
              Search movie
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              value={name}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <button
            onClick={() => {
              props.onClick(name);
            }}
          >
            hkhk
          </button>
        </Grid>
      </Grid>
    </>
  );
};
export default SearchMovie;
