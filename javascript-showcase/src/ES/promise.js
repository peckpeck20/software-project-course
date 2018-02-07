const mood = true;

//promise
//https://developers.google.com/web/fundamentals/primers/promises
const newDevice = new Promise(
    (resolve, reject) => {
        //if mood is true then put device to resolve parameter
        if (mood) {
            const device = {
                brand : 'sony',
                model : 'laptop x240',
                price : 200
            };
            resolve(device);
            //if not then add reason to reject paramenter
        } else {
            const reason = new Error('bad mood,try again.');
            reject(reason);
        }
    }
);

const showDevice = device => {
    const textMessage = `Look I got a new  ${device.brand} ${device.model}. It was ${device.price} `;
    return Promise.resolve(textMessage);
}

//call our promise
export const checkMood = () => {
    newDevice
        .then(showDevice)
        .then(fulfilled => console.log(fulfilled))
        .catch(error => console.log(error.reason));

}



