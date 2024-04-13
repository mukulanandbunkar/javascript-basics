//SCROLL FUNCTIONALITY

const  scrollContainer = document.getElementById('scroll-container');
const percentScroll = document.getElementById('percent-scroll');
const scrollIndicator = document.getElementById('scroll-indicator');

/**
 * Scroll height
 * scroll height is the total height the screen height + the height which we can scroll
 * clientHeight
 * it is the height if the client or we can say it is the height of the screen
 * scroll top 
 * it is the  height travel by the scroll
 */

scrollContainer.addEventListener('scroll', (event) => {
   console.log( scrollContainer.scrollHeight, 'scrollHeight');
   console.log( scrollContainer.clientHeight, 'clientHeight');
   console.log( scrollContainer.offsetHeight, 'offsetHeight');
   console.log( scrollContainer.scrollTop, 'offsetHeight');
   const scrollPercent = ( scrollContainer.scrollTop)/  (scrollContainer.scrollHeight - scrollContainer.clientHeight) * 100
   console.log(Math.round(scrollPercent.toFixed(2)) ,'%');
   percentScroll.innerText = `${Math.round(scrollPercent.toFixed(2))}%`;
   scrollIndicator.style.width = `${Math.round(scrollPercent.toFixed(2))}%`;
})
const scrollToTop = () =>  scrollContainer.scrollTo(0,0) // scrolTo(x, y)
const scrollToBottom = () =>  scrollContainer.scrollTo(0, scrollContainer.scrollHeight)



