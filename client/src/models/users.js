export const dosomething = () => 'hello';
export const users = {
  namespace: 'users',
  state: {},
  reducers: {
    save(state, { payload }) {
      return { ...state, payload };
    },
  },
  effects: {
    * test(action, { call, put }) {
      yield call(dosomething);
      yield put({ type: 'users/save', payload: '233' });
    },
  },
  subscriptions: {},
};
