# proyprueba (línea base)

Login didáctico con HTML, CSS y JavaScript. Punto de partida del **Laboratorio 11**:
trabajo colaborativo con tres ramas de GitHub.

## Credenciales de demostración

- Correo: demo@correo.com
- Contraseña: demo12345

(Solo didáctico: la validación del lado cliente no es seguridad real.)

## Reparto de trabajo

| Participante | Ubicación | Rama | Archivo |
| --- | --- | --- | --- |
| Torres Vásquez, Ana Lucía | Tarapoto | `feature/estructura-login` | `index.html` |
| Pinedo Rengifo, Luis Alberto | Moyobamba | `feature/estilos-login` | `styles.css` |
| Salas Tuesta, Carla Beatriz | Rioja | `feature/validacion-login` | `script.js` |

Nadie modifica `main` directamente: todo cambio entra por pull request.

## Acuerdos entre archivos (no romper sin coordinar)

- **id que usa `script.js`:** `loginForm`, `email`, `password`, `togglePassword`, `btnEnviar`, `message`.
- **Clases del HTML que usa el CSS:** `contenedor`, `fila-password`.
- **Mensajes:** `script.js` aplica la clase `mensaje-error` o `mensaje-exito` a `#message`;
  `styles.css` define sus colores.
- **Formulario:** lleva `novalidate`; la validación la hace `script.js`.
  Si se cambia el campo de correo a `type="email"`, mantener `novalidate`.
- Si se agregan `label` dentro de `.fila-password`, avisar a quien edita `styles.css`
  porque esa fila usa `display: flex`.
