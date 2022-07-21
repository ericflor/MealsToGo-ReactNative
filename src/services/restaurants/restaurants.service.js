import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {

    return new Promise((resolve, reject) => {

        const mock = mocks[location];

        if(!mock) {
            reject("sorry, not found");
        } 
        
        resolve(mock);
    })
}

export const restaurantsTransform = ({results = []}) => {

    const mappedResults = results.map((restaurant) => {

        restaurant.photos = restaurant.photos.map(() => {

            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
        });

        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
            address: restaurant.vicinity,
        }
    });

    return camelize(mappedResults);
}

restaurantsRequest()
    .then(restaurantsTransform)
    .then(transformedRespose => {
        console.log(transformedRespose)
    })
    .catch((error) => {
        console.log("error" + error)
});