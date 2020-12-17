import selectExpenses from "../../selectors/expenses";
import moment from "moment";
import expenses from "../../tests/fixtures/expenses";

test("sort by date", () => {
	const filters = {
		text: "",
		sortBy: "date",
		startDate: undefined,
		endDate: undefined
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([
		expenses[2],
		expenses[0],
		expenses[1]
	]); 
});

test("filter by endDate", () => {
	const filters = {
		text: "",
		sortBy: "date",
		startDate: undefined,
		endDate: moment(0)
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([
		expenses[0],
		expenses[1]
	]);
});


test("filter by startDate", () => {
	const filters = {
		text: "",
		sortBy: "date",
		startDate: moment(0),
		endDate: undefined
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([
		expenses[2],
		expenses[0]
	]);
});

test("filter by text value", () => {
	const filters = {
		text: "e",
		sortBy: "date",
		startDate: undefined,
		endDate: undefined
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([
		expenses[2],
		expenses[1]
	]);
});

test("sort by amount", () => {
	const filters = {
		text: "",
		sortBy: "date",
		startDate: undefined,
		endDate: undefined
	}
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([
		expenses[2],
		expenses[0],
		expenses[1]
	]);
});
