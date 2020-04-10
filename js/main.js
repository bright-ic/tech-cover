// script for opening and closing the sidebar
if(document.querySelector('.hamburger_menu')) {
	const hamburger_menu = document.querySelector('.hamburger_menu');
	hamburger_menu.addEventListener('click', () => {
	 const sidebar = document.querySelector(".sidebar");
	 if(sidebar.classList.contains("open")) {
		sidebar.style.transform = "translateX(-350px)";
		 sidebar.className = sidebar.className.replace(/\bopen\b/,'close')
	 }
	 else if(sidebar.classList.contains("close")) {
		sidebar.style.transform = "translateX(0px)";
		sidebar.className = sidebar.className.replace(/\bclose\b/,'open');
	 }
	});
}