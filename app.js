// DevOps Learning Platform - Полный курс для Junior DevOps

const courseData = {
    modules: [
        { id: 1, title: "🐧 Linux Advanced", description: "Продвинутые темы Linux: процессы, сеть, безопасность", status: "completed", lessons: [
            { id: 1, title: "Управление процессами", time: "15 мин", difficulty: "Легкий", content: "<h3>Управление процессами в Linux</h3><p>Как специалист поддержки, вы уже знакомы с базовыми командами.</p><h4>Просмотр процессов</h4><ul><li><code>ps aux</code> - показать все процессы</li><li><code>top</code> - интерактивный монитор</li><li><code>htop</code> - улучшенная версия top</li><li><code>pgrep name</code> - найти PID</li></ul><h4>Управление</h4><ul><li><code>kill PID</code> - завершить процесс</li><li><code>kill -9 PID</code> - принудительно</li><li><code>pkill name</code> - по имени</li></ul><pre><code># Запустить в фоне\ncommand &\n\n# Перевести в фон\nCtrl+Z, затем bg\n\n# Вернуть на передний план\nfg</code></pre>" },
            { id: 2, title: "Сетевые утилиты", time: "20 мин", difficulty: "Средний", content: "<h3>Сетевые инструменты Linux</h3><h4>Диагностика</h4><ul><li><code>ping host</code> - проверка доступности</li><li><code>traceroute host</code> - трассировка</li><li><code>dig domain</code> - DNS запросы</li><li><code>nslookup</code> - альтернатива dig</li></ul><h4>Порты</h4><ul><li><code>netstat -tulpn</code> - слушающие порты</li><li><code>ss -tulpn</code> - современная замена</li><li><code>lsof -i :port</code> - кто использует порт</li></ul><pre><code>curl https://api.example.com\ncurl -X POST -d \"key=value\" url\nwget https://example.com/file.zip\ncurl -I https://example.com</code></pre>" },
            { id: 3, title: "Безопасность", time: "25 мин", difficulty: "Средний", content: "<h3>Безопасность в Linux</h3><h4>Firewall</h4><ul><li><code>ufw enable</code></li><li><code>ufw allow 22/tcp</code></li><li><code>iptables -L</code></li></ul><h4>SSH</h4><pre><code>ssh-keygen -t ed25519\nssh-copy-id user@host\nssh -i ~/.ssh/key user@host</code></pre><h4>Логи</h4><ul><li>/var/log/auth.log</li><li>/var/log/syslog</li><li>journalctl -u service</li></ul>" }
        ]},
        { id: 2, title: "🌐 Networking & Security", description: "Основы сетей, протоколы, безопасность", status: "in-progress", lessons: [
            { id: 4, title: "Основы сетей", time: "30 мин", difficulty: "Средний", content: "<h3>Модель OSI (7 уровней)</h3><ol><li>Физический</li><li>Канальный</li><li>Сетевой (IP)</li><li>Транспортный (TCP/UDP)</li><li>Сеансовый</li><li>Представления</li><li>Прикладной</li></ol><h4>IP адресация</h4><ul><li>IPv4: 192.168.1.1</li><li>IPv6: 2001:0db8::1</li><li>Подсети: 192.168.1.0/24</li></ul><h4>Протоколы</h4><ul><li>TCP - надежная доставка</li><li>UDP - быстрая доставка</li><li>ICMP - диагностика</li></ul>" },
            { id: 5, title: "DNS и HTTP", time: "25 мин", difficulty: "Средний", content: "<h3>DNS записи</h3><ul><li>A - IPv4</li><li>AAAA - IPv6</li><li>CNAME - алиас</li><li>MX - почта</li><li>TXT - текст (SPF, DKIM)</li></ul><h3>HTTP методы</h3><ul><li>GET - получение</li><li>POST - создание</li><li>PUT - обновление</li><li>DELETE - удаление</li></ul><h4>Коды</h4><ul><li>2xx - успех</li><li>3xx - редирект</li><li>4xx - ошибка клиента</li><li>5xx - ошибка сервера</li></ul>" }
        ]},
        { id: 3, title: "🐳 Docker", description: "Контейнеризация приложений", status: "locked", lessons: [
            { id: 6, title: "Введение в Docker", time: "20 мин", difficulty: "Легкий", content: "<h3>Контейнеры vs VM</h3><ul><li>Общее ядро ОС</li><li>Быстрый запуск</li><li>Меньше ресурсов</li></ul><pre><code>docker run -d -p 80:80 nginx\ndocker ps\ndocker stop ID\ndocker rm ID\ndocker logs ID</code></pre>" },
            { id: 7, title: "Dockerfile", time: "30 мин", difficulty: "Средний", content: "<pre><code>FROM ubuntu:20.04\nRUN apt-get update\nCOPY . /app\nEXPOSE 80\nCMD [\"nginx\"]</code></pre><ul><li>FROM - базовый образ</li><li>RUN - команды</li><li>COPY - файлы</li><li>EXPOSE - порты</li><li>CMD - команда</li></ul>" }
        ]},
        { id: 4, title: "☸️ Kubernetes", description: "Оркестрация контейнеров", status: "locked", lessons: [
            { id: 8, title: "Основы K8s", time: "35 мин", difficulty: "Сложный", content: "<h3>Компоненты</h3><ul><li>Pod - единица</li><li>Deployment - управление</li><li>Service - доступ</li><li>ConfigMap - конфиги</li></ul><pre><code>kubectl get pods\nkubectl apply -f deploy.yaml\nkubectl scale deploy app --replicas=3</code></pre>" }
        ]},
        { id: 5, title: "🔄 CI/CD", description: "Непрерывная интеграция", status: "locked", lessons: [
            { id: 9, title: "GitLab CI/CD", time: "40 мин", difficulty: "Средний", content: "<h3>CI/CD</h3><ul><li>CI - интеграция</li><li>CD - доставка/развертывание</li></ul><pre><code>stages:\n  - build\n  - test\n  - deploy\n\nbuild:\n  script:\n    - docker build -t app .</code></pre>" }
        ]},
        { id: 6, title: "☁️ Cloud & IaC", description: "Облака и инфраструктура как код", status: "locked", lessons: [
            { id: 10, title: "Terraform", time: "45 мин", difficulty: "Средний", content: "<h3>IaC</h3><pre><code>provider \"aws\" {\n  region = \"eu-west-1\"\n}\nresource \"aws_instance\" \"web\" {\n  ami = \"ami-123\"\n  instance_type = \"t2.micro\"\n}</code></pre><pre><code>terraform init\nterraform plan\nterraform apply</code></pre>" }
        ]},
        { id: 7, title: "📊 Monitoring", description: "Мониторинг и логи", status: "locked", lessons: [
            { id: 11, title: "Prometheus", time: "35 мин", difficulty: "Средний", content: "<h3>Prometheus + Grafana</h3><ul><li>Prometheus - метрики</li><li>Grafana - визуализация</li><li>Alertmanager - алерты</li></ul><pre><code>rate(cpu[5m])\nmemory_available</code></pre>" },
            { id: 12, title: "ELK Stack", time: "40 мин", difficulty: "Сложный", content: "<ul><li>Elasticsearch - поиск</li><li>Logstash - обработка</li><li>Kibana - визуализация</li></ul><p>Альтернативы: EFK, Loki, Splunk</p>" }
        ]}
    ],
    tests: [
        { id: 1, moduleId: 1, title: "Linux Processes", difficulty: "easy", questions: [
            { question: "Какая команда покажет все процессы?", options: ["ps aux", "ls -la", "cat /proc"], correct: 0 },
            { question: "Как отправить SIGKILL?", options: ["kill PID", "kill -9 PID", "kill -15 PID"], correct: 1 },
            { question: "Что делает nice?", options: ["Вежливо завершает", "Меняет приоритет", "Показывает логи"], correct: 1 },
            { question: "Как перевести в фон?", options: ["bg", "fg", "Ctrl+Z затем bg"], correct: 2 },
            { question: "Команда для дерева процессов?", options: ["tree", "pstree", "proctree"], correct: 1 }
        ]},
        { id: 2, moduleId: 1, title: "Linux Networking", difficulty: "medium", questions: [
            { question: "Утилита для маршрута?", options: ["ping", "traceroute", "netstat"], correct: 1 },
            { question: "Что делает dig?", options: ["Копает", "DNS запросы", "Проверка диска"], correct: 1 },
            { question: "Порт SSH?", options: ["21", "22", "23"], correct: 1 },
            { question: "Как посмотреть порты?", options: ["netstat -tulpn", "ls ports", "cat ports"], correct: 0 },
            { question: "curl -I это?", options: ["Скачать", "Заголовки", "POST"], correct: 1 }
        ]},
        { id: 3, moduleId: 2, title: "Networking", difficulty: "medium", questions: [
            { question: "Уровней в OSI?", options: ["5", "6", "7"], correct: 2 },
            { question: "Уровень TCP?", options: ["Сетевой", "Транспортный", "Прикладной"], correct: 1 },
            { question: "DNS запись для IPv4?", options: ["AAAA", "CNAME", "A"], correct: 2 },
            { question: "HTTP 503?", options: ["Not Found", "Unavailable", "Error"], correct: 1 },
            { question: "Без гарантии доставки?", options: ["TCP", "UDP", "HTTP"], correct: 1 }
        ]},
        { id: 4, moduleId: 3, title: "Docker Basics", difficulty: "easy", questions: [
            { question: "Контейнер это?", options: ["VM", "Изолированная среда", "Архив"], correct: 1 },
            { question: "Запуск контейнера?", options: ["docker start", "docker run", "docker create"], correct: 1 },
            { question: "Dockerfile?", options: ["Конфиг", "Скрипт сборки", "Лог"], correct: 1 },
            { question: "Остановка?", options: ["docker kill", "docker stop", "docker exit"], correct: 1 },
            { question: "EXPOSE?", options: ["Открывает порт", "Документирует", "Настраивает"], correct: 1 }
        ]},
        { id: 5, moduleId: 5, title: "CI/CD", difficulty: "medium", questions: [
            { question: "CI это?", options: ["Code Integration", "Continuous Integration", "Central Interface"], correct: 1 },
            { question: "Файл GitLab CI?", options: [".gitlab-ci.yml", "ci.json", ".travis.yml"], correct: 0 },
            { question: "Pipeline?", options: ["Труба", "Этапы сборки", "Соединение"], correct: 1 }
        ]}
    ],
    terminalTasks: [
        { id: 1, title: "Создание директории", description: "Создайте /tmp/devops и перейдите", commands: ["mkdir", "cd"], completed: false },
        { id: 2, title: "Работа с файлами", description: "Создайте hello.txt", commands: ["echo"], completed: false },
        { id: 3, title: "Поиск процессов", description: "Найдите nginx", commands: ["ps", "pgrep"], completed: false },
        { id: 4, title: "Проверка портов", description: "Проверьте порты", commands: ["netstat", "ss"], completed: false },
        { id: 5, title: "DNS запрос", description: "DNS для google.com", commands: ["dig", "nslookup"], completed: false }
    ]
};

