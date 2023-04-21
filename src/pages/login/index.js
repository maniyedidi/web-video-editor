import { Email, Facebook, Google, Lock, WhatsApp } from '@mui/icons-material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Avatar, Button, Chip, InputAdornment, TextField } from '@mui/material';

export default function Login() {
  return (
    <div className='flex flex-row p-10 font-sans justify-center bg-[#F0F3F9] h-[100vh]'>
      <div className='hidden md:block p-10 bg-[#2F67CD] w-[50%] rounded-tl-lg rounded-bl-lg text-white'>
        <div className='text-[70px]'>Nice to see you again.</div>
        <div>
          Don't have an account yet? <Button variant='text' >Sign up now</Button>
        </div>
      </div>
      <div className=' flex flex-col items-center bg-white gap-4 w-[100%] md:w-[50%] p-10 rounded-tr-lg rounded-br-lg '>
        <Avatar sx={{ width: 56, height: 56, bgcolor: '#2F67CD' }}>
          <AcUnitIcon />
        </Avatar>
        <h1 className='mb-4 text-[20px]'> Nice to see you again.</h1>
        <div className='flex flex-col gap-4 p-1 mb-10 w-[350px]'>
          <TextField
            fullWidth={true}
            label='Email'
            InputProps={{
              endAdornment: (
                <InputAdornment position='start'>
                  <Email />
                </InputAdornment>
              )
            }}
          />
          <TextField
            fullWidth={true}
            label='Password'
            type='password'
            InputProps={{
              endAdornment: (
                <InputAdornment position='start'>
                  <Lock />
                </InputAdornment>
              )
            }}
          />
          <Button variant='contained'>Log in</Button>
        </div>
        <div>          
          <div className='flex flex-col gap-4 w-[350px]'>
            <Chip
              variant='outlined'
              icon={<Google style={{ color: '#4384F3' }} />}
              label='Google'
              fullWidth
            />
            <Chip
              variant='outlined'
              icon={<WhatsApp style={{ color: 'green' }} />}
              label='Whatsapp'
              fullWidth
            />
            <Chip
              variant='outlined'
              icon={<Facebook style={{ color: '#0E97F5' }} />}
              label='Facebook'
              fullWidth
            />
          </div>
        </div>
      </div>
    </div>
  );
}
