// app.js - Основной файл JavaScript для сайта "Тюмень Кофейная"

// ============================================
// Конфигурация и глобальные переменные
// ============================================

// Данные о заведениях Тюмени
const placesData = [
    {
        id: 1,
        name: "Кофейня «Уют»",
        category: "coffee",
        rating: 4.7,
        address: "ул. Республики, 72, Тюмень",
        coordinates: [57.1522, 65.5272],
        description: "Уютная кофейня с домашней атмосферой и вкусным кофе. Идеальное место для работы и встреч.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        phone: "+7 (0000) 000000",
        website: "https://coffee-uyut.ru",
        openHours: "08:00-22:00",
        priceLevel: "$$",
        features: ["Wi-Fi", "Веранда", "Работает сейчас"],
        isOpen: true,
        hasWifi: true
    },
    {
        id: 2,
        name: "Ресторан «Сибирская кухня»",
        category: "restaurant",
        rating: 4.5,
        address: "ул. Ленина, 49, Тюмень",
        coordinates: [57.1620, 65.5345],
        description: "Ресторан с традиционными сибирскими блюдами. Попробуйте настоящие пельмени и строганину.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        phone: "+7 (0000) 000000",
        website: "https://sibirskaya-kuhnya.ru",
        openHours: "11:00-23:00",
        priceLevel: "$$$",
        features: ["Банкетный зал", "Живая музыка", "Работает сейчас"],
        isOpen: true,
        hasWifi: true
    },
    {
        id: 3,
        name: "Бар «Красный Лис»",
        category: "bar",
        rating: 4.8,
        address: "ул. Первомайская, 33, Тюмень",
        coordinates: [57.1568, 65.5450],
        description: "Стильный бар с авторскими коктейлями и живой музыкой по вечерам.",
        image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        phone: "+7 (0000) 000000",
        website: "https://redfoxbar.ru",
        openHours: "18:00-02:00",
        priceLevel: "$$",
        features: ["Кальян", "Танцпол", "Открывается в 18:00"],
        isOpen: false,
        hasWifi: true
    },
    {
        id: 4,
        name: "Кофейня «Буланже»",
        category: "coffee",
        rating: 4.9,
        address: "ул. Холодильная, 85, Тюмень",
        coordinates: [57.1450, 65.5680],
        description: "Популярная сеть кофеен с десертами и завтраками. Лучший кофе в городе.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        phone: "+7 (0000) 000000",
        website: "https://boulangerie.ru",
        openHours: "07:00-23:00",
        priceLevel: "$$",
        features: ["Завтраки", "Свежая выпечка", "Работает сейчас"],
        isOpen: true,
        hasWifi: true
    },
    {
        id: 5,
        name: "Ресторан «Итальянский дворик»",
        category: "restaurant",
        rating: 4.6,
        address: "ул. Мелик-Карамова, 59, Тюмень",
        coordinates: [57.1680, 65.5150],
        description: "Аутентичная итальянская кухня в центре города. Паста и пицца готовятся по традиционным рецептам.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        phone: "+7 (0000) 000000",
        website: "https://italian-dvorik.ru",
        openHours: "12:00-00:00",
        priceLevel: "$$$",
        features: ["Летняя веранда", "Итальянская кухня", "Работает сейчас"],
        isOpen: true,
        hasWifi: true
    },
    {
        id: 6,
        name: "Бар «Английский двор»",
        category: "bar",
        rating: 4.4,
        address: "ул. Орджоникидзе, 63, Тюмень",
        coordinates: [57.1370, 65.5380],
        description: "Английский паб с широким выбором пива и закусок. Уютная атмосфера и дружелюбный персонал.",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        phone: "+7 (0000) 000000",
        website: "https://english-yard.ru",
        openHours: "16:00-01:00",
        priceLevel: "$$",
        features: ["Разливное пиво", "Спортивные трансляции", "Открывается в 16:00"],
        isOpen: false,
        hasWifi: true
    },
    {
        id: 7,
        name: "Кофейня «Чердак»",
        category: "coffee",
        rating: 4.3,
        address: "ул. 8 Марта, 2, Тюмень",
        coordinates: [57.1525, 65.5500],
        description: "Кофейня на мансарде с видом на исторический центр. Тихий уголок для любителей кофе и книг.",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        phone: "+7 (0000) 000000",
        website: "https://cherdak-coffee.ru",
        openHours: "09:00-21:00",
        priceLevel: "$",
        features: ["Книги", "Тихая атмосфера", "Работает сейчас"],
        isOpen: true,
        hasWifi: true
    },
    {
        id: 8,
        name: "Ресторан «Уральские пельмени»",
        category: "restaurant",
        rating: 4.2,
        address: "ул. Герцена, 64, Тюмень",
        coordinates: [57.1420, 65.5250],
        description: "Специализируется на традиционных уральских пельменях с разными начинками.",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        phone: "+7 (0000) 000000",
        website: "https://ural-pelmeni.ru",
        openHours: "10:00-22:00",
        priceLevel: "$$",
        features: ["Детское меню", "Семейный ресторан", "Работает сейчас"],
        isOpen: true,
        hasWifi: false
    }
];

