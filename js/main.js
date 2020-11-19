window.t = function (href) {
  document.querySelector("body").style.opacity = 0;
  setTimeout(function () {
    window.location.href = href;
  }, 100);
};

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("body").style.opacity = 1;
});

function sleep(appname) {
  let x = confirm(
    `Are you sure you want to put ${appname} to sleep?\n You may not get notifications.`
  );

  if (!x) {
    return;
  }

  toastr.info(`Putting ${appname} to sleep`);
  setTimeout(() => {
    toastr.clear();
    toastr.success(`${appname} successfully put to sleep.`);
    $(".more").html(
      "<center> App has been put to sleep. <br><hr><a class='btn btn-success' onclick='window.location.reload()'>Remove from sleep</a></center>"
    );
  }, 2000);
}

function uninstall(appname) {
  let x = confirm(
    `Are you sure you want to completely remove the app ${appname} ?`
  );

  if (!x) {
    return;
  }

  toastr.info(`Uninstalling ${appname}`);
  setTimeout(() => {
    toastr.clear();

    toastr.success(`${appname} successfully uninstalled.`);

    $(".more").html("<center> App has been uninstalled. </center>");
  }, 2000);
}
