> ###### Show all the books from database: http://localhost:5000/v1/books/getAllBooks
> ###### Task 2: http://localhost:5000/v1/books/SpecificGenre
> ###### Task 3: http://localhost:5000/v1/books/SpecificGenreScifi
> ###### Task 4: http://localhost:5000/v1/books/featuredBooks



### Question 1: What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?

**_Answer:_** A model with an interface and schema in MongoDB is a way to define the structure of a collection. It's like a blueprint for our database collection. The interface defines the properties that a document in the collection can have, and the schema defines the data types and validation rules for those properties. This helps to ensure that the data in the collection is consistent and well-formed. This can also help to improve the performance and reliability of our application.

Here's an example of a model with an interface and schema for a collection of users:

```javascript
interface IUser {
  name: string;
  email: string;
  avatar?: string;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String,
  });

const User = model<IUser>("User", userSchema);
```

### Question 2: Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

**_Answer:_** Field filtering in MongoDB is a way to specify which fields to include or exclude in the returned documents. This can be done using the `$fields` operator.

The `$fields` operator takes an object as its argument. The object specifies the fields that should be included or excluded. The `keys` of the object are the field names, and the `values` are boolean values that indicate whether the field should be included or excluded.

To include a field, set the `value` of the `key` to true. To exclude a field, set the `value` of the `key` to false.

For example, The following query will return all documents in the collection, but the age field will be excluded from the results:

```javascript
db.users.find({
  $fields: {
    name: true,
    email: true,
    age: false,
  },
});
```

### Question 3: What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.

**_Answer:_** Instance methods in MongoDB models are **_custom functions_** that can be created to perform specific actions on individual data records (documents) within a collection. They help to add extra functionality to our models and make it easier to work with and manipulate the data in a more convenient way.
Here is an example of a custom instance method:

```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // This method updates the email address for the current user.
  updateEmail(newEmail) {
    this.email = newEmail;
  }
}
```

In this example, the `updateEmail()` method is a custom instance method that can be used to update the email address for the current user.

### Question 4: How do you use comparison operators like `$ne`, `$gt`, `$lt`, `$gte`, and `$lte` in MongoDB queries? Provide examples to illustrate their usage.

**_Answer:_**

```javascript
$ne; // Matches values that are not equal to the given value.
$gt; // Matches if values are greater than the given value.
$lt; // Matches if values are less than the given value.
$gte; // Matches if values are greater or equal to the given value.
$lte; // Matches if values are less or equal to the given value.
```

- To find all documents where the age field is `not equal` to 21:

```javascript
db.users.find({ age: { $ne: 21 } });
```

- To find all documents where the age field is `greater than` 21:

```javascript
db.users.find({ age: { $gt: 21 } });
```

- To find all documents where the 'age' field is `less than` 21:

```javascript
db.users.find({ age: { $lt: 21 } });
```

- To find all documents where the age field is `greater than or equal` to 21:

```javascript
db.users.find({ age: { $gte: 21 } });
```

- To find all documents where the age field is `less than or equal` to 21:

```javascript
db.users.find({ age: { $lte: 21 } });
```

### Question 5: What are MongoDB’s `$in` and `$nin` operators? How can you use them to match values against an array of values or exclude values from a given array?

**_Ansewer:_**
MongoDB's `$in` and `$nin` operators are used to match values against an array of values or exclude values from a given array.

```javascript
$in; // matches documents where the value of a field is equal to any of the values in the array.
$nin; // matches documents where the value of a field is not equal to any of the values in the array.
```

- To find all documents where the age field is `equal to` any of the values in the array [21, 22, 23]:

```javascript
db.collection.find({ age: { $in: [21, 22, 23] } });
```

- To find all documents where the age field is `not equal to` any of the values in the array [21, 22, 23]:

```javascript
db.collection.find({ age: { $nin: [21, 22, 23] } });
```

- To find all documents where the name field is `equal to` "John Doe" or "Jane Doe":

```javascript
db.collection.find({ name: { $in: ["John Doe", "Jane Doe"] } });
```

- To find all documents where the name field is `not equal to` "John Doe":

```javascript
db.collection.find({ name: { $nin: ["John Doe"] } });
```
