// Code your solution here:

function driversWithRevenueOver(drivers, target) {
    return drivers.filter (function (driver) {
        return driver.revenue > target;
    });
}

function driverNamesWithRevenueOver(drivers, target) {
    return driversWithRevenueOver(drivers, target).map (function(driver) {
        return driver.name;
    });
}


function exactMatch(drivers, obj) {
    key = Object.keys(obj)[0]
    return drivers.filter (function (driver) {
        return driver[key] === obj[key];
    });
}


function exactMatchToList(drivers, obj) {
   return exactMatch(drivers, obj).map (function(driver) {
    return driver.name;
});
}