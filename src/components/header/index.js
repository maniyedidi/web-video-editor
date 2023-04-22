import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Chip } from '@mui/material';

const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center bg-white h-[60px] px-2 drop-shadow'>
      <h3>VMaker</h3>
      <div className='flex flex-row gap-3 items-center'>
        <Chip
          sx={{ padding: 1 }}
          label='Invoke People'
          icon={<PersonAddAltIcon />}
        />
        <span>Upgrade</span>
        <span>Help Center</span>
      </div>
    </div>
  );
};
export default Header;
