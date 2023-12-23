"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating({rate}) {
  const [value, setValue] = React.useState(rate);

  return (
    <Box
      sx={{
        '& > legend': { mt: 0 },
      }}
    >
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
}