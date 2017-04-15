var AddressBook = require('../src/AddressBook.js');
var Contact = require('../src/Contact.js');

describe('Address Book', function() {
    var addressBook;
    var thisContact;

    beforeEach(function() {
        addressBook = new AddressBook();
        thisContact = new Contact();
    });

    it('should be able to add a contact', function() {
        addressBook.addContact(thisContact);
        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete a contact', function() {
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);
        expect(addressBook.getContact(0)).toBeUndefined();
    });
});

describe('Async addressbook', function() {
    var addressBook = new AddressBook();
    beforeEach(function(done) {
        addressBook.getInitialContacts(function() {
            done();
        });
    });
    it('should grab inital contracts', function(done) {
        addressBook.getInitialContacts();
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});