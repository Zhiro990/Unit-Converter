<h1 align="center"> { unit-converter } </h1>

Unit converter in JavaScript.

## Table of Contents
> * [Installing](#installing)
> * [Importing](#importing)
> * [Methods](#methods)
>   * [convertData()](#convertdata--number)
>   * [convertLength()](#convertlength--number)
>   * [convertMass()](#convertmass--number)
>   * [convertTemperature()](#converttemperature--number)
>   * [convertTime()](#converttime--number)
> * [Available Units](#available-units)
>   * [Data Units](#data-units)
>   * [Length Units](#length-units)
>   * [Mass Units](#mass-units)
>   * [Temperature Units](#temperature-units)
>   * [Time Units](#time-units)

## Installing

```bash
npm i Zhiro990/unit-converter
```

## Importing

```js
const UnitConverter = require("unit-converter");
```

## Methods

### convertData() : [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

| Parameter | Description | Type | Optional |
| :-: | :-: | :-: | :-: |
| `from` | The original [unit](#data-units) you want to convert. | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No |
| `to` | The target [unit](#data-units) for conversion. | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No |
| `number` | The value you want to convert. | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | No |

### convertLength() : [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

| Parameter | Description | Type | Optional |
| :-: | :-: | :-: | :-: |
| `from` | The original [unit](#length-units) you want to convert. | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No |
| `to` | The target [unit](#length-units) for conversion. | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No |
| `number` | The value you want to convert. | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | No |

### convertMass() : [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

| Parameter | Description | Type | Optional |
| :-: | :-: | :-: | :-: |
| `from` | The original [unit](#mass-units) you want to convert. | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No |
| `to` | The target [unit](#mass-units) for conversion. | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No |
| `number` | The value you want to convert. | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | No |

### convertTemperature() : [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

| Parameter | Description | Type | Optional |
| :-: | :-: | :-: | :-: |
| `from` | The original [unit](#temperature-units) you want to convert. | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No |
| `to` | The target [unit](#temperature-units) for conversion. | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No |
| `number` | The value you want to convert. | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | No |

### convertTime() : [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

| Parameter | Description | Type | Optional |
| :-: | :-: | :-: | :-: |
| `from` | The original [unit](#time-units) you want to convert. | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No |
| `to` | The target [unit](#time-units) for conversion. | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | No |
| `number` | The value you want to convert. | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | No |

## Available Units

### Data Units

| Unit | Name |
| :-: | :-: |
| `QiB` | Quebibyte |
| `RiB` | Robibyte |
| `YiB` | Yobibyte |
| `ZiB` | Zebibyte |
| `EiB` | Exbibyte |
| `PiB` | Pebibyte |
| `TiB` | Tebibyte |
| `GiB` | Gibibyte |
| `MiB` | Mebibyte |
| `KiB` | Kibibyte |
| `QB` | Quettabyte |
| `RB` | Ronnabyte |
| `YB` | Yottabyte |
| `ZB` | Zettabyte |
| `EB` | Exabyte |
| `PB` | Petabyte |
| `TB` | Terabyte |
| `GB` | Gigabyte |
| `MB` | Megabyte |
| `KB` | Kilobyte |
| `B` | Byte |
| `Qib` | Quebibit |
| `Rib` | Robibit |
| `Yib` | Yobibit |
| `Zib` | Zebibit |
| `Eib` | Exbibit |
| `Pib` | Pebibit |
| `Tib` | Tebibit |
| `Gib` | Gibibit |
| `Mib` | Mebibit |
| `Kib` | Kibibit |
| `Qb` | Quettabit |
| `Rb` | Ronnabit |
| `Yb` | Yottabit |
| `Zb` | Zettabit |
| `Eb` | Exabit |
| `Pb` | Petabit |
| `Tb` | Terabit |
| `Gb` | Gigabit |
| `Mb` | Megabit |
| `Kb` | Kilobit |
| `b` | Bit |

### Length Units

| Unit | Name |
| :-: | :-: |
| `km` | Kilometer |
| `hm` | Hectometer |
| `dam` | Decameter |
| `m` | Meter |
| `dm` | Decimeter |
| `cm` | Centimeter |
| `mm` | Millimeter |
| `in` | Inch |
| `ft` | Foot/Feet |
| `yd` | Yard |
| `mi` | Mile |

### Mass Units

| Unit | Name |
| :-: | :-: |
| `Gt` | Gigatonne |
| `Mt` | Megatonne |
| `kt` | Kilotonne |
| `t` | Tonne |
| `q` | Quintal |
| `kg` | Kilogram |
| `g` | Gram |
| `mg` | Milligram |
| `lb` | Pound |
| `oz` | Ounce |
| `gr` | Grain |
| `ct` | Carat |

### Temperature Units

| Unit | Name |
| :-: | :-: |
| `C` | Celcius |
| `F` | Fahrenheit |
| `K` | Kelvin |
| `R` | Rankine |
| `Re` | Réaumur |

### Time Units

| Unit | Name |
| :-: | :-: |
| `yr` | Year |
| `mo` | Month |
| `wk` | Week |
| `d` | Day |
| `h` | Hour |
| `min` | Minute |
| `s` | Second |
| `ms` | Millisecond |

<h5 align="center"> Created with ❤ by Zhiro990 </h5>