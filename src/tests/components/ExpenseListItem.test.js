import React from 'react';
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";
import { Link } from "react-router-dom";

test("render expense list item", () => {
	const wrapper = shallow(<ExpenseListItem {...expenses[1]} />);
	expect(wrapper).toMatchSnapshot();
});

