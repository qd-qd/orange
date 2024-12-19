import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
	matches: ["https://marketplace.visualstudio.com/*"],
	all_frames: true,
};

// Attach an event listener to the document
document.addEventListener("click", (event: MouseEvent) => {
	// Check if the clicked element is a link
	const link = (event.target as Element)?.closest("a");

	if (link?.href.startsWith("vscode:")) {
		// Prevent the default action
		event.preventDefault();

		// Update the href to use 'cursor:' instead of 'vscode:'
		const updatedHref = link.href.replace("vscode:", "cursor:");

		// Optionally, navigate to the updated link
		window.location.href = updatedHref;

		// Log or show the updated link for debugging
		console.debug("Opening Cursor instead of VSCode");
	}
});
