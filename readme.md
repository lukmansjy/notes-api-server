# Note API Server
Latihan membuat Note API backend yang dibuat menggunakan Express Js.

## Branch
* Branch Master - hanya manipulasi data array
* Branch MySQL - Menggunakan database MySQL
* Branch sequelize - Menggunakan sequelize ORM
* Branch JWT - Menggunakan JWT

Untuk menggunakan branch MySQL silakan membuat table `course-express` dan kemudian import file `course-express.sql` yang ada didalam project ini.

Untuk menggunakan branch sequelize buat table `course-express` dan jalanakan perintah `npx sequelize db:migrate` untuk migrasi table yang ada di folder migrations. Kemudian jalankan `npx sequelize db:seed:all ` untuk mengisi data dummy yang ada di folder seeders

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