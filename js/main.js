/* =============================================
   NUMEN Medical Clinic — Main JS
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* -------- Nav scroll state -------- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* -------- Scroll reveal -------- */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  }

  /* -------- Formulario de sorteo -------- */
  const raffleForm  = document.querySelector('#raffle-form');
  const formWrapper = document.querySelector('.raffle__form-wrapper');
  const successMsg  = document.querySelector('.raffle__success');

  if (raffleForm) {
    raffleForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let valid = true;

      // Validar campos requeridos
      const fields = raffleForm.querySelectorAll('[required]');
      fields.forEach(field => {
        const errorMsg = field.parentElement.querySelector('.form-error-msg');
        field.classList.remove('is-error');
        if (errorMsg) errorMsg.classList.remove('is-visible');

        if (!field.value.trim()) {
          field.classList.add('is-error');
          if (errorMsg) errorMsg.classList.add('is-visible');
          valid = false;
        }

        // Validar email
        if (field.type === 'email' && field.value.trim()) {
          const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRe.test(field.value.trim())) {
            field.classList.add('is-error');
            if (errorMsg) {
              errorMsg.textContent = 'Introduce un email válido';
              errorMsg.classList.add('is-visible');
            }
            valid = false;
          }
        }
      });

      if (!valid) return;

      // Simular envío (aquí conectar al backend o servicio de email)
      const submitBtn = raffleForm.querySelector('[type="submit"]');
      submitBtn.textContent = 'Enviando…';
      submitBtn.disabled = true;

      setTimeout(() => {
        // Ocultar formulario, mostrar éxito
        formWrapper.style.display = 'none';
        successMsg.classList.add('is-visible');
      }, 900);
    });
  }

});
