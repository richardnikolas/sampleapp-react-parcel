import React, { useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { useQueryClient, useQuery } from 'react-query';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { HeroCard } from '../shared/components';
import './HeroesPage.css';

const PER_PAGE = 15;

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    backgroundColor: theme.palette.background.darkBlue
  },
  textWrapper: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 20
  },
  mainText: {
    fontSize: '50px',
    margin: '0 30px',
    color: '#FFFFFF'
  }
}));

const fetchHeroes = async () => {
  const { data } = await axios.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
  const heroes = data.filter(hero => hero.biography.alignment === 'good');
  return heroes;
};

const getHeroDescription = (hero) => {
  return `
    Full name: ${hero.biography.fullName !== "" ? hero.biography.fullName : hero.name} \n
    Race: ${hero.appearance.race ?? 'Unknown'} \n
    Publisher: ${hero.biography.publisher}
  `
};

const HeroesPage = () => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  const [heroesData, setHeroesData] = useState([]);

  const { status, data, error } = useQuery('fetchHeroes', fetchHeroes);

  if (status === 'success' && heroesData.length === 0)
    setHeroesData(data);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(heroesData.length / PER_PAGE);

  return (
    <Grid container justifyContent="center" direction="column" className={classes.container}>
      <Grid item xs={12} className={classes.textWrapper}>
        <h1 className={classes.mainText}>
          Welcome to the <span style={{ color: '#e8e108' }}>Heroes</span> Page!
        </h1>
      </Grid>

      <Grid item xs={12}>
        {heroesData.length > 0 ?
          <section className='heroesSection'>
            {heroesData.slice(offset, offset + PER_PAGE).map(hero => (
              <HeroCard
                name={hero.name}
                description={getHeroDescription(hero)}
                backgroundImage={hero.images.lg ?? hero.images.xl} key={hero.slug}
              />
            ))}
          </section>
          :
          null
        }
      </Grid>

      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageClick}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          previousLabel='Previous'
          nextLabel='Next'
          breakLabel='...'
          activeClassName={'active'}
          containerClassName={'pagination'}
          breakClassName={'break-me'}
        />
      </Grid>
    </Grid>
  );
};

export default HeroesPage;