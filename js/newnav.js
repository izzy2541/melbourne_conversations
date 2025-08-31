//Ensures Javascript doesnt run until after the webpage is loaded
document.addEventListener("DOMContentLoaded", () => {
  //Variables
  const menu_toggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const menuItems = document.querySelectorAll(".menu-item");
  const viewer = document.getElementById("viewer");
  const headings = document.querySelectorAll(".chapter_heading");
  const subs = document.querySelectorAll(".sub");

  //Add click event to the burger/cross icon that when fired will open/close sidebar
  menu_toggle.addEventListener("click", () => {
    sidebar.classList.toggle("is-active");
    menu_toggle.classList.toggle("is-active");
  });

  // Add click event listener to each menu item
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", (event) => {
      //Prevents page from opening in new tab
      event.preventDefault();
      // Set the viewer source to the clicked menu item's href
      viewer.src = `${menuItem.href}`;
      // Remove the "is-active" class from the sidebar to close it
      sidebar.classList.remove("is-active");
      menu_toggle.classList.remove("is-active");
      return false;
    });
  });

  //Keeps sidebar open if a chapter_heading is selected
  headings.forEach((heading) => {
    heading.addEventListener("click", () => {
      sidebar.classList.add("is-active");
    });
  });

  //onClick
  //Loops through each element with chapter_heading class and adds onclick event listener
  for (let i = 0; i < headings.length; i++) {
    headings[i].addEventListener("click", function event_handler() {
      const panel = this.nextElementSibling;
      let dropDown = panel.children;
      // If the panel of sub_headings is already open, close it by setting maxHeight to null
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        for (let i = 0; i < dropDown.length; i++) {
          //if the subheadings are not visible, assign them a tabindex of -1 making them un-tabbable
          dropDown[i].setAttribute("tabindex", "-1");
        }
      } else {
        // If the panel of sub_headings is closed, open it by setting maxHeight to its scrollHeight
        panel.style.maxHeight = panel.scrollHeight + "px";
        for (let i = 0; i < dropDown.length; i++) {
          //when sub headings are visible assign them a tabindex of "0", so they can be tabbed-to
          dropDown[i].setAttribute("tabindex", "0");
        }
      }
    });
  }

  //onKeydown
  for (let i = 0; i < headings.length; i++) {
    headings[i].addEventListener("keydown", function (event) {
      // Check if the pressed key is either the spacebar (13) or the enter key (32)
      if (event.keyCode === 13 || event.keyCode === 32) {
        event.preventDefault(); // Prevent default action on spacebar and enter key

        const panel = this.nextElementSibling;
        let dropDown = panel.children;

        // If the panel of sub_headings is already open, close it by setting maxHeight to null
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          for (let i = 0; i < dropDown.length; i++) {
            dropDown[i].setAttribute("tabindex", "-1");
          }
        } else {
          // If the panel of sub_headings is closed, open it by setting maxHeight to its scrollHeight
          panel.style.maxHeight = panel.scrollHeight + "px";
          for (let i = 0; i < dropDown.length; i++) {
            dropDown[i].setAttribute("tabindex", "0");
          }
        }
      }
    });
  }

  for (let i = 0; i < subs.length; i++) {
    if (!subs[i].style.maxHeight) {
      subs[i].setAttribute("tabindex", "-1");
    }
  }
  // set the home.html as the default page that is shown when the website is first loaded
  window.onload = function () {
    var iframe = document.getElementById("viewer");
    iframe.src = "home.html";
  };

  window.onresize = function () {
    // if the window is resized...
    var panels = document.querySelectorAll(".sub_headings"); // store all the accordion panels in this variable

    for (let i = 0; i < panels.length; i++) {
      // loop through each panel
      if (panels[i].style.maxHeight) {
        // if panel is open...
        panels[i].style.maxHeight = panels[i].scrollHeight + "px"; // set the panel's maxHeight to the panel's scrollHeight
      }
    }
  };
});
