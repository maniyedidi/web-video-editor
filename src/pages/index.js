import { Button } from '@mui/material';

const MENU = ['Products', 'Pricing', 'Learn'];
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()
  return (
    <main className={styles.homeContainer}>
      <div className={styles.header}>
        <div className={`${styles.options}`}>
          {MENU.map(m => (
            <span className={styles.option} key={m}>
              {m}
            </span>
          ))}
        </div>
        <div className={`${styles.options}`}>
          <Button variant='outlined'>Login</Button>
          <Button variant='contained' color='primary'>
            Sign up
          </Button>
        </div>
      </div>
      <div className={styles.homeBody}>
        <Image
          src='/editor.png'
          className={styles.editorImage}
          width={800}
          height={600}
        />
        <div>
          <span>#Be Yourself</span>
          <div>Freedom For</div>
          <div>Your creative</div>
          <div>Ideas</div>
          <div>Break your limits in making your best videos</div>
          <div>with best online video editing platform</div>

          <Button variant='outlined' onClick={()=>router.push('TryNow')}>Try Now</Button>
          <Button variant='contained' color='primary'>
            How it works
          </Button>
        </div>
      </div>
    </main>
  );
}
