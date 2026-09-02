/**
 * Emil Kowalski UI & Animation Design System Implementation
 * Lazarus Ebi (0xlazorr) — Cybersecurity Engineer & Security Researcher
 */

// --- Project Data ---
const projectsData = [
    {
        id: "mem-allocator",
        title: "Hardened Memory Allocator & Exploit Defense",
        category: "binary-exploit",
        badge: "C / Low-Level Security",
        summary: "A secure dynamic allocator featuring guard canaries, double-free validation, and safe unlinking to eliminate heap corruption vulnerabilities.",
        fullDescription: `
            <p class="mb-3 text-zinc-300 text-sm leading-relaxed">A ground-up implementation of a secure dynamic memory allocator (<code>malloc</code>, <code>calloc</code>, <code>realloc</code>, <code>free</code>) engineered to mitigate heap corruption primitives including Use-After-Free, Double-Free, and Chunk Metadata Overwrites.</p>
            <h4 class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mt-4 mb-2">Key Defenses:</h4>
            <ul class="list-disc list-inside space-y-1.5 text-xs text-zinc-400">
                <li><strong class="text-zinc-200">Guard Canaries:</strong> Randomized 64-bit chunk tokens to detect linear heap buffer overflows immediately.</li>
                <li><strong class="text-zinc-200">Double-Free Verification:</strong> Fast-lookup bitmap tracking allocated blocks to defeat fastbin dup attacks.</li>
                <li><strong class="text-zinc-200">Pointer Mangling:</strong> XOR-encrypted forward/backward pointers preventing arbitrary write primitives.</li>
                <li><strong class="text-zinc-200">Deterministic Zeroing:</strong> Automatic scrubbing of payload memory upon deallocation to destroy residual secrets.</li>
            </ul>
        `,
        mitreTags: ["CWE-122: Heap Overflow", "CWE-415: Double Free", "CWE-416: UAF"],
        tags: ["C", "Heap Security", "Memory Safety", "POSIX", "Defensive Systems"],
        github: "https://github.com/0xlazorr",
        difficulty: "Advanced"
    },
    {
        id: "packet-ids",
        title: "Zero-Copy Network IDS & Traffic Sniffer",
        category: "network-cloud",
        badge: "Rust / Network Security",
        summary: "High-throughput asynchronous packet sniffer built with Rust and Tokio. Performs real-time anomaly detection for SYN flood attacks and ARP spoofing.",
        fullDescription: `
            <p class="mb-3 text-zinc-300 text-sm leading-relaxed">Asynchronous packet capture and deep packet inspection (DPI) framework capable of processing Gigabit network streams with zero memory allocations during packet hot paths.</p>
            <h4 class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mt-4 mb-2">Capabilities:</h4>
            <ul class="list-disc list-inside space-y-1.5 text-xs text-zinc-400">
                <li><strong class="text-zinc-200">Zero-Copy Parsing:</strong> Parses Ethernet, IPv4/IPv6, TCP, UDP, and ICMP headers directly from ring buffers.</li>
                <li><strong class="text-zinc-200">Stateful Flow Tracking:</strong> Tracks TCP handshakes and detects anomalous half-open states (SYN floods).</li>
                <li><strong class="text-zinc-200">ARP Poisoning Detection:</strong> Monitors MAC-to-IP binding discrepancies and alerts on unsolicited ARP replies.</li>
            </ul>
        `,
        mitreTags: ["T1046: Network Discovery", "T1040: Network Sniffing", "T1498: DoS"],
        tags: ["Rust", "Tokio", "PCAP", "Network Defense", "Threat Detection"],
        github: "https://github.com/0xlazorr",
        difficulty: "Advanced"
    },
    {
        id: "ebpf-rootkit-detector",
        title: "eBPF Linux Kernel Rootkit Monitor",
        category: "reverse-engineering",
        badge: "C / eBPF / Kernel Security",
        summary: "Kernel-space telemetry tool using eBPF probes to trace hooked syscall tables, hidden processes, privilege escalations, and stealth module loads.",
        fullDescription: `
            <p class="mb-3 text-zinc-300 text-sm leading-relaxed">Modern endpoint detection agent leveraging eBPF to inspect Linux kernel behaviors with near-zero performance overhead and zero system crashes.</p>
            <h4 class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mt-4 mb-2">Capabilities:</h4>
            <ul class="list-disc list-inside space-y-1.5 text-xs text-zinc-400">
                <li><strong class="text-zinc-200">Syscall Interception:</strong> Hooks <code>sys_execve</code>, <code>sys_ptrace</code>, and <code>sys_mprotect</code> to catch code injection.</li>
                <li><strong class="text-zinc-200">Process Cloak Detection:</strong> Cross-references <code>/proc</code> iteration with raw kernel task structures to reveal hidden rootkits.</li>
                <li><strong class="text-zinc-200">Credential Integrity:</strong> Traces dynamic modifications to <code>struct cred</code> preventing unauthorized UID 0 switches.</li>
            </ul>
        `,
        mitreTags: ["T1014: Rootkit", "T1055: Process Injection", "T1068: Priv Escalation"],
        tags: ["C", "eBPF", "Linux Kernel", "EDR", "Rootkit Analysis"],
        github: "https://github.com/0xlazorr",
        difficulty: "Expert"
    },
    {
        id: "rop-generator",
        title: "Automated ROP Chain & Exploit Payload Generator",
        category: "binary-exploit",
        badge: "Python / Assembly / Exploits",
        summary: "Binary analysis framework parsing ELF binaries, extracting valid gadgets, calculating ASLR base offsets, and synthesizing multi-stage ROP payloads.",
        fullDescription: `
            <p class="mb-3 text-zinc-300 text-sm leading-relaxed">Command-line exploit development engine designed to speed up CTF challenges and binary exploitation audits on x86-64 and ARM.</p>
            <h4 class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mt-4 mb-2">Capabilities:</h4>
            <ul class="list-disc list-inside space-y-1.5 text-xs text-zinc-400">
                <li><strong class="text-zinc-200">Gadget Extraction:</strong> Disassembles executable segments to identify semantic gadget sequences.</li>
                <li><strong class="text-zinc-200">Ret2libc & GOT Overwrites:</strong> Computes glibc offsets from arbitrary memory leaks and patches GOT entries.</li>
                <li><strong class="text-zinc-200">Bad Character Filtering:</strong> Null-byte and whitespace evasive encoders for clean payload delivery.</li>
            </ul>
        `,
        mitreTags: ["CWE-121: Stack Overflow", "T1059: Command Interpreter"],
        tags: ["Python", "Assembly", "GDB", "Pwntools", "Binary Exploitation"],
        github: "https://github.com/0xlazorr",
        difficulty: "Advanced"
    },
    {
        id: "web-fuzzer",
        title: "High-Speed Web Security Scanner & Fuzzer",
        category: "binary-exploit",
        badge: "Rust / AppSec",
        summary: "Concurrent web security fuzzer in Rust sending tens of thousands of requests/sec to detect IDOR, SQLi, SSRF, and command injection patterns.",
        fullDescription: `
            <p class="mb-3 text-zinc-300 text-sm leading-relaxed">Built to outperform traditional fuzzers, this Rust tool sends requests using HTTP/2 multiplexing while dynamically classifying responses with Levenshtein similarity.</p>
            <h4 class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mt-4 mb-2">Features:</h4>
            <ul class="list-disc list-inside space-y-1.5 text-xs text-zinc-400">
                <li><strong class="text-zinc-200">Blind SQLi & Time-Based Injection:</strong> Heuristic statistical timing tests with automatic jitter compensation.</li>
                <li><strong class="text-zinc-200">Out-of-Band (OAST) Integration:</strong> Correlates SSRF and blind XXE callbacks with external DNS/HTTP listener beacons.</li>
            </ul>
        `,
        mitreTags: ["CWE-89: SQLi", "CWE-918: SSRF", "CWE-79: XSS"],
        tags: ["Rust", "AppSec", "Fuzzing", "OWASP", "Automated Auditing"],
        github: "https://github.com/0xlazorr",
        difficulty: "Intermediate"
    },
    {
        id: "zero-trust-proxy",
        title: "Zero-Trust mTLS Inspection Gateway",
        category: "network-cloud",
        badge: "Go / TLS / Cloud Security",
        summary: "Microsegmentation proxy enforcing cryptographically verified SPIFFE client certificates, TLS 1.3 ciphers, and dynamic revocation checks.",
        fullDescription: `
            <p class="mb-3 text-zinc-300 text-sm leading-relaxed">Designed for zero-trust microservice environments, this gateway validates cryptographically signed SPIFFE/SPIRE identities and enforces strict mTLS.</p>
            <h4 class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mt-4 mb-2">Key Controls:</h4>
            <ul class="list-disc list-inside space-y-1.5 text-xs text-zinc-400">
                <li><strong class="text-zinc-200">mTLS Enforcement:</strong> Mandatory client certificates using modern TLS 1.3 cipher suites (AES-GCM, ChaCha20-Poly1305).</li>
                <li><strong class="text-zinc-200">Audit Logging:</strong> Cryptographically signed tamper-evident access logs streamed directly to cloud storage.</li>
            </ul>
        `,
        mitreTags: ["T1071: App Protocol", "T1573: Encrypted Channel"],
        tags: ["Go", "mTLS", "Zero-Trust", "Cryptography", "Cloud Infrastructure"],
        github: "https://github.com/0xlazorr",
        difficulty: "Intermediate"
    },
    {
        id: "redteam-c2",
        title: "Modular Adversary Emulation & C2 Agent",
        category: "binary-exploit",
        badge: "C++ / Rust / Red Teaming",
        summary: "Educational red team framework with encrypted staging, in-memory reflective execution, evasive beaconing, and anti-analysis checks.",
        fullDescription: `
            <p class="mb-3 text-zinc-300 text-sm leading-relaxed">An adversary emulation framework engineered to help security teams test their SOC detection rules and EDR alerting fidelity against evasive techniques.</p>
            <h4 class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mt-4 mb-2">Techniques:</h4>
            <ul class="list-disc list-inside space-y-1.5 text-xs text-zinc-400">
                <li><strong class="text-zinc-200">Reflective Injection:</strong> Executes payloads entirely in virtual memory without writing binaries to disk.</li>
                <li><strong class="text-zinc-200">Encrypted Beaconing:</strong> Asymmetric key exchange (ECDH + AES-256) disguised over DNS over HTTPS (DoH).</li>
            </ul>
        `,
        mitreTags: ["T1055: Process Injection", "T1071.004: DNS", "T1497: Sandbox Evasion"],
        tags: ["C++", "Rust", "Red Teaming", "EDR Evasion", "Malware Analysis"],
        github: "https://github.com/0xlazorr",
        difficulty: "Expert"
    },
    {
        id: "crypto-vault",
        title: "Zero-Knowledge Cryptographic Vault",
        category: "defensive-blue",
        badge: "Rust / Cryptography",
        summary: "Secure secrets manager implementing Argon2id key derivation, ChaCha20-Poly1305 AEAD, and protected memory enclaves (mlock).",
        fullDescription: `
            <p class="mb-3 text-zinc-300 text-sm leading-relaxed">A CLI and daemon vault for storing API keys, private SSH keys, and sensitive tokens with military-grade zero-knowledge architecture.</p>
            <h4 class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mt-4 mb-2">Primitives:</h4>
            <ul class="list-disc list-inside space-y-1.5 text-xs text-zinc-400">
                <li><strong class="text-zinc-200">Argon2id KDF:</strong> Memory-hard key derivation resistant to GPU/ASIC brute-force dictionary attacks.</li>
                <li><strong class="text-zinc-200">ChaCha20-Poly1305:</strong> Authenticated encryption with associated data (AEAD) ensuring confidentiality and tamper detection.</li>
                <li><strong class="text-zinc-200">Memory Locking:</strong> Utilizes <code>mlock</code> to prevent sensitive memory pages from swapping to unencrypted disk swap spaces.</li>
            </ul>
        `,
        mitreTags: ["CWE-311: Missing Encryption", "CWE-916: Insufficient Hash"],
        tags: ["Rust", "Cryptography", "Argon2", "ChaCha20", "Hardware Security"],
        github: "https://github.com/0xlazorr",
        difficulty: "Intermediate"
    },
    {
        id: "malware-sandbox",
        title: "Automated Malware Behavioral Sandbox",
        category: "reverse-engineering",
        badge: "Python / C / Reverse Eng",
        summary: "Automated analysis pipeline running in isolated KVM hypervisors. Captures registry edits, dropped artifacts, and network beacons.",
        fullDescription: `
            <p class="mb-3 text-zinc-300 text-sm leading-relaxed">A dynamic malware detonation chamber that automatically executes untrusted samples and generates structured MITRE ATT&CK mapped threat intelligence reports.</p>
            <h4 class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mt-4 mb-2">Pipeline:</h4>
            <ul class="list-disc list-inside space-y-1.5 text-xs text-zinc-400">
                <li><strong class="text-zinc-200">Hypervisor Isolation:</strong> Ephemeral VM snapshots restored in under 800ms between sample executions.</li>
                <li><strong class="text-zinc-200">API Call Interception:</strong> Injected hooks monitoring cryptographic operations and process spawning.</li>
            </ul>
        `,
        mitreTags: ["T1129: Shared Modules", "T1057: Process Discovery", "T1105: Tool Transfer"],
        tags: ["Python", "QEMU/KVM", "Reverse Engineering", "YARA", "Threat Intel"],
        github: "https://github.com/0xlazorr",
        difficulty: "Advanced"
    },
    {
        id: "container-sandbox",
        title: "eBPF-SecComp Container Hardening Sandbox",
        category: "defensive-blue",
        badge: "C / Cloud Defense",
        summary: "Real-time container runtime security agent blocking privilege escalations, capability abuses, and container escape exploits via dynamic SecComp-BPF profiles.",
        fullDescription: `
            <p class="mb-3 text-zinc-300 text-sm leading-relaxed">Blocks container breakout techniques (such as dirty COW, cgroup abuse, and unconfined capabilities) by generating dynamic SecComp-BPF filters tuned strictly to application behaviors.</p>
            <h4 class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mt-4 mb-2">Key Controls:</h4>
            <ul class="list-disc list-inside space-y-1.5 text-xs text-zinc-400">
                <li><strong class="text-zinc-200">Syscall Filtering:</strong> Automatically synthesizes BPF bytecode to restrict unauthorized <code>mount</code> or raw socket creations.</li>
                <li><strong class="text-zinc-200">Escape Mitigation:</strong> Detects unauthorized host filesystem traversal and <code>/proc/sys/kernel/core_pattern</code> tampering.</li>
            </ul>
        `,
        mitreTags: ["T1611: Escape to Host", "T1610: Deploy Container"],
        tags: ["C", "Docker", "SecComp", "Linux Security", "Cloud Native"],
        github: "https://github.com/0xlazorr",
        difficulty: "Intermediate"
    }
];

