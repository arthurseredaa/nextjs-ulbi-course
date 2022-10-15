import React from 'react';
import styles from '../styles/not_found_page.module.css'

const NotFoundPage = () => {
  return (
      <div className={styles.container}>
        <div className={styles.error}>404</div>
        <br/><br/>
        <span className={styles.info}>Page not found</span>
        <img src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" className={styles.static}
             alt="Page not found"/>
      </div>
  );
};

export default NotFoundPage;
