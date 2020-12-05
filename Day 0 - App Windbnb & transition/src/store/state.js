import { reactive, inject } from 'vue';
import json from '../assets/hosts.json'

function unique(arr) {
    let tmp = [];
    let result = [];

    for (let obj of arr) {
        if (!tmp.includes(obj.city)) {
            tmp.push(obj.city)
            result.push(obj);
        }
    }

    return result;
}

export const createStore = () => {
    const state = reactive({
        data: json,
        apartments: json,
        location: {
            city: json[0].city,
            country: json[0].country,
        },
        guests: 0
    })
    const getCities = () => unique(state.data)
    const filterByCity = (params) => {
        if (params.city && params.guests) {
            state.apartments = state.data.filter(item => item.city === params.city)
            state.apartments = state.apartments.filter(item => item.maxGuests > params.guests)
        } else if (params.city) {
            state.apartments = state.data.filter(item => item.city === params.city)
        } else if (params.guests) {
            state.apartments = state.data.filter(item => item.maxGuests > params.guests)
        } else {
            state.apartments = state.data
        }
    }

    return {state, getCities, filterByCity}
}

export const stateSymbol = Symbol('store');

export const injectStore = () => inject(stateSymbol);

