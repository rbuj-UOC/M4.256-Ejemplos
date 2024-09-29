# ReactiveFormsExample

Este proyecto fue generado mediante [Angular CLI](https://github.com/angular/angular-cli):

```
npm install -g @angular/cli
```

Creación del proyecto:

```
ng new blog-front --no-strict --standalone=false --style=scss --ssr=no --skip-tests --package-manager="npm"
```

Creación de los componentes

```
ng g component components/message-list --skip-tests=true
ng g component components/message-form --skip-tests=true
```

Creación del modelo

```
ng g class models/message-dto --type=model
```

Creación del servicio

```
ng g service services/message
```

## Servidor de desarrollo

Ejecuta `ng serve` para el servidor de desarrollo. Navega a `http://localhost:4200/`.La aplicación se recargará automáticamente si cambia alguno de los archivos fuente.

## Construcción

Ejecuta `ng build` para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist/`.

## Desarrollo

1. Limpiar la vista [src/app/app.component.html](src/app/app.component.html)
2. Añadir `ReactiveFormsModule` al archivo [src/app/app.module.ts](src/app/app.module.ts)
3. Crear el modelo UserDto
   1. `ng g class models/UserDto --type=model`
   2. Editar el archivo [src/app/models/user-dto.model.ts](src/app/models/user-dto.model.ts)
4. Crear el componente login
   1. `ng g component components/login --skip-tests=true`
   2. Cargar el componente mediante [routing](src/app/app-routing.module.ts)
   3. Comprobar que se muestra el componente [http://localhost:4200/](http://localhost:4200/)
   4. Editar el controlador [src/app/components/login/login.component.ts](src/app/components/login/login.component.ts)
   5. Editar la vista [src/app/components/login/login.component.html](src/app/components/login/login.component.html)
   6. Comprobar el funcionamiento del componente [http://localhost:4200/](http://localhost:4200/)

# Instalación y configuración de los paquetes de Node.js

- TypeScript
- Prettier: Herramienta para dar formato al código
- ESLint: Analizador estático de código para encontrar problemas rápidamente.

## TypeScript

Para habilitar la inicialización de propiedades estricta de TypeScript, editar el archivo [tsconfig.json](tsconfig.json)

```json
  "compilerOptions": {
    "strictNullChecks": true,
    "strictPropertyInitialization": true,
  },
```

## Prettier

### Instalación

```
npm install --save-dev prettier
```

Crear el archivo [.prettierrc.json](.prettierrc.json)

```json
{
  "trailingComma": "none",
  "printWidth": 1000,
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

## ESLint

### Instalación y configuración

```
ng add @angular-eslint/schematics
```

Ver archivo [eslint.config.js](eslint.config.js)

### eslint-config-prettier

#### Descripción

Integración con Prettier.

#### Instalación

```
npm install prettier-eslint eslint-config-prettier eslint-plugin-prettier --save-dev
```

#### Configuración

Editar el archivo [eslint.config.js](eslint.config.js)

```js
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
...
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended, ...tseslint.configs.stylistic, ...angular.configs.tsRecommended, eslintPluginPrettierRecommended],
...
```

Editar el archivo [.prettierrc.json](.prettierrc.json)

```json
  "overrides": [
    {
      "files": "*.html",
      "options": {
        "parser": "angular"
      }
    }
  ]
```

# VS Code

## Extensiones recomendadas

1. Abrir la línea de ordenes, en macOS: ⌘⇧P
2. Seleccionar `Configure Recommended Extensions (Workspace Folder)`
3. Añadir los identificadores de les extensions al archivo [extensions.json](.vscode/extensions.json)
   - [Angular snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)
   - [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
   - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
   - [Color Picker](https://marketplace.visualstudio.com/items?itemName=anseki.vscode-color)
   - [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
   - [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
   - [CodeMetrics](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-codemetrics)
   - [Turbo Console Log](https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log)
   - [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype)
   - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
   - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
   - [Emmet](https://code.visualstudio.com/docs/editor/emmet) (ya está incluida)
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [HTMLHint](https://marketplace.visualstudio.com/items?itemName=HTMLHint.vscode-htmlhint)
   - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

## Herramienta de formatación predeterminada

1. Abrir les preferencias del espacio de trabajo en VS Code: En macOS presionar ⌘, y seleccionar `Workspace`
2. Teclear `default formatter`
3. Seleccionar la opción `Prettier`

## Dar formato a los archivos al guardarlos

1. Abrir les preferencias del espacio de trabajo en VS Code: En macOS presionar ⌘, y seleccionar `Workspace`
2. Teclear `format on save`
3. Marcar la casilla `Format on Save`

## Organizar las importaciones de los archivos al guardarlos

1. Abrir les preferencias del espacio de trabajo en VS Code: En macOS presionar ⌘, y seleccionar `Workspace`
2. Teclear `code actions on save`
3. Clicar `Edit in settings.json`
4. Añadir la siguiente línea

```json
"source.organizeImports": true
```

## Corrección ortográfica

1. Abrir les preferencias del espacio de trabajo en VS Code: En macOS presionar ⌘, y seleccionar `Workspace`
2. Teclear `spell language`
3. Establecer los idiomas por orden de preferencia: español, inglés (C Spell: Language)

```
es,en
```

## HTMLHint

1. Abrir les preferencias del espacio de trabajo en VS Code: En macOS presionar ⌘, y seleccionar `Workspace`
2. Teclear `htmlhint options`
3. Deshabilitar avisos

```json
  "htmlhint.options": {
    "attr-lowercase": false,
    "doctype-first": false
  }
```

## Abreviaturas de Emmet

1. Abrir les preferencias del espacio de trabajo en VS Code: En macOS presionar ⌘, y seleccionar `Workspace`
2. Teclear `emmet tab`
3. Habilitar la opción `Trigger Expansion on Tab`

### Abreviaturas útiles

| Abreviatura | Operación                                                   |
| ----------- | ----------------------------------------------------------- |
| !           | Crear un documento html5                                    |
| .NOM        | Crear un div con la clase NOMBRE                            |
| ELEMENT.NOM | Crear un ELEMENTO (div, h1, p, ...) con la clase NOMBRE     |
| ELEMENT#ID  | Crear un ELEMENTO (div, h1, p, ...) con el identificador ID |

## Atajos de VS Code

| Atajo | Acción                      |
| ----- | --------------------------- |
| ⌘ ,   | Abrir les preferencias      |
| ⌘ ⇧ P | Abrir la línea de comandos  |
| ⌘ ⇧ 7 | (des)Comentar el código     |
| ⌥ ⇧ F | Dar formato al código       |
| F5    | Iniciar la depuración       |
| Fn F2 | Refactor: cambiar el nombre |
| Fn F3 | Buscar: busca el siguiente  |
