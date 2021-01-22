function Vehicle(name, modelNo, price, seats) {
    this.name = name;
    this.modelNo = modelNo;
    this.getPrice=function()
    {
      return price;
    }
    this.seats = seats;
    this.getModel=function()
    {
      var model= this.modelNo;
      return model.substring(3,6);
    }
    this.setModel= function(updatedModel)
    {
    var modelNumber= this.modelNo.substring(3,6);
    updatedModel+=modelNumber
    this.modelNo=updatedModel;
    console.log("updated model No is "+ this.modelNo)

    }
  }

  var myVehicle = new Vehicle("Komal", "ABC105", 50, 50);

  // using getter to get model number
  console.log("Model number is " +myVehicle.getModel());

  //setting updated model number
  myVehicle.setModel("DBA")

  //accessing private method through cloure
  console.log(myVehicle.getPrice())