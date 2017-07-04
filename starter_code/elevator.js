/* jshint esversion:6 */
class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.direction = "up";
    this.waitingList = [];
    this.passengers = [];
    this.requests = [];
  }

  start() {
    let intervalId = setInterval(() => {
      this.update();
    }, 1000);
  }

  stop() {
    clearInterval(intervalId);
  }

  update() {
    this.log();
  }

checkWaitingList (){
    let passengersIn = this.waitingList.originFloor.filter(this.floor);
    _passengersEnter(passengersIn);

}

  _passengersEnter(passenger) {
    this.passengers.push(passenger);
    this.requests.push(passenger.destinationFloor);
  }

  _passengersLeave() {}

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
    } else {
      this.floor = this.floor;
    }
  }

  floorDown() {
    if (this.floor > 0) {
      this.floor--;
    } else {
      this.floor = this.floor;
    }
  }

  call(newPerson) {
    this.requests.push(newPerson.originFloor);
    this.waitingList.push(newPerson);

  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
