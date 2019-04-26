import Axios from 'axios';
import { baseApiUrl } from 'core';
import { trackPromise } from 'react-promise-tracker';

export interface HotelEntityApi {
    id: string;
    type: string;
    name: string;
    created: Date;
    modified: Date;
    address1: string,
    airportCode: string;
    amenityMask: number;
    city: string;
    confidenceRating: number;
    countryCode: string;
    deepLink: string;
    highRate: number;
    hotelId: number;
    hotelInDestination: boolean;
    hotelRating: number;
    location: {
        latitude: number;
        longitude: number;
    },
    locationDescription: string;
    lowRate: number;
    metadata: {
        path: string;
    },
    postalCode: number;
    propertyCategory: number;
    proximityDistance: number;
    proximityUnit: string;
    rateCurrencyCode: string;
    shortDescription: string;
    stateProvinceCode: string;
    thumbNailUrl: string;
    tripAdvisorRating: number;
    tripAdvisorRatingUrl: string;
}

const getHotelUrl = `${baseApiUrl}/api/hotels`;

export const getHotelCollection = (): Promise<HotelEntityApi[]> =>
    trackPromise(
        new Promise<HotelEntityApi[]>((resolve, reject) =>
            setTimeout(() =>
                Axios.get<HotelEntityApi[]>(getHotelUrl).then((response) => resolve(response.data))
                , 1500)
        )
    );