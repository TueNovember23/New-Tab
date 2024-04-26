function scaleApps(app) {
    var apps = document.querySelectorAll('.app');
    var index = Array.from(apps).indexOf(app);

    apps.forEach(function (app) {
        app.style.transform = 'scale(1)';
    });

    app.style.transform = 'scale(1.3)';

    if (index > 0) {
        apps[index - 1].style.transform = 'scale(1.17)';
    }

    if (index < apps.length - 1) {
        apps[index + 1].style.transform = 'scale(1.17)';
    }

    if (index > 1) {
        apps[index - 2].style.transform = 'scale(1.1)';
    }

    if (index < apps.length - 2) {
        apps[index + 2].style.transform = 'scale(1.1)';
    }
}