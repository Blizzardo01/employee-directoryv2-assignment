import express from "express";
import employeeRouter from "#api/employees";
const app = express();
export default app;

//logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});


//using our router
app.use("/employees", employeeRouter);

//parsing/converting middleware
app.use(express.json());

//error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send("Sorry! Something went wrong :(");
});


app.get("/", (req, res, next) => {
    res.status(200).send("Hello employees!");
});
