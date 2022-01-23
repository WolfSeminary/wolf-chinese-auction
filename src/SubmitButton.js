import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const BootstrapButton = styled(Button)({
  fontSize: 17, margin: 'auto', padding: '6px 12px'
});

export default function SubmitButton() {
  return (
    <Stack spacing={2} direction="column" >
      <BootstrapButton variant="contained" disableRipple>
        אשר הכנסת סכום מדויק לתשלום בקופות הייעודיות
      </BootstrapButton>
      👇
    </Stack>
  );
}
