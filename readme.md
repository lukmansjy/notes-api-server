# Note API Server
Latihan membuat Note API backend yang dibuat menggunakan Express Js.

Untuk menjalankan file silakan clone dan jalankan:

```
npm install
```

Dan untuk menjalankan server API jalankan perintah (diperlukan library `nodemon`):

```
npm start
```

## API Request URL
* [GET] (get all todos) `http://localhost:5000/api/v1/todos`
* [GET] (get one todo) `http://localhost:5000/api/v1/todo/1` (1 adalah id todo)
* [POST] (post todo) `http://localhost:5000/api/v1/todo`
* [PATCH] (edit todo) `http://localhost:5000/api/v1/todo/1` (1 adalah id todo yg ingin diedit)
* [DELETE] `http://localhost:5000/api/v1/todo/1`