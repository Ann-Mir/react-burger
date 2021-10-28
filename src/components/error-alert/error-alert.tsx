import React, { useEffect, useState } from 'react';

import styles from './error-alert.module.css';


type TErrorAlertProps = {
  message?: string;
};


const DEFAULT_ALERT_MESSAGE = 'Something went wrong:(';
const ALERT_TIMEOUT = 7000;

function ErrorAlert({message = DEFAULT_ALERT_MESSAGE}: TErrorAlertProps): JSX.Element {

  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, ALERT_TIMEOUT);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div className={styles.alert}>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}


export default ErrorAlert;