let appState = { currentPage: 'home', currentLesson: null, currentTest: null, currentQuestion: 0, userAnswers: [], completedLessons: [], completedTests: [], currentTask: 0, currentPath: '/home/devops' };

function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    document.querySelectorAll('.nav-links a').forEach(l => { l.classList.remove('active'); if (l.dataset.page === pageId) l.classList.add('active'); });
    appState.currentPage = pageId;
    if (pageId === 'curriculum') renderModules();
    if (pageId === 'tests') renderTests();
    if (pageId === 'progress') updateProgress();
    if (pageId === 'terminal') renderTerminalTasks();
    updateStats();
}

function updateStats() {
    document.getElementById('total-modules').textContent = courseData.modules.length;
    document.getElementById('total-lessons').textContent = courseData.modules.reduce((s, m) => s + m.lessons.length, 0);
    document.getElementById('total-tests').textContent = courseData.tests.length;
}

function renderModules() {
    const c = document.getElementById('modules-container'); c.innerHTML = '';
    courseData.modules.forEach(m => {
        const html = m.lessons.map((l, i) => `<span class="lesson-badge ${appState.completedLessons.includes(l.id) ? 'completed' : ''}" onclick="openLesson(${m.id},${i})">${appState.completedLessons.includes(l.id) ? '✓ ' : ''}${l.title}</span>`).join('');
        c.innerHTML += `<div class="module-card"><div class="module-header"><h3>${m.title}</h3><span class="module-status ${m.status}">${m.status === 'completed' ? 'Завершен' : m.status === 'in-progress' ? 'В процессе' : 'Заблокирован'}</span></div><p>${m.description}</p><div class="module-lessons">${html}</div><button class="start-module-btn" onclick="openLesson(${m.id},0)">Начать</button></div>`;
    });
}