// Глобальные переменные
let map = null;
let placemarks = [];
let currentFilter = 'all';
let currentRatingFilter = 'all';
let currentSort = 'rating';
let openNowFilter = false;
let wifiFilter = false;
let userLocationMarker = null;

// ============================================
// Вспомогательные функции
// ============================================

/**
 * Получает русское название категории
 */
function getCategoryName(category) {
    const categories = {
        'coffee': 'Кофейня',
        'restaurant': 'Ресторан',
        'bar': 'Бар'
    };
    return categories[category] || 'Заведение';
}

/**
 * Получает иконку для категории
 */
function getIconForCategory(category) {
    const icons = {
        'coffee': 'https://img.icons8.com/color/48/coffee-to-go.png',
        'restaurant': 'https://img.icons8.com/color/48/restaurant.png',
        'bar': 'https://img.icons8.com/color/48/cocktail.png'
    };
    return icons[category] || 'https://img.icons8.com/color/48/marker.png';
}

/**
 * Создает HTML для отображения рейтинга в виде звезд
 */
function createStarsHTML(rating) {
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.3 && rating % 1 <= 0.7;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHtml += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            starsHtml += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHtml += '<i class="far fa-star"></i>';
        }
    }
    
    return starsHtml;
}

/**
 * Форматирует ценовой уровень
 */
function getPriceLevelText(priceLevel) {
    const priceLevels = {
        '$': 'Бюджетный',
        '$$': 'Средний',
        '$$$': 'Высокий',
        '$$$$': 'Премиум'
    };
    return priceLevels[priceLevel] || 'Не указано';
}

/**
 * Проверяет, открыто ли заведение сейчас
 */
function isPlaceOpenNow(place) {
    if (!place.isOpen) return false;
    
    // В реальном приложении здесь была бы логика проверки времени работы
    // Для примера просто используем поле isOpen
    return place.isOpen;
}

// ============================================
// Функции работы с картой
// ============================================

/**
 * Инициализирует Яндекс карту
 */
function initMap() {
    // Показать индикатор загрузки
    document.getElementById('map-loader').style.display = 'block';
    
    // Проверка загрузки API Яндекс Карт
    if (!window.ymaps) {
        console.error('Yandex Maps API не загружен');
        document.getElementById('map-loader').style.display = 'none';
        showMapError();
        return;
    }
    
    // Инициализация карты
    ymaps.ready(() => {
        try {
            // Создаем карту
            map = new ymaps.Map('map', {
                center: [57.1522, 65.5272],
                zoom: 12,
                controls: ['zoomControl', 'fullscreenControl', 'typeSelector']
            });
            
            // Добавляем метки на карту
            addPlacemarksToMap();
            
            // Скрываем индикатор загрузки
            document.getElementById('map-loader').style.display = 'none';
            
            // Создаем список заведений
            renderPlacesList(placesData);
            
            // Обновляем статистику
            updateStatistics();
            
            // Инициализируем поиск
            initSearch();
            
            console.log('Карта успешно инициализирована');
        } catch (error) {
            console.error('Ошибка при создании карты:', error);
            document.getElementById('map-loader').style.display = 'none';
            showMapError();
        }
    });
}

