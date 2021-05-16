---
id: api
title: API
sidebar_label: API
---

## Rest vs GraphQL

### REST

- Multiple endpoints (GET /users, POST /products) - multiple URLS's are exposed by web service
- (JSON) data is exchanged
- We can use any server-side language, any Frontend framework
- URL Driven

Methods

- GET: Get a resource from the Server
- POST: Post a Resource to the Server (create or append Resource)
- PUT: Put a Resource onto the Server (create or overwrite a Resource)
- PATCH: Update parts of an existing Resource on the Server
- DELETE: Delete a Resource on the Server
- OPTIONS: Determine whether follow-up Request is allowed (sent automatically)

### GraphQL

- One endpoint only (POST /graphql)
- (JSON) data is exchanged
- We can use any server-side language, any Frontend framework
- Query Language
