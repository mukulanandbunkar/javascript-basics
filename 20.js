const  scrollContainer = document.getElementById('scroll-container');
const percentScroll = document.getElementById('percent-scroll');
const scrollIndicator = document.getElementById('scroll-indicator');


scrollContainer.addEventListener('scroll', (event) => {
   console.log( scrollContainer.scrollHeight, 'scrollHeight');
   console.log( scrollContainer.clientHeight, 'clientHeight');
   console.log( scrollContainer.offsetHeight, 'offsetHeight');
   console.log( scrollContainer.scrollTop, 'offsetHeight');
   const scrollPercent = ( scrollContainer.scrollTop)/  (scrollContainer.scrollHeight - scrollContainer.clientHeight) * 100
   console.log(Math.round(scrollPercent.toFixed(2)) ,'%');
   percentScroll.innerText = `${Math.round(scrollPercent.toFixed(2))}%`
   scrollIndicator.style.width = `${Math.round(scrollPercent.toFixed(2))}%`

})