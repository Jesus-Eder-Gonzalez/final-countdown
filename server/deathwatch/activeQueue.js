const User = require('../db/models/User');
const Recipient = require('../db/models/Recipient');
const Package = require('../db/models/Package');
const moment = require('moment');

/*** Active Trigger Queue: This is the linked-list that will represent the trigger queue ***/
class ActiveTriggerQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /** Active Trigger getExecutableTriggers: This function searchs the
   * linkedlist and returns an array of the triggers to execute **/
  getExecutableTriggers() {
    let executableTriggers = [];
    if (!this.head) {
      return null;
    }
    console.log(
      'head v now',
      this.head.value.timeToExecute,
      moment.utc(Date.now()).format()
    );

    if (this.head.value.timeToExecute < moment.utc(Date.now()).format()) {
      let temp = this.head;
      this.delete(this.head.value.userId);
      console.log('executableTrigger', this.head);
      let userInfo;
      this.getUserData(this.head.value.userId)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log('err: ', err);
        });
      console.log('UserInfo', userInfo);
      return temp.value;
    } else {
      return null;
    }
  }

  getUserData(userId) {
    console.log('userId', userId);
    return User.where({ id: userId })
      .fetch({ withRelated: ['recipients'] })
      .then(response => {
        console.log('response', response);
        return response;
      })
      .catch(err => {
        console.log('error', err);
      });
  }

  /*** Active Trigger Search: This function searches the structure
   * for a specific user's trigger. Uses the userId field to find
   * the trigger.***/
  search(userId) {
    let currentTrigger = this.head;
    while (currentTrigger) {
      if (currentTrigger.value['userId'] === userId) {
        return currentTrigger;
      } else {
        currentTrigger = currentTrigger.next;
      }
    }
    //This will return a trigger or ''
    return currentTrigger;
  }

  /*** Active Trigger Search Previous: This function searches the structure
   * for a specific user's trigger and returns the previous trigger. Uses the userId field to find
   * the trigger.***/
  searchPrevious(userId) {
    let previousTrigger = '';
    let currentTrigger = this.head;
    while (currentTrigger) {
      if (currentTrigger.value['userId'] === userId) {
        return previousTrigger;
      } else {
        previousTrigger = currentTrigger;
        currentTrigger = currentTrigger.next;
      }
    }
    //This will return a trigger or ''
    return previousTrigger;
  }
  /*** Active Trigger Edit: This function edits an active trigger modifying
   * the timeToExecute. It returns true if edit was successful else false***/
  edit(userId, newTimeToExecute) {
    this.delete(userId);
    return this.insertToQueue({ userId, timeToExecute: newTimeToExecute });
  }
  /*** Active Trigger Delete: This function deletes an active trigger.
   * It returns true if delete was successful else false***/
  delete(userId) {
    let success = false;
    if (this.head.value.userId === userId) {
      this.head = this.head.next;
      return (success = true);
    }

    let precedingTrigger = this.searchPrevious(userId);

    if (this.tail === precedingTrigger.next) {
      this.tail = precedingTrigger;
      this.tail.next = null;
      return (success = true);
    }

    precedingTrigger = precedingTrigger.next.next;
    success = precedingTrigger ? true : false;

    return success;
  }

  /*** Active Trigger Insert: This function inserts a new trigger into
   *  the structure. The trigger is inserted based on timeToExecute***/
  insertToQueue(value) {
    let previousTrigger = null;
    let currentTrigger = this.head;
    //This normalizes the time passed in to UTC
    value.timeToExecute = moment.utc(value.timeToExecute).format();

    //This is for the case that the queue is empty.
    if (!this.head) {
      this.head = this.tail = new ActiveTrigger(value, null);
      return;
    }

    //This is for the case that there is only one element in the queue.
    if (this.head === this.tail) {
      if (this.head.value['timeToExecute'] < value['timeToExecute']) {
        this.head.next = this.tail = new ActiveTrigger(value, '');
        return;
      } else {
        let temp = this.head;
        this.head = new ActiveTrigger(value, temp);
        this.tail = temp;
        return;
      }
    }

    let next = null;

    //While currentTrigger exists it will continue executing the loop
    while (currentTrigger) {
      if (currentTrigger.value['timeToExecute'] > value['timeToExecute']) {
        next = previousTrigger;
        break;
      } else {
        previousTrigger = currentTrigger;
        currentTrigger = currentTrigger.next;
      }
    }

    let newTrigger = new ActiveTrigger(value, next);

    if (!previousTrigger) {
      newTrigger.next = this.head;
      this.head = newTrigger;
    } else if (previousTrigger === this.tail) {
      this.tail = newTrigger;
      previousTrigger.next = newTrigger;
    } else {
      previousTrigger.next = newTrigger;
      newTrigger.next = currentTrigger ? currentTrigger : null;
    }
  }
}

/*** Active Trigger: This is a node in the linked-list that
 * represents an active trigger. Value should be an object
 * containing { userId, timeToExecute} ***/
function ActiveTrigger(value, next) {
  this.value = value;
  this.next = next;
}

let queue = new ActiveTriggerQueue();

module.exports = queue;
