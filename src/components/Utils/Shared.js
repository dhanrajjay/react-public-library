import React, { useRef } from 'react';

export const useFocus = () => {
	const eleRef = useRef(null);
	const setFocus = () => {eleRef.current && eleRef.current.focus()}
	return [ eleRef, setFocus ];
};
