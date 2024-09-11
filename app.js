/*const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON

app.post('/itinerary', (req, res) => {
  const { startLocation, startDate } = req.body;

  // Placeholder for AI logic to generate itinerary
  const itinerary = generateItinerary(startLocation, startDate);

  res.send(itinerary);
});

function generateItinerary(startLocation, startDate) {
  return `
    Ride Itinerary:
    - Start Location: ${startLocation}
    - Start Date: ${startDate}
    - Bio Breaks: Every 2 hours
    - Meal Breaks: Lunch at 12 PM, Dinner at 6 PM
    - Refueling Stops: Gas Station at 50 miles
  `;
}

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/itinerary', async (req, res) => {
  const { startLocation, startDate } = req.body;

  try {
    const itinerary = await generateItinerary(startLocation, startDate);
    res.send(itinerary);
  } catch (error) {
    res.status(500).send('Error generating itinerary');
  }
});

async function generateItinerary(startLocation, startDate) {
  const apiKey = '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'; // Replace with your actual API key
  const prompt = `Create a detailed ride itinerary starting from ${startLocation} on ${startDate}. Include bio breaks, meal breaks, and refueling stops.`;

  const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
    prompt: prompt,
    max_tokens: 150,
    n: 1,
    stop: null,
    temperature: 0.7
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    }
  });

  return response.data.choices[0].text.trim();
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

/*const admin = require('firebase-admin');
const serviceAccount = require('./rider-sos-521a2-firebase-adminsdk-epqq0-dff4b819e3'); // Replace with your actual JSON file name

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

console.log('Firebase initialized');


app.get('/', (req, res) => {
    const itinerary = `
      Ride Itinerary:
      - Start Location: Central Park
      - Start Date: 2024-09-10
      - Bio Breaks: Every 2 hours
      - Meal Breaks: Lunch at 12 PM, Dinner at 6 PM
      - Refueling Stops: Gas Station at 50 miles
    `;
    res.send(itinerary);
  });

/*const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Rider SOS!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});*/


/*const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Rider SOS!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); */


/*const admin = require('firebase-admin');
const serviceAccount = require('./rider-sos-521a2-firebase-adminsdk-epqq0-dff4b819e3');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
console.log('Firebase initialized');*/


/*const express = require('express');
const axios = require('axios');
const { Client } = require('@googlemaps/google-maps-services-js');
const app = express();
const port = 3000;

const googleMapsClient = new Client({});
const googleApiKey = 'AIzaSyAjZ458ej0CPRL-W50eYGbtSOcV2V3_d2U'; // Replace with your actual Google API key

app.use(express.json()); // Middleware to parse JSON

app.post('/itinerary', async (req, res) => {
  const { startLocation, endLocation, startDate } = req.body;

  try {
    const itinerary = await generateItinerary(startLocation, endLocation, startDate);
    res.send(itinerary);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).send('Error generating itinerary');
  }
});

async function generateItinerary(startLocation, endLocation, startDate) {
  const apiKey = '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'; // Replace with your actual API key
  const prompt = `Create a detailed ride itinerary starting from ${startLocation} to ${endLocation} on ${startDate}. Include bio breaks, meal breaks, refueling stops, and notable places.`;

  const response = await axios.post('https://api.openai.com/v1/chat/completions', 
    {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 150,
      temperature: 0.7
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    }
  });

  const aiSuggestions = openAiResponse.data.choices[0].message.content.trim();

  // Find places using Google Places API
  const places = await googleMapsClient.placesNearby({
    params: {
      location: { lat: 40.785091, lng: -73.968285 }, // Example location
      radius: 5000,
      type: 'restaurant',
      key: googleApiKey
    }
  });

  const placeNames = places.data.results.map(place => place.name).join(', ');

  return `AI Suggestions: ${aiSuggestions}\nRecommended Stops: ${placeNames}`;
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});*/

 

