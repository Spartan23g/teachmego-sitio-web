document.addEventListener('DOMContentLoaded', () => {
    var pantallaBienvenida = document.getElementById('welcome-screen');
    var formularioRegistroAlumno = document.getElementById('alumno-register-form');
    var formularioRegistroDocente = document.getElementById('docente-register-form');
    var pantallaInicioSesion = document.getElementById('login-screen');

    var seccionHeroInicial = document.querySelector('.initial-hero-section');
    var seccionComunidad = document.getElementById('community-section');
    var contenedorInicioSesion = document.querySelector('.login-container');
    var seccionComoFunciona = document.getElementById('how-it-works-section');
    var seccionAcercaNosotros = document.getElementById('about-us-section');

    var btnRegistrarAlumno = document.getElementById('register-alumno-btn');
    var btnRegistrarDocente = document.getElementById('register-docente-btn');
    var btnVolverBienvenidaAlumno = document.getElementById('back-to-welcome-alumno');
    var btnVolverBienvenidaDocente = document.getElementById('back-to-welcome-docente');

    var botonInicioSesionCabecera = document.getElementById('login-button');
    var enlaceMostrarInicioSesionDesdeBienvenida = document.getElementById('show-login-from-welcome');
    var enlaceMostrarRegistroDesdeInicioSesion = document.getElementById('show-register-from-login');
    var btnVolverBienvenidaInicioSesion = document.getElementById('back-to-welcome-login');

    var enlaceNavComunidad = document.getElementById('community-nav-link');
    var enlaceNavComoFunciona = document.getElementById('how-it-works-nav-link');
    var enlaceNavAcercaNosotros = document.getElementById('about-us-nav-link');

    var mostrarEmailUsuario = document.getElementById('user-email-display');
    var botonCerrarSesion = document.getElementById('logout-button');

    var inputNombresAlumno = document.getElementById('alumno-nombres');
    var inputApellidosAlumno = document.getElementById('alumno-apellidos');
    var inputFechaNacimientoAlumno = document.getElementById('fecha-nacimiento-alumno');
    var mostrarEdadAlumno = document.getElementById('edad-display-alumno');
    var selectSexoAlumno = document.getElementById('sexo-alumno');
    var selectRegionAlumno = document.getElementById('region-alumno');
    var inputEmailAlumno = document.getElementById('email-alumno');
    var inputPasswordAlumno = document.getElementById('password-alumno');
    var inputConfirmarPasswordAlumno = document.getElementById('confirm-password-alumno');
    var formRegistroAlumno = document.getElementById('form-alumno-register');

    var inputNombresDocente = document.getElementById('docente-nombres');
    var inputApellidosDocente = document.getElementById('docente-apellidos');
    var inputFechaNacimientoDocente = document.getElementById('fecha-nacimiento-docente');
    var mostrarEdadDocente = document.getElementById('edad-display-docente');
    var selectSexoDocente = document.getElementById('sexo-docente');
    var selectRegionDocente = document.getElementById('region-docente');
    var inputEmailDocente = document.getElementById('docente-email');
    var inputPasswordDocente = document.getElementById('docente-password');
    var inputConfirmarPasswordDocente = document.getElementById('docente-confirm-password');
    var formRegistroDocente = document.getElementById('form-docente-register');

    var inputEmailInicioSesion = document.getElementById('login-email');
    var inputPasswordInicioSesion = document.getElementById('login-password');
    var formInicioSesion = document.getElementById('login-form');

    var btnIrARegistroHero = document.getElementById('go-to-register');

    var cuadrillaResenas = document.querySelector('.review-grid');
    var btnMostrarFormularioResena = document.getElementById('show-review-form-btn');
    var contenedorFormularioResena = document.getElementById('review-form-container');
    var formularioResena = document.getElementById('review-form');
    var btnCancelarResena = document.getElementById('cancel-review-btn');
    var inputEmailResena = document.getElementById('review-email');
    var inputTextoResena = document.getElementById('review-text');
    var inputCalificacionResena = document.getElementById('review-rating');
    var selectTipoResena = document.getElementById('review-type');

    var usuarioActual = null;
    var usuariosRegistrados = JSON.parse(localStorage.getItem('registeredUsers')) || {};
    var resenas = JSON.parse(localStorage.getItem('reviews')) || [
        { id: 'review-1', user: 'juanperez23@example.com', displayUser: 'JuanPérez23', type: 'positive', text: "¡Increíble plataforma! Encontré al profesor perfecto para mis clases de matemáticas en solo un día. La interfaz es muy intuitiva y fácil de usar.", rating: 5, date: '15 de Julio, 2025' },
        { id: 'review-2', user: 'anagarcia_profe@example.com', displayUser: 'AnaGarcía_Profe', type: 'neutral', text: "Me gustaría que se añadiera una opción para videollamadas integradas directamente en la plataforma. Por lo demás, la búsqueda de alumnos es fantástica.", rating: 4.5, date: '10 de Julio, 2025' },
        { id: 'review-3', user: 'carlos_estudiante@example.com', displayUser: 'Carlos_Estudiante', type: 'positive', text: "La función de filtro es muy buena. Pude encontrar profesores cerca de mi zona en Lima, Perú, y con disponibilidad en mi horario. ¡Excelente!", rating: 4.8, date: '08 de Julio, 2025' }
    ];

    function ocultarTodasLasPantallas() {
        if (seccionHeroInicial) {
            seccionHeroInicial.style.display = 'none';
            seccionHeroInicial.style.opacity = '0';
            seccionHeroInicial.style.pointerEvents = 'none';
        }
        if (contenedorInicioSesion) {
            contenedorInicioSesion.style.display = 'none';
            contenedorInicioSesion.style.opacity = '0';
            contenedorInicioSesion.style.pointerEvents = 'none';
            contenedorInicioSesion.classList.remove('fadeIn');
        }
        if (seccionComunidad) {
            seccionComunidad.style.display = 'none';
            seccionComunidad.style.opacity = '0';
            seccionComunidad.style.pointerEvents = 'none';
        }
        if (seccionComoFunciona) {
            seccionComoFunciona.style.display = 'none';
            seccionComoFunciona.style.opacity = '0';
            seccionComoFunciona.style.pointerEvents = 'none';
        }
        if (seccionAcercaNosotros) {
            seccionAcercaNosotros.style.display = 'none';
            seccionAcercaNosotros.style.opacity = '0';
            seccionAcercaNosotros.style.pointerEvents = 'none';
        }
        if (pantallaBienvenida) pantallaBienvenida.classList.remove('active');
        if (formularioRegistroAlumno) formularioRegistroAlumno.classList.remove('active');
        if (formularioRegistroDocente) formularioRegistroDocente.classList.remove('active');
        if (pantallaInicioSesion) pantallaInicioSesion.classList.remove('active');
    }

    function mostrarPantalla(pantallaAMostrar, esPantallaContenedorInicioSesion = false) {
        ocultarTodasLasPantallas();

        if (pantallaAMostrar) {
            if (esPantallaContenedorInicioSesion) {
                if (contenedorInicioSesion) {
                    contenedorInicioSesion.style.display = 'block';
                    contenedorInicioSesion.classList.remove('fadeIn');
                    void contenedorInicioSesion.offsetWidth;
                    contenedorInicioSesion.classList.add('fadeIn');
                    contenedorInicioSesion.style.opacity = '1';
                    contenedorInicioSesion.style.pointerEvents = 'auto';
                }
                pantallaAMostrar.classList.add('active');
            } else {
                pantallaAMostrar.style.display = (pantallaAMostrar === seccionHeroInicial || pantallaAMostrar === seccionComoFunciona || pantallaAMostrar === seccionAcercaNosotros) ? 'flex' : 'block';
                pantallaAMostrar.style.opacity = '1';
                pantallaAMostrar.style.pointerEvents = 'auto';
            }
        }
    }

    function regresarEstadoInicial() {
        mostrarPantalla(seccionHeroInicial);
    }

    function limpiarCamposFormulario(formulario) {
        if (formulario) formulario.reset();
    }

    function calcularEdad(fechaNacimientoStr, edadMinima) {
        if (!fechaNacimientoStr) {
            return null;
        }
        var fechaNacimiento = new Date(fechaNacimientoStr + 'T00:00:00');
        var hoy = new Date();
        var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        var mesDiff = hoy.getMonth() - fechaNacimiento.getMonth();
        var diaDiff = hoy.getDate() - fechaNacimiento.getDate();

        if (mesDiff < 0 || (mesDiff === 0 && diaDiff < 0)) {
            edad--;
        }
        if (isNaN(fechaNacimiento.getTime())) {
            return null;
        }
        return edad >= edadMinima ? edad : null;
    }

    function actualizarCabeceraParaSesion() {
        if (usuarioActual) {
            if (botonInicioSesionCabecera) botonInicioSesionCabecera.classList.add('hidden');
            if (mostrarEmailUsuario) {
                var nombreUsuarioAMostrar = usuarioActual.split('@')[0];
                mostrarEmailUsuario.textContent = `Hola, ${nombreUsuarioAMostrar}`;
                mostrarEmailUsuario.classList.remove('hidden');
            }
            if (botonCerrarSesion) botonCerrarSesion.classList.remove('hidden');
            if (btnIrARegistroHero) btnIrARegistroHero.classList.add('hidden');
        } else {
            if (botonInicioSesionCabecera) botonInicioSesionCabecera.classList.remove('hidden');
            if (mostrarEmailUsuario) mostrarEmailUsuario.classList.add('hidden');
            if (botonCerrarSesion) botonCerrarSesion.classList.add('hidden');
            if (btnIrARegistroHero) btnIrARegistroHero.classList.remove('hidden');
        }
    }

    function renderizarResenas() {
        if (!cuadrillaResenas) return;

        cuadrillaResenas.innerHTML = '';

        resenas.forEach(resena => {
            var tarjetaResena = document.createElement('div');
            
            tarjetaResena.classList.add('review-card');
            tarjetaResena.setAttribute('data-review-id', resena.id);

            var claseInsignia = resena.type === 'positive' ? 'positive' : resena.type === 'neutral' ? 'neutral' : 'negative';
            var textoInsignia = resena.type === 'positive' ? 'Excelente' : resena.type === 'neutral' ? 'Sugerencia' : 'Problema';

            var nombreUsuarioAMostrar = resena.displayUser || resena.user.split('@')[0];

            var mostrarBotonEliminar = usuarioActual && usuarioActual === resena.user ? '' : 'hidden';

            tarjetaResena.innerHTML = `
                <div class="review-header">
                    <span class="user-avatar"><i class="fas fa-user-circle"></i></span>
                    <div class="user-info">
                        <h4>${nombreUsuarioAMostrar} <span class="badge ${claseInsignia}">${textoInsignia}</span></h4>
                        <span class="review-date">${resena.date}</span>
                    </div>
                    <button class="delete-review-btn ${mostrarBotonEliminar}" data-review-id="${resena.id}">
                        <i class="fas fa-trash-alt"></i> Eliminar
                    </button>
                </div>
                <p class="review-text">"${resena.text}"</p>
                <div class="review-actions">
                    <span><i class="fas fa-star"></i> ${resena.rating.toFixed(1)}</span>
                    <span><i class="fas fa-thumbs-up"></i> ${Math.floor(Math.random() * 20) + 1}</span>
                    <span><i class="fas fa-comment"></i> ${Math.floor(Math.random() * 5) + 1}</span>
                </div>
            `;
            cuadrillaResenas.appendChild(tarjetaResena);
        });
    }

    function guardarDatos() {
        localStorage.setItem('registeredUsers', JSON.stringify(usuariosRegistrados));
        localStorage.setItem('reviews', JSON.stringify(resenas));
        localStorage.setItem('currentUser', JSON.stringify(usuarioActual));
    }

    if (btnIrARegistroHero) {
        btnIrARegistroHero.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(pantallaBienvenida, true);
            limpiarCamposFormulario(formRegistroAlumno);
            limpiarCamposFormulario(formRegistroDocente);
            limpiarCamposFormulario(formInicioSesion);
            if (mostrarEdadAlumno) mostrarEdadAlumno.textContent = '';
            if (mostrarEdadDocente) mostrarEdadDocente.textContent = '';
        });
    }

    if (botonInicioSesionCabecera) {
        botonInicioSesionCabecera.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(pantallaInicioSesion, true);
            limpiarCamposFormulario(formRegistroAlumno);
            limpiarCamposFormulario(formRegistroDocente);
            limpiarCamposFormulario(formInicioSesion);
            if (mostrarEdadAlumno) mostrarEdadAlumno.textContent = '';
            if (mostrarEdadDocente) mostrarEdadDocente.textContent = '';
        });
    }

    if (enlaceNavComunidad) {
        enlaceNavComunidad.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(seccionComunidad, false);
            renderizarResenas();
            window.scrollTo({
                top: seccionComunidad.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    }

    if (enlaceNavComoFunciona) {
        enlaceNavComoFunciona.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(seccionComoFunciona, false);
            window.scrollTo({
                top: seccionComoFunciona.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    }

    if (enlaceNavAcercaNosotros) {
        enlaceNavAcercaNosotros.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(seccionAcercaNosotros, false);
            window.scrollTo({
                top: seccionAcercaNosotros.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    }

    if (enlaceMostrarInicioSesionDesdeBienvenida) {
        enlaceMostrarInicioSesionDesdeBienvenida.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(pantallaInicioSesion, true);
            limpiarCamposFormulario(formInicioSesion);
        });
    }

    if (enlaceMostrarRegistroDesdeInicioSesion) {
        enlaceMostrarRegistroDesdeInicioSesion.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(pantallaBienvenida, true);
            limpiarCamposFormulario(formInicioSesion);
        });
    }

    if (inputFechaNacimientoAlumno && mostrarEdadAlumno) {
        inputFechaNacimientoAlumno.addEventListener('change', () => {
            var fechaSeleccionada = inputFechaNacimientoAlumno.value;
            var EDAD_MINIMA_ALUMNO = 14;
            var edad = calcularEdad(fechaSeleccionada, EDAD_MINIMA_ALUMNO);

            if (edad !== null) {
                mostrarEdadAlumno.textContent = `Edad: ${edad} años. ¡Puedes registrarte!`;
                mostrarEdadAlumno.style.color = '#28a745';
            } else if (fechaSeleccionada) {
                mostrarEdadAlumno.textContent = `Debes tener al menos ${EDAD_MINIMA_ALUMNO} años para registrarte como alumno.`;
                mostrarEdadAlumno.style.color = '#dc3545';
            } else {
                mostrarEdadAlumno.textContent = '';
            }
        });
    }

    if (inputFechaNacimientoDocente && mostrarEdadDocente) {
        inputFechaNacimientoDocente.addEventListener('change', () => {
            var fechaSeleccionada = inputFechaNacimientoDocente.value;
            var EDAD_MINIMA_DOCENTE = 18;
            var edad = calcularEdad(fechaSeleccionada, EDAD_MINIMA_DOCENTE);

            if (edad !== null) {
                mostrarEdadDocente.textContent = `Edad: ${edad} años.`;
                mostrarEdadDocente.style.color = '#28a745';
            } else if (fechaSeleccionada) {
                mostrarEdadDocente.textContent = `Debes tener al menos ${EDAD_MINIMA_DOCENTE} años para registrarte como docente.`;
                mostrarEdadDocente.style.color = '#dc3545';
            } else {
                mostrarEdadDocente.textContent = '';
            }
        });
    }

    if (btnRegistrarAlumno) {
        btnRegistrarAlumno.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(formularioRegistroAlumno, true);
            limpiarCamposFormulario(formRegistroAlumno);
            if (mostrarEdadAlumno) mostrarEdadAlumno.textContent = '';
        });
    }

    if (btnRegistrarDocente) {
        btnRegistrarDocente.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(formularioRegistroDocente, true);
            limpiarCamposFormulario(formRegistroDocente);
            if (mostrarEdadDocente) mostrarEdadDocente.textContent = '';
        });
    }

    if (btnVolverBienvenidaAlumno) {
        btnVolverBienvenidaAlumno.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(pantallaBienvenida, true);
            limpiarCamposFormulario(formRegistroAlumno);
        });
    }
    if (btnVolverBienvenidaDocente) {
        btnVolverBienvenidaDocente.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(pantallaBienvenida, true);
            limpiarCamposFormulario(formRegistroDocente);
        });
    }
    if (btnVolverBienvenidaInicioSesion) {
        btnVolverBienvenidaInicioSesion.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(pantallaBienvenida, true);
            limpiarCamposFormulario(formInicioSesion);
        });
    }

    if (formRegistroAlumno) {
        formRegistroAlumno.addEventListener('submit', (e) => {
            e.preventDefault();

            var EDAD_MINIMA_ALUMNO = 14;
            var edad = calcularEdad(inputFechaNacimientoAlumno.value, EDAD_MINIMA_ALUMNO);

            if (!inputNombresAlumno.value.trim() || !inputApellidosAlumno.value.trim() || !inputFechaNacimientoAlumno.value ||
                !selectSexoAlumno.value || !selectRegionAlumno.value || !inputEmailAlumno.value.trim() ||
                !inputPasswordAlumno.value || !inputConfirmarPasswordAlumno.value) {
                alert('Por favor, completa todos los campos requeridos del alumno.');
                return;
            }
            if (inputPasswordAlumno.value !== inputConfirmarPasswordAlumno.value) {
                alert('Las contraseñas no coinciden.');
                return;
            }
            if (inputPasswordAlumno.value.length < 6) {
                alert('La contraseña debe tener al menos 6 caracteres.');
                return;
            }
            if (!/\S+@\S+\.\S+/.test(inputEmailAlumno.value)) {
                alert('Por favor, ingresa un correo electrónico válido.');
                return;
            }
            if (edad === null) {
                alert(`Debes tener al menos ${EDAD_MINIMA_ALUMNO} años para registrarte como alumno y tu fecha de nacimiento debe ser válida.`);
                return;
            }
            if (usuariosRegistrados[inputEmailAlumno.value.trim()]) {
                alert('Este correo electrónico ya está registrado. Por favor, inicia sesión o usa otro correo.');
                return;
            }

            usuariosRegistrados[inputEmailAlumno.value.trim()] = {
                password: inputPasswordAlumno.value,
                type: 'alumno',
                nombres: inputNombresAlumno.value.trim(),
                apellidos: inputApellidosAlumno.value.trim(),
                fechaNacimiento: inputFechaNacimientoAlumno.value,
                sexo: selectSexoAlumno.value,
                region: selectRegionAlumno.value
            };
            guardarDatos();

            alert('¡Registro de Alumno exitoso! Ahora puedes iniciar sesión.');
            mostrarPantalla(pantallaInicioSesion, true);
            limpiarCamposFormulario(formRegistroAlumno);
            limpiarCamposFormulario(formInicioSesion);
        });
    }

    if (formRegistroDocente) {
        formRegistroDocente.addEventListener('submit', (e) => {
            e.preventDefault();

            var EDAD_MINIMA_DOCENTE = 18;
            var edad = calcularEdad(inputFechaNacimientoDocente.value, EDAD_MINIMA_DOCENTE);

            if (!inputNombresDocente.value.trim() || !inputApellidosDocente.value.trim() || !inputFechaNacimientoDocente.value ||
                !selectSexoDocente.value || !selectRegionDocente.value || !inputEmailDocente.value.trim() ||
                !inputPasswordDocente.value || !inputConfirmarPasswordDocente.value) {
                alert('Por favor, completa todos los campos requeridos del docente.');
                return;
            }
            if (inputPasswordDocente.value !== inputConfirmarPasswordDocente.value) {
                alert('Las contraseñas no coinciden.');
                return;
            }
            if (inputPasswordDocente.value.length < 6) {
                alert('La contraseña debe tener al menos 6 caracteres.');
                return;
            }
            if (!/\S+@\S+\.\S+/.test(inputEmailDocente.value)) {
                alert('Por favor, ingresa un correo electrónico válido.');
                return;
            }
            if (edad === null) {
                alert(`Debes tener al menos ${EDAD_MINIMA_DOCENTE} años para registrarte como docente y tu fecha de nacimiento debe ser válida.`);
                return;
            }
            if (usuariosRegistrados[inputEmailDocente.value.trim()]) {
                alert('Este correo electrónico ya está registrado. Por favor, inicia sesión o usa otro correo.');
                return;
            }

            usuariosRegistrados[inputEmailDocente.value.trim()] = {
                password: inputPasswordDocente.value,
                type: 'docente',
                nombres: inputNombresDocente.value.trim(),
                apellidos: inputApellidosDocente.value.trim(),
                fechaNacimiento: inputFechaNacimientoDocente.value,
                sexo: selectSexoDocente.value,
                region: selectRegionDocente.value
            };
            guardarDatos();

            alert('¡Registro de Docente exitoso! Ahora puedes iniciar sesión.');
            mostrarPantalla(pantallaInicioSesion, true);
            limpiarCamposFormulario(formRegistroDocente);
            limpiarCamposFormulario(formInicioSesion);
        });
    }

    if (formInicioSesion) {
        formInicioSesion.addEventListener('submit', (e) => {
            e.preventDefault();

            var email = inputEmailInicioSesion.value.trim();
            var password = inputPasswordInicioSesion.value;

            if (!email || !password) {
                alert('Por favor, ingresa tu correo y contraseña.');
                return;
            }
            if (!/\S+@\S+\.\S+/.test(email)) {
                alert('Por favor, ingresa un correo electrónico válido.');
                return;
            }

            var user = usuariosRegistrados[email];

            if (user && user.password === password) {
                usuarioActual = email;
                guardarDatos();
                alert(`¡Bienvenido de nuevo, ${email.split('@')[0]}!`);
                regresarEstadoInicial();
                limpiarCamposFormulario(formInicioSesion);
                actualizarCabeceraParaSesion();
                renderizarResenas();
            } else {
                alert('Correo o contraseña incorrectos. Por favor, verifica tus credenciales.');
            }
        });
    }

    if (botonCerrarSesion) {
        botonCerrarSesion.addEventListener('click', (e) => {
            e.preventDefault();
            usuarioActual = null;
            guardarDatos();
            alert('Has cerrado sesión.');
            actualizarCabeceraParaSesion();
            renderizarResenas();
            regresarEstadoInicial();
        });
    }

    if (btnMostrarFormularioResena) {
        btnMostrarFormularioResena.addEventListener('click', () => {
            if (usuarioActual) {
                inputEmailResena.value = usuarioActual;
                inputEmailResena.readOnly = true;
                contenedorFormularioResena.classList.remove('hidden');
                btnMostrarFormularioResena.classList.add('hidden');
            } else {
                alert('Debes iniciar sesión para dejar un comentario.');
                mostrarPantalla(pantallaInicioSesion, true);
            }
        });
    }

    if (btnCancelarResena) {
        btnCancelarResena.addEventListener('click', () => {
            contenedorFormularioResena.classList.add('hidden');
            btnMostrarFormularioResena.classList.remove('hidden');
            limpiarCamposFormulario(formularioResena);
            inputEmailResena.readOnly = false;
        });
    }

    if (formularioResena) {
        formularioResena.addEventListener('submit', (e) => {
            e.preventDefault();

            var email = inputEmailResena.value.trim();
            var text = inputTextoResena.value.trim();
            var rating = parseFloat(inputCalificacionResena.value);
            var type = selectTipoResena.value;

            if (!email || !text || !rating || !type) {
                alert('Por favor, completa todos los campos del comentario.');
                return;
            }
            if (rating < 1 || rating > 5) {
                alert('La calificación debe estar entre 1 y 5.');
                return;
            }
            if (!usuarioActual || usuarioActual !== email) {
                alert('El correo del comentario debe coincidir con tu sesión actual.');
                return;
            }
            if (text.length < 10) {
                alert('Tu comentario debe tener al menos 10 caracteres.');
                return;
            }

            var nuevaResena = {
                id: `review-${Date.now()}`,
                user: email,
                displayUser: email.split('@')[0],
                type: type,
                text: text,
                rating: rating,
                date: new Date().toLocaleDateString('es-PE', { day: 'numeric', month: 'long', year: 'numeric' })
            };

            resenas.unshift(nuevaResena);
            guardarDatos();
            renderizarResenas();

            alert('¡Tu comentario ha sido enviado con éxito!');
            contenedorFormularioResena.classList.add('hidden');
            btnMostrarFormularioResena.classList.remove('hidden');
            limpiarCamposFormulario(formularioResena);
            inputEmailResena.readOnly = false;
        });
    }

    if (cuadrillaResenas) {
        cuadrillaResenas.addEventListener('click', (e) => {
            var botonEliminar = e.target.closest('.delete-review-btn');
            if (botonEliminar) {
                var idResenaAEliminar = botonEliminar.dataset.reviewId;
                if (confirm('¿Estás seguro de que quieres eliminar esta reseña?')) {
                    resenas = resenas.filter(resena => resena.id !== idResenaAEliminar);
                    guardarDatos();
                    renderizarResenas();
                    alert('Reseña eliminada con éxito.');
                }
            }
        });
    }

    usuarioActual = JSON.parse(localStorage.getItem('currentUser'));
    actualizarCabeceraParaSesion();
    renderizarResenas();
    regresarEstadoInicial();
});