
import styles from './page.module.css';
import Wrapper from './components/wrapper/Wrapper';
import { detectDevice } from './utils/device';
import Info from './components/info/Info';
export default function Home() {
  //let device = detectDevice();

  return (
    <main className={styles.main}>
      <Wrapper>
        <Info />
      </Wrapper>

    </main>
  );
}
