var apiKey = '{your api key}';

class Stations {
    constructor() {
        this.stations = null;
        this.current = null;

        callAjax('https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey='+ apiKey, function(stations) {
           
        });
    }

    static setCurrent(station) {       
        callAjax("https://api.jcdecaux.com/vls/v1/stations/"+ station.number +"?contract=Lyon&apiKey="+ apiKey, function(station) {
            
        });
    }
}

stations = new Stations();