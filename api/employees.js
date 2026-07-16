import express from "express";
import { getEmployee, getRandomEmployee, makeNewEmployee } from "#db/employees";
import employees from "#db/employees";
const employeeRouter = express.Router();


employeeRouter.get("/", (req, res, next) => {
    res.send(employees);
});


// Note: this middleware has to come first! Otherwise, Express will treat
// "random" as the argument to the `id` parameter of /employees/:id.
employeeRouter.get("/random", (req, res) => {
  const employee = getRandomEmployee();
  res.send(employee);
});



employeeRouter.get("/:id", (req, res) => {
  const { id } = req.params;

  // req.params are always strings, so we need to convert `id` into a number
  // before we can use it to find the employee
  const employee = getEmployee(+id);

  if (!employee) {
    return res.status(404).send(`Employee #${id} not found.`);
  }

  res.status(200).send(employee);
});



employeeRouter.post("/", (req, res, next) => {
    const { name } = req.body;

    if (!body.name) {
        res.status(400).send("New employee must have a name.");
    }

    const newEmployee = makeNewEmployee(name);

    res.status(201).send(newEmployee);
});

export default employeeRouter;