/**
 * Показывает сообщение об ошибке загрузки карты
 */
function showMapError() {
    const mapContainer = document.getElementById('map');
    mapContainer.innerHTML = `
        <div style="padding: 20px; text-align: center; background: #f8f5f0; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <h3 style="color: #d4a55a; margin-bottom: 10px;">Не удалось загрузить карту</h3>
            <p style="color: #666; margin-bottom: 20px;">Пожалуйста, проверьте подключение к интернету</p>
            <button onclick="location.reload()" style="background: #2c2416; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                Обновить страницу
            </button>
        </div>
    `;
}

/**
 * Добавляет метки заведений на карту
 */
function addPlacemarksToMap() {
    if (!map) return;
    
    // Очищаем предыдущие метки
    map.geoObjects.removeAll();
    placemarks = [];
    
    placesData.forEach(place => {
        // Создаем метку
        const placemark = new ymaps.Placemark(
            place.coordinates,
            {
                balloonContentHeader: `
                    <div class="place-info-window">
                        <h4>${place.name}</h4>
                        <span class="category">${getCategoryName(place.category)}</span>
                        <div class="rating">${place.rating} ★ (${place.priceLevel})</div>
                        <div class="address">${place.address}</div>
                        <p class="description">${place.description}</p>
                        <div><strong>Часы работы:</strong> ${place.openHours}</div>
                        <div><strong>Телефон:</strong> ${place.phone}</div>
                        <button onclick="showPlaceDetails(${place.id})" style="margin-top: 10px; background: #d4a55a; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer; width: 100%;">
                            Подробнее
                        </button>
                    </div>
                `,
                hintContent: place.name
            },
            {
                iconLayout: 'default#image',
                iconImageHref: getIconForCategory(place.category),
                iconImageSize: [40, 40],
                iconImageOffset: [-20, -40],
                balloonCloseButton: false
            }
        );
        
        // Сохраняем информацию о месте в метке
        placemark.properties.set({
            category: place.category,
            rating: place.rating,
            placeId: place.id,
            name: place.name,
            isOpen: place.isOpen,
            hasWifi: place.hasWifi
        });
        
        // Добавляем обработчики событий
        placemark.events.add('click', function() {
            highlightPlaceCard(place.id);
        });
        
        // Добавляем метку в массив и на карту
        placemarks.push(placemark);
        map.geoObjects.add(placemark);
    });
}

/**
 * Приближает карту к указанному месту
 */
function zoomToPlace(placeId) {
    const place = placesData.find(p => p.id === placeId);
    if (place && map) {
        map.setCenter(place.coordinates, 16);
        highlightPlaceCard(placeId);
    }
}

/**
 * Получает текущее местоположение пользователя
 */
function getUserLocation() {
    if (!navigator.geolocation) {
        alert('Геолокация не поддерживается вашим браузером');
        return;
    }
    
    // Показать индикатор загрузки
    const locationBtn = document.getElementById('get-location');
    const originalText = locationBtn.innerHTML;
    locationBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Определение...';
    locationBtn.disabled = true;
    
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const userCoords = [position.coords.latitude, position.coords.longitude];
            
            // Центрируем карту на местоположении пользователя
            if (map) {
                map.setCenter(userCoords, 14);
                
                // Удаляем предыдущую метку пользователя
                if (userLocationMarker) {
                    map.geoObjects.remove(userLocationMarker);
                }
                
                // Добавляем метку местоположения пользователя
                userLocationMarker = new ymaps.Placemark(userCoords, {
                    hintContent: 'Вы здесь',
                    balloonContent: 'Ваше текущее местоположение'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'https://img.icons8.com/color/48/user-location.png',
                    iconImageSize: [40, 40],
                    iconImageOffset: [-20, -40]
                });
                
                map.geoObjects.add(userLocationMarker);
                
                // Через 10 секунд убираем метку
                setTimeout(() => {
                    if (userLocationMarker) {
                        map.geoObjects.remove(userLocationMarker);
                        userLocationMarker = null;
                    }
                }, 10000);
            }
            
            // Восстанавливаем кнопку
            locationBtn.innerHTML = originalText;
            locationBtn.disabled = false;
        },
        (error) => {
            alert('Не удалось определить ваше местоположение. Пожалуйста, разрешите доступ к геолокации.');
            console.error('Ошибка геолокации:', error);
            
            // Восстанавливаем кнопку
            locationBtn.innerHTML = originalText;
            locationBtn.disabled = false;
        }
    );
}

