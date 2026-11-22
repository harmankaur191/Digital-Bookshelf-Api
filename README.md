# Reflection
## Separating routes, models, and database connections into different directories:
Separating concerns makes the codebase easier to read, maintain, test and scale. Each file has a single clear purpose. Depending on their purpose each is placed in its respective folder to the keep file structure organized and easy to navigate through. This also helps when new functionality needs to be added. Additional models, routes etc can simply be stored in the same organized manner.

## Difference between PUT and PATCH HTTP methods
PUT conventionally replaces an entire document with the payload sent in the request.
PATCH conventionally applies a partial modification to existing fields of a resource.

This PUT /:id endpoint resembles a PATCH more closely because Book.findByIdAndUpdate(id, req.body) only updates the fields included in req.body and leaves any omitted fields on the existing document unchanged rather than overwriting or clearing the whole record.
## Good practice for the response to send back to client after a successful deletion
In a JSON REST API, returning a 200 OK status with a confirmation message and metadata such as the deleted document is good practice so that the client and UIs can confirm what was removed. When no document matches the ID sending a 404 NOT FOUND status is also essential.