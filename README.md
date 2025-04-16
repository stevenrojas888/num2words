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
num2words(numero, idioma?, sufijo?);

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