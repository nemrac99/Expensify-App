import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("set default state", () => {
	const state = expensesReducer(undefined, {type: "@@INIT"});
	expect(state).toEqual([]);
});

test("remove expense by id", () => {
	const action = {
		type: "REMOVE_EXPENSE",
		id: expenses[1].id
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test("remove not remove expenses on non-existant id", () => {
	const action = {
		type: "REMOVE_EXPENSE",
		id: -1
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test("add expense", () => {
	const expense = {
		id: 109,
		description: "Laptop",
		note: "this is a test",
		createdAt: 20000,
		amount: 29500
	}
	const action = {
		type: "ADD_EXPENSE",
		expense
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, expense]);
});

test("edit expense with id", () => {
	const updates = {
		description: "chewing gum"
	}
	const action = {
		type: "EDIT_EXPENSE",
		id: expenses[1].id,
		updates
	}
	const state = expensesReducer(expenses, action);
	expect(state[1].description).toBe("chewing gum");
});

test("edit expense WITHOUT id", () => {
	const updates = {
		description: "chewing gum"
	}
	const action = {
		type: "EDIT_EXPENSE",
		id: 13,
		updates
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});


// edit not edit expense if id not found