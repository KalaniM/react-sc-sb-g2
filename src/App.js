import React from "react";
import Badge, { colors } from "./ui/atoms/Badge";
import Icon from "./ui/atoms/Icon";

export default function App() {
	return (
		<div className='App'>
			<Badge text='IRL' color={colors.purple} />
			<Badge text='IRL' color={colors.grey} />
			<Icon name='bell' />
		</div>
	);
}
