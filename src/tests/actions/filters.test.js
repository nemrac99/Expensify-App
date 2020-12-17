import moment from "moment";
import { 
	setStartDate, 
	setEndDate, 
	setTextFilter, 
	sortByAmount, 
	sortByDate 
} from "../../actions/filters";

test("generate setStartDate action object", () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: "SET_START_DATE",
		startDate: moment(0)
	});
});

test("generate setEndDate action object", () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: "SET_END_DATE",
		endDate: moment(0)
	});
});

test("generate setTextFilter action object with value", () => {
	const action = setTextFilter("some text here");
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: "some text here"
	});
});

test("generate setTextFilter action object with default value", () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ""
	});
});

test("generate sortByAmount action object", () => {
	expect(sortByAmount()).toEqual({type: "SORT_BY_AMOUNT"});
});

test("generate sortByDate action object", () => {
	expect(sortByDate()).toEqual({type: "SORT_BY_DATE"});
});