// --- Emil Kowalski Sonner-Style Toast Notification System ---
class ToastNotificationSystem {
    constructor() {
        this.toasts = [];
        this.container = null;
        this.init();
    }

    init() {
        if (!document.getElementById('sonner-toast-container')) {
            this.container = document.createElement('div');
            this.container.id = 'sonner-toast-container';
            this.container.className = 'fixed bottom-5 right-5 z-[9999] flex flex-col-reverse gap-2 pointer-events-none max-w-sm w-full px-4 sm:px-0';
            document.body.appendChild(this.container);
        } else {
            this.container = document.getElementById('sonner-toast-container');
        }
    }

    show(message, type = 'info') {
        this.init();
        const id = 'toast-' + Math.random().toString(36).substring(2, 9);
        const toastEl = document.createElement('div');
        
        let iconMarkup = '<i class="fa-solid fa-shield-halved text-emerald-400"></i>';
        let borderColor = 'border-emerald-500/30';
        if (type === 'success') {
            iconMarkup = '<i class="fa-solid fa-circle-check text-emerald-400"></i>';
            borderColor = 'border-emerald-500/40';
        } else if (type === 'copy') {
            iconMarkup = '<i class="fa-solid fa-clipboard-check text-cyan-400"></i>';
            borderColor = 'border-cyan-500/40';
        } else if (type === 'error') {
            iconMarkup = '<i class="fa-solid fa-triangle-exclamation text-rose-400"></i>';
            borderColor = 'border-rose-500/40';
        }

        toastEl.id = id;
        toastEl.className = `pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 bg-zinc-900/95 dark:bg-zinc-900/95 text-zinc-100 rounded-xl border ${borderColor} shadow-2xl backdrop-blur-md text-sm font-medium cursor-pointer select-none`;
        
        toastEl.style.opacity = '0';
        toastEl.style.transform = 'translateY(16px) scale(0.96)';
        toastEl.style.transition = 'transform 220ms cubic-bezier(0.23, 1, 0.32, 1), opacity 180ms ease-out';

        toastEl.innerHTML = `
            <div class="flex items-center gap-2.5 min-w-0 flex-1 font-mono text-xs">
                <span class="text-sm flex-shrink-0">${iconMarkup}</span>
                <span class="truncate text-zinc-200">${message}</span>
            </div>
            <button class="text-zinc-500 hover:text-zinc-300 p-1 rounded-md transition-colors" aria-label="Dismiss">
                <i class="fa-solid fa-xmark text-xs"></i>
            </button>
        `;

        this.container.appendChild(toastEl);
        void toastEl.offsetHeight;

        toastEl.style.opacity = '1';
        toastEl.style.transform = 'translateY(0) scale(1)';

        const toastItem = { id, el: toastEl, timeoutId: null };

        const dismiss = () => {
            if (!toastEl.parentElement) return;
            toastEl.style.transition = 'transform 140ms cubic-bezier(0.77, 0, 0.175, 1), opacity 120ms ease-out';
            toastEl.style.opacity = '0';
            toastEl.style.transform = 'translateY(10px) scale(0.95)';
            setTimeout(() => {
                if (toastEl.parentElement) toastEl.parentElement.removeChild(toastEl);
                this.toasts = this.toasts.filter(t => t.id !== id);
            }, 140);
        };

        toastItem.timeoutId = setTimeout(dismiss, 3000);
        toastEl.addEventListener('click', dismiss);
        this.toasts.push(toastItem);
    }
}