function openLesson(mid, idx) {
    const m = courseData.modules.find(x => x.id === mid);
    if (!m || m.status === 'locked') return;
    const l = m.lessons[idx];
    appState.currentLesson = { moduleId: mid, lessonIndex: idx };
    document.getElementById('lesson-module').textContent = `Модуль ${mid}`;
    document.getElementById('lesson-title').textContent = l.title;
    document.getElementById('lesson-time').textContent = l.time;
    document.getElementById('lesson-difficulty').textContent = l.difficulty;
    document.getElementById('lesson-content').innerHTML = l.content;
    navigateTo('lesson');
}

function completeLesson() {
    if (appState.currentLesson) {
        const l = courseData.modules.find(m => m.id === appState.currentLesson.moduleId).lessons[appState.currentLesson.lessonIndex];
        if (!appState.completedLessons.includes(l.id)) { appState.completedLessons.push(l.id); saveProgress(); }
        nextLesson();
    }
}

function nextLesson() {
    if (!appState.currentLesson) return;
    const m = courseData.modules.find(x => x.id === appState.currentLesson.moduleId);
    if (appState.currentLesson.lessonIndex < m.lessons.length - 1) openLesson(appState.currentLesson.moduleId, appState.currentLesson.lessonIndex + 1);
    else navigateTo('curriculum');
}

