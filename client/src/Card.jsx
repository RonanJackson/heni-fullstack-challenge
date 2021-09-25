import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
  },
  image: {
    height: '35vh',
    width: '30vh',
    objectFit: 'contain',
    padding: '1vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  },
});

const OutlinedCard = ({
  key,
  creditline,
  images,
  url,
  century,
  culture,
  title,
  technique,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" key={key}>
      <CardContent>
        <Typography variant="h1" component="h1" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {culture} - {century}
        </Typography>
        <img
          src={images[0].baseimageurl}
          alt={title}
          className={classes.image}
        />
        <Typography variant="body2" component="p" color="textSecondary">
          {technique}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {creditline}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            window.open(url);
          }}
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default OutlinedCard;
