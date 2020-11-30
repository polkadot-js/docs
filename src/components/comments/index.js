import React, { useEffect } from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import styles from "./styles.module.css";
import "./styles.css";

function Comments(props) {
	const { isDarkTheme } = useThemeContext();
	const theme = isDarkTheme ? "github-dark" : "github-light";

	useEffect(() => {
		const script = document.createElement('script');

		script.src = "https://utteranc.es/client.js";
		script.setAttribute('repo', "polkadot-js/docs");
		script.setAttribute('issue-term', "pathname");
		script.setAttribute('label', "comment");
		script.setAttribute('theme', theme);
		script.crossOrigin = "anonymous";
		script.async = true;

		document.getElementById("comment-container").appendChild(script);
	}, []);


	return (
		<div id="comment-container" className={'container ' + styles.commentWrapper}></div>
	);
}

export default Comments;
