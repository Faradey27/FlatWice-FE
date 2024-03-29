import { getStore } from './../../../../../../__test__/utils/mockedStore';
import { mockFlats } from './../../../../../../__test__/utils/mockedAxios';
import { FLATS_ENDPOINT } from './../../../../../constants/data';
import reducer, { loadEntities, LOAD_ENTITIES_START, LOAD_ENTITIES_SUCCESS, LOAD_ENTITIES_FAILURE } from './../index';

describe('Check that redux store is created correctly and dataView module works', () => {
  describe('Actions', () => {
    it('should create an action to add a todo', () => {
      const result = loadEntities({ viewId: 'WIDGETS' });

      expect(typeof result.promise).toBe('function');
      expect(result.meta).toEqual({ viewId: 'WIDGETS' });
      expect(result.types).toEqual([
        LOAD_ENTITIES_START,
        LOAD_ENTITIES_SUCCESS,
        LOAD_ENTITIES_FAILURE,
      ]);
    });

    it('should correctly dispatch action and update reducer', () => {
      const flats = mockFlats();
      const store = getStore();

      return store.dispatch(loadEntities({ viewId: 'WIDGETS', endpoint: `${FLATS_ENDPOINT}`, from: 0, to: 5 })).then(() => {
        expect(store.getActions()).toEqual([
          {
            meta: { viewId: 'WIDGETS' },
            type: 'LOAD_ENTITIES_START' },
          {
            meta: { viewId: 'WIDGETS' },
            payload: flats,
            type: 'LOAD_ENTITIES_SUCCESS',
          },
        ]);
      });
    });
  });

  describe('Reducer', () => {
    it('should handle success action', () => {
      const nextState = reducer({}, { type: 'LOAD_ENTITIES_SUCCESS', payload: [1, -1], meta: { viewId: '123' } });

      expect(nextState).toEqual({
        123: [1, -1],
      });
    });

    it('should ignore start action', () => {
      const nextState = reducer({}, { type: 'LOAD_ENTITIES_START', payload: [1, -1], meta: { viewId: '123' } });

      expect(nextState).toEqual({});
    });
  });
});