const Toast = new ToastNotificationSystem();

// --- Perfectly Uniform Synchronized Global Theme Toggle ---
function toggleTheme() {
    document.documentElement.classList.add('theme-transitioning');
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons();

    setTimeout(() => {
        document.documentElement.classList.remove('theme-transitioning');
    }, 200);
}

function updateThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.theme-icon-dark').forEach(el => el.classList.toggle('hidden', isDark));
    document.querySelectorAll('.theme-icon-light').forEach(el => el.classList.toggle('hidden', !isDark));
}

// --- Project Grid Rendering (Crisp, fully visible, zero delay) ---
function renderProjectsGrid(filterCategory = 'all') {
    const gridContainer = document.getElementById('projects-grid');
    if (!gridContainer) return;

    const filtered = filterCategory === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.category === filterCategory);

    gridContainer.innerHTML = filtered.map((project) => {
        return `
            <div class="project-card group relative flex flex-col bg-white dark:bg-zinc-900/80 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/40 p-6 transition-all duration-200 cyber-card-glow cursor-pointer"
                 data-project-id="${project.id}">
                
                <div class="flex items-start justify-between gap-3 mb-3">
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        ${project.badge}
                    </span>
                    <span class="text-[11px] font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700/40">
                        ${project.difficulty}
                    </span>
                </div>

                <h3 class="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2 leading-snug">
                    ${project.title}
                </h3>

                <p class="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
                    ${project.summary}
                </p>

                <div class="flex flex-wrap gap-1.5 mb-5">
                    ${project.tags.slice(0, 3).map(t => `
                        <span class="text-[11px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono">
                            ${t}
                        </span>
                    `).join('')}
                </div>

                <div class="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800/80 mt-auto">
                    <span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform">
                        <span>Threat Model & Code</span>
                        <i class="fa-solid fa-arrow-right text-[10px]"></i>
                    </span>
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" 
                       onclick="event.stopPropagation()"
                       class="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 p-1 rounded transition-colors" aria-label="GitHub Repository">
                        <i class="fa-brands fa-github text-base"></i>
                    </a>
                </div>
            </div>
        `;
    }).join('');

    gridContainer.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('a[target="_blank"]')) return;
            const pid = card.getAttribute('data-project-id');
            if (pid && projectModalInstance) {
                projectModalInstance.open(pid);
            }
        });
    });
}

