import web3 from './web3';
import CampaignManager from './build/CampaignManager.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignManager.interface),
  '0x9ece79fF153C4fdB1F1235907528970c2Bdc7582'
);

export default instance;