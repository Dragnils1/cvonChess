-----------------CvonCheess - шахматы с интегрированным движком stockfish11,  на базе WASM ----------------------

Это сайт с сырым кодом, здесь я просто подключил все необходимые библиотеки, совместил с движком и устранил проблемы с совместимостью.

Всего представлено 4 маршрута.
1)/ - домашняя страница
2)*/analistic - анализ партии, либо игра с движком (нужно доработать- при перемещении фигур вызывается функция полного ререндеринга доски) 
3)*/learn - небольшая заготовка для курсов или задач
4)*/player - игра по сети (два человека)

Это просто заготовка и не стоит воспринимать, как серьезный проект. Из основного что нужно доработать: подключить MongoDB для проверки аторизации\n, изменить дизайн страницы и структуру html, настроить подключения по socket.io .

Сейчас это приожение подходит максимум для локальной игры, либо онлайн игры с движком.

------------------------------------------------------------------------------------------------------------------

