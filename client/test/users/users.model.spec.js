import {user,dosomething} from '../../src/models/users';
import { expect } from 'chai';
import { effects } from 'dva/saga';

describe('User Model', () => {

  describe('reducer', () => {
    it('should return updated states', () => {
      const reducers = user.reducers;
      const reducer = reducers.save;
      const state = {payload: "helloworld"};
      const action = {
        type: 'save',
        payload: "hello"
      };
      const expectedState = {
        payload: "hello"
      };

      expect(reducer(state, action)).to.deep.equal(expectedState);
    });
  });

  describe('effects', () => {
    it('should do something', () => {
      const { call, put } = effects;
      const sagas = user.effects;
      const saga = sagas.test;

      const generator = saga({ type: 'users/test' }, { call, put });
      let next = generator.next();

      expect(next.value).to.deep.equal(call(dosomething));

      next = generator.next();

      expect(next.value).to.deep.equal(put({ type: 'users/save', payload: '233' }));
    });
  })
});