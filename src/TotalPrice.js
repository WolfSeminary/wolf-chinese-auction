import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TotalPrice = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-read-only-input"
          label="סך לתשלום"
          defaultValue=""
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </Box>
  );
}
export default TotalPrice