// --- Project Modal / Drawer ---
class ProjectModal {
    constructor() {
        this.modal = document.getElementById('project-detail-modal');
        this.contentContainer = document.getElementById('project-modal-content');
        this.backdrop = document.getElementById('project-modal-backdrop');
        this.closeBtn = document.getElementById('project-modal-close');
        this.isOpen = false;
        this.init();
    }

    init() {
        if (!this.modal) return;
        if (this.backdrop) this.backdrop.addEventListener('click', () => this.close());
        if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) this.close();
        });
    }

    open(projectId) {
        const project = projectsData.find(p => p.id === projectId);
        if (!project || !this.modal || !this.contentContainer) return;

        this.isOpen = true;
        this.modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');

        this.contentContainer.innerHTML = `
            <div class="flex items-center justify-between gap-4 border-b border-zinc-800 pb-4 mb-5">
                <div>
                    <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                        ${project.badge}
                    </span>
                    <h3 class="text-xl font-bold text-zinc-100">${project.title}</h3>
                </div>
                <span class="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/60 flex-shrink-0">
                    ${project.difficulty}
                </span>
            </div>

            <div class="space-y-4 text-zinc-300 text-sm leading-relaxed mb-6">
                ${project.fullDescription}
            </div>

            <div class="mb-6">
                <h4 class="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 font-mono">MITRE ATT&CK & CWEs:</h4>
                <div class="flex flex-wrap gap-2">
                    ${project.mitreTags.map(m => `
                        <span class="text-xs font-mono px-2 py-1 rounded bg-zinc-800/80 text-emerald-400 border border-emerald-500/20">
                            <i class="fa-solid fa-crosshairs text-[10px] mr-1"></i>${m}
                        </span>
                    `).join('')}
                </div>
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-zinc-800">
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" 
                   class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-all pressable">
                    <i class="fa-brands fa-github text-sm"></i> View Repository
                </a>
                <button onclick="copyTextToClipboard('${project.github}', 'Repository URL copied!')" 
                        class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-colors pressable">
                    <i class="fa-solid fa-link text-xs"></i> Copy Link
                </button>
            </div>
        `;

        const dialog = this.modal.querySelector('.project-dialog');
        if (dialog) {
            dialog.style.opacity = '0';
            dialog.style.transform = 'scale(0.96) translateY(8px)';
            dialog.style.transition = 'transform 200ms cubic-bezier(0.23, 1, 0.32, 1), opacity 160ms ease-out';
            void dialog.offsetHeight;
            dialog.style.opacity = '1';
            dialog.style.transform = 'scale(1) translateY(0)';
        }
    }

    close() {
        if (!this.isOpen) return;
        const dialog = this.modal.querySelector('.project-dialog');
        if (dialog) {
            dialog.style.transition = 'transform 130ms cubic-bezier(0.77, 0, 0.175, 1), opacity 100ms ease-out';
            dialog.style.opacity = '0';
            dialog.style.transform = 'scale(0.96) translateY(6px)';
        }
        setTimeout(() => {
            this.isOpen = false;
            this.modal.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        }, 130);
    }
}

