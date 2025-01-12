import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `$${value}`;
}

const minDistance = 10;

export default function MinimumDistanceSlider() {
  const [value1, setValue1] = React.useState<number[]>([20, 100]);

  const handleChange1 = (
    _: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={200}
        step={1}
        disableSwap
        sx={{
          color: '#FFFFFF',
          height: 6,
          '& .MuiSlider-thumb': {
            height: 20,
            width: 20,
            backgroundColor: '#000000',
            border: '2px solid currentColor',
            '&:hover': {
              boxShadow: '0 0 0 8px rgba(213, 63, 140, 0.16)',
            },
          },
          '& .MuiSlider-rail': {
            opacity: 0.3,
            backgroundColor: '#a3a3a3',
          },
          '& .MuiSlider-track': {
            backgroundColor: '#000000',
          },
        }}
      />
      <div className="flex justify-between mt-2">
        <span className="text-sm text-gray-600">${value1[0]}</span>
        <span className="text-sm text-gray-600">${value1[1]}</span>
      </div>
    </Box>
  );
}
