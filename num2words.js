
const diccionarios = {
    // ESPAÑOL
    es: {
        unidades: ['', 'UNO', 'DOS', 'TRES', 'CUATRO', 'CINCO', 'SEIS', 'SIETE', 'OCHO', 'NUEVE'],
        decenas: ['', 'DIEZ', 'VEINTE', 'TREINTA', 'CUARENTA', 'CINCUENTA', 'SESENTA', 'SETENTA', 'OCHENTA', 'NOVENTA'],
        especiales: ['DIEZ', 'ONCE', 'DOCE', 'TRECE', 'CATORCE', 'QUINCE', 'DIECISÉIS', 'DIECISIETE', 'DIECIOCHO', 'DIECINUEVE'],
        centenas: ['', 'CIENTO', 'DOSCIENTOS', 'TRESCIENTOS', 'CUATROCIENTOS', 'QUINIENTOS', 'SEISCIENTOS', 'SETECIENTOS', 'OCHOCIENTOS', 'NOVECIENTOS'],
        escalas: ['', 'MIL', 'MILLONES', 'MIL MILLONES', 'BILLONES', 'MIL BILLONES', 'TRILLONES'],
        milSingular: 'MIL',
        millonSingular: 'UN MILLÓN',
        billonSingular: 'UN BILLÓN',
        trillonSingular: 'UN TRILLÓN',
        cero: 'CERO',
        y: 'Y',
        decimal: 'CON',
        con: 'CON'
    },
    // INGLES
    en: {
        unidades: ['', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'],
        decenas: ['', 'TEN', 'TWENTY', 'THIRTY', 'FORTY', 'FIFTY', 'SIXTY', 'SEVENTY', 'EIGHTY', 'NINETY'],
        especiales: ['TEN', 'ELEVEN', 'TWELVE', 'THIRTEEN', 'FOURTEEN', 'FIFTEEN', 'SIXTEEN', 'SEVENTEEN', 'EIGHTEEN', 'NINETEEN'],
        centenas: ['', 'ONE HUNDRED', 'TWO HUNDRED', 'THREE HUNDRED', 'FOUR HUNDRED', 'FIVE HUNDRED', 'SIX HUNDRED', 'SEVEN HUNDRED', 'EIGHT HUNDRED', 'NINE HUNDRED'],
        escalas: ['', 'THOUSAND', 'MILLION', 'BILLION', 'TRILLION'],
        milSingular: 'THOUSAND',
        millonSingular: 'ONE MILLION',
        billonSingular: 'ONE BILLION',
        trillonSingular: 'ONE TRILLION',
        cero: 'ZERO',
        y: 'AND',
        decimal: 'POINT',
        con: 'WITH'
    },
    // FRANCES
    fr: {
        unidades: ['', 'UN', 'DEUX', 'TROIS', 'QUATRE', 'CINQ', 'SIX', 'SEPT', 'HUIT', 'NEUF'],
        decenas: ['', 'DIX', 'VINGT', 'TRENTE', 'QUARANTE', 'CINQUANTE', 'SOIXANTE', 'SOIXANTE-DIX', 'QUATRE-VINGT', 'QUATRE-VINGT-DIX'],
        especiales: ['DIX', 'ONZE', 'DOUZE', 'TREIZE', 'QUATORZE', 'QUINZE', 'SEIZE', 'DIX-SEPT', 'DIX-HUIT', 'DIX-NEUF'],
        centenas: ['', 'CENT', 'DEUX CENTS', 'TROIS CENTS', 'QUATRE CENTS', 'CINQ CENTS', 'SIX CENTS', 'SEPT CENTS', 'HUIT CENTS', 'NEUF CENTS'],
        escalas: ['', 'MILLE', 'MILLION', 'MILLIARD', 'BILLION'],
        milSingular: 'MILLE',
        millonSingular: 'UN MILLION',
        billonSingular: 'UN BILLION',
        trillonSingular: 'UN TRILLION',
        cero: 'ZÉRO',
        y: 'ET',
        decimal: 'VIRGULE',
        con: 'AVEC'
    },
    // ALEMAN
    de: {
        unidades: ['', 'EINS', 'ZWEI', 'DREI', 'VIER', 'FÜNF', 'SECHS', 'SIEBEN', 'ACHT', 'NEUN'],
        decenas: ['', 'ZEHN', 'ZWANZIG', 'DREIßIG', 'VIERZIG', 'FÜNFZIG', 'SECHZIG', 'SIEBZIG', 'ACHTZIG', 'NEUNZIG'],
        especiales: ['ZEHN', 'ELF', 'ZWÖLF', 'DREIZEHN', 'VIERZEHN', 'FÜNFZEHN', 'SECHZEHN', 'SIEBZEHN', 'ACHTZEHN', 'NEUNZEHN'],
        centenas: ['', 'EINHUNDERT', 'ZWEIHUNDERT', 'DREIHUNDERT', 'VIERHUNDERT', 'FÜNFHUNDERT', 'SECHSHUNDERT', 'SIEBENHUNDERT', 'ACHTHUNDERT', 'NEUNHUNDERT'],
        escalas: ['', 'TAUSEND', 'MILLION', 'MILLIARDE', 'BILLION'],
        milSingular: 'TAUSEND',
        millonSingular: 'EINE MILLION',
        billonSingular: 'EINE BILLION',
        trillonSingular: 'EINE TRILLION',
        cero: 'NULL',
        y: 'UND',
        decimal: 'KOMMA',
        con: 'MIT'
    },
    // PORTUGUES
    pt: {
        unidades: ['', 'UM', 'DOIS', 'TRÊS', 'QUATRO', 'CINCO', 'SEIS', 'SETE', 'OITO', 'NOVE'],
        decenas: ['', 'DEZ', 'VINTE', 'TRINTA', 'QUARENTA', 'CINQUENTA', 'SESSENTA', 'SETENTA', 'OITENTA', 'NOVENTA'],
        especiales: ['DEZ', 'ONZE', 'DOZE', 'TREZE', 'QUATORZE', 'QUINZE', 'DEZESSEIS', 'DEZESSETE', 'DEZOITO', 'DEZENOVE'],
        centenas: ['', 'CEM', 'DUZENTOS', 'TREZENTOS', 'QUATROCENTOS', 'QUINHENTOS', 'SEISCENTOS', 'SETECENTOS', 'OITOCENTOS', 'NOVECENTOS'],
        escalas: ['', 'MIL', 'MILHÃO', 'BILHÃO', 'TRILHÃO'],
        milSingular: 'MIL',
        millonSingular: 'UM MILHÃO',
        billonSingular: 'UM BILHÃO',
        trillonSingular: 'UM TRILHÃO',
        cero: 'ZERO',
        y: 'E',
        decimal: 'VÍRGULA',
        con: 'COM'
    },
    // ITALIANO
    it: {
        unidades: ['', 'UNO', 'DUE', 'TRE', 'QUATTRO', 'CINQUE', 'SEI', 'SETTE', 'OTTO', 'NOVE'],
        decenas: ['', 'DIECI', 'VENTI', 'TRENTA', 'QUARANTA', 'CINQUANTA', 'SESSANTA', 'SETTANTA', 'OTTANTA', 'NOVANTA'],
        especiales: ['DIECI', 'UNDICI', 'DODICI', 'TREDICI', 'QUATTORDICI', 'QUINDICI', 'SEDICI', 'DICIASSETTE', 'DICIOTTO', 'DICIANNOVE'],
        centenas: ['', 'CENTO', 'DUECENTO', 'TRECENTO', 'QUATTROCENTO', 'CINQUECENTO', 'SEICENTO', 'SETTECENTO', 'OTTOCENTO', 'NOVECENTO'],
        escalas: ['', 'MILA', 'MILIONE', 'MILARDI', 'BILIONE'],
        milSingular: 'MILLE',
        millonSingular: 'UN MILIONE',
        billonSingular: 'UN BILIONE',
        trillonSingular: 'UN TRILIONE',
        cero: 'ZERO',
        y: 'E',
        decimal: 'VIRGOLA',
        con: 'CON'
    },
    // HOLANDES
    nl: {
        unidades: ['', 'EEN', 'TWEE', 'DRIE', 'VIER', 'VIJF', 'ZES', 'ZEVEN', 'ACHT', 'NEGEN'],
        decenas: ['', 'TIEN', 'TWINTIG', 'DERDTIG', 'VEERTIG', 'VIJFTIG', 'ZESTIG', 'Zeventig', 'ACHTTIG', 'NEGENTIG'],
        especiales: ['TIEN', 'ELF', 'TWAALF', 'DERTIEN', 'VEERTIEN', 'VIJFTIEN', 'ZESTIEN', 'ZEVENTIEN', 'ACHTTIEN', 'NEGENTIEN'],
        centenas: ['', 'HONDERD', 'TWEEHONDERD', 'DRIEHONDERD', 'VIERHONDERD', 'VIJFHONDERD', 'ZESHONDERD', 'ZEVENHONDERD', 'ACHTHONDERD', 'NEGENHONDERD'],
        escalas: ['', 'DUIZEND', 'MILJOEN', 'MILJARD', 'BILLJOEN'],
        milSingular: 'DUIZEND',
        millonSingular: 'EEN MILJOEN',
        billonSingular: 'EEN MILJARD',
        trillonSingular: 'EEN BILLJOEN',
        cero: 'NUL',
        y: 'EN',
        decimal: 'KOMMA',
        con: 'MET'
    },
    // DANES
    da: {
        unidades: ['', 'EN', 'TO', 'TRE', 'FIRE', 'FEM', 'SEKS', 'SYV', 'OTTE', 'NI'],
        especiales: ['TI', 'ELLEVE', 'TOLV', 'TRETTEN', 'FJORTEN', 'FEMTEN', 'SEKSTEN', 'SYTTEN', 'ATTEN', 'NITTEN'],
        decenas: ['', 'TI', 'TYVE', 'TREDIVE', 'FYRRE', 'HALVTREDS', 'TRES', 'HALVFJERDS', 'FIRS', 'HALVFEMS'],
        centenas: ['', 'ET HUNDREDE', 'TO HUNDREDE', 'TRE HUNDREDE', 'FIRE HUNDREDE', 'FEM HUNDREDE', 'SEKS HUNDREDE', 'SYV HUNDREDE', 'OTTE HUNDREDE', 'NI HUNDREDE'],
        escalas: ['', 'TUSIND', 'MILLIONER', 'MILLIARDER', 'BILLIONER'],
        milSingular: 'TUSIND',
        millonSingular: 'EN MILLION',
        billonSingular: 'EN MILLIARD',
        trillonSingular: 'EN BILLION',
        cero: 'NUL',
        y: 'OG',
        decimal: 'KOMMA',
        con: 'KOMMA'
    },    
    // SUECO
    sv: {
        unidades: ['', 'EN', 'TVÅ', 'TRE', 'FYRA', 'FEM', 'SEX', 'SJU', 'ÅTTA', 'NIO'],
        decenas: ['', 'TI', 'TJUGO', 'TRETTIO', 'FÖRTIO', 'FIFTIO', 'SEXTIO', 'SJUTIO', 'ÅTTIO', 'NITTIO'],
        especiales: ['TI', 'ELVA', 'TOLV', 'TRETTON', 'FJORTON', 'FEMTON', 'SEXTON', 'SJUTTON', 'ARTON', 'NITTON'],
        centenas: ['', 'HUNDRA', 'TVÅHUNDRA', 'TREHUNDRA', 'FYRHUNDRA', 'FEMHUNDRA', 'SEXHUNDRA', 'SJUHUNDRA', 'ÅTTAHUNDRA', 'NIHUNDRA'],
        escalas: ['', 'TUSEN', 'MILJON', 'MILJARD', 'BILLION'],
        milSingular: 'TUSEN',
        millonSingular: 'EN MILJON',
        billonSingular: 'EN MILJARD',
        trillonSingular: 'EN BILLION',
        cero: 'NOLL',
        y: 'OCH',
        decimal: ' KOMMA',
        con: 'KOMMA'
    },
    // CHINO
    zh: {
        unidades: ['', '一', '二', '三', '四', '五', '六', '七', '八', '九'],
        decenas: ['', '十', '二十', '三十', '四十', '五十', '六十', '七十', '八十', '九十'],
        especiales: ['十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九'],
        centenas: ['', '一百', '二百', '三百', '四百', '五百', '六百', '七百', '八百', '九百'],
        escalas: ['', '千', '百万', '十亿', '兆'],
        milSingular: '一千',
        millonSingular: '一百万',
        billonSingular: '十亿',
        trillonSingular: '一兆',
        cero: '零',
        y: '',
        decimal: '点',
        con: ''
    },
    
    // JAPONÉS
    ja: {
        unidades: ['', '一', '二', '三', '四', '五', '六', '七', '八', '九'],
        decenas: ['', '十', '二十', '三十', '四十', '五十', '六十', '七十', '八十', '九十'],
        especiales: ['十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九'],
        centenas: ['', '百', '二百', '三百', '四百', '五百', '六百', '七百', '八百', '九百'],
        escalas: ['', '千', '百万', '十億', '兆'],
        milSingular: '千',
        millonSingular: '百万',
        billonSingular: '十億',
        trillonSingular: '兆',
        cero: 'ゼロ',
        y: '',
        decimal: '・',
        con: ''
    },
    
    // COREANO
    ko: {
        unidades: ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'],
        decenas: ['', '십', '이십', '삼십', '사십', '오십', '육십', '칠십', '팔십', '구십'],
        especiales: ['십', '십일', '십이', '십삼', '십사', '십오', '십육', '십칠', '십팔', '십구'],
        centenas: ['', '백', '이백', '삼백', '사백', '오백', '육백', '칠백', '팔백', '구백'],
        escalas: ['', '천', '백만', '십억', '조'],
        milSingular: '천',
        millonSingular: '백만',
        billonSingular: '십억',
        trillonSingular: '조',
        cero: '영',
        y: '',
        decimal: '점',
        con: ''
    }
};

function parseNumero(str, idioma = 'es') {
    if (typeof str !== 'string') return str;
    
    if (idioma === 'zh') {
        str = str.replace(/点/g, '.');
    } else if (idioma === 'ja') {
        str = str.replace(/・|点/g, '.');
    } else if (idioma === 'ko') {
        str = str.replace(/점/g, '.');
    }
    
    str = str.replace(/[^\d.,-]/g, '');

    const tienePunto = str.includes('.');
    const tieneComa = str.includes(',');

    if (tienePunto && tieneComa) {
        if (str.lastIndexOf(',') > str.lastIndexOf('.')) {
            str = str.replace(/\./g, '').replace(',', '.');
        } else {
            str = str.replace(/,/g, '');
        }
    } else if (tieneComa && !tienePunto) {
        str = str.replace(',', '.');
    }

    const num = parseFloat(str);
    if (isNaN(num)) throw new Error('Número inválido');
    return num;
}

function convertirGrupo(n, dic) {
    const { unidades, decenas, especiales, centenas, y } = dic;
    let resultado = '';
    
    const esIdiomaAsiatico = dic.cero === '零' || dic.cero === 'ゼロ' || dic.cero === '영';
    
    if (n === 100 && dic === diccionarios.es) return 'CIEN';
    
    if (esIdiomaAsiatico) {
        if (n >= 100) {
            const centena = Math.floor(n / 100);
            
            const esJaponesOCoreano = dic.cero === 'ゼロ' || dic.cero === '영';
            resultado += (centena === 1 && esJaponesOCoreano) ? centenas[1] : centenas[centena];
            n %= 100;
        }
        
        if (n >= 10) {
            const decena = Math.floor(n / 10);
            if (decena === 1) {
                resultado += decenas[1]; // 十 (diez)
            } else {
                resultado += decenas[decena];
            }
            n %= 10;
        }
        
        if (n > 0) {
            resultado += unidades[n];
        }
        
        return resultado;
    }
    
    if (n >= 100) {
        resultado += centenas[Math.floor(n / 100)] + ' ';
        n %= 100;
    }
    
    if (n > 0) {
        if (n < 10) {
            resultado += unidades[n];
        } else if (n < 20) {
            resultado += especiales[n - 10];
        } else {
            const unidad = n % 10;
            const decena = Math.floor(n / 10);
            resultado += decenas[decena];
            if (unidad !== 0) {
                resultado += ' ' + y + ' ' + unidades[unidad];
            }
        }
    }
    
    return resultado.trim();
}


function num2words(numero, idioma = 'es', moneda = null, mayusculas = 1) {
    const dic = diccionarios[idioma];
    if (!dic) throw new Error(`Idioma no soportado: ${idioma}`);
    
    const esIdiomaAsiatico = ['zh', 'ja', 'ko'].includes(idioma);
    
    if (typeof numero === 'string') {
        numero = parseNumero(numero, idioma);
    }
    
    if (isNaN(numero)) throw new Error('Número no válido');
    
    if (numero === 0) return (dic.cero + (moneda ? ' ' + moneda : '')).toUpperCase();
    
    let entero = Math.floor(numero);
    let decimales = Math.round((numero - entero) * 100);
    
    const grupos = [];
    while (entero > 0) {
        grupos.push(entero % 1000);
        entero = Math.floor(entero / 1000);
    }
    
    let resultado = '';
    
    if (esIdiomaAsiatico) {
        for (let i = grupos.length - 1; i >= 0; i--) {
            const grupo = grupos[i];
            if (grupo === 0) continue;
            
            if (i === 0) {
                resultado += convertirGrupo(grupo, dic);
            } else {
                // Miles, millones, etc.
                const cientos = Math.floor(grupo / 100);
                const decenas = Math.floor((grupo % 100) / 10);
                const unidades = grupo % 10;
                
                if (cientos > 0) {
                    resultado += convertirGrupo(cientos, dic) + dic.escalas[0];
                }
                
                if (decenas > 0) {
                    resultado += convertirGrupo(decenas, dic) + dic.escalas[0];
                }
                
                if (unidades > 0) {
                    resultado += dic.unidades[unidades];
                }
                
                resultado += dic.escalas[i];
            }
        }
    } else {
        
        for (let i = grupos.length - 1; i >= 0; i--) {
            const grupo = grupos[i];
            if (grupo === 0) continue;
            
            let textoGrupo = convertirGrupo(grupo, dic);
            let escala = dic.escalas[i] || '';
            
            if (escala === 'MILLONES' && grupo === 1 && dic.millonSingular) {
                textoGrupo = dic.millonSingular;
                escala = '';
            } else if (escala === 'BILLONES' && grupo === 1 && dic.billonSingular) {
                textoGrupo = dic.billonSingular;
                escala = '';
            } else if (escala === 'TRILLONES' && grupo === 1 && dic.trillonSingular) {
                textoGrupo = dic.trillonSingular;
                escala = '';
            } else if (grupo === 1 && escala === 'MIL' && dic.milSingular) {
                textoGrupo = dic.milSingular;
                escala = '';
            }
            
            if (resultado !== '') resultado += ' ';
            resultado += textoGrupo + (escala ? ' ' + escala : '');
        }
    }
    
    let resultadoDecimal = '';
    if (decimales > 0) {
        if (esIdiomaAsiatico) {
            resultadoDecimal = dic.decimal + convertirGrupo(decimales, dic);
        } else {
            resultadoDecimal = ' ' + dic.con + ' ' + convertirGrupo(decimales, dic);
        }
    }
    
    if (moneda && moneda !== '') {
        resultado += resultadoDecimal + ' ' + moneda;
    } else {
        resultado += resultadoDecimal;
    }
    
    return mayusculas === 1 ? resultado.toUpperCase() : resultado.toLowerCase().trim();
}