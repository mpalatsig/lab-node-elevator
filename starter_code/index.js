/* jshint esversion:6 */

const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
let  marc = new Person("Marc",1,7);
let  anton = new Person("Anton",0,3);
let  luis = new Person("Luis",4,0);
let  inma = new Person("Inma",0,10);
let  Gloria = new Person("Gloria",8,4);


elevator.start();
elevator.call(marc);
elevator.checkWaitingList();
