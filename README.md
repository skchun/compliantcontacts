# Overview

Provides 4 functions for working with a contact list

# Installation

Provide the following scripts in your html file:
```
<script src="//philipmjohnson.github.io/ics314f15/morea/underscore/underscore-min.js"></script>
<script src="contacts.js"></script>
```

# Usage

Here are example calls to the analytic functions
```
<script>
  console.log(contactList.numContacts()); // print 4
  console.log(contactList.findContact("Casanova")); //  print the henri Contact instance.
  contactList.deleteContact("Philip", "Johnson"); //  delete philip's Contact instance.
  console.log(contactList.listContacts()); //  string containing contacts in sorted order by last name.
</script>
```

Consult the contacts.js file for more details on these functions.

# Credits

Uses the [Underscore](http://underscorejs.org) library.
