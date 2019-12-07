import React, { Component } from 'react';


class App extends Component {
	
	constructor (props) {
		super(props);

		this.state = {}
	}

	activateImageLoader (image, tinyImage, alt) {
		let cover = document.querySelector('.o-image-cover');
		let targetImageElement = document.querySelector('#o-image');
		// create a new image element for the tiny image
		let thumbnail = new Image();
		
		thumbnail.src = tinyImage;
		
		// if the image is loaded add the class `c-cover__image--loaded`
		// which will display the tiny image
		thumbnail.onload = () => {
			targetImageElement.classList.add('o-image--loaded');
		};

		// create a new image element for the real image
		var bigImageElement = new Image();

		// add `c-cover__image` class to the created image elemnet that is
		// going to resized the image to fit the size of the container by
		// keeping the aspect ratio
		bigImageElement.classList.add('o-image');
		
		// set the source of the created image element equals to the source
		// of the real image
		bigImageElement.src = image;
		
		
		// if the image is loaded add the class `c-cover__image--loaded`
		// which will display the real image
		bigImageElement.onload = () => {
			this.props.classNames.forEach((classname) => {
				bigImageElement.classList.add(classname);
			});
			bigImageElement.classList.add('o-image--loaded');
			bigImageElement.setAttribute('alt', alt)
		};

		// Append real image in the cover section
		cover.replaceChild(bigImageElement, targetImageElement);
	}

	componentDidMount () {
		this.activateImageLoader(this.props.image, this.props.tinyImage, this.props.alt)
	}

	render() {

		return (
			// Tiny image will be loaded first as default image.
			<div className="o-image-cover">
				<img src={this.props.image}
					 alt={this.props.alt}
					 className={'o-image o-image--blurry'}
					 id="o-image" />
			</div>
		);
	}
}

export default App;
