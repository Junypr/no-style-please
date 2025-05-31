//CUSTOM CURSOR

window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll("a");
    const cursor = document.querySelector(".cursor");
    // const links = document.querySelectorAll("a");

    // ✅ Log once
    console.log(`Found ${links.length} links:`);
    links.forEach(link => {
      console.log(link.href);
    });
    
    document.addEventListener("mousemove", (e) => {
        let leftPosition = e.pageX + 4;
        let topPosition = e.pageY + 4;

        cursor.style.left = leftPosition + "px";
        cursor.style.top = topPosition + "px";
    });

    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            console.log("entered link");
            cursor.classList.add("large");
        });
        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("large");
        });
    });
});




// const cursor = document.querySelector(".cursor");
// const links = document.querySelectorAll("a");
//
// console.log(document.querySelectorAll('a').length);
// links.forEach(link => {
//   console.log(link.href);
// });
//
// document.addEventListener("mousemove", (e) => {
//     let leftPosition = e.pageX + 4;
//     let topPosition = e.pageY + 4;
//
//     cursor.style.left = leftPosition + "px";
//     cursor.style.top = topPosition + "px";
// })
//
// links.forEach(link => {
//     link.addEventListener("mouseenter", () => {
//         console.log("entered link")
//         cursor.classList.add("large");
//     })
// })
//
// links.forEach(link => {
//     link.addEventListener("mouseleave", () => {
//         cursor.classList.remove("large");
//     })
// })