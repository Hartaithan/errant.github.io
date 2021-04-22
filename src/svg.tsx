interface IDynamicIcon {
	svg: string;
}

const DynamicIcon: React.FC<IDynamicIcon> = ({ svg }) => {
	switch (svg) {
		case "playmarket":
			return (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56L1 22.115V2.093l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zM1.46.433c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011L15.948 7.21l-3.846 3.835L1.46.433z" />
				</svg>
			);
		case "link":
			return (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
				</svg>
			);
		case "github":
			return (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
				</svg>
			);
		default:
			return (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
				</svg>
			);
	}
};

export default DynamicIcon;
