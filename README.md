# Reflection
## Separating routes, models, and databases connection into different directories:
Separating concerns makes the codebase easier to read, maintain, test and scale. Each file has a single clear purpose. Depending on their purpose each is placed in their respective folder to keep file structire organzied and each to nagivate through. This also helps when new functionality needs to be added. Different model, routes etc can simply be stored in the same organzied manner.

## Difference between PUT and PATCH HTTP methods
PUT conventionally replaces an entire document with the payload sent in the request.
PATCH conventionally applies a partial modification to existing fields of a resource.

PUT /:id endpoint resembles a PATCH more closely because Book.findByIdAndUpdate(id, req.body) on;y updates the fields included in req.body and leaves any omitted fields on the existing document unchanged rather than overwriting or clearing the whole record.
## Good practice for the response to send back to client after a successful deletion
Sending a JSON REST APIs status: 200 OK with a confirmation message and metadata such as deleted document is a good practice so that the client and UIs can confirm what was removed. When no document matches the ID sending 404 NOT FOUND status is also essential.