# react-slider
There is a functional slider build with the tools below
- React
- Redux
- Webpack
- Babel

You can setup the styles for each component directly on the existent files, if you want to change the slide images and hovers you should edit the src/API/SlidersData.js file, by default it loads a some images included in this project but you can implement a call from an API using [Axios](https://axios-http.com/docs/intro) or fetch the important step here is whatever you get from the server you should map it to instantiate this class.

```javascript
class SlideData {
    constructor(imageUrl, hoverImageUrl, linkSpan, linkUrl){
        this.imageUrl = imageUrl, 
        this.hoverImageUrl = hoverImageUrl, 
        this.linkSpan = linkSpan, 
        this.linkUrl = linkUrl
    }
}
```

If you create and object with the attribute **imageUrl** empty, the slide will not be rendered, also if you want to add a link just make sure to fill provide **linkSpan** and **linkUrl**.

## Setup the project

Clone
```
git clone https://github.com/arturgeek/react-slider.git
```

Enter the folder
```
cd react-slider
```

Install the project
Make sure you have NPM installed if no go [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Run the project

Then Run
```
npm install
```

To run the project run
```
npm run start
```

Nomrally the project should run on http://localhost:3000/ but, depending your internall configuratio
the port could be different so check out the console for the right url

![alt text](https://github.com/arturgeek/react-slider/blob/main/static/run.jpg "Run console")
