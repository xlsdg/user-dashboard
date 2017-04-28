import LeanCloudStorage from 'leancloud-storage';

import Cfg from '../config.js';

LeanCloudStorage.init({
  appId: Cfg.leancloud.appId,
  appKey: Cfg.leancloud.appKey
});

export default LeanCloudStorage;
