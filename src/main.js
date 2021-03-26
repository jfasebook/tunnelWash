let TunnelWash =  require( "./tunnelWash.js");
let Car =  require( "./vehicles/car");
let Cycle =  require( "./vehicles/cycle");
let MotoCycle =  require( "./vehicles/motocycle");
let Truck =  require( "./vehicles/truck");

function main() {
    let tunnelWash = new TunnelWash([
        new Car(),
        new Cycle(),
        new MotoCycle(),
        new Truck()
    ]);

    tunnelWash.run();
}

main();