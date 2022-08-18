const BackArrow = () => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 41 42"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_df_40_274)">
				<circle
					cx="20.5"
					cy="20.5"
					r="13.5"
					fill="#D9D9D9"
					fillOpacity="0.6"
					shapeRendering="crispEdges"
				/>
			</g>
			<path
				d="M12 19H23C24.0609 19 25.0783 19.4214 25.8284 20.1716C26.5786 20.9217 27 21.9391 27 23C27 24.0609 26.5786 25.0783 25.8284 25.8284C25.0783 26.5786 24.0609 27 23 27H22M16 23L12 19L16 15V23Z"
				stroke="black"
				strokeOpacity="0.7"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<defs>
				<filter
					id="filter0_df_40_274"
					x="0"
					y="0"
					width="41"
					height="42"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_40_274"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_40_274"
						result="shape"
					/>
					<feGaussianBlur stdDeviation="3.5" result="effect2_foregroundBlur_40_274" />
				</filter>
			</defs>
		</svg>
	);
};

export default BackArrow;
