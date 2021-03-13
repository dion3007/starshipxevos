import React from 'react'
import Link from 'next/link'
import { AppBar, Toolbar, IconButton, Typography, InputBase } from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Header({ searchStarship, noSearch }) {
    const classes = useStyles()
    const onChangeSearch = (event) => {
        searchStarship(event.target.value)
    };
    return (
        <AppBar
            color="default"
        >
            <Toolbar>
                <Link href="/">
                    <IconButton
                        edge="start"
                        color="inherit"
                    >
                        <img
                            src="/images/evos.png"
                            width="50"
                            height="50"
                        />
                    </IconButton>
                </Link>
                <Typography className={classes.title} variant="h6">
                    StarshipXEvos
                </Typography>
                {!noSearch && <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={onChangeSearch}
                    />
                </div>}
            </Toolbar>
        </AppBar>
    )
}
