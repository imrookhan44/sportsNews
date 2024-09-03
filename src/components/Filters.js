import React from 'react';
import { Grid, TextField, InputLabel, FormControl, Button } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Filters = ({ dateFilter, setDateFilter, teamFilter, setTeamFilter }) => {

  const handleDateChange = (date) => {
    setDateFilter(date);
  };

  const handleTeamChange = (event) => {
    setTeamFilter(event.target.value);
  };

  const handleClearFilters = () => {
    setDateFilter(null);
    setTeamFilter('');
  };

  return (
    <Grid container spacing={2} sx={{ mb: 4 }}>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel shrink>Date</InputLabel>
          <DatePicker
            selected={dateFilter}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            customInput={<TextField />}
            isClearable
            placeholderText="Select Date"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Team"
          value={teamFilter}
          onChange={handleTeamChange}
          fullWidth
          placeholder="Enter team name"
        />
      </Grid>
      <Grid item xs={12} sm={2} display="flex" alignItems="center">
        <Button variant="outlined" color="secondary" onClick={handleClearFilters} fullWidth>
          Clear
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filters;
