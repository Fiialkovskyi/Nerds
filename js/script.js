var emailUsButton = document.querySelector(".map-button");
var modalEmailUs = document.querySelector(".modal-email-us");
var modalClose = modalEmailUs.querySelector(".modal-close");
var form = modalEmailUs.querySelector("form");
var userNameField = form.querySelector("[name=user-name]");
var userEmailField = form.querySelector("[name=user-email]");
var textField = form.querySelector("textarea");
var storageName = localStorage.getItem("userNameField");
var storageEmail = localStorage.getItem("userEmailField");
var isStorageSupport = true;


try {
    storage = localStorage.getItem("userNameField");
} catch (err) {
    isStorageSupport = false;
}

emailUsButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalEmailUs.classList.add("modal-show");
    if (storageName && storageEmail) {
        userNameField.value = storageName;
        userEmailField.value = storageEmail;
        textField.focus();
    } if (storageName && !storageEmail) {
        userEmailField.focus();
    } else {
        userNameField.focus();
    }

});

modalClose.addEventListener("click", function (evt) {
   evt.preventDefault();
    modalEmailUs.classList.remove("modal-show");
    modalEmailUs.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt)  {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (modalEmailUs.classList.contains("modal-show")) {

            modalEmailUs.classList.remove("modal-show");
            modalEmailUs.classList.remove("modal-error");
        }
    }
});

form.addEventListener("submit", function (evt) {
   if (!userNameField.value || !userEmailField.value || !textField.value) {
       evt.preventDefault();
       modalEmailUs.classList.remove("modal-error");
       modalEmailUs.offsetWidth = modalEmailUs.offsetWidth;
       modalEmailUs.classList.add("modal-error");
   } else  {
       if (isStorageSupport) {
           localStorage.setItem("userNameField", userNameField.value);
           localStorage.setItem("userEmailField", userEmailField.value);
       }
   }
});
