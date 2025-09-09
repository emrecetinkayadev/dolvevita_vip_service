import vehicles from '../mock-vehicles.json';

const filterVehicles = (searchCriteria) => {
  const { date, passengers } = searchCriteria;

  return vehicles.filter(vehicle => {
    let isMatch = true;

    if (passengers && vehicle.capacity < passengers) {
      isMatch = false;
    }

    // Date filtering logic will be added later

    return isMatch;
  });
};

export { filterVehicles };
