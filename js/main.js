const faqButtons = document.querySelectorAll('.lihbtn');

faqButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const listItem = button.closest('.faq-item');
        const answerId = button.getAttribute('aria-controls');
        const answer = answerId ? document.getElementById(answerId) : null;
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        button.setAttribute('aria-expanded', String(!isExpanded));
        if (listItem) {
            listItem.classList.toggle('is-open', !isExpanded);
        }

        if (answer) {
            answer.hidden = isExpanded;
        }
    });
});

const emailForm = document.getElementById('email-signup-form');
const emailInput = document.getElementById('email');
const emailFeedback = document.getElementById('email-feedback');

if (emailForm && emailInput && emailFeedback) {
    emailForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailValue = emailInput.value.trim();

        if (!emailValue || !emailInput.checkValidity()) {
            emailFeedback.textContent = 'Please enter a valid email address.';
            emailFeedback.classList.add('is-error');
            emailFeedback.classList.remove('is-success');
            emailInput.setAttribute('aria-invalid', 'true');
            emailInput.focus();
            return;
        }

        emailFeedback.textContent = `Thanks! We'll use ${emailValue} to help set up your membership.`;
        emailFeedback.classList.remove('is-error');
        emailFeedback.classList.add('is-success');
        emailInput.removeAttribute('aria-invalid');
    });

    emailInput.addEventListener('input', () => {
        if (emailInput.getAttribute('aria-invalid') === 'true') {
            emailInput.removeAttribute('aria-invalid');
        }

        if (emailFeedback.classList.contains('is-error')) {
            emailFeedback.textContent = '';
            emailFeedback.classList.remove('is-error');
        }
    });
}
