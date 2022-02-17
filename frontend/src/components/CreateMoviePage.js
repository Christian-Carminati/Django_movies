import React, { Component} from "react";
import { Button,Grid,Typography,TextField,FormControl,FormHelperText,FormControlLabel } from "@material-ui/core";
import { Link } from "@material-ui/core";

export default class CreateMoviePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            movie_director:null,
            release_date:null,
            running_time:null,
            genre: []
          };
        this.handleRoomButtonPressed = this.handleRoomButtonPressed.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleNameChange(e) {
        this.setState({
          name: e.target.value,
        });
      }
      
    handleRoomButtonPressed() 
    {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: this.state.name,
            genre: this.state.genre
          }),
        };
        fetch("/api/movies/add", requestOptions)
          .then((response) => response.json())
          .then((data) => console.log(data));
        //console.log(this.state);
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
                        <TextField 
                        required={true} 
                        id="Name" 
                        label="Name" 
                        variant="standard"
                        onChange={this.handleNameChange}
                         />
                    </FormControl>
                </Grid>
                <Grid items xs={12} align="center">
                    <FormControl component="fieldset">
                        <TextField required={true} id="Movie_director" label="Movie director" variant="standard" />
                    </FormControl>
                </Grid>
                <Grid items xs={12} align="center">
                    <FormControl component="fieldset">
                        <TextField required={true} id="Running_time" label="Running time" variant="standard" />
                    </FormControl>
                </Grid>
                <Grid items xs={12} align="center">
                    <FormControl component="fieldset">
                        <TextField required={true} id="Release_date" label="Release date" variant="standard" />
                    </FormControl>
                </Grid>
                <Grid items xs={12} align="center">
                    <FormControl component="fieldset">
                        <TextField required={true} id="Genre" label="Genre" variant="standard" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={this.handleRoomButtonPressed}
                    >
                        Add a Movie
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