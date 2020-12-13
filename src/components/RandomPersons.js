import React from "react";
import { Grid } from "@material-ui/core";
import LoadingCard from "./RandomPersonCardLoading";
import Card from "./RandomPersonCard";
import LazyLoad from "react-lazyload";

let count = 0;
const reducer = (person, filter) =>
	person.firstNameTh.includes(filter) ||
	person.studentCode.includes(filter) ||
	(person.groupNumber + "-" + person.numberInGroup).includes(filter);
const RandomPersons = ({ persons, filter }) => (
	<Grid container direction="column" spacing={2}>
		{persons.map(function (person) {
			let randomKey = ++count;
			if (person.random === true) {
				return (
					<Grid item key={randomKey}>
						<LoadingCard />
					</Grid>
				);
			} else if (reducer(person, filter)) {
				return (
					<Grid item key={randomKey}>
						<LazyLoad offset={600}>
							<Card Person={person} />
						</LazyLoad>
					</Grid>
				);
			}
		})}
	</Grid>
);

export default React.memo(RandomPersons, (prev, next) => {
	return (
		prev.persons[0] === next.persons[0] &&
		prev.persons.length === next.persons.length &&
		prev.filter === next.filter
	);
});
