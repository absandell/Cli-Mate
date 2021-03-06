import TransportSelect from './TransportSelect' 
import DestinationEntry from './DestinationEntry'
import getDistance from './GMD'
import { mapsMatrix } from '../../config/keys'

activities = []
const averageCO2 = 411
let PIinThisTravel = 0;
const enterActivity = (event) => {
    let activity = {
        transport: document.getElementById('selected').value,
        from: document.getElementById('From').value,
        to: document.getElementById('To').value,
    }
    if (activity.transport !== null && activity.from !== null && activity.to !== null) {
        // calculate distance travelled from the googleAPI
        let distanceTravelled = 5;
        let f = activity.from.innerHTML;
        let t = activity.to.innerHTML;
        let origin = f.replace(/ /g, '%');
        let destination = t.replace(/ /g, '%');
        let key = mapsMatrix['key'];
        let distanceStr = getDistance(origin, destination, key); // distance is returned as string, e.g. "228 mi"
        let distanceTravelled = 5;
        let distance = Number(distanceStr.split(" ")[0])
        console.log(distance)

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