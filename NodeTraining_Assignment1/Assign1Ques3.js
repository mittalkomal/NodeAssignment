class Vehicle{
    constructor(name, modelNo, price, seats){
        this.name = name;
        this.modelNo = modelNo;
        
        this.getPrice=function()
        {
          return price;
        }
        this.seats = seats;
    }
    get getModelNumber(){
        var model= this.modelNo;
        return model.substring(3,6);
    }
    set setModelNumber(updatedModel){
        var modelNumber= this.modelNo.substring(3,6);
        updatedModel+=modelNumber
        this.modelNo=updatedModel;
        console.log("updated model No is "+ this.modelNo)
    }
    
}

class LuxuryCars extends Vehicle{
    constructor(name, modelNo, price, seats,milege,topSpeed,selfDriving){
        super(name, modelNo, price, seats)
        this.milege=milege
        this.topSpeed=topSpeed
        this.selfDriving=selfDriving
    }
}

var myVehicle = new Vehicle("Komal", "ABC105", 50, 50);
let luxuryCars= new LuxuryCars("Ram", "ABC104", 51, 50,12, 34,true )

console.log(luxuryCars)

//getting Model Number
console.log("Model Number of myVehicle is "+ myVehicle.getModelNumber)

//setting model No
myVehicle.setModelNumber="DBA" 
