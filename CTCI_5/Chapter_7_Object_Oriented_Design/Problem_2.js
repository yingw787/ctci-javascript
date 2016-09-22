/*
    Imagine you have a call center with three levels of employees: respondent, manager, and director. An incoming telephone call must be first allocated to a respondent who is free. If the respondent can't handle the call, he or she must escalate the call to a manager. If the manager is not free or not able to handle it, then the call should be escalated to a director. Design the classes and data structures for this problem. Implement a method dispatchCall() which assigns a call to the first available employee.
*/

// TODO: REVIEW AND REDO PROBLEM (INCOMPLETE!)
const assert = require('assert');

const MAX_NUMBER_OF_RESPONDENTS_WORKING_UNDER_A_MANAGER = 5;
const MAX_NUMBER_OF_MANAGERS_WORKING_UNDER_A_DIRECTOR = 2;

class Respondent {
    constructor() {
        this.freeToHandleNewCall = true;
        this.managerToContact = null;
    }
    assignManager(manager) {
        this.managerToContact = manager;
    }
}

class Manager {
    constructor() {
        this.freeToHandleNewCall = true;
        this.directorToContact = null;
    }
    assignDirector(director) {
        this.directorToContact = director;
    }
}

class Director {
    constructor() {
        this.freeToHandleNewCall = true;
    }
}

class CustomerServiceCall {
    constructor() {
        this.handler = null;
    }
    assignCustomerServiceRepresentative(customerServiceRepresentative) {
        this.handler = customerServiceRepresentative;
    }
}

class CallCenter {
    constructor(numberOfRespondents, numberOfManagers, numberOfDirectors) {
        assert(typeof numberOfRespondents === 'number');
        assert(typeof numberOfManagers === 'number');
        assert(typeof numberOfDirectors === 'number');

        if (numberOfRespondents % 1 !== 0 || numberOfRespondents < 1) {
            throw new Error('numberOfRespondents must be an integer greater than or equal to 1.');
        }
        if (numberOfManagers % 1 !== 0 || numberOfManagers < 1) {
            throw new Error('numberOfManagers must be an integer greater than or equal to 1.');
        }
        if (numberOfDirectors % 1 !== 0 || numberOfDirectors < 1) {
            throw new Error('numberOfDirectors must be an integer greater than or equal to 1.');
        }

        this.workers = [];
    }
    dispatchCall() {

    }
}

module.exports = {
    chapterSevenProblemTwoBruteForceSolution: CallCenter,
};
