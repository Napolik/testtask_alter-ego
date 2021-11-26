import React from "react";
import {Link} from "react-router-dom";
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    navItem: {
        listStyleType: 'none',
        margin: {
            right: '20px',
        },
        '& a': {
            fontSize: '20px',
            color: 'black'
          }      
    },
    navContainer: {
        display: 'flex',
        flexDirection: 'row'
    }
  })
  
const Nav = () => {
    const classes = useStyles();
    return(
        <div>
            <ul className={classes.navContainer}>
                <li className={classes.navItem}><Link to="/">Home</Link></li>
                <li className={classes.navItem}><Link to="/news/">News</Link></li>
                <li className={classes.navItem}><Link to="/profile/">Profile</Link></li>
            </ul> 
        </div>
    )
}

export default Nav;