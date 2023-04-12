// // Get the modal

// let modal = document.getElementsByClassName('modal')

// let modal_list = modal


// console.log(modal_list)
// // Get the button that opens the modal
// let menu = document.getElementById("menu");

// // Get the <span> element that closes the modal
// let span = document.getElementsByClassName("close");
// let close_list = span

// // When the user clicks on the button, open the modal
// function menu_show(id) {
//     let modal = document.getElementById(id)
//     modal.style.display = "block";
//     console.log()
// }

// // When the user clicks on <span> (x), close the modal
// for (let span of close_list) {
//     span.onclick = function () {
//         modal_list.style.display = "none";
//     }
//     console.log(close_list)
// }


// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }




document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        // $el.classList.add('is-active');
        $el.style.display = "block";

    }

    function closeModal($el) {
        // $el.classList.remove('is-active');
        $el.style.display = "none";

    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.modal_btn') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);
        console.log(modal)
        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .close') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        const e = event || window.event;

        if (e.keyCode === 27) { // Escape key
            closeAllModals();
        }
    });
});

