import Link from 'next/link'
import { Grid as GridMaterial, Paper, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    paper: {
        padding: 10,
        cursor: 'pointer'
    },
    description: {
        marginTop: 10
    },
    rating: {
        fontSize: "small",
    }
}))

export default function Grid({ data }) {
    const classes = useStyles()
    return (
        <GridMaterial container spacing={2}>
            {data && data.map((starship, index) => {
                return <Link href={`/starship/${starship.url.split('/')[5]}/starship`} key={index}>
                    <GridMaterial item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5">{starship.name}</Typography>
                            <Typography variant="subtitle2">{starship.model}</Typography>
                            <GridMaterial container spacing={3} className={classes.description}>
                                <GridMaterial item xs={6}>
                                    <Typography>Manufacturer: {starship.manufacturer}</Typography>
                                    <Typography>Cost In Credits: {starship.cost_in_credits}</Typography>
                                    <Typography>Length: {starship.length} Feets</Typography>
                                    <Typography>Max Atmospher: {starship.max_atmosphering_speed}</Typography>
                                    <Typography>Crew: {starship.crew} Crew</Typography>
                                    <Typography>Passengers: {starship.passengers} People</Typography>
                                </GridMaterial>
                                <GridMaterial item xs={6}>
                                    <Typography>Cargo: {starship.cargo_capacity}</Typography>
                                    <Typography>Consumables: {starship.consumables}</Typography>
                                    <Typography>Hyperdrive Rating: {starship.hyperdrive_rating} <Rating className={classes.rating} value={starship.hyperdrive_rating} precision={0.5} readOnly /></Typography>
                                    <Typography>MLGT: {starship.MGLT}</Typography>
                                    <Typography>Class: {starship.starship_class}</Typography>
                                </GridMaterial>
                            </GridMaterial>
                        </Paper>
                    </GridMaterial>
                </Link>
            })}
        </GridMaterial>
    )
}