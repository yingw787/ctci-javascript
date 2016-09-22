/*
    Design a parking lot by using object-oriented principles.
*/

const validVehicleTypes = ['TRUCK', 'VAN', 'SEDAN', 'MOTORCYCLE', 'SUV'];
const validParkingSpotTypes = ['COMPACT', 'REGULAR', 'ACCESSIBLE', 'LARGE'];
const assert = require('assert');

const parkingSpotToVehicle = {
    'COMPACT': ['SEDAN', 'MOTORCYCLE'],
    'REGULAR': ['SEDAN', 'MOTORCYCLE', 'VAN'],
    'ACCESSIBLE': ['TRUCK', 'VAN', 'SEDAN', 'SUV'],
    'LARGE': ['TRUCK', 'VAN', 'SEDAN', 'MOTORCYCLE', 'SUV'],
};

class Vehicle {
    constructor(vehicleType) {
        if (!(vehicleType in validVehicleTypes)) {
            throw new Error('invalid vehicle type. Valid vehicle types include TRUCK, VAN, SEDAN, MOTORCYCLE, SUV');
        }
        this.vehicleType = vehicleType;
    }
}

class ParkingSpot {
    constructor(parkingSpotType) {
        if (!(parkingSpotType in validParkingSpotTypes)) {
            throw new Error('invalid parking spot type. Valid parking spot types include COMPACT, REGULAR, ACCESSIBLE, and LARGE.');
        }

        this.parkingSpotType = parkingSpotType;
        this.parkingSpotIsOccupied = false;
    }
    parkInThisParkingSpot(vehicle) {
        if (!(vehicle in parkingSpotToVehicle[this.parkingSpotType])) {
            return false;
        }
        this.parkingSpotIsOccupied = true;
        return true;
    }
    pullOutOfParkingSpot() {
        this.parkingSpotIsOccupied = false;
    }
}

class Level {
    constructor(numberOfCarsPerLevel) {
        assert(typeof numberOfCarsPerLevel === 'number');
        this.parkingSpots = [];

        for (let i = 0; i < numberOfCarsPerLevel; i++) {
            this.parkingSpots.push(new ParkingSpot(validParkingSpotTypes[Math.floor(Math.random() * validParkingSpotTypes.length)]));
        }
    }
}

class ParkingLot {
    constructor(levels, numberOfCarsPerLevel) {
        this.levels = [];
        this.numberOfVehicles = 0;
        for (let i = 0; i < levels; i++) {
            this.levels.push(new Level(numberOfCarsPerLevel));
        }
    }
    vehicleEntered(vehicleType) {
        const newVehicle = new Vehicle(vehicleType);

        this.numberOfVehicles += 1;
        for (let i = 0; i < this.levels.length; i++) {
            this._checkLevelForValidParkingSpot(this.levels[i], newVehicle);
        }
    }
    vehicleLeft() {

    }

}

module.exports = {
    chapterSevenProblemFourBruteForceSolution: ParkingLot,
};
