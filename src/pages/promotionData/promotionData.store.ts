import {
  observable, runInAction, makeObservable, action, computed,
} from 'mobx';
import promotionDataApi from 'api/search';

class PromotionDataStore {
  constructor() {
    makeObservable(this);
  }

  @observable modalShow:boolean = true;

  @observable expiredPlanData = [];

  @observable chartData = [];

  async getExpiredPlanList() {
    try {
      await promotionDataApi.fetchExpiredPlan().then((res:any) => {
        const expiredPlanList = res.data.data;
        runInAction(() => {
          this.modalShow = expiredPlanList.length > 0;
          // this.expiredPlanData = res.data.data;
        });
      });
    } catch (e) {
      console.log('error', e);
    }
  }

  async getChartData() {
    try {
      await promotionDataApi.fetchChartData().then((res:any) => {
        runInAction(() => {
          this.chartData = res.data.data;
        });
      });
    } catch (e) {
      console.log('error', e);
    }
  }

  // @computed get modalShow() {
  //   return this.expiredPlanData.length > 0;
  // }
}

export default new PromotionDataStore();
