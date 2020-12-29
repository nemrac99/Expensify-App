import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import { SingleDatePicker } from 'react-dates';
import moment from "moment";


test("should render expense form", () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});
test("should render expense form with data", () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
	expect(wrapper).toMatchSnapshot();
});

test("render error for invalid form submission", () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
	wrapper.find("form").simulate("submit", { 
		preventDefault: () => {}
	});
	expect(wrapper.state("error").length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
});

test("set description on input change", () => {
	const wrapper = shallow(<ExpenseForm />);
	const value = "New Description";
	wrapper.find("input").at(0).simulate("change", {
		target: { value }
	});
	expect(wrapper.state("description")).toBe(value);
});

test("set note on textarea change", () => {
	const wrapper = shallow(<ExpenseForm />);
	const value = "New Note";
	wrapper.find("textarea").simulate("change", {
		target: { value }
	});
	expect(wrapper.state("note")).toBe(value);
});

test("set amount on input change", () => {
	const wrapper = shallow(<ExpenseForm />);
	const value = "23.50";
	wrapper.find("input").at(1).simulate("change", {
		target: { value }
	});
	expect(wrapper.state("amount")).toBe(value);
});

test("do NOT set amount with invalid value", () => {
	const wrapper = shallow(<ExpenseForm />);
	const originalValue = "23.50";
	const value = "12.122";
	wrapper.find("input").at(1).simulate("change", {
		target: { value }
	});
	expect(wrapper.state("amount")).toBe("");
});

test("call onSubmit prop for valid form submission", () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
	wrapper.find("form").simulate("submit", { 
		preventDefault: () => {}
	});
	// error state should be empty string
	expect(wrapper.state("error")).toBe("");
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: expenses[0].description,
		amount: expenses[0].amount,
		note: expenses[0].note,
		createdAt: expenses[0].createdAt
	});
});

test("set new date onDateChange", () => {
	const wrapper = shallow(<ExpenseForm />);
	const now = moment();
	wrapper.find(SingleDatePicker).prop("onDateChange")(now);
	expect(wrapper.state("createdAt")).toEqual(now);
});

test("set calendar focus onFocusChange", () => {
	const wrapper = shallow(<ExpenseForm />);
	const focused = true;
	// find the date picker & trigger onFocusChange method by passing in "focused" variable
	wrapper.find(SingleDatePicker).prop("onFocusChange")({focused});

	expect(wrapper.state("calendarFocused")).toEqual(focused);
});