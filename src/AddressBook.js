function AddressBook() {
    this.contact = [];
    this.initialComplete = false;
}

AddressBook.prototype.addContact = function(contact) {
    this.contact.push(contact);
}

AddressBook.prototype.getContact = function(index) {
    return this.contact[index];
}

AddressBook.prototype.deleteContact = function(index) {
    this.contact.splice(index, 1);
}

AddressBook.prototype.getInitialContacts = function(callback) {
    var self = this;
    setTimeout(function() {
        self.initialComplete = true;
        if (callback) {
            return callback();
        }
    }, 5);
}

module.exports = AddressBook;