# 💻 AD-20: Laboratorio – Evaluación de Fin de Módulo

Este proyecto consiste en la implementación de pruebas unitarias utilizando **Jest**, y la aplicación del enfoque de **Desarrollo Orientado a Pruebas (TDD)** para validar funciones clave de los módulos de cálculo y gestión de usuarios.

---

## 📋 Tareas

### ✅ Tarea 1: Pruebas para ./js/calculator/calculator.js

Implementar pruebas unitarias para las funciones matemáticas del módulo calculator.js.

- [x] 2 pruebas unitarias para la función divide()
- [x] 2 pruebas unitarias para la función multiply()

---

### ✅ Tarea 2: Pruebas para ./js/user/user.js y ./js/user/user-controller.js

Validar el correcto funcionamiento de las clases de gestión de usuarios.

- [x] 1 prueba para add() que verifica la adición de un usuario no existente
- [x] 1 prueba para remove() que intenta eliminar un usuario no existente
- [x] 2 pruebas unitarias para findByEmail()
- [x] 2 pruebas unitarias para findById()

---

### ✅ Tarea 3: TDD para la función divide()

Aplicar Desarrollo Orientado a Pruebas (TDD) en la función divide().

- [x] Escribir una prueba que verifique el comportamiento al dividir entre 0
- [x] Corregir la función divide() para que maneje el caso de división entre cero lanzando una excepción

---

## 🧪 Tecnologías y herramientas

- Node.js
- Jest
- JavaScript (modular)

---

## 🚀 Instrucciones para ejecutar las pruebas

1. Instalar dependencias (si no están instaladas):

   
```bash
  npm test
```
