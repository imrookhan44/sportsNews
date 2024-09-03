import React from "react";
import { Grid, Typography } from "@mui/material";
import NewsCard from "./NewsCard";

const NewsList = ({ news }) => {
  if (news.length === 0) {
    return <Typography>No news found for the selected filters.</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {news.map((newsItem) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={newsItem.id || newsItem.title}
        >
          <NewsCard newsItem={newsItem} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsList;
