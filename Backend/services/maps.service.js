const axios = require('axios');
const captainModel = require('../models/captain.model');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
    try {
        const response = await axios.get(url);
        console.log('Response status:', response.data.status);
    console.log('Response data:', JSON.stringify(response.data, null, 2));
        if (response.data.status === 'OK') {
            const location = response.data.results[ 0 ].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    console.log('Using API key:', apiKey ? 'Key exists (not showing for security)' : 'Key missing');
    
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;
    console.log('Request URL:', url.replace(apiKey, 'API_KEY_HIDDEN'));

    try {
        console.log('Sending request to Google Maps API...');
        const response = await axios.get(url);
        console.log('Response received. Status:', response.data.status);
        console.log('Response data:', JSON.stringify(response.data, null, 2));

        if (response.data.status === 'OK') {
            if (!response.data.rows || !response.data.rows[0] || !response.data.rows[0].elements || !response.data.rows[0].elements[0]) {
                throw new Error('Invalid response structure from Google Maps API');
            }

            if (response.data.rows[0].elements[0].status === 'ZERO_RESULTS') {
                throw new Error('No routes found');
            }

            return response.data.rows[0].elements[0];
        } else {
            throw new Error(`Unable to fetch distance and time. Status: ${response.data.status}`);
        }
    } catch (err) {
        console.error('Google Maps API Error:', err.message);
        if (err.response) {
            console.error('Response data:', err.response.data);
            console.error('Response status:', err.response.status);
        }
        throw new Error(`Distance Matrix API error: ${err.message}`);
    }
}

module.exports.getAutoCompleteSuggestions = async(input)=>{
    if(!input){
        throw new Error('query is required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            return response.data.predictions.map(prediction => prediction.description).filter(value => value);
        } else {
            throw new Error('Unable to fetch suggestions');
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}