/*const express = require('express');
const axios = require('axios');
const { Client } = require('@googlemaps/google-maps-services-js');
const app = express();
const port = 3000;

const googleMapsClient = new Client({});
const googleApiKey = 'AIzaSyArPodJ8Rra3TygSGQ761nF6pF4y6OpEOA'; // Replace with your actual Google API key

app.use(express.json());

app.post('/itinerary', async (req, res) => {
  const { startLocation, endLocation, startDate } = req.body;

  try {
    const itinerary = await generateItinerary(startLocation, endLocation, startDate);
    res.send(itinerary);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).send('Error generating itinerary');
  }
});

async function generateItinerary(startLocation, endLocation, startDate) {
  const openAiApiKey = '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'; // Replace with your actual OpenAI API key
  const prompt = `Create a detailed bike ride itinerary to and fro starting from ${startLocation} to ${endLocation} on ${startDate}. 
  Include exact locations for breakfast, bio breaks, petrol pump stops, and route details which are good for bike riding. 
  Also show total distance to cover in kilometers and end location reach time.`;

  const openAiResponse = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 150,
    temperature: 0.7
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${openAiApiKey}`
    }
  });

  const aiSuggestions = openAiResponse.data.choices[0].message.content.trim();

  // Find places using Google Places API
  const places = await googleMapsClient.placesNearby({
    params: {
      location: { lat: 40.785091, lng: -73.968285 }, // Example location
      radius: 5000,
      type: 'restaurant',
      key: googleApiKey
    }
  });

  const placeNames = places.data.results.map(place => place.name).join(', ');

  return `AI Suggestions: ${aiSuggestions}\nRecommended Stops: ${placeNames}`;
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});*/




/*const express = require('express');
const axios = require('axios');
const { Client } = require('@googlemaps/google-maps-services-js');
const app = express();
const port = 3000;

const googleMapsClient = new Client({});
const googleApiKey = 'AIzaSyArPodJ8Rra3TygSGQ761nF6pF4y6OpEOA'; // Replace with your actual Google API key

app.use(express.json());

app.post('/itinerary', async (req, res) => {
  const { startLocation, endLocation, startDate } = req.body;

  try {
    const itinerary = await generateItinerary(startLocation, endLocation, startDate);
    res.send(itinerary);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).send('Error generating itinerary');
  }
});

async function generateItinerary(startLocation, endLocation, startDate) {
  const openAiApiKey = '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'; // Replace with your actual OpenAI API key
  const prompt = `Create a detailed bike ride itinerary to and fro starting from ${startLocation} to ${endLocation} on ${startDate}. 
  Include exact locations for breakfast, bio breaks, petrol pump stops, and route details which are good for bike riding. 
  Also show total distance to cover in kilometers and end location reach time.`;

  const openAiResponse = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 150,
    temperature: 0.7
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${openAiApiKey}`
    }
  });

  const aiSuggestions = openAiResponse.data.choices[0].message.content.trim();

  // Get route from Directions API
  const directionsResponse = await googleMapsClient.directions({
    params: {
      origin: startLocation,
      destination: endLocation,
      key: googleApiKey
    }
  });

  const route = directionsResponse.data.routes[0];
  const midpoint = route.legs[0].steps[Math.floor(route.legs[0].steps.length / 2)].end_location;

  // Find places using Google Places API around the midpoint
  const places = await googleMapsClient.placesNearby({
    params: {
      location: midpoint,
      radius: 5000,
      type: 'restaurant',
      key: googleApiKey
    }
  });

  const placeNames = places.data.results.map(place => place.name).join(', ');

  return `AI Suggestions: ${aiSuggestions}\nRecommended Stops: ${placeNames}`;
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});*/




