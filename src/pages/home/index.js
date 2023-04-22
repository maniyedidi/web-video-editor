import Header from '@/components/header';
import SideMenu from '@/components/side-menu';

const Home = () => {
  return (
    <div className=''>
      <Header />
      <div className='grid grid-cols-[240px_1fr] gap-2'>
        <SideMenu />
        <div>Main Container</div>
      </div>
    </div>
  );
};

export default Home;
