$(document).ready(function () {
    $("#liveToastBtn").click(function () {
        var task = $("#task").val();
        if (task == "") {
            $("#errorToast").toast("show");
        } else {
            $("#successToast").toast("show");
            $("#list").append(
                "<li class='list-group-item'>" +
                "<button class='btn btn-danger btn-sm float-right'>Sil</button>" +
                "<input type='checkbox' class='float-right' />" + task +
                "</li>"
            );
            $("#task").val("");
        } $(document).ready(function () {
            $("#list").on("click", "button", function () {
                $(this).parent().remove();
            });
        });

        let save = JSON.parse(localStorage.getItem("tasks"));
        if (save == null) {
            save = [];
        }
        save.push(task);
        localStorage.setItem("tasks", JSON.stringify(save));

    });
});
