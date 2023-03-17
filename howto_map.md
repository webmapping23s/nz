# Neuseelandreise HOWTO - Übersichtskarte

## 1. Kartenbereich vorbereiten

Wir benötigen einen neuen HTML-Codeblock bestehend aus einer Überschrift 3 oberhalb der Linkliste und einem &lt;div> Element mit dem `id`-Attribut `map`. Den &lt;div> stylen wir mit CSS über ein `style`-Attribut

* *width* setzt die Kartenbreite auf 90% der maximal verfügbare Breite
* *height* setzt die Höhe auf einen konstanten Wert
* *border* zeichnet um die Kartenfläche einen feine, hellgrauen Rahmen
* *margin* zentriert die Karte

[🔗 COMMIT](https://github.com/webmapping/nz/commit/c65e9f3f753e4b69d01358157b1374b623c7c0b0)

```html
<h3>Übersichtskarte</h3>
<div id="map" style="width: 90%;height: 600px;border: 1px solid silver; margin: auto"></div>
```

## 2. Leaflet-Bibliothek einbinden

Der Codeblock zum Einbinden der Leaflet Bibliothek kommt von der Leaflet-Download Seite unter <https://leafletjs.com/download.html> und verlinkt zwei verschiedene Dateien:

* `leaflet.css` enthält die CSS Stile für Leafletkarten
* `leaflet.js`enthält den Javascript Code, mit dem Leafletkarten erzeugt werden

* Wir kopieren die zwei Zeilen unter *Using a Hosted Version of Leaflet* ans Ende des &lt;head>-Bereichs von `index.html`

    [🔗 COMMIT](https://github.com/webmapping/nz/commit/dc6fbb8a22599f3d0d879acd40701b5e3b26a806)

    ```html
    <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin="" />
        <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js" integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossorigin=""></script>
    </head>
    ```

## 3. Javascript Code für die Karte erstellen

Danach erstellen wir unter dem &lt;div> der Karte ein leeres &lt;script> Element, kopieren den Javascript-Code des Musterbeispiels auf der Leaflet Startseite <https://leafletjs.com/> dort hin und passen die Koordinaten unserer Etappen an - die Koordinaten in Dezimalgrad finden wir beim Wikipediaartikel der jeweiligen Etappe.

[🔗 COMMIT](https://github.com/webmapping/nz/commit/578aec1ddff4f2d6f70f6d16e60ed2aff8a606fb)

```html
<script>
    var map = L.map('map').setView([-39.2, 175.583333], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-39.2, 175.583333]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
   </script>
   ```

Das Popup (in dem man auch HTML Markup schreiben kann) ändern wir auch

[🔗 COMMIT](https://github.com/webmapping/nz/commit/b624cd7f61f921dcbe155f2e435ca89ac5f7807c)

```js
.bindPopup('Tongariro-Nationalpark')
```

## Damit ist die Karte vorläufig fertig ...
