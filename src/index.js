import 'babel-polyfill';
import dva from 'dva';
// import Loading from 'dva-loading';
import {
  message
} from 'antd';

import './utils/leancloud.js';
import './index.less';

// 1. Initialize
const app = dva({
  onError(err, dispatch) {
    message.error(err);
  }
});

// 2. Plugins
// app.use(Loading({
//   namespace: 'loading'
//   effects: enable effects level loading state
// }));

// 3. Model
// Moved to router.js

// 4. Router
app.router(require('./router.jsx'));

// 5. Start
app.start('#root');
