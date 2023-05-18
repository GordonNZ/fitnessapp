import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExerices from '../components/SearchExercises';
import Exercises from '../components/Exercises';

function Home() {
  return (
    <Box>
      <HeroBanner />
      <SearchExerices />
      <Exercises />
    </Box>
  );
}

export default Home;
