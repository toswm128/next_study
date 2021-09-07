import { makeObservable, observable, makeAutoObservable } from "mobx";

class Store {
  li = ["안녕", "하세요"];

  constructor() {
    makeObservable(this, {
      li: observable,
    });
  }

  handleList = value => {
    console.log(value);
    this.li = value;
  };
}

const initializeStore = initialData => {
  const store = new Store();

  return store;
};

export default Store;
