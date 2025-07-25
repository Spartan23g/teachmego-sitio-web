document.addEventListener('DOMContentLoaded', () => {
    var pBIEN = document.getElementById('pantalla-bienvenida');
    var fRALU = document.getElementById('formulario-registro-alumno');
    var fRDOC = document.getElementById('formulario-registro-docente');
    var pISES = document.getElementById('pantalla-inicio-sesion');

    var sHERO = document.querySelector('.initial-hero-section');
    var sCOMU = document.getElementById('community-section');
    var cISES = document.querySelector('.login-container');
    var sCUNO = document.getElementById('how-it-works-section');
    var sACOS = document.getElementById('about-us-section');

    var bRALU = document.getElementById('btn-registrar-alumno');
    var bRDOC = document.getElementById('btn-registrar-docente');
    var bVBNA = document.getElementById('btn-volver-bienvenida-alumno');
    var bVBND = document.getElementById('btn-volver-bienvenida-docente');

    var bISCA = document.getElementById('boton-inicio-sesion-cabecera');
    var eMBI = document.getElementById('enlace-mostrar-inicio-sesion-desde-bienvenida');
    var eMRI = document.getElementById('enlace-mostrar-registro-desde-inicio-sesion');
    var bVBIS = document.getElementById('btn-volver-bienvenida-inicio-sesion');

    var eNAC = document.getElementById('enlace-nav-comunidad');
    var eNCF = document.getElementById('enlace-nav-como-funciona');
    var eNAO = document.getElementById('enlace-nav-acerca-nosotros');

    var mEUS = document.getElementById('mostrar-email-usuario');
    var bCES = document.getElementById('boton-cerrar-sesion');

    var iNombresAlumno = document.getElementById('input-nombres-alumno');
    var iApellidosAlumno = document.getElementById('input-apellidos-alumno');
    var iFNA = document.getElementById('input-fecha-nacimiento-alumno');
    var mEAL = document.getElementById('mostrar-edad-alumno');
    var sSexoAlumno = document.getElementById('select-sexo-alumno');
    var sRegionAlumno = document.getElementById('select-region-alumno');
    var iEmailAlumno = document.getElementById('input-email-alumno');
    var iPasswordAlumno = document.getElementById('input-password-alumno');
    var iConfirmPasswordAlumno = document.getElementById('input-confirmar-password-alumno');
    var fRAL = document.getElementById('form-registro-alumno');

    var iNombresDocente = document.getElementById('input-nombres-docente');
    var iApellidosDocente = document.getElementById('input-apellidos-docente');
    var iFND = document.getElementById('input-fecha-nacimiento-docente');
    var mEDO = document.getElementById('mostrar-edad-docente');
    var sSexoDocente = document.getElementById('select-sexo-docente');
    var sRegionDocente = document.getElementById('select-region-docente');
    var iEmailDocente = document.getElementById('input-email-docente');
    var iPasswordDocente = document.getElementById('input-password-docente');
    var iConfirmPasswordDocente = document.getElementById('input-confirmar-password-docente');
    var fRDO = document.getElementById('form-registro-docente');

    var iEmailISES = document.getElementById('input-email-inicio-sesion');
    var iPasswordISES = document.getElementById('input-password-inicio-sesion');
    var fISES = document.getElementById('form-inicio-sesion');

    var bIRH = document.getElementById('btn-ir-a-registro-hero');

    var cRES = document.querySelector('.review-grid');
    var bMFR = document.getElementById('btn-mostrar-formulario-resena');
    var cFOR = document.getElementById('contenedor-formulario-resena');
    var fRES = document.getElementById('formulario-resena');
    var bCAR = document.getElementById('btn-cancelar-resena');
    var iEmailRes = document.getElementById('input-email-resena');
    var iTextoRes = document.getElementById('input-texto-resena');
    var iCalificacionRes = document.getElementById('input-calificacion-resena');
    var sTipoRes = document.getElementById('select-tipo-resena');

    var uACT = null;
    var uREG = JSON.parse(localStorage.getItem('registeredUsers')) || {};
    var RESS = JSON.parse(localStorage.getItem('reviews')) || [
        { id: 'review-1', user: 'juanperez23@example.com', displayUser: 'JuanPérez23', type: 'positive', text: "¡Increíble plataforma! Encontré al profesor perfecto para mis clases de matemáticas en solo un día. La interfaz es muy intuitiva y fácil de usar.", rating: 5, date: '15 de Julio, 2025' },
        { id: 'review-2', user: 'anagarcia_profe@example.com', displayUser: 'AnaGarcía_Profe', type: 'neutral', text: "Me gustaría que se añadiera una opción para videollamadas integradas directamente en la plataforma. Por lo demás, la búsqueda de alumnos es fantástica.", rating: 4.5, date: '10 de Julio, 2025' },
        { id: 'review-3', user: 'carlos_estudiante@example.com', displayUser: 'Carlos_Estudiante', type: 'positive', text: "La función de filtro es muy buena. Pude encontrar profesores cerca de mi zona en Lima, Perú, y con disponibilidad en mi horario. ¡Excelente!", rating: 4.8, date: '08 de Julio, 2025' }
    ];

    function ocultarTodasLasPantallas() {
        if (sHERO) {
            sHERO.style.display = 'none';
            sHERO.style.opacity = '0';
            sHERO.style.pointerEvents = 'none';
        }
        if (cISES) {
            cISES.style.display = 'none';
            cISES.style.opacity = '0';
            cISES.style.pointerEvents = 'none';
            cISES.classList.remove('fadeIn');
        }
        if (sCOMU) {
            sCOMU.style.display = 'none';
            sCOMU.style.opacity = '0';
            sCOMU.style.pointerEvents = 'none';
        }
        if (sCUNO) {
            sCUNO.style.display = 'none';
            sCUNO.style.opacity = '0';
            sCUNO.style.pointerEvents = 'none';
        }
        if (sACOS) {
            sACOS.style.display = 'none';
            sACOS.style.opacity = '0';
            sACOS.style.pointerEvents = 'none';
        }
        if (pBIEN) pBIEN.classList.remove('active');
        if (fRALU) fRALU.classList.remove('active');
        if (fRDOC) fRDOC.classList.remove('active');
        if (pISES) pISES.classList.remove('active');
    }

    function mostrarPantalla(pMOS, esContenedorISES = false) {
        ocultarTodasLasPantallas();

        if (pMOS) {
            if (esContenedorISES) {
                if (cISES) {
                    cISES.style.display = 'block';
                    cISES.classList.remove('fadeIn');
                    void cISES.offsetWidth;
                    cISES.classList.add('fadeIn');
                    cISES.style.opacity = '1';
                    cISES.style.pointerEvents = 'auto';
                }
                pMOS.classList.add('active');
            } else {
                pMOS.style.display = (pMOS === sHERO || pMOS === sCUNO || pMOS === sACOS) ? 'flex' : 'block';
                pMOS.style.opacity = '1';
                pMOS.style.pointerEvents = 'auto';
            }
        }
    }

    function regresarEstadoInicial() {
        mostrarPantalla(sHERO);
    }

    function limpiarCamposFormulario(FOR) {
        if (FOR) FOR.reset();
    }

    function calcularEdad(FECNACSTR, EDADMIN) {
        if (!FECNACSTR) {
            return null;
        }
        var FECNAC = new Date(FECNACSTR + 'T00:00:00');
        var HOY = new Date();
        var EDA = HOY.getFullYear() - FECNAC.getFullYear();
        var MESD = HOY.getMonth() - FECNAC.getMonth();
        var DIAD = HOY.getDate() - FECNAC.getDate();

        if (MESD < 0 || (MESD === 0 && DIAD < 0)) {
            EDA--;
        }
        if (isNaN(FECNAC.getTime())) {
            return null;
        }
        return EDA >= EDADMIN ? EDA : null;
    }

    function actualizarCabeceraParaSesion() {
        if (uACT) {
            if (bISCA) bISCA.classList.add('hidden');
            if (mEUS) {
                var NOMUSUMOST = uACT.split('@')[0];
                mEUS.textContent = `Hola, ${NOMUSUMOST}`;
                mEUS.classList.remove('hidden');
            }
            if (bCES) bCES.classList.remove('hidden');
            if (bIRH) bIRH.classList.add('hidden');
        } else {
            if (bISCA) bISCA.classList.remove('hidden');
            if (mEUS) mEUS.classList.add('hidden');
            if (bCES) bCES.classList.add('hidden');
            if (bIRH) bIRH.classList.remove('hidden');
        }
    }

    function renderizarResenas() {
        if (!cRES) return;

        cRES.innerHTML = '';

        RESS.forEach(RES => {
            var TRES = document.createElement('div');
            
            TRES.classList.add('review-card');
            TRES.setAttribute('data-review-id', RES.id);

            var CINSIG = RES.type === 'positive' ? 'positive' : RES.type === 'neutral' ? 'neutral' : 'negative';
            var TINSIG = RES.type === 'positive' ? 'Excelente' : RES.type === 'neutral' ? 'Sugerencia' : 'Problema';

            var NOMUSUMOST = RES.displayUser || RES.user.split('@')[0];

            var MOSTRBTNELIM = uACT && uACT === RES.user ? '' : 'hidden';

            TRES.innerHTML = `
                <div class="review-header">
                    <span class="user-avatar"><i class="fas fa-user-circle"></i></span>
                    <div class="user-info">
                        <h4>${NOMUSUMOST} <span class="badge ${CINSIG}">${TINSIG}</span></h4>
                        <span class="review-date">${RES.date}</span>
                    </div>
                    <button class="delete-review-btn ${MOSTRBTNELIM}" data-review-id="${RES.id}">
                        <i class="fas fa-trash-alt"></i> Eliminar
                    </button>
                </div>
                <p class="review-text">"${RES.text}"</p>
                <div class="review-actions">
                    <span><i class="fas fa-star"></i> ${RES.rating.toFixed(1)}</span>
                    <span><i class="fas fa-thumbs-up"></i> ${Math.floor(Math.random() * 20) + 1}</span>
                    <span><i class="fas fa-comment"></i> ${Math.floor(Math.random() * 5) + 1}</span>
                </div>
            `;
            cRES.appendChild(TRES);
        });
    }

    function guardarDatos() {
        localStorage.setItem('registeredUsers', JSON.stringify(uREG));
        localStorage.setItem('reviews', JSON.stringify(RESS));
        localStorage.setItem('currentUser', JSON.stringify(uACT));
    }

    if (bIRH) {
        bIRH.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(pBIEN, true);
            limpiarCamposFormulario(fRALU);
            limpiarCamposFormulario(fRDOC);
            limpiarCamposFormulario(fISES);
            if (mEAL) mEAL.textContent = '';
            if (mEDO) mEDO.textContent = '';
        });
    }

    if (bISCA) {
        bISCA.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(pISES, true);
            limpiarCamposFormulario(fRALU);
            limpiarCamposFormulario(fRDOC);
            limpiarCamposFormulario(fISES);
            if (mEAL) mEAL.textContent = '';
            if (mEDO) mEDO.textContent = '';
        });
    }

    if (eNAC) {
        eNAC.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(sCOMU, false);
            renderizarResenas();
            window.scrollTo({
                top: sCOMU.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    }

    if (eNCF) {
        eNCF.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(sCUNO, false);
            window.scrollTo({
                top: sCUNO.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    }

    if (eNAO) {
        eNAO.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(sACOS, false);
            window.scrollTo({
                top: sACOS.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    }

    if (eMBI) {
        eMBI.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(pISES, true);
            limpiarCamposFormulario(fISES);
        });
    }

    if (eMRI) {
        eMRI.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(pBIEN, true);
            limpiarCamposFormulario(fISES);
        });
    }

    if (bVBIS) {
        bVBIS.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(pBIEN, true);
            limpiarCamposFormulario(fISES);
        });
    }

    if (iFNA && mEAL) {
        iFNA.addEventListener('change', () => {
            var FECHA_SEL = iFNA.value;
            var EDAD_MINIMA_ALU = 14;
            var EDA = calcularEdad(FECHA_SEL, EDAD_MINIMA_ALU);

            if (EDA !== null) {
                mEAL.textContent = `Edad: ${EDA} años. ¡Puedes registrarte!`;
                mEAL.style.color = '#28a745';
            } else if (FECHA_SEL) {
                mEAL.textContent = `Debes tener al menos ${EDAD_MINIMA_ALU} años para registrarte como alumno.`;
                mEAL.style.color = '#dc3545';
            } else {
                mEAL.textContent = '';
            }
        });
    }

    if (iFND && mEDO) {
        iFND.addEventListener('change', () => {
            var FECHA_SEL = iFND.value;
            var EDAD_MINIMA_DOC = 18;
            var EDA = calcularEdad(FECHA_SEL, EDAD_MINIMA_DOC);

            if (EDA !== null) {
                mEDO.textContent = `Edad: ${EDA} años.`;
                mEDO.style.color = '#28a745';
            } else if (FECHA_SEL) {
                mEDO.textContent = `Debes tener al menos ${EDAD_MINIMA_DOC} años para registrarte como docente.`;
                mEDO.style.color = '#dc3545';
            } else {
                mEDO.textContent = '';
            }
        });
    }

    if (bRALU) {
        bRALU.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(fRALU, true);
            limpiarCamposFormulario(fRALU);
            if (mEAL) mEAL.textContent = '';
        });
    }

    if (bRDOC) {
        bRDOC.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(fRDOC, true);
            limpiarCamposFormulario(fRDOC);
            if (mEDO) mEDO.textContent = '';
        });
    }

    if (bVBNA) {
        bVBNA.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(pBIEN, true);
            limpiarCamposFormulario(fRALU);
        });
    }
    if (bVBND) {
        bVBND.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(pBIEN, true);
            limpiarCamposFormulario(fRDOC);
        });
    }
    if (bVBIS) {
        bVBIS.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarPantalla(pBIEN, true);
            limpiarCamposFormulario(fISES);
        });
    }

    if (fRALU) {
        fRALU.addEventListener('submit', (e) => {
            e.preventDefault();

            var EDAD_MINIMA_ALU = 14;
            var EDA = calcularEdad(iFNA.value, EDAD_MINIMA_ALU);

            if (!iNombresAlumno.value.trim() || !iApellidosAlumno.value.trim() || !iFNA.value ||
                !sSexoAlumno.value || !sRegionAlumno.value || !iEmailAlumno.value.trim() ||
                !iPasswordAlumno.value || !iConfirmPasswordAlumno.value) {
                alert('Por favor, completa todos los campos requeridos del alumno.');
                return;
            }
            if (iPasswordAlumno.value !== iConfirmPasswordAlumno.value) {
                alert('Las contraseñas no coinciden.');
                return;
            }
            if (iPasswordAlumno.value.length < 6) {
                alert('La contraseña debe tener al menos 6 caracteres.');
                return;
            }
            if (!/\S+@\S+\.\S+/.test(iEmailAlumno.value)) {
                alert('Por favor, ingresa un correo electrónico válido.');
                return;
            }
            if (EDA === null) {
                alert(`Debes tener al menos ${EDAD_MINIMA_ALU} años para registrarte como alumno y tu fecha de nacimiento debe ser válida.`);
                return;
            }
            if (uREG[iEmailAlumno.value.trim()]) {
                alert('Este correo electrónico ya está registrado. Por favor, inicia sesión o usa otro correo.');
                return;
            }

            uREG[iEmailAlumno.value.trim()] = {
                password: iPasswordAlumno.value,
                type: 'alumno',
                nombres: iNombresAlumno.value.trim(),
                apellidos: iApellidosAlumno.value.trim(),
                fechaNacimiento: iFNA.value,
                sexo: sSexoAlumno.value,
                region: sRegionAlumno.value
            };
            guardarDatos();

            alert('¡Registro de Alumno exitoso! Ahora puedes iniciar sesión.');
            mostrarPantalla(pISES, true);
            limpiarCamposFormulario(fRALU);
            limpiarCamposFormulario(fISES);
        });
    }

    if (fRDO) {
        fRDO.addEventListener('submit', (e) => {
            e.preventDefault();

            var EDAD_MINIMA_DOC = 18;
            var EDA = calcularEdad(iFND.value, EDAD_MINIMA_DOC);

            if (!iNombresDocente.value.trim() || !iApellidosDocente.value.trim() || !iFND.value ||
                !sSexoDocente.value || !sRegionDocente.value || !iEmailDocente.value.trim() ||
                !iPasswordDocente.value || !iConfirmPasswordDocente.value) {
                alert('Por favor, completa todos los campos requeridos del docente.');
                return;
            }
            if (iPasswordDocente.value !== iConfirmPasswordDocente.value) {
                alert('Las contraseñas no coinciden.');
                return;
            }
            if (iPasswordDocente.value.length < 6) {
                alert('La contraseña debe tener al menos 6 caracteres.');
                return;
            }
            if (!/\S+@\S+\.\S+/.test(iEmailDocente.value)) {
                alert('Por favor, ingresa un correo electrónico válido.');
                return;
            }
            if (EDA === null) {
                alert(`Debes tener al menos ${EDAD_MINIMA_DOC} años para registrarte como docente y tu fecha de nacimiento debe ser válida.`);
                return;
            }
            if (uREG[iEmailDocente.value.trim()]) {
                alert('Este correo electrónico ya está registrado. Por favor, inicia sesión o usa otro correo.');
                return;
            }

            uREG[iEmailDocente.value.trim()] = {
                password: iPasswordDocente.value,
                type: 'docente',
                nombres: iNombresDocente.value.trim(),
                apellidos: iApellidosDocente.value.trim(),
                fechaNacimiento: iFND.value,
                sexo: sSexoDocente.value,
                region: sRegionDocente.value
            };
            guardarDatos();

            alert('¡Registro de Docente exitoso! Ahora puedes iniciar sesión.');
            mostrarPantalla(pISES, true);
            limpiarCamposFormulario(fRDO);
            limpiarCamposFormulario(fISES);
        });
    }

    if (fISES) {
        fISES.addEventListener('submit', (e) => {
            e.preventDefault();

            var EMAIL = iEmailISES.value.trim();
            var PASS = iPasswordISES.value;

            if (!EMAIL || !PASS) {
                alert('Por favor, ingresa tu correo y contraseña.');
                return;
            }
            if (!/\S+@\S+\.\S+/.test(EMAIL)) {
                alert('Por favor, ingresa un correo electrónico válido.');
                return;
            }

            var USU = uREG[EMAIL];

            if (USU && USU.password === PASS) {
                uACT = EMAIL;
                guardarDatos();
                alert(`¡Bienvenido de nuevo, ${EMAIL.split('@')[0]}!`);
                regresarEstadoInicial();
                limpiarCamposFormulario(fISES);
                actualizarCabeceraParaSesion();
                renderizarResenas();
            } else {
                alert('Correo o contraseña incorrectos. Por favor, verifica tus credenciales.');
            }
        });
    }

    if (bCES) {
        bCES.addEventListener('click', (e) => {
            e.preventDefault();
            uACT = null;
            guardarDatos();
            alert('Has cerrado sesión.');
            actualizarCabeceraParaSesion();
            renderizarResenas();
            regresarEstadoInicial();
        });
    }

    if (bMFR) {
        bMFR.addEventListener('click', () => {
            if (uACT) {
                iEmailRes.value = uACT;
                iEmailRes.readOnly = true;
                cFOR.classList.remove('hidden');
                bMFR.classList.add('hidden');
            } else {
                alert('Debes iniciar sesión para dejar un comentario.');
                mostrarPantalla(pISES, true);
            }
        });
    }

    if (bCAR) {
        bCAR.addEventListener('click', () => {
            cFOR.classList.add('hidden');
            bMFR.classList.remove('hidden');
            limpiarCamposFormulario(fRES);
            iEmailRes.readOnly = false;
        });
    }

    if (fRES) {
        fRES.addEventListener('submit', (e) => {
            e.preventDefault();

            var EMAIL = iEmailRes.value.trim();
            var TEXT = iTextoRes.value.trim();
            var CALIF = parseFloat(iCalificacionRes.value);
            var TIPO = sTipoRes.value;

            if (!EMAIL || !TEXT || !CALIF || !TIPO) {
                alert('Por favor, completa todos los campos del comentario.');
                return;
            }
            if (CALIF < 1 || CALIF > 5) {
                alert('La calificación debe estar entre 1 y 5.');
                return;
            }
            if (!uACT || uACT !== EMAIL) {
                alert('El correo del comentario debe coincidir con tu sesión actual.');
                return;
            }
            if (TEXT.length < 10) {
                alert('Tu comentario debe tener al menos 10 caracteres.');
                return;
            }

            var NRES = {
                id: `review-${Date.now()}`,
                user: EMAIL,
                displayUser: EMAIL.split('@')[0],
                type: TIPO,
                text: TEXT,
                rating: CALIF,
                date: new Date().toLocaleDateString('es-PE', { day: 'numeric', month: 'long', year: 'numeric' })
            };

            RESS.unshift(NRES);
            guardarDatos();
            renderizarResenas();

            alert('¡Tu comentario ha sido enviado con éxito!');
            cFOR.classList.add('hidden');
            bMFR.classList.remove('hidden');
            limpiarCamposFormulario(fRES);
            iEmailRes.readOnly = false;
        });
    }

    if (cRES) {
        cRES.addEventListener('click', (e) => {
            var BTNELIM = e.target.closest('.delete-review-btn');
            if (BTNELIM) {
                var IDRESELIM = BTNELIM.dataset.reviewId;
                if (confirm('¿Estás seguro de que quieres eliminar esta reseña?')) {
                    RESS = RESS.filter(RES => RES.id !== IDRESELIM);
                    guardarDatos();
                    renderizarResenas();
                    alert('Reseña eliminada con éxito.');
                }
            }
        });
    }

    uACT = JSON.parse(localStorage.getItem('currentUser'));
    actualizarCabeceraParaSesion();
    renderizarResenas();
    regresarEstadoInicial();
});