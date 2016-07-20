import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

import dragula from 'dragula';
import 'dragula/dist/dragula.min.css';


Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.info.onRendered(function infoOnRendered() {
  Drake = dragula(Array.prototype.slice.call(document.querySelectorAll('.dragula-container')));
});