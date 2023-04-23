import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Chip, Modal, TextField } from '@mui/material';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='flex flex-row justify-between items-center bg-white h-[60px] px-2 drop-shadow'>
      <h3>VMaker</h3>
      <div className='flex flex-row gap-3 items-center'>
        <Chip
          sx={{ padding: 1 }}
          label='Invoke People'
          variant='outlined'
          onClick={handleOpen}
          icon={<PersonAddAltIcon />}
        />
        <span>Upgrade</span>
        <span>Help Center</span>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          className='absolute top-[50%] left-[50%] w-[400px] bg-white shadow p-4'          
        >
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Invite people
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Invite your team to create and share videos together.
          </Typography>
          <TextField placeholder='Email Address' fullWidth sx={{ mt: 2 }} />
          <Button
            fullWidth={true}
            onClick={handleClose}
            variant='outlined'
            sx={{ mt: 2 }}
          >
            Send Invite
          </Button>          
        </Box>
      </Modal>
    </div>
  );
};
export default Header;