function prevLesson() {
    if (appState.currentLesson && appState.currentLesson.lessonIndex > 0) openLesson(appState.currentLesson.moduleId, appState.currentLesson.lessonIndex - 1);
}

function renderTests() {
    const c = document.getElementById('tests-grid'); c.innerHTML = '';
    courseData.tests.forEach(t => {
        const done = appState.completedTests.includes(t.id);
        c.innerHTML += `<div class="test-card" onclick="startTest(${t.id})"><div class="test-card-header"><h4>${t.title}</h4><span class="test-card-badge ${t.difficulty}">${t.difficulty === 'easy' ? 'Легкий' : t.difficulty === 'medium' ? 'Средний' : 'Сложный'}</span></div><div>${t.questions.length} вопросов</div>${done ? '<div style="color:green">✓ Пройден</div>' : ''}</div>`;
    });
}

function startTest(tid) {
    const t = courseData.tests.find(x => x.id === tid);
    appState.currentTest = t; appState.currentQuestion = 0; appState.userAnswers = [];
    document.getElementById('quiz-title').textContent = t.title;
    document.getElementById('total-questions').textContent = t.questions.length;
    showQuestion(0); navigateTo('quiz');
}

function showQuestion(i) {
    const t = appState.currentTest, q = t.questions[i];
    document.getElementById('current-question').textContent = i + 1;
    document.getElementById('quiz-progress-fill').style.width = `${((i+1)/t.questions.length)*100}%`;
    document.getElementById('question-container').innerHTML = `<p class="question-text">${q.question}</p><div class="options-list">${q.options.map((o,j) => `<div class="option-item" data-index="${j}" onclick="selectOption(${j})">${o}</div>`).join('')}</div>`;
    document.getElementById('submit-answer-btn').style.display = 'inline-flex';
    document.getElementById('next-question-btn').style.display = 'none';
    document.getElementById('prev-question-btn').style.display = i > 0 ? 'inline-flex' : 'none';
}

function selectOption(i) { document.querySelectorAll('.option-item').forEach(x => x.classList.remove('selected')); document.querySelector(`[data-index="${i}"]`).classList.add('selected'); appState.userAnswers[appState.currentQuestion] = i; }