let projectModalInstance = null;

// --- Interactive Cyber Terminal Console ---
class CyberTerminal {
    constructor() {
        this.container = document.getElementById('cyber-terminal-screen');
        this.input = document.getElementById('cyber-terminal-input');
        this.commands = {
            'help': () => `
<div class="text-zinc-300">
Available terminal commands:
  <span class="text-emerald-400 font-semibold">whoami</span>        - Display operator bio & credentials
  <span class="text-emerald-400 font-semibold">skills</span>        - List core cybersecurity proficiencies
  <span class="text-emerald-400 font-semibold">projects</span>      - List top security engineering projects
  <span class="text-emerald-400 font-semibold">cve</span>           - Inspect focused vulnerability classes
  <span class="text-emerald-400 font-semibold">scan [target]</span>   - Run simulated security port scan
  <span class="text-emerald-400 font-semibold">contact</span>       - Get encrypted communication channels
  <span class="text-emerald-400 font-semibold">cv</span>            - View curriculum vitae
  <span class="text-emerald-400 font-semibold">clear</span>         - Clear the terminal screen
</div>`,
            'whoami': () => `
<div class="text-zinc-300">
  <span class="text-emerald-400 font-bold">Lazarus Ebi (0xlazorr)</span>
  Role: Cybersecurity & Software Engineer &bull; Vulnerability Researcher
  Focus: Binary Exploitation, Kernel eBPF, Network Defense, AppSec
  Status: Available for Security Operations & Software Engineering Roles
</div>`,
            'skills': () => `
<div class="text-zinc-300">
  [Offensive] : GDB/Pwndbg, Ghidra, Burp Suite Pro, Metasploit, Wireshark, ROP
  [Defensive] : eBPF Hardening, SIEM, Suricata, SecComp, Docker Security
  [Languages] : C, C++, Rust, Python, Assembly (x86_64/ARM), Bash, Go
  [Concepts]  : Heap Exploitation, Zero-Trust, mTLS, Threat Modeling, Cryptography
</div>`,
            'projects': () => `
<div class="text-zinc-300 space-y-1">
  1. <span class="text-emerald-400">Hardened Memory Allocator</span> - Heap overflow & double-free defense
  2. <span class="text-emerald-400">Rust Zero-Copy Network IDS</span> - Real-time SYN & ARP flood anomaly detection
  3. <span class="text-emerald-400">eBPF Linux Rootkit Monitor</span> - Tracing hooked syscalls & hidden PIDs
  4. <span class="text-emerald-400">Automated ROP Chain Generator</span> - Disassembly & gadget synthesis
</div>`,
            'cve': () => `
<div class="text-zinc-300">
  Focused Vulnerability Classes:
  - <span class="text-amber-400">CWE-122:</span> Heap-based Buffer Overflow
  - <span class="text-amber-400">CWE-416:</span> Use After Free (UAF)
  - <span class="text-amber-400">CWE-89:</span>  SQL Injection & SQLi Auth Bypass
  - <span class="text-amber-400">CWE-918:</span> Server-Side Request Forgery (SSRF)
  - <span class="text-amber-400">CWE-1014:</span> Rootkit & Syscall Hijacking
</div>`,
            'contact': () => `
<div class="text-zinc-300">
  Email:    <a href="mailto:lazorronchain@gmail.com" class="text-emerald-400 underline">lazorronchain@gmail.com</a>
  GitHub:   <a href="https://github.com/0xlazorr" target="_blank" class="text-emerald-400 underline">github.com/0xlazorr</a>
  LinkedIn: <a href="https://linkedin.com/in/lazarus-ebi" target="_blank" class="text-emerald-400 underline">linkedin.com/in/lazarus-ebi</a>
  PGP Key:  0x4A8E7D1B99F02C34
</div>`,
            'cv': () => {
                setTimeout(() => window.location.href = 'cv.html', 400);
                return `<span class="text-emerald-400">Redirecting to CV page...</span>`;
            },
            'clear': () => {
                if (this.container) this.container.innerHTML = '';
                return '';
            }
        };
        this.init();
    }

