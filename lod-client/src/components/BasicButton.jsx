import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({onClick,children,startIcon}) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={onClick} startIcon={startIcon} sx={{
        paddingX: 4,
        paddingY: 1,
        fontWeight: 'bold',
        textTransform: 'none',
        fontSize: '1rem',
        borderRadius: 2,
      }}> 
      {children}
      </Button>
    
    </Stack>
  );
}