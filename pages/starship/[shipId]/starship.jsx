import Head from 'next/head'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { getAllStarships, getDetailStarships } from '../../../helper/api'
import Header from '../../../components/Header'
import Paper from '../../../components/Paper'

const useStyles = makeStyles(() => ({
    main: {
        marginTop: 100,
    }
}))

export default function starship({ starships }) {
    const classes = useStyles()
    return (
        <div>
            <Head>
                <title>Starships App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header noSearch={true} />
            <Container className={classes.main}>
                <Paper starship={starships} />
            </Container>
        </div>
    )
}

export async function getStaticPaths() {
    const starships = await getAllStarships()
    const paths = starships.results.map((starship) => ({
        params: { shipId: String(starship.url.split('/')[5]) },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps(params) {
    const shipId = parseFloat(params.params.shipId)
    const starships = await getDetailStarships({ id: shipId })
    return {
        props: {
            starships,
        }
    }
}
