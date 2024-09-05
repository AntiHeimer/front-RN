import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

function SocketComponent() {
  const [message, setMessage] = useState('');

  function connect() {
    const ws = new WebSocket(`${process.env.SOCKET_API}/wss`);

    ws.onopen = () => {
      console.log('Connected to WebSocket');
    };

    ws.onmessage = event => {
      setMessage(event.data);
    };

    ws.onerror = error => {
      console.log('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket closed');
    };

    return () => {
      ws.close();
    };
  }

  useEffect(() => {
    connect();
  }, []);

  return (
    <View>
      <Text>socket</Text>
      <Text>{message}</Text>
    </View>
  );
}

export default SocketComponent;
