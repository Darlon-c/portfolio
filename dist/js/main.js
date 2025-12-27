const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        cards.forEach(c => c.classList.remove("expanded"));
        card.classList.add("expanded");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("expanded");
    });
});


// MOBILE MENU TOGGLE

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


// TABS LOGIC

const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Função para ativar uma tab específica
function activateTab(nameBtn) {
    // Atualizar botões
    tabBtns.forEach(b => {
        if (b.dataset.tab === nameBtn) {
            b.classList.add('bg-gray-100');
        } else {
            b.classList.remove('bg-gray-100');
        }
    });
    
    // Atualizar conteúdos
    tabContents.forEach(c => {
        if (c.dataset.content === nameBtn) {
            c.classList.remove('hidden');
        } else {
            c.classList.add('hidden');
        }
    });
}

// Inicializar tabs (mostrar a primeira)
if (tabBtns.length) {
    const first = tabBtns[0].dataset.tab;
    activateTab(first);
    
    // Adicionar event listeners para cada botão
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            activateTab(btn.dataset.tab);
        });
    });
}

// SMOOTH SCROLL PARA LINKS DO HEADER

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Verificar se o link é válido
        if (!href || href === '#') return;
        
        e.preventDefault();
        
        const el = document.querySelector(href);
        if (!el) return;
        
        // Calcular posição de scroll com offset para o header
        const scrollPosition = el.getBoundingClientRect().top + window.pageYOffset - 80;
        
        // Aplicar scroll suave
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    });
});