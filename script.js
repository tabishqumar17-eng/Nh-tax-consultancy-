 // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Simple form handling (no backend) — replace with API calls as needed
    const quoteForm = document.getElementById('quoteForm');
    const quoteMsg = document.getElementById('quoteMsg');

    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();
      const service = document.getElementById('serviceSelect').value;

      if (!name || !phone || !email) {
        quoteMsg.textContent = 'Please fill name, phone and email.';
        return;
      }

      // naive phone validation
      if (!/^\+?[0-9 \-]{7,20}$/.test(phone)) {
        quoteMsg.textContent = 'Please enter a valid phone or WhatsApp number.';
        return;
      }

      quoteMsg.textContent = 'Thanks — your request has been noted. We will call you within one business day.';
      quoteForm.reset();

      // TODO: send data to backend API using fetch()
      // fetch('/api/lead', { method: 'POST', body: JSON.stringify({name,phone,email,service}) })
    });

    // Contact form
    const contactForm = document.getElementById('contactForm');
    const contactMsg = document.getElementById('contactMsg');
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const cname = document.getElementById('cname').value.trim();
      const cemail = document.getElementById('cemail').value.trim();
      const cmsg = document.getElementById('cmsg').value.trim();
      if (!cname || !cemail || !cmsg) {
        contactMsg.textContent = 'Please complete all fields.';
        return;
      }
      contactMsg.textContent = 'Message sent. We will reply within one business day.';
      contactForm.reset();
      // TODO: send to backend
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', function (e) {
        const href = a.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      })
    })