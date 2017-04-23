import { Day } from './model/day';
import { DayList } from "./model/day-list";

export const DAYS: Day[] = [
    {
        id: 1, name: 'Samedi', abbreviation: 'S',
        meals: [
            {
                id: 1,
                title: 'Lunch',
                recipes: [{
                    id: 1,
                    title: 'Poisson Carotte',
                    ingredients: []
                }]
            },
            {
                id: 2,
                title: 'Dinner',
                recipes: [{
                    id: 2,
                    title: 'Pizza Calzone',
                    ingredients: []
                }]
            }]
    },
    {
        id: 2, name: 'Dimanche', abbreviation: 'D',
        meals: [
            {
                id: 3,
                title: 'Lunch',
                recipes: [{
                    id: 3,
                    title: 'Agneau haricots verts',
                    ingredients: []
                }, {
                    id: 4,
                    title: 'Cheesecake fraise',
                    ingredients: []
                }]
            },
            {
                id: 4,
                title: 'Dinner',
                recipes: [{
                    id: 5,
                    title: 'Oeuf à la coque',
                    ingredients: []
                }]
            }]
    },
    {
        id: 3, name: 'Lundi', abbreviation: 'L',
        meals: [
            {
                id: 5,
                title: 'Dinner',
                recipes: [{
                    id: 6,
                    title: 'Soupe',
                    ingredients: []
                }]
            }]
    }];

export const DAY_LIST: DayList = {
    id: 1,
    title: 'Semaine en cours',
    days: DAYS
};