function submitAnswer() {
    const q = appState.currentTest.questions[appState.currentQuestion], opts = document.querySelectorAll('.option-item');
    opts[q.correct].classList.add('correct');
    if (appState.userAnswers[appState.currentQuestion] !== q.correct) opts[appState.userAnswers[appState.currentQuestion]]?.classList.add('incorrect');
    document.getElementById('submit-answer-btn').style.display = 'none';
    if (appState.currentQuestion < appState.currentTest.questions.length - 1) document.getElementById('next-question-btn').style.display = 'inline-flex';
    else setTimeout(showResults, 1000);
}

function nextQuestion() { if (appState.currentQuestion < appState.currentTest.questions.length - 1) { appState.currentQuestion++; showQuestion(appState.currentQuestion); } }
function prevQuestion() { if (appState.currentQuestion > 0) { appState.currentQuestion--; showQuestion(appState.currentQuestion); } }

function showResults() {
    const t = appState.currentTest;
    let c = appState.userAnswers.filter((a,i) => a === t.questions[i].correct).length;
    const pct = Math.round((c/t.questions.length)*100);
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
    document.getElementById('final-score').textContent = c;
    document.getElementById('final-total').textContent = t.questions.length;
    document.getElementById('result-percentage').textContent = `${pct}%`;
    document.getElementById('result-message').textContent = pct >= 90 ? '🏆 Отлично!' : pct >= 70 ? '👍 Хорошо!' : pct >= 50 ? '📚 Повторите' : '💪 Try again';
    if (pct >= 70 && !appState.completedTests.includes(t.id)) { appState.completedTests.push(t.id); saveProgress(); }
}

function retryQuiz() { document.getElementById('question-container').style.display = 'block'; document.getElementById('quiz-results').style.display = 'none'; startTest(appState.currentTest.id); }

function renderTerminalTasks() {
    const c = document.getElementById('task-list'); c.innerHTML = '';
    courseData.terminalTasks.forEach((t,i) => { c.innerHTML += `<div class="task-item ${t.completed ? 'completed' : ''}" onclick="selectTask(${i})"><h4>${t.title}</h4><p>${t.description}</p></div>`; });
    if (courseData.terminalTasks[appState.currentTask]) document.getElementById('terminal-task').textContent = courseData.terminalTasks[appState.currentTask].description;
}

function selectTask(i) { appState.currentTask = i; const t = courseData.terminalTasks[i]; document.getElementById('terminal-task').textContent = t.description; }

document.addEventListener('DOMContentLoaded', () => {
    const inp = document.getElementById('terminal-input');
    inp.addEventListener('keypress', e => { if (e.key === 'Enter') { executeCommand(inp.value.trim()); inp.value = ''; } });
    loadProgress(); updateStats();
});

