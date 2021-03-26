module.exports = class TunnelWash {
    constructor(vehicles) {
        this.vehicles = vehicles;
    }

    run() {
        for(let vehicle of this.vehicles) {
            vehicle.wash();
        }
    }
}