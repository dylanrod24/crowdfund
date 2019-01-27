import web3 from './web3';
import CampaignManager from './build/CampaignManager.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignManager.interface),
  '0xf19db4b52Dc12a77f7db7C11DF327E550fEeA7fc'
);

export default instance;