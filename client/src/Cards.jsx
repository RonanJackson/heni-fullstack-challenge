import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { useGetPrints } from './util/printsApi';
import Card from './Card';

const Cards = () => {
  const { isLoading, isError, error, data } = useGetPrints();

  if (isLoading) return <p>Loading Prints...</p>;
  if (isError) {
    console.error(error);
    return <p>There was a problem fetching Prints.</p>;
  }

  return (
    <Container maxWidth={false}>
      <div style={{ paddingTop: '2vh' }} />
      <Grid container spacing={2}>
        {data?.records.map((item) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card
              key={item.id}
              creditline={item.creditline}
              images={item.images}
              url={item.url}
              century={item.century}
              culture={item.culture}
              title={item.title}
              technique={item.technique}
            />
          </Grid>
        ))}
      </Grid>
      <div style={{ paddingTop: '2vh' }}>test</div>
    </Container>
  );
};

export default Cards;
