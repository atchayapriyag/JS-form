document.addEventListener("DOMContentLoaded", () => {
  const updatePasswordForm = document.getElementById("updatePasswordForm");
  const newPassword = document.getElementById("newPassword");
  const confirmPassword = document.getElementById("confirmPassword");
  const newPasswordErrMsg = document.getElementById("newPasswordErrMsg");
  const confirmPasswordErrMsg = document.getElementById(
    "confirmPasswordErrMsg"
  );

  function validateInput(input, errorMsgElement, errorMessage) {
    if (input.value.trim() === "") {
      errorMsgElement.textContent = errorMessage;
    } else {
      errorMsgElement.textContent = "";
    }
  }

  newPassword.addEventListener("blur", () => {
    validateInput(
      newPassword,
      newPasswordErrMsg,
      "New Password cannot be empty"
    );
  });

  confirmPassword.addEventListener("blur", () => {
    validateInput(
      confirmPassword,
      confirmPasswordErrMsg,
      "Confirm Password cannot be empty"
    );
  });

  updatePasswordForm.addEventListener("submit", (event) => {
    event.preventDefault();

    validateInput(
      newPassword,
      newPasswordErrMsg,
      "New Password cannot be empty"
    );
    validateInput(
      confirmPassword,
      confirmPasswordErrMsg,
      "Confirm Password cannot be empty"
    );

    if (
      newPassword.value.trim() !== "" &&
      confirmPassword.value.trim() !== ""
    ) {
      if (newPassword.value === confirmPassword.value) {
        alert("Password updated successfully!");
        updatePasswordForm.reset();
      } else {
        confirmPasswordErrMsg.textContent = "Passwords do not match";
      }
    }
  });
});
