export const dosomething = () => 'hello';
export const facts = {
  namespace: 'facts',
  state: {},
  reducers: {
    save(state, { payload }) {
      return { ...state, payload };
    },
  },
  effects: {
    * test(action, { call, put }) {
      yield call(dosomething);
      yield put({ type: 'facts/save', payload: '233' });
    },
  },
  subscriptions: {},
};
