import { find } from 'lodash';

const personSelector = state => state.people;
export const people = state => personSelector(state).people;
export const peopleLoaded = state => personSelector(state).peopleLoaded;
export const deletedPeople = state => personSelector(state).deletedPeople;
export const activePeople = state => personSelector(state).activePeople;
export const completedPeople = state => personSelector(state).completedPeople;

export function findPerson(people, personId) {
  return find(people, (p) => p.id === personId);
};
