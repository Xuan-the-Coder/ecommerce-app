import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toobar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () =>{
    return(
        <div>
            <AppBar position="static">
                <Toobar>
                    <Typography variant="title" color="inherit">
                        Panda Tea
                    </Typography>
                </Toobar>
            </AppBar>
        </div>

    )
}

export default NavBar;