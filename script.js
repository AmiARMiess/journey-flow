document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Journey Simulator Logic
    const steps = [
        { num: "01", title: "Discovery", desc: "The initial phase where potential customers become aware of a product or service through marketing, word-of-mouth, or online search.", metric: "Impressions & Reach" },
        { num: "02", title: "Evaluation", desc: "Customers compare features, pricing, reviews, and alternatives to determine which solution best fits their needs.", metric: "Engagement Rate" },
        { num: "03", title: "Purchase", desc: "The decision-making moment when the customer completes the transaction, either online or in-store.", metric: "Conversion Rate" },
        { num: "04", title: "Onboarding", desc: "The process of guiding new customers through setup, activation, and first-use experience to ensure immediate value.", metric: "Activation Rate" },
        { num: "05", title: "Loyalty", desc: "Ongoing engagement strategies including rewards, personalized communication, and superior service to retain customers.", metric: "Retention Rate" },
        { num: "06", title: "Advocacy", desc: "Satisfied customers actively promote the brand to others, becoming a powerful source of organic growth.", metric: "NPS & Referrals" }
    ];

    let currentStepIndex = 0;
    const segments = document.querySelectorAll('.wheel-segment');
    const stepNumEl = document.getElementById('step-num');
    const stepTitleEl = document.getElementById('step-title');
    const stepDescEl = document.getElementById('step-desc');
    const stepMetricEl = document.getElementById('step-metric');
    const nextBtn = document.getElementById('next-step-btn');

    function updateSimulator(index) {
        segments.forEach(seg => seg.classList.remove('active'));
        segments[index].classList.add('active');
        const contentPanel = document.querySelector('.content-panel');
        contentPanel.style.opacity = '0';
        setTimeout(() => {
            const step = steps[index];
            stepNumEl.textContent = step.num;
            stepTitleEl.textContent = step.title;
            stepDescEl.textContent = step.desc;
            stepMetricEl.textContent = step.metric;
            contentPanel.style.opacity = '1';
        }, 200);
    }

    segments.forEach((seg, index) => {
        seg.addEventListener('click', () => {
            currentStepIndex = index;
            updateSimulator(currentStepIndex);
        });
    });

    nextBtn.addEventListener('click', () => {
        currentStepIndex = (currentStepIndex + 1) % steps.length;
        updateSimulator(currentStepIndex);
    });

    updateSimulator(0);

    // 2. Pricing Toggle Logic
    const pricingCheckbox = document.getElementById('pricing-checkbox');
    const amounts = document.querySelectorAll('.amount');
    const monthlyLabel = document.getElementById('monthly-label');
    const yearlyLabel = document.getElementById('yearly-label');

    if(pricingCheckbox) {
        pricingCheckbox.addEventListener('change', function() {
            const isYearly = this.checked;
            if(isYearly) {
                yearlyLabel.classList.add('active');
                monthlyLabel.classList.remove('active');
            } else {
                monthlyLabel.classList.add('active');
                yearlyLabel.classList.remove('active');
            }
            amounts.forEach(amount => {
                const targetPrice = isYearly ? amount.dataset.yearly : amount.dataset.monthly;
                animateValue(amount, parseInt(amount.innerText), parseInt(targetPrice), 500);
            });
        });
    }

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
    }

    // 3. Scroll Animation Observer
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

    // 4. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if(targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 5. Form Submission (Demo)
    const form = document.querySelector('.cta-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Sending...';
            setTimeout(() => {
                btn.innerText = 'Success!';
                btn.style.background = '#10b981';
                form.reset();
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = '';
                }, 3000);
            }, 1500);
        });
    }
});