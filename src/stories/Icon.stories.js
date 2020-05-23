import { withKnobs, boolean, number, select } from "@storybook/addon-knobs";
import * as assets from "../ui/atoms/assets/index";
import React from "react";
import Icon, { colors } from "../ui/atoms/Icon";
import styled from "styled-components";

const Container = styled.div`
	background-color: grey;
	display: grid;
	grid-gap: 12px;
	grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	width: 100%;

	figure {
		display: flex;
		flex-direction: column;
		text-align: center;
		border: 1px solid transparent;
		border-radius: 4px;
		margin: 24px;
		border-color: #e9ecef;
		box-shadow: 0 0.25rem 0.125rem 0 rgba(0, 0, 0, 0.05);

		> div {
			padding: 16px;
		}
	}

	figcaption {
		color: var(--text-secondary);
		margin: 0;
		border: 0;
		font-size: 12px;
		border-top: 1px solid #e9ecef;
		font-weight: 300;
		padding: 4px 2px;
	}
`;

const iconsList = Object.keys(assets)
	.filter((key) => assets[key].endsWith(".svg"))
	.sort();

const iconsColors = Object.keys(colors).sort();

export default {
	title: "Icon",
	component: Icon,
	decorators: [withKnobs],
};

export const listOfIcons = () => (
	<Container>
		{iconsList.map((iconName) => (
			<figure key={iconName}>
				<Icon name={iconName} color={select("color", ["", ...iconsColors])} />
				<figcaption>{iconName}</figcaption>
			</figure>
		))}
	</Container>
);

export const iconComponent = () => (
	<Icon
		name={select("name", iconsList, "bell")}
		color={select("color", ["", ...iconsColors])}
	/>
);
