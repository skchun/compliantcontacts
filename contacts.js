/* globals _ */

/**
 * Contact is an object that initializes parameters based on input
 * @param firstName First name of contact
 * @param lastName Last name of contact
 * @param address Address of contact
 * @param zipCode Zip code of contact
 * @param telNum Telephone number of contact
 * @constructor
 */
var Contact = function(firstName, lastName, address, zipCode, telNum) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.zipcode = zipCode;
  this.telNum = telNum;
  var callNum = 0;

  /**
   * Increments the amount of calls a contact receives
   * @returns {boolean}
   */
  this.call = function() {
    callNum++;
    return true;
  };

  /**
   * Returns the amount of calls a contact has received
   * @returns {number}
   */
  this.numCalls = function() {
    return callNum;
  };

};

/**
 * ContactList is a constructor
 * @constructor
 */
var ContactList = function() {

  var contactList = [];

  /**
   * addContact adds a contact to the contact list
   * @param contact is a contact
   * @returns {boolean}
   */
  this.addContact = function(contact) {
    contactList.push(contact);
    return true;
  };

  /**
   * numContacts returns the count of contacts
   * @returns {Number}
   */
  this.numContacts = function() {
    return contactList.length;
  };

  /**
   * findContact returns the index of the searched contact
   * @param last is the last name of the contact
   * @returns {Array}
   */
  this.findContact = function(last) {
    var lastNameList = [];
    for(var i = 0; i < contactList.length; i++ )
    {
      if(contactList[i].lastName === last)
      {
        lastNameList.push(contactList[i]);
      }
    }
    return lastNameList;
  };
  /**
   * deleteContact removes a contact in the contact list
   * @param first is the first name of the contact
   * @param last is the last name of the contact
   */
  this.deleteContact = function(first, last) {
    for(var i = 0; i < contactList.length; i++)
    {
      if(contactList[i].firstName === first && contactList[i].lastName === last)
      {
        contactList.splice(i, 1);
      }
    }

  };
  /**
   * listContacts returns contact list sorted by last name
   * @returns {*}
   */
  this.listContacts = function() {
    return _.sortBy(contactList, "lastName");
  };

};

