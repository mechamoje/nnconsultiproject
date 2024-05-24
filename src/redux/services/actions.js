import { servicesActionTypes } from "./action-types";

export const serviceTitle = (payload) => ({
        type: servicesActionTypes.SERVICE,
        payload: payload
})