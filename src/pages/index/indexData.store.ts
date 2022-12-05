import {
  observable, runInAction, makeObservable, action, computed,
} from 'mobx';
import indexApi from 'api/index';

class IndexDataStore {
  constructor() {
    makeObservable(this);
  }

  @observable userBalance = {};

  async getUserBalance() {
    try {
      await indexApi.getUserBalance().then((res:any) => {
        runInAction(() => {
          this.userBalance = res.data.data;
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

export default new IndexDataStore();