/*const express = require('express');
const axios = require('axios');
const { Client } = require('@googlemaps/google-maps-services-js');
const app = express();
const port = 3000;

const googleMapsClient = new Client({});
const googleApiKey = 'AIzaSyArPodJ8Rra3TygSGQ761nF6pF4y6OpEOA'; // Replace with your actual Google API key

app.use(express.json());

app.post('/itinerary', async (req, res) => {
  const { startLocation, endLocation, startDate } = req.body;

  try {
    const itinerary = await generateItinerary(startLocation, endLocation, startDate);
    res.send(itinerary);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Error generating itinerary');
  }
});

async function generateItinerary(startLocation, endLocation, startDate) {
  const openAiApiKey = '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'; // Replace with your actual OpenAI API key
  const prompt = `Create a ride itinerary starting from ${startLocation} to ${endLocation} on ${startDate}. Include exact locations for breakfast, bio breaks, and refueling stops.`;

  const openAiResponse = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 150,
    temperature: 0.7
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${openAiApiKey}`
    }
  });

  const aiSuggestions = openAiResponse.data.choices[0].message.content.trim();

  const startGeocode = await googleMapsClient.geocode({
    params: {
      address: startLocation,
      key: googleApiKey
    }
  });

  const endGeocode = await googleMapsClient.geocode({
    params: {
      address: endLocation,
      key: googleApiKey
    }
  });

  if (startGeocode.data.results.length === 0 || endGeocode.data.results.length === 0) {
    throw new Error('Invalid start or end location');
  }

  const startCoords = startGeocode.data.results[0].geometry.location;
  const endCoords = endGeocode.data.results[0].geometry.location;

  const directionsResponse = await googleMapsClient.directions({
    params: {
      origin: `${startCoords.lat},${startCoords.lng}`,
      destination: `${endCoords.lat},${endCoords.lng}`,
      key: googleApiKey
    }
  });

  if (!directionsResponse.data.routes || directionsResponse.data.routes.length === 0) {
    console.error('Directions response:', directionsResponse.data);
    throw new Error('No route found');
  }

  const route = directionsResponse.data.routes[0];
  const midpoint = route.legs[0].steps[Math.floor(route.legs[0].steps.length / 2)].end_location;

  const places = await googleMapsClient.placesNearby({
    params: {
      location: midpoint,
      radius: 5000,
      type: 'restaurant',
      key: googleApiKey
    }
  });

  const placeNames = places.data.results.map(place => place.name).join(', ');

  return `AI Suggestions: ${aiSuggestions}\nRecommended Stops: ${placeNames}`;
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});*/





const express = require('express');
const axios = require('axios');
const { Client } = require('@googlemaps/google-maps-services-js');
const app = express();
const port = 3000;

const googleMapsClient = new Client({});
const googleApiKey = 'AIzaSyArPodJ8Rra3TygSGQ761nF6pF4y6OpEOA'; // Replace with your actual Google API key

app.use(express.json());

app.post('/itinerary', async (req, res) => {
  const { startLocation, endLocation, startDate } = req.body;

  try {
    const itinerary = await generateItinerary(startLocation, endLocation, startDate);
    res.send(itinerary);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Error generating itinerary');
  }
});

async function generateItinerary(startLocation, endLocation, startDate) {
  const openAiApiKey = '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'; // Replace with your actual OpenAI API key
  const prompt = `Create a detailed bike ride itinerary to and fro starting from ${startLocation} to ${endLocation} on ${startDate}. 
  Include exact locations for breakfast, bio breaks, petrol pump stops, and route details which are good for bike riding. 
  Also show total distance to cover in kilometers and end location reach time.`;

  const openAiResponse = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 150,
    temperature: 0.7
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${openAiApiKey}`
    }
  });

  const aiSuggestions = openAiResponse.data.choices[0].message.content.trim();

  const startGeocode = await googleMapsClient.geocode({
    params: {
      address: startLocation,
      key: googleApiKey
    }
  });

  const endGeocode = await googleMapsClient.geocode({
    params: {
      address: endLocation,
      key: googleApiKey
    }
  });

  if (startGeocode.data.results.length === 0 || endGeocode.data.results.length === 0) {
    throw new Error('Invalid start or end location');
  }

  console.log('Start Geocode:', startGeocode.data.results[0].geometry.location);
  console.log('End Geocode:', endGeocode.data.results[0].geometry.location);

  const startCoords = startGeocode.data.results[0].geometry.location;
  const endCoords = endGeocode.data.results[0].geometry.location;

  const directionsResponse = await googleMapsClient.directions({
    params: {
      origin: `${startCoords.lat},${startCoords.lng}`,
      destination: `${endCoords.lat},${endCoords.lng}`,
      key: googleApiKey
    }
  });

  if (!directionsResponse.data.routes || directionsResponse.data.routes.length === 0) {
    console.error('Directions response:', directionsResponse.data);
    throw new Error('No route found. Please check the locations.');
  }

  const route = directionsResponse.data.routes[0];
  const midpoint = route.legs[0].steps[Math.floor(route.legs[0].steps.length / 2)].end_location;

  const places = await googleMapsClient.placesNearby({
    params: {
      location: midpoint,
      radius: 5000,
      type: 'restaurant',
      key: googleApiKey
    }
  });

  const placeNames = places.data.results.map(place => place.name).join(', ');

  return `AI Suggestions: ${aiSuggestions}\nRecommended Stops: ${placeNames}`;
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});