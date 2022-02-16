import React, { Component} from "react";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { FormHelperText } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Link } from "@material-ui/core";

export default class CreateMoviePage extends Component {
    constructor(props) {
        super(props);
    }
    handleRoomButtonPressed() 
    {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            votes_to_skip: this.state.votesToSkip,
            guest_can_pause: this.state.guestCanPause,
          }),
        };
        fetch("/api/movies/add", requestOptions)
          .then((response) => response.json())
          .then((data) => console.log(data));
    }

    render(){
        return (
            <Grid container spacing={1}>
                <Grid items xs={12} align="center">
                    <Typography component="h4" variant="h4">
                        CreateMoviePage
                    </Typography>
                </Grid>
                <Grid items xs={12} align="center">
                    <FormControl component="fieldset">
                        <TextField required={true} id="standard-basic" label="Name" variant="standard" />
                            <FormHelperText>
                                <div>prova</div>
                            </FormHelperText>
                        <TextField required={true} id="adwdadwa" label="Movie Director" variant="standard" />
                        <FormHelperText>
                            <div align="center">Votes Required To Skip Song</div>
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Basic example"
                        value={value}
                        onChange={(newValue) => {
                        setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={this.handleRoomButtonPressed}
                    >
                        Create A Room
                    </Button>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button color="secondary" variant="contained" to="/" component={Link}>
                        Back
                    </Button>
                </Grid>
            </Grid>
        );
    }
}