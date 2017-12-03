const iplocation = require('ip-location');

function formatIPAddress(location){
    return `${location.city}, ${location.region_code} ${location.zip_code}, ${location.country_code}`;
}

/**
 * @typedef {Object} Geolocation
 * @property {string} country_code The countryCode of the location, ex. US
 * @property {string} country_name The country of the location, ex. United States
 * @property {string} region_code The region of the location, ex. IL
 * @property {string} region_name The region of the location, ex. Illinois
 * @property {string} city The city of the location, ex. Chicago
 * @property {string} zip_code The zip code of the location, ex. 60606
 * @property {string} time_zone The time zone for the location, ex. America/Chicago
 * @property {number} lat The latitude of the location
 * @property {number} lon The longitude of the location
 * @property {number} metro_code The metro code for the area, ex. 602 
 * @property {string} formatted The formatted address, in the form of 'City, RegionCode ZipCode, CountryCode'
 */

/**
 * @description Gets the current geographic location from the ip.
 * 
 * @param {string} [ip] - The ip address to get geographic location about. If omitted the current external IP address will be used.
 * @returns {Geolocation} - The geographic object for the given ip address.
 */
async function getCurrentLocation(ip){    
    var location = await iplocation(ip);
    location.formatted = formatIPAddress(location);
    return location;
}

module.exports.getCurrentLocation = getCurrentLocation;