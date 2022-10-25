export const sliderActionsReducer = (currentSlideIndex, action) => {
    switch(action.type) {
      case "NextSlide":

        console.log(currentSlideIndex, slides.length);
        if( currentSlideIndex >= slides.length ){
          currentSlideIndex = 0;
        }
        console.log(currentSlideIndex);
        setActiveSlide(slides[ currentSlideIndex ].imageUrl)
        
        return currentSlideIndex + 1;
      default:
        return currentSlideIndex;
    }
  }