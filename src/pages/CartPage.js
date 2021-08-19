import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '736ch',
        backgroundColor: theme.palette.background.paper,

  },
  inline: {
    display: 'inline',
  },
}));
function CartPage() {
    const classes = useStyles();
    
    return (
        <div className="container">
            
            <div className="row">
                <div className="col-md-8">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            Cras justo odio
                        </li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
    )
}

export default CartPage