    init() {
        if (!this.input || !this.container) return;
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const rawCmd = this.input.value.trim();
                if (rawCmd) {
                    this.execute(rawCmd);
                    this.input.value = '';
                }
            }
        });
    }

    execute(cmdLine) {
        const parts = cmdLine.split(' ');
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1);

        const lineEl = document.createElement('div');
        lineEl.className = 'mb-2 font-mono text-xs sm:text-sm';
        lineEl.innerHTML = `<span class="text-emerald-400 font-bold">operator@0xlazorr:~$</span> <span class="text-zinc-100">${escapeHTML(cmdLine)}</span>`;
        this.container.appendChild(lineEl);

        let output = '';
        if (cmd === 'scan') {
            const target = args[0] || '127.0.0.1';
            output = `
<div class="text-zinc-400 font-mono text-xs">
  [+] Initiating stealth SYN port scan on <span class="text-emerald-400">${escapeHTML(target)}</span>...
  <span class="text-emerald-400">PORT 22/tcp  OPEN</span> (OpenSSH 9.3p1)
  <span class="text-emerald-400">PORT 443/tcp OPEN</span> (TLS 1.3 / mTLS Enabled)
  <span class="text-emerald-400">PORT 8080/tcp OPEN</span> (eBPF Telemetry Gateway)
  [✔] Scan complete. 0 perimeter vulnerabilities found.
</div>`;
        } else if (this.commands[cmd]) {
            output = this.commands[cmd](args);
        } else {
            output = `<div class="text-rose-400 text-xs font-mono">Command not recognized: '${escapeHTML(cmd)}'. Type 'help' for options.</div>`;
        }

        if (output) {
            const outEl = document.createElement('div');
            outEl.className = 'mb-3 font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed';
            outEl.innerHTML = output;
            this.container.appendChild(outEl);
        }

        this.container.scrollTop = this.container.scrollHeight;
    }
}

