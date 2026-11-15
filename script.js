(function () {
    'use strict';

    const initialObjInf = [
        {
            id: '1',
            itemName: 'Шкаф-купе «Норд»',
            category: 'Шкафы',
            dimensions: '2400x1800x600',
            material: 'ЛДСП Дуб Сонома',
            price: 1200,
            status: 'В очереди',
            address: 'г. Минск, пр. Независимости, 4',
            description: 'Трехдверный шкаф-купе с зеркальными фасадами и алюминиевым профилем.',
            createdAt: new Date('2026-10-01T10:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://example.com/photos/wardrobe-nord.jpg'
        },
        {
            id: '2',
            itemName: 'Стол письменный «Лофт»',
            category: 'Столы',
            dimensions: '1400x750x700',
            material: 'Массив дуба',
            price: 650,
            status: 'Выполнен',
            address: 'г. Минск, ул. Ленина, 12',
            description: 'Рабочий стол из натурального массива дуба на черном металлическом каркасе.',
            createdAt: new Date('2026-10-02T11:30:00'),
            author: 'Петров Петр',
            photoLink: 'https://example.com/photos/table-loft.jpg'
        },
        {
            id: '3',
            itemName: 'Комод «Сканди» на 4 ящика',
            category: 'Комоды',
            dimensions: '1000x900x450',
            material: 'МДФ Эмаль',
            price: 480,
            status: 'Согласован',
            address: 'г. Минск, ул. Сурганова, 28',
            description: 'Белый матовый комод с направляющими скрытого монтажа и доводчиками.',
            createdAt: new Date('2026-10-03T14:15:00'),
            author: 'Сидорова Анна',
            photoLink: 'https://example.com/photos/commode-scandi.jpg'
        },
        {
            id: '4',
            itemName: 'Кухонный гарнитур «Прага»',
            category: 'Кухни',
            dimensions: '3200x2200x600',
            material: 'МДФ Эмаль',
            price: 3400,
            status: 'Оплачен',
            address: 'г. Минск, пр. Победителей, 45',
            description: 'Угловая кухня со встроенной подсветкой рабочей зоны и каменной столешницей.',
            createdAt: new Date('2026-10-04T09:20:00'),
            author: 'Иванов Иван',
            photoLink: 'https://example.com/photos/kitchen-prague.jpg'
        },
        {
            id: '5',
            itemName: 'Гардеробная система «Модуль»',
            category: 'Шкафы',
            dimensions: '2600x2400x550',
            material: 'ЛДСП Дуб Сонома',
            price: 1550,
            status: 'В очереди',
            address: 'г. Минск, ул. Якуба Коласа, 19',
            description: 'Открытая гардеробная со штангами для одежды и выдвижными корзинами.',
            createdAt: new Date('2026-10-05T16:40:00'),
            author: 'Козлов Дмитрий',
            photoLink: ''
        },
        {
            id: '6',
            itemName: 'Стол обеденный «Олимп»',
            category: 'Столы',
            dimensions: '1800x900x760',
            material: 'Массив дуба',
            price: 920,
            status: 'Выполнен',
            address: 'г. Минск, ул. Притыцкого, 88',
            description: 'Раздвижной обеденный стол на 8 персон с покрытием натуральным маслом.',
            createdAt: new Date('2026-10-06T12:10:00'),
            author: 'Смирнова Елена',
            photoLink: 'https://example.com/photos/table-olymp.jpg'
        },
        {
            id: '7',
            itemName: 'Тумба под ТВ «Вега»',
            category: 'Комоды',
            dimensions: '1800x450x400',
            material: 'ЛДСП Дуб Сонома',
            price: 390,
            status: 'Согласован',
            address: 'г. Минск, ул. Богдановича, 53',
            description: 'Подвесная консоль под телевизор с двумя откидными фасадами без ручек.',
            createdAt: new Date('2026-10-07T15:00:00'),
            author: 'Петров Петр',
            photoLink: ''
        },
        {
            id: '8',
            itemName: 'Кухня прямая «Милан»',
            category: 'Кухни',
            dimensions: '2800x2150x600',
            material: 'МДФ Эмаль',
            price: 2750,
            status: 'В очереди',
            address: 'г. Минск, ул. Кальварийская, 16',
            description: 'Линейный кухонный гарнитур с антресолями под потолок и фурнитурой Blum.',
            createdAt: new Date('2026-10-08T13:25:00'),
            author: 'Иванов Иван',
            photoLink: 'https://example.com/photos/kitchen-milan.jpg'
        },
        {
            id: '9',
            itemName: 'Шкаф распашной «Классик»',
            category: 'Шкафы',
            dimensions: '2200x1200x580',
            material: 'Массив сосны',
            price: 890,
            status: 'Оплачен',
            address: 'г. Минск, ул. Веры Хоружей, 10',
            description: 'Двухстворчатый платяной шкаф из экологичного массива сосны под белым воском.',
            createdAt: new Date('2026-10-09T10:50:00'),
            author: 'Новиков Алексей',
            photoLink: ''
        },
        {
            id: '10',
            itemName: 'Стол компьютерный «Геймер»',
            category: 'Столы',
            dimensions: '1500x800x750',
            material: 'ЛДСП Дуб Сонома',
            price: 540,
            status: 'Выполнен',
            address: 'г. Минск, пр. Дзержинского, 104',
            description: 'Эргономичный стол с кабель-каналом и вырезом под мониторный кронштейн.',
            createdAt: new Date('2026-10-10T17:05:00'),
            author: 'Козлов Дмитрий',
            photoLink: 'https://example.com/photos/table-gamer.jpg'
        },
        {
            id: '11',
            itemName: 'Комод высокий «Таллин»',
            category: 'Комоды',
            dimensions: '800x1200x480',
            material: 'Массив сосны',
            price: 560,
            status: 'В очереди',
            address: 'г. Минск, ул. Немига, 14',
            description: 'Узкий бельевой комод на 6 ящиков на высоких деревянных опорах.',
            createdAt: new Date('2026-10-11T11:00:00'),
            author: 'Сидорова Анна',
            photoLink: ''
        },
        {
            id: '12',
            itemName: 'Шкаф прихожая «Мадрид»',
            category: 'Шкафы',
            dimensions: '2300x1600x420',
            material: 'ЛДСП Дуб Сонома',
            price: 980,
            status: 'Согласован',
            address: 'г. Минск, ул. Тимирязева, 65',
            description: 'Встроенный шкаф в прихожую с мягкой каретной стяжкой и обувницей.',
            createdAt: new Date('2026-10-12T14:40:00'),
            author: 'Смирнова Елена',
            photoLink: 'https://example.com/photos/hall-madrid.jpg'
        },
        {
            id: '13',
            itemName: 'Кухонный остров «Бариста»',
            category: 'Кухни',
            dimensions: '1600x900x900',
            material: 'Массив дуба',
            price: 1450,
            status: 'Оплачен',
            address: 'г. Минск, ул. Чкалова, 22',
            description: 'Отдельностоящий кухонный остров с барной консолью и винной полкой.',
            createdAt: new Date('2026-10-13T09:15:00'),
            author: 'Иванов Иван',
            photoLink: ''
        },
        {
            id: '14',
            itemName: 'Стол журнальный «Кварц»',
            category: 'Столы',
            dimensions: '900x900x420',
            material: 'Массив дуба',
            price: 410,
            status: 'Выполнен',
            address: 'г. Минск, ул. Маяковского, 31',
            description: 'Круглый журнальный столик для гостиной из сращенного щита дуба.',
            createdAt: new Date('2026-10-14T16:20:00'),
            author: 'Новиков Алексей',
            photoLink: ''
        },
        {
            id: '15',
            itemName: 'Тумба прикроватная «Луна» (пара)',
            category: 'Комоды',
            dimensions: '500x450x400',
            material: 'МДФ Эмаль',
            price: 360,
            status: 'Выполнен',
            address: 'г. Минск, ул. Плеханова, 7',
            description: 'Комплект из двух прикроватных тумб с фрезерованными фасадами.',
            createdAt: new Date('2026-10-15T12:00:00'),
            author: 'Сидорова Анна',
            photoLink: ''
        },
        {
            id: '16',
            itemName: 'Шкаф книжный «Библиотека»',
            category: 'Шкафы',
            dimensions: '2400x2000x350',
            material: 'Массив сосны',
            price: 1320,
            status: 'В очереди',
            address: 'г. Минск, пр. Партизанский, 50',
            description: 'Стеллаж со стеклянными витринами для домашней библиотеки и кабинета.',
            createdAt: new Date('2026-10-16T10:30:00'),
            author: 'Петров Петр',
            photoLink: 'https://example.com/photos/bookcase.jpg'
        },
        {
            id: '17',
            itemName: 'Кухня с островом «Стокгольм»',
            category: 'Кухни',
            dimensions: '3600x2400x600',
            material: 'МДФ Эмаль',
            price: 4200,
            status: 'Согласован',
            address: 'г. Минск, ул. Кирова, 3',
            description: 'П-образный гарнитур в скандинавском стиле со встроенным пеналом под технику.',
            createdAt: new Date('2026-10-17T15:45:00'),
            author: 'Смирнова Елена',
            photoLink: ''
        },
        {
            id: '18',
            itemName: 'Стол переговорный «Бизнес»',
            category: 'Столы',
            dimensions: '2800x1100x750',
            material: 'ЛДСП Дуб Сонома',
            price: 1100,
            status: 'Оплачен',
            address: 'г. Минск, ул. Интернациональная, 18',
            description: 'Конференц-стол со встроенными лючками для розеток на 10 рабочих мест.',
            createdAt: new Date('2026-10-18T11:20:00'),
            author: 'Козлов Дмитрий',
            photoLink: ''
        },
        {
            id: '19',
            itemName: 'Комод-витрина «Версаль»',
            category: 'Комоды',
            dimensions: '1400x1050x450',
            material: 'Массив дуба',
            price: 1280,
            status: 'В очереди',
            address: 'г. Минск, ул. Городской Вал, 9',
            description: 'Буфет-комод из массива дуба с бронзовой лицевой фурнитурой и подсветкой.',
            createdAt: new Date('2026-10-19T13:10:00'),
            author: 'Новиков Алексей',
            photoLink: ''
        },
        {
            id: '20',
            itemName: 'Шкаф-купе угловой «Трио»',
            category: 'Шкафы',
            dimensions: '2500x1500x1500',
            material: 'ЛДСП Дуб Сонома',
            price: 1650,
            status: 'В очереди',
            address: 'г. Минск, пр. Независимости, 95',
            description: 'Вместительный угловой шкаф-купе в спальню с комбинированными дверями.',
            createdAt: new Date('2026-10-20T18:00:00'),
            author: 'Иванов Иван',
            photoLink: 'https://example.com/photos/wardrobe-trio.jpg'
        }
    ];

    class OrderCollection {
        constructor(objs = []) {
            this._storageKey = 'ais_furniture_objs_v1';
            this._objs = [];
            this.restore(objs);
        }

        _isNonEmptyString(val) {
            return typeof val === 'string' && val.trim().length > 0;
        }

        validateObj(obj) {
            if (!obj || typeof obj !== 'object') {
                return false;
            }
            if (!this._isNonEmptyString(obj.id)) {
                return false;
            }
            if (!this._isNonEmptyString(obj.description) || obj.description.length >= 200) {
                return false;
            }
            if (!(obj.createdAt instanceof Date) || isNaN(obj.createdAt.getTime())) {
                return false;
            }
            if (!this._isNonEmptyString(obj.author)) {
                return false;
            }
            if (obj.photoLink !== undefined && typeof obj.photoLink !== 'string') {
                return false;
            }
            if (obj.price !== undefined && (typeof obj.price !== 'number' || isNaN(obj.price) || obj.price <= 0)) {
                return false;
            }
            return true;
        }

        getObjs(skip = 0, top = 10, filterConfig = null) {
            const validSkip = typeof skip === 'number' && skip >= 0 ? skip : 0;
            const validTop = typeof top === 'number' && top > 0 ? top : 10;

            let result = [...this._objs];

            if (filterConfig && typeof filterConfig === 'object') {
                result = result.filter((item) => {
                    return Object.keys(filterConfig).every((key) => {
                        const filterVal = filterConfig[key];
                        if (filterVal === undefined || filterVal === null || filterVal === '') {
                            return true;
                        }
                        if (key === 'search') {
                            const q = String(filterVal).toLowerCase();
                            const inDesc = (item.description || '').toLowerCase().includes(q);
                            const inName = (item.itemName || '').toLowerCase().includes(q);
                            const inMat = (item.material || '').toLowerCase().includes(q);
                            return inDesc || inName || inMat;
                        }
                        return String(item[key] || '').toLowerCase() === String(filterVal).toLowerCase();
                    });
                });
            }

            result.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

            return result.slice(validSkip, validSkip + validTop);
        }

        getTotalCount(filterConfig = null) {
            return this.getObjs(0, this._objs.length || 1000, filterConfig).length;
        }

        getObj(id) {
            if (!this._isNonEmptyString(String(id))) {
                return null;
            }
            return this._objs.find((item) => item.id === String(id)) || null;
        }

        addObj(obj) {
            if (!this.validateObj(obj)) {
                return false;
            }
            if (this.getObj(obj.id)) {
                return false;
            }
            this._objs.push({
                id: String(obj.id),
                itemName: obj.itemName || 'Индивидуальное изделие',
                category: obj.category || 'Шкафы',
                dimensions: obj.dimensions || '2000x1000x600',
                material: obj.material || 'ЛДСП Дуб Сонома',
                price: Number(obj.price) || 500,
                status: obj.status || 'В очереди',
                address: obj.address || 'г. Минск',
                description: obj.description.trim(),
                createdAt: obj.createdAt,
                author: obj.author.trim(),
                photoLink: obj.photoLink || ''
            });
            this.save();
            return true;
        }

        editObj(id, editFields) {
            if (!this._isNonEmptyString(String(id)) || !editFields || typeof editFields !== 'object') {
                return false;
            }
            const index = this._objs.findIndex((item) => item.id === String(id));
            if (index === -1) {
                return false;
            }

            const current = this._objs[index];
            const updated = {
                ...current,
                ...editFields,
                id: current.id,
                author: current.author,
                createdAt: current.createdAt
            };

            if (updated.price !== undefined) {
                updated.price = Number(updated.price);
            }

            if (!this.validateObj(updated)) {
                return false;
            }

            this._objs[index] = updated;
            this.save();
            return true;
        }

        removeObj(id) {
            const index = this._objs.findIndex((item) => item.id === String(id));
            if (index === -1) {
                return false;
            }
            this._objs.splice(index, 1);
            this.save();
            return true;
        }

        addAll(objs) {
            if (!Array.isArray(objs)) {
                return [];
            }
            const invalidObjs = [];
            objs.forEach((item) => {
                if (!this.addObj(item)) {
                    invalidObjs.push(item);
                }
            });
            return invalidObjs;
        }

        clear() {
            this._objs = [];
            this.save();
        }

        save() {
            try {
                localStorage.setItem(this._storageKey, JSON.stringify(this._objs));
            } catch (e) {
                console.error('LocalStorage save error:', e);
            }
        }

        restore(defaultObjs = []) {
            try {
                const raw = localStorage.getItem(this._storageKey);
                if (raw) {
                    const parsed = JSON.parse(raw);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        this._objs = parsed.map((item) => ({
                            ...item,
                            createdAt: new Date(item.createdAt),
                            price: Number(item.price) || 500
                        }));
                        return;
                    }
                }
            } catch (e) {
                console.error('LocalStorage restore error:', e);
            }
            this._objs = [];
            this.addAll(defaultObjs);
            this.save();
        }

        resetToDefaults(defaultObjs) {
            localStorage.removeItem(this._storageKey);
            this._objs = [];
            this.addAll(defaultObjs);
            this.save();
        }
    }

    class HeaderView {
        render(user, role) {
            const userDisplay = document.getElementById('header-user-display');
            const logoutBtn = document.getElementById('logout-btn');
            const loginLinkBtn = document.getElementById('login-link-btn');
            const authOnlyElements = document.querySelectorAll('[data-auth-only]');

            if (user) {
                userDisplay.innerHTML = `Роль: <strong>${role || 'Клиент'}</strong> (${user})`;
                logoutBtn.classList.remove('hidden');
                loginLinkBtn.classList.add('hidden');
                authOnlyElements.forEach((el) => el.classList.remove('hidden'));
            } else {
                userDisplay.innerHTML = 'Режим: <strong>Гость (Только просмотр)</strong>';
                logoutBtn.classList.add('hidden');
                loginLinkBtn.classList.remove('hidden');
                authOnlyElements.forEach((el) => el.classList.add('hidden'));
            }
        }
    }

    class FilterView {
        renderOptions(allObjs) {
            const matSelect = document.getElementById('filter-material');
            const authorSelect = document.getElementById('filter-author');
            const currentMat = matSelect.value;
            const currentAuthor = authorSelect.value;

            const materials = [...new Set(allObjs.map((o) => o.material).filter(Boolean))];
            const authors = [...new Set(allObjs.map((o) => o.author).filter(Boolean))];

            matSelect.innerHTML = '<option value="">Любой материал</option>' +
                materials.map((m) => `<option value="${m}">${m}</option>`).join('');

            authorSelect.innerHTML = '<option value="">Все авторы</option>' +
                authors.map((a) => `<option value="${a}">${a}</option>`).join('');

            matSelect.value = currentMat;
            authorSelect.value = currentAuthor;
        }
    }

    class CatalogAndOrdersView {
        formatDate(date) {
            return date.toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        }

        render(objs, totalCount, currentUser, currentRole) {
            const catalogGrid = document.getElementById('catalog-grid');
            const ordersBody = document.getElementById('orders-list-body');
            const totalBadge = document.getElementById('total-count-badge');
            const paginationInfo = document.getElementById('pagination-info');
            const loadMoreBtn = document.getElementById('load-more-btn');

            totalBadge.textContent = String(totalCount);
            paginationInfo.textContent = `Показано ${objs.length} из ${totalCount} объектов`;

            if (objs.length >= totalCount) {
                loadMoreBtn.classList.add('hidden');
            } else {
                loadMoreBtn.classList.remove('hidden');
            }

            if (objs.length === 0) {
                catalogGrid.innerHTML = '<p class="text-muted">По заданным фильтрам ничего не найдено.</p>';
                ordersBody.innerHTML = '<div class="orders-grid-row"><span>Нет данных</span></div>';
                return;
            }

            catalogGrid.innerHTML = objs.map((item) => {
                const canManage = currentUser && (currentRole !== 'Клиент' || item.author === currentUser);
                return `
                <article class="product-card" data-id="${item.id}">
                    <div class="product-img-placeholder">
                        <span>${item.itemName || 'Мебельное изделие'}</span>
                        <small>${item.dimensions || ''}</small>
                    </div>
                    <div class="product-body">
                        <span class="product-code">ID: #${item.id} | Категория: ${item.category || 'Мебель'} | Автор: ${item.author}</span>
                        <h3>${item.itemName || 'Заказ мебели'}</h3>
                        <p class="product-desc">${item.description}</p>
                        <p class="text-muted">Материал: ${item.material || 'Не указан'}</p>
                        <p class="product-price">${Number(item.price).toFixed(2)} BYN</p>
                        <div class="product-actions">
                            ${canManage ? `
                                <button type="button" class="btn btn-outline btn-sm" data-action="edit" data-id="${item.id}">Редактировать</button>
                                <button type="button" class="btn btn-danger btn-sm" data-action="delete" data-id="${item.id}">Удалить</button>
                            ` : `<span class="text-muted">${currentUser ? 'Чужой заказ' : 'Войдите для управления'}</span>`}
                        </div>
                    </div>
                </article>
            `}).join('');

            ordersBody.innerHTML = objs.map((item) => {
                const isDone = item.status === 'Выполнен' || item.status === 'Оплачен';
                const statusClass = isDone ? 'status-done' : 'status-queue';
                const prepayment = (Number(item.price) * 0.3).toFixed(2);
                const canManage = currentUser && (currentRole !== 'Клиент' || item.author === currentUser);

                return `
                    <article class="orders-grid-row" data-id="${item.id}">
                        <div>
                            <strong>Заказ #${item.id}</strong>
                            <span class="text-muted">от ${this.formatDate(item.createdAt)}</span>
                            <span class="text-muted">Клиент: ${item.author}</span>
                        </div>
                        <div>
                            <strong>${item.itemName || 'Мебель на заказ'}</strong>
                            <span class="text-muted">${item.description}</span>
                            <span class="text-muted">Адрес: ${item.address || 'г. Минск'}</span>
                        </div>
                        <div>
                            <strong>${item.material || 'ЛДСП'}</strong>
                            <span class="text-muted">Габариты: ${item.dimensions || '-'}</span>
                        </div>
                        <div>
                            <strong>${Number(item.price).toFixed(2)} BYN</strong>
                            <span class="text-muted">Аванс 30%: ${prepayment} BYN</span>
                            <span class="status-badge ${statusClass}">${item.status || 'В очереди'}</span>
                        </div>
                        <div class="row-actions">
                            ${canManage ? `
                                <button type="button" class="btn btn-outline btn-sm" data-action="edit" data-id="${item.id}">Изменить</button>
                                <button type="button" class="btn btn-danger btn-sm" data-action="delete" data-id="${item.id}">Удалить</button>
                            ` : `<span class="text-muted">${currentUser ? 'Чужой заказ' : 'Только чтение'}</span>`}
                        </div>
                    </article>
                `;
            }).join('');
        }
    }

    class ErrorView {
        showError(title, message) {
            const titleEl = document.getElementById('error-title');
            const msgEl = document.getElementById('error-message');
            titleEl.textContent = title;
            msgEl.textContent = message;
            document.getElementById('screen-error').scrollIntoView({ behavior: 'smooth' });
        }

        clearError() {
            const titleEl = document.getElementById('error-title');
            const msgEl = document.getElementById('error-message');
            titleEl.textContent = 'Статус валидации: Успешно';
            msgEl.textContent = 'Последняя операция выполнена без ошибок. Данные сохранены в LocalStorage.';
        }
    }

    const model = new OrderCollection(initialObjInf);
    const headerView = new HeaderView();
    const filterView = new FilterView();
    const listView = new CatalogAndOrdersView();
    const errorView = new ErrorView();

    let currentUser = localStorage.getItem('ais_furniture_user') || 'Иванов Иван';
    let currentRole = localStorage.getItem('ais_furniture_role') || 'Клиент';
    let currentTop = 10;
    let currentFilter = {};

    function refreshUI() {
        headerView.render(currentUser, currentRole);
        filterView.renderOptions(model.getObjs(0, 1000));
        const total = model.getTotalCount(currentFilter);
        const visibleObjs = model.getObjs(0, currentTop, currentFilter);
        listView.render(visibleObjs, total, currentUser, currentRole);
    }

    function addObj(objData) {
        if (!currentUser) {
            console.warn('Отказ в доступе: Гость не может добавлять заказы.');
            errorView.showError('Ошибка 403: Доступ запрещен', 'Гость не может создавать заказы. Пожалуйста, авторизуйтесь.');
            return false;
        }
        if (!objData || typeof objData !== 'object') {
            return false;
        }
        const prepared = {
            id: objData.id || String(Date.now()),
            itemName: objData.itemName || 'Новое изделие',
            category: objData.category || 'Шкафы',
            dimensions: objData.dimensions || '2000x1000x600',
            material: objData.material || 'ЛДСП Дуб Сонома',
            price: Number(objData.price) || 800,
            status: objData.status || 'В очереди',
            address: objData.address || 'г. Минск',
            description: objData.description,
            createdAt: objData.createdAt instanceof Date ? objData.createdAt : new Date(),
            author: currentRole === 'Клиент' ? currentUser : (objData.author || currentUser),
            photoLink: objData.photoLink || ''
        };
        const ok = model.addObj(prepared);
        if (ok) {
            errorView.clearError();
            refreshUI();
        } else {
            errorView.showError(
                'Ошибка 400: Объект не прошел валидацию (validateObj === false)',
                'Проверьте заполнение обязательных полей: description (до 200 символов), наименование, корректную цену и уникальный ID.'
            );
        }
        return ok;
    }

    function editObj(id, editFields) {
        if (!currentUser) {
            console.warn('Отказ в доступе: Гость не может редактировать заказы.');
            errorView.showError('Ошибка 403: Доступ запрещен', 'Гость не может редактировать заказы.');
            return false;
        }
        const target = model.getObj(String(id));
        if (!target) {
            return false;
        }
        if (currentRole === 'Клиент' && target.author !== currentUser) {
            console.warn('Отказ в доступе: Клиент не может редактировать чужой заказ.');
            errorView.showError('Ошибка 403: Чужой заказ', `Клиент ${currentUser} не имеет прав на изменение заказа автора ${target.author}.`);
            return false;
        }
        const ok = model.editObj(String(id), editFields);
        if (ok) {
            errorView.clearError();
            refreshUI();
        } else {
            errorView.showError(
                'Ошибка редактирования (editObj === false)',
                'Не удалось обновить заказ #' + id + '. Проверьте корректность полей (description < 200 символов, положительная цена).'
            );
        }
        return ok;
    }

    function removeObj(id) {
        if (!currentUser) {
            console.warn('Отказ в доступе: Гость не может удалять заказы.');
            errorView.showError('Ошибка 403: Доступ запрещен', 'Гость не может удалять заказы.');
            return false;
        }
        const target = model.getObj(String(id));
        if (!target) {
            return false;
        }
        if (currentRole === 'Клиент' && target.author !== currentUser) {
            console.warn('Отказ в доступе: Клиент не может удалить чужой заказ.');
            errorView.showError('Ошибка 403: Чужой заказ', `Клиент ${currentUser} не может удалить заказ автора ${target.author}.`);
            return false;
        }
        const ok = model.removeObj(String(id));
        if (ok) {
            errorView.clearError();
            refreshUI();
        }
        return ok;
    }

    function getObjs(skip = 0, top = 10, filterConfig = null) {
        return model.getObjs(skip, top, filterConfig);
    }

    function getObj(id) {
        return model.getObj(String(id));
    }

    function validateObj(obj) {
        return model.validateObj(obj);
    }

    function setUser(name, role = 'Клиент') {
        currentUser = name;
        currentRole = role;
        if (name) {
            localStorage.setItem('ais_furniture_user', name);
            localStorage.setItem('ais_furniture_role', role);
        } else {
            localStorage.removeItem('ais_furniture_user');
        }
        refreshUI();
    }

    function startEditMode(id) {
        const item = model.getObj(id);
        if (!item) {
            return;
        }
        document.getElementById('edit-order-id').value = item.id;
        document.getElementById('item-name').value = item.itemName || '';
        document.getElementById('item-category').value = item.category || 'Шкафы';
        document.getElementById('item-dimensions').value = item.dimensions || '';
        document.getElementById('item-material').value = item.material || 'ЛДСП Дуб Сонома';
        document.getElementById('item-price').value = item.price || 500;
        document.getElementById('item-status').value = item.status || 'В очереди';
        document.getElementById('item-description').value = item.description || '';
        document.getElementById('item-photo').value = item.photoLink || '';
        document.getElementById('item-address').value = item.address || '';

        document.getElementById('form-mode-title').textContent = `Редактирование заказа #${item.id} (Автор: ${item.author})`;
        document.getElementById('submit-order-btn').textContent = `Сохранить изменения в заказе #${item.id}`;
        document.getElementById('cancel-edit-btn').classList.remove('hidden');
        document.getElementById('screen-order-form').scrollIntoView({ behavior: 'smooth' });
    }

    function exitEditMode() {
        document.getElementById('order-form').reset();
        document.getElementById('edit-order-id').value = '';
        document.getElementById('form-mode-title').textContent = 'Оформление нового заказа мебели';
        document.getElementById('submit-order-btn').textContent = 'Подтвердить и сохранить заказ';
        document.getElementById('cancel-edit-btn').classList.add('hidden');
    }

    function runConsoleTests() {
        console.clear();
        console.group('=== ТЕСТИРОВАНИЕ МЕТОДОВ КЛАССА КОЛЛЕКЦИИ (ЛАБА 6.a / 6.b / 7) ===');

        console.log('1. getObjs(0, 5) — первые 5 объектов с сортировкой по дате:', getObjs(0, 5));
        console.log('2. getObjs(5, 5) — пагинация (следующие 5 объектов, начиная с 6-го):', getObjs(5, 5));
        console.log('3. getObjs(0, 10, { author: "Иванов Иван" }) — фильтрация по автору:', getObjs(0, 10, { author: 'Иванов Иван' }));
        console.log('4. getObj("1") — получение объекта с id="1":', getObj('1'));

        console.log('5. validateObj (валидный объект):', validateObj({
            id: '999',
            description: 'Тестовый заказ мебели',
            createdAt: new Date(),
            author: 'Тестер'
        }));

        console.log('6. validateObj (НЕвалидный объект — пустой author и нет description):', validateObj({
            id: '999',
            description: '',
            createdAt: new Date(),
            author: ''
        }));

        const testId = '777';
        console.log('7. addObj (добавление нового валидного заказа #777):', addObj({
            id: testId,
            itemName: 'Тестовый стеллаж из консоли',
            category: 'Шкафы',
            material: 'Массив дуба',
            dimensions: '2000x800x400',
            price: 750,
            description: 'Добавлено вызовом addObj() из консоли браузера.',
            createdAt: new Date(),
            author: 'Иванов Иван'
        }));

        console.log('8. addObj (попытка добавить невалидный объект):', addObj({ id: '', description: '' }));

        console.log('9. editObj("777", { description: "Обновленное описание через editObj", price: 890 }):',
            editObj(testId, { description: 'Обновленное описание через editObj', price: 890 })
        );
        console.log('   Проверка заказа #777 после редактирования:', getObj(testId));

        console.log('10. removeObj("777") — удаление тестового заказа:', removeObj(testId));
        console.log('    Проверка getObj("777") после удаления:', getObj(testId));

        console.groupEnd();
    }

    function initControllerEvents() {
        const filterForm = document.getElementById('filter-form');
        filterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            currentFilter = {
                search: document.getElementById('search-input').value.trim(),
                category: document.getElementById('filter-category').value,
                material: document.getElementById('filter-material').value,
                author: document.getElementById('filter-author').value
            };
            currentTop = 10;
            refreshUI();
        });

        filterForm.addEventListener('reset', () => {
            setTimeout(() => {
                currentFilter = {};
                currentTop = 10;
                refreshUI();
            }, 0);
        });

        document.getElementById('load-more-btn').addEventListener('click', () => {
            currentTop += 10;
            refreshUI();
        });

        const orderForm = document.getElementById('order-form');
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!currentUser) {
                errorView.showError('Доступ запрещен', 'Для создания или изменения заказа необходимо войти в систему.');
                return;
            }

            const editId = document.getElementById('edit-order-id').value;
            const payload = {
                itemName: document.getElementById('item-name').value.trim(),
                category: document.getElementById('item-category').value,
                dimensions: document.getElementById('item-dimensions').value.trim(),
                material: document.getElementById('item-material').value,
                price: Number(document.getElementById('item-price').value),
                status: document.getElementById('item-status').value,
                description: document.getElementById('item-description').value.trim(),
                photoLink: document.getElementById('item-photo').value.trim(),
                address: document.getElementById('item-address').value.trim()
            };

            if (!payload.itemName || !payload.description) {
                errorView.showError(
                    'Ошибка 400: Не заполнены обязательные поля (Поток 4А)',
                    'Пожалуйста, укажите наименование мебели и описание заказа (description < 200 символов).'
                );
                return;
            }

            if (editId) {
                if (editObj(editId, payload)) {
                    exitEditMode();
                    document.getElementById('screen-orders-manage').scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                const newId = String(Date.now()).slice(-4);
                if (addObj({
                    ...payload,
                    id: newId,
                    createdAt: new Date(),
                    author: currentUser
                })) {
                    exitEditMode();
                    document.getElementById('screen-orders-manage').scrollIntoView({ behavior: 'smooth' });
                }
            }
        });

        document.getElementById('cancel-edit-btn').addEventListener('click', () => {
            exitEditMode();
        });

        function handleDelegatedAction(e) {
            const btn = e.target.closest('button[data-action]');
            if (!btn) {
                return;
            }
            const action = btn.getAttribute('data-action');
            const id = btn.getAttribute('data-id');

            if (action === 'delete') {
                removeObj(id);
            } else if (action === 'edit') {
                startEditMode(id);
            }
        }

        document.getElementById('catalog-grid').addEventListener('click', handleDelegatedAction);
        document.getElementById('orders-list-body').addEventListener('click', handleDelegatedAction);

        document.getElementById('auth-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const login = document.getElementById('auth-login').value.trim();
            const role = document.getElementById('auth-role').value;
            if (login) {
                setUser(login, role);
                document.getElementById('screen-catalog').scrollIntoView({ behavior: 'smooth' });
            }
        });

        document.getElementById('logout-btn').addEventListener('click', () => {
            setUser(null, null);
        });

        document.getElementById('run-tests-btn').addEventListener('click', () => {
            runConsoleTests();
        });

        document.getElementById('reset-storage-btn').addEventListener('click', () => {
            model.resetToDefaults(initialObjInf);
            currentTop = 10;
            currentFilter = {};
            filterForm.reset();
            refreshUI();
        });

        document.getElementById('sort-price-btn').addEventListener('click', () => {
            model._objs.sort((a, b) => b.price - a.price);
            const visible = model._objs.slice(0, currentTop);
            listView.render(visible, model._objs.length, currentUser);
        });

        document.getElementById('sort-date-btn').addEventListener('click', () => {
            refreshUI();
        });
    }

    window.addObj = addObj;
    window.editObj = editObj;
    window.removeObj = removeObj;
    window.getObjs = getObjs;
    window.getObj = getObj;
    window.validateObj = validateObj;
    window.setUser = setUser;
    window.runConsoleTests = runConsoleTests;
    window.app = {
        model,
        addObj,
        editObj,
        removeObj,
        getObjs,
        getObj,
        validateObj,
        setUser,
        runConsoleTests
    };

    document.addEventListener('DOMContentLoaded', () => {
        initControllerEvents();
        refreshUI();
    });
})();