

const  closeBtnWindow = document.querySelector('.close-modal-window');
const btnsModalWindows = document.querySelectorAll('.show-modal-window');
const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');

//functions

const modalWindowsClassRemove = function(){
  modalWindow.classList.remove('hidden')
  overlay.classList.remove('hidden')
}
const modalWindowsClassAdd = function(){
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
}



btnsModalWindows.forEach((item) => {
  item.addEventListener('click', modalWindowsClassRemove)
});

closeBtnWindow.addEventListener('click',modalWindowsClassAdd);
overlay.addEventListener('click',modalWindowsClassAdd);