import {Title} from "rbx";
import React from "react";

const HeaderBar = ({ title }) => (
    <Title>{ title || 'loading...' }</Title>
);

export default HeaderBar;
