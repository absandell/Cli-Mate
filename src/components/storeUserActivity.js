import TransportSelect from './TransportSelect'; 
import DestinationEntry from './DestinationEntry';
import { response } from 'express';
import getDistance from '../GMD';

activities = []
const averageCO2 = 411
let PIinThisTravel = 0;
const enterActivity = (event) => {
    let activity = {
        transport: document.getElementById('selected').value,
        from: document.getElementById('From').value,
        to: document.getElementById('To').value,
    }
    //user entered all the fields properly
    if (activity.transport !== null && activity.from !== null && activity.to !== null) {
        // calculate distance travelled from the googleAPI
        // 'format "from" and "to" into this format e.g. "2500+E+Kearney+Springfield+MO+65898"'
        let f = from.toString();
        let t = to.toString();
        let origin = f.replace(/ /g, '+');
        let destination = t.replace(/ /g, '+');
        let key = '';
        let distanceStr = getDistance(origin, destination, key); // distance is returned as string
        let distance = Number(distanceStr.split(" ")[0])

        // take fuel consumption in Liter/Mile from the dataset of the vehicle
        let fuelLiterPerMile = 1;
        let totalFuelInLiter = distance * fuelLiterPerMile;
        let totalFuelInGalon = totalFuelInLiter/3.79;
        const CO2PerGalon = 8887;
        let totalCO2 = totalFuelInGalon * CO2PerGalon;
        let userCO2 = totalCO2 / distance;

        // store activity and userCO2 in the database
        
        if (userCO2 === averageCO2) {
            PIinThisTravel = 0;
        }
        else if (userCO2 > averageCO2) {
            PIinThisTravel = -1 * userCO2/averageCO2;
        }
        else {
            PIinThisTravel = Math.max(10, averageCO2/userCO2);
        }

        return (activity, userCO2, PIinThisTravel);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('ActivityButton').addEventListener('click', enterActivity);
})