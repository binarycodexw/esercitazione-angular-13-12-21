export interface Weather {
    weather:WeatherDetails[],
    main: {
        temp: number;
    };
    sys:{
        country:string;
    };
    name:string;

    timezone:number;

    date:number;
    
}

interface WeatherDetails{
    icon: string;
    description: string;
}