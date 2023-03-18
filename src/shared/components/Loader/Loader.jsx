import { Audio } from 'react-loader-spinner';

import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
      />
    </div>
  );
};

export default Loader;
