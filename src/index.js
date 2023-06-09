const express = require('express');
const cors = require('cors');

const port = 9090;
const app = express();
app.use(express.json());

app.use(cors());

app.use(express.static("."));

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});


const { rootRoute } = require("./routes/rootRoute");
app.use("/api", rootRoute);


//swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));








