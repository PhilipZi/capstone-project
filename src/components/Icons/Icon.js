const icons = {
	BlackArrowDown:
		'M20.5 3.0625C20.8398 3.0625 21.1657 3.19749 21.406 3.43777C21.6462 3.67805 21.7812 4.00394 21.7812 4.34375V34.5633L29.8428 26.4991C30.0834 26.2585 30.4097 26.1234 30.75 26.1234C31.0902 26.1234 31.4165 26.2585 31.6571 26.4991C31.8977 26.7397 32.0328 27.066 32.0328 27.4062C32.0328 27.7465 31.8977 28.0728 31.6571 28.3134L21.4071 38.5634C21.2881 38.6827 21.1467 38.7774 20.991 38.842C20.8354 38.9065 20.6685 38.9398 20.5 38.9398C20.3314 38.9398 20.1646 38.9065 20.0089 38.842C19.8533 38.7774 19.7119 38.6827 19.5928 38.5634L9.34285 28.3134C9.10226 28.0728 8.9671 27.7465 8.9671 27.4062C8.9671 27.066 9.10226 26.7397 9.34285 26.4991C9.58343 26.2585 9.90973 26.1234 10.25 26.1234C10.5902 26.1234 10.9165 26.2585 11.1571 26.4991L19.2187 34.5633V4.34375C19.2187 4.00394 19.3537 3.67805 19.594 3.43777C19.8343 3.19749 20.1602 3.0625 20.5 3.0625V3.0625Z',
	delete: 'M8.27,3L3,8.27V15.73L8.27,21H15.73C17.5,19.24 21,15.73 21,15.73V8.27L15.73,3M9.1,5H14.9L19,9.1V14.9L14.9,19H9.1L5,14.9V9.1M9.12,7.71L7.71,9.12L10.59,12L7.71,14.88L9.12,16.29L12,13.41L14.88,16.29L16.29,14.88L13.41,12L16.29,9.12L14.88,7.71L12,10.59',
	play: 'M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z',
	cancel: 'M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z',
};

const Icon = ({variant, size = '48px', color = 'currentColor', fill = 'black'}) => {
	return (
		<svg style={{width: size, color: color, fill: fill}} viewBox="0 0 24 24">
			<path fill={color} d={icons[variant]} />
		</svg>
	);
};

export default Icon;
