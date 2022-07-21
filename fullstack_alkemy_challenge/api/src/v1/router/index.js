import users from "./routes/users";
import operations from "./routes/operations";
import categories from "./routes/categories";

const routes = [users, operations, categories];

/* Routes*/
const router = (app, db) => {
	routes.forEach((route) => route(app, db));
};

export default router;
