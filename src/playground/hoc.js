// higher order component HOC - component that renders another component
/*
	reuse code
	render hijacking
	prop manipulation
	abstract state
*/
import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>Info is: {props.info}</p>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private info - do not divulge.</p>}
			<WrappedComponent {...props} />
		</div>
	);
}


const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAuthenticated ? (
				<WrappedComponent {...props} />
			) : (
				<p>Please login to continue</p>
			)}
		</div>
	);
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)



//ReactDOM.render(<AdminInfo isAdmin={true} info="this is a test"/>, document.getElementById("app"))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="this is a test"/>, document.getElementById("app"));