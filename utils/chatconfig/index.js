import Pusher from 'pusher-js';

const WS_URL = 'transactionbased.ratefy.co';
const APP_KEY = "ratefychatkey";
const APP_CLUSTER = "mtl";
const pusher = new Pusher(APP_KEY, {
  cluster: APP_CLUSTER,
  wsHost: WS_URL,
  wssHost: WS_URL,
  wsPort: 6003,
  wssPort: 6003,
  enabledTransports: ['ws', 'wss'],
});


export default pusher;