// --- Particle Cyber Mesh Canvas ---
function initCyberMeshCanvas() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        const parent = canvas.parentElement;
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
    }

    const cyberHexes = ['0x90', '0xCC', 'RET', 'NOP', '0x41', '0x00', '0xFF', 'JMP', 'eBPF'];

    class MeshParticle {
        constructor(w, h) {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.vx = (Math.random() - 0.5) * 0.35;
            this.vy = (Math.random() - 0.5) * 0.35;
            this.size = Math.random() * 1.5 + 1;
            this.symbol = cyberHexes[Math.floor(Math.random() * cyberHexes.length)];
            this.isText = Math.random() > 0.75;
        }

        update(w, h) {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > w) this.vx = -this.vx;
            if (this.y < 0 || this.y > h) this.vy = -this.vy;
        }

        draw(ctx, isDark) {
            if (this.isText) {
                ctx.fillStyle = isDark ? 'rgba(16, 185, 129, 0.3)' : 'rgba(5, 150, 105, 0.35)';
                ctx.font = '9px monospace';
                ctx.fillText(this.symbol, this.x, this.y);
            } else {
                ctx.fillStyle = isDark ? 'rgba(52, 211, 153, 0.35)' : 'rgba(16, 185, 129, 0.4)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    function init() {
        resize();
        particles = [];
        const count = Math.min(Math.floor((canvas.width * canvas.height) / 13000), 50);
        for (let i = 0; i < count; i++) {
            particles.push(new MeshParticle(canvas.width, canvas.height));
        }
    }

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const isDark = document.documentElement.classList.contains('dark');

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distSq = dx * dx + dy * dy;

                if (distSq < 13000) {
                    const alpha = 1 - (distSq / 13000);
                    ctx.strokeStyle = isDark 
                        ? `rgba(16, 185, 129, ${alpha * 0.12})`
                        : `rgba(5, 150, 105, ${alpha * 0.16})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        particles.forEach(p => {
            p.update(canvas.width, canvas.height);
            p.draw(ctx, isDark);
        });

        requestAnimationFrame(render);
    }

    window.addEventListener('resize', () => { resize(); init(); });
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        init();
        render();
    }
}

// --- Typing Effect ---
function initTypingEffect() {
    const el = document.getElementById('typing-text');
    if (!el) return;

    const phrases = [
        "Cybersecurity Engineer",
        "Vulnerability Researcher",
        "Software Engineer & Systems Specialist",
        "Linux Kernel & eBPF Explorer"
    ];

    let pIdx = 0;
    let cIdx = 0;
    let isDeleting = false;

    function tick() {
        const current = phrases[pIdx];
        cIdx += isDeleting ? -1 : 1;
        el.textContent = current.substring(0, cIdx);

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && cIdx === current.length) {
            speed = 2200;
            isDeleting = true;
        } else if (isDeleting && cIdx === 0) {
            isDeleting = false;
            pIdx = (pIdx + 1) % phrases.length;
            speed = 300;
        }

        setTimeout(tick, speed);
    }
    tick();
}

// --- Helpers ---
function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag] || tag));
}

function copyTextToClipboard(text, msg = 'Copied to clipboard!') {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => Toast.show(msg, 'copy')).catch(() => fallbackCopy(text, msg));
    } else {
        fallbackCopy(text, msg);
    }
}

function fallbackCopy(text, msg) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
        document.execCommand('copy');
        Toast.show(msg, 'copy');
    } catch (e) {
        Toast.show('Copy failed', 'error');
    }
    document.body.removeChild(ta);
}

// --- DOM Ready Initializer ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Setup
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    updateThemeIcons();

    document.querySelectorAll('#theme-toggle').forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });

    // 2. Initialize Components
    projectModalInstance = new ProjectModal();
    new CyberTerminal();
    initTypingEffect();
    initCyberMeshCanvas();
    renderProjectsGrid('all');

    // 3. Project Filter Tabs
    const filterTabs = document.querySelectorAll('.project-filter-btn');
    filterTabs.forEach(btn => {
        btn.addEventListener('click', () => {
            filterTabs.forEach(b => {
                b.classList.remove('active', 'bg-emerald-500', 'text-white', 'border-emerald-400');
                b.classList.add('bg-zinc-800/80', 'text-zinc-400', 'border-zinc-700/60');
            });
            btn.classList.add('active', 'bg-emerald-500', 'text-white', 'border-emerald-400');
            btn.classList.remove('bg-zinc-800/80', 'text-zinc-400', 'border-zinc-700/60');

            const cat = btn.getAttribute('data-filter') || 'all';
            renderProjectsGrid(cat);
        });
    });

    // 4. Mobile Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));
    }

    // 5. Contact Form with Formspree & Toast
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('contact-submit-btn');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-2"></i> Encrypting & Dispatching...`;
            }

            const formData = new FormData(contactForm);
            try {
                const res = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (res.ok) {
                    contactForm.reset();
                    Toast.show("Secure transmission received! I will reply shortly.", "success");
                } else {
                    Toast.show("Error sending message. Please email directly.", "error");
                }
            } catch (err) {
                Toast.show("Network failure. Please email lazorronchain@gmail.com", "error");
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = `<span>Send Encrypted Message</span> <i class="fa-solid fa-paper-plane text-xs"></i>`;
                }
            }
        });
    }

    // 6. Scroll To Top Button
    const toTopBtn = document.getElementById('to-top-button');
    if (toTopBtn) {
        window.addEventListener('scroll', () => toTopBtn.classList.toggle('hidden', window.pageYOffset < 400));
        toTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
});
