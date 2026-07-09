---
title: "JSONPlaceholder API Reference"
weight: 1
# bookFlatSection: false
bookToc: true
bookHidden: false
bookCollapseSection: false
bookComments: false
bookSearchExclude: false
# bookHref: ''
# bookIcon: ''
---

# JSONPlaceholder API Reference

---

[JSONPlaceholder](json-url) is a free, public RESTful API that supports standard `HTTP` methods and `JSON` responses. 
- Built with Bun and Elysia.js
- 6 endpoint types
- Can be tested directly from the command line
- No authentication required

[json-url]: https://jsonplaceholder.dev/
[json-repo]: https://github.com/ckissi/jsonplaceholder-api 

> [!TIP]
> This guide covers using `cURL` to test endpoints and references a different __base URL__. This removes the need for cloning the [server's repository](json-repo) for local testing. 

---

## Base URL

```sh
# Public API (cURL)
https://jsonplaceholder.typicode.com/
```

To test endpoints from the command line, run:
```sh
# Set base URL
export BASE_URL="https://jsonplaceholder.typicode.com"

# Then test the connection
curl $BASE_URL/

# Test endpoints
curl $BASE_URL/<resource>/<id>
```

---

## Resources

| Type    | Description   | Count   |
|---------|---------------|---------|
| Users   | User accounts with contact information.  | 10 |
| Posts   | Blog posts with titles.    | 100 |
| Comments | Blog post comments.       | 500 |
| Albums  | Photo albums title and user info. | 100 |
| Photos  | Photos with titles, user info, and individual URLs. | 5000 |
| ToDos   | To-do items with title and completion status. | 200 | 

---

## HTTP methods

All 6 resources support the following HTTP methods:

| HTTP method | Description | Example | 
|-------------|-------------|---------|
| `GET`       | Retrieve the resource | `GET /users` |
| `POST`      | Create new resource   | `POST /users` |
| `DELETE`    | Delete specified resource | `DELETE /users/1` |
| `PUT`       | Update resource       | `PUT /users/1` |
| `PATCH`     | Partially update resource | `PATCH /users/1` |

### Common requests

__GET__
```sh
 # Get all resources
 GET /users
 
 # Get single resource
 GET /users/1
 
 # Get related resources
 GET /users/1/todos  
 
 # Filter by related resource (userId=1)
 GET /posts?userID=1
```

__DELETE__
```sh
 # Delete comment with id=1
 DELETE /comments/1
 
 # Delete photos with id=1
 DELETE /photos/1

 # Delete posts with userId=1
 DELETE /posts?userID=1
```

---

## HTTP status codes

| HTTP status code  | Response     | 
|-------------------|---------------|
| `200 - OK`        | `GET`, `PUT`, or `PATCH` success |
| `201 - Created`   |`POST` success      | 
| `204 - No content` | `DELETE` success  | 
| `400 - Bad request`| Invalid JSON format or missing data in required fields | 
| `404 - Not found`  | Resource with `id` does not exist  |
| `500 - Server error` | Internal server error |

---

## Response format

Responses are provided in a JSON object format.
- __Success__ responses return data
- __Error__ responses return an error message

__Example request__
```sh
 # Get single post with id=4
 GET /posts/4
```

__Success Response__
```sh
  "userId": 1,
  "id": 4,
  "title": "eum et est occaecati",
  "body": "ullam et saepe reiciendis voluptatem adipisci..."
``` 

__Error response__
```sh
 {
   "error": "Post not found",
   "status": "error"
 }
```
---

## Schemas

{{< tabs >}}
<!-- tab 1: users -->
{{% tab "Users" %}}

Users

```sh
interface User {
 # min data
  id: number
  name: string
  username: string
  email: string
 # full data
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
     
    }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
   }
}
```
{{% /tab %}}

<!-- tab 2: posts -->
{{% tab "Posts" %}}

Posts

```sh
interface Post {
  id: number
  userId: number
  title: string
  body: string
}
```
{{% /tab %}}

<!-- tab 3: comments -->
{{% tab "Comments" %}}

Comments

```sh
interface Comment {
  id: number
  postId: number
  name: string
  email: string
  body: string
}
```
{{% /tab %}}

<!-- tab 4: photos -->
{{% tab "Photos" %}}

Photos

```sh
interface Album {
  id: number
  userId: number
  title: string
}
```
{{% /tab %}}

<!-- tab 5: albums -->
{{% tab "Albums" %}}

Albums

```sh
interface Photo {
  id: number
  albumId: number
  title: string
  url: string
  thumbnailUrl: string
}
```
{{% /tab %}}

<!-- tab 6: to-dos -->
{{% tab "To-Dos" %}} 

To-Dos

```sh
interface Todo {
  id: number
  userId: number
  title: string
  completed: boolean
}
```
{{% /tab %}}

{{< /tabs >}}

---

## Additional cURL resources

### Error handling and testing

```sh
# Check HTTP status code
curl -w "%{http_code}" -s -o /dev/null $BASE_URL/users/100

# 404 - not found
curl -i $BASE_URL/users/100

# 400 - invalid JSON
curl -X POST $BASE_URL/posts \
  -H "Content-Type: application/json" \
  -d '{"invalid": json}'

```

### Create user batch with shell script

```sh
#!/bin/bash
# create-batch-user-posts.sh

BASE_URL="http://localhost:3000"

posts=(
  '{"userId": 1, "title": "Lorem ipsum", "body": "dolor sit amet"}'
  '{"userId": 3, "title": "consectetur adipiscing elit", "body": "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}'
  '{"userId": 7, "title": "Ut enim ad minim veniam", "body": "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}'
)

for post in "${posts[@]}"; do
  echo "Creating post: $post"
  curl -X POST $BASE_URL/posts \
    -H "Content-Type: application/json" \
    -d "$post"
  echo -e "\n---"
done
```



