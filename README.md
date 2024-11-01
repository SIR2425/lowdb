# lowdb

código exemplo para atividade prática 2

* `appsample.js` código exemplo para iniciar servidor com lowdb e 2 routes // example code to start the server with lowdb and sample implementation of two routes

* `public/script.js`código exemplo que faz um fetch ao servidor para popular a tabela // sample code to fetch the API and populate the table

## todo
### no servodor // at the server 
* implement other routes
* organize code 
* appropriate  status codes / errors

### no cliente // at the client
* other fetches PUT, POST, DELETE
* reorganize code
* notice : every time there is an update to the database you should render its contents again.

## run and test #1
* clone the repository
* `npm install`
* `npm start` ou `npm run start`
* open  a browser http://localhost:3000/table.html
* checkout that the contents of students.json db is fetched via API and displayed in the client side.

## test #2
there is another demo app `applow.js`, just for a simpe lowdb working example on the server side, which can be tested. It just adds and updates records to the database (db.json)
* `npm run startlow`
