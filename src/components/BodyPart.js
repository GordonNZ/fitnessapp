import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

function BodyPart({ item, BodyPart, setBodyPart }) {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='cneter'
      className='bodyPart-card'
      sx={{
        borderTop: BodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px',
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img
        src={Icon}
        alt='gym'
        style={{ width: '40px', height: '40px', marginTop: '30px' }}
      />
      <Typography
        fontSize='24px'
        fontWeight='bold'
        color='#3A1212'
        textTransform='capitalize'
      >
        {item}
      </Typography>
    </Stack>
  );
}

export default BodyPart;
