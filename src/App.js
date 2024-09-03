import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import Header from './components/Header';
import Filters from './components/Filters';
import NewsList from './components/NewsList';

function App() {
  const [news, setNews] = useState([]);
  const [dateFilter, setDateFilter] = useState('');
  const [teamFilter, setTeamFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


  const fetchNewsByTeam = async (teamId) => {
    try {
      const response = await axios.get(
        `https://football-news11.p.rapidapi.com/api/news-by-team?team_id=${teamId}&page=1&lang=en`,
        {
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
            'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST
          },
        }
      );
      return response.data.result;
    } catch (err) {
      setError('Failed to fetch news by team.');
      console.error(err);
      return [];
    }
  };

  const fetchNewsByDate = async (date) => {
    const formattedDate = formatDate(date);
    try {
      const response = await axios.get(
        `https://football-news11.p.rapidapi.com/api/news-by-date?date=${formattedDate}&lang=en&page=1`,
        {
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
            'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST
          },
        }
      );
      return response.data.result;
    } catch (err) {
      setError('Failed to fetch news by date.');
      console.error(err);
      return [];
    }
  };

  const fetchFilteredNews = async () => {
    setLoading(true);
    setError(null);
    try {
      let fetchedNews = [];
      if (teamFilter) {
        fetchedNews = await fetchNewsByTeam(teamFilter);
      }
      if (dateFilter) {
        const dateNews = await fetchNewsByDate(dateFilter);
        fetchedNews = fetchedNews.concat(dateNews);
      }
      if (!teamFilter && !dateFilter) {
        setError('Please apply a filter to see results.');
      } else {
        setNews(fetchedNews);
      }
    } catch (err) {
      setError('An error occurred while fetching news.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilteredNews();
  }, [dateFilter, teamFilter]);

  return (
    <Container maxWidth="xl">
      <Header />
      <Filters
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
        teamFilter={teamFilter}
        setTeamFilter={setTeamFilter}
      />
      {loading && (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Typography color="error" align="center">
          {error}
        </Typography>
      )}
      {!loading && !error && <NewsList news={news} />}
    </Container>
  );
}

export default App;

