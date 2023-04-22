import { Email, Facebook, Google, Lock, WhatsApp } from '@mui/icons-material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Avatar, Button, Chip, InputAdornment, TextField } from '@mui/material';
import LoginLeftImg from '../assets/login.jpg';
import Image from 'next/image';
import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function Login() {
  const [whatsAppLogin, setWhatsAppLogin] = useState(false);
  useEffect(() => {
    // Define the 'otpless' function
    window.otpless = otplessUser => {
      // Retrieve the user's details after successful login
      const waName = otplessUser.waName;
      const waNumber = otplessUser.waNumber;

      alert('User Name is ' + waName + ' ' + waNumber);

      // Handle the signup/signin process
      // ...
    };
  }, []);

  return (
    <div className='flex flex-row p-0 md:p-10 font-sans justify-center bg-[#F0F3F9] h-[100vh]'>
      <div className='hidden md:flex bg-[#2F67CD] w-[50%] rounded-tl-lg rounded-bl-lg text-white  items-center justify-center relative'>
        <div
          className='absolute w-[120px] md:w-[300px] h-[200px] top-[0px] right-[40px] bg-[#2f67cd] rounded-[50%] opacity-[0.4]'
          style={{
            transform: 'rotate(-45deg) translateY(33px) translateX(-64px)'
          }}
        ></div>
        <div
          className='absolute w-[120px] md:w-[300px] h-[200px] bottom-[120px] left-[40px] bg-[#2f67cd] rounded-[50%] opacity-[0.4]'
          style={{
            transform: 'rotate(-45deg) translateY(33px) translateX(-64px)'
          }}
        ></div>
        <Image
          className='md:w-[300px] md:h-[240px] lg:w-[500px] lg:h-[400px] p-10'
          src={LoginLeftImg}
        />
      </div>
      <div className=' relative flex flex-col items-center bg-white gap-4 w-[100%] md:w-[50%] rounded-tr-lg rounded-br-lg '>
        <div className='absolute z-10 w-[120px] md:w-[120px] h-[200px] top-[0px] right-[0px] bg-[#2f67cd] rounded-tl-[50%] rounded-bl-[50%] rounded-tr-[0] rounded-br-[50%]  opacity-[0.4]'></div>
        <div
          className='absolute w-[120px] md:w-[120px] h-[200px] bottom-[80px] -left-[40px] bg-[#2f67cd] rounded-[50%] opacity-[0.4]'
          style={{
            transform: 'rotate(-40deg) translateY(33px) translateX(-64px)'
          }}
        ></div>
        <Avatar
          sx={{ width: 56, height: 56, bgcolor: '#2F67CD', marginTop: 10 }}
        >
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
              fullWidth={true}
              onClick={() => setWhatsAppLogin(true)}
            />
            <Chip
              variant='outlined'
              icon={<WhatsApp style={{ color: 'green' }} />}
              onClick={() => setWhatsAppLogin(true)}
              label='Whatsapp'
              fullWidth={true}
            />
            <Chip
              variant='outlined'
              icon={<Facebook style={{ color: '#0E97F5' }} />}
              label='Facebook'
              fullWidth={true}
              onClick={() => setWhatsAppLogin(true)}
            />
          </div>
        </div>
      </div>
      {/*  OTPless SDK */}
      {whatsAppLogin ? <Script src='https://otpless.com/auth.js' /> : null}
    </div>
  );
}