function executeCommand(cmd) {
    const out = document.getElementById('terminal-output'), parts = cmd.split(' '), c = parts[0], args = parts.slice(1);
    out.innerHTML += `<div><span style="color:#0f0">devops@learning:${appState.currentPath}$</span> ${cmd}</div>`;
    let r = '';
    switch(c) {
        case 'help': r = 'Commands: ls, cd, pwd, mkdir, touch, cat, echo, ps, clear, whoami, date, uname, exit'; break;
        case 'clear': out.innerHTML = ''; return;
        case 'pwd': r = appState.currentPath; break;
        case 'whoami': r = 'devops'; break;
        case 'date': r = new Date().toString(); break;
        case 'uname': r = 'Linux learning 5.15.0'; break;
        case 'ls': r = 'bin boot dev etc home lib media mnt opt proc root run sbin srv sys tmp usr var'; break;
        case 'ps': r = 'PID CMD\n1 systemd\n123 sshd\n456 bash'; break;
        case 'mkdir': r = `✓ Created: ${args.join(' ')}`; checkTask('mkdir'); break;
        case 'cd': if(args[0]) { appState.currentPath = args[0].startsWith('/') ? args[0] : `${appState.currentPath}/${args[0]}`; document.querySelector('.prompt').textContent = `devops@learning:${appState.currentPath}$`; } break;
        case 'touch': r = `✓ Created: ${args.join(' ')}`; checkTask('touch'); break;
        case 'echo': r = args.join(' ').replace(/['"]/g,''); break;
        case 'cat': r = args[0]?.includes('hello') ? 'Hello DevOps!' : `No such file: ${args[0]}`; break;
        case 'dig': case 'nslookup': r = `Server: 8.8.8.8\nName: ${args[0]||'google.com'}\nAddress: 142.250.185.46`; checkTask('dns'); break;
        case 'netstat': case 'ss': r = 'Proto Local Foreign State\n tcp 0.0.0.0:22 0.0.0.0:* LISTEN sshd\ntcp 0.0.0.0:80 0.0.0.0:* LISTEN nginx'; checkTask('ports'); break;
        default: r = `bash: ${c}: command not found`;
    }
    if(r) out.innerHTML += `<div style="color:#fff">${r}</div>`;
    out.scrollTop = out.scrollHeight;
}

function checkTask(a) {
    const t = courseData.terminalTasks[appState.currentTask]; if(!t) return;
    let ok = (a==='mkdir' && t.commands.some(x=>x.includes('mkdir'))) || (a==='touch' && t.commands.some(x=>x.includes('echo'))) || (a==='dns' && t.commands.some(x=>x.includes('dig')||x.includes('nslookup'))) || (a==='ports' && t.commands.some(x=>x.includes('netstat')||x.includes('ss')));
    if(ok && !t.completed) { t.completed = true; renderTerminalTasks(); alert('✓ Done!'); }
}

function updateProgress() {
    const total = courseData.modules.reduce((s,m)=>s+m.lessons.length,0), done = appState.completedLessons.length, pct = Math.round((done/total)*100);
    document.getElementById('overall-progress-text').textContent = `${pct}%`;
    document.getElementById('overall-progress').style.strokeDashoffset = 283 - (283*pct/100);
    document.getElementById('completed-lessons').textContent = `${done}/${total}`;
    document.getElementById('completed-tests').textContent = `${appState.completedTests.length}/${courseData.tests.length}`;
    const pl = document.getElementById('module-progress-list'); pl.innerHTML = '';
    courseData.modules.forEach(m => { const mc = m.lessons.filter(l=>appState.completedLessons.includes(l.id)).length, mp = Math.round((mc/m.lessons.length)*100); pl.innerHTML += `<div class="module-progress-item"><span>${m.title}</span><div class="module-progress-bar"><div class="progress-fill" style="width:${mp}%"></div></div><span>${mp}%</span></div>`; });
    renderAchievements();
}

function renderAchievements() {
    const ach = [{icon:'🎯',name:'Старт',req:()=>appState.completedLessons.length>=1},{icon:'📚',name:'Ученик',req:()=>appState.completedLessons.length>=5},{icon:'🏆',name:'Эксперт',req:()=>appState.completedLessons.length>=10},{icon:'✅',name:'Тест',req:()=>appState.completedTests.length>=1},{icon:'💻',name:'Хакер',req:()=>courseData.terminalTasks.some(t=>t.completed)},{icon:'🚀',name:'DevOps',req:()=>appState.completedLessons.length>=10&&appState.completedTests.length>=3}];
    const g = document.getElementById('achievements-grid'); g.innerHTML = '';
    ach.forEach(a => g.innerHTML += `<div class="achievement-item ${a.req()?'unlocked':''}"><div class="achievement-icon">${a.icon}</div><div class="achievement-name">${a.name}</div></div>`);
}

function saveProgress() { localStorage.setItem('devopsProgress', JSON.stringify({completedLessons:appState.completedLessons,completedTests:appState.completedTests,terminalTasks:courseData.terminalTasks.map(t=>t.completed)})); }
function loadProgress() { const s = localStorage.getItem('devopsProgress'); if(s) { const d = JSON.parse(s); appState.completedLessons = d.completedLessons||[]; appState.completedTests = d.completedTests||[]; if(d.terminalTasks) d.terminalTasks.forEach((c,i)=>{if(courseData.terminalTasks[i])courseData.terminalTasks[i].completed=c;}); } }

document.querySelectorAll('.nav-links a').forEach(l => l.addEventListener('click', e => { e.preventDefault(); navigateTo(l.dataset.page); }));
console.log('🚀 DevOps Platform Ready!');
