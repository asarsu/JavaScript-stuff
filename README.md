# Exercises - Events (Class 29)

Collection of exercises about JavaScript events. Open [index.html](index.html) as the entry point to access each exercise.

## Structure
- [index.html](index.html) — List of exercises.
- [cargar-imagenes.html](cargar-imagenes.html) — Load images with numeric keys.
- [caja-roja.html](caja-roja.html) — Move a box with arrow keys.
- [ordenar-elementos.html](ordenar-elementos.html) — Sort and remove items from a list.
- [parrafo.html](parrafo.html) — Fill a paragraph with typed keys.
- [raton.html](raton.html) — Box that moves randomly when the mouse tries to enter.
- [eliminar_vocal.html](eliminar_vocal.html) — Remove vowels from text using buttons.
- [velocidad.html](velocidad.html) — Key-press competition between two keys.
- [adivinar.html](adivinar.html) — Memory match game (pairs).
  - Logic in [`adivinar_main.js`](adivinar_main.js). Notable functions: `shuffle`, `stopwatch`.
  - Styles in [`adivinar-styles.css`](adivinar-styles.css).
- [ejercicios-propagacion-eventos.md](ejercicios-propagacion-eventos.md) — Original exercise statements.
- [.vscode/settings.json](.vscode/settings.json) — Live Server configuration (port: 5501).

## How to use
1. Open the project in VS Code.
2. Serve the project with Live Server (the configured port in [.vscode/settings.json](.vscode/settings.json) will be used) or open [index.html](index.html) directly in the browser.
3. Navigate the exercises list from [index.html](index.html).

## Notes
- The memory game uses a visual timer in `#timer` and dynamically generates the 30 tiles inside `#tablero` with the logic implemented in [`adivinar_main.js`](adivinar_main.js).
- Testing and debugging are done directly in the browser (DevTools console).

## Contributing
- Open an issue or a pull request with improvements or fixes. Keep examples simple and consistent.

---
