# 🔢 num2words.js

Convert numbers to words in multiple languages using JavaScript. Easy to use, customizable, and dependency-free.

---

## 📦 What is this?

num2words.js is a lightweight library that converts numbers (integers or decimals) into words, supporting multiple languages. The library can handle numbers up to trillions and also allows you to add an optional suffix like "PESOS", "DOLLARS", "EUROS", etc.

---

## 🌍 Supported Languages

- Spanish (`es`)
- English (`en`)
- French (`fr`)
- German (`de`)
- Portuguese (`pt`)
- Italian (`it`)
- Dutch (`nl`)
- Danish (`da`)
- Swedish (`sv`)
- Chinese (`zh`)
- Japanese (`ja`)
- Korean (`ko`)

---

## 🚀 Usage Examples

🚀 Usage via CDN
You can easily include num2words.js in your project by using the following CDN link:
<script src="https://cdn.jsdelivr.net/gh/stevenrojas888/num2words@main/num2words.min.js"></script>

### 📌 Basic Usage

```javascript
let result = num2words('123456789.87');
console.log(result); 
// "one hundred twenty-three million four hundred fifty-six thousand seven hundred eighty-nine point eighty-seven"

🌐 Specify language and suffix
let result = num2words('123456.50', 'en', 'DOLLARS');
console.log(result); 
// "one hundred twenty-three thousand four hundred fifty-six and fifty cents DOLLARS"

💻 Plain JavaScript Example
<input type="text" id="amount" placeholder="Enter a number">
<p id="result"></p>

<script src="num2words.min.js"></script>
<script>
  document.getElementById('amount').addEventListener('change', function () {
    let value = this.value;
    let inWords = num2words(value, 'es', 'PESOS', 1); // 1 for uppercase
    document.getElementById('result').textContent = inWords;
  });
</script>

💡 jQuery Example
<input type="text" id="amount">
<button id="convert">Convert</button>
<p id="output"></p>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="num2words.min.js"></script>
<script>
  $('#convert').on('click', function () {
    let value = $('#amount').val();
    let result = num2words(value, 'fr', 'EUROS', 0); // 0 for lowercase
    $('#output').text(result);
  });
</script>

🧩 Function Parameters num2words(number, language?, suffix?, uppercase?)
Parameter |  Type  | Optional | Description
number    | number |    ❌    | Number to convert. Can be a string of numbers.
language  | string |    ✅    | Output language (default: 'es')
suffix    | string |    ✅    | Additional text at the end (e.g., 'PESOS', 'DOLLARS')
uppercase | number |    ✅    | 1 for uppercase, 0 for lowercase (default: 1)

🤝 Contributions Would you like to help improve or translate this library? Fork, create a branch, and send a Pull Request!

📜 License This project is licensed under the MIT License. See LICENSE for more details.

===============================================================================================================

# 🔢 num2words.js

Convierte números a palabras en múltiples idiomas con JavaScript. Fácil de usar, personalizable y sin dependencias.

---

## 📦 ¿Qué es esto?

num2words.js es una librería liviana que convierte números (enteros o decimales) en palabras, con soporte para múltiples idiomas. La librería puede manejar números hasta trillones y también te permite agregar un sufijo opcional como "PESOS", "DÓLARES", "EUROS", etc.

---

## 🌍 Idiomas soportados

- Español (`es`)
- Inglés (`en`)
- Francés (`fr`)
- Alemán (`de`)
- Portugués (`pt`)
- Italiano (`it`)
- Holandés (`nl`)
- Danés (`da`)
- Sueco (`sv`)
- Chino (`zh`)
- Japonés (`ja`)
- Coreano (`ko`)

---

## 🚀 Ejemplos de uso

🚀 Uso a través de CDN
Puedes incluir num2words.js fácilmente en tu proyecto utilizando el siguiente enlace CDN:
<script src="https://cdn.jsdelivr.net/gh/stevenrojas888/num2words@main/num2words.min.js"></script>

### 📌 Uso básico

```javascript
let resultado = num2words('123456789.87');
console.log(resultado); 
// "ciento veintitrés millones cuatrocientos cincuenta y seis mil setecientos ochenta y nueve con ochenta y siete centavos"


🌐 Especificar idioma y sufijo
let resultado = num2words('123456.50', 'en', 'DOLLARS');
console.log(resultado); 
// "one hundred twenty-three thousand four hundred fifty-six and fifty cents DOLLARS"

💻 Ejemplo en JavaScript puro
<input type="text" id="monto" placeholder="Ingresa un número">
<p id="resultado"></p>

<script src="num2words.min.js"></script>
<script>
  document.getElementById('monto').addEventListener('change', function () {
    let valor = this.value;
    let enPalabras = num2words(valor, 'es', 'PESOS', 1); // 1 para mayúsculas
    document.getElementById('resultado').textContent = enPalabras;
  });
</script>

💡 Ejemplo usando jQuery
<input type="text" id="monto">
<button id="convertir">Convertir</button>
<p id="salida"></p>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="num2words.min.js"></script>
<script>
  $('#convertir').on('click', function () {
    let valor = $('#monto').val();
    let resultado = num2words(valor, 'fr', 'EUROS', 0); // 0 para minúsculas
    $('#salida').text(resultado);
  });
</script>

🧩 Parámetros de la función
num2words(numero, idioma?, sufijo?, mayusculas?);

Parámetro  |  Tipo  | Opcional | Descripción 
numero     | number |    ❌    | Número a convertir. Puede ser un String de números.
idioma     | string |    ✅    | Idioma de salida (por defecto: 'es')
sufijo     | string |    ✅    | Texto adicional al final (ej: 'PESOS', 'DOLLARS')
mayusculas | number |    ✅    | 1 para mayúsculas, 0 para minúsculas (por defecto: 1)

🤝 Contribuciones
¿Te gustaría ayudar a mejorar o traducir esta librería?
¡Haz un fork, una rama y envía tu Pull Request!

📜 Licencia
Este proyecto está bajo licencia MIT. Ver [LICENSE](./LICENSE) para más detalles.