// ============================================
// Функции отображения данных
// ============================================

/**
 * Отрисовывает список заведений
 */
function renderPlacesList(places) {
    const container = document.getElementById('places-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (places.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: white; border-radius: 10px;">
                <i class="fas fa-search" style="font-size: 48px; color: #d4a55a; margin-bottom: 20px;"></i>
                <h3 style="color: #2c2416; margin-bottom: 10px;">Ничего не найдено</h3>
                <p style="color: #666;">Попробуйте изменить параметры фильтрации</p>
                <button onclick="resetFilters()" style="margin-top: 20px; background: #2c2416; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                    Сбросить фильтры
                </button>
            </div>
        `;
        return;
    }
    
    // Сортируем места
    const sortedPlaces = sortPlaces(places);
    
    sortedPlaces.forEach(place => {
        const placeElement = createPlaceCard(place);
        container.appendChild(placeElement);
    });
}

/**
 * Создает карточку заведения
 */
function createPlaceCard(place) {
    const card = document.createElement('div');
    card.className = 'place-card';
    card.dataset.id = place.id;
    card.dataset.category = place.category;
    card.dataset.rating = place.rating;
    
    // Создаем бейдж статуса
    const statusBadge = place.isOpen ? 
        '<div class="category-badge">Открыто</div>' : 
        '<div class="category-badge" style="background-color: rgba(220, 53, 69, 0.9);">Закрыто</div>';
    
    // Создаем бейджи фич
    let featuresHtml = '';
    if (place.features && place.features.length > 0) {
        featuresHtml = '<div class="place-features">';
        place.features.slice(0, 3).forEach(feature => {
            featuresHtml += `<span class="feature-badge">${feature}</span>`;
        });
        featuresHtml += '</div>';
    }
    
    card.innerHTML = `
        <div class="place-image">
            <img src="${place.image}" alt="${place.name}" loading="lazy">
            ${statusBadge}
            <div class="price-badge">${place.priceLevel}</div>
        </div>
        <div class="place-info">
            <h3 class="place-name">${place.name}</h3>
            <div class="place-rating">
                <div class="stars">${createStarsHTML(place.rating)}</div>
                <span>${place.rating}</span>
            </div>
            <div class="place-address">
                <i class="fas fa-map-marker-alt"></i>
                <span>${place.address}</span>
            </div>
            <p>${place.description.substring(0, 100)}...</p>
            ${featuresHtml}
            <div class="place-actions">
                <button class="place-link" data-id="${place.id}">
                    <i class="fas fa-info-circle"></i> Подробнее
                </button>
                <button class="map-link" data-id="${place.id}">
                    <i class="fas fa-map-marker-alt"></i>
                </button>
            </div>
        </div>
    `;
    
    // Добавляем обработчики событий
    const detailsBtn = card.querySelector('.place-link');
    detailsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showPlaceDetails(place.id);
    });
    
    const mapBtn = card.querySelector('.map-link');
    mapBtn.addEventListener('click', (e) => {
        e.preventDefault();
        zoomToPlace(place.id);
    });
    
    // Добавляем эффект при наведении
    card.addEventListener('mouseenter', () => {
        highlightPlaceOnMap(place.id);
    });
    
    return card;
}

/**
 * Показывает детали места в модальном окне
 */
function showPlaceDetails(placeId) {
    const place = placesData.find(p => p.id === placeId);
    if (!place) return;
    
    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.id = 'place-details-modal';
    modal.className = 'modal';
    modal.style.display = 'flex';
    
    // Создаем бейджи фич
    let featuresHtml = '';
    if (place.features && place.features.length > 0) {
        featuresHtml = '<div style="margin-bottom: 15px;">';
        place.features.forEach(feature => {
            featuresHtml += `<span style="background: #f5f1eb; color: #5a5a5a; padding: 5px 10px; border-radius: 15px; font-size: 12px; font-weight: 600; margin-right: 5px; margin-bottom: 5px; display: inline-block;">${feature}</span>`;
        });
        featuresHtml += '</div>';
    }
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <img src="${place.image}" alt="${place.name}" class="modal-image">
                <button class="modal-close" onclick="closeModal()">×</button>
            </div>
            <div class="modal-body">
                <h2 class="modal-title">${place.name}</h2>
                <span class="modal-category">${getCategoryName(place.category)}</span>
                <div class="modal-rating">
                    ${createStarsHTML(place.rating)} ${place.rating}
                </div>
                ${featuresHtml}
                <div class="modal-details">
                    <p><strong>Адрес:</strong> ${place.address}</p>
                    <p><strong>Часы работы:</strong> ${place.openHours}</p>
                    <p><strong>Телефон:</strong> ${place.phone}</p>
                    <p><strong>Цены:</strong> ${getPriceLevelText(place.priceLevel)}</p>
                    <p><strong>Описание:</strong> ${place.description}</p>
                </div>
                <div class="modal-actions">
                    <button class="modal-btn call" onclick="callPlace('${place.phone}')">
                        <i class="fas fa-phone"></i> Позвонить
                    </button>
                    <button class="modal-btn website" onclick="openWebsite('${place.website}')">
                        <i class="fas fa-globe"></i> Сайт
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

/**
 * Закрывает модальное окно
 */
function closeModal() {
    const modal = document.getElementById('place-details-modal');
    if (modal) {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
    }
}

/**
 * Звонит по указанному номеру
 */
function callPlace(phoneNumber) {
    alert(`Звонок на номер: ${phoneNumber}\n\nВ реальном приложении будет открыт набор номера.`);
    // В реальном приложении: window.location.href = `tel:${phoneNumber}`;
}

/**
 * Открывает сайт заведения
 */
function openWebsite(url) {
    window.open(url, '_blank');
}

/**
 * Подсвечивает карточку заведения
 */
function highlightPlaceCard(placeId) {
    // Убираем подсветку со всех карточек
    document.querySelectorAll('.place-card').forEach(card => {
        card.style.transform = 'none';
        card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
    });
    
    // Подсвечиваем выбранную карточку
    const selectedCard = document.querySelector(`.place-card[data-id="${placeId}"]`);
    if (selectedCard) {
        selectedCard.style.transform = 'translateY(-5px)';
        selectedCard.style.boxShadow = '0 15px 30px rgba(212, 165, 90, 0.3)';
        
        // Прокручиваем к карточке
        selectedCard.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

/**
 * Подсвечивает метку на карте
 */
function highlightPlaceOnMap(placeId) {
    if (!map) return;
    
    // Находим метку
    const placemark = placemarks.find(pm => pm.properties.get('placeId') === placeId);
    if (placemark) {
        // Временно открываем балун
        placemark.balloon.open();
        
        // Закрываем балун через 2 секунды
        setTimeout(() => {
            if (placemark && placemark.balloon) {
                placemark.balloon.close();
            }
        }, 2000);
    }
}

// ============================================
// Функции фильтрации и сортировки
// ============================================

/**
 * Фильтрует заведения по выбранным критериям
 */
function filterPlaces() {
    let filteredPlaces = [...placesData];
    
    // Фильтр по категории
    if (currentFilter !== 'all') {
        filteredPlaces = filteredPlaces.filter(place => place.category === currentFilter);
    }
    
    // Фильтр по рейтингу
    if (currentRatingFilter !== 'all') {
        const minRating = parseFloat(currentRatingFilter);
        filteredPlaces = filteredPlaces.filter(place => place.rating >= minRating);
    }
    
    // Фильтр "Открыто сейчас"
    if (openNowFilter) {
        filteredPlaces = filteredPlaces.filter(place => isPlaceOpenNow(place));
    }
    
    // Фильтр "Есть Wi-Fi"
    if (wifiFilter) {
        filteredPlaces = filteredPlaces.filter(place => place.hasWifi);
    }
    
    // Обновляем список заведений
    renderPlacesList(filteredPlaces);
    
    // Обновляем метки на карте
    updateMapMarkers(filteredPlaces);
    
    // Показываем количество найденных мест
    updateResultsCount(filteredPlaces.length);
}

/**
 * Сортирует места по выбранному критерию
 */
function sortPlaces(places) {
    const sorted = [...places];
    
    switch(currentSort) {
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'price':
            // Сортируем по количеству $ в priceLevel
            const priceOrder = {'$': 1, '$$': 2, '$$$': 3, '$$$$': 4};
            return sorted.sort((a, b) => (priceOrder[a.priceLevel] || 0) - (priceOrder[b.priceLevel] || 0));
        default:
            return sorted;
    }
}

/**
 * Обновляет видимость меток на карте
 */
function updateMapMarkers(filteredPlaces) {
    if (!map) return;
    
    // Получаем ID отфильтрованных мест
    const filteredIds = filteredPlaces.map(place => place.id);
    
    // Показываем/скрываем метки
    placemarks.forEach(placemark => {
        const placeId = placemark.properties.get('placeId');
        
        if (filteredIds.includes(placeId)) {
            // Показываем метку
            placemark.options.set('visible', true);
        } else {
            // Скрываем метку
            placemark.options.set('visible', false);
            placemark.balloon.close();
        }
    });
}

/**
 * Обновляет счетчик найденных мест
 */
function updateResultsCount(count) {
    let counter = document.getElementById('results-counter');
    if (!counter) {
        counter = document.createElement('div');
        counter.id = 'results-counter';
        counter.className = 'results-counter';
        document.querySelector('.map-container').appendChild(counter);
    }
    
    const wordForms = ['место', 'места', 'мест'];
    const pluralForm = getPluralForm(count, wordForms);
    counter.textContent = `Найдено: ${count} ${pluralForm}`;
}

/**
 * Возвращает правильную форму слова для числа
 */
function getPluralForm(n, forms) {
    n = Math.abs(n) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) return forms[2];
    if (n1 > 1 && n1 < 5) return forms[1];
    if (n1 === 1) return forms[0];
    return forms[2];
}

/**
 * Сбрасывает все фильтры
 */
function resetFilters() {
    // Сбрасываем кнопки категорий
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === 'all') {
            btn.classList.add('active');
        }
    });
    
    // Сбрасываем фильтры рейтинга
    document.querySelectorAll('input[name="rating"]').forEach(input => {
        input.checked = input.value === 'all';
    });
    
    // Сбрасываем чекбоксы
    document.getElementById('open-now').checked = false;
    document.getElementById('wifi').checked = false;
    
    // Сбрасываем сортировку
    document.getElementById('sort-by').value = 'rating';
    
    // Сбрасываем переменные
    currentFilter = 'all';
    currentRatingFilter = 'all';
    currentSort = 'rating';
    openNowFilter = false;
    wifiFilter = false;
    
    // Применяем фильтры
    filterPlaces();
}

// ============================================
// Функции статистики
// ============================================

/**
 * Обновляет статистику на странице
 */
function updateStatistics() {
    const total = placesData.length;
    const coffeeCount = placesData.filter(p => p.category === 'coffee').length;
    const restaurantCount = placesData.filter(p => p.category === 'restaurant').length;
    const barCount = placesData.filter(p => p.category === 'bar').length;
    const avgRating = (placesData.reduce((sum, p) => sum + p.rating, 0) / total).toFixed(1);
    
    document.getElementById('total-places').textContent = total;
    document.getElementById('coffee-count').textContent = coffeeCount;
    document.getElementById('restaurant-count').textContent = restaurantCount;
    document.getElementById('bar-count').textContent = barCount;
    document.getElementById('avg-rating').textContent = avgRating;
}

// ============================================
// Функции поиска
// ============================================

/**
 * Инициализирует поиск по заведениям
 */
function initSearch() {
    const searchInput = document.createElement('input');
    searchInput.id = 'places-search';
    searchInput.type = 'text';
    searchInput.placeholder = 'Поиск заведений...';
    searchInput.style.cssText = `
        position: absolute;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
        padding: 12px 20px;
        border: none;
        border-radius: 25px;
        box-shadow: 0 2px 15px rgba(0,0,0,0.1);
        z-index: 100;
        font-size: 14px;
        outline: none;
    `;
    
    document.querySelector('.map-container').appendChild(searchInput);
    
    // Обработчик ввода в поиск
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchTerm = this.value.toLowerCase().trim();
            
            if (searchTerm.length < 2) {
                filterPlaces();
                return;
            }
            
            // Ищем по названию, описанию и адресу
            const results = placesData.filter(place => 
                place.name.toLowerCase().includes(searchTerm) ||
                place.description.toLowerCase().includes(searchTerm) ||
                place.address.toLowerCase().includes(searchTerm) ||
                getCategoryName(place.category).toLowerCase().includes(searchTerm)
            );
            
            renderPlacesList(results);
            updateMapMarkers(results);
            updateResultsCount(results.length);
        }, 300);
    });
}

// ============================================
// Управление картой
// ============================================

/**
 * Увеличивает масштаб карты
 */
function zoomIn() {
    if (map) {
        const currentZoom = map.getZoom();
        if (currentZoom < 19) {
            map.setZoom(currentZoom + 1);
        }
    }
}

/**
 * Уменьшает масштаб карты
 */
function zoomOut() {
    if (map) {
        const currentZoom = map.getZoom();
        if (currentZoom > 9) {
            map.setZoom(currentZoom - 1);
        }
    }
}

// ============================================
// Инициализация приложения
// ============================================

/**
 * Инициализирует все обработчики событий
 */
function initEventListeners() {
    // Обработчики для кнопок категорий
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.category;
            filterPlaces();
        });
    });
    
    // Обработчики для фильтров рейтинга
    document.querySelectorAll('input[name="rating"]').forEach(input => {
        input.addEventListener('change', function() {
            if (this.checked) {
                currentRatingFilter = this.value;
                filterPlaces();
            }
        });
    });
    
    // Обработчики для чекбоксов
    document.getElementById('open-now').addEventListener('change', function() {
        openNowFilter = this.checked;
        filterPlaces();
    });
    
    document.getElementById('wifi').addEventListener('change', function() {
        wifiFilter = this.checked;
        filterPlaces();
    });
    
    // Обработчик для сортировки
    document.getElementById('sort-by').addEventListener('change', function() {
        currentSort = this.value;
        filterPlaces();
    });
    
    // Обработчик для кнопки сброса фильтров
    document.getElementById('reset-filters').addEventListener('click', resetFilters);
    
    // Обработчик для кнопки определения местоположения
    document.getElementById('get-location').addEventListener('click', getUserLocation);
    
    // Обработчики для кнопок управления картой
    document.getElementById('zoom-in').addEventListener('click', zoomIn);
    document.getElementById('zoom-out').addEventListener('click', zoomOut);
    
    // Обработчики для ссылок в футере
    document.getElementById('about-link').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Тюмень Кофейная - это путеводитель по лучшим заведениям города. Наша цель - помочь вам найти идеальное место для любого повода.');
    });
    
    document.getElementById('add-place-link').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Чтобы добавить заведение, напишите нам на info@tyumen-coffee.ru с информацией о вашем заведении.');
    });
    
    // Глобальные обработчики клавиш
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Обработчик клика вне модального окна
    document.addEventListener('click', function(e) {
        const modal = document.getElementById('place-details-modal');
        if (modal && e.target === modal) {
            closeModal();
        }
    });
}

/**
 * Основная функция инициализации
 */
function initApp() {
    try {
        // Инициализируем карту (API уже загружен через script в HTML)
        if (typeof ymaps !== 'undefined') {
            ymaps.ready(() => {
                initMap();
                initEventListeners();
                console.log('Приложение успешно инициализировано');
            });
        } else {
            console.error('Yandex Maps API не загружен');
            showMapError();
        }
    } catch (error) {
        console.error('Ошибка инициализации приложения:', error);
        document.getElementById('map-loader').style.display = 'none';
        showMapError();
    }
}

// ============================================
// Запуск приложения
// ============================================

// Запускаем приложение когда DOM загружен
document.addEventListener('DOMContentLoaded', initApp);

// Экспортируем функции для использования в консоли
window.app = {
    placesData,
    filterPlaces,
    resetFilters,
    zoomToPlace,
    getUserLocation,
    showPlaceDetails,
    closeModal,
    zoomIn,
    zoomOut
};
