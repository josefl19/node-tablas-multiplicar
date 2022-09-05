# Tablas de multiplicar por consola

Aplicación por consola construida en Node JS, que permite especificar una base (tabla del número x) y un limite de la tabla (por defecto 10), para la generación de tablas de multiplicar.
Los resultados son almacenados en la carpeta salida.

Vista de la app en consola:

``` 
Opciones:
      --help     Muestra ayuda                                        [booleano]
      --version  Muestra número de versión                            [booleano]
  -b, --base     Indica la base de la tabla de multiplicar  [número] [requerido]
  -l, --listar   Lista la tabla de multiplicar       [booleano] [defecto: false]
  -h, --hasta    Limite de la tabla de multiplicar
                                              [número] [requerido] [defecto: 10]
```

Ejemplo:
```
PS D:\Cursos\NodeJS\03_bases_node> node app -b 2 -l --hasta=20
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18
2 * 10 = 20
2 * 11 = 22
2 * 12 = 24
2 * 13 = 26
2 * 14 = 28
2 * 15 = 30
2 * 16 = 32
2 * 17 = 34
2 * 18 = 36
2 * 19 = 38
2 * 20 = 40

tabla2.txt creado
```

Paquetes utilizados:

- [yargs](https://yargs.js.org/): Para la generación de opciones de la aplicación en línea de comandos.
- [colors](https://www.npmjs.com/package/colors): Para mostrar con estilos y colores algunas de las salidas en consola.
