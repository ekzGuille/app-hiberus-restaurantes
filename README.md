## Reto técnico: Visualizador de Restaurantes:

Para ello:

1. Registrarse en la página de [datos abiertos de zaragoza.es](https://www.zaragoza.es/sede/servicio/reutilizador/new)

2. Utilizar el [servicio de restaurantes](https://zaragoza-sedeelectronica.github.io/rest/queries/):

*(Pej: https://www.zaragoza.es/sede/servicio/restaurante.geojson?srsname=wgs84&rows=10) y visualizar la lista como el ejemplo que hicimos.*


### No olvidar hacer un 

```
npm install
```

* Instalar Ionic Cordova

```
npm install -g ionic cordova
```


### Paquetes instalados

* Openlayers 5.3.0

* Plugin geolocalización

```
ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="To locate you"

npm install --save @ionic-native/geolocation
```

