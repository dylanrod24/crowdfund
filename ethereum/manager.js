import web3 from './web3';
import CampaignManager from './build/CampaignManager.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignManager.interface),
  '0x92aA58A4713870d609Add339Ca5F59039759843E'
);

export default instance;