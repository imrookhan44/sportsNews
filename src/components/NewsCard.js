import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
const NewsCard = ({ newsItem }) => {
  console.log("🚀 ~ NewsCard ~ newsItem:", newsItem)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={newsItem?.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {newsItem?.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography>
          {newsItem?.published_at}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
