# "react desde cero" siguiendo tutorail de Aleixer alvarado :)

---
---

## **Configuración inicial versión en contrucción**
> Visual Studio Code 

> 1. Crear carpeta proyecto
> 2. En el terminal (ctrl+ñ) iniciamos con el comando 
>    - `npm install` antes de esto no reconocia el comando 'init'
>
> 3. Después de la instalación 'npm'; inicializar la aplicacion con
>     - `npm init`
>     - Proporcionar los datos que pide (name, description,authpr...etc.); al final creara el archivo `package.json`
> 4. Instalar la libreria de **React** con los comandos  
>     - `npm i react react-dom`
> 5. Instalar **Webpack** con los comandos
>     - `npm i --save-dev webpack webpack-dev-server webpack-cli`
> 6. Instalar **babel** con los comandos
>     - `npm i --save-dev babel-core babel-loader babel-preset-env babel-preset-react html-webpack-plugin` //**NOTA:** para corregir el error de la versión podemos instalar este comando; para bajar la versión del *loader* `npm install -D babel-loader@7 babel-core babel-preset-env webpack`// el tutorial sugiere que se baja la verision de bable loader a 7, pero voy a mantenerla en 8 hasta que sepa cual es el problema
> 7. Crear el archivo `webpack.config.js` con la configuración

```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader:'babel-loader'
            }
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
```
> 8. Crear la carpeta `src` donde agregamos los archivos principales.  
> 9. Crear la carpeta `public` donde iran los archivos `index.js` e `index.html`.
> 10. Verificar la configuracion del archivo resultante `package.json`.
```
{
  "name": "todo",
  "version": "1.0.0",
  "description": "react desde cero",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Ponchofandino",
  "license": "(MIT)",
  "dependencies": {
    "react": "^16.5.2",
    "react-dom": "^16.5.2",
    "react-redux": "^5.0.7",
    "react-router-dom": "^4.3.1",
    "redux": "^4.0.0"
  },
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-eslint": "^10.0.1",
    "babel-loader": "^8.0.4",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "eslint": "^5.6.1",
    "eslint-plugin-react": "^7.11.1",
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.20.2",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.9"
  }
}
```

> 11. Crear el archivo de configuración de babel en la carpeta raiz `.babelrc` con esta información

```

{
    "presets": [
        "env",
        "react"
    ]
}
```
> 12. ## **Instalación de librerías complementarias**
> a. Con el comando siguiente instalamos la librería de rutas `npm install --save react-router-dom`
> b. Instalar TSLint `npm install eslint --save-dev`
>          `npm install eslint-plugin-react --save-dev`
>                   `npm i --save  babel-eslint`
>                    `npm i -D babel-eslint`
> c. Creamos el archivo que le informa que carpetas debe ignorar con las reglas a aplicar
>                        `.eslintignore`
> d. Creamos el archivo que contiene las reglas del eslint con el nombre `eslintrc`
  Reglas definidas en el link: http:/./eslint.org/docs/rules/
  + https://goo.gl/mfmuy4 tambien podemos mediante el demo escoger la version, source type, tipo de js, reglas y descarga un archivo (.json) que podremos utilizar.

  "off" or 0 - turn the rule off
  "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
  "error" or 2 - turn the rule on as an error (exit code will be 1)

> 13. Instalar Redux desde *https://redux.js.org/basics/usagewithreact* 
>               `npm install --save react-redux`
> 14. y Redux                          
>                   `npm install --save redux`
> 15. Instalar Firebase como servicio de API 
>                 `npm install --save firebase`


---
**Glosario**
> React: Libreria JavaScript diseñada para crear interface de usuariocon el objetivo de facilitar el desarrollo de aplicaciones de una sola pagina (SPA)
    +SPA (Singles Page application) Aplicacones web con el proposito de dar una experiencia mas fluida al usuario; todos los codigos (HTML, CSS, JS...etc.) se cargan de una sola vez.

> npm: (Node Packages Manager) Es un manejador de paquetes para node.js
    +NODE.JS Entorno en tiempo de ejecucion multiplataforma; creado con enfoque utilitario para la creacion de programas de red altamente escalables.

> Webpack: herramienta de compilacion que coloca en un grafo de dependencias a todos los elementos que forman parte de un proyecto de desarrollo (js, HTML, CSS, imagenes, ...etc.), permitiendo el uso de modulos para dividir y organizar un programa en varios archivos que el navegador puede comprender.        

> Babel: Es una herramienta que nos permite "traducir" codigo js de ultima generación a .js que reconoce cualquier navegador, por ejemplo mediante pluggins transforma (JSX) a .js normal.

>TsLint: (Linters) herramientas que analizan el codigo, a partir de una serie de reglas previamente definidas, nos muestra los errores que estamos cometiendo en nuestro codigo.
---
---

*/


---
---
<!-- # **Estructura de la aplicación** 

* [dist](#dist)  
* [node_modules](#nodemodules)
* [src](#src) 
  * [assents](#assents)
  * [auth](#auth)
    *  [<i style="color:#ffe502">addTodo.js</i>](#addtodo)
    *  [<i style="color:#ffe502">dashboard.js</i>](#dashboard)
    *  [<i style="color:#ffe502">todos.js</i>](#todos)
  * [service](#service)
      *  [<i style="color:#ffe502">firebase-config.js</i>](#firebasec)
  * [shared](#shared)
     *  [<i style="color:#ffe502">actions.js</i>](#actions)
     *  [<i style="color:#ffe502">atore.js</i>](#atore)
     *  [<i style="color:#ffe502">styles.js</i>](#styles)
     *  [<i style="color:#ffe502">task.js</i>](#task)
  * [<i style="color:#ff8300">favicon.ico</i>](#favicon)
  * [<i style="color:#ff8300">index.html</i>](#index)
  * [<i style="color:#ff8300">index.js</i>](#indexjs)
  * [<i style="color:#ff8300">theme.css</i>](#theme)
* [Z-README](#zreadme)
* [<i style="color:#ff8300">.babelrc</i>](#editorconfig)</i> 
* [<i style="color:#ff8300">.eslintignore</i>](#gitignore)</i> 
* [<i style="color:#ff8300">.eslintrc</i>](#tslint)</i> 
* [<i style="color:#ff8300">.gitignore</i>](#gitignore)</i> 
* [<i style="color:#ff8300">LICENSE</i>](#LICENSE)</i> 
* [<i style="color:#ff8300"> package-lock.json</i>](#packagelock)</i> 
* [<i style="color:#ff8300">package.json</i>](#package)</i> 
* [<i style="color:#ff830.0">README.md</i>](#sreadme)</i> 
* [<i style="color:#ff830.0">webpack.config.js</i>](#sreadme)</i> 

# Resultado final   
> ## **El resultado esperado cumple con:** 
> 1. Registrarse 
>       - Este punto se realiza mediante un proveedor de autenticación; en este caso Google usando el servicio de firebase
> 2. Agregar tareas (se usa un input validado)
> 3. Listado de tareas según se agreguen
> 4. Permite cambiar el estado de la tarea
> 5. Eliminar las tareas
> 6. Un contador superior que lleva el total de las tareas tanto por hacer como realizadas  -->
>
<!-- >
> ## Landing
> ![Imagen](./Z-README/8.png)
>
> ## Panel principal registrado
> ![Imagen](./Z-README/9.png)
>
> ## Ejemplo con una lista de tareas 
> ![Imagen](./Z-README/10.png) -->#   R e a c t _ D e s d e _ C e r o  
 