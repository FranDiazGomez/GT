"use strict";
const version = "0.7.30";
const cacheName = `VW-${version}`;

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache
                .addAll([
                    "/",
                    "/index.html",
                    "/index.js",
                    "/favicon.ico",
                    "/appsettings/appsettings.json",
                    "/manifest.json",
                    "/libs/visiwin/polyfills.min.js",
                    "/libs/visiwin/dependencies.min.js",
                    "/libs/visiwin/visiwinjs.min.js",
                    "/libs/visiwin/apploader.min.js",
                    "/libs/visiwin/visiwin-ui.min.css",
                    "/images/iconfonts/material-icons/material-icons.css",
                    "/images/iconfonts/winjs-icons/winjs-icons.css",
                    "/resources/typography/systemfontstack.css",
                    "/resources/typography/fontclasses.css",
                    "/resources/themes/lighttheme.json",
                    "/resources/themes/darktheme.json",
                    "/resources/themes/greentheme.json",
                    "/resources/statelists/statelist.json",
                    "/resources/touchkeyboard/touchkeyboardlayouts.json",
                    "/resources/statelists/svgbindings.json",
                    "/resources/colors/colorpalette.json",
                    "/resources/colors/customcolors.json",
                    "/resources/backgrounds/backgrounds.json",
                    "/resources/animations/animations.json",
                    "/resources/shadows/shadows.json",
                    "/resources/styles/plainstyles.json",
                    "/resources/styles/outlinedstyles.json",
                    "/resources/styles/mediastyles.json",
                    "/resources/styles/localizedstyles.json",
                    "/resources/stateinfos/currentalarmstateinfo.json",
                    "/resources/stateinfos/historicalalarmstateinfo.json",
                    "/resources/statecollections/colorcollections.json",
                    "/resources/statecollections/imagecollections.json",
                    "/resources/statecollections/textcollections.json",
                    "/pages/Page1.html",
                    "/pages/Page2.html",
                    "/pages/CurrentAlarmsPage.html",
                    "/pages/HistoricalAlarmsPage.html",
                    "/pages/SettingsPage.html",
                    "/dialogs/AddUserDialog.html",
                    "/dialogs/AlertDialog.html",
                    "/dialogs/ChangePasswordDialog.html",
                    "/dialogs/ChangeUserDialog.html",
                    "/dialogs/ContentDialog.html",
                    "/dialogs/LogonDialog.html",
                    "/dialogs/RemoveUserDialog.html",
                    "/dialogs/TouchKeyboardDialogs/NumericTouchpadDialog.html",
                    "/dialogs/TouchKeyboardDialogs/AlphanumericTouchpadDialog.html",
                    "/views/LoginView.html",
                    "/views/ErrorView.html",
                    "/views/AppShell.html",
                ])
                .then(() => self.skipWaiting())
                .catch((error) => {
                    console.error("install failed:", error);
                });
        })
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});

//https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#stale-while-revalidate
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches
            .open(cacheName)
            .then((cache) => {
                return cache.match(event.request).then((response) => {
                    var fetchPromise = fetch(event.request).then((networkResponse) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                    return response || fetchPromise;
                });
            })
            .catch((error) => {
                console.error("Fetching failed:", error);
            })
    );
});