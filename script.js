

const  closeBtnWindow = document.querySelector('.close-modal-window');
const btnsModalWindows = document.querySelectorAll('.show-modal-window');
const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');

//functions

const modalWindows = function(){
  modalWindow.classList.remove('hidden')
  overlay.classList.remove('hidden')
}




btnsModalWindows.forEach((item) => {
  item.addEventListener('click', modalWindows)

});

closeBtnWindow.addEventListener('click',function(){
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
});