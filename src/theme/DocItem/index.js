// Add utterances comments at the bottom of custom `DocItem` theme.

import React from 'react';
import OriginalDocItem from "@theme-original/DocItem";
import Comment from "../../components/comments"

export default function CustomDocItem(props) {
	return (
		<>
			<OriginalDocItem {...props} />
			<Comment {...props} />
		</>
	);
}
