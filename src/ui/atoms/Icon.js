import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as assets from "./assets/index";
import Colors from "../particles/Colors";

export const colors = {
	purple: "purple",
	white: "white",
};

const StyledDiv = styled.img`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	color: ${(props) =>
		props.color === colors.purple ? Colors.brand_primary : Colors.white};
`;

const Icon = (props) => {
	const { name, color } = props;

	if (!assets[name]) {
		return null;
	}

	return <StyledDiv src={assets[name]} color={color} />;
};

Icon.propTypes = {
	color: PropTypes.oneOf(Object.keys(colors)),
};

Icon.defaultProps = {
	color: colors.white,
};

export default Icon;
