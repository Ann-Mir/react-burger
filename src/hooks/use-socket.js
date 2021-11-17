import { useCallback, useEffect, useRef } from 'react';

export const CONNECTING = 'CONNECTING';
export const OPEN = 'OPEN';
export const CLOSING = 'CLOSING';
export const CLOSED = 'CLOSED';

export const SocketStates = {
  0: CONNECTING,
  1: OPEN,
  2: CLOSING,
  3: CLOSED
};

export const useSocket = (url, options) => {
  const ws = useRef(null);

  const connect = useCallback(
    token => {
      ws.current = new WebSocket(`${url}?token=${token}`);
      ws.current.onopen = event => {
        if (typeof options.onConnect === 'function') {
          options.onConnect(event);
        }
      };

      ws.current.onerror = event => {};

      ws.current.onclose = event => {
        // ваш код здесь
        if (typeof options.onDisconnect === 'function') {
          options.onDisconnect(event);
        }
      };
    },
    [url, options]
  );

  useEffect(
    () => {
      if (ws.current) {
        if (typeof options.onConnect === 'function') {
          ws.current.onopen = options.onConnect;
        }
        if (typeof options.onDisconnect === 'function') {
          ws.current.onclose = options.onDisconnect;
        }
      }
    },
    [options, ws]
  );

  useEffect(() => {
    return () => {
      if (ws.current && typeof ws.current.close === 'function') {
        ws.current.close();
      }
    };
  }, []);

  const sendData = useCallback(message => {}, [ws]);

  return { connect, sendData };
};
