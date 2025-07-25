document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.getElementById('hero-section');
    const loginRegisterContainer = document.getElementById('login-register-container');
    const pantallaBienvenida = document.getElementById('pantalla-bienvenida');
    const pantallaInicioSesion = document.getElementById('pantalla-inicio-sesion');
    const formRegistroAlumno = document.getElementById('form-registro-alumno');
    const formRegistroProfesor = document.getElementById('form-registro-profesor');
    const communitySection = document.getElementById('community-section');
    const howItWorksSection = document.getElementById('how-it-works-section');
    const aboutUsSection = document.getElementById('about-us-section');

    const homeLink = document.getElementById('home-link');
    const btnIrARegistroHero = document.getElementById('btn-ir-a-registro-hero');
    const botonInicioSesionCabecera = document.getElementById('boton-inicio-sesion-cabecera');
    const enlaceNavComunidad = document.getElementById('enlace-nav-comunidad');
    const enlaceNavComoFunciona = document.getElementById('enlace-nav-como-funciona');
    const enlaceNavAcercaNosotros = document.getElementById('enlace-nav-acerca-nosotros');

    const userInfoHeader = document.getElementById('user-info');
    const mostrarEmailUsuario = document.getElementById('mostrar-email-usuario');
    const botonCerrarSesion = document.getElementById('boton-cerrar-sesion');

    const btnRegistrarAlumno = document.getElementById('btn-registrar-alumno');
    const btnRegistrarDocente = document.getElementById('btn-registrar-docente');
    const enlaceMostrarInicioSesionDesdeBienvenida = document.getElementById('enlace-mostrar-inicio-sesion-desde-bienvenida');
    const enlaceMostrarRegistroDesdeInicioSesion = document.getElementById('enlace-mostrar-registro-desde-inicio-sesion');
    const btnVolverBienvenidaAlumno = document.getElementById('btn-volver-bienvenida-alumno');
    const btnVolverBienvenidaDocente = document.getElementById('btn-volver-bienvenida-docente');
    const btnVolverInicioSesion = document.getElementById('btn-volver-inicio-sesion');

    const inputEmailInicioSesion = document.getElementById('input-email-inicio-sesion');
    const inputPasswordInicioSesion = document.getElementById('input-password-inicio-sesion');
    const formInicioSesion = document.getElementById('form-inicio-sesion');

    const inputNombreAlumno = document.getElementById('input-nombre-alumno');
    const inputApellidosAlumno = document.getElementById('input-apellidos-alumno');
    const inputFechaNacimientoAlumno = document.getElementById('input-fecha-nacimiento-alumno');
    const mostrarEdadAlumno = document.getElementById('mostrar-edad-alumno');
    const selectSexoAlumno = document.getElementById('select-sexo-alumno');
    const selectRegionAlumno = document.getElementById('select-region-alumno');
    const inputEmailAlumno = document.getElementById('input-email-alumno');
    const inputPasswordAlumno = document.getElementById('input-password-alumno');
    const inputConfirmarPasswordAlumno = document.getElementById('input-confirmar-password-alumno');

    const inputNombreProfesor = document.getElementById('input-nombre-profesor');
    const inputApellidosProfesor = document.getElementById('input-apellidos-profesor');
    const inputFechaNacimientoProfesor = document.getElementById('input-fecha-nacimiento-profesor');
    const mostrarEdadProfesor = document.getElementById('mostrar-edad-profesor');
    const selectSexoProfesor = document.getElementById('select-sexo-profesor');
    const selectRegionProfesor = document.getElementById('select-region-profesor');
    const inputEmailProfesor = document.getElementById('input-email-profesor');
    const inputPasswordProfesor = document.getElementById('input-password-profesor');
    const inputConfirmarPasswordProfesor = document.getElementById('input-confirmar-password-profesor');

    const reviewGrid = document.querySelector('.review-grid');
    const btnMostrarFormularioResena = document.getElementById('btn-mostrar-formulario-resena');
    const contenedorFormularioResena = document.getElementById('review-form-container');
    const formularioResena = document.getElementById('formulario-resena');
    const btnCancelarResena = document.getElementById('btn-cancelar-resena');
    const inputEmailResena = document.getElementById('input-email-resena');
    const inputTextoResena = document.getElementById('input-texto-resena');
    const inputCalificacionResena = document.getElementById('input-calificacion-resena');
    const selectTipoResena = document.getElementById('select-tipo-resena');

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || {};
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [
        { id: 'review-1', user: 'juanperez23@example.com', displayUser: 'JuanPérez23', type: 'positive', text: "¡Increíble plataforma! Encontré al profesor perfecto para mis clases de matemáticas en solo un día. La interfaz es muy intuitiva y fácil de usar.", rating: 5, date: '15 de Julio, 2025' },
        { id: 'review-2', user: 'anagarcia_profe@example.com', displayUser: 'AnaGarcía_Profe', type: 'neutral', text: "Me gustaría que se añadiera una opción para videollamadas integradas directamente en la plataforma. Por lo demás, la búsqueda de alumnos es fantástica.", rating: 4.5, date: '10 de Julio, 2025' },
        { id: 'review-3', user: 'carlos_estudiante@example.com', displayUser: 'Carlos_Estudiante', type: 'positive', text: "La función de filtro es muy buena. Pude encontrar profesores cerca de mi zona en Lima, Perú, y con disponibilidad en mi horario. ¡Excelente!", rating: 4.8, date: '08 de Julio, 2025' }
    ];

    function ocultarTodasLasSecciones() {
        if (heroSection) {
            heroSection.style.display = 'none';
            heroSection.style.opacity = '0';
            heroSection.style.pointerEvents = 'none';
        }
        if (loginRegisterContainer) {
            loginRegisterContainer.style.display = 'none';
            loginRegisterContainer.style.opacity = '0';
            loginRegisterContainer.style.pointerEvents = 'none';
            loginRegisterContainer.classList.remove('fadeIn');
        }
        if (communitySection) {
            communitySection.style.display = 'none';
            communitySection.style.opacity = '0';
            communitySection.style.pointerEvents = 'none';
        }
        if (howItWorksSection) {
            howItWorksSection.style.display = 'none';
            howItWorksSection.style.opacity = '0';
            howItWorksSection.style.pointerEvents = 'none';
        }
        if (aboutUsSection) {
            aboutUsSection.style.display = 'none';
            aboutUsSection.style.opacity = '0';
            aboutUsSection.style.pointerEvents = 'none';
        }
        document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    }

    function mostrarSeccion(sectionToShow, isLoginRegister = false) {
        ocultarTodasLasSecciones();

        if (sectionToShow) {
            if (isLoginRegister) {
                if (loginRegisterContainer) {
                    loginRegisterContainer.style.display = 'block';
                    loginRegisterContainer.classList.remove('fadeIn');
                    void loginRegisterContainer.offsetWidth;
                    loginRegisterContainer.classList.add('fadeIn');
                    loginRegisterContainer.style.opacity = '1';
                    loginRegisterContainer.style.pointerEvents = 'auto';
                }
                sectionToShow.classList.add('active');
            } else {
                sectionToShow.style.display = (sectionToShow === heroSection || sectionToShow === howItWorksSection || sectionToShow === aboutUsSection) ? 'flex' : 'block';
                sectionToShow.style.opacity = '1';
                sectionToShow.style.pointerEvents = 'auto';
            }
        }
    }

    function regresarEstadoInicial() {
        mostrarSeccion(heroSection);
        if (loginRegisterContainer) loginRegisterContainer.classList.remove('fadeIn');
    }

    function limpiarCamposFormulario(form) {
        if (form) form.reset();
    }

    function calcularEdad(fechaNacimientoStr, edadMinima) {
        if (!fechaNacimientoStr) {
            return null;
        }
        const fechaNacimiento = new Date(fechaNacimientoStr + 'T00:00:00');
        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
        const diferenciaDias = hoy.getDate() - fechaNacimiento.getDate();

        if (diferenciaMeses < 0 || (diferenciaMeses === 0 && diferenciaDias < 0)) {
            edad--;
        }
        if (isNaN(fechaNacimiento.getTime())) {
            return null;
        }
        return edad >= edadMinima ? edad : null;
    }

    function actualizarCabeceraParaSesion() {
        if (currentUser) {
            if (botonInicioSesionCabecera) botonInicioSesionCabecera.classList.add('hidden');
            if (userInfoHeader) userInfoHeader.classList.remove('hidden');
            if (mostrarEmailUsuario) {
                const nombreUsuarioEmail = currentUser.split('@')[0];
                mostrarEmailUsuario.textContent = `Hola, ${nombreUsuarioEmail}`;
            }
            if (botonCerrarSesion) botonCerrarSesion.classList.remove('hidden');
            if (btnIrARegistroHero) btnIrARegistroHero.classList.add('hidden');
            if (contenedorFormularioResena && inputEmailResena) {
                inputEmailResena.value = currentUser;
                inputEmailResena.readOnly = true;
            }
        } else {
            if (botonInicioSesionCabecera) botonInicioSesionCabecera.classList.remove('hidden');
            if (userInfoHeader) userInfoHeader.classList.add('hidden');
            if (mostrarEmailUsuario) mostrarEmailUsuario.textContent = '';
            if (botonCerrarSesion) botonCerrarSesion.classList.add('hidden');
            if (btnIrARegistroHero) btnIrARegistroHero.classList.remove('hidden');
            if (contenedorFormularioResena && inputEmailResena) {
                inputEmailResena.value = '';
                inputEmailResena.readOnly = false;
            }
            if (contenedorFormularioResena) {
                contenedorFormularioResena.classList.add('hidden');
            }
        }
    }

    function renderizarResenas() {
        if (!reviewGrid) return;

        reviewGrid.innerHTML = '';

        reviews.forEach(review => {
            const tarjetaResena = document.createElement('div');
            tarjetaResena.classList.add('review-card');
            tarjetaResena.setAttribute('data-review-id', review.id);

            const claseEstado = review.type === 'positive' ? 'positive' : review.type === 'neutral' ? 'neutral' : 'negative';
            const textoEstado = review.type === 'positive' ? 'Excelente' : review.type === 'neutral' ? 'Sugerencia' : 'Problema';

            const nombreUsuarioMostrado = review.displayUser || review.user.split('@')[0];

            const mostrarBotonEliminar = (currentUser && currentUser === review.user) ? '' : 'hidden';

            tarjetaResena.innerHTML = `
                <div class="review-header">
                    <span class="user-avatar"><i class="fas fa-user-circle"></i></span>
                    <div class="user-info">
                        <h4>${nombreUsuarioMostrado} <span class="badge ${claseEstado}">${textoEstado}</span></h4>
                        <span class="review-date">${review.date}</span>
                    </div>
                    <button class="delete-review-btn ${mostrarBotonEliminar}" data-review-id="${review.id}">
                        <i class="fas fa-trash-alt"></i> Eliminar
                    </button>
                </div>
                <p class="review-text">"${review.text}"</p>
                <div class="review-actions">
                    <span><i class="fas fa-star"></i> ${review.rating.toFixed(1)}</span>
                    <span><i class="fas fa-thumbs-up"></i> ${Math.floor(Math.random() * 20) + 1}</span>
                    <span><i class="fas fa-comment"></i> ${Math.floor(Math.random() * 5) + 1}</span>
                </div>
            `;
            reviewGrid.appendChild(tarjetaResena);
        });
    }

    function guardarDatos() {
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        localStorage.setItem('reviews', JSON.stringify(reviews));
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }

    if (currentUser && registeredUsers[currentUser]) {
        if (registeredUsers[currentUser].type === 'alumno') {
            window.location.href = 'estudiante_dashboard.html';
        } else if (registeredUsers[currentUser].type === 'docente') {
            window.location.href = 'profesor_dashboard.html';
        }
        return;
    }

    actualizarCabeceraParaSesion();
    renderizarResenas();
    regresarEstadoInicial();

    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            regresarEstadoInicial();
        });
    }

    if (btnIrARegistroHero) {
        btnIrARegistroHero.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarSeccion(pantallaBienvenida, true);
            limpiarCamposFormulario(formRegistroAlumno);
            limpiarCamposFormulario(formRegistroProfesor);
            limpiarCamposFormulario(formInicioSesion);
            if (mostrarEdadAlumno) mostrarEdadAlumno.textContent = '';
            if (mostrarEdadProfesor) mostrarEdadProfesor.textContent = '';
        });
    }

    if (botonInicioSesionCabecera) {
        botonInicioSesionCabecera.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarSeccion(pantallaInicioSesion, true);
            limpiarCamposFormulario(formRegistroAlumno);
            limpiarCamposFormulario(formRegistroProfesor);
            limpiarCamposFormulario(formInicioSesion);
            if (mostrarEdadAlumno) mostrarEdadAlumno.textContent = '';
            if (mostrarEdadProfesor) mostrarEdadProfesor.textContent = '';
        });
    }

    if (enlaceNavComunidad) {
        enlaceNavComunidad.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarSeccion(communitySection, false);
            renderizarResenas();
            communitySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    if (enlaceNavComoFunciona) {
        enlaceNavComoFunciona.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarSeccion(howItWorksSection, false);
            howItWorksSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    if (enlaceNavAcercaNosotros) {
        enlaceNavAcercaNosotros.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarSeccion(aboutUsSection, false);
            aboutUsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    if (btnRegistrarAlumno) {
        btnRegistrarAlumno.addEventListener('click', () => {
            mostrarSeccion(formRegistroAlumno, true);
        });
    }

    if (btnRegistrarDocente) {
        btnRegistrarDocente.addEventListener('click', () => {
            mostrarSeccion(formRegistroProfesor, true);
        });
    }

    if (enlaceMostrarInicioSesionDesdeBienvenida) {
        enlaceMostrarInicioSesionDesdeBienvenida.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarSeccion(pantallaInicioSesion, true);
            limpiarCamposFormulario(formInicioSesion);
        });
    }

    if (enlaceMostrarRegistroDesdeInicioSesion) {
        enlaceMostrarRegistroDesdeInicioSesion.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarSeccion(pantallaBienvenida, true);
            limpiarCamposFormulario(formInicioSesion);
        });
    }

    if (btnVolverBienvenidaAlumno) {
        btnVolverBienvenidaAlumno.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarSeccion(pantallaBienvenida, true);
            limpiarCamposFormulario(formRegistroAlumno);
            if (mostrarEdadAlumno) mostrarEdadAlumno.textContent = '';
        });
    }

    if (btnVolverBienvenidaDocente) {
        btnVolverBienvenidaDocente.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarSeccion(pantallaBienvenida, true);
            limpiarCamposFormulario(formRegistroProfesor);
            if (mostrarEdadProfesor) mostrarEdadProfesor.textContent = '';
        });
    }

    if (btnVolverInicioSesion) {
        btnVolverInicioSesion.addEventListener('click', (e) => {
            e.preventDefault();
            regresarEstadoInicial();
            limpiarCamposFormulario(formInicioSesion);
        });
    }

    if (inputFechaNacimientoAlumno && mostrarEdadAlumno) {
        inputFechaNacimientoAlumno.addEventListener('change', () => {
            const fechaSeleccionada = inputFechaNacimientoAlumno.value;
            const edadMinimaAlumno = 14;
            const edadCalculada = calcularEdad(fechaSeleccionada, edadMinimaAlumno);
            if (edadCalculada !== null) {
                mostrarEdadAlumno.textContent = `Edad: ${edadCalculada} años. ¡Puedes registrarte!`;
                mostrarEdadAlumno.style.color = '#28a745';
            } else if (fechaSeleccionada) {
                mostrarEdadAlumno.textContent = `Debes tener al menos ${edadMinimaAlumno} años para registrarte como alumno.`;
                mostrarEdadAlumno.style.color = '#dc3545';
            } else {
                mostrarEdadAlumno.textContent = '';
            }
        });
    }

    if (inputFechaNacimientoProfesor && mostrarEdadProfesor) {
        inputFechaNacimientoProfesor.addEventListener('change', () => {
            const fechaSeleccionada = inputFechaNacimientoProfesor.value;
            const edadMinimaProfesor = 18;
            const edadCalculada = calcularEdad(fechaSeleccionada, edadMinimaProfesor);
            if (edadCalculada !== null) {
                mostrarEdadProfesor.textContent = `Edad: ${edadCalculada} años. ¡Puedes registrarte!`;
                mostrarEdadProfesor.style.color = '#28a745';
            } else if (fechaSeleccionada) {
                mostrarEdadProfesor.textContent = `Debes tener al menos ${edadMinimaProfesor} años para registrarte como profesor.`;
                mostrarEdadProfesor.style.color = '#dc3545';
            } else {
                mostrarEdadProfesor.textContent = '';
            }
        });
    }

    if (formInicioSesion) {
        formInicioSesion.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = inputEmailInicioSesion.value;
            const password = inputPasswordInicioSesion.value;

            if (registeredUsers[email] && registeredUsers[email].password === password) {
                currentUser = email;
                guardarDatos();
                actualizarCabeceraParaSesion();
                alert('¡Inicio de sesión exitoso!');
                if (registeredUsers[email].type === 'alumno') {
                    window.location.href = 'estudiante_dashboard.html';
                } else if (registeredUsers[email].type === 'docente') {
                    window.location.href = 'profesor_dashboard.html';
                }
            } else {
                alert('Email o contraseña incorrectos.');
            }
        });
    }

    if (formRegistroAlumno) {
        formRegistroAlumno.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = inputNombreAlumno.value;
            const apellidos = inputApellidosAlumno.value;
            const fechaNacimiento = inputFechaNacimientoAlumno.value;
            const sexo = selectSexoAlumno.value;
            const region = selectRegionAlumno.value;
            const email = inputEmailAlumno.value;
            const password = inputPasswordAlumno.value;
            const confirmarPassword = inputConfirmarPasswordAlumno.value;

            if (password !== confirmarPassword) {
                alert('Las contraseñas no coinciden.');
                return;
            }

            if (calcularEdad(fechaNacimiento, 14) === null) {
                alert('Debes tener al menos 14 años para registrarte como alumno.');
                return;
            }

            if (registeredUsers[email]) {
                alert('Este email ya está registrado.');
                return;
            }

            registeredUsers[email] = {
                nombre,
                apellidos,
                fechaNacimiento,
                sexo,
                region,
                password,
                type: 'alumno'
            };
            currentUser = email;
            guardarDatos();
            actualizarCabeceraParaSesion();
            alert('¡Registro de alumno exitoso!');
            window.location.href = 'estudiante_dashboard.html';
        });
    }

    if (formRegistroProfesor) {
        formRegistroProfesor.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = inputNombreProfesor.value;
            const apellidos = inputApellidosProfesor.value;
            const fechaNacimiento = inputFechaNacimientoProfesor.value;
            const sexo = selectSexoProfesor.value;
            const region = selectRegionProfesor.value;
            const email = inputEmailProfesor.value;
            const password = inputPasswordProfesor.value;
            const confirmarPassword = inputConfirmarPasswordProfesor.value;

            if (password !== confirmarPassword) {
                alert('Las contraseñas no coinciden.');
                return;
            }

            if (calcularEdad(fechaNacimiento, 18) === null) {
                alert('Debes tener al menos 18 años para registrarte como profesor.');
                return;
            }

            if (registeredUsers[email]) {
                alert('Este email ya está registrado.');
                return;
            }

            registeredUsers[email] = {
                nombre,
                apellidos,
                fechaNacimiento,
                sexo,
                region,
                password,
                type: 'docente'
            };
            currentUser = email;
            guardarDatos();
            actualizarCabeceraParaSesion();
            alert('¡Registro de profesor exitoso!');
            window.location.href = 'profesor_dashboard.html';
        });
    }

    if (botonCerrarSesion) {
        botonCerrarSesion.addEventListener('click', () => {
            currentUser = null;
            localStorage.removeItem('currentUser');
            actualizarCabeceraParaSesion();
            regresarEstadoInicial();
            alert('Has cerrado sesión.');
        });
    }

    if (btnMostrarFormularioResena) {
        btnMostrarFormularioResena.addEventListener('click', () => {
            if (currentUser) {
                if (contenedorFormularioResena) contenedorFormularioResena.classList.remove('hidden');
                if (inputEmailResena) {
                    inputEmailResena.value = currentUser;
                    inputEmailResena.readOnly = true;
                }
            } else {
                alert('Debes iniciar sesión para dejar una reseña.');
                mostrarSeccion(pantallaInicioSesion, true);
            }
        });
    }

    if (btnCancelarResena) {
        btnCancelarResena.addEventListener('click', (e) => {
            e.preventDefault();
            if (contenedorFormularioResena) contenedorFormularioResena.classList.add('hidden');
            limpiarCamposFormulario(formularioResena);
            if (inputEmailResena) inputEmailResena.readOnly = false;
        });
    }

    if (formularioResena) {
        formularioResena.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailResena = inputEmailResena.value;
            const textoResena = inputTextoResena.value;
            const calificacionResena = parseFloat(inputCalificacionResena.value);
            const tipoResena = selectTipoResena.value;

            if (!currentUser || currentUser !== emailResena) {
                alert('Error: El email de la reseña no coincide con el usuario logueado o no hay sesión iniciada.');
                return;
            }

            if (calificacionResena < 1 || calificacionResena > 5) {
                alert('La calificación debe ser entre 1 y 5.');
                return;
            }

            const nuevaResena = {
                id: `review-${reviews.length + 1}`,
                user: emailResena,
                displayUser: emailResena.split('@')[0],
                type: tipoResena,
                text: textoResena,
                rating: calificacionResena,
                date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })
            };

            reviews.unshift(nuevaResena);
            guardarDatos();
            renderizarResenas();
            alert('¡Reseña enviada con éxito!');
            if (contenedorFormularioResena) contenedorFormularioResena.classList.add('hidden');
            limpiarCamposFormulario(formularioResena);
        });
    }

    if (reviewGrid) {
        reviewGrid.addEventListener('click', (e) => {
            const deleteButton = e.target.closest('.delete-review-btn');
            if (deleteButton) {
                const reviewIdToDelete = deleteButton.dataset.reviewId;
                const reviewToDelete = reviews.find(r => r.id === reviewIdToDelete);

                if (currentUser && reviewToDelete && currentUser === reviewToDelete.user) {
                    if (confirm('¿Estás seguro de que quieres eliminar esta reseña?')) {
                        reviews = reviews.filter(r => r.id !== reviewIdToDelete);
                        guardarDatos();
                        renderizarResenas();
                        alert('Reseña eliminada.');
                    }
                } else {
                    alert('No tienes permiso para eliminar esta reseña.');
                }
            }
        });
    }
});