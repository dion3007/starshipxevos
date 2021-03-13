import React from 'react'
import Head from 'next/head'
import { Button, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { getAllStarships } from '../helper/api'
import constant from '../constant'
import Grid from '../components/Grid'
import Header from '../components/Header'

const useStyles = makeStyles(() => ({
  main: {
    marginTop: 100,
    textAlign: 'center'
  },
  button: {
    marginTop: 20,
    marginBottom: 20
  }
}))

export default function Home({ starships }) {
  const classes = useStyles()
  const [objStarship, setObjStarship] = React.useState(starships)
  const [arrStarship, setArrStarship] = React.useState(starships.results)
  const loadMoreStarships = async ({ page }) => {
    if (page !== null) {
      const starship = await axios.get(`${constant.BASE_URL}/starships/?${page.next.split('?').pop()}`)
      setObjStarship(starship.data)
      setArrStarship(arrStarship => [...arrStarship, ...starship.data.results])
    }
  }
  const searchStarship = async (keyword) => {
    const starship = await axios.get(`${constant.BASE_URL}/starships/?search=${keyword}`)
    setObjStarship(starship.data)
    setArrStarship(starship.data.results)
  }
  return (
    <div>
      <Head>
        <title>Starships App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header searchStarship={searchStarship} noSearch={false} />
      <Container className={classes.main}>
        <Grid data={arrStarship} />
        {objStarship.next !== null && <Button
          className={classes.button}
          onClick={() => loadMoreStarships({ page: objStarship })}
          variant="contained"
          color="primary"
        >
          Load More
        </Button>}
      </Container>
    </div>
  )
}

export async function getStaticProps() {
  const starships = await getAllStarships()
  return {
    props: {
      starships,
    }
  }
}
