document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Optional: Toggle icon between bars and times (X)
            const icon = hamburger.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
    // Scroll Spy for Mead Selection Page
    const subNavLinks = document.querySelectorAll('.sticky-sub-nav a');
    const sections = document.querySelectorAll('.section-header');

    if (subNavLinks.length > 0 && sections.length > 0) {
        // 1. Click Handler
        subNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                link.blur();
                // We rely on the observer to update the state eventually, 
                // but for immediate feedback we can set it. 
                // However, to avoid fighting the observer, we'll let the observer handle it
                // or we can temporarily pause observation (complex).
                // Simple approach: Just blur and let the scroll happen. 
                // The observer will pick up the new position.
            });
        });

        // 2. Intersection Observer
        // console.log('Initializing Scroll Spy. Sections found:', sections.length);
        
        const observerOptions = {
            root: null,
            rootMargin: '-15% 0px -50% 0px', 
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
        };

        // Store ratios for all sections
        const ratios = {};

        const observer = new IntersectionObserver((entries) => {
            // Update ratios
            entries.forEach(entry => {
                ratios[entry.target.id] = entry.intersectionRatio;
                // console.log(`Entry update: ${entry.target.id}, ratio: ${entry.intersectionRatio}, isIntersecting: ${entry.isIntersecting}`);
            });

            // Find the section with the highest ratio
            let bestId = null;
            let maxRatio = 0;

            for (const id in ratios) {
                if (ratios[id] > maxRatio) {
                    maxRatio = ratios[id];
                    bestId = id;
                }
            }
            
            // console.log('Current Ratios:', ratios);
            // console.log('Best Section:', bestId, 'Max Ratio:', maxRatio);

            // Only update if we have a clear winner (avoid flickering at 0)
            if (bestId && maxRatio > 0) {
                // Clear all active classes
                subNavLinks.forEach(link => link.classList.remove('active'));

                // Set active class
                const activeLink = document.querySelector(`.sticky-sub-nav a[href="#${bestId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                    // console.log('Setting active link:', bestId);
                }
            } else {
                // console.log('No clear winner, keeping current state or clearing if needed.');
            }
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }
});
