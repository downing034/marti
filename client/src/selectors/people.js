import { find } from 'lodash';

const personSelector = state => state.people;
export const people = state => personSelector(state).people;
export const peopleLoaded = state => personSelector(state).peopleLoaded;

export function findPerson(people, personId) {
  return find(people, (p) => p.id === personId);
};
