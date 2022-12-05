import axios from 'axios';
import { ExpiredPlanReq } from './types';

const promotionDataApi = {
  fetchExpiredPlan: (params?: ExpiredPlanReq) => axios.get('/ad/plan/expired'),
  fetchChartData: (params?: ExpiredPlanReq) => axios.get('/ad/plan/chart'),
};

export default promotionDataApi;
