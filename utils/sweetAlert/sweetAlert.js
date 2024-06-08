import Swal from "sweetalert2";
export const randomSweetAlert = async (title) => {
  return await Swal.fire({
    title: "Are you sure?",
    text: "You Canceled this order!",
    width: 350,
    icon: "question",
    customClass: {
      title: "custom-swal-title",
      confirmButton: "custom-swal-confirm-button",
      cancelButton: "custom-swal-cancel-button",
    },
    showCancelButton: true,
    confirmButtonColor: "#3db588",
    cancelButtonColor: "#d33",
    // confirmButtonText: "Yes, delete it!",
  });
};
