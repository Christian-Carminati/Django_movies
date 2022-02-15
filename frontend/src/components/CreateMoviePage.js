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

    render(){
        return <Grid container spacing={1}>
            <Grid items xs={12} align="center">
                <Typography component="h4" variant="h4">
                    CreateMoviePage
                </Typography>
            </Grid>
            <Grid items xs={12} align="center">
                <FormControl>
                    <FormHelperText>
                        
                    </FormHelperText>
                    <TextField id="standard-basic" label="Name" variant="standard" />
                </FormControl>
                
            </Grid>
        </Grid>
    }
}