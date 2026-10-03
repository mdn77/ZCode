/** Russian translations */
const ruRU: Record<string, string> = {
  "startPlan.recommendation.subagentDescription":
    "В Start Plan доступна квота для {model}. Переключить модель этого субагента на Start Plan?",
  "startPlan.recommendation.preferenceSaveFailed":
    "Не удалось сохранить «Больше не спрашивать». Выбранный вариант будет применён только к этой операции.",
  "startPlan.recommendation.title": "Доступна квота Start Plan",
  "startPlan.recommendation.description":
    "В вашем Start Plan ещё осталась квота для {model}. Использовать её?",
  "startPlan.recommendation.switch": "Сменить план",
  "startPlan.recommendation.decline": "Не сейчас",
  "startPlan.recommendation.dismiss": "Больше не показывать",
  "occupationOnboarding.stepMode": "Режим интерфейса",
  "occupationOnboarding.modeTitle": "Выберите режим интерфейса",
  "occupationOnboarding.modeDescription":
    "Как вам удобнее, чтобы ZCode показывал процесс работы?",
  "occupationOnboarding.coding": "Режим кодинга",
  "occupationOnboarding.codingDescription":
    "Я хочу видеть код, вывод команд и подробности изменений на всех этапах разработки.",
  "occupationOnboarding.officeMode": "Офисный режим",
  "occupationOnboarding.officeModeDescription":
    "Мне важен ход задач и результаты — без кода, вывода команд и других технических деталей.",
  "chat.officeSuggestions.setting": "Проактивные подсказки задач",
  "chat.officeSuggestions.settingDescription":
    "Доступно только в режиме Office.",
  "chat.plugins.browseMarketplace": "Открыть маркетплейс плагинов",
  "chat.plugins.loadError":
    "Не удалось загрузить плагины. Откройте меню заново и попробуйте ещё раз.",
  "chat.officeSuggestions.saveError":
    "Не удалось сохранить настройки подсказок. Попробуйте ещё раз.",
  "chat.officeSuggestions.refresh": "Показать ещё",
  "chat.officeSuggestions.closeTitle": "Отключить подсказки задач?",
  "chat.officeSuggestions.closeDescription":
    "Их можно снова включить в настройках.",
  "chat.officeSuggestions.closeError":
    "Не удалось отключить подсказки. Попробуйте ещё раз.",
  "occupationOnboarding.suggestionsHeading": "Предлагаемые задачи",
  "occupationOnboarding.infrastructure": "QA / Эксплуатация / Безопасность",
  "occupationOnboarding.product": "Продукт / Проект / Решения",
  "occupationOnboarding.design": "UI / UX / Визуальный дизайн",
  "occupationOnboarding.creator": "Медиа / Создание контента",
  "occupationOnboarding.operations": "Операции / Торговля / Клиентский сервис",
  "occupationOnboarding.marketing": "Маркетинг / Бренд / PR",
  "occupationOnboarding.finance": "Финансы / Бухгалтерия / Консалтинг",
  "occupationOnboarding.independent": "Предпринимательство / Фриланс / OPC",
  "occupationOnboarding.accounting": "Бухгалтерия / Аудит / Налоги",
  "occupationOnboarding.legal": "Юриспруденция / Администрирование / HR",
  "occupationOnboarding.skip": "Пропустить",
  "occupationOnboarding.start": "Начать",
  "occupationOnboarding.continue": "Далее",
  "occupationOnboarding.saving": "Сохранение…",
  "occupationOnboarding.back": "Назад",
  "occupationOnboarding.error": "Не удалось сохранить. Попробуйте снова.",
  "occupationOnboarding.stepRole": "Ваша работа",
  "occupationOnboarding.stepPreferences": "Предпочтения",
  "occupationOnboarding.heroTitle": "Просто, быстро, вайб!",
  "occupationOnboarding.heroDescription":
    "Решайте сложные задачи с несколькими агентами.\nОставайтесь у руля, где бы вы ни были.",
  "occupationOnboarding.title": "Чем вы занимаетесь?",
  "occupationOnboarding.description":
    "Выберите вариант, ближайший к вашей повседневной работе.",
  "occupationOnboarding.office": "Офисный специалист",
  "occupationOnboarding.developer": "Разработка ПО / Данные / ИИ",
  "occupationOnboarding.student": "Учёба / Преподавание / Исследования",
  "occupationOnboarding.other": "Другие профессии",
  "occupationOnboarding.preferences": "Настройте рабочий ассистент под себя",
  "occupationOnboarding.preferencesDescription":
    "Выберите, какие функции включить.",
  "occupationOnboarding.migration": "Перенести диалоги",
  "occupationOnboarding.migrationDescription":
    "Перенести историю диалогов из Claude Code",
  "occupationOnboarding.memory": "Включить память проекта",
  "occupationOnboarding.memoryDescription":
    "Пусть ZCode запоминает ваши предпочтения и рабочий контекст.",
  "occupationOnboarding.suggestions": "Включить проактивные подсказки задач",
  "occupationOnboarding.suggestionsDescription":
    "Показывать подсказки в новых диалогах. Нажмите, чтобы подставить их в поле ввода.",
  "occupationOnboarding.close": "Выйти из первичной настройки",
  "startup.global.silent": "Запуск ZCode",
  "startup.global.upgrading": "Обновление локальных данных",
  "startup.global.initializing": "Инициализация локальных данных",
  "startup.global.waiting": "Ожидание подготовки базы данных",
  "startup.global.saving": "Сохранение обновлений",
  "startup.global.finishing": "Завершение запуска",
  "startup.global.servicesFailed":
    "Локальные данные готовы, но службы приложения не запустились. Скопируйте диагностику, затем закройте и снова откройте ZCode.",
  "startup.global.starting": "Подготовка локальных данных",
  "startup.global.ready": "Локальные данные готовы",
  "startup.global.failed": "Не удалось подготовить данные к запуску",
  "startup.global.help":
    "ZCode откроется после завершения подготовки. Большие истории могут обрабатываться дольше. Пожалуйста, не закрывайте приложение.",
  "startup.global.diagnostic": "Диагностический ID",
  "startup.global.copy": "Копировать диагностику",
  "startup.global.exit": "Выход",
  "startup.global.copied": "Скопировано",
  "startup.global.copyFailed":
    "Не удалось скопировать. Запишите диагностический ID.",
  "startup.global.error.corrupt":
    "Похоже, база данных повреждена. Сохраните данные и диагностику и обратитесь в поддержку. Не удаляйте базу данных.",
  "startup.database.checking": "Проверка истории",
  "startup.database.migrating": "Обновление истории",
  "startup.database.committing": "Сохранение обновления",
  "startup.database.ready": "История готова",
  "startup.database.failed": "Не удалось подготовить историю",
  "startup.database.help":
    "Проект откроется, когда всё будет готово. Не закрывайте приложение.",
  "startup.database.failedHelp":
    "Исходная база данных сохранена. Проверьте диагностические журналы, устраните проблему и повторите попытку.",
  "startup.database.elapsed": "Прошло: {minutes} мин {seconds} с",
  "startup.database.longRunning":
    "Большие истории могут обрабатываться дольше. Приложение всё ещё ждёт завершения подготовки базы данных.",
  "bashOutput.open": "Показать вывод для {title}",
  "bashOutput.fullFile": "Полный файл вывода",
  "bashOutput.retry": "Повторить",
  "bashOutput.empty": "Вывода пока нет",
  "bashOutput.status.running": "Выполняется",
  "bashOutput.error.unavailable": "Задача или сессия недоступны",
  "bashOutput.error.unsupported":
    "Эта среда выполнения не поддерживает фоновый вывод",
  "purchase.entry.loading": "Загрузка планов…",
  "purchase.entry.retry": "Не удалось загрузить планы. Повторить",
  "bots.runtime.deliveryFailed": "Не удалось доставить ответ бота",
  "bots.runtime.deliveryFailedDescription":
    "Сообщение не удалось доставить. Пришлите приведённые ниже детали, чтобы разобраться в проблеме. Уведомление исчезнет после следующей успешной отправки.",
  "chat.selections.previewSideBlocked":
    "Сначала разберите ожидающие запросы в основной задаче или боковом диалоге.",
  "chat.selections.previewSideUnavailable":
    "Используйте редактируемую основную задачу с поддержкой боковых диалогов.",
  "chat.selections.file": "{name} · Фрагмент",
  "chat.selections.mixedCount": "Фрагментов: {count}",
  "chat.previewCards.openExternalFailed":
    "Не удалось открыть этот файл в браузере",
  "settings.modelProvider.connectionMode.switchToStartPlan":
    "Переключиться на Start Plan",
  "chat.composer.contextSearchHint":
    "Введите текст для поиска плагинов, файлов и чатов",
  "chat.composer.contextShortcut": "Добавить контекст",
  "chat.composer.capabilityShortcut": "Выбрать возможности",
  "chat.composer.skillShortcut": "Выбрать скиллы",
  "chat.composer.addSection": "Добавить",
  "chat.composer.addWorkflow": "Воркфлоу",
  "chat.composer.attachment": "Вложения",
  "chat.permission.feedback.ariaLabel":
    "Необязательный отзыв для модели при отказе",
  "chat.permission.feedback.placeholder":
    "Подскажите модели, что сделать вместо этого…",
  "offPeak.chatCreated.defaultTitle": "Фоновая задача",
  "offPeak.chatCreated.queued": "В очереди на время простоя",
  "offPeak.chatCreated.queuedAt": "#{position} в очереди",
  "offPeak.chatCreated.open": "Перейти к фоновым задачам",
  "settings.computerUse.disabledToast":
    "Computer Use отключён. Чтобы изменение затронуло существующие диалоги, перезапустите ZCode.",
  "settings.modelProvider.connectionUnavailableNotice":
    "Текущий план недоступен.",
  "settings.modelProvider.switchConnection": "Переключиться на «{connection}»",
  "settings.modelProvider.connectionSuggestionStale":
    "Доступность планов изменилась. Выберите подключение в настройках моделей.",
  "settings.modelProvider.connectionSwitchFailed":
    "Не удалось переключить план. Исходное подключение не изменилось. Повторите попытку.",
  "settings.modelProvider.connectionUnavailable":
    "Выбранное подключение недоступно. Выберите другое подключение.",
  "settings.modelProvider.navigationUnavailable":
    "Запрошенный провайдер недоступен. Выберите другого провайдера.",
  "workspace.context.lastActivity": "Последняя активность: {time}",
  "common.loading": "Загрузка...",
  "common.listSeparator": ", ",
  "common.generating": "Генерация...",
  "common.connecting": "Подключение...",
  "common.cancel": "Отмена",
  "common.retry": "Повторить",
  "common.close": "Закрыть",
  "chat.plan.removeMarker": "Отключить режим плана",
  "common.confirm": "Подтвердить",
  "common.more": "Ещё",
  "common.refresh": "Обновить",
  "common.open": "Открыть",
  "common.save": "Сохранить",
  "common.saving": "Сохранение...",
  "common.delete": "Удалить",
  "conversationShare.trigger": "Поделиться",
  "conversationShare.shareTitle": "Название публикации",
  "conversationShare.permissionLabel": "Доступ",
  "conversationShare.permission.private": "Только я",
  "conversationShare.permission.privateHint": "Для личных заметок",
  "conversationShare.permission.linkViewer":
    "Все, у кого есть ссылка, могут просматривать",
  "conversationShare.permission.linkViewerHint":
    "Импорт и продолжение недоступны",
  "conversationShare.permission.linkViewerSummary":
    "Обладатели ссылки могут просматривать",
  "conversationShare.permission.linkEditor":
    "Все, у кого есть ссылка, могут импортировать и продолжить",
  "conversationShare.permission.linkEditorHint": "Импорт в ZCode",
  "conversationShare.permission.linkEditorSummary":
    "Обладатели ссылки могут импортировать и продолжить",
  "conversationShare.permission.privateSummary": "Только я",
  "conversationShare.openLink": "Открыть страницу публикации",
  "conversationShare.result.title": "Публикация создана",
  "conversationShare.result.description":
    "Ссылка готова: её можно скопировать или открыть в браузере.",
  "conversationShare.result.openInBrowser": "Открыть в браузере",
  "conversationShare.result.dismiss": "Закрыть результат публикации",
  "conversationShare.generatingLink": "Создание ссылки для публикации",
  "conversationShare.copyLink": "Копировать ссылку",
  "conversationShare.copySucceeded": "Ссылка для публикации скопирована",
  "conversationShare.publishSucceeded": "Ссылка для публикации создана",
  "conversationShare.publishSucceededWithSkips":
    "Ссылка для публикации создана; пропущено файлов: {count}",
  "conversationShare.copyFailed":
    "Не удалось скопировать ссылку для публикации",
  "conversationShare.publishFailed":
    "Не удалось создать ссылку для публикации. Попробуйте снова.",
  "conversationShare.error.authenticationRequired":
    "Публикация доступна только после входа в аккаунт. Срок действия входа истёк; войдите снова и повторите попытку.",
  "conversationShare.error.featureDisabled":
    "Публикация недоступна для этого проекта или типа подключения.",
  "conversationShare.error.artifactNotAllowed":
    "Тип файла предпросмотра не поддерживается для публикации. Отмените выбор этого диалога и повторите попытку.",
  "conversationShare.error.limitExceeded":
    "Выбранный диалог или его файлы превышают лимит публикации. Выберите меньше диалогов.",
  "conversationShare.error.rateLimited":
    "Слишком много попыток публикации. Подождите немного и попробуйте снова.",
  "conversationShare.error.network":
    "Не удалось связаться со службой публикации. Проверьте подключение и попробуйте снова.",
  "conversationShare.error.safetyCheckTimeout":
    "Проверка безопасности публикации заняла слишком много времени. Попробуйте позже.",
  "conversationShare.error.invalidSelection":
    "Выбранный диалог изменился. Заново откройте панель публикации и выберите его снова.",
  "conversationShare.error.invalidConversation":
    "В выбранном содержимом есть структура, которую пока нельзя опубликовать. Отмените выбор активных ходов или встроенных изображений, убедитесь, что файлы предпросмотра готовы, и повторите попытку.",
  "conversationShare.error.runningTurn":
    "Выбранный ход ещё выполняется. Отмените его выбор и дождитесь завершения перед публикацией.",
  "conversationShare.error.streamingRow":
    "Выбранный ответ ещё генерируется. Дождитесь завершения хода перед публикацией.",
  "conversationShare.error.activeToolCall":
    "Выбранный вызов инструмента ещё активен. Дождитесь его завершения перед публикацией.",
  "conversationShare.error.activeSubagent":
    "Выбранная подзадача ещё выполняется. Дождитесь её завершения перед публикацией.",
  "conversationShare.error.inputAttachment":
    "Не удалось опубликовать вложение пользовательского ввода. Проверьте, что оно существует, и попробуйте снова.",
  "conversationShare.error.inlineToolImage":
    "Выбранный ход содержит неподдерживаемое встроенное изображение из инструмента. Отмените выбор этого хода и повторите попытку.",
  "conversationShare.error.unsupportedTimeline":
    "Выбранный ход содержит неподдерживаемую запись о ветвлении или восстановлении. Отмените выбор этого хода и повторите попытку.",
  "conversationShare.error.unsafeUrl":
    "Выбранное содержимое содержит локальный или встроенный файловый URL. Удалите его перед публикацией.",
  "conversationShare.error.missingProductTurn":
    "Выбранный диалог неполон. Заново откройте панель публикации и снова выберите ход.",
  "conversationShare.error.artifactTypeNotAllowed":
    "Тип файла предпросмотра не разрешён для публикации. Отмените выбор соответствующего хода и повторите попытку.",
  "conversationShare.error.artifactExtensionMissing":
    "У файла предпросмотра нет допустимого расширения. Проверьте файл и повторите попытку.",
  "conversationShare.error.artifactOutsideWorkspace":
    "Файл предпросмотра находится вне текущего проекта. Пересоздайте или переместите его и повторите попытку.",
  "conversationShare.error.artifactChanged":
    "Файл предпросмотра изменился перед публикацией. Пересоздайте его и повторите попытку.",
  "conversationShare.error.artifactReadFailed":
    "Не удалось прочитать файл предпросмотра. Проверьте, что он существует и доступен, и повторите попытку.",
  "conversationShare.error.artifactSizeLimit":
    "Размер файла превышает лимит для одного файла. Отмените выбор этого хода или используйте файл меньшего размера, затем повторите попытку.",
  "conversationShare.error.artifactManifest":
    "Манифест файла предпросмотра неполон. Пересоздайте файл и обновите панель публикации.",
  "conversationShare.error.payloadLimit":
    "Выбранный диалог или файлы превышают лимит публикации. Выберите меньше и повторите попытку.",
  "conversationShare.error.disclosureRequired":
    "Просмотрите и подтвердите публикуемое содержимое перед созданием ссылки.",
  "conversationShare.error.uploadFailed":
    "Не удалось полностью загрузить файл. Проверьте, что он существует, затем повторите попытку.",
  "conversationShare.error.connectionUnavailable":
    "Подключение настольного приложения не готово. Заново откройте панель публикации и попробуйте снова.",
  "conversationShare.error.noShareableContent":
    "В текущем выборе нет содержимого, доступного для публикации. Выберите другие ходы.",
  "conversationShare.error.summary":
    "Не удалось опубликовать, найдено проблем: {count}. Подробности см. на панели публикации.",
  "conversationShare.issue.artifactTypeNotAllowed":
    "Ход {turnOrdinal}: {artifactDisplayName} ({artifactType}) нельзя опубликовать, он будет пропущен. Поддерживаемые типы: {allowedFormats}.",
  "conversationShare.issue.artifactExtensionMissing":
    "Ход {turnOrdinal}: у файла предпросмотра нет допустимого расширения. Проверьте имя файла и попробуйте снова.",
  "conversationShare.issue.artifactOutsideWorkspace":
    "Ход {turnOrdinal}: файл предпросмотра находится вне текущего проекта. Переместите или пересоздайте его и попробуйте снова.",
  "conversationShare.issue.artifactChanged":
    "Ход {turnOrdinal}: {artifactDisplayName} изменился во время чтения. Пересоздайте файл и попробуйте снова.",
  "conversationShare.issue.artifactReadFailed":
    "Ход {turnOrdinal}: не удалось прочитать {artifactDisplayName}. Проверьте, что он существует и доступен.",
  "conversationShare.issue.inputAttachment":
    "Ход {turnOrdinal} содержит вложение пользовательского ввода, которое не поддерживается в этой версии. Отмените выбор этого хода.",
  "conversationShare.issue.inputAttachmentUnavailable":
    "Ход {turnOrdinal} содержит вложение пользовательского ввода, которое больше не существует или не читается.",
  "conversationShare.issue.inlineToolImage":
    "Ход {turnOrdinal} содержит встроенное изображение из инструмента, которое нельзя включить в публичную публикацию.",
  "conversationShare.issue.runningTurn":
    "Ход {turnOrdinal} ещё выполняется. Дождитесь завершения или отмените его выбор.",
  "conversationShare.issue.streamingRow":
    "Ход {turnOrdinal} ещё генерируется. Дождитесь завершения или отмените его выбор.",
  "conversationShare.issue.activeToolCall":
    "В ходе {turnOrdinal} есть незавершённый вызов инструмента. Отмените выбор этого хода.",
  "conversationShare.issue.activeSubagent":
    "В ходе {turnOrdinal} выполняется подзадача. Дождитесь её завершения или отмените выбор этого хода.",
  "conversationShare.issue.unsupportedTimeline":
    "Ход {turnOrdinal} содержит запись таймлайна, которую нельзя включить в публичную публикацию.",
  "conversationShare.issue.noShareableContent":
    "В текущем выборе нет содержимого, доступного для публикации. Выберите другие ходы.",
  "conversationShare.issue.unsafeUrl":
    "Ход {turnOrdinal} содержит локальный или встроенный файловый адрес, который не поддерживается. Удалите его и попробуйте снова.",
  "conversationShare.issue.missingProductTurn":
    "В выборе нет полного идентификатора хода. Выберите диалог заново.",
  "conversationShare.issue.invalidSelection":
    "Выбранные ходы изменились. Вернитесь к выбору и отметьте их заново.",
  "conversationShare.issue.invalidConversation":
    "Выбранный диалог неполон. Отмените выбор затронутых ходов и попробуйте снова.",
  "conversationShare.issue.staleConversation":
    "Диалог изменился во время подготовки публикации. Вернитесь к выбору и попробуйте снова.",
  "conversationShare.issue.rowsLimit":
    "Строк в диалоге: {actual}, выше лимита {limit}. Уменьшите число выбранных ходов.",
  "conversationShare.issue.artifactCountLimit":
    "Количество артефактов в диалоге — {actual}, выше лимита {limit}. Уменьшите число выбранных ходов.",
  "conversationShare.issue.artifactSizeLimit":
    "Размер {artifactDisplayName} — {actual}, выше лимита {limit} на файл. Отмените выбор хода или пересоздайте файл меньшего размера.",
  "conversationShare.issue.artifactTotalSizeLimit":
    "Суммарный размер артефактов — {actual}, выше лимита {limit}. Уменьшите артефакты или отмените выбор затронутых ходов.",
  "conversationShare.issue.payloadSizeLimit":
    "Размер запроса публикации — {actual}, выше лимита {limit}. Уменьшите число выбранных ходов или артефактов.",
  "conversationShare.issue.artifactManifest":
    "Манифест артефактов предпросмотра дублируется или неполон. Пересоздайте файлы и обновите панель публикации.",
  "conversationShare.issue.uploadIncomplete":
    "Подтверждение загрузки для {artifactDisplayName} не совпадает с файлом. Убедитесь, что файл не менялся, и попробуйте снова.",
  "conversationShare.issue.unknown":
    "Публикация не удалась на этапе «{phase}»; сервер не вернул полезных подробностей. Попробуйте позже.",
  "conversationShare.issue.details": "Сведения об ошибке",
  "conversationShare.issue.requestIdLabel": "ID запроса на сервере",
  "conversationShare.issue.requestId": "ID запроса на сервере: {requestId}",
  "conversationShare.issue.requestIdMissing":
    "ID запроса на сервере не получен.",
  "conversationShare.issue.copyRequestId": "Копировать ID запроса",
  "conversationShare.issue.deselectTurn": "Отменить выбор этого хода",
  "conversationShare.issue.retryPreflight": "Проверить снова",
  "conversationShare.issue.more": "Ещё проблем не показано: {count}.",
  "conversationShare.warning.summary":
    "Публикация выполнена. Пропущено файлов: {count}; они не включены в ссылку.",
  "conversationShare.warning.artifactSkipped":
    "Ход {turnOrdinal}: {artifactDisplayName} не удалось прочитать, поэтому он пропущен. Если он должен был попасть в публикацию, пересоздайте файл и опубликуйте снова.",
  "conversationShare.warning.inputAttachmentSkipped":
    "Ход {turnOrdinal}: вложение пользовательского ввода не включено в публикацию; текст хода публикуется.",
  "conversationShare.warning.inputAttachmentUnavailable":
    "Ход {turnOrdinal}: {artifactDisplayName} больше не существует или не читается и был пропущен.",
  "conversationShare.warning.artifactTypeSkipped":
    "Ход {turnOrdinal}: {artifactDisplayName} ({artifactType}) не поддерживается и был пропущен. Поддерживаемые типы: {allowedFormats}.",
  "conversationShare.warning.artifactChangedSkipped":
    "Ход {turnOrdinal}: {artifactDisplayName} изменился перед публикацией и был пропущен.",
  "conversationShare.partial.panelLabel": "Выберите диалоги для публикации",
  "conversationShare.selection.reopen": "Открыть панель выбора заново",
  "conversationShare.partial.empty": "Нет завершённых диалогов для публикации",
  "conversationShare.partial.selectionStageHint":
    "Выберите завершённые диалоги для публикации и перейдите к следующему шагу.",
  "conversationShare.partial.preflightChecking":
    "Проверка публикуемого содержимого…",
  "conversationShare.partial.preflightBlocked":
    "Часть содержимого нельзя опубликовать. Сначала исправьте проблемы ниже.",
  "conversationShare.partial.preflightSkipped":
    "Файлов не войдёт в публикацию: {count}. Они будут пропущены, если вы продолжите.",
  "conversationShare.partial.preflightDeferred":
    "Некоторые файлы пока нельзя проверить. Они будут проверены повторно при публикации.",
  "conversationShare.partial.continueWithSkips":
    "Продолжить (файлов будет пропущено: {count})",
  "conversationShare.partial.selectionHint":
    "Проверьте название, доступ и подтверждение отсутствия конфиденциальных данных, затем создайте ссылку.",
  "conversationShare.partial.confirmationTitle":
    "Подтвердите публикуемое содержимое",
  "conversationShare.publish.failedTitle": "Не удалось опубликовать",
  "conversationShare.publish.failedDescription":
    "Исправьте проблему ниже и повторите попытку.",
  "conversationShare.publish.retry": "Повторить генерацию",
  "conversationShare.publish.footerMeta":
    "Публикация ходов диалога: {selected}, доступ: {access}",
  "conversationShare.publish.failedFooter":
    "Измените содержимое и повторите публикацию",
  "conversationShare.partial.selectAll": "Выбрать все",
  "conversationShare.partial.deselectAll": "Снять все",
  "conversationShare.partial.selectionCount": "{selected}/{total}",
  "conversationShare.partial.selectedSummary": "Выбрано {selected} / {total}",
  "conversationShare.partial.cancel": "Отмена",
  "conversationShare.partial.next": "Далее",
  "conversationShare.partial.back": "Назад",
  "conversationShare.partial.confirm": "Создать ссылку для публикации",
  "conversationShare.partial.publishing": "Генерация…",
  "conversationShare.progress.collecting": "Сбор диалога и артефактов…",
  "conversationShare.progress.uploading": "Загрузка артефактов…",
  "conversationShare.progress.checking":
    "Ожидание завершения проверок безопасности…",
  "conversationShare.progress.collectingFailed":
    "Не удалось собрать диалог и артефакты",
  "conversationShare.progress.uploadingFailed":
    "Не удалось загрузить артефакты",
  "conversationShare.progress.checkingFailed":
    "Проверки безопасности не пройдены",
  "conversationShare.phase.collecting": "Подготовка содержимого",
  "conversationShare.phase.uploading": "Загрузка артефактов",
  "conversationShare.phase.checking": "Проверки безопасности",
  "conversationShare.phase.collectingComplete": "Диалог и артефакты готовы",
  "conversationShare.phase.uploadingComplete": "Артефакты загружены",
  "conversationShare.phase.uploadingActive": "Загрузка {completed} / {total}",
  "conversationShare.phase.collectingPending": "Ожидание запуска",
  "conversationShare.phase.uploadingPending": "Ожидание подготовки",
  "conversationShare.phase.checkingPending": "Ожидание загрузки",
  "conversationShare.phase.failed": "Ошибка",
  "conversationShare.publicWarning":
    "Проверьте диалоги, входные и выходные данные инструментов и артефакты на отсутствие конфиденциальной информации.",
  "conversationShare.disclosure.description":
    "Система не определяет конфиденциальную информацию автоматически.",
  "conversationShare.disclosure.checkbox":
    "Я просмотрел(а) публикуемое содержимое и подтверждаю, что оно не содержит конфиденциальной информации.",
  "conversationShare.disclosure.scope.trigger": "Показать область проверки",
  "conversationShare.disclosure.scope.title": "Область проверки",
  "conversationShare.disclosure.scope.reviewLabel": "Проверьте эти области",
  "conversationShare.disclosure.scope.conversation":
    "Содержимое диалога: сообщения пользователя, ответы ассистента и названия задач",
  "conversationShare.disclosure.scope.tools":
    "Входные и выходные данные инструментов: команды, параметры и результаты",
  "conversationShare.disclosure.scope.generated":
    "Сгенерированное содержимое: код, файлы и содержимое предпросмотра",
  "conversationShare.disclosure.scope.sensitiveLabel":
    "Проверьте особенно внимательно",
  "conversationShare.disclosure.scope.sensitive":
    "Учётные данные, токены, пароли, приватные ключи, внутренние адреса и персональные данные",
  "conversationShare.disclosure.scope.note":
    "Система не проверяет и не очищает это содержимое автоматически. Проверьте каждый пункт перед публикацией.",
  "conversationShare.import.source": "Импортировано из публикации: {title}",
  "conversationShare.import.dividerLabel": "Импортировано из публикации",
  "conversationShare.import.fallbackRemoteWorkspace":
    "Импортировано из публикации: {title}. Текущий проект удалённый, импорт в него пока не поддерживается, поэтому сессия создана в локальном проекте {workspacePath}.",
  "conversationShare.import.fallbackDefaultWorkspace":
    "Импортировано из публикации: {title}. Целевой проект недоступен, поэтому сессия создана в проекте по умолчанию {workspacePath}.",
  "conversationShare.import.downloading":
    "Загрузка опубликованных файлов: {completed}/{total}",
  "conversationShare.import.installing": "Установка опубликованных файлов",
  "conversationShare.import.committing": "Создание диалога из публикации",
  "conversationShare.import.complete": "Импорт публикации завершён",
  "conversationShare.import.loginRequired":
    "Эту публикацию нельзя импортировать анонимно. Войдите в ZCode и попробуйте снова",
  "conversationShare.import.notFound":
    "Публикация недоступна для этого аккаунта",
  "conversationShare.import.expired":
    "Срок действия публикации истёк. Попросите автора создать новую",
  "conversationShare.import.integrityFailed":
    "Проверка файлов публикации не пройдена; импорт остановлен",
  "conversationShare.import.failed":
    "Не удалось импортировать публикацию. Проверьте сеть и повторите попытку",
  "conversationShare.import.integrityFailedWithArtifact":
    "Проверка опубликованного файла {artifactDisplayName} не пройдена; импорт остановлен. Попросите автора создать новую ссылку.",
  "conversationShare.import.failedWithArtifact":
    "Не удалось загрузить опубликованный файл {artifactDisplayName}. Проверьте сеть и повторите попытку.",
  "conversationShare.import.retry": "Повторить",
  "settings.resourceGroup.item.one": "{count} элемент",
  "settings.resourceGroup.item.other": "{count} элементов",
  "pluginCreator.add": "Добавить",
  "pluginCreator.create": "Создать плагин",
  "pluginCreator.addMarketplace": "Добавить маркетплейс плагинов",
  "pluginCreator.unavailable":
    "Plugin Creator недоступен. Проверьте подключение, затем включите или восстановите Plugin Creator в маркетплейсе и повторите попытку.",
  "settings.create.action": "Создать",
  "settings.resourceActions.import": "Импортировать",
  "settings.resourceActions.export": "Экспортировать",
  "settings.resourceActions.more": "Дополнительные действия",
  "carousel.previousSlide": "Предыдущий слайд",
  "carousel.nextSlide": "Следующий слайд",
  "quickPick.title": "Палитра команд",
  "quickPick.description": "Поиск и запуск команд, доступных в этом проекте.",
  "quickPick.placeholder": "Введите команду",
  "quickPick.empty": "Подходящих команд нет.",
  "quickPick.commandFailed": "Не удалось выполнить команду: {error}",
  "quickPick.find.title": "Поиск в задаче",
  "quickPick.find.description":
    "Поиск по сообщениям и изменениям файлов в текущей задаче.",
  "quickPick.find.results": "Результаты: {current} / {total}",
  "quickPick.find.placeholder.conversation": "Поиск по сообщениям…",
  "quickPick.find.placeholder.changes": "Поиск по изменениям файлов…",
  "quickPick.find.noResults.conversation": "Сообщения не найдены",
  "quickPick.find.noResults.changes": "Изменения файлов не найдены",
  "quickPick.find.empty.conversation":
    "Начните вводить, чтобы найти сообщения",
  "quickPick.find.empty.changes":
    "Начните вводить, чтобы найти изменённые файлы",
  "quickPick.find.previous": "Предыдущий результат",
  "quickPick.find.next": "Следующий результат",
  "quickPick.find.scope.conversation": "Поиск по сообщениям",
  "quickPick.find.scope.changes": "Поиск по изменениям файлов",
  "quickPick.find.scope.tooltip":
    "Переключить область поиска: сообщения/файлы",
  "quickPick.section.suggested": "Предлагаемые",
  "quickPick.section.recommended": "Рекомендуемые",
  "quickPick.section.chat": "Чат",
  "quickPick.section.navigation": "Навигация",
  "quickPick.section.panels": "Панели",
  "quickPick.section.configure": "Настройка",
  "quickPick.section.panel": "Панели",
  "quickPick.section.config": "Конфигурация",
  "quickPick.section.app": "Приложение",
  "quickPick.command.newTask": "Новая задача",
  "quickPick.command.openWorkspace": "Открыть проект",
  "quickPick.command.openFile": "Поиск файлов",
  "quickPick.command.settings": "Настройки",
  "quickPick.command.previousConversation": "Предыдущая задача",
  "quickPick.command.nextConversation": "Следующая задача",
  "quickPick.command.find": "Найти задачи",
  "quickPick.command.goBack": "Назад",
  "quickPick.command.goForward": "Вперёд",
  "quickPick.command.switchThemeToDark": "Переключить на тёмную тему",
  "quickPick.command.switchThemeToLight": "Переключить на светлую тему",
  "quickPick.command.mcpServers": "MCP-серверы",
  "quickPick.command.personalization": "Персонализация",
  "quickPick.command.skills": "Скиллы",
  "quickPick.command.toggleSidebar": "Показать/скрыть боковую панель",
  "quickPick.command.toggleTerminal": "Показать/скрыть терминал",
  "quickPick.command.togglePreview": "Показать/скрыть предпросмотр",
  "quickPick.command.addTerminalTab": "Добавить вкладку терминала",
  "quickPick.command.addBrowserTab": "Добавить вкладку браузера",
  "quickPick.command.addReviewTab": "Добавить вкладку ревью",
  "quickPick.command.toggleSidePane": "Показать/скрыть панель",
  "quickPick.command.toggleBrowserPanel": "Показать/скрыть панель браузера",
  "quickPick.command.toggleDiffPanel": "Переключиться на панель изменений",
  "quickPick.command.feedback": "Отзыв",
  "quickPick.command.myTickets": "Мои отзывы",
  "quickPick.command.community": "Сообщество",
  "quickPick.command.productDocs": "Документация",
  "quickPick.command.login": "Подключиться",
  "quickPick.command.logout": "Отключиться",
  "commandCenter.placeholder": "Поиск действий, задач или файлов",
  "commandCenter.open": "Поиск",
  "commandCenter.noResults": "Нет подходящих результатов",
  "commandCenter.scopeTabs": "Разделы командного центра",
  "commandCenter.scope.all": "Все",
  "commandCenter.scope.commands": "Действия",
  "commandCenter.scope.conversations": "Задачи",
  "commandCenter.scope.files": "Файлы",
  "commandCenter.history": "История поиска",
  "commandCenter.clearHistory": "Очистить историю поиска",
  "commandCenter.expandHistory": "Развернуть историю поиска",
  "commandCenter.collapseHistory": "Свернуть историю поиска",
  "commandCenter.section.recentChanges": "Недавние изменения",
  "commandCenter.section.recentTasks": "Недавние задачи",
  "commandCenter.section.commands": "Быстрые действия",
  "commandCenter.section.conversations": "Задачи",
  "commandCenter.section.files": "Файлы",
  "commandCenter.empty.recentChanges":
    "Нет недавних изменений в текущей задаче",
  "commandCenter.empty.recentTasks": "Нет недавних задач",
  "commandCenter.moreResults": "Показать больше результатов",
  "confirmDialog.taskDeleteTitle": "Удалить эту задачу?",
  "confirmDialog.taskDeleteDescription":
    "Задача «{taskTitle}» будет удалена из этого проекта, и восстановить текущую запись будет нельзя.",
  "confirmDialog.archivedTaskDeleteTitle": "Удалить эту архивную задачу?",
  "confirmDialog.archivedTaskDeleteDescription":
    "Задачи будут удалены из списка задач и архива.",
  "taskList.deleteAllArchived": "Удалить все задачи из архива",
  "taskList.archivedActions": "Действия с архивом",
  "taskList.archivedTaskCount": "Задач в архиве: {count}",
  "taskList.deleteAllArchivedMenu": "Удалить все задачи из архива…",
  "taskList.deleteAllArchivedTitle": "Удалить {count} задач из архива?",
  "taskList.deleteAllArchivedBusy": "Обработка…",
  "taskList.deleteAllArchivedUnavailable":
    "Сейчас нельзя обработать эти проекты: {projects}. Повторите попытку после переподключения.",
  "taskList.deleteAllArchivedResult":
    "Удалено: {deleted}, пропущено: {skipped}, не удалось: {failed}.",
  "taskList.deleteAllArchivedError":
    "Не удалось выполнить операцию или обновить список. Обновите список, чтобы проверить оставшиеся задачи.",
  "confirmDialog.taskArchiveTitle": "Архивировать эту задачу?",
  "confirmDialog.taskArchiveDescription":
    "Задача «{taskTitle}» переместится в архив, позже её можно будет восстановить.",
  "confirmDialog.projectRemoveTitle": "Удалить этот проект?",
  "confirmDialog.projectRemoveDescription":
    "Проект «{projectName}» будет удалён из боковой панели, но файлы на диске останутся нетронутыми.",
  "bots.title": "Боты",
  "bots.description": "Подключайте внешние чаты и вебхуки к ботам ZCode.",
  "bots.listTitle": "Боты",
  "bots.addBot": "Новый бот",
  "bots.addBinding": "Добавить привязку",
  "bots.setup.chooseBot": "Выберите бота",
  "bots.setup.createBot": "Создать бота",
  "bots.setup.createAndTest": "Проверить и продолжить",
  "bots.setup.bindBot": "Привязать бота",
  "bots.setup.setBot": "Настроить бота",
  "bots.setup.next": "Далее",
  "bots.setup.finish": "Готово",
  "bots.setup.bindDescription":
    "Создайте код привязки, затем отправьте команду привязки в личном чате с ботом.",
  "bots.setup.bindCodeCreating": "Создание кода привязки…",
  "bots.setup.bindExpiresIn": "Код привязки истекает через {time}",
  "bots.setup.bindRegenerating":
    "Срок действия кода привязки истёк. Создаётся новый…",
  "bots.setup.refreshBindCode": "Обновить код",
  "bots.setup.bound":
    "Привязано пользователей: {count}. Продолжите настройку этого бота.",
  "bots.setup.bindAdvanceIn": "Продолжение через {seconds} с.",
  "bots.setup.allowedWorkspaces": "Разрешённые проекты",
  "bots.setup.allowedAll": "Разрешить все проекты (*)",
  "bots.setup.allowedSelected": "Разрешить только выбранные проекты",
  "bots.setup.allowedAllShort": "Все",
  "bots.setup.allowedSelectedShort": "Выбранные",
  "bots.setup.allowedAllDescription":
    "Этот бот может использовать любой настроенный проект.",
  "bots.setupDescription.chooseBot":
    "Выберите стороннего чат-бота для подключения.",
  "bots.setupDescription.createBot":
    "Введите учётные данные бота или вебхука. На следующем шаге сначала проверяется соединение.",
  "bots.setupDescription.bindBot":
    "Создайте код привязки и привяжите аккаунт в личном чате с ботом.",
  "bots.setupDescription.setBot":
    "Задайте контекст по умолчанию, разрешённые проекты и детализацию ответов стороннего бота.",
  "bots.setup.guide.createTitle": "Инструкция по подготовке",
  "bots.setup.guide.bindTitle": "Инструкция по привязке",
  "bots.setup.guide.createNote":
    "Сначала подготовьте сторонний сервис, затем вернитесь и нажмите «Проверить и продолжить».",
  "bots.setup.callbackUrlTitle": "URL колбэка",
  "bots.setup.callbackUrlDescription.webhook":
    "Внешняя система должна отправлять колбэки входящих сообщений на этот адрес. Асинхронные исходящие ответы по-прежнему отправляются на URL вебхука, указанный слева.",
  "bots.setup.callbackUrlDescription.webhookBind":
    "Привязка вебхука использует тот же адрес: отправьте сюда приватный callback-запрос с text = /bind <code>.",
  "bots.setup.guide.telegram.create.1":
    "Откройте @BotFather в Telegram и создайте нового бота.",
  "bots.setup.guide.telegram.create.2":
    "Скопируйте токен HTTP API, выданный BotFather, и вставьте его в эту форму.",
  "bots.setup.guide.telegram.create.3":
    "Стоит сразу открыть личный чат с ботом — команду привязки нужно отправить именно там.",
  "bots.setup.guide.telegram.bind.1":
    "Вернитесь в Telegram и откройте личный чат с созданным ботом.",
  "bots.setup.guide.telegram.bind.2":
    "Если чат ещё не начат, сначала нажмите «Start» или отправьте любое сообщение, затем отправьте {command}.",
  "bots.setup.guide.telegram.bind.3":
    "Вернитесь сюда после того, как Telegram подтвердит успешную привязку.",
  "bots.setup.guide.weixin.create.1":
    "Запустите вход по QR-коду в Weixin, отсканируйте код с помощью Weixin и подтвердите на телефоне.",
  "bots.setup.guide.weixin.create.2":
    "ZCode автоматически сохраняет bot_token, возвращённый iLink; после сканирования отправьте боту любое сообщение в Weixin, чтобы активировать чат.",
  "bots.setup.guide.weixin.create.3":
    "ZCode использует встроенный клиент iLink: `/ilink/bot/getupdates` для long polling и `/ilink/bot/sendmessage` для ответов.",
  "bots.setup.guide.weixin.bind.1":
    "Откройте личный чат Weixin, который хотите привязать.",
  "bots.setup.guide.weixin.bind.2": "Отправьте {command}.",
  "bots.setup.guide.weixin.bind.3":
    "После успешной привязки вернитесь сюда, чтобы завершить настройку проекта и значений по умолчанию для CLI.",
  "bots.setup.guide.feishu.create.1":
    "Создайте собственное приложение в консоли разработчика Feishu/Lark и включите возможности бота.",
  "bots.setup.guide.feishu.create.2":
    "Скопируйте App ID и App Secret, затем включите события постоянного подключения для `im.message.receive_v1` и действий с карточками.",
  "bots.setup.guide.feishu.create.3":
    "Выберите здесь подходящий домен Feishu или Lark и вставьте учётные данные в форму.",
  "bots.setup.guide.feishu.bind.1":
    "Установите приложение в свою организацию и откройте личный чат с ботом.",
  "bots.setup.guide.feishu.bind.2": "Отправьте {command} в этом личном чате.",
  "bots.setup.guide.feishu.bind.3":
    "После успешной привязки вернитесь сюда, чтобы завершить настройку проекта и значений по умолчанию для CLI.",
  "bots.setup.guide.webhook.create.1":
    "Режим вебхука не требует нативного бота в стороннем продукте: вашей интеграции достаточно отправлять сообщения в ZCode методом POST.",
  "bots.setup.guide.webhook.create.2":
    "Сначала задайте общий секрет; если нужны асинхронные ответы, добавьте также исходящий URL вебхука.",
  "bots.setup.guide.webhook.create.3":
    "Используйте один стабильный userId для каждого внешнего пользователя, чтобы привязка и последующий контекст указывали на одного человека.",
  "bots.setup.guide.webhook.bind.1":
    "Отправьте POST-запрос с колбэком личного сообщения на эндпоинт ZCode `/api/bots/webhook`.",
  "bots.setup.guide.webhook.bind.2":
    "Полезная нагрузка должна содержать как минимум этот botId, стабильный userId, `chatType: \"private\"`, а в text передайте {command}.",
  "bots.setup.guide.webhook.bind.3":
    "Если у бота есть секрет, также отправьте `x-zcode-bot-secret`; после успешной привязки вернитесь сюда.",
  "bots.setup.footer.choose":
    "Выберите поддерживаемого бота, чтобы продолжить.",
  "bots.setup.footer.create":
    "Перед привязкой необходимо успешно проверить соединение.",
  "bots.setup.testSuccess": "Проверка соединения пройдена",
  "bots.setup.testFailed": "Проверка соединения не пройдена",
  "bots.setup.footer.bind":
    "Код привязки изначально разрешает все проекты; итоговая область доступа сохраняется на следующем шаге.",
  "bots.setup.footer.set":
    "Кнопка «Готово» включает бота и возвращает его в список добавленных.",
  "bots.setup.discardTitle": "Отказаться от этого бота?",
  "bots.setup.discardDescription":
    "Настройка не завершена. Временный бот будет удалён.",
  "bots.setup.discardConfirm": "Отменить настройку",
  "bots.refresh": "Обновить список ботов",
  "bots.namePlaceholder": "Название бота",
  "bots.credentialPlaceholder": "Привязка бота",
  "bots.weixinBotTokenPlaceholder":
    "Сохраняется после входа по QR-коду; bot_token также можно вставить вручную",
  "bots.webhookSecretPlaceholder": "Секрет вебхука",
  "bots.webhookUrlPlaceholder": "Исходящий URL вебхука",
  "bots.feishuAppIdPlaceholder": "ID приложения Feishu",
  "bots.feishuAppSecretPlaceholder": "Секрет приложения Feishu",
  "bots.callbackSecretPlaceholder": "Секрет колбэка",
  "bots.feishuRegistrationTitle": "Сканируйте, чтобы создать приложение",
  "bots.feishuRegistrationDescription":
    "Отсканируйте, чтобы создать приложение и сохранить учётные данные.",
  "bots.feishuRegistrationButton": "Сканировать",
  "bots.feishuRegistrationQrAlt": "QR-код регистрации приложения Feishu",
  "bots.feishuRegistrationScanHint":
    "Отсканируйте с помощью Feishu/Lark и подтвердите создание приложения.",
  "bots.feishuRegistrationScanHint.feishu":
    "Отсканируйте с помощью Feishu и подтвердите создание приложения.",
  "bots.feishuRegistrationScanHint.lark":
    "Отсканируйте с помощью Lark и подтвердите создание приложения.",
  "bots.feishuRegistrationStarted": "Регистрация в Feishu начата",
  "bots.feishuRegistrationSuccess":
    "Учётные данные приложения Feishu заполнены",
  "bots.feishuRegistrationFailed":
    "Не удалось запустить регистрацию в Feishu: {error}",
  "bots.feishuRegistrationExpired":
    "Срок действия QR-кода истёк. Начните заново.",
  "bots.feishuRegistration.expired":
    "Срок действия QR-кода истёк. Начните заново.",
  "bots.feishuRegistration.error": "Регистрация не удалась.",
  "bots.enabledToggle": "Включить {name}",
  "bots.replyGranularity": "Детализация ответов бота",
  "bots.replyGranularity.description": "Уровень детализации сообщений.",
  "bots.replyGranularity.assistantChanges": "Обычный ответ",
  "bots.replyGranularity.assistantChanges.description":
    "Отправлять текст ассистента и изменения файлов без прогресса вызовов инструментов.",
  "bots.replyGranularity.assistantToolcallsChanges": "Полный ответ",
  "bots.replyGranularity.assistantToolcallsChanges.description":
    "Отправлять текст ассистента, прогресс вызовов инструментов и изменения файлов.",
  "bots.replyGranularity.summaryChanges": "Сводный ответ",
  "bots.replyGranularity.summaryChanges.description":
    "Отправлять только итоговый результат и сводку изменений — уведомлений будет меньше.",
  "bots.replyGranularity.streamingCard": "Стриминговая карточка",
  "bots.replyGranularity.streamingCard.description":
    "Feishu/Lark поддерживают только стриминговые карточки Card JSON 2.0; вызовы инструментов показываются только свёрнутыми сводками.",
  "bots.add": "Добавить",
  "bots.channel.telegram": "Telegram",
  "bots.channel.weixin": "Weixin",
  "bots.channel.feishu": "Feishu",
  "bots.channel.lark": "Lark",
  "bots.channel.dingding": "DingTalk",
  "bots.channel.discord": "Discord",
  "bots.channel.wecom": "WeCom",
  "bots.channel.webhook": "Webhook",
  "bots.newBot.title": "Новый бот",
  "bots.newBot.chooseChannel": "Выберите канал",
  "bots.newBot.description":
    "Выберите, откуда бот будет получать сообщения. После выбора канала настройте учётные данные, привязку, разрешённые проекты и значения по умолчанию.",
  "bots.newBot.selectProviderHint":
    "Выберите канал справа, чтобы создать бота.",
  "bots.newBot.fallbackName": "Новый бот",
  "bots.newBot.comingSoon": "Скоро",
  "bots.newBot.providerDescription.telegram":
    "Создайте бота, затем привяжите сообщением.",
  "bots.newBot.providerDescription.weixin":
    "Отсканируйте для входа; первое сообщение активирует чат.",
  "bots.newBot.providerDescription.feishu":
    "Отсканируйте, чтобы создать приложение, затем привяжите сообщением.",
  "bots.newBot.providerDescription.lark":
    "Отсканируйте, чтобы создать приложение, затем привяжите сообщением.",
  "bots.newBot.providerDescription.dingding":
    "Интеграция с ботом DingTalk запланирована.",
  "bots.newBot.providerDescription.webhook":
    "Получайте колбэки из своей системы и при желании отправляйте ответы обратно.",
  "bots.newBot.providerDescription.discord":
    "Интеграция с ботом Discord запланирована.",
  "bots.newBot.providerDescription.wecom":
    "Интеграция с ботом WeCom запланирована.",
  "bots.empty": "Боты не настроены.",
  "bots.name": "Название бота",
  "bots.provider": "Канал",
  "bots.enabled": "Включён",
  "bots.enabled.description":
    "Включите или отключите бота и очистите состояние его среды выполнения.",
  "bots.credential": "Учётные данные",
  "bots.webhookSecret": "Секрет вебхука",
  "bots.webhookUrl": "URL вебхука",
  "bots.providerSettings": "Настройки канала",
  "bots.providerSettings.telegram": "Сохраните токен BotFather.",
  "bots.providerSettings.weixin":
    "Учётные данные сохраняются после сканирования; первое сообщение в Weixin активирует чат.",
  "bots.providerSettings.feishu":
    "Отсканируйте, чтобы получить учётные данные приложения.",
  "bots.providerSettings.lark":
    "Отсканируйте, чтобы получить учётные данные приложения.",
  "bots.providerSettings.webhook":
    "Вебхук использует секрет колбэка для входящих запросов и необязательный исходящий URL для ответов.",
  "bots.providerSettings.discord": "Поддержка Discord пока недоступна.",
  "bots.providerSettings.wecom": "Поддержка WeCom пока недоступна.",
  "bots.telegramBotToken": "Привязка бота",
  "bots.weixinRegistrationTitle": "Вход по QR-коду в Weixin",
  "bots.weixinRegistrationDescription":
    "Отсканируйте для входа, затем отправьте любое сообщение в Weixin, чтобы активировать чат.",
  "bots.weixinRegistrationButton": "Сканировать",
  "bots.weixinRegistrationQrAlt": "QR-код для входа в Weixin",
  "bots.weixinRegistrationScanHint":
    "Отсканируйте с помощью Weixin и подтвердите вход.",
  "bots.weixinRegistrationStarted": "Вход по QR-коду в Weixin начат",
  "bots.weixinRegistrationSuccess":
    "Бот Weixin привязан. Отправьте любое сообщение в Weixin, чтобы активировать его.",
  "bots.weixinActivationHint":
    "Отправьте боту любое сообщение в Weixin; на первое сообщение бот пришлёт приветствие и список команд.",
  "bots.weixinRegistrationFailed":
    "Не удалось запустить вход по QR-коду в Weixin: {error}",
  "bots.weixinRegistration.pending": "Ожидание сканирования",
  "bots.weixinRegistration.scanned": "Отсканировано, ожидаем подтверждения",
  "bots.weixinRegistration.success": "Вход выполнен",
  "bots.weixinRegistration.expired":
    "Срок действия QR-кода истёк. Начните заново.",
  "bots.weixinRegistration.error": "Вход не удался.",
  "bots.weixinBotToken": "Weixin bot_token",
  "bots.feishuAppSecret": "Секрет приложения Feishu",
  "bots.callbackSecret": "Секрет колбэка",
  "bots.webhookOutboundUrl": "Исходящий URL вебхука",
  "bots.webhookAuthHeaderName": "Имя заголовка авторизации",
  "bots.feishuAppId": "ID приложения Feishu",
  "bots.saveSecrets": "Сохранить секреты",
  "bots.saveSecret": "Сохранить",
  "bots.removeSecret": "Удалить секрет",
  "bots.removeSecretFailed": "Не удалось удалить секрет: {error}",
  "bots.botToken": "Привязка бота",
  "bots.botTokenDescription.telegram": "Сохраните токен BotFather.",
  "bots.botTokenDescription.feishu":
    "Отсканируйте, чтобы получить учётные данные приложения.",
  "bots.botTokenDescription.lark":
    "Отсканируйте, чтобы получить учётные данные приложения.",
  "bots.botTokenDescription.weixin":
    "Учётные данные сохраняются после сканирования.",
  "bots.botTokenDescription.webhook":
    "Используется для подключения этого вебхук-бота.",
  "bots.telegramBotFatherQrAlt": "QR-код Telegram BotFather",
  "bots.telegramBotFatherScanHint":
    "Отсканируйте, чтобы открыть BotFather, создать бота и вставить токен.",
  "bots.openBotFather": "Открыть BotFather",
  "bots.connected": "Подключён",
  "bots.notConnected": "Не подключён",
  "bots.runtime.telegramLongPollingRunning":
    "Длинный опрос Telegram работает.",
  "bots.runtime.telegramLongPollingStarting":
    "Длинный опрос Telegram запускается.",
  "bots.runtime.telegramLongPollingStopped":
    "Длинный опрос Telegram остановлен.",
  "bots.runtime.telegramLongPollingHandledElsewhere":
    "Длинный опрос Telegram обрабатывается другим окном ZCode.",
  "bots.runtime.telegramTokenMissing":
    "Не указаны учётные данные бота Telegram.",
  "bots.runtime.telegramPollingFailedRetrying":
    "Опрос Telegram завершился ошибкой; повторяем попытку.",
  "bots.runtime.feishuWebSocketStarting": "Feishu WebSocket запускается.",
  "bots.runtime.feishuWebSocketConnecting": "Feishu WebSocket подключается.",
  "bots.runtime.feishuWebSocketRunning": "Feishu WebSocket работает.",
  "bots.runtime.feishuWebSocketStopped": "Feishu WebSocket остановлен.",
  "bots.runtime.connectionFailed": "Сбой подключения бота",
  "bots.runtime.feishuConnectionFailed": "Сбой подключения к Feishu",
  "bots.runtime.larkConnectionFailed": "Сбой подключения к Lark",
  "bots.runtime.cannotConnectFeishu": "Не удаётся подключиться к Feishu",
  "bots.runtime.cannotConnectLark": "Не удаётся подключиться к Lark",
  "bots.runtime.feishuConnectionInterrupted": "Соединение с Feishu прервано",
  "bots.runtime.larkConnectionInterrupted": "Соединение с Lark прервано",
  "bots.runtime.boundConnectionInterrupted": "Соединение прервано",
  "bots.runtime.boundConnectionInterruptedDescription":
    "Бот привязан, но его постоянное соединение прервано.",
  "bots.runtime.credentialsSavedConnectionFailedDescription":
    "Учётные данные приложения сохранены, но постоянное соединение не установлено.",
  "bots.runtime.connectionBlocksBinding":
    "Бот не может получать сообщения, поэтому привязка временно недоступна.",
  "bots.runtime.feishuConnectionRecoverySuggestion":
    "Возможно, достигнут лимит длинных соединений или Feishu занят. Попробуйте позже; если проблема сохранится, привяжите нового бота.",
  "bots.runtime.larkConnectionRecoverySuggestion":
    "Возможно, достигнут лимит длинных соединений или Lark занят. Попробуйте позже; если проблема сохранится, привяжите нового бота.",
  "bots.runtime.errorCode": "Код ошибки",
  "bots.runtime.errorDetail": "Подробности",
  "bots.runtime.unknownError": "Неизвестная ошибка соединения",
  "bots.runtime.weixinLongPollingRunning": "Длинный опрос Weixin работает.",
  "bots.runtime.weixinLongPollingStarting":
    "Длинный опрос Weixin запускается.",
  "bots.runtime.weixinLongPollingStopped": "Длинный опрос Weixin остановлен.",
  "bots.runtime.botDisabled": "Бот отключён.",
  "bots.scanQrCode": "Сканировать QR-код",
  "bots.authorizationQr": "QR-код авторизации",
  "bots.bindCommand": "Команда привязки",
  "bots.binding": "Привязка",
  "bots.allowedCommands": "Разрешённые команды",
  "bots.unbound": "Не привязан",
  "bots.generateBindCode": "Создать код привязки",
  "bots.resetState": "Сбросить состояние",
  "bots.allowedWorkspaces": "Доступ к проектам",
  "bots.allowedWorkspaces.all": "Все",
  "bots.allowedWorkspaces.mode.all": "Все проекты",
  "bots.allowedWorkspaces.mode.selected": "Выбранные проекты",
  "bots.allowedWorkspaces.allDescription":
    "Этот бот может использовать любой настроенный проект.",
  "bots.allowedWorkspaces.selectedDescription":
    "Этот бот может использовать выбранные проекты: {count}.",
  "bots.botMeta": "Привязано пользователей: {users} · проект {workspace}",
  "bots.botSummary":
    "Пользователей: {users} · проектов: {workspaces} · {workspace}",
  "bots.userCount": "Пользователей: {count}",
  "bots.editDescription":
    "Просмотрите состояние среды выполнения, контекст по умолчанию, детализацию ответов и привязанных пользователей.",
  "bots.edit.basicSettings": "Основные настройки",
  "bots.edit.binding": "Привязанные пользователи",
  "bots.edit.emptyUsers":
    "Пока нет привязанных пользователей. Создайте код привязки, затем отправьте команду привязки в личном чате с ботом.",
  "bots.edit.userWorkspaces": "Разрешено проектов: {count}",
  "bots.test": "Проверить",
  "bots.bind": "Привязать",
  "bots.unbind": "Отвязать",
  "bots.delete": "Удалить бота",
  "bots.delete.description": "Бот будет удалён.",
  "bots.deleteConfirmTitle": "Удалить бота «{name}»?",
  "bots.deleteConfirmDescription":
    "Будут удалены конфигурация бота, учётные данные и состояние привязки. Это действие нельзя отменить.",
  "bots.bindCode": "Код привязки",
  "bots.bindHint": "Отправьте {command} в личном чате с ботом.",
  "bots.bindCodeExpires": "Код привязки истекает через {time}",
  "bots.bindCodeExpired":
    "Срок действия кода привязки истёк. Создайте новый код.",
  "bots.bindSuccess": "Привязка выполнена",
  "bots.copyBindCommand": "Копировать команду привязки",
  "bots.bindCommandGuide":
    "Скопируйте команду привязки ниже и отправьте её боту в личном чате.",
  "bots.bindCommandStep.copy": "Скопируйте команду привязки",
  "bots.bindCommandStep.openChat": "Откройте личный чат с ботом",
  "bots.bindCommandStep.send":
    "Вставьте и отправьте её, чтобы привязать текущий проект",
  "bots.bindCommandCopied":
    "Команда привязки скопирована. Откройте личный чат с ботом, вставьте и отправьте её.",
  "bots.bindCommandCopyFailed":
    "Не удалось скопировать команду привязки: {error}",
  "bots.loadFailed": "Не удалось загрузить ботов: {error}",
  "bots.saveSuccess": "Бот сохранён",
  "bots.saveFailed": "Не удалось сохранить бота: {error}",
  "bots.testFailed": "Проверка бота не удалась: {error}",
  "bots.bindCodeCreated": "Код привязки создан",
  "bots.bindCodeFailed": "Не удалось создать код привязки: {error}",
  "bots.unbindSuccess": "Бот отвязан",
  "bots.unbindFailed": "Не удалось отвязать бота: {error}",
  "bots.deleteFailed": "Не удалось удалить бота: {error}",
  "welcome.title": "Добро пожаловать в ZCode",
  "welcome.username": "Имя пользователя",
  "welcome.password": "Пароль",
  "welcome.login": "Войти",
  "welcome.loggingIn": "Вход…",
  "welcome.loginFailed": "Не удалось войти",
  "login.title": "Добро пожаловать в ZCode",
  "login.description": "Подключите аккаунт, чтобы начать использовать ZCode",
  "login.oauth.activeProviderHint":
    "Текущий активный провайдер: {provider}. Повторный вход заменит текущую учётную запись.",
  "login.oauth.loadingProviders": "Загрузка провайдеров аккаунтов…",
  "login.oauth.noProviders":
    "Сейчас нет доступных провайдеров аккаунтов. Попробуйте позже.",
  "login.oauth.button": "Продолжить с {provider}",
  "login.oauth.button.zai": "Подключиться к Z.ai",
  "login.oauth.button.bigmodel": "Подключиться к BigModel",
  "login.oauth.regionTag.zai": "Глобальный",
  "login.oauth.regionTag.bigmodel": "CN",
  "login.oauth.waiting": "Ожидание аутентификации {provider}…",
  "login.oauth.loginFailure": "Не удалось выполнить вход, попробуйте снова",
  "login.oauth.cancel": "Отмена",
  "login.oauth.retry": "Повторить вход",
  "login.expired.title": "Ваша сессия истекла",
  "login.expired.description": "Для безопасности аккаунта войдите снова.",
  "login.expired.action": "Войти снова",
  "login.expired.restart": "Подтвердить и перезапустить",
  "login.useApiKey": "Использовать API-ключ",
  "login.apiKey.title": "API-ключ",
  "login.apiKey.placeholder": "Введите API-ключ",
  "login.apiKey.providerLabel": "Провайдер API-ключа",
  "login.apiKey.provider.zai": "Z.ai",
  "login.apiKey.provider.bigmodel": "BigModel",
  "login.apiKey.getApiKey": "Получить API-ключ",
  "login.apiKey.cancel": "Отмена",
  "login.apiKey.continue": "Продолжить",
  "login.apiKey.emptyError": "Введите API-ключ.",
  "login.apiKey.providerMissingError":
    "Встроенная конфигурация провайдера {provider} не найдена. Попробуйте позже.",
  "login.apiKey.saveError": "Не удалось сохранить API-ключ: {error}",
  "login.apiKey.skipError":
    "Не удалось пропустить настройку API-ключа: {error}",
  "login.skip": "Пропустить пока",
  "settings.onboarding": "Первичная настройка",
  "settings.onboardingDescription":
    "Заново выберите роль, режим интерфейса и предпочтения. Для импорта данных используйте настройки миграции.",
  "settings.onboardingOpen": "Открыть первичную настройку",
  "app.currentTheme": "Текущая: {theme}",
  "app.login": "Подключить",
  "app.logout": "Отключить",
  "logout.confirm.title": "Отключиться и перезапустить ZCode?",
  "logout.confirm.descriptionWithRunningSessions":
    "Запущенных сессий: {count}. Отключение прервёт их и перезапустит приложение.",
  "logout.confirm.descriptionDefault":
    "После отключения приложение перезапустится. Нужно будет снова подключить аккаунт.",
  "logout.confirm.ok": "Отключиться и перезапустить",
  "logout.confirm.cancel": "Отмена",
  "sidebar.profile.notLoggedIn": "Подключиться",
  "app.selectFile": "Выберите файл, чтобы начать",
  "app.workspace": "Проект",
  "browser.title": "Браузер",
  "browser.addressPlaceholder": "Введите URL и нажмите Enter",
  "browser.back": "Назад",
  "browser.forward": "Вперёд",
  "browser.reload": "Обновить",
  "browser.more": "Другие действия браузера",
  "browser.openExternal": "Открыть в браузере по умолчанию",
  "browser.devtools": "Открыть DevTools",
  "browser.responsive.enter": "Свободный размер области просмотра",
  "browser.responsive.exit": "Выйти из режима свободного размера",
  "browser.responsive.viewport": "Область просмотра свободного размера",
  "browser.responsive.resizeWidth":
    "Изменить ширину области просмотра браузера",
  "browser.responsive.resizeHeight":
    "Изменить высоту области просмотра браузера",
  "browser.responsive.width": "Ширина области просмотра браузера",
  "browser.responsive.height": "Высота области просмотра браузера",
  "browser.responsive.zoom": "Масштаб предпросмотра браузера",
  "browser.responsive.fitToWindow": "По размеру окна",
  "browser.responsive.dimensionRangeError":
    "Введите целое число от {min} до {max}",
  "browser.elementPicker.start": "Выберите элемент страницы для чата",
  "browser.elementPicker.cancel": "Отменить выбор элемента",
  "browser.elementPickerFailed":
    "Не удалось выбрать элемент страницы: {message}",
  "browser.elementPicker.popover.background": "Фон",
  "browser.elementPicker.popover.color": "Цвет",
  "browser.elementPicker.popover.font": "Шрифт",
  "browser.show": "Показать или скрыть браузер",
  "browser.hide": "Показать/скрыть браузер",
  "browser.toggle": "Показать или скрыть браузер",
  "browser.close": "Закрыть панель браузера",
  "browser.desktopOnly": "Панель браузера доступна только в настольной версии",
  "browser.empty": "Вставьте или введите URL, чтобы открыть страницу.",
  "browser.guestFailed.title": "Не удалось запустить встроенный браузер",
  "browser.guestFailed.description":
    "Процесс браузера завершился до отображения страницы. Проверьте системное окружение и повторите попытку.",
  "browser.guestFailed.detail": "Рендерер: {reason} (код выхода {exitCode})",
  "browser.guestFailed.retry": "Перезапустить браузер",
  "browser.invalidUrl":
    "Поддерживаются только URL со схемами http, https, file, about и data",
  "browser.loadFailed": "Не удалось загрузить страницу: {message}",
  "browser.loadError.title": "Не удалось открыть эту страницу",
  "browser.loadError.certTitle":
    "HTTPS-сертификат этого сайта не является доверенным",
  "browser.loadError.certHint":
    "Если вы доверяете этому адресу, включите «Игнорировать ошибки сертификатов» в разделе Настройки → Браузер → Безопасность, затем перезапустите приложение, чтобы открыть сайт.",
  "browser.loadError.retry": "Перезагрузить",
  "browser.resizeDuringOperationWarning":
    "Размер браузера изменился — это может повлиять на текущее автоматическое действие",
  "diff.title": "Diff",
  "diff.toggle": "Показать или скрыть панель Diff",
  "diff.close": "Закрыть панель Diff",
  "sidePane.expand": "Развернуть боковую панель",
  "sidePane.collapse": "Свернуть боковую панель",
  "sidePane.togglePanel": "Показать/скрыть панель",
  "sidePane.maximize": "Развернуть панель",
  "sidePane.restoreSize": "Восстановить ширину панели",
  "sidePane.addTab": "Добавить вкладку",
  "sidePane.openTab": "Открыть вкладку",
  "sidePane.subagent": "Субагент",
  "sidePane.subagentDirectory": "Субагенты",
  "sidePane.selectionChat": "Боковой чат",
  "sidePane.workflowRun": "Запуск воркфлоу",
  "sidePane.workflowDirectory": "Запуски воркфлоу",
  "sidePane.workflowActor": "Субагент воркфлоу",
  "sidePane.workflowScript": "Шаги скрипта",
  "sidePane.workflowArtifact": "Артефакт",
  "subagentDirectory.title": "Субагенты",
  "subagentDirectory.running": "Выполняется",
  "subagentDirectory.runningEmpty": "Нет запущенных субагентов",
  "subagentDirectory.ended": "Завершён",
  "subagentDirectory.showMore": "Показать ещё 20",
  "subagentDirectory.loadFailed": "Не удалось загрузить субагентов.",
  "subagentDirectory.status.running": "Выполняется",
  "subagentDirectory.status.waiting": "Ожидает",
  "subagentDirectory.status.blocked": "Заблокирован",
  "subagentDirectory.status.success": "Завершён",
  "subagentDirectory.status.failed": "Ошибка",
  "subagentDirectory.status.cancelled": "Отменён",
  "subagentDirectory.status.lost": "Потерян",
  "chat.statusPanel.endedAgents": "Завершены",
  "chat.statusPanel.endedWorkflows": "Завершённые воркфлоу",
  "workflowDirectory.title": "Запуски воркфлоу",
  "workflowDirectory.running": "Выполняются",
  "workflowDirectory.runningEmpty": "Воркфлоу сейчас не выполняются",
  "workflowDirectory.ended": "Завершены",
  "workflowDirectory.endedEmpty": "Завершённых воркфлоу пока нет",
  "workflowDirectory.empty": "В этом чате воркфлоу ещё не запускались",
  "workflowDirectory.truncated": "Показаны только последние {count} запусков",
  "workflowDirectory.unavailable":
    "Для этого чата нельзя получить список запусков воркфлоу",
  "chat.selections.addToTask": "Добавить в чат",
  "chat.selections.askInSideChat": "Добавить в боковой чат",
  "chat.selections.sideBlocked":
    "Разберите запрос бокового диалога, прежде чем добавлять новый фрагмент.",
  "chat.selections.count": "Выбранных фрагментов диалога: {count}",
  "chat.selections.remove": "Удалить фрагмент диалога",
  "chat.selections.type.user": "Сообщение пользователя",
  "chat.selections.type.assistant": "Сообщение ассистента",
  "chat.selections.type.reasoning": "Размышления",
  "chat.selections.type.tool": "Результат инструмента",
  "chat.selections.limit.single":
    "Один фрагмент может содержать не более 8 000 символов.",
  "chat.selections.limit.count":
    "К чату можно прикрепить не более 8 фрагментов диалога.",
  "chat.selections.limit.total":
    "Суммарный объём фрагментов диалога — не более 16 000 символов.",
  "sidePane.openTabDescription":
    "Выберите вкладку, которую нужно открыть в боковой панели.",
  "sidePane.openFile": "Открыть файл",
  "sidePane.openFileDescription":
    "Открыть файл из текущего Проекта в боковой панели.",
  "sidePane.openFilePlaceholder": "Поиск файлов в текущем Проекте…",
  "sidePane.openFileLoading": "Загрузка файлов…",
  "sidePane.openFileEmpty": "Файлы не найдены.",
  "sidePane.openFile.category": "Файлы",
  "sidePane.openFile.emptyQuery": "Введите запрос для поиска файлов",
  "sidePane.review": "Ревью",
  "whiteboard.title": "Доска",
  "whiteboard.defaultName": "Доска",
  "whiteboard.nameLabel": "Название доски",
  "whiteboard.canvasLabel": "Холст доски",
  "whiteboard.tool.pen": "Перо",
  "whiteboard.tool.eraser": "Ластик",
  "whiteboard.color": "Цвет",
  "whiteboard.strokeWidth": "Толщина линии",
  "whiteboard.addToChat": "Добавить в чат",
  "whiteboard.undo": "Отменить",
  "whiteboard.redo": "Повторить",
  "whiteboard.clear": "Очистить",
  "whiteboard.missing": "Эта доска больше недоступна.",
  "whiteboard.exportMissing": "Эта доска больше недоступна.",
  "whiteboard.exportFailed": "Не удалось экспортировать доску: {message}",
  "treemapping.title": "Treemapping",
  "modelTrajectory.title": "Траектория модели",
  "modelTrajectory.usage.input": "вх. {count}",
  "modelTrajectory.usage.output": "вых. {count}",
  "chat.toolbar.model.loadFailedRetry":
    "Не удалось загрузить модели. Повторить",
  "chat.toolbar.model.remoteWaiting": "Ожидание удалённых моделей",
  "chat.toolbar.model.targetMissing": "Нет целевой модели",
  "settings.subagents.modelLoadFailed": "Не удалось загрузить список моделей.",
  "root.modelSelection.loadFailed":
    "Не удалось загрузить конфигурацию модели.",
  "modelTrajectory.openSourceDirectory": "Открыть исходную папку",
  "modelTrajectory.refresh": "Обновить",
  "modelTrajectory.close": "Закрыть",
  "modelTrajectory.loading": "Загрузка траектории…",
  "modelTrajectory.empty":
    "Записанных вызовов модели нет (model-io пишет только ZCode Agent)",
  "modelTrajectory.error": "Не удалось загрузить траекторию",
  "modelTrajectory.truncatedNotice":
    "Записей слишком много — показаны последние вызовы",
  "modelTrajectory.summaryCalls": "Вызовов: {count}",
  "modelTrajectory.summaryTokens": "Всего использовано токенов",
  "modelTrajectory.attempt": "Попытка {attempt}",
  "modelTrajectory.finish.stop": "Остановлено",
  "modelTrajectory.finish.toolCalls": "Вызов инструмента",
  "modelTrajectory.finish.length": "Достигнут лимит длины",
  "modelTrajectory.finish.contentFilter": "Контент отфильтрован",
  "modelTrajectory.source.main": "Основная сессия",
  "modelTrajectory.source.sessionTitle": "Генерация заголовка",
  "modelTrajectory.source.compact": "Сжатие",
  "modelTrajectory.source.promptEnhance": "Улучшение промпта",
  "modelTrajectory.source.targetCompletion": "Проверка цели",
  "modelTrajectory.source.subagent": "Субагент",
  "modelTrajectory.source.sidecar": "Sidecar",
  "modelTrajectory.source.unknown": "Неизвестный источник",
  "modelTrajectory.inputSection": "Входные данные",
  "modelTrajectory.outputSection": "Выходные данные",
  "modelTrajectory.reasoning": "Рассуждение",
  "modelTrajectory.message": "Сообщение",
  "modelTrajectory.expand": "Развернуть",
  "modelTrajectory.collapse": "Свернуть",
  "modelTrajectory.expandAll": "Развернуть все",
  "modelTrajectory.collapseAll": "Свернуть все",
  "modelTrajectory.customExpansion": "Настраиваемое раскрытие",
  "modelTrajectory.search": "Поиск по траектории",
  "modelTrajectory.searchPlaceholder": "Поиск по содержимому траектории…",
  "modelTrajectory.searchPrevious": "Предыдущее совпадение",
  "modelTrajectory.searchNext": "Следующее совпадение",
  "modelTrajectory.searchClose": "Закрыть поиск",
  "modelTrajectory.copyContent": "Копировать содержимое",
  "modelTrajectory.showAll": "Развернуть",
  "modelTrajectory.collapseContent": "Свернуть",
  "modelTrajectory.toolCall": "Вызов инструмента",
  "modelTrajectory.toolId": "ID",
  "modelTrajectory.toolInput": "Входные данные",
  "modelTrajectory.toolOutput": "Выходные данные",
  "modelTrajectory.toolResult": "Результат инструмента",
  "modelTrajectory.role.system": "Система",
  "modelTrajectory.role.user": "Пользователь",
  "modelTrajectory.role.assistant": "Ассистент",
  "modelTrajectory.role.tool": "Результат инструмента",
  "treemapping.badge.live": "Онлайн",
  "treemapping.badge.snapshot": "Снимок",
  "treemapping.scope.current": "Активность инструментов текущего хода",
  "treemapping.scope.turn": "Активность инструментов хода {turn}",
  "treemapping.summary.files": "Файлы",
  "treemapping.summary.diff": "Дифф",
  "treemapping.summary.views": "Просмотры",
  "treemapping.empty.title": "Активности с файлами пока нет",
  "treemapping.empty.description":
    "Treemapping появится после того, как на этом ходу будут прочитаны, найдены, изменены, созданы или удалены файлы.",
  "treemapping.empty.running":
    "Выполняются вызовы инструментов без пути к файлу: {count}.",
  "treemapping.change.written": "Записано",
  "treemapping.change.modified": "Изменено",
  "treemapping.change.deleted": "Удалено",
  "treemapping.change.viewed": "Только просмотр",
  "treemapping.detail.directoryFiles": "Файлов: {count}",
  "diff.placeholder.badge": "UI-заглушка",
  "diff.placeholder.description":
    "На этом этапе сначала создаётся оболочка панели Diff справа. Реальные сервисы Git и выполнение команд будут подключены позже.",
  "diff.placeholder.toast":
    "Панель Diff пока работает в режиме UI-заглушки, так как сервис Git ещё подключён не полностью.",
  "git.readonly": "Только для чтения",
  "git.head.detached": "Отсоединённый HEAD",
  "git.summary.aheadBehind": "Впереди {ahead} / Позади {behind}",
  "git.summary.scopeWorkspace": "Поддерево текущего проекта",
  "git.source.unstaged": "Вне индекса",
  "git.source.staged": "В индексе",
  "git.source.branch": "Все изменения ветки",
  "git.source.lastTurn": "Последний ход",
  "git.source.workspaceScope":
    "По умолчанию показывается только область текущего проекта.",
  "git.source.lastTurnTurn": "Снимок файлов задачи из хода {turn}",
  "git.section.staged": "В индексе",
  "git.section.unstaged": "Вне индекса",
  "git.section.untracked": "Неотслеживаемые",
  "git.section.conflicted": "Конфликтные",
  "git.section.branch": "Сравнение веток",
  "git.section.lastTurn": "Последний ход",
  "git.kind.modified": "Изменён",
  "git.kind.added": "Добавлен",
  "git.kind.deleted": "Удалён",
  "git.kind.renamed": "Переименован",
  "git.kind.conflicted": "Конфликт",
  "git.diff.title": "Предпросмотр diff",
  "git.diff.selectFile": "Выберите файл для предпросмотра diff",
  "git.diff.selectFileDescription":
    "Переключайте источники, раскрывайте каталоги и выбирайте файл слева, чтобы увидеть его diff здесь.",
  "git.diff.binaryTitle": "Предпросмотр бинарного diff недоступен",
  "git.diff.truncatedTitle": "Diff сокращён",
  "git.diff.unavailableTitle": "Этот diff сейчас недоступен",
  "git.diff.unavailableDescription":
    "Временные данные содержат только сводную информацию. Полные результаты появятся после подключения реального сервиса.",
  "diff.loading.description":
    "Загружаем реальные данные diff из окружения, которому принадлежит этот проект.",
  "diff.error.title": "Не удалось загрузить данные diff",
  "diff.error.description": "Попробуйте позже. Текущая ошибка: {message}",
  "diff.preview.truncatedLines":
    "Предпросмотр diff усечён, чтобы интерфейс оставался отзывчивым: пропущено строк: {count}.",
  "sidePane.tabOverview": "Поиск вкладок",
  "sidePane.searchTabs": "Поиск вкладок…",
  "sidePane.openTabs": "Открытые вкладки",
  "sidePane.recentlyClosedTabs": "Недавно закрытые вкладки",
  "sidePane.noTabsFound": "Вкладки не найдены.",
  "sidePane.closeTab": "Закрыть {title}",
  "sidePane.closeCurrentTab": "Закрыть вкладку",
  "sidePane.closeOtherTabs": "Закрыть другие вкладки",
  "sidePane.closeAllTabs": "Закрыть все вкладки",
  "sidePane.openedRelativeTime": "Открыта {time}",
  "sidePane.closedRelativeTime": "Закрыта {time}",
  "sidePane.time.justNow": "только что",
  "sidePane.time.minutesAgo": "{count} мин назад",
  "sidePane.time.hoursAgo": "{count} ч назад",
  "sidePane.time.daysAgo": "{count} дн. назад",
  "git.action.refresh": "Обновить",
  "git.action.stage": "Добавить в индекс",
  "git.action.unstage": "Убрать из индекса",
  "git.action.discard": "Сбросить",
  "git.action.commit": "Коммит",
  "git.action.showTree": "Показать дерево файлов",
  "git.action.hideTree": "Скрыть дерево файлов",
  "git.changeContext.revealInFileManager": "Открыть в файловом менеджере",
  "git.changeContext.revealInFileTree": "Показать в дереве файлов",
  "git.close": "Закрыть панель Git",
  "git.tree.toggleFolder": "Развернуть или свернуть папку",
  "git.tree.searchPlaceholder": "Фильтр файлов…",
  "git.tree.clearSearch": "Сбросить фильтр файлов",
  "git.tree.emptyTitle": "Здесь нет доступных каталогов",
  "git.tree.emptyDescription":
    "Этот источник пока не содержит структуры каталогов для навигации.",
  "git.tree.emptySearchTitle": "Нет файлов, соответствующих этому фильтру",
  "git.tree.emptySearchDescription":
    "Измените поисковый запрос или сбросьте фильтр, чтобы увидеть все файлы в текущем дереве.",
  "git.tree.emptyDirectoryTitle": "В этом каталоге нет изменённых файлов",
  "git.tree.emptyDirectoryDescription":
    "Переключитесь на другой каталог или щёлкните текущий каталог ещё раз, чтобы вернуться к полному списку.",
  "git.selection.count": "Выбрано: {count}",
  "git.selection.toggle": "Переключить выбор для {file}",
  "git.empty.title": "В этом источнике нет изменений",
  "git.empty.description":
    "Переключитесь на другой источник или подождите, пока в этом проекте появятся новые изменения Git.",
  "git.loading.description":
    "Читаем статус Git и изменённые файлы текущего проекта.",
  "git.error.title": "Не удалось загрузить изменения Git",
  "git.error.description": "Git вернул ошибку: {message}",
  "git.empty.gitUnavailableTitle": "Git недоступен в этой среде",
  "git.empty.gitUnavailableDescription":
    "Сначала установите Git или убедитесь, что текущая среда выполнения может запускать команду git.",
  "git.empty.notRepositoryTitle": "Этот проект находится вне репозитория Git",
  "git.empty.notRepositoryDescription":
    "Откройте каталог репозитория Git, и панель покажет изменения в рамках текущего проекта.",
  "git.empty.lastTurnTitle":
    "В текущей задаче пока нет изменений файлов за последний ход",
  "git.empty.lastTurnDescription":
    "Когда агент запишет файлы, это представление использует имеющийся снимок задачи для просмотра в режиме только для чтения.",
  "git.commit.identityTitle": "Идентификация коммита",
  "git.commit.identityMissing":
    "Загрузка реальных user.name / user.email ещё не подключена, поэтому кнопка коммита пока неактивна.",
  "git.commit.noStagedChanges":
    "В индексе пока нет изменений. Выберите файлы слева и добавьте их в индекс.",
  "git.commit.enterMessage": "Введите сообщение коммита.",
  "git.commit.ready":
    "Валидация на клиенте пройдена. Реальный коммит заработает после подключения слоя сервиса.",
  "git.commit.placeholder":
    "Введите сообщение коммита (только заполнитель интерфейса, реальный git commit пока не выполняется)",
  "git.actionMenu.trigger": "Коммит или отправка",
  "git.actionMenu.trigger.ariaLabel": "Коммит или отправка",
  "git.actionMenu.push": "Отправить",
  "git.actionMenu.commitDialog.title": "Коммит изменений",
  "git.actionMenu.commitDialog.description":
    "Сохранить текущие незафиксированные изменения проекта как коммит.",
  "git.actionMenu.commitDialog.currentBranchLabel": "Текущая ветка",
  "git.actionMenu.commitDialog.changesLabel": "Изменения",
  "git.actionMenu.commitDialog.changesValue": "{count} файл(ов)",
  "git.actionMenu.commitDialog.messageLabel": "Сообщение коммита",
  "git.actionMenu.commitDialog.messagePlaceholder":
    "Сообщение коммита (оставьте пустым для генерации)",
  "git.actionMenu.commitDialog.messageHelper":
    "Кнопка «Сгенерировать» заполнит сообщение перед коммитом.",
  "git.actionMenu.commitDialog.generate": "Сгенерировать сообщение",
  "git.actionMenu.commitDialog.regenerate": "Сгенерировать заново",
  "git.actionMenu.commitDialog.includeUnstaged":
    "Включить изменения вне индекса",
  "git.actionMenu.commitDialog.action.commit": "Коммит",
  "git.actionMenu.commitDialog.action.commitAndPush": "Коммит и отправка",
  "git.actionMenu.commitDialog.confirm": "Коммит",
  "git.actionMenu.commitDialog.identityMissing":
    "Идентификация Git для коммитов пока не настроена. Сначала задайте user.name и user.email.",
  "git.actionMenu.commitDialog.error.noChanges": "Нет изменений для коммита.",
  "git.actionMenu.commitDialog.error.messageRequired":
    "Введите или сгенерируйте сообщение коммита перед фиксацией.",
  "git.actionMenu.commitDialog.error.generateFailed":
    "Не удалось сгенерировать сообщение коммита. Попробуйте снова или введите его вручную.",
  "git.actionMenu.commitDialog.error.requestFailed":
    "Не удалось выполнить коммит: {error}",
  "git.actionMenu.commitDialog.error.pushAfterCommitFailed":
    "Коммит выполнен, но отправка не удалась: {error}",
  "git.actionMenu.commitDialog.toast.success": "Текущие изменения закоммичены",
  "git.actionMenu.commitDialog.toast.commitAndPushSuccess":
    "Текущие изменения закоммичены и отправлены",
  "git.actionMenu.pushDialog.title": "Отправка изменений",
  "git.actionMenu.pushDialog.description.tracked":
    "Отправить последние коммиты текущей ветки в удалённую ветку.",
  "git.actionMenu.pushDialog.description.untracked":
    "Первая отправка опубликует текущую ветку в удалённом репозитории и настроит её upstream.",
  "git.actionMenu.pushDialog.currentBranchLabel": "Ветка",
  "git.actionMenu.pushDialog.upstreamLabel": "Удалённая ветка",
  "git.actionMenu.pushDialog.aheadBehindLabel": "Статус синхронизации",
  "git.actionMenu.pushDialog.aheadBehindValue":
    "Впереди {ahead} / Позади {behind}",
  "git.actionMenu.pushDialog.upstreamPending":
    "Первая отправка автоматически создаст upstream-ветку для текущей ветки.",
  "git.actionMenu.pushDialog.pushLabel": "Следующий шаг",
  "git.actionMenu.pushDialog.pushValue": "Отправить",
  "git.actionMenu.pushDialog.upToDate":
    "На текущей ветке нет коммитов для отправки.",
  "git.actionMenu.pushDialog.confirm": "Отправить",
  "git.actionMenu.pushDialog.error.summary":
    "Не удалось отправить изменения. Проверьте подробности ошибки ниже.",
  "git.actionMenu.pushDialog.error.detailsLabel": "Подробности ошибки",
  "git.actionMenu.pushDialog.error.copy": "Копировать ошибку",
  "git.actionMenu.pushDialog.error.copy.copied": "Скопировано",
  "git.actionMenu.pushDialog.error.copyFailed":
    "Не удалось скопировать сведения об ошибке: {error}",
  "git.actionMenu.pushDialog.error.requestFailed":
    "Не удалось выполнить отправку: {error}",
  "git.actionMenu.pushDialog.toast.success": "Изменения отправлены в {target}",
  "git.branchSwitcher.label": "Ветка",
  "git.branchSwitcher.trigger.ariaLabel": "Переключить ветку Git",
  "git.branchSwitcher.searchPlaceholder": "Поиск веток",
  "git.branchSwitcher.section.branches": "Ветки",
  "git.branchSwitcher.empty": "Нет подходящих веток",
  "git.branchSwitcher.currentDirty":
    "Незафиксированные изменения: {count} файл(ов)",
  "git.branchSwitcher.createAction": "Создать и переключиться на новую ветку…",
  "git.branchSwitcher.createDialog.title":
    "Создать и переключиться на новую ветку",
  "git.branchSwitcher.createDialog.description":
    "Создать новую локальную ветку от текущего HEAD и в случае успеха сразу переключиться на неё.",
  "git.branchSwitcher.createDialog.nameLabel": "Название ветки",
  "git.branchSwitcher.createDialog.placeholder":
    "Например, feature/git-branch-switcher",
  "git.branchSwitcher.createDialog.helper":
    "Поддерживается только создание и переключение от текущего HEAD.",
  "git.branchSwitcher.createDialog.confirm": "Создать и переключиться",
  "git.branchSwitcher.blockedDialog.title":
    "Коммит изменений для переключения ветки",
  "git.branchSwitcher.blockedDialog.description.tracked":
    "При переключении ваши изменения в следующих файлах будут перезаписаны:",
  "git.branchSwitcher.blockedDialog.description.untracked":
    "При переключении следующие неотслеживаемые файлы будут перезаписаны:",
  "git.branchSwitcher.blockedDialog.filesLabel": "Затронутые файлы",
  "git.branchSwitcher.blockedDialog.helper":
    "Сначала закоммитьте текущие изменения, затем продолжите переключение веток.",
  "git.branchSwitcher.blockedDialog.submitAction":
    "Закоммитить и переключить ветку…",
  "git.branchSwitcher.commitDialog.title": "Коммит изменений",
  "git.branchSwitcher.commitDialog.description":
    "После завершения коммита переключение на {branchName} продолжится автоматически.",
  "git.branchSwitcher.commitDialog.currentBranchLabel": "Текущая ветка",
  "git.branchSwitcher.commitDialog.targetBranchLabel": "Целевая ветка",
  "git.branchSwitcher.commitDialog.changesLabel": "Изменения",
  "git.branchSwitcher.commitDialog.changesValue": "{count} файл(ов)",
  "git.branchSwitcher.commitDialog.messageLabel": "Сообщение коммита",
  "git.branchSwitcher.commitDialog.messagePlaceholder":
    "Оставьте пустым, чтобы сгенерировать сообщение коммита автоматически",
  "git.branchSwitcher.commitDialog.messageHelper":
    "По умолчанию будут закоммичены все незафиксированные изменения текущего проекта.",
  "git.branchSwitcher.commitDialog.confirm": "Закоммитить и переключить ветку",
  "git.branchSwitcher.commitDialog.identityMissing":
    "Идентификация Git для коммитов пока не настроена. Сначала задайте user.name и user.email.",
  "git.branchSwitcher.commitDialog.error.requestFailed":
    "Не удалось выполнить коммит: {error}",
  "git.branchSwitcher.toast.switchSuccess":
    "Выполнено переключение на ветку {branchName}",
  "git.branchSwitcher.toast.createSuccess":
    "Ветка {branchName} создана, выполнено переключение на неё",
  "git.branchSwitcher.error.invalidBranchName":
    "Название ветки недопустимо. Введите другое название.",
  "git.branchSwitcher.error.branchAlreadyExists":
    "Такая ветка уже существует. Выберите другое название.",
  "git.branchSwitcher.error.targetBranchNotFound":
    "Целевой ветки пока нет локально.",
  "git.branchSwitcher.error.trackedOverwrite":
    "Переключение заблокировано, так как отслеживаемые файлы будут перезаписаны: {paths}{extraPaths}.",
  "git.branchSwitcher.error.untrackedOverwrite":
    "Переключение заблокировано, так как неотслеживаемые файлы будут перезаписаны: {paths}{extraPaths}.",
  "git.branchSwitcher.error.moreFiles": " и ещё {count} файл(ов)",
  "git.branchSwitcher.error.conflictsPresent":
    "В репозитории остались неразрешённые конфликты. Устраните их перед переключением веток.",
  "git.branchSwitcher.error.operationInProgress":
    "Выполняется другая операция Git. Завершите её перед переключением веток.",
  "git.branchSwitcher.error.branchInOtherWorktree":
    "Эта ветка уже используется в другом worktree.",
  "git.branchSwitcher.error.unknown":
    "Не удалось переключить ветку. Попробуйте снова.",
  "git.branchSwitcher.error.requestFailed":
    "Не удалось выполнить операцию с веткой: {error}",
  "gitGraph.title": "Git Graph",
  "gitGraph.subtitle": "{count} коммит(ов) в {lanes} линиях",
  "gitGraph.subtitle.hasMore": "Последние {count} коммит(ов) в {lanes} линиях",
  "gitGraph.metric.merges": "Слияний: {count}",
  "gitGraph.metric.refs": "Ссылок: {count}",
  "gitGraph.graphAriaLabel": "Граф коммитов Git",
  "gitGraph.selectedCommit": "Выбранный коммит",
  "gitGraph.inspectAction": "Просмотреть коммит",
  "gitGraph.menuAction": "Git Graph",
  "gitGraph.dialogDescription":
    "Просмотр графа коммитов текущего репозитория.",
  "gitGraph.column.graph": "Граф",
  "gitGraph.column.description": "Описание",
  "gitGraph.column.date": "Дата",
  "gitGraph.column.author": "Автор",
  "gitGraph.column.commit": "Коммит",
  "gitGraph.detail.subject": "Тема",
  "gitGraph.detail.commit": "Коммит",
  "gitGraph.detail.author": "Автор",
  "gitGraph.detail.date": "Дата",
  "gitGraph.detail.parents": "Родители",
  "gitGraph.empty.title": "Нет коммитов",
  "gitGraph.empty.description":
    "В этом репозитории пока нет истории коммитов.",
  "gitGraph.error.requestFailed": "Не удалось загрузить Git Graph: {error}",
  "gitGraph.refresh": "Обновить Git Graph",
  "gitGraph.refreshFailed": "Не удалось обновить Git Graph: {error}",
  "gitGraph.loadMore": "Загрузить ещё коммиты",
  "gitGraph.loadMore.loading": "Загрузка…",
  "codeViewer.title": "Просмотр кода",
  "codeViewer.close": "Закрыть просмотр кода",
  "codeViewer.loadingFile": "Загрузка файла...",
  "codeViewer.loadingImage": "Загрузка предпросмотра изображения...",
  "codeViewer.fileMissing":
    "Файл не существует, либо эта среда не имеет доступа к этому пути.",
  "codeViewer.binary":
    "Похоже, это двоичные данные, поэтому пока файл нельзя показать как код.",
  "codeViewer.imageUnavailable": "Предпросмотр изображения сейчас недоступен.",
  "codeViewer.loadingMedia": "Загрузка предпросмотра медиа...",
  "codeViewer.mediaUnavailable": "Предпросмотр медиа сейчас недоступен.",
  "codeViewer.mediaUnsupported":
    "Эта среда не может воспроизвести этот формат медиа.",
  "codeViewer.mediaLoadFailed":
    "Не удалось загрузить медиафайл. Попробуйте позже или откройте его во внешнем приложении.",
  "codeViewer.loadingPdf": "Загрузка предпросмотра PDF...",
  "codeViewer.pdfUnavailable": "Предпросмотр PDF сейчас недоступен.",
  "codeViewer.pdf.loading": "Загрузка PDF...",
  "codeViewer.pdf.loadError": "Не удалось загрузить PDF",
  "codeViewer.pdf.noData": "Нет данных PDF",
  "codeViewer.pdf.previousPage": "Предыдущая страница",
  "codeViewer.pdf.nextPage": "Следующая страница",
  "codeViewer.pdf.pageInput": "Номер страницы",
  "codeViewer.pdf.zoomIn": "Увеличить",
  "codeViewer.pdf.zoomOut": "Уменьшить",
  "codeViewer.officeUnavailable":
    "Этот файл Office нельзя показать в предпросмотре.",
  "codeViewer.officeTooLarge":
    "Файл Office слишком велик для предпросмотра (максимум 25 МБ).",
  "codeViewer.excel.sheetTabs": "Листы книги",
  "codeViewer.loadingPptx": "Загрузка предпросмотра презентации...",
  "codeViewer.pptxUnavailable": "Предпросмотр презентации сейчас недоступен.",
  "codeViewer.pptx.loading": "Загрузка презентации...",
  "codeViewer.pptx.loadError": "Не удалось загрузить презентацию",
  "codeViewer.pptx.noSlides": "В этой презентации нет слайдов",
  "codeViewer.pptx.fileTooLarge":
    "Презентация превышает лимит предпросмотра 64 МБ.",
  "codeViewer.pptx.legacyFileTooLarge":
    "Эта удалённая среда поддерживает предпросмотр презентаций до 8 МБ.",
  "codeViewer.pptx.incomplete":
    "Презентация изменилась или была обрезана во время чтения, поэтому её нельзя показать. Попробуйте ещё раз.",
  "codeViewer.pptx.previousPage": "Предыдущий слайд",
  "codeViewer.pptx.nextPage": "Следующий слайд",
  "codeViewer.pptx.pageInput": "Номер слайда",
  "codeViewer.pptx.zoomIn": "Увеличить",
  "codeViewer.pptx.selectElement": "Выбрать элемент",
  "codeViewer.pptx.exitElementSelection": "Выйти из режима выбора",
  "codeViewer.pptx.aiEdit": "ИИ-правка",
  "codeViewer.pptx.commentPlaceholder":
    "Добавьте комментарий к этому элементу",
  "codeViewer.pptx.cancelAiEdit": "Отмена",
  "codeViewer.pptx.addToConversation": "Добавить в чат",
  "codeViewer.pptx.zoomOut": "Уменьшить",
  "codeViewer.pptx.thumbnails": "Миниатюры слайдов",
  "codeViewer.pptx.thumbnail": "Слайд {pageNumber}",
  "codeViewer.pptx.exportPdf": "Экспортировать в PDF",
  "codeViewer.pptx.exportingPdf": "Экспорт PDF...",
  "codeViewer.pptx.exportPdfSuccess": "PDF сохранён в {path}",
  "codeViewer.pptx.exportPdfFailed": "Не удалось экспортировать PDF",
  "codeViewer.empty": "Файл пуст",
  "codeViewer.fileTooLarge":
    "Файл превышает лимит предпросмотра 256 КБ. Откройте его в другом редакторе, чтобы увидеть содержимое полностью.",
  "codeViewer.viewCode": "Показать код",
  "codeViewer.viewDiff": "Показать дифф",
  "codeViewer.openSourcePreview": "Предпросмотр исходного кода",
  "codeViewer.markdownMode": "Markdown",
  "codeViewer.markdownPreview": "Предпросмотр",
  "codeViewer.markdownSource": "Исходный код",
  "codeViewer.svgMode": "SVG",
  "codeViewer.svgPreview": "Предпросмотр",
  "codeViewer.svgSource": "Код",
  "codeViewer.wrapLines": "Переносить строки",
  "codeBlock.mermaid.ariaLabel": "Диаграмма Mermaid",
  "codeBlock.wrapLines": "Переносить строки",
  "codeBlock.copyCode": "Копировать код",
  "codeBlock.mermaid.empty": "Исходный код Mermaid пуст.",
  "codeBlock.mermaid.error": "Не удалось отрисовать диаграмму Mermaid",
  "codeBlock.mermaid.openPreview": "Открыть предпросмотр",
  "codeBlock.mermaid.previewDescription":
    "Предпросмотр диаграммы Mermaid с масштабированием и перемещением.",
  "codeBlock.mermaid.zoomIn": "Увеличить",
  "codeBlock.mermaid.zoomOut": "Уменьшить",
  "codeBlock.mermaid.zoomLevel": "Масштаб",
  "codeBlock.mermaid.zoomToPercent": "Масштаб {percent}%",
  "codeBlock.mermaid.zoomToFit": "Вписать в окно",
  "codeBlock.mermaid.fit": "Вписать в окно",
  "codeBlock.mermaid.resetZoom": "Сбросить масштаб",
  "codeBlock.mermaid.reset": "Сбросить масштаб",
  "codeBlock.mermaid.close": "Закрыть предпросмотр",
  "codeBlock.mermaid.loading": "Отрисовка диаграммы...",
  "codeBlock.mermaid.source": "Исходный код",
  "markdownTable.copyMarkdown": "Копировать Markdown",
  "markdownTable.downloadCsv": "Скачать CSV",
  "markdownTable.openPreview": "Предпросмотр таблицы",
  "markdownTable.expandScrollMode": "Развернуть область прокрутки таблицы",
  "markdownTable.collapseScrollMode": "Свернуть область прокрутки таблицы",
  "markdownTable.previewTitle": "Предпросмотр таблицы",
  "markdownTable.previewDescription":
    "Просмотрите таблицу в увеличенном виде с прокруткой.",
  "markdownTable.copySucceeded": "Таблица Markdown скопирована",
  "markdownTable.copyFailed": "Не удалось скопировать таблицу: {error}",
  "markdownTable.downloadFailed": "Не удалось скачать таблицу",
  "codeViewer.comment.add": "Добавить комментарий",
  "codeViewer.comment.addTooltip":
    "Нажмите или выделите код, чтобы оставить комментарий",
  "codeViewer.comment.placeholder":
    "Необязательный комментарий к этому коду...",
  "codeViewer.comment.submit": "Добавить в чат",
  "codeViewer.comment.delete": "Удалить комментарий",
  "codeViewer.comment.line": "Комментарий к строке {line}",
  "codeViewer.comment.range":
    "Комментарий к строкам с {startLine} по {endLine}",
  "codeViewer.comment.contextLabel": "Контекст кода",
  "codeViewer.comment.commentLabel": "Комментарий",
  "codeViewer.review.targetLineMissing":
    "Целевой строки не существует. Комментарий показан в начале файла.",
  "chat.codeComments.one": "1 комментарий",
  "chat.codeComments.many": "Комментариев: {count}",
  "chat.codeComments.remove": "Удалить комментарии к коду",
  "chat.codeCommentCards.expandAll": "Показать комментарии: {count}",
  "chat.codeCommentCards.collapseAll": "Свернуть комментарии",
  "chat.codeCommentCards.openReview": "Открыть код-ревью: {title}",
  "chat.webElements.one": "1 веб-элемент",
  "chat.pptxElements.one": "1 элемент слайда",
  "chat.pptxElements.many": "Элементов слайдов: {count}",
  "chat.pptxElements.remove": "Удалить элемент слайда",
  "chat.pptxElements.previewFileMissing":
    "Указанная презентация больше не существует.",
  "chat.pptxElements.previewPageMissing":
    "Слайда {pageNumber} больше нет. Вместо него открыта презентация.",
  "chat.pptxElements.previewSourceChanged":
    "Презентация изменилась. Открыт слайд {pageNumber}, но его содержимое может отличаться.",
  "chat.pptxElements.previewScopeUnavailable":
    "Эта ссылка на презентацию недоступна в текущем проекте.",
  "chat.webElements.many": "{count} веб-элементов",
  "chat.webElements.remove": "Убрать веб-элементы из контекста",
  "appHeader.openInFinder": "Открыть в Finder",
  "appHeader.openInFileExplorer": "Открыть в Проводнике",
  "appHeader.openInFileManager": "Открыть в файловом менеджере",
  "appHeader.openInFileManagerFailed":
    "Не удалось открыть в системном файловом менеджере",
  "appHeader.openInEditor": "Открыть в {editor}",
  "appHeader.selectOpenApp": "Выбрать приложение",
  "appHeader.copyPath": "Копировать путь",
  "fileActions.copyAbsolutePath": "Копировать абсолютный путь",
  "fileActions.copyRelativePath": "Копировать относительный путь",
  "appHeader.copyTaskPath": "Копировать путь задачи",
  "appHeader.copySessionId": "Копировать ID сессии",
  "appHeader.reloadSession": "Перезагрузить сессию",
  "appHeader.reloadSessionSuccess": "Сессия перезагружена",
  "appHeader.reloadSessionFailed": "Не удалось перезагрузить сессию",
  "appHeader.workspaceSessionActionLoading": "Применение изменений сессии…",
  "appHeader.copyLogPath": "Копировать путь лога",
  "workspaceHeader.help.menu": "Справка",
  "workspaceHeader.help.issueReport": "Сообщить о проблеме",
  "workspaceHeader.help.productRequest": "Запросить функцию",
  "workspaceHeader.help.productRequestDraft": "Хочу предложить: ",
  "workspaceHeader.help.community": "Сообщество пользователей",
  "workspaceHeader.help.docs": "Документация",
  "titleBar.menu.file": "Файл",
  "titleBar.menu.view": "Вид",
  "titleBar.menu.help": "Справка",
  "titleBar.menu.file.newTask": "Новая задача",
  "titleBar.menu.file.openWorkspace": "Открыть проект",
  "titleBar.menu.file.closeWindow": "Закрыть окно",
  "titleBar.windowMenu": "Меню окна",
  "titleBar.window.minimize": "Свернуть окно",
  "titleBar.window.toggleMaximize": "Развернуть или восстановить окно",
  "titleBar.menu.view.toggleFullScreen": "Переключить полноэкранный режим",
  "titleBar.menu.view.actualSize": "Фактический размер",
  "titleBar.menu.view.zoomIn": "Увеличить",
  "titleBar.menu.view.zoomOut": "Уменьшить",
  "titleBar.menu.help.about": "О ZCode",
  "titleBar.menu.help.checkForUpdates": "Проверить обновления",
  "titleBar.menu.help.feedback": "Отзыв",
  "sidebar.menu.community": "Сообщество",
  "titleBar.menu.help.exportLogs": "Экспортировать журналы",
  "titleBar.menu.help.toggleDevTools":
    "Показать или скрыть инструменты разработчика",
  "titleBar.menu.help.resourceManager": "Диспетчер ресурсов",
  "titleBar.menu.help.toggleZCodeStdioTap": "Захват stdio-трафика агента",
  "titleBar.menu.help.clearAllData": "Очистить все данные",
  "directoryBrowser.title": "Обзор папки",
  "directoryBrowser.pathPlaceholder": "Введите путь",
  "directoryBrowser.go": "Перейти",
  "directoryBrowser.showHidden": "Показать скрытые каталоги",
  "directoryBrowser.hideHidden": "Скрыть скрытые каталоги",
  "directoryBrowser.noSubdirs": "Нет подкаталогов",
  "directoryBrowser.selectDir": "Выбрать этот каталог",
  "directoryBrowser.errorSystem": "Не удалось получить сведения о системе",
  "directoryBrowser.errorReadDir": "Не удалось прочитать каталог: {error}",
  "updateReady.shortTitle": "Обновление",
  "updateReady.title": "Обновление v{version}",
  "updateReady.releaseNotesTitle": "Что нового в v{version}",
  "updateReady.tooltip":
    "v{version} готова, нажмите для перезапуска и обновления",
  "updateAvailable.tooltip":
    "Доступна новая версия v{version}. Нажмите, чтобы посмотреть.",
  "updateReady.confirm.title": "Обновить до v{version}?",
  "updateReady.confirm.description":
    "Приложение закроется и перезапустится для обновления. Запущенные задачи будут прерваны.",
  "updateReady.confirm.ok": "Перезапустить и обновить",
  "updateReady.confirm.cancel": "Позже",
  "updateDialog.availableTitle": "Новая версия v{version}",
  "updateDialog.downloadingTitle": "Загрузка v{version}",
  "updateDialog.readyTitle": "v{version} готова",
  "updateDialog.releaseDate": "{date}",
  "updateDialog.releaseNotesExpand": "Показать",
  "updateDialog.releaseNotesCollapse": "Скрыть",
  "updateDialog.downloadAndUpdate": "Загрузить обновление",
  "updateDialog.cancelDownload": "Отменить загрузку",
  "updateDialog.autoDownloadAndInstall":
    "Впредь автоматически загружать и устанавливать обновления",
  "updateDialog.downloadingAction": "Загрузка",
  "updateDialog.downloadProgress": "Прогресс загрузки",
  "updateDialog.restartToUpdate": "Перезапустить и обновить",
  "updateDialog.skipVersion": "Пропустить эту версию",
  "updateDialog.later": "Позже",
  "update.toast.upToDate": "У вас последняя версия (v{version})",
  "update.toast.available": "Доступна новая версия v{version}",
  "update.toast.downloading": "Загрузка новой версии v{version}",
  "update.toast.alreadyDownloading": "Загрузка новой версии ({progress}%)",
  "update.toast.ready":
    "Версия v{version} загружена, перезапустите для установки",
  "update.toast.devSkipped": "Обновления отключены в dev-сборках",
  "update.toast.error": "Не удалось проверить обновления: {error}",
  "forceUpdate.title": "Обновите ZCode, чтобы продолжить",
  "forceUpdate.description":
    "Ваша текущая версия v{currentVersion} ниже минимально поддерживаемой версии v{minimalVersion}. Сначала обновите клиент, чтобы продолжить работу.",
  "forceUpdate.currentVersion": "Текущая версия",
  "forceUpdate.minimalVersion": "Минимальная версия",
  "forceUpdate.action.check": "Проверить и скачать обновление",
  "forceUpdate.action.restart": "Перезапустить для установки обновления",
  "forceUpdate.action.reload": "Перезагрузить страницу",
  "desktopMenu.help.checkingForUpdates": "Проверка обновлений...",
  "desktopMenu.help.updateAvailableVersion": "Доступно обновление {version}",
  "desktopMenu.help.downloadingUpdateVersion":
    "Загрузка обновления {version}...",
  "desktopMenu.help.downloadingUpdateProgress":
    "Загрузка обновления... {progress}",
  "desktopMenu.help.restartUpdateAction": "Перезапустить для обновления",
  "desktopMenu.help.restartToUpdate":
    "Перезапустить для обновления ({version})",
  "postUpdateReleaseNotes.title": "Примечания к релизу",
  "postUpdateReleaseNotes.acknowledge": "Понятно",
  "projectSelector.heroTitle": "Открывайте быстро. Не отвлекайтесь.",
  "projectSelector.heroDescription":
    "Выберите проект, вернитесь к работе и держите интерфейс чистым.",
  "appError.title": "В приложении возникла проблема",
  "appError.description":
    "Ошибка страницы была перехвачена, поэтому приложению не нужно переключаться на пустой экран. Сначала попробуйте ещё раз, а если проблема повторится, перезагрузите приложение.",
  "appError.retry": "Повторить",
  "appError.reload": "Перезагрузить приложение",
  "appError.hint":
    "Диагностические данные записаны, это поможет разобраться в проблеме.",
  "appError.details": "Показать стек компонентов",
  "appError.unknown": "Неизвестная ошибка",
  "appError.sectionTitle": "В этом разделе возникла проблема",
  "appError.sectionDescription":
    "Ошибка изолирована в этом разделе, поэтому остальная часть приложения продолжает работать. Сначала попробуйте ещё раз, а если проблема повторится, перезагрузите приложение.",
  "appError.sectionRetry": "Попробовать ещё раз",
  "appError.sectionHint":
    "Диагностические данные записаны, это поможет разобраться в проблеме.",
  "workspace.openWorkspace": "Открыть проект",
  "workspace.addNewWorkspace": "Добавить проект",
  "workspace.startFromScratch": "Начать с нуля",
  "workspace.openFolder": "Открыть папку",
  "workspace.openPluginsSettings": "Маркетплейс плагинов",
  "workspace.backToWorkspace": "Назад к проекту",
  "workspace.noActiveForNewTask":
    "Доступных проектов пока нет. Сначала откройте проект.",
  "workspace.wslUncPrompt.title": "Открыть через удалённое подключение WSL?",
  "workspace.wslUncPrompt.description":
    "Вы выбрали путь WSL:\n{path}\n\nРекомендуем открыть его через подключение WSL, но можно продолжить и с этим путём.",
  "workspace.wslUncPrompt.openWsl": "Открыть подключение WSL",
  "workspace.wslUncPrompt.continuePath": "Продолжить с этим путём",
  "workspaceSidebar.workspaces": "Задачи",
  "workspaceSidebar.archivedTasks": "Архив",
  "workspaceSidebar.taskViewOptions": "Фильтры и сортировка",
  "workspaceSidebar.organize": "Вид",
  "workspaceSidebar.organizeGrouped": "Группировка",
  "workspaceSidebar.organizeByProject": "Проект",
  "workspaceSidebar.conversationsSection": "Задачи",
  "workspaceSidebar.projectsSection": "Проекты",
  "workspaceSidebar.newConversation": "Новая задача",
  "workspaceSidebar.reorderSection": "Переместить раздел {section}",
  "workspaceSidebar.addProject": "Добавить проект",
  "workspaceSidebar.noConversations": "Задач пока нет",
  "workspaceSidebar.noProjects": "Нет открытых проектов",
  "workspaceSidebar.viewByWorkspace": "По проекту",
  "workspaceSidebar.organizeChronologicalList": "Хронология",
  "workspaceSidebar.sortBy": "Сортировка",
  "workspaceSidebar.sortByCreated": "Время создания",
  "workspaceSidebar.sortByUpdated": "Время обновления",
  "workspaceSidebar.expandAllGroups": "Развернуть все",
  "workspaceSidebar.collapseAllGroups": "Свернуть все",
  "workspaceSidebar.searchTasks": "Поиск задач",
  "workspaceSidebar.searchTasksPlaceholder": "Поиск задач…",
  "workspaceSidebar.searchArchivedTasksPlaceholder": "Поиск архивных задач…",
  "workspaceSidebar.closeTaskSearch": "Закрыть поиск задач",
  "workspaceSidebar.remove": "Удалить",
  "workspaceSidebar.removeRunningWorkspace.title":
    "Удалить запущенный проект?",
  "workspaceSidebar.removeRunningWorkspace.description":
    "В этом проекте ещё выполняется чат или агент. При удалении он будет остановлен, связанное состояние выполнения освободится, но история задач не будет удалена.",
  "workspaceSidebar.removeRunningWorkspace.confirm": "Удалить и остановить",
  "workspaceSidebar.windowsReservedNameRisk":
    "Проект удалён, но обнаружены файлы с зарезервированными именами Windows ({count}); они могут помешать последующему удалению или переименованию папки: {path}",
  "workspaceSidebar.reconnect": "Переподключиться",
  "workspaceSidebar.connecting": "Подключение",
  "workspaceSidebar.notConnected": "Нет подключения",
  "workspaceSidebar.empty":
    "Проектов пока нет. Откройте проект, чтобы начать.",
  "workspaceSidebar.unavailableLocalDirectory":
    "Каталог проекта не существует или недоступен. Сейчас можно только просматривать историю. Восстановите каталог и перезапустите ZCode, чтобы продолжить.",
  "workspaceSidebar.showSidebar": "Показать или скрыть боковую панель",
  "workspaceSidebar.hideSidebar": "Показать или скрыть боковую панель",
  "workspaceSidebar.toggleSidebar": "Показать или скрыть боковую панель",
  "workspaceSidebar.resizeSidebar": "Изменить размер боковой панели",
  "workspaceSidebar.toggleArchivedTasks": "Архив",
  "workspaceSidebar.showFileTree": "Показать файлы",
  "workspaceSidebar.sshConnectionTitle": "SSH-подключение",
  "workspaceSidebar.sshConnectionAlias": "Псевдоним",
  "workspaceSidebar.sshConnectionHost": "Хост",
  "workspaceSidebar.sshConnectionPath": "Путь",
  "workspaceFileTree.title": "Проект",
  "workspaceFileTree.backToTasks": "Назад к задачам",
  "workspaceFileTree.refresh": "Обновить дерево файлов",
  "workspaceFileTree.empty": "Этот каталог пуст.",
  "workspaceFileTree.noResults": "Подходящих файлов нет.",
  "workspaceFileTree.searchLabel": "Поиск файлов",
  "workspaceFileTree.searchPlaceholder": "Поиск файлов…",
  "workspaceFileTree.clearSearch": "Очистить поиск файлов",
  "workspaceFileTree.showChangedFiles": "Показать только изменённые",
  "workspaceFileTree.showAllFiles": "Показать все файлы",
  "workspaceFileTree.readFailed": "Не удалось прочитать каталог",
  "workspaceFileTree.openWith": "Открыть с помощью",
  "workspaceFileTree.openInBrowser": "Открыть во встроенном браузере",
  "workspaceFileTree.openFailed": "Не удалось открыть этот элемент",
  "workspaceFileTree.addToChat": "Добавить в чат",
  "workspaceFileTree.gitStatus.ignored": "Игнорируемые",
  "ssh.trigger": "SSH-подключение",
  "ssh.title": "Удалённое подключение по SSH",
  "ssh.host": "Хост",
  "ssh.hostPlaceholder": "Введите адрес или IP, например 192.168.1.100",
  "ssh.port": "Порт",
  "ssh.username": "Имя пользователя",
  "ssh.usernamePlaceholder": "Введите имя пользователя, например root",
  "ssh.authMethod": "Способ аутентификации",
  "ssh.auth.password": "Пароль",
  "ssh.auth.privateKey": "Приватный ключ",
  "ssh.assetInstallMode": "Способ загрузки ресурсов",
  "ssh.assetInstallMode.local-download-upload":
    "Скачать локально, затем загрузить",
  "ssh.assetInstallMode.remote-download": "Скачать на удалённом сервере",
  "ssh.assetInstallModeDescription":
    "Загрузка на удалённом сервере сокращает ожидание при передаче, но сервер должен иметь доступ к CDN ZCode и утилиты для скачивания, распаковки и проверки контрольных сумм.",
  "ssh.password": "Пароль",
  "ssh.passwordPlaceholder": "Введите пароль SSH",
  "ssh.privateKey": "Приватный ключ",
  "ssh.privateKeyPlaceholder":
    "Выберите или введите путь к файлу приватного ключа",
  "ssh.privateKeyPassphrase":
    "Парольная фраза приватного ключа (необязательно)",
  "ssh.privateKeyPassphrasePlaceholder":
    "Введите парольную фразу приватного ключа",
  "ssh.privateKeySelect": "Выбрать файл приватного ключа",
  "ssh.configAlias": "Алиас SSH-конфига (необязательно)",
  "ssh.configAliasPlaceholder": "Алиас не выбран",
  "ssh.configAliasSearchPlaceholder": "Поиск алиаса SSH-конфига",
  "ssh.configAliasEmpty": "На этом компьютере нет алиасов SSH-конфига.",
  "ssh.configAliasLoadFailed":
    "Не удалось загрузить алиасы SSH-конфига. Данные для подключения можно ввести вручную.",
  "ssh.configAliasDescription":
    "Выберите алиас, чтобы автоматически подставить хост, порт, имя пользователя и приватный ключ.",
  "ssh.connect": "Подключиться",
  "ssh.cancel": "Отмена",
  "ssh.connecting": "Подключение…",
  "ssh.success": "Подключено. Открыто в новом окне.",
  "ssh.validation.required": "Укажите хост и имя пользователя",
  "ssh.validation.passwordRequired": "Укажите пароль",
  "ssh.validation.privateKeyRequired": "Укажите путь к приватному ключу",
  "common.back": "Назад",
  "common.next": "Далее",
  "remote.trigger": "Удалённое подключение",
  "remote.wizard": "Удалённое подключение",
  "remoteConnection.feedback": "Отзыв",
  "remote.step.kind": "Выбор способа",
  "remote.step.settings": "Заполнение настроек",
  "remote.step.connecting": "Установка подключения",
  "remote.step.directory": "Выбор каталога",
  "remote.kindStepTitle": "Выбор способа",
  "remote.kindStepDescription":
    "Выберите способ доступа к этому проекту и продолжите с соответствующими настройками подключения.",
  "remote.settingsStepTitle": "Настройки подключения",
  "remote.settingsStepDescription":
    "Введите данные, необходимые для подключения через {method}, чтобы мы могли подготовить удалённую сессию.",
  "remote.history.empty": "Сохранённые подключения не найдены",
  "remote.connectingStepTitle": "Подключение",
  "remote.connectingStepDescription":
    "Устанавливается подключение {method}. Здесь можно следить за ходом настройки в реальном времени.",
  "webRemoteControl.trigger": "Удалённое управление с телефона",
  "webRemoteControl.title": "Удалённое управление с телефона",
  "webRemoteControl.description":
    "Отсканируйте QR-код или откройте ссылку на телефоне, чтобы управлять этим проектом.",
  "webRemoteControl.botChannel.title": "Использовать канал бота",
  "webRemoteControl.botChannel.description":
    "Подключите чат-бота для более длительного доступа с телефона.",
  "webRemoteControl.botChannel.weixin.title": "Weixin",
  "webRemoteControl.botChannel.weixin.description":
    "Открывайте этот проект из чата Weixin.",
  "webRemoteControl.botChannel.feishu.title": "Feishu",
  "webRemoteControl.botChannel.feishu.description":
    "Открывайте этот проект из Feishu.",
  "webRemoteControl.botChannel.lark.title": "Lark",
  "webRemoteControl.botChannel.lark.description":
    "Открывайте этот проект из Lark.",
  "webRemoteControl.botChannel.telegram.title": "Telegram",
  "webRemoteControl.botChannel.telegram.description":
    "Открывайте этот проект из Telegram.",
  "webRemoteControl.botChannel.configure": "Настроить в каналах ботов",
  "webRemoteControl.botChannel.manageBots": "Управление ботами",
  "remote.title": "Подключение к удалённой среде",
  "remote.description":
    "Подключитесь к удалённому проекту через SSH, сервер, WSL или Docker, затем выберите каталог в текущем окне.",
  "remote.step.connect": "Подключение",
  "remote.step.selectDirectory": "Выбор каталога",
  "remote.selectDirectoryTitle": "Выбор удалённого каталога",
  "remote.selectDirectoryDescription":
    "Выберите каталог, который открыть в этом окне, когда удалённое подключение будет готово.",
  "remote.backToConnection": "Назад к настройкам подключения",
  "remote.selectedMethod": "Выбранный способ",
  "remote.methods": "Способ подключения",
  "remote.kind.ssh": "SSH",
  "remote.kind.wsl": "WSL",
  "remote.kind.docker": "Docker",
  "remote.kind.ssh.wizardDescription": "Удалённый хост",
  "remote.kind.wsl.wizardDescription": "Подсистема Windows для Linux",
  "remote.kind.docker.wizardDescription": "Локальный контейнер",
  "remote.connect": "Подключиться",
  "remote.connecting": "Подключение…",
  "remote.minimize": "Свернуть окно удалённого подключения",
  "remote.startConnection": "Начать подключение",
  "remote.retryConnection": "Повторить подключение",
  "remote.connectingHint": "Подключение через {method}.",
  "remote.connectionLog": "Журнал подключения",
  "remote.connectionLogEmpty": "ожидание вывода подключения…",
  "remote.connectingConfirmTitle": "Прервать текущее подключение?",
  "remote.connectingConfirmDescription":
    "Подключение к удалённой среде ещё выполняется. Если вернуться назад или закрыть это окно, текущая попытка подключения будет отменена.",
  "remote.stopConnecting": "Остановить подключение",
  "remote.connectedConfirmTitle": "Покинуть подключённую сессию?",
  "remote.connectedConfirmDescription":
    "Удалённое подключение готово, но каталог ещё не открыт. Если вернуться назад или закрыть это окно, текущая удалённая сессия будет отменена.",
  "remote.leaveConnectedSession": "Покинуть сессию",
  "remote.success": "Подключено. Выберите каталог, чтобы продолжить.",
  "remote.optionsLoadFailed":
    "Не удалось загрузить варианты локальных сред. Значения можно ввести вручную.",
  "remote.log.prepare":
    "Параметры мастера проверены. Подготовка запроса на подключение.",
  "remote.log.sshTarget": "Цель SSH: {username}@{host}:{port}",
  "remote.log.dockerTarget": "Целевой контейнер Docker: {container}",
  "remote.log.requestingSession":
    "Запрос к хост-процессу на создание удалённой сессии…",
  "remote.log.sessionReady":
    "Удалённая сессия успешно создана. Теперь можно выбрать каталог.",
  "wsl.description":
    "Подключитесь к дистрибутиву по умолчанию или выберите конкретный дистрибутив, установленный на этом устройстве.",
  "wsl.distro": "Дистрибутив",
  "wsl.defaultDistro": "Дистрибутив по умолчанию",
  "wsl.user": "Пользователь Linux",
  "wsl.defaultUser": "Пользователь по умолчанию",
  "wsl.userDescription":
    "Оставьте поле пустым, чтобы использовать пользователя по умолчанию. Укажите root или другого существующего пользователя Linux, чтобы выполнять команды WSL от его имени.",
  "wsl.rootWarning":
    "В режиме root удалённый хост, агент и терминал работают от имени root. Файлы, созданные в ходе сессии, могут принадлежать root.",
  "wsl.validation.invalidUser":
    "Имя пользователя Linux не может содержать управляющие символы, двоеточия, слэши или обратные слэши и должно быть не длиннее 64 символов.",
  "wsl.loading": "Поиск дистрибутивов WSL…",
  "wsl.detectedCount": "На устройстве обнаружено дистрибутивов: {count}.",
  "wsl.noDistros":
    "Дистрибутивы WSL не обнаружены. При установленном WSL можно подключиться к дистрибутиву по умолчанию.",
  "docker.description":
    "Подключение к локальному контейнеру с помощью docker exec и docker cp.",
  "docker.container": "Контейнер",
  "docker.containerPlaceholder":
    "Введите имя или ID контейнера, например, my-container",
  "docker.manualContainerHint":
    "Если список запущенных контейнеров неполный, введите имя или ID контейнера вручную, чтобы подключиться.",
  "docker.selectContainer": "Выберите запущенный контейнер",
  "docker.loading": "Поиск запущенных контейнеров...",
  "docker.unavailable": "Запущенные контейнеры не обнаружены.",
  "docker.noContainers": "Запущенные контейнеры не обнаружены.",
  "docker.validation.required": "Укажите имя или ID контейнера",
  "locale.switchLanguage": "Сменить язык",
  "fileTree.loading": "Загрузка…",
  "fileTree.error": "Не удалось загрузить",
  "terminal.exited": "[Процесс завершён]",
  "terminal.title": "Терминал",
  "terminal.show": "Показать или скрыть терминал",
  "terminal.hide": "Показать или скрыть терминал",
  "terminal.toggle": "Показать или скрыть терминал",
  "terminal.close": "Закрыть панель терминала",
  "terminal.new": "Новый терминал",
  "terminal.closeTab": "Закрыть {title}",
  "terminal.contextMenu.copy": "Копировать",
  "terminal.contextMenu.paste": "Вставить",
  "chat.history.loadingOlderMessages": "Загрузка предыдущих сообщений…",
  "chat.history.loadOlderMessages": "Загрузить предыдущие сообщения",
  "chat.pendingCommand.discarded":
    "Ввод, отправленный до перезапуска CLI, не дошёл до диалога. Подтвердите, нужно ли отправить его снова.",
  "chat.pendingCommand.resend": "Отправить снова",
  "chat.pendingCommand.dismiss": "Позже",
  "chat.workspaceHookPending.message":
    "Хуков проекта, ожидающих проверки: {count}; отключены для этой сессии",
  "chat.workspaceHookPending.review": "Проверить",
  "chat.workspaceHookPending.dismiss": "Скрыть",
  "taskList.newTask": "Новая задача",
  "taskList.newThread": "Новая задача",
  "taskList.forkedUntitled": "Новая задача",
  "taskList.noTasks": "Задач пока нет",
  "taskList.noArchivedTasks": "Нет задач в архиве",
  "taskList.loading": "Загрузка задач…",
  "taskList.syncingRemoteWorkspaces": "Загрузка удалённых задач…",
  "taskList.showMore": "Показать ещё",
  "taskList.showLess": "Свернуть",
  "taskList.pinnedSection": "Закреплённые",
  "taskList.recentSection": "Недавние",
  "taskList.delete": "Удалить задачу",
  "taskList.pin": "Закрепить задачу",
  "taskList.unpin": "Открепить задачу",
  "taskList.rename": "Переименовать задачу",
  "taskList.archive": "Архивировать задачу",
  "taskList.archiveLocal": "Архивировать локальную задачу",
  "taskList.archiveRemote": "Архивировать удалённую задачу",
  "taskList.archiveFailed": "Не удалось архивировать задачу",
  "taskList.unarchive": "Разархивировать задачу",
  "taskList.renamePlaceholder": "Название задачи",
  "taskList.renameFailed": "Не удалось переименовать задачу",
  "taskList.pinFailed": "Не удалось изменить закрепление",
  "taskList.markAsUnread": "Отметить как непрочитанную",
  "taskList.openInSplitPane": "Открыть в разделённом виде",
  "chat.toolCall.agent.openInSidePane": "Открыть в боковой панели",
  "v4Pane.splitRight": "Разделить вправо",
  "v4Pane.renamePlaceholder": "Переименовать сессию…",
  "v4Pane.renameSession": "Переименовать сессию",
  "v4Pane.deleteSession": "Удалить сессию",
  "v4Pane.splitRightTitle": "Открыть новую панель справа (новая сессия)",
  "v4Pane.splitDown": "Разделить вниз",
  "v4Pane.splitDownTitle": "Открыть новую панель снизу (новая сессия)",
  "v4Pane.closePane": "Закрыть панель",
  "v4Pane.closePaneTitle": "Закрыть панель (сессия продолжит работать)",
  "v4Pane.remote": "Удалённая",
  "taskList.markAsUnreadFailed":
    "Не удалось отметить задачу как непрочитанную",
  "taskList.feedback": "Сообщить о проблеме",
  "taskList.viewModelTrajectory": "Просмотреть траекторию модели",
  "taskList.feedbackOpened":
    "Открыта форма отзыва с прикреплённым контекстом текущей задачи",
  "taskList.resume": "Возобновить",
  "taskList.untitled": "Новая задача",
  "taskList.justNow": "сейчас",
  "taskList.minutesAgo": "{minutes} мин",
  "taskList.hoursAgo": "{hours} ч",
  "taskList.daysAgo": "{days} д",
  "taskList.status.streaming": "Выполняется",
  "taskList.status.restoring": "Восстановление",
  "taskList.status.ready": "Готова",
  "taskList.status.completed": "Завершено",
  "taskList.status.failed": "Ошибка",
  "taskList.status.notReady": "Не готова",
  "taskList.openSettings": "Настройки",
  "taskList.permissionTag": "Ожидает подтверждения",
  "taskList.userInputTag": "Ожидает подтверждения",
  "taskList.stopCountdown": "Остановить таймер",
  "taskList.attentionCount": "{label} · {count}",
  "taskList.mobileActive": "Задача открыта на телефоне",
  "taskList.changeStats": "+{added} -{removed}",
  "taskGroup.newGroup": "Новая группа",
  "taskGroup.newTask": "Новая задача",
  "taskGroup.emptyDropZoneAction": "Новая задача или перетащите сюда.",
  "taskGroup.rename": "Переименовать группу",
  "taskGroup.renameAction": "Переименовать",
  "taskGroup.color": "Цвет группы",
  "taskGroup.changeColor": "Изменить цвет",
  "taskGroup.moveToGroup": "Переместить в группу",
  "taskGroup.moveToTop": "Переместить в начало",
  "taskGroup.removeFromGroup": "Убрать из группы",
  "taskGroup.color.gray": "Серый",
  "taskGroup.color.red": "Красный",
  "taskGroup.color.orange": "Оранжевый",
  "taskGroup.color.yellow": "Жёлтый",
  "taskGroup.color.green": "Зелёный",
  "taskGroup.color.blue": "Синий",
  "taskGroup.color.purple": "Фиолетовый",
  "taskGroup.ungroup": "Разгруппировать и удалить",
  "taskGroup.createFailed": "Не удалось создать группу",
  "taskGroup.renameFailed": "Не удалось переименовать группу",
  "taskGroup.colorFailed": "Не удалось изменить цвет группы",
  "taskGroup.ungroupFailed": "Не удалось разгруппировать задачи",
  "taskGroup.updateFailed": "Не удалось обновить порядок групп",
  "taskSearch.button": "Поиск",
  "taskSearch.title": "Поиск задач",
  "taskSearch.description":
    "Поиск недавних задач по названию или содержимому.",
  "taskSearch.placeholder": "Поиск задач",
  "taskSearch.recent": "Недавние задачи",
  "taskSearch.loading": "Поиск…",
  "taskSearch.noRecent": "Нет недавних задач",
  "taskSearch.noResults": "Задачи не найдены",
  "taskSearch.expandMoreSnippets": "Показать ещё {count} фрагментов",
  "taskTimeline.today": "Сегодня",
  "taskTimeline.yesterday": "Вчера",
  "taskTimeline.daysAgo": "{days} дн. назад",
  "taskTimeline.thisWeek": "На этой неделе",
  "taskTimeline.lastWeek": "На прошлой неделе",
  "taskTimeline.thisMonth": "В этом месяце",
  "taskTimeline.lastMonth": "В прошлом месяце",
  "taskTimeline.older": "Ранее",
  "chat.changeSummary.filesChanged.one": "Изменён {count} файл",
  "chat.changeSummary.filesChanged.other": "Изменено файлов: {count}",
  "chat.changeSummary.expand": "Развернуть изменённые файлы",
  "chat.changeSummary.collapse": "Свернуть изменённые файлы",
  "chat.changeSummary.diffUnavailable":
    "Предпросмотр изменений сейчас недоступен.",
  "chat.changeSummary.review": "Проверить",
  "chat.changeSummary.openInEditor": "Открыть в редакторе",
  "chat.changeSummary.rewind": "Отменить",
  "chat.changeSummary.reapply": "Применить снова",
  "chat.changeSummary.reverted": "Отменено",
  "chat.changeSummary.rewindDialog.title": "Отмена изменений файлов",
  "chat.changeSummary.rewindDialog.description":
    "Перед записью ZCode повторно проверяет текущее содержимое файлов. Если файл был изменён другим процессом, изменения не будут записаны.",
  "chat.changeSummary.rewindDialog.loading":
    "Проверка файлов, доступных для отмены…",
  "chat.changeSummary.rewindDialog.safeTitle":
    "Можно безопасно отменить: {count}",
  "chat.changeSummary.rewindDialog.unsafeTitle":
    "Небезопасно для отмены: {count}",
  "chat.changeSummary.rewindDialog.ignoredTitle": "Игнорировано: {count}",
  "chat.changeSummary.rewindDialog.noSafeFiles":
    "Нет файлов, которые можно безопасно отменить.",
  "chat.changeSummary.rewindDialog.noUnsafeFiles":
    "Небезопасных файлов не найдено.",
  "chat.changeSummary.rewindDialog.noPreview": "Предпросмотр пока недоступен.",
  "chat.changeSummary.rewindDialog.confirm": "Отменить изменения файлов",
  "chat.changeSummary.rewindDialog.cannotApply":
    "Как минимум один файл небезопасен, поэтому изменения не были записаны.",
  "chat.changeSummary.rewindDialog.error":
    "Не удалось отменить изменения файлов. Попробуйте ещё раз.",
  "chat.changeSummary.rewindDialog.operationCount": "Изменений: {count}",
  "chat.changeSummary.rewindDialog.reason.bashIgnored":
    "изменение bash/shell проигнорировано",
  "chat.changeSummary.rewindDialog.reason.checkpointMissing":
    "контрольная точка отсутствует",
  "chat.changeSummary.rewindDialog.reason.checkpointUnreadable":
    "контрольная точка не читается",
  "chat.changeSummary.rewindDialog.reason.externalModified":
    "файл изменён извне",
  "chat.changeSummary.rewindDialog.reason.fileReadFailed":
    "текущий файл не читается",
  "chat.changeSummary.rewindDialog.reason.unsupportedCheckpoint":
    "старую контрольную точку нельзя безопасно восстановить",
  "chat.edit.resetConversationAndFiles": "Сбросить чат и файлы",
  "chat.edit.resetConversationAndFiles.tooltip": "Сброс вместе с файлами",
  "chat.edit.resetConversationAndFiles.available":
    "Восстановить файлы этого хода, сбросить диалог и отправить",
  "chat.edit.resetConversationAndFiles.noFiles":
    "В этом ходе нет отменяемых изменений файлов",
  "chat.edit.resetConversationAndFiles.reverted":
    "Изменения файлов этого хода уже отменены",
  "chat.edit.resetConversationAndFiles.running":
    "Дождитесь остановки текущей работы",
  "chat.edit.resetConversationAndFiles.unavailable":
    "Сброс файлов недоступен во время сжатия контекста или при ожидающем взаимодействии",
  "chat.edit.workspaceConflict.title": "Не удалось безопасно сбросить файлы",
  "chat.edit.workspaceConflict.description":
    "История диалога не изменялась. Проверьте конфликтующие или проигнорированные файлы, затем сбросьте только диалог или отмените действие.",
  "chat.edit.workspaceConflict.conversationOnly":
    "Сбросить только чат и отправить",
  "chat.previewCards.website": "Сайт",
  "chat.previewCards.htmlWebsite": "Сайт · HTML",
  "chat.previewCards.markdown": "Документ · MD",
  "chat.previewCards.text": "Текст · TXT",
  "chat.previewCards.docx": "Документ · DOCX",
  "chat.previewCards.xlsx": "Таблица · XLSX",
  "chat.previewCards.pptx": "Презентация · PPTX",
  "chat.previewCards.pdf": "Документ · PDF",
  "chat.previewCards.video": "Видео",
  "chat.previewCards.audio": "Аудио",
  "chat.previewCards.openExternal": "Открыть в браузере",
  "chat.previewCards.noOpenApps": "Приложения не найдены",
  "chat.turnNavigator.label": "Карта запросов чата",
  "chat.turnNavigator.jumpToQuery": "Перейти к запросу {index}",
  "chat.turnNavigator.emptyAssistant": "Ответа ассистента пока нет",
  "chat.turnNavigator.runningAssistant": "Ассистент ещё работает",
  "chat.turnNavigator.userFallback": "Запрос пользователя",
  "chat.rewind.conflictConfirm":
    "Эти файлы изменены вне текущего шага диалога. Принудительный откат может привести к конфликтам:\n\n{paths}",
  "taskNav.back": "Назад",
  "taskNav.forward": "Вперёд",
  "taskNav.noMoreBack": "Нет предыдущих задач",
  "taskNav.noMoreForward": "Нет следующих задач",
  "taskList.switchBlockedByModelRestart":
    "Идёт переключение провайдера модели. Переключение задач временно недоступно.",
  "sidebar.exportLogs": "Экспортировать журналы",
  "sidebar.exportLogs.pending": "Экспорт журналов…",
  "sidebar.exportLogs.error": "Не удалось экспортировать журналы: {error}",
  "sidebar.newTask": "Новая задача",
  "settings.title": "Настройки",
  "settings.breadcrumbLabel": "Путь в настройках",
  "settings.subtitle":
    "Выбирайте основные разделы настроек слева и редактируйте детали в панели справа.",
  "settings.navLabel": "Разделы",
  "settings.sidebar.group.basics": "Основные",
  "settings.sidebar.group.agentCapabilities": "Возможности агента",
  "settings.sidebar.group.dataAndStats": "Данные и статистика",
  "settings.nav.generalDescription": "Язык и параметры текущего окна",
  "settings.nav.appearanceDescription":
    "Тема, размер шрифта интерфейса и отображение кода",
  "settings.themeCardTitle": "Тема",
  "settings.themeCardDescription": "Светлая, тёмная тема или как в системе",
  "chat.empty.greeting.office": "Какие задачи на сегодня? Доверьте их мне.",
  "settings.interfaceMode": "Режим интерфейса",
  "settings.interfaceMode.office": "Офисный режим",
  "settings.interfaceMode.coding": "Режим кодинга",
  "settings.interfaceMode.description":
    "Офисный режим делает упор на сводки и результаты. Режим кодинга показывает команды, вывод и изменения кода.",
  "chat.toolCall.execute.conciseCompleted": "Выполнена команда",
  "chat.contextOptimization.started": "Оптимизация диалога",
  "chat.contextOptimization.skipped": "Оптимизация диалога не требуется",
  "chat.contextOptimization.interrupted": "Оптимизация диалога остановлена",
  "chat.contextOptimization.failed": "Не удалось оптимизировать диалог",
  "chat.contextOptimization.completed": "Диалог оптимизирован",
  "settings.themeMode": "Тема приложения",
  "settings.themeModeDescription":
    "Выберите светлую или тёмную тему либо следуйте системной.",
  "settings.themeMode.light": "Светлая",
  "settings.themeMode.dark": "Тёмная",
  "settings.themeMode.zai-light": "Светлая",
  "settings.themeMode.zai-dark": "Тёмная",
  "settings.themeMode.system": "Системная",
  "settings.appearanceTitle": "Оформление",
  "settings.shortcuts.title": "Сочетания клавиш",
  "settings.shortcuts.searchPlaceholder": "Поиск сочетаний клавиш",
  "settings.shortcuts.keySearchAria": "Поиск по сочетанию клавиш",
  "settings.shortcuts.keySearchPlaceholder":
    "Нажмите сочетание клавиш для поиска…",
  "settings.shortcuts.keySearchClearAria": "Очистить поиск по клавишам",
  "settings.shortcuts.keySearchEmpty": "Для {keys} нет привязанных команд",
  "settings.shortcuts.searchEmpty": "Команды не найдены",
  "settings.shortcuts.resetAll": "Сбросить всё по умолчанию",
  "settings.shortcuts.resetAllConfirmTitle": "Сбросить все сочетания клавиш?",
  "settings.shortcuts.resetAllConfirmDescription":
    "Будут удалены все пользовательские переопределения сочетаний, а каждая команда получит привязку по умолчанию.",
  "settings.shortcuts.columnHeaderCommand": "Команда",
  "settings.shortcuts.columnHeaderBinding": "Сочетание клавиш",
  "settings.shortcuts.columnHeaderActions": "Действия",
  "settings.shortcuts.columnHeaderScope": "Область",
  "settings.shortcuts.notSet": "Не назначено",
  "settings.shortcuts.desktopOnly": "Только для десктопа",
  "settings.shortcuts.scopeComposer": "Композер",
  "settings.shortcuts.scopeGlobal": "Глобальная",
  "settings.shortcuts.recording": "Нажмите новое сочетание…",
  "settings.shortcuts.recordingHint":
    "Esc — отмена · Backspace — сброс · после конфликта нажмите новое сочетание",
  "settings.shortcuts.conflictReserved":
    "Это сочетание зарезервировано системой",
  "settings.shortcuts.conflictOccupied":
    "Уже используется командой «{command}»",
  "settings.shortcuts.clearConflict":
    "Сочетание по умолчанию уже используется командой «{command}»; его восстановление приведёт к конфликту. Сначала измените привязку этой команды",
  "settings.shortcuts.stealConfirm":
    "Переназначить (текущая команда потеряет привязку)",
  "settings.shortcuts.invalidNoModifier":
    "Требуется хотя бы одна клавиша-модификатор (Ctrl / Cmd / Alt)",
  "settings.shortcuts.invalidKey": "Неподдерживаемая клавиша",
  "settings.shortcuts.rebindAria": "Переназначить сочетание для «{command}»",
  "settings.shortcuts.addAria": "Добавить привязку для «{command}»",
  "settings.shortcuts.removeBindingAria":
    "Удалить эту привязку для «{command}»",
  "settings.shortcuts.duplicateBinding": "Уже привязано к этой команде",
  "settings.shortcuts.clearAria": "Удалить сочетание для «{command}»",
  "settings.shortcuts.command.newTask": "Новая задача",
  "settings.shortcuts.command.composerSend": "Отправить сообщение",
  "settings.shortcuts.command.composerInsertNewline":
    "Вставить перенос строки в композере",
  "settings.shortcuts.command.openWorkspace": "Открыть проект",
  "settings.shortcuts.command.closeActiveContext": "Закрыть текущий контекст",
  "settings.shortcuts.command.toggleSidebar": "Показать/скрыть боковую панель",
  "settings.shortcuts.command.switchTheme": "Переключить светлую/тёмную тему",
  "settings.shortcuts.command.toggleSidePane":
    "Показать/скрыть дополнительную панель",
  "settings.shortcuts.command.toggleTerminal": "Показать/скрыть терминал",
  "settings.shortcuts.command.previousConversation": "Предыдущая задача",
  "settings.shortcuts.command.nextConversation": "Следующая задача",
  "settings.shortcuts.command.toggleInterfaceMode":
    "Переключить режим «код/офис»",
  "settings.shortcuts.command.openOnboarding":
    "Показать/скрыть первичную настройку",
  "settings.shortcuts.command.navigateBack": "Перейти назад",
  "settings.shortcuts.command.navigateForward": "Перейти вперёд",
  "settings.shortcuts.command.openModelMenu": "Открыть меню моделей",
  "settings.shortcuts.command.cycleSessionMode": "Переключить режим сессии",
  "settings.shortcuts.command.cycleThoughtLevel":
    "Переключить уровень размышлений",
  "settings.shortcuts.command.findInTask": "Найти в задаче",
  "settings.shortcuts.command.openCommandCenter": "Открыть командный центр",
  "settings.shortcuts.command.openSettings": "Открыть настройки",
  "settings.shortcuts.command.zoomIn": "Увеличить масштаб",
  "settings.shortcuts.command.zoomOut": "Уменьшить масштаб",
  "settings.shortcuts.command.resetZoom": "Сбросить масштаб",
  "settings.appearance.interfaceTitle": "Настройки интерфейса",
  "settings.appearance.interfaceDescription":
    "Выберите тему приложения и размер текста интерфейса.",
  "settings.appearance.codeTitle": "Настройки кода",
  "settings.appearance.codeDescription":
    "Выбирайте темы кода, размер шрифта и параметры отображения независимо от размера шрифта интерфейса.",
  "settings.uiFontSize": "Размер шрифта интерфейса",
  "settings.uiFontSizeDescription":
    "Меняет размер текста интерфейса, не затрагивая значки и габариты макета.",
  "settings.systemTitle": "Общие",
  "settings.systemDescription":
    "Эти параметры влияют на работу текущего окна.",
  "settings.locale": "Язык",
  "settings.localeDescription": "Выберите язык интерфейса приложения.",
  "settings.terminalProfile": "Наследовать системный профиль терминала",
  "settings.terminalProfileDescription":
    "При запуске встроенного терминала наследовать окружение login shell, настройки прокси, переменные Kubernetes и локальный шрифт терминала, где это возможно.",
  "settings.terminalFontFamily": "Шрифт терминала",
  "settings.terminalFontFamilyDescription":
    "Оставьте пустым, чтобы использовать системные настройки терминала; укажите значение, чтобы переопределить шрифт терминала ZCode.",
  "settings.terminalFontFamilyPlaceholder":
    "Оставьте пустым, чтобы наследовать, например: MesloLGS NF, monospace",
  "settings.integratedTerminalShell": "Оболочка встроенного терминала",
  "settings.integratedTerminalShellDescription":
    "Применяется только к новым сессиям. В Windows Bash использует эту оболочку; «Авто» сначала пробует Git Bash, затем cmd.exe.",
  "settings.integratedTerminalShell.auto": "Авто",
  "settings.nativeSearchEnhancements": "Расширенные Find и Grep",
  "settings.nativeSearchEnhancementsDescription":
    "Расширенные Find и Grep применяются в новых сессиях и в сессиях, восстановленных после перезапуска приложения. Активные сессии сохраняют текущую настройку; на Windows Find остаётся без изменений.",
  "settings.memory": "Память",
  "settings.memory.workspaceMemory": "Память проекта",
  "settings.memoryDescription":
    "Сохраняйте и переиспользуйте долговременный контекст в проектах. Применяется к новым сессиям и может увеличить число запросов к модели и расход токенов.",
  "settings.memory.viewer.disabled":
    "Включите память проекта, чтобы просмотреть сохранённые воспоминания.",
  "settings.memory.viewer.localOnly":
    "Сведения о памяти доступны только в локальном десктоп-приложении. Откройте там настройки памяти, чтобы просмотреть их.",
  "settings.memory.viewer.title": "Сохранённые воспоминания проектов",
  "settings.memory.viewer.description":
    "Просмотр воспоминаний, сохранённых для проектов на этом устройстве.",
  "settings.memory.viewer.projectsDescription":
    "Выберите проект, чтобы просмотреть все его сохранённые воспоминания.",
  "settings.memory.viewer.refresh": "Обновить",
  "settings.memory.viewer.loading": "Загрузка воспоминаний…",
  "settings.memory.viewer.empty": "Нет сохранённых воспоминаний проекта",
  "settings.memory.viewer.workspaces": "Проекты",
  "settings.memory.viewer.files": "Файлы",
  "settings.memory.viewer.searchPlaceholder": "Поиск файлов памяти…",
  "settings.memory.viewer.searchEmpty": "Файлы памяти не найдены.",
  "settings.memory.viewer.workspaceSearchPlaceholder": "Поиск проектов…",
  "settings.memory.viewer.workspaceSearchEmpty": "Проекты не найдены.",
  "settings.memory.viewer.itemCount.one": "{count} элемент",
  "settings.memory.viewer.itemCount.other": "{count} элементов",
  "settings.memory.viewer.memoryCount.one": "{count} воспоминание",
  "settings.memory.viewer.memoryCount.other": "{count} воспоминаний",
  "settings.memory.viewer.updated.justNow": "Только что",
  "settings.memory.viewer.updated.minutesAgo": "{count} мин назад",
  "settings.memory.viewer.updated.today": "Сегодня, {time}",
  "settings.memory.viewer.updated.yesterday": "Вчера, {time}",
  "settings.memory.viewer.updated.weekday": "{weekday}, {time}",
  "settings.memory.viewer.updated.weekdayZh": "周{weekday}",
  "settings.memory.viewer.updated.date": "{date} {time}",
  "settings.memory.viewer.updated.dateMonthDay": "{day}/{month}",
  "settings.memory.viewer.updated.dateYearMonthDay": "{day}/{month}/{year}",
  "settings.memory.viewer.tree": "Файлы памяти",
  "settings.memory.viewer.indexMissing": "MEMORY.md (не создан)",
  "settings.memory.viewer.collapse": "Свернуть воспоминания",
  "settings.memory.viewer.expand": "Развернуть воспоминания",
  "settings.memory.viewer.fileLoading": "Загрузка файла…",
  "settings.memory.viewer.fileDeleted":
    "Этот файл памяти удалён. Обновите список файлов.",
  "settings.memory.viewer.fileTooLarge":
    "Этот файл памяти превышает лимит предпросмотра в 5 МиБ.",
  "settings.memory.viewer.fileChanged":
    "Этот файл памяти обновился во время чтения. Откройте его заново или обновите список файлов.",
  "settings.memory.viewer.noSelection":
    "Выберите файл памяти для предпросмотра.",
  "settings.httpProxy": "HTTP-прокси",
  "settings.httpProxyDescription":
    "Направляйте исходящий трафик моделей, MCP, командных инструментов и рендерера приложения через этот прокси; системные переменные окружения не читаются. Если оставить поле пустым, этот трафик пойдёт напрямую, а встроенный браузер будет следовать системным настройкам прокси. Перезапустите приложение, чтобы изменения вступили в силу.",
  "settings.httpProxyPlaceholder":
    "Пусто — встроенный браузер следует системному прокси, напр. http://127.0.0.1:7890",
  "settings.httpProxyNoProxy": "Без прокси",
  "settings.httpProxyNoProxyDescription":
    "Запросы к этим хостам идут напрямую, минуя HTTP-прокси. Разделяйте правила запятыми. Перезапустите приложение, чтобы изменения вступили в силу.",
  "settings.httpProxyNoProxyPlaceholder":
    "напр. localhost,127.0.0.1,::1,.example.com,*.corp.com",
  "settings.httpProxyCaCertPath": "Пользовательский сертификат",
  "settings.httpProxyCaCertPathDescription":
    "Необязательно. Укажите путь к корневому PEM-сертификату, чтобы передать его как NODE_EXTRA_CA_CERTS для моделей, MCP и командных инструментов, а также доверять ему при проверке сертификатов в рендерере. Перезапустите приложение, чтобы изменения вступили в силу.",
  "settings.httpProxyCaCertPathPlaceholder":
    "напр. /Users/name/certs/root-ca.pem",
  "settings.httpProxySavedHint":
    "Настройки сетевого прокси сохранены. Перезапустите приложение, чтобы изменения вступили в силу.",
  "settings.desktopChromiumHardwareAcceleration":
    "Аппаратное ускорение Chrome",
  "settings.desktopChromiumHardwareAccelerationDescription":
    "Отключите, чтобы обойти пустые окна, сбои или проблемы отрисовки, вызванные некоторыми GPU или драйверами. Перезапустите приложение, чтобы изменения вступили в силу.",
  "settings.desktopChromiumHardwareAccelerationSavedHint":
    "Настройка аппаратного ускорения Chrome сохранена. Перезапустите приложение, чтобы изменения вступили в силу.",
  "settings.receivePreviewUpdates":
    "Получать предварительные обновления раньше",
  "settings.receivePreviewUpdatesDescription":
    "Если включено, вы первыми получите доступ к новым функциям и улучшениям. Если выключено, обновления будут приходить по обычному графику релизов.",
  "settings.autoDownloadAndInstallUpdates":
    "Автоматически загружать и устанавливать обновления",
  "settings.autoDownloadAndInstallUpdatesDescription":
    "Если включено, обновления начинают загружаться сразу после обнаружения. Перезапуск при выполняющихся задачах по-прежнему требует подтверждения.",
  "settings.notification": "Уведомления о задачах",
  "settings.notificationDescription":
    "Отправлять уведомления на рабочем столе, когда задача завершена, завершилась ошибкой или требует подтверждения.",
  "settings.notificationSound": "Звук уведомлений",
  "settings.notificationSoundDescription":
    "Когда уведомления включены, звук уведомлений о задачах можно отключить отдельно.",
  "notification.taskWithTitle": "Задача: {title}",
  "notification.taskWaiting": "Задача ожидает вашего подтверждения",
  "notification.completed": "Задача завершена",
  "notification.completedBody": "Задача завершена",
  "notification.error": "Ошибка в задаче",
  "notification.permissionRequired": "Требуется ваше подтверждение",
  "notification.inputRequired": "Требуется ваш ответ",
  "notification.planApprovalRequired": "План ожидает утверждения",
  "notification.planApprovalBody": "Просмотрите план, чтобы продолжить.",
  "notification.command": "Команда: {command}",
  "notification.file": "Файл: {paths}",
  "settings.closeToTrayOnWindows": "Сворачивать в трей при закрытии окна",
  "settings.closeToTrayOnWindowsDescription":
    "Только Windows. Кнопка закрытия и горячая клавиша закрытия окна скрывают окно, а «Выход» в трее по-прежнему завершает приложение.",
  "settings.keepAwakeWhileRunning": "Не давать компьютеру засыпать",
  "settings.keepAwakeWhileRunningDescription":
    "Не даёт системе уходить в сон из-за простоя. Ручной перевод в сон или закрытие крышки по-прежнему работают. Только для десктопа.",
  "settings.messageStreamShowReasoning": "Показывать размышления",
  "settings.messageStreamShowReasoningDescription":
    "Показывать полные размышления внутри потока сообщений. Если выключено, первый элемент размышлений в каждом ходе остаётся видимым.",
  "settings.messageStreamShowTodos": "Показывать задачи",
  "settings.messageStreamShowTodosDescription":
    "Показывать карточки инструмента Todo внутри потока сообщений. ",
  "settings.toolGroupingExplore": "Группировать инструменты исследования",
  "settings.toolGroupingExploreDescription":
    "Группировать последовательные чтения и поиски в раздел «Обзор».",
  "settings.toolGroupingTerminal": "Группировать команды терминала",
  "settings.toolGroupingTerminalDescription":
    "Группировать последовательные shell-команды (не только для чтения) в раздел «Терминал».",
  "settings.toolGroupingChanges": "Группировать изменения файлов",
  "settings.toolGroupingChangesDescription":
    "Группировать последовательные вызовы Write, Edit и ApplyPatch в раздел «Изменения».",
  "settings.zcodeInteractionBehavior": "Режим взаимодействия",
  "settings.zcodeInteractionBehaviorDescription":
    "Пока ZCode работает, добавляйте последующие действия в очередь или запускайте их по одному после следующего вызова инструмента.",
  "settings.zcodeInteractionBehavior.option.queue": "Очередь",
  "settings.zcodeInteractionBehavior.option.guide": "Пошагово",
  "settings.askUserQuestionAutoResolution": "Автоматически продолжать вопросы",
  "settings.askUserQuestionAutoResolutionDescription":
    "Если включено, вопросы агента автоматически продолжаются, если на них нет ответа в течение 5 минут. Если выключено, текущие и будущие вопросы будут ждать вашего ответа.",
  "settings.modelIoFullRetention": "Сохранять полный ввод/вывод модели",
  "settings.modelIoFullRetentionDescription":
    "Хранить полные запросы и ответы модели без сжатия, ограничений по размеру и автоматического удаления.",
  "settings.performanceMode": "Режим производительности",
  "settings.performanceModeDescription":
    "Упрощает отображение вывода для повышения производительности.",
  "settings.taskAutoArchive": "Автоархивация старых задач",
  "settings.taskAutoArchiveDescription":
    "Периодически проверять недавно открытые Проекты и автоматически архивировать завершённые, полностью прочитанные и незакреплённые задачи по истечении срока хранения.",
  "settings.taskAutoArchiveDays": "Срок хранения в архиве",
  "settings.taskAutoArchiveDaysDescription":
    "Задача попадает под автоархивацию, только если с её последнего обновления прошло больше указанного срока.",
  "settings.taskAutoArchiveDays.option.3": "Архивировать через 3 дня",
  "settings.taskAutoArchiveDays.option.7": "Архивировать через 7 дней",
  "settings.taskAutoArchiveDays.option.14": "Архивировать через 14 дней",
  "settings.taskAutoArchiveDays.option.30": "Архивировать через 30 дней",
  "settings.dataBaseDir": "Путь хранения данных",
  "settings.dataBaseDirDescription":
    "Корневой каталог для данных приложения (по умолчанию — домашний каталог пользователя). Существующие данные будут скопированы в новое расположение. Суффикс .zcode/v2 изменить нельзя.",
  "settings.dataBaseDirPlaceholder":
    "По умолчанию: домашний каталог пользователя",
  "settings.dataBaseDirBrowse": "Выбрать папку",
  "settings.dataBaseDirSave": "Сохранить",
  "settings.dataBaseDirCopying":
    "Идёт копирование данных, не закрывайте приложение…",
  "settings.dataBaseDirCopyFailed":
    "Не удалось скопировать данные. Путь не изменён.",
  "settings.dataBaseDirForbiddenInstallDir":
    "Каталог данных не может совпадать с папкой установки ZCode в Windows. Выберите папку вне каталога установки приложения.",
  "settings.dataBaseDirRestartRequired":
    "Данные сохранены. Перезапустите приложение, чтобы изменения вступили в силу.",
  "settings.locale.system": "Системный",
  "settings.locale.zh-CN": "中文简体",
  "settings.locale.en-US": "English",
  "sidebar.settings.systemDefault": "Как в системе",
  "sidebar.settings.locale.en-US": "English",
  "sidebar.settings.locale.zh-CN": "中文简体",
  "sidebar.settings.interfaceZoom": "Масштаб интерфейса",
  "sidebar.settings.theme.light": "Светлая тема",
  "sidebar.settings.theme.zai-light": "Светлая тема",
  "sidebar.settings.theme.zai-dark": "Тёмная тема",
  "sidebar.settings.theme.dark": "Тёмная тема",
  "settings.migration.title": "Перенос",
  "settings.migration.sectionTitle": "Перенос истории Claude",
  "settings.migration.sectionDescription":
    "Просканируйте исходную историю Claude Code на этом компьютере, при необходимости отфильтруйте по проекту и периоду активности, затем импортируйте выбранные сессии в соответствующие списки задач ZCode.",
  "settings.migration.badge.localOnly": "Локальные записи Claude",
  "settings.migration.badge.manualOnly": "Только вручную",
  "settings.migration.currentWorkspace": "Текущий проект",
  "settings.migration.currentWorkspaceDescription":
    "Это лишь необязательный фильтр. Если не выбирать текущий проект, скан охватывает все записи Claude.",
  "settings.migration.workspaceEmpty":
    "На этой странице нет активного проекта. Вы всё равно можете просканировать все записи.",
  "settings.migration.sourceDirectory": "Исходный каталог",
  "settings.migration.noticeTitle": "Как работает перенос",
  "settings.migration.noticeDescription":
    "Перенос копирует исходные jsonl-файлы и создаёт минимальные снимки задач. Без фильтра по проекту скан охватывает все записи Claude и импортирует каждую сессию обратно в её исходный проект.",
  "settings.migration.unsupported.title": "Перенос здесь недоступен",
  "settings.migration.unsupported.desktopOnly":
    "Перенос сейчас доступен только в десктоп-версии.",
  "settings.migration.filtersTitle": "Фильтры",
  "settings.migration.filtersDescription":
    "Отфильтруйте по проекту, недавней активности и объёму результатов, затем вручную загрузите сессии-кандидаты.",
  "settings.migration.workspaceFilterLabel": "Фильтр по проекту",
  "settings.migration.workspaceFilter.all": "Все проекты",
  "settings.migration.workspaceFilter.current": "Только текущий проект",
  "settings.migration.rangeLabel": "Недавняя активность",
  "settings.migration.range.7d": "Последние 7 дней",
  "settings.migration.range.30d": "Последние 30 дней",
  "settings.migration.range.90d": "Последние 90 дней",
  "settings.migration.range.all": "За всё время",
  "settings.migration.limitLabel": "Макс. результатов",
  "settings.migration.limitHint": "Этот скан вернёт до {max} сессий.",
  "settings.migration.scan": "Сканировать сессии",
  "settings.migration.scanFailedTitle": "Ошибка сканирования",
  "settings.migration.scanFailedDescription":
    "Не удалось прочитать исходную историю Claude: {error}",
  "settings.migration.candidatesTitle": "Кандидаты",
  "settings.migration.candidatesDescription":
    "Выберите одну или несколько сессий для импорта. Каждая импортированная сессия записывается обратно в список задач своего проекта.",
  "settings.migration.candidatesCount": "Кандидатов: {count}",
  "settings.migration.selectedCount": "Выбрано: {count}",
  "settings.migration.selectAll": "Выбрать все",
  "settings.migration.clearSelection": "Сбросить",
  "settings.migration.importSelected": "Импортировать выбранные",
  "settings.migration.importFailedTitle": "Ошибка импорта",
  "settings.migration.importFailedDescription":
    "Не удалось выполнить перенос: {error}",
  "settings.migration.resultTitle": "Результат последнего переноса",
  "settings.migration.resultSummary":
    "Импортировано: {imported}, пропущено: {skipped}, с ошибками: {failed}.",
  "settings.migration.emptyTitle": "Сессий-кандидатов пока нет",
  "settings.migration.emptyDescription":
    "Настройте фильтры и нажмите «Сканировать сессии», чтобы загрузить подходящие результаты.",
  "settings.migration.workspacePathLabel": "Проект",
  "settings.migration.updatedAt": "Последняя активность: {time}",
  "settings.migration.skippedTitle": "Пропущено",
  "settings.migration.failedTitle": "Ошибки",
  "settings.usageTitle": "Статистика использования",
  "settings.usageDescription":
    "Просматривайте примерную активность и использование моделей, собранные из локальных сессий.",
  "resourceManager.storage.summaryTotal": "Всего занято ZCode",
  "resourceManager.storage.scanning": "Расчёт…",
  "resourceManager.storage.lastScanned": "Последний расчёт: {time}",
  "resourceManager.storage.idle": "Ещё не рассчитано",
  "resourceManager.storage.failed": "Не удалось рассчитать",
  "resourceManager.storage.rescan": "Пересчитать",
  "resourceManager.storage.disk": "Диск",
  "resourceManager.storage.diskUsage": "ZCode занимает {used}",
  "resourceManager.storage.diskFree": "Свободно {free} из {total}",
  "resourceManager.storage.diskUnknown": "Данные о ёмкости диска недоступны",
  "resourceManager.storage.roots": "Каталоги данных",
  "resourceManager.storage.legendMore": "Другие категории: {count}",
  "resourceManager.storage.estimate":
    "Размеры приблизительные: жёсткие ссылки и клонированные файлы могут быть учтены дважды.",
  "resourceManager.storage.errors":
    "Не удалось прочитать каталоги: {count}; итоги могут быть занижены.",
  "resourceManager.storage.filesCount": "Файлов: {count}",
  "resourceManager.storage.moreEntries": "Ещё элементов: {count}",
  "resourceManager.storage.reveal": "Показать в файловом менеджере",
  "resourceManager.storage.detailBack": "Назад",
  "resourceManager.storage.clean": "Очистить",
  "resourceManager.storage.cleaning": "Очистка…",
  "resourceManager.storage.cleanSuccess": "Освобождено {size}",
  "resourceManager.storage.cleanPartial":
    "Освобождено: {size}; не удалось удалить элементов: {count}",
  "resourceManager.storage.cleanNothing": "Нечего очищать",
  "resourceManager.storage.cleanFailed": "Не удалось очистить",
  "resourceManager.storage.confirmTitle": "Очистить «{category}»?",
  "resourceManager.storage.confirmSize": "Будет удалено около {size}.",
  "resourceManager.storage.category.sessionStore": "Сессии и базы данных",
  "resourceManager.storage.category.subagentTranscripts":
    "Транскрипты субагентов",
  "resourceManager.storage.category.toolOutputs":
    "Результаты инструментов и временные кэши",
  "resourceManager.storage.category.modelTrajectory":
    "Трассировки вызовов модели",
  "resourceManager.storage.category.devTraces": "Трассировки разработки",
  "resourceManager.storage.category.logs": "Журналы и отчёты о сбоях",
  "resourceManager.storage.category.backups": "Резервные копии",
  "resourceManager.storage.category.exports": "Экспорт и пакеты отзывов",
  "resourceManager.storage.category.runtimes":
    "Среды выполнения агентов и плагины",
  "resourceManager.storage.category.config":
    "Настройки, учётные данные и проект",
  "resourceManager.storage.category.other": "Прочее",
  "resourceManager.storage.categoryDescription.sessionStore":
    "Индекс задач, снимки сессий и контрольные точки; очищается удалением или архивированием задач.",
  "resourceManager.storage.categoryDescription.subagentTranscripts":
    "Полные записи диалогов запусков субагентов (transcript.jsonl), каждая до десятков МБ; сессии, активные за последние 24 часа, сохраняются.",
  "resourceManager.storage.categoryDescription.toolOutputs":
    "Архивированные результаты инструментов, полные выводы команд, кэши изображений и временные файлы; очистка пока недоступна.",
  "resourceManager.storage.categoryDescription.modelTrajectory":
    "Полные записи запросов и ответов модели для просмотра трассировок.",
  "resourceManager.storage.categoryDescription.devTraces":
    "Записи протоколов разработки и устаревшие каталоги диагностики.",
  "resourceManager.storage.categoryDescription.logs":
    "Журналы приложения и агентов, а также отчёты о сбоях; файлы за сегодня сохраняются.",
  "resourceManager.storage.categoryDescription.backups":
    "Копии баз данных и настроек, созданные перед обновлениями или миграциями.",
  "resourceManager.storage.categoryDescription.exports":
    "Экспортированные пакеты журналов и вложения отзывов.",
  "resourceManager.storage.categoryDescription.runtimes":
    "Встроенные среды выполнения агентов, компоненты Computer Use и плагины.",
  "resourceManager.storage.categoryDescription.config":
    "Настройки, учётные данные, память ассистента и файлы проекта по умолчанию.",
  "resourceManager.storage.categoryDescription.other":
    "Неклассифицированные файлы и устаревшие копии, оставшиеся после смены каталога данных.",
  "resourceManager.storage.confirmDescription.backups":
    "Эти копии позволяют восстановить данные, если обновление или миграция пройдут неудачно; удаление необратимо.",
  "settings.browser.title": "Browser Use",
  "settings.browser.control.title": "Включить управление встроенным браузером",
  "settings.browser.control.description":
    "Включите официальный плагин Browser Use, чтобы новые сессии могли открывать веб-страницы во встроенном браузере и управлять ими.",
  "settings.browser.control.enabledToast":
    "Управление встроенным браузером включено",
  "settings.browser.control.disabledToast":
    "Управление встроенным браузером отключено",
  "settings.browser.security.section": "Безопасность",
  "settings.embeddedBrowserAllowInsecureCertificates":
    "Игнорировать ошибки сертификатов",
  "settings.embeddedBrowserAllowInsecureCertificatesDescription":
    "Если включено, встроенный браузер перестаёт проверять HTTPS-сертификаты. Влияет только на встроенный браузер. Перезапустите приложение, чтобы изменения вступили в силу.",
  "settings.embeddedBrowserAllowInsecureCertificatesSavedHint":
    "Настройка сертификатов сохранена. Перезапустите приложение, чтобы изменения вступили в силу.",
  "settings.browser.data.section": "Данные браузера",
  "settings.browser.desktopOnly":
    "Данными браузера можно управлять только в настольном приложении ZCode.",
  "settings.browser.import.title": "Импортировать состояние входа Chrome",
  "settings.browser.import.description":
    "Разово перенесите состояние входа Chrome во встроенный браузер, чтобы ИИ мог открывать сайты, на которых вы уже вошли, и работать более слаженно.",
  "settings.browser.import.action": "Импортировать данные браузера",
  "settings.browser.import.notFound":
    "Профиль Chrome, пригодный для импорта, не найден. Откройте Chrome и убедитесь, что в профиле есть данные браузера.",
  "settings.browser.import.ambiguous":
    "Обнаружено несколько профилей Chrome, но не удалось определить последний использованный. Откройте профиль, который нужно импортировать, и повторите попытку.",
  "settings.browser.import.executableNotFound":
    "Chrome не найден. Установите Chrome и повторите попытку.",
  "settings.browser.import.accessDenied":
    "Импорт отменён: доступ к Chrome Safe Storage в связке ключей macOS не разрешён. Данные Chrome не импортированы.",
  "settings.browser.import.elevationRequired":
    "Подтвердите доступ администратора, прежде чем импортировать cookie-файлы Chrome, защищённые шифрованием App-Bound.",
  "settings.browser.import.elevationCancelled":
    "Запрос доступа администратора Windows отменён. Cookie-файлы не импортированы.",
  "settings.browser.import.helperVerificationFailed":
    "ZCode не удалось проверить компонент безопасного импорта для Windows. Переустановите или обновите ZCode, прежде чем импортировать cookie-файлы.",
  "settings.browser.import.appBoundFailed":
    "Windows не удалось разблокировать cookie-файлы Chrome с защитой App-Bound. Cookie-файлы не импортированы.",
  "settings.browser.import.adminConfirmTitle":
    "Разрешить доступ администратора для импорта cookie-файлов Chrome?",
  "settings.browser.import.adminConfirmDescription":
    "Chrome защищает cookie-файлы шифрованием App-Bound в Windows. Только для этого импорта ZCode запросит права администратора, запустит временную системную службу и сразу удалит её. Пароли Chrome никогда не читаются и не импортируются.",
  "settings.browser.import.adminConsent":
    "Подтверждаю доступ администратора только для этого импорта cookie-файлов",
  "settings.browser.import.adminConfirmAction":
    "Продолжить и запросить доступ",
  "settings.browser.import.cookieProtected":
    "Cookie-файлы Chrome защищены шифрованием application-bound, и безопасный импорт невозможен. Данные LocalStorage для импорта недоступны.",
  "settings.browser.import.profileLocked":
    "Профиль Chrome используется, и создать согласованный снимок не удалось. Закройте Chrome и повторите попытку.",
  "settings.browser.import.localStorageFailed":
    "Не удалось прочитать снимок LocalStorage Chrome. Закройте Chrome и повторите попытку.",
  "settings.browser.import.failed":
    "Не удалось импортировать данные браузера Chrome.",
  "settings.browser.import.success":
    "Импортировано cookie-файлов: {cookies}, записей LocalStorage: {entries}, сайтов: {origins}.",
  "settings.browser.import.successWithSkipped":
    "Импортировано cookie-файлов: {cookies}, записей LocalStorage: {entries}, сайтов: {origins}; не импортировано cookie-файлов: {skipped}.",
  "settings.browser.import.partialCookieProtected":
    "Импортировано cookie-файлов: {cookies}, записей LocalStorage: {entries}, сайтов: {origins}; не импортировано защищённых Chrome cookie-файлов: {skipped}.",
  "settings.browser.import.partialAppBound":
    "Импортировано записей LocalStorage: {entries}, сайтов: {origins}; cookie-файлы App-Bound не импортированы.",
  "settings.browser.import.partialLocalStorage":
    "Импортировано cookie-файлов: {cookies}, но часть данных LocalStorage не импортирована. Закройте Chrome перед повторной попыткой — это может улучшить результат.",
  "settings.browser.clearCache.title": "Очистить кэш встроенного браузера",
  "settings.browser.clearCache.description":
    "Очищает HTTP-кэш, Cache Storage и service workers, сохраняя cookie-файлы и локальные данные сайтов.",
  "settings.browser.clearCache.action": "Очистить кэш",
  "settings.browser.clearCache.success": "Кэш встроенного браузера очищен",
  "settings.browser.clearAll.title": "Очистить все данные браузера",
  "settings.browser.clearAll.description":
    "Удаляет cookie-файлы, данные сайтов и кэш из встроенного браузера. Это действие необратимо.",
  "settings.browser.clearAll.action": "Очистить всё",
  "settings.browser.clearAll.success":
    "Все данные встроенного браузера очищены",
  "settings.browser.clear.failed":
    "Не удалось очистить данные встроенного браузера.",
  "settings.browser.clearAll.confirmTitle":
    "Очистить все данные встроенного браузера?",
  "settings.browser.clearAll.confirmDescription":
    "Вы выйдете из аккаунтов на сайтах во встроенном браузере, а cookie-файлы, данные сайтов и кэш будут удалены. Это действие необратимо.",
  "settings.browser.clearAll.confirmAction": "Очистить данные",
  "settings.lightTheme": "Светлая тема кода",
  "settings.lightThemeDescription":
    "Тема подсветки для кода в светлом интерфейсе.",
  "settings.darkTheme": "Тёмная тема кода",
  "settings.darkThemeDescription":
    "Тема подсветки для кода в тёмном интерфейсе.",
  "settings.showLineNumbers": "Показывать номера строк",
  "settings.showLineNumbersDescription":
    "Отображать номера строк в представлениях кода и diff.",
  "settings.wrapLongLines": "Переносить длинные строки",
  "settings.wrapLongLinesDescription":
    "Автоматически переносить длинные строки кода.",
  "settings.fontSize": "Размер шрифта кода",
  "settings.fontSizeDescription":
    "Настройте размер шрифта по умолчанию для блоков кода, предпросмотра файлов и просмотра diff.",
  "settings.previewSectionTitle": "Предпросмотр кода",
  "settings.previewLight": "Светлая тема",
  "settings.previewDark": "Тёмная тема",
  "settings.previewDescription":
    "Предпросмотр светлой и тёмной тем оформления кода. Тема, используемая текущим интерфейсом, отмечена как активная.",
  "settings.previewBadge.active": "Активна",
  "settings.previewBadge.light": "Светлая",
  "settings.previewBadge.dark": "Тёмная",
  "settings.modelProviderTitle": "Настройки моделей",
  "settings.mcpTitle": "MCP-серверы",
  "settings.mcp.description":
    "Управляйте конфигурациями MCP-серверов, которые использует ZCode Agent.",
  "settings.mcp.create.open": "Добавить MCP-сервер",
  "settings.mcp.import.open": "Импорт MCP-серверов из внешних агентов",
  "settings.mcp.import.action": "Импортировать",
  "settings.mcp.emptyTitle": "MCP-серверов пока нет",
  "settings.mcp.emptyDescription":
    "Добавьте MCP-сервер, чтобы расширить возможности агента.",
  "settings.mcp.searchPlaceholder": "Поиск MCP-серверов…",
  "settings.mcp.group.local": "Настроенные MCP-серверы",
  "settings.mcp.group.plugin": "MCP-серверы плагинов",
  "settings.remoteSync.open": "Синхронизировать",
  "settings.remoteSync.preflighting":
    "Проверка доступа на запись к удалённому хосту…",
  "settings.remoteSync.preflightTimeout":
    "Истекло время ожидания проверки записи ({seconds} с). Проверьте подключение к удалённому хосту и попробуйте снова.",
  "settings.remoteSync.preflightFailed":
    "Удалённая цель недоступна для записи: {path}. {error}",
  "settings.mcp.remoteSync.open": "Синхронизировать MCP",
  "settings.mcp.remoteSync.title":
    "Синхронизация MCP-серверов с удалённой целью",
  "settings.mcp.remoteSync.warningTitle": "Доступность данных и окружения MCP",
  "settings.mcp.remoteSync.warningDescription":
    "Синхронизация копирует конфигурацию локальных пользовательских MCP-серверов на удалённый хост. HTTP-URL MCP копируются, а пути файловой системы MCP переписываются для выбранного удалённого проекта, однако не все зависимые данные и возможности системного окружения могут быть гарантированы. Если MCP-сервер недоступен из-за удалённого окружения, прав доступа или отсутствующих зависимостей, установите его или добавьте зависимости на удалённом сервере.",
  "settings.mcp.remoteSync.target": "Цель: {target}",
  "settings.mcp.remoteSync.loading": "Загрузка локальных MCP-серверов…",
  "settings.mcp.remoteSync.empty":
    "Локальные пользовательские MCP-серверы не найдены.",
  "settings.mcp.remoteSync.filteredEmpty":
    "Все локальные пользовательские MCP-серверы уже есть на удалённом хосте.",
  "settings.mcp.remoteSync.showExisting":
    "Показать существующие удалённые MCP-серверы",
  "settings.mcp.remoteSync.selectAll": "Выбрать все",
  "settings.mcp.remoteSync.start": "Синхронизировать выбранные",
  "settings.mcp.remoteSync.syncing": "Синхронизация MCP-серверов…",
  "settings.mcp.remoteSync.existing": "Уже есть на удалённом хосте",
  "settings.mcp.remoteSync.synced": "Синхронизировано",
  "settings.mcp.remoteSync.skipped": "Пропущено",
  "settings.mcp.remoteSync.failed": "Ошибка",
  "settings.mcp.remoteSync.resultEmpty":
    "Результаты синхронизации MCP не получены.",
  "settings.mcp.remoteSync.selectionCount": "Выбрано: {selected}/{total}",
  "settings.mcp.remoteSync.noSelection":
    "Выберите хотя бы один отсутствующий MCP-сервер.",
  "settings.plugins.remoteContext": "Текущий удалённый проект: {target}",
  "settings.plugins.remoteSync.open": "Синхронизировать плагин",
  "settings.plugins.remoteSync.title":
    "Синхронизация плагинов с удалённым хостом",
  "settings.plugins.remoteSync.warningTitle":
    "Напоминание об удалённом выполнении",
  "settings.plugins.remoteSync.warningDescription":
    "Синхронизированные плагины могут загружать и запускать скиллы, команды, хуки и MCP-серверы в удалённой среде. Плагины из маркетплейсов переустанавливаются на удалённой цели и требуют удалённого доступа к их источнику в маркетплейсе.",
  "settings.plugins.remoteSync.target": "Цель: {target}",
  "settings.plugins.remoteSync.loading": "Загрузка локальных плагинов…",
  "settings.plugins.remoteSync.empty":
    "Нет локальных плагинов для удалённой синхронизации.",
  "settings.plugins.remoteSync.filteredEmpty":
    "Все локальные плагины уже есть на удалённом хосте.",
  "settings.plugins.remoteSync.showExisting":
    "Показывать существующие удалённые плагины",
  "settings.plugins.remoteSync.selectAll": "Выбрать все",
  "settings.plugins.remoteSync.start": "Синхронизировать выбранные",
  "settings.plugins.remoteSync.syncing": "Синхронизация плагинов…",
  "settings.plugins.remoteSync.queued": "В очереди",
  "settings.plugins.remoteSync.existing": "Уже есть на удалённом хосте",
  "settings.plugins.remoteSync.synced": "Синхронизировано",
  "settings.plugins.remoteSync.skipped": "Пропущено",
  "settings.plugins.remoteSync.failed": "Ошибка",
  "settings.plugins.remoteSync.stopped": "Остановлено",
  "settings.plugins.remoteSync.stop": "Остановить синхронизацию",
  "settings.plugins.remoteSync.logTooltip": "Журнал синхронизации",
  "settings.plugins.remoteSync.optionsSummary":
    "Параметры: {syncable} — будет выполнена попытка; {manual} — потребуется ручная настройка на удалённом хосте",
  "settings.plugins.remoteSync.resultEmpty":
    "Результаты синхронизации плагинов не получены.",
  "settings.plugins.remoteSync.selectionCount": "Выбрано: {selected}/{total}",
  "settings.plugins.remoteSync.noSelection":
    "Выберите хотя бы один отсутствующий плагин.",
  "settings.mcp.remoteContext": "Текущий удалённый проект: {target}",
  "settings.mcp.plugin.active": "Встроенный",
  "settings.mcp.plugin.activeDescription":
    "Этот MCP-сервер предоставляется включённым плагином и управляется им.",
  "settings.mcp.plugin.connecting": "Подключение",
  "settings.mcp.plugin.connectingDescription":
    "MCP-сервер плагина подключается к своей среде выполнения.",
  "settings.mcp.plugin.connected": "Подключён",
  "settings.mcp.plugin.connectedDescription":
    "MCP-сервер плагина подключён и доступен.",
  "settings.mcp.plugin.disconnected": "Отключён",
  "settings.mcp.plugin.disconnectedDescription":
    "MCP-сервер плагина загружен, но сейчас не подключён.",
  "settings.mcp.host.active": "Встроенный в хост",
  "settings.mcp.host.activeDescription":
    "ZCode предоставляет этот MCP-сервер для плагина {pluginName}. Его среда выполнения управляется хостом.",
  "settings.mcp.plugin.disabled": "Плагин отключён",
  "settings.mcp.plugin.disabledDescription":
    "Этот MCP-сервер встроен в плагин. Включите плагин, чтобы загрузить его.",
  "settings.mcp.plugin.unavailable": "Не загружен",
  "settings.mcp.plugin.unavailableDescription":
    "Плагин объявляет этот MCP-сервер, но тот сейчас не загружен. Проверьте диагностику плагина.",
  "settings.mcp.plugin.authorizationRequired": "Требуется авторизация",
  "settings.mcp.plugin.authorizationRequiredDescription":
    "Откройте авторизацию, чтобы завершить подключение этого MCP-сервера плагина.",
  "settings.mcp.oauth.openAuthorization": "Открыть авторизацию",
  "settings.mcp.statusOnlyUnsupported":
    "Этот ZCode Agent не может обновить статус OAuth. Обновите или перезапустите ZCode, затем заново откройте настройки MCP, чтобы выполнить полное обновление.",
  "settings.mcp.refreshFailed": "Не удалось обновить статус MCP: {error}",
  "settings.mcp.status.toolCount": "Инструментов: {count}",
  "settings.mcp.status.connectedReason": "Подключён и доступен.",
  "settings.mcp.status.connectingReason":
    "Подключение к среде выполнения MCP.",
  "settings.mcp.status.errorReason": "Не удалось подключить MCP-сервер.",
  "settings.mcp.status.disconnectedReason": "MCP-сервер не подключён.",
  "settings.mcp.status.unknownReason": "Статус MCP-сервера недоступен.",
  "settings.mcp.failure.technicalDetails": "Подробнее",
  "settings.mcp.deleteConfirmTitle": "Удалить MCP-сервер «{name}»?",
  "settings.mcp.deleteConfirmDescription":
    "Это действие нельзя отменить. Конфигурация сервера будет удалена из файла.",
  "settings.mcp.deleteConfirmAction": "Удалить сервер",
  "settings.mcp.form.backToList": "Назад",
  "settings.mcp.form.createTitle": "Новый MCP-сервер",
  "settings.mcp.form.editTitle": "Изменить MCP-сервер",
  "settings.mcp.form.createDescription":
    "Заполните новую конфигурацию MCP, затем сохраните, чтобы вернуться к списку.",
  "settings.mcp.form.editDescription":
    "Измените текущую конфигурацию MCP, затем сохраните, чтобы вернуться к списку.",
  "settings.mcp.form.jsonParseError": "Не удалось разобрать JSON",
  "settings.mcp.form.envOptional": "Переменные окружения (необязательно)",
  "settings.mcp.form.headersOptional": "Заголовки (необязательно)",
  "settings.mcp.form.mode.form": "Форма",
  "settings.mcp.form.fullConfig": "Полная конфигурация",
  "settings.mcp.form.pasteHintPrefix": "Можно вставить",
  "settings.mcp.form.pasteHintMiddle": "или",
  "settings.mcp.form.pasteHintSuffix": ".",
  "settings.mcp.form.name": "Название",
  "settings.mcp.form.type": "Тип",
  "settings.mcp.form.timeoutMs": "Таймаут (мс)",
  "settings.mcp.form.protocolVersion": "Версия протокола",
  "settings.mcp.form.protocolVersion.auto": "Авто (рекомендуется)",
  "settings.mcp.form.protocolVersion.legacy":
    "Совместимость со старыми версиями",
  "settings.mcp.form.protocolVersion.modern": "v2",
  "settings.mcp.form.type.stdio": "stdio (локальная команда)",
  "settings.mcp.form.type.sse": "SSE (Server-Sent Events)",
  "settings.mcp.form.command": "Команда",
  "settings.mcp.form.args": "Аргументы (через пробел)",
  "settings.mcp.form.add": "Добавить",
  "settings.mcpServers.import.open": "Импорт MCP-серверов из внешних агентов",
  "settings.mcpServers.import.title": "Импорт MCP-серверов из внешних агентов",
  "settings.mcpServers.import.scanning":
    "Сканирование доступных для импорта MCP-серверов…",
  "settings.mcpServers.import.empty":
    "MCP-серверы для импорта не найдены. Проверьте файлы конфигурации MCP внешних агентов и выполните сканирование снова.",
  "settings.mcpServers.import.summary":
    "Найдено MCP-серверов, доступных для импорта: {count}",
  "settings.mcpServers.import.scopeLabel": "Область",
  "settings.mcpServers.import.scope.global": "Глобально",
  "settings.mcpServers.import.scope.project": "Проект",
  "settings.mcpServers.import.scopeEmpty":
    "В этой области не найдено MCP-серверов.",
  "settings.mcpServers.import.selectAll": "Выбрать все",
  "settings.mcpServers.import.clearAll": "Очистить все",
  "settings.mcpServers.import.selectionCount": "Выбрано: {selected}/{total}",
  "settings.mcpServers.import.expandSource": "Показать MCP-серверы",
  "settings.mcpServers.import.collapseSource": "Скрыть MCP-серверы",
  "settings.mcpServers.import.selectSource":
    "Выбрать все MCP-серверы этого источника",
  "settings.mcpServers.import.deselectSource":
    "Снять выделение со всех MCP-серверов этого источника",
  "settings.mcpServers.import.itemCount": "MCP-серверов: {count}",
  "settings.mcpServers.import.skipReason.sameNameExists":
    "Сервер уже существует",
  "settings.mcpServers.import.start": "Импортировать выбранные MCP-серверы",
  "settings.mcpServers.import.targetLabel": "Цель импорта",
  "settings.mcpServers.import.target.global": "Импортировать глобально",
  "settings.mcpServers.import.target.project": "Импортировать в проект",
  "settings.mcpServers.import.importing": "Импорт MCP-серверов в ZCode",
  "settings.mcpServers.import.imported": "Импортировано",
  "settings.mcpServers.import.skipped": "Пропущено",
  "settings.mcpServers.import.failed": "Ошибка",
  "settings.mcpServers.import.resultList": "Результаты по MCP-серверам",
  "settings.mcpServers.import.resultEmpty":
    "Результаты по MCP-серверам не получены.",
  "settings.mcpServers.import.finish": "Готово",
  "settings.scope.label": "Область",
  "settings.scope.user": "Пользователь",
  "settings.scope.workspace": "Проект",
  "settings.scope.default": "По умолчанию",
  "settings.plugins.scope.inheritedUser":
    "Наследует пользовательское значение по умолчанию",
  "settings.plugins.scope.userDefault":
    "Пользовательское значение по умолчанию",
  "settings.plugins.scope.workspaceOverride": "Переопределение проекта",
  "settings.plugins.scope.restoreUserDefault":
    "Восстановить пользовательское значение по умолчанию",
  "settings.plugins.scope.restored":
    "Для «{plugin}» восстановлено пользовательское значение по умолчанию",
  "settings.plugins.scope.workspaceHint":
    "Эти изменения затрагивают только текущий проект и переопределяют пользовательское значение по умолчанию.",
  "settings.plugins.toggle.enable": "Включить «{plugin}»",
  "settings.plugins.toggle.disable": "Отключить «{plugin}»",
  "settings.plugins.toggle.pending": "Обновление «{plugin}»…",
  "settings.plugins.toggle.enabled": "«{plugin}» включён",
  "settings.plugins.toggle.disabled": "«{plugin}» отключён",
  "settings.plugins.toggle.workspaceEnabled":
    "«{plugin}» включён в этом проекте (переопределяет пользовательское значение по умолчанию)",
  "settings.plugins.toggle.workspaceDisabled":
    "«{plugin}» отключён в этом проекте (переопределяет пользовательское значение по умолчанию)",
  "settings.plugins.toggle.failed":
    "Не удалось обновить «{plugin}». Попробуйте снова.",
  "settings.modelProviderDescription":
    "Управляйте пользовательскими провайдерами моделей. После настройки их можно выбирать в чате.",
  "settings.modelProvider.add": "Добавить провайдера",
  "settings.modelProvider.createCustomProvider":
    "Создать пользовательский провайдер",
  "settings.modelProvider.templateCreateFailed":
    "Не удалось создать провайдера: некорректная конфигурация пользовательского провайдера",
  "settings.modelProvider.templateCreateRetry": "Повторить",
  "settings.modelProvider.edit": "Изменить",
  "settings.modelProvider.editModel": "Изменить настройки модели",
  "settings.modelProvider.editModelDescription":
    "Измените окно контекста этой модели.",
  "settings.modelProvider.delete": "Удалить",
  "settings.modelProvider.save": "Сохранить",
  "settings.modelProvider.providerSaveSuccess": "Сохранено: {provider}",
  "settings.modelProvider.providerSaving": "Сохранение {provider}",
  "settings.modelProvider.providerSaveFailure":
    "Не удалось сохранить {provider}: {error}",
  "settings.modelProvider.modelSaving": "Сохранение {provider} / {model}",
  "settings.modelProvider.modelSaveSuccess": "Сохранено: {provider} / {model}",
  "settings.modelProvider.modelDeleting": "Удаление {provider} / {model}",
  "settings.modelProvider.modelDeleteSuccess": "Удалено: {provider} / {model}",
  "settings.modelProvider.modelDeleteFailure":
    "Не удалось удалить {provider} / {model}: {error}",
  "settings.modelProvider.modelSaveFailure":
    "Не удалось сохранить {provider} / {model}: {error}",
  "settings.modelProvider.cancel": "Отмена",
  "settings.modelProvider.name": "Название",
  "settings.modelProvider.namePlaceholder": "например, DeepSeek",
  "settings.modelProvider.addProviderTitle": "Добавить провайдера моделей",
  "settings.modelProvider.addProviderDescription":
    "Настройте пользовательский API-эндпоинт и начальную модель.",
  "settings.modelProvider.addFromCatalog": "Каталог провайдеров",
  "settings.modelProvider.addPureCustom": "Пользовательский эндпоинт",
  "settings.modelProvider.catalogProviderSelect": "Выбор провайдера",
  "settings.modelProvider.catalogProviderSearch": "Поиск провайдеров",
  "settings.modelProvider.catalogProviderEmpty": "Провайдеры не найдены",
  "settings.modelProvider.addProviderAction": "Добавить провайдера",
  "settings.modelProvider.templatePickerTitle": "Добавить провайдера",
  "settings.modelProvider.templateGroup.zhipu": "Zhipu",
  "settings.modelProvider.templateGroup.other": "Другие",
  "settings.modelProvider.templatePickerBack": "Назад к деталям провайдера",
  "settings.modelProvider.addProviderModelReminder":
    "Добавьте хотя бы одну модель перед добавлением провайдера.",
  "settings.modelProvider.baseUrl": "Базовый URL",
  "settings.modelProvider.baseUrlPlaceholder": "https://api.example.com/v1",
  "settings.modelProvider.readOnlyField": "{field} (только для чтения)",
  "settings.modelProvider.endpointPath": "Путь эндпоинта: {format}",
  "settings.modelProvider.apiFormat": "Формат API",
  "settings.modelProvider.apiFormat.chatCompletions":
    "Chat completions (/v1/chat/completions)",
  "settings.modelProvider.apiFormat.responses": "Responses (/responses)",
  "settings.modelProvider.apiFormat.anthropicMessages":
    "Anthropic messages (/anthropic/v1/messages)",
  "settings.modelProvider.apiFormat.short.chatCompletions": "Chat",
  "settings.modelProvider.apiFormat.short.responses": "Responses",
  "settings.modelProvider.apiFormat.short.anthropicMessages": "Anthropic",
  "settings.modelProvider.apiFormat.title.chatCompletions": "Chat completions",
  "settings.modelProvider.apiFormat.title.responses": "Responses",
  "settings.modelProvider.apiFormat.title.anthropicMessages":
    "Anthropic messages",
  "settings.modelProvider.apiKey": "API-ключ",
  "settings.modelProvider.apiKeyPlaceholder": "Введите API-ключ",
  "settings.modelProvider.apiKeyDisabledHint":
    "Задайте API-ключ, чтобы включить этого провайдера.",
  "settings.modelProvider.getApiKey": "Получить API-ключ",
  "settings.modelProvider.viewUsage": "Просмотреть использование",
  "settings.modelProvider.useSubscription": "Использовать подписку",
  "settings.modelProvider.or": "или",
  "settings.modelProvider.connectionMode": "Режим подключения",
  "settings.modelProvider.connectionMode.oauth": "OAuth",
  "settings.modelProvider.connectionMode.codingPlan": "Индивидуальный план",
  "settings.modelProvider.connectionMode.startPlan": "Start Plan",
  "settings.modelProvider.connectionMode.startPlanCount":
    "Start Plan × {count}",
  "settings.modelProvider.connectionMode.switchToStartPlanPrefix":
    "Переключиться на",
  "settings.modelProvider.connectionMode.teamPlan": "Командный план",
  "settings.modelProvider.connectionMode.apiKeyBadge": "API",
  "settings.modelProvider.connectionMode.usageBasedApi":
    "API с оплатой по использованию",
  "settings.modelProvider.connectionMode.codingPlanBadge": "Индивидуальный",
  "settings.modelProvider.connectionMode.startPlanBadge": "Бесплатный",
  "settings.modelProvider.connectionMode.teamPlanBadge": "Командный",
  "settings.modelProvider.connectionMode.loadFailed":
    "Не удалось загрузить настройки подключения",
  "settings.modelProvider.connectionMode.noAvailablePlan":
    "Нет доступного плана",
  "settings.modelProvider.accountProviderConfigMissing":
    "Конфигурация провайдера аккаунта недоступна. Обновите и попробуйте снова.",
  "settings.modelProvider.startPlan.login": "Войти",
  "settings.modelProvider.startPlan.status.loginRequired":
    "Войдите, чтобы просмотреть и использовать свой Start Plan",
  "settings.modelProvider.startPlan.status.expired":
    "Срок действия Start Plan истёк",
  "settings.modelProvider.startPlan.status.noPlan":
    "Нет доступного Start Plan",
  "settings.modelProvider.startPlan.status.loginExpired":
    "Срок действия входа истёк. Войдите снова.",
  "settings.modelProvider.startPlan.title": "{provider} - Coding Plan",
  "settings.modelProvider.startPlan.meta.today": "Сегодня",
  "settings.modelProvider.startPlan.meta.tomorrow": "Завтра",
  "settings.modelProvider.startPlan.quotaSectionTitle": "Пробный план",
  "settings.modelProvider.startPlan.eligibleNewUser": "Новый пользователь",
  "settings.modelProvider.startPlan.preview.unit.tokens": "токенов",
  "settings.modelProvider.startPlan.preview.period.daily": "{unit} в день",
  "settings.modelProvider.startPlan.preview.entitlementSummary.daily":
    "Дневная квота · {details}",
  "settings.modelProvider.startPlan.preview.entitlementSummary.generic":
    "Квота · {details}",
  "settings.modelProvider.startPlan.preview.entitlementGroup.single":
    "{model} {quota}",
  "settings.modelProvider.startPlan.preview.entitlementGroup.each":
    "{models} — по {quota} каждому",
  "settings.modelProvider.startPlan.balance.title": "Баланс на сегодня",
  "settings.modelProvider.startPlan.balance.remaining":
    "Осталось токенов: {value}",
  "settings.modelProvider.startPlan.balance.used": "Использовано: {value}",
  "settings.modelProvider.startPlan.highlight.trial.label": "Пробный период",
  "settings.modelProvider.startPlan.highlight.trial.value":
    "5 календарных дней",
  "settings.modelProvider.startPlan.highlight.trial.description":
    "Отсчёт начинается после входа в ZCode 3.x.",
  "settings.modelProvider.startPlan.highlight.quota.label": "Дневная квота",
  "settings.modelProvider.startPlan.highlight.quota.value":
    "3M токенов в день",
  "settings.modelProvider.startPlan.highlight.quota.description":
    "Флагманские модели платформы GLM используют общую ежедневную пробную квоту 3M токенов.",
  "settings.modelProvider.startPlan.highlight.metering.label": "Тарификация",
  "settings.modelProvider.startPlan.highlight.metering.value":
    "После использования моделей платформы",
  "settings.modelProvider.startPlan.highlight.metering.description":
    "Тарификация начинается только после использования флагманских моделей платформы GLM.",
  "settings.modelProvider.startPlan.compatibility":
    "Поддерживаются BYOK и BYOA. Base URL, формат API и API-ключ ZCode настраивает автоматически.",
  "settings.modelProvider.codingPlan.title": "{provider} - Coding Plan",
  "settings.modelProvider.codingPlan.webview.title": "Улучшение плана",
  "settings.modelProvider.codingPlan.webview.authInjectFailed":
    "Не удалось выполнить вход на страницу плана. Повторите попытку.",
  "settings.modelProvider.codingPlan.webview.retry": "Повторить",
  "settings.modelProvider.codingPlan.webview.loadFailed":
    "Не удалось загрузить страницу плана.",
  "settings.modelProvider.codingPlan.webview.openWebsite":
    "Купить на официальном сайте",
  "settings.modelProvider.codingPlan.status.loginRequired": "Вы не вошли",
  "settings.modelProvider.codingPlan.status.disconnected": "Не подключено",
  "settings.modelProvider.codingPlan.status.checking": "Проверка",
  "settings.modelProvider.codingPlan.status.notPurchased":
    "Без подписки, включается после её оформления",
  "settings.modelProvider.codingPlan.status.purchased": "Подписка оформлена",
  "settings.modelProvider.codingPlan.status.unavailable":
    "Не удалось получить данные",
  "settings.modelProvider.codingPlan.status.teamExpired":
    "Срок действия командного плана истёк. Обратитесь к администратору команды.",
  "settings.modelProvider.codingPlan.status.teamUnavailable":
    "Командный план не назначен. Обратитесь к администратору команды.",
  "settings.modelProvider.codingPlan.status.unsupported":
    "Пока не поддерживается",
  "settings.modelProvider.codingPlan.bigmodel.unregisteredHint":
    "Этот аккаунт BigModel ещё не зарегистрирован. Сначала зарегистрируйтесь.",
  "settings.modelProvider.codingPlan.bigmodel.registerAction":
    "Зарегистрироваться",
  "settings.modelProvider.codingPlan.description.disconnected":
    "Подключитесь, чтобы просмотреть права Coding Plan.",
  "settings.modelProvider.codingPlan.description.checking":
    "Проверка прав на Coding Plan по текущему API-ключу провайдера.",
  "settings.modelProvider.codingPlan.description.notPurchased":
    "Для текущего API-ключа или аккаунта не найден активный Coding Plan.",
  "settings.modelProvider.codingPlan.description.purchased":
    "Coding Plan активен и может использоваться этим провайдером.",
  "settings.modelProvider.codingPlan.description.credentialFailed":
    "Не удалось получить ваш план. Войдите снова и повторите попытку.",
  "settings.modelProvider.codingPlan.description.unavailable":
    "Не удалось проверить права на Coding Plan. Переподключитесь и повторите попытку.",
  "settings.modelProvider.codingPlan.description.unsupported":
    "Этот провайдер пока не поддерживает проверку статуса Coding Plan.",
  "settings.modelProvider.codingPlan.login": "Войти в {provider}",
  "settings.modelProvider.codingPlan.connect": "Подключиться к {provider}",
  "settings.modelProvider.codingPlan.purchaseLoginRequiredShort":
    "Войти для покупки",
  "settings.modelProvider.codingPlan.purchaseConnectRequiredShort":
    "Подключиться для покупки",
  "settings.modelProvider.codingPlan.disconnect": "Отвязать",
  "settings.modelProvider.codingPlan.subscribe": "Подписаться",
  "settings.modelProvider.codingPlan.upgrade": "Улучшить",
  "settings.modelProvider.codingPlan.renew": "Продлить",
  "settings.modelProvider.codingPlan.currentPlan": "Текущий",
  "settings.modelProvider.codingPlan.purchased": "Куплено",
  "settings.modelProvider.codingPlan.startPlan.expiredBadge": "Истёк",
  "settings.modelProvider.codingPlan.startPlan.expiredAction": "Завершён",
  "settings.modelProvider.codingPlan.cancelUpgrade": "Назад",
  "settings.modelProvider.codingPlan.purchase.title": "Улучшение Coding Plan",
  "settings.modelProvider.codingPlan.purchase.pricingTitle": "Тарифы",
  "settings.modelProvider.codingPlan.purchase.pricingDescription":
    "Найдите подходящий план и начните свой путь в AI-кодинге.",
  "settings.modelProvider.codingPlan.purchase.moreInfo": "Подробнее",
  "settings.modelProvider.codingPlan.purchase.billingCycleTitle":
    "Выберите цикл оплаты",
  "settings.modelProvider.codingPlan.purchase.paymentConfirmTitle":
    "Подтвердите оплату",
  "settings.modelProvider.codingPlan.purchase.paymentTitle": "Оплата",
  "settings.modelProvider.codingPlan.purchase.personal": "Частные лица",
  "settings.modelProvider.codingPlan.purchase.team": "Команды",
  "settings.modelProvider.codingPlan.purchase.individualsSectionTitle":
    "Для частных лиц",
  "settings.modelProvider.codingPlan.purchase.teamsSectionTitle": "Для команд",
  "settings.modelProvider.codingPlan.purchaseBanner.startPlanTitle":
    "Start Plan",
  "settings.modelProvider.codingPlan.purchaseBanner.startPlanDescription":
    "Попробуйте бесплатно квоту флагманских моделей платформы GLM.",
  "settings.modelProvider.codingPlan.purchaseBanner.personalTitle":
    "Для частных лиц",
  "settings.modelProvider.codingPlan.purchaseBanner.personalDescription":
    "Для частных разработчиков с личной квотой Coding Plan.",
  "settings.modelProvider.codingPlan.purchaseBanner.temporarilySoldOut":
    "Временно распродано",
  "settings.modelProvider.codingPlan.purchaseBanner.teamTitle": "Для команд",
  "settings.modelProvider.codingPlan.purchaseBanner.teamDescription":
    "Для командной работы с местами и централизованной оплатой.",
  "settings.modelProvider.codingPlan.purchaseBanner.teamStandardDescription":
    "Для небольших команд, которым нужны общая квота и управление местами.",
  "settings.modelProvider.codingPlan.purchaseBanner.teamAdvancedDescription":
    "Для инженерных команд с высокой нагрузкой, которым нужны увеличенная квота и гибкие места.",
  "settings.modelProvider.codingPlan.purchase.choosePlan": "Выберите план",
  "settings.modelProvider.codingPlan.purchase.choosePlanDescription":
    "Сначала сравните объёмы планов. Далее будут подтверждены цикл оплаты и итоговая сумма.",
  "settings.modelProvider.codingPlan.purchase.selectPlan": "Выбрать",
  "settings.modelProvider.codingPlan.purchase.select": "Выбрать",
  "settings.modelProvider.codingPlan.purchase.selected": "Выбран",
  "settings.modelProvider.codingPlan.purchase.fromPrice": "{price}+",
  "settings.modelProvider.codingPlan.purchase.fromPriceSuffix": "",
  "settings.modelProvider.codingPlan.purchase.previewLoading":
    "Расчёт суммы платежа",
  "settings.modelProvider.codingPlan.purchase.previewLoadingDescription":
    "Подождите. Подтверждение и оплата используют одни и те же платёжные данные.",
  "settings.modelProvider.codingPlan.purchase.previewUnavailableDescription":
    "Сумма платежа недоступна. Вернитесь назад и снова выберите цикл оплаты.",
  "settings.modelProvider.codingPlan.purchase.teamTitle": "Командные планы",
  "settings.modelProvider.codingPlan.purchase.teamDescription":
    "Места, общая квота и централизованная оплата появятся позже.",
  "settings.modelProvider.codingPlan.purchase.teamCardDescription":
    "Общая квота, управление местами и централизованная оплата.",
  "settings.modelProvider.codingPlan.purchase.comingSoon": "Скоро",
  "settings.modelProvider.codingPlan.purchase.chooseBillingCycle":
    "Выберите цикл оплаты для плана {plan}",
  "settings.modelProvider.codingPlan.purchase.billingCycleDescription":
    "Цены и скидки обновляются перед оплатой. Итоговая сумма подтверждается на шаге оплаты.",
  "settings.modelProvider.codingPlan.purchase.continueToPayment":
    "Перейти к оплате",
  "settings.modelProvider.codingPlan.purchase.summaryPlan": "План",
  "settings.modelProvider.codingPlan.purchase.summaryBillingCycle":
    "Цикл оплаты",
  "settings.modelProvider.codingPlan.purchase.summaryDueToday":
    "К оплате сегодня",
  "settings.modelProvider.codingPlan.purchase.summaryStatus": "Статус",
  "settings.modelProvider.codingPlan.purchase.servicePeriod":
    "Период обслуживания",
  "settings.modelProvider.codingPlan.purchase.durationValue":
    "{duration} {unit}",
  "settings.modelProvider.codingPlan.purchase.autoRenewPeriod":
    "Автопродление: {period}",
  "settings.modelProvider.codingPlan.purchase.renewalPolicyTitle":
    "Политика продления",
  "settings.modelProvider.codingPlan.purchase.renewalPolicyCharge":
    "Подписка автоматически продлевается за {price}{unit}, если не отменена.",
  "settings.modelProvider.codingPlan.purchase.renewalPolicyPreview":
    "Итоговые скидки, кредиты и сумма оплаты будут подтверждены на следующем шаге предпросмотра платежа.",
  "settings.modelProvider.codingPlan.purchase.renewalPolicyCancel":
    "Автопродление можно отключить в управлении планом до следующего продления.",
  "settings.modelProvider.codingPlan.purchase.termsAccepted":
    "Я понимаю и принимаю политику продления и условия подписки.",
  "settings.modelProvider.codingPlan.purchase.paymentPreparing":
    "Подготовка платежа",
  "settings.modelProvider.codingPlan.purchase.securityChecking":
    "Ожидание проверки безопасности",
  "settings.modelProvider.codingPlan.purchase.paymentPolling":
    "Ожидание подтверждения оплаты",
  "settings.modelProvider.codingPlan.purchase.paymentStarted":
    "Завершите платёж на этой странице оплаты",
  "settings.modelProvider.codingPlan.purchase.paymentStartedDescription":
    "Держите эту панель открытой, пока платёжный канал завершает обработку. До успешной оплаты вы можете вернуться на страницу подтверждения платежа.",
  "settings.modelProvider.codingPlan.purchase.paymentInProgress":
    "Идёт оплата",
  "settings.modelProvider.codingPlan.purchase.successTitle":
    "Оплата прошла успешно",
  "settings.modelProvider.codingPlan.purchase.successDescription":
    "Оплата Coding Plan прошла успешно. Статус провайдера обновится после закрытия этой панели.",
  "settings.modelProvider.codingPlan.purchase.successRefreshingDescription":
    "Оплата прошла успешно. Мы обновляем статус плана; вы можете закрыть эту панель — страница провайдера продолжит обновление.",
  "settings.modelProvider.codingPlan.purchase.statusSyncing": "Синхронизация",
  "settings.modelProvider.codingPlan.purchase.statusActive": "Активен",
  "settings.modelProvider.codingPlan.purchase.refreshNow": "Обновить сейчас",
  "settings.modelProvider.codingPlan.purchase.done": "Готово",
  "settings.modelProvider.codingPlan.purchase.teamMemberNoticeTitle":
    "Назначьте участников на командный план",
  "settings.modelProvider.codingPlan.purchase.teamMemberNoticeDescription":
    "Добавьте себя или других участников на странице управления командным планом BigModel. После назначения командная квота станет доступна в ZCode.",
  "settings.modelProvider.codingPlan.purchase.manageTeamPlan":
    "Управление командным планом",
  "settings.modelProvider.codingPlan.manage": "Управлять",
  "settings.modelProvider.planCard.codingPlan": "Coding Plan",
  "settings.modelProvider.planCard.startPlan": "Start Plan",
  "settings.modelProvider.planCard.usage.fiveHour": "Использование за 5 ч",
  "settings.modelProvider.planCard.usage.week": "Использование за неделю",
  "settings.modelProvider.planCard.usage.totalTokens": "Всего токенов",
  "settings.modelProvider.codingPlan.recheck": "Проверить ещё раз",
  "settings.modelProvider.codingPlan.checkingPlans": "Проверка…",
  "settings.modelProvider.codingPlan.switchAccount": "Сменить аккаунт",
  "settings.modelProvider.codingPlan.useApiKeyProvider":
    "Использовать API-ключ",
  "settings.modelProvider.codingPlan.nextResetAt": "Квота обновится {date}",
  "settings.modelProvider.codingPlan.renewsAt": "Продление {date}",
  "settings.modelProvider.codingPlan.expiresAt": "Действует до {date}",
  "settings.modelProvider.startPlan.pendingUntil": "Ожидается: {date}",
  "settings.modelProvider.startPlan.refreshEntitlement": "Обновить доступ",
  "settings.modelProvider.startPlan.expiresAt": "Истекает {date}",
  "settings.modelProvider.codingPlan.openApiKeyProvider":
    "Открыть BigModel — API-ключ",
  "settings.modelProvider.codingPlan.plansTitle": "Coding Plan",
  "settings.modelProvider.codingPlan.audience.personal": "Для частных лиц",
  "settings.modelProvider.codingPlan.audience.enterprise": "Для бизнеса",
  "settings.modelProvider.codingPlan.period.monthly": "Ежемесячно",
  "settings.modelProvider.codingPlan.period.quarterly": "Ежеквартально",
  "settings.modelProvider.codingPlan.period.yearly": "Ежегодно",
  "settings.modelProvider.codingPlan.unit.usd.month": "/мес",
  "settings.modelProvider.codingPlan.unit.usd.quarter": "/квартал",
  "settings.modelProvider.codingPlan.unit.usd.year": "/год",
  "settings.modelProvider.codingPlan.unit.cny.month": "/месяц",
  "settings.modelProvider.codingPlan.unit.cny.quarter": "/квартал",
  "settings.modelProvider.codingPlan.unit.cny.year": "/год",
  "settings.modelProvider.codingPlan.monthlyEquivalent":
    "Эквивалентно {price}/мес.",
  "settings.modelProvider.codingPlan.monthlyFlexibleBilling":
    "Гибкая помесячная оплата",
  "settings.modelProvider.codingPlan.providerFormDescription":
    "Эти настройки управляются Coding Plan. Для ручных ключей используйте настройку API-ключа.",
  "settings.modelProvider.codingPlan.retry": "Повторить",
  "settings.modelProvider.codingPlan.viewPrices": "Посмотреть цены",
  "settings.modelProvider.codingPlan.productsLoading": "Загрузка Coding Plan",
  "settings.modelProvider.codingPlan.productsLoadingDescription":
    "Получаем актуальные планы и цены от {provider}.",
  "settings.modelProvider.codingPlan.purchase.authStateError":
    "Не удалось определить статус входа. Повторите попытку.",
  "settings.modelProvider.codingPlan.purchase.authStateRetry":
    "Повторить проверку входа",
  "settings.modelProvider.codingPlan.productsError":
    "Не удалось загрузить планы",
  "settings.modelProvider.codingPlan.productsReconnectTitle":
    "Подключение для просмотра планов",
  "settings.modelProvider.codingPlan.reconnectToViewPlans": "Переподключить",
  "settings.modelProvider.codingPlan.productsLoginRequired":
    "Переподключите аккаунт {provider}, чтобы обновить цены и доступные продукты Coding Plan.",
  "settings.modelProvider.codingPlan.purchaseLoginRequired":
    "Переподключите аккаунт и повторите попытку.",
  "settings.modelProvider.codingPlan.productsEmpty": "Нет доступных планов",
  "settings.modelProvider.codingPlan.productsEmptyDescription":
    "Для этого аккаунта от {provider} не получено доступных для покупки продуктов Coding Plan.",
  "settings.modelProvider.codingPlan.dynamicUnsupportedTitle":
    "Динамические планы недоступны",
  "settings.modelProvider.codingPlan.dynamicUnsupportedDescription":
    "Оформление подписки в приложении пока доступно только для Z.ai / BigModel Coding Plan.",
  "settings.modelProvider.codingPlan.priceUnavailable": "Цена недоступна",
  "settings.modelProvider.codingPlan.systemBusy":
    "Система занята. Попробуйте позже.",
  "settings.modelProvider.codingPlan.subscriptionBusy":
    "Сервис подписки занят",
  "settings.modelProvider.codingPlan.subscriptionBusyButton": "Система занята",
  "settings.modelProvider.codingPlan.pendingOrder":
    "У вас есть незавершённый заказ. Завершите или отмените его, прежде чем оформлять новую покупку.",
  "settings.modelProvider.codingPlan.paymentTimeout":
    "Оплата ещё обрабатывается. Проверьте статус Coding Plan после завершения на странице оплаты.",
  "settings.modelProvider.codingPlan.zaiOverseasPaymentRequired":
    "Зарубежные планы Z.ai оплачиваются через PayPal или на официальной странице оплаты Z.ai, а не через оформление автоплатежа Alipay.",
  "settings.modelProvider.codingPlan.paypalSetupRequired":
    "Авторизуйте PayPal, прежде чем продолжить оплату.",
  "settings.modelProvider.codingPlan.paypalApproveUrlMissing":
    "PayPal не вернул ссылку для подтверждения. Попробуйте позже.",
  "settings.modelProvider.codingPlan.paypalUnsupported":
    "PayPal не поддерживается для этого аккаунта или региона.",
  "settings.modelProvider.codingPlan.paypalCancelled":
    "Авторизация PayPal отменена. Выберите PayPal снова, чтобы повторить.",
  "settings.modelProvider.codingPlan.paypalSubscribeFailed":
    "Не удалось создать подписку PayPal. Убедитесь, что авторизация PayPal завершена, затем повторите попытку или оплатите картой.",
  "settings.modelProvider.codingPlan.securityVerificationRequired":
    "Пройдите проверку безопасности, прежде чем продолжить покупку.",
  "settings.modelProvider.codingPlan.securityVerificationCancelled":
    "Проверка безопасности отменена.",
  "settings.modelProvider.codingPlan.securityVerificationFailed":
    "Не удалось пройти проверку безопасности. Попробуйте позже.",
  "settings.modelProvider.codingPlan.start.loginEnable":
    "Подключиться, чтобы включить",
  "settings.modelProvider.codingPlan.start.loginTrial": "Подключить Z.ai",
  "settings.modelProvider.codingPlan.start.enabled": "Включено",
  "settings.modelProvider.codingPlan.start.freeBadge": "Бесплатно",
  "settings.modelProvider.codingPlan.start.freeEquityTitle":
    "Начните с бесплатного плана",
  "settings.modelProvider.codingPlan.start.freeEquityDetails":
    "Базовые возможности для кодинга доступны после входа.",
  "settings.modelProvider.codingPlan.paymentDialog.title":
    "План автопродления — {product}",
  "settings.modelProvider.codingPlan.paymentDialog.close":
    "Закрыть окно оплаты",
  "settings.modelProvider.codingPlan.paymentDialog.originalAmount":
    "Цена плана",
  "settings.modelProvider.codingPlan.paymentDialog.discountActivity": "Скидка",
  "settings.modelProvider.codingPlan.paymentDialog.currentPlanCredit":
    "Остаток текущего плана",
  "settings.modelProvider.codingPlan.paymentDialog.payAmount": "К оплате",
  "settings.modelProvider.codingPlan.paymentDialog.deductions": "Списания",
  "settings.modelProvider.codingPlan.paymentDialog.alipayScan":
    "Отсканируйте код в Alipay для оплаты",
  "settings.modelProvider.codingPlan.paymentDialog.polling":
    "Ожидание подтверждения оплаты",
  "settings.modelProvider.codingPlan.paymentDialog.qrAlt": "QR-код для оплаты",
  "settings.modelProvider.codingPlan.paymentDialog.qrLoading":
    "Создание QR-кода",
  "settings.modelProvider.codingPlan.paymentDialog.qrError":
    "Не удалось создать QR-код. Попробуйте ещё раз.",
  "settings.modelProvider.codingPlan.paymentDialog.qrExpired":
    "Срок действия QR-кода истёк",
  "settings.modelProvider.codingPlan.paymentDialog.refreshQr":
    "Обновить QR-код",
  "settings.modelProvider.codingPlan.paymentDialog.tipAutoRenew":
    "Подписка будет автоматически продлеваться за {price}/месяц.",
  "settings.modelProvider.codingPlan.paymentDialog.tipDeduction":
    "Порядок списания: сначала кредиты, затем баланс, затем Alipay.",
  "settings.modelProvider.codingPlan.paymentDialog.tipPeriodic":
    "План продлевается ежемесячно, пока вы не отмените его в соответствии с условиями обслуживания.",
  "settings.modelProvider.codingPlan.paymentDialog.tipCancel":
    "Автопродление можно отключить не позднее чем за 3 дня до даты продления в обзоре плана.",
  "settings.modelProvider.codingPlan.paymentDialog.tipCancelPrefix":
    "Автопродление можно отключить не позднее чем за 3 дня до даты продления в ",
  "settings.modelProvider.codingPlan.paymentDialog.planOverviewLink":
    "обзоре плана",
  "settings.modelProvider.codingPlan.paymentDialog.tipCancelSuffix": ".",
  "settings.modelProvider.codingPlan.paymentDialog.ruleTitle":
    "Правила использования аккаунта",
  "settings.modelProvider.codingPlan.paymentDialog.ruleDescription":
    "Используйте аккаунт с подпиской только в рамках официально разрешённых продуктов. Не передавайте, не переносите и не предоставляйте его третьим лицам, а также не используйте в недобросовестных целях или с нарушением правил. При обнаружении нарушений платформа может ограничить или заблокировать аккаунт без возврата средств.",
  "settings.modelProvider.codingPlan.paymentDialog.agreement":
    "Оплата означает согласие с условиями обслуживания и автопродления подписки. Виртуальные продукты не подлежат возврату после оплаты.",
  "settings.modelProvider.codingPlan.enterprise.purchaseMethod":
    "Способ покупки",
  "settings.modelProvider.codingPlan.enterprise.purchaseMethodTooltipTitle":
    "Подробнее о способе покупки",
  "settings.modelProvider.codingPlan.enterprise.purchaseMethodTooltipDescription":
    "1. Разовая помесячная покупка поддерживает только 1, 3, 6 или 12 месяцев; за 12 месяцев — скидка 10%.\n2. Непрерывная подписка: автопродление списывает средства в порядке: подарочный баланс > баланс > Alipay.",
  "settings.modelProvider.codingPlan.enterprise.tier.lite": "Lite",
  "settings.modelProvider.codingPlan.enterprise.tier.pro": "Pro",
  "settings.modelProvider.codingPlan.enterprise.tier.max": "Max",
  "settings.modelProvider.codingPlan.enterprise.configTitle":
    "Настройка командного плана",
  "settings.modelProvider.codingPlan.enterprise.packageType": "Тип плана",
  "settings.modelProvider.codingPlan.enterprise.packageSeats": "Мест в плане",
  "settings.modelProvider.codingPlan.enterprise.autoRenewAuthorization":
    "Вы разрешаете нам включить для вас автопродление",
  "settings.modelProvider.codingPlan.enterprise.seatMonthlyPrice":
    "{price} / место / месяц",
  "settings.modelProvider.codingPlan.enterprise.refresh": "Обновить",
  "settings.modelProvider.codingPlan.enterprise.singleSeatPrice":
    "цена за одно место",
  "settings.modelProvider.codingPlan.enterprise.singleSeatFrom":
    "Цена за одно место",
  "settings.modelProvider.codingPlan.enterprise.unitPrice":
    "Цена за одно место",
  "settings.modelProvider.codingPlan.enterprise.seats": "Места",
  "settings.modelProvider.codingPlan.enterprise.seatInputUnit": "мест",
  "settings.modelProvider.codingPlan.enterprise.seatsUnit": "мест",
  "settings.modelProvider.codingPlan.enterprise.duration": "Длительность",
  "settings.modelProvider.codingPlan.enterprise.durationUnit.month": "мес.",
  "settings.modelProvider.codingPlan.enterprise.durationUnit.quarter": "кв.",
  "settings.modelProvider.codingPlan.enterprise.durationUnit.year": "г.",
  "settings.modelProvider.codingPlan.enterprise.durationInputUnit.month":
    "месяцы",
  "settings.modelProvider.codingPlan.enterprise.durationInputUnit.year":
    "годы",
  "settings.modelProvider.codingPlan.enterprise.durationDiscountOption":
    "Скидка 10%",
  "settings.modelProvider.codingPlan.enterprise.calculating": "Расчёт",
  "settings.modelProvider.codingPlan.enterprise.productsLoadingDescription":
    "Загрузка цен командных планов из BigModel.",
  "settings.modelProvider.codingPlan.enterprise.productsEmptyDescription":
    "Сейчас нет доступных продуктов командного плана.",
  "settings.modelProvider.codingPlan.enterprise.productsError":
    "Не удалось загрузить командные планы",
  "settings.modelProvider.codingPlan.enterprise.choosePurchaseMethod":
    "Способ покупки",
  "settings.modelProvider.codingPlan.enterprise.purchaseMethodDescription":
    "Вы разрешаете нам включить для вас автопродление. Перед подтверждением оплаты выберите способ покупки, количество мест и срок разовой покупки.",
  "settings.modelProvider.codingPlan.enterprise.continuousDescription":
    "Автопродление на выбранный расчётный период.",
  "settings.modelProvider.codingPlan.enterprise.oneTimeDescription":
    "Разовая покупка на выбранный срок.",
  "settings.modelProvider.codingPlan.enterprise.unit.monthly":
    "/ место / месяц",
  "settings.modelProvider.codingPlan.enterprise.unit.quarterly":
    "/ место / квартал",
  "settings.modelProvider.codingPlan.enterprise.unit.yearly": "/ место / год",
  "settings.modelProvider.codingPlan.enterprise.benefitSeats":
    "Командный доступ по местам",
  "settings.modelProvider.codingPlan.enterprise.benefitBilling":
    "Централизованный биллинг и оплата",
  "settings.modelProvider.codingPlan.enterprise.benefitQuota":
    "Командная квота для разработки",
  "settings.modelProvider.codingPlan.enterprise.balanceTitle":
    "Списание с баланса",
  "settings.modelProvider.codingPlan.enterprise.useGiftBalance":
    "Использовать подарочный баланс",
  "settings.modelProvider.codingPlan.enterprise.useCashBalance":
    "Использовать баланс",
  "settings.modelProvider.codingPlan.enterprise.currentGiftBalance":
    "Текущий подарочный баланс: {amount}",
  "settings.modelProvider.codingPlan.enterprise.currentCashBalance":
    "Текущий баланс аккаунта: {amount}",
  "settings.modelProvider.codingPlan.enterprise.recharge": "Пополнить",
  "settings.modelProvider.codingPlan.enterprise.giftBalance":
    "Подарочный баланс",
  "settings.modelProvider.codingPlan.enterprise.cashBalance":
    "Денежный баланс",
  "settings.modelProvider.codingPlan.enterprise.balanceAvailable":
    "Доступно: {amount}",
  "settings.modelProvider.codingPlan.enterprise.giftBalanceDeduction":
    "Списание с подарочного баланса",
  "settings.modelProvider.codingPlan.enterprise.cashBalanceDeduction":
    "Списание с денежного баланса",
  "settings.modelProvider.codingPlan.enterprise.calculateDescription":
    "Сумма к оплате обновится, когда будет готов расчёт заказа.",
  "settings.modelProvider.codingPlan.enterprise.paymentNotesTitle":
    "Примечания к оплате",
  "settings.modelProvider.codingPlan.enterprise.paymentNotesDescription":
    "Списания с денежного и подарочного баланса рассчитываются BigModel. Для автопродлеваемой подписки на балансе нужно сохранять не менее требуемой суммы для сторонней оплаты.",
  "settings.modelProvider.codingPlan.enterprise.amountDetails": "Детали суммы",
  "settings.modelProvider.codingPlan.enterprise.seatQuantity":
    "Количество мест",
  "settings.modelProvider.codingPlan.enterprise.seatCountValue":
    "Мест: {count}",
  "settings.modelProvider.codingPlan.enterprise.orderOriginalAmount":
    "Первоначальная сумма заказа",
  "settings.modelProvider.codingPlan.enterprise.orderDiscount":
    "Скидка {discount}",
  "settings.modelProvider.codingPlan.enterprise.teamAgreementPrefix":
    "Я принимаю ",
  "settings.modelProvider.codingPlan.enterprise.teamAgreementLink":
    "Соглашение о покупке командного плана",
  "settings.modelProvider.codingPlan.enterprise.cancel": "Отмена",
  "settings.modelProvider.codingPlan.enterprise.confirmPay":
    "Подтвердить и оплатить",
  "settings.modelProvider.codingPlan.enterprise.confirmTitle":
    "Купить корпоративный план {product}",
  "settings.modelProvider.codingPlan.enterprise.paymentDialog.title":
    "Оплата корпоративного плана {product}",
  "settings.modelProvider.codingPlan.enterprise.paymentDialog.tipTotal":
    "Сумма в QR-коде — это рассчитанный итог за места и срок покупки.",
  "settings.modelProvider.codingPlan.enterprise.paymentDialog.tipDeduction":
    "Списания с баланса и подарочного баланса соответствуют подтверждённому расчёту на странице подтверждения оплаты.",
  "settings.modelProvider.codingPlan.enterprise.paymentDialog.tipComplete":
    "После успешной оплаты корпоративные цены и права Coding Plan обновятся автоматически.",
  "settings.modelProvider.codingPlan.enterprise.pendingOrderTitle":
    "У вас есть неоплаченный заказ",
  "settings.modelProvider.codingPlan.enterprise.pendingOrderDescription":
    "Продолжить этот заказ? Можно отменить его и выбрать новый план или продолжить оплату исходного заказа.",
  "settings.modelProvider.codingPlan.enterprise.pendingOrderCancel":
    "Отменить заказ",
  "settings.modelProvider.codingPlan.enterprise.pendingOrderContinue":
    "Продолжить оплату",
  "settings.modelProvider.codingPlan.enterprise.pendingOrderProductMissing":
    "План для этого неоплаченного заказа не найден. Обновите планы и попробуйте снова.",
  "settings.modelProvider.codingPlan.overseasPayment.title":
    "Зарубежная оплата — {product}",
  "settings.modelProvider.codingPlan.overseasPayment.description":
    "К оплате: {price}. Выберите PayPal или продолжите на официальной странице оплаты Z.ai.",
  "settings.modelProvider.codingPlan.overseasPayment.paypal": "PayPal",
  "settings.modelProvider.codingPlan.overseasPayment.paypalDescription":
    "Откройте авторизацию PayPal, затем вернитесь сюда, чтобы продолжить.",
  "settings.modelProvider.codingPlan.overseasPayment.paypalAuthorize":
    "Перейти в PayPal",
  "settings.modelProvider.codingPlan.overseasPayment.paypalContinue":
    "Я авторизовал PayPal, продолжить оплату",
  "settings.modelProvider.codingPlan.overseasPayment.selectPaymentMethod":
    "Способ оплаты",
  "settings.modelProvider.codingPlan.overseasPayment.cardPayment":
    "Кредитная / дебетовая карта",
  "settings.modelProvider.codingPlan.overseasPayment.savedCards":
    "Сохранённые карты",
  "settings.modelProvider.codingPlan.overseasPayment.refreshCards":
    "Обновить карты",
  "settings.modelProvider.codingPlan.overseasPayment.deleteCard":
    "Удалить карту",
  "settings.modelProvider.codingPlan.overseasPayment.cardsLoading":
    "Загрузка сохранённых карт…",
  "settings.modelProvider.codingPlan.overseasPayment.noSavedCards":
    "Сохранённых карт пока нет.",
  "settings.modelProvider.codingPlan.overseasPayment.addCard":
    "Добавить карту",
  "settings.modelProvider.codingPlan.overseasPayment.changeCard":
    "Сменить карту",
  "settings.modelProvider.codingPlan.overseasPayment.cardExpires":
    "Срок действия до {month}/{year}",
  "settings.modelProvider.codingPlan.overseasPayment.cardInformation":
    "Данные карты",
  "settings.modelProvider.codingPlan.overseasPayment.nameOnCard":
    "Имя на карте",
  "settings.modelProvider.codingPlan.overseasPayment.billingAddress":
    "Платёжный адрес",
  "settings.modelProvider.codingPlan.overseasPayment.country": "Страна",
  "settings.modelProvider.codingPlan.overseasPayment.countryRequired":
    "Выберите страну или регион платёжного адреса.",
  "settings.modelProvider.codingPlan.overseasPayment.addressLine1":
    "Адрес, строка 1",
  "settings.modelProvider.codingPlan.overseasPayment.city": "Город",
  "settings.modelProvider.codingPlan.overseasPayment.postalCode":
    "Почтовый индекс",
  "settings.modelProvider.codingPlan.overseasPayment.payWithCard":
    "Оплатить картой",
  "settings.modelProvider.codingPlan.overseasPayment.saveCard":
    "Сохранить карту",
  "settings.modelProvider.codingPlan.overseasPayment.confirm": "Подтвердить",
  "settings.modelProvider.codingPlan.overseasPayment.amount.originalAmount":
    "Первоначальная цена",
  "settings.modelProvider.codingPlan.overseasPayment.amount.discountActivity":
    "Скидка",
  "settings.modelProvider.codingPlan.overseasPayment.amount.currentPlanCredit":
    "Кредит текущего плана",
  "settings.modelProvider.codingPlan.overseasPayment.amount.payAmount":
    "К оплате",
  "settings.modelProvider.codingPlan.overseasPayment.amount.deductions":
    "Вычеты",
  "settings.modelProvider.codingPlan.overseasPayment.addCardBeforeConfirm":
    "Добавьте карту перед подтверждением.",
  "settings.modelProvider.codingPlan.overseasPayment.stripeNotReady":
    "Stripe ещё загружается. Попробуйте позже.",
  "settings.modelProvider.codingPlan.overseasPayment.cardElementMissing":
    "Поле ввода карты не готово. Обновите и попробуйте снова.",
  "settings.modelProvider.codingPlan.overseasPayment.stripe3dsFailed":
    "Не удалось пройти проверку 3DS в Stripe.",
  "settings.modelProvider.codingPlan.overseasPayment.stripePaymentMethodFailed":
    "Не удалось создать способ оплаты в Stripe.",
  "settings.modelProvider.codingPlan.overseasPayment.stripePublishableKeyMissing":
    "Ввод карты через Stripe не настроен в этой сборке.",
  "settings.modelProvider.codingPlan.overseasPayment.close": "Не сейчас",
  "settings.modelProvider.codingPlan.overseasPayment.renewalPolicyTitle":
    "Политика продления",
  "settings.modelProvider.codingPlan.overseasPayment.accountPolicyTitle":
    "Политика использования аккаунта",
  "settings.modelProvider.codingPlan.overseasPayment.period.month": "месяц",
  "settings.modelProvider.codingPlan.overseasPayment.period.quarter":
    "квартал",
  "settings.modelProvider.codingPlan.overseasPayment.period.year": "год",
  "settings.modelProvider.codingPlan.overseasPayment.recurringPeriod.month":
    "Ежемесячно",
  "settings.modelProvider.codingPlan.overseasPayment.recurringPeriod.quarter":
    "Ежеквартально",
  "settings.modelProvider.codingPlan.overseasPayment.recurringPeriod.year":
    "Ежегодно",
  "settings.modelProvider.codingPlan.overseasPayment.renewalCharge":
    "Списание {price} будет выполняться автоматически раз в {period}.",
  "settings.modelProvider.codingPlan.overseasPayment.renewalChargeFallback":
    "Будущие продления будут соответствовать выбранному циклу подписки. Точная сумма продления указывается в счёте на продление.",
  "settings.modelProvider.codingPlan.overseasPayment.renewalDeduction":
    "Оплата списывается сначала из бонусных кредитов, затем с баланса аккаунта и в конце — с банковской карты.",
  "settings.modelProvider.codingPlan.overseasPayment.renewalMinimum":
    "Обратите внимание: при оплате банковской картой применяется небольшой минимальный порог списания. Если оставшаяся сумма меньше, списание будет округлено до этого минимума.",
  "settings.modelProvider.codingPlan.overseasPayment.renewalRecurring":
    "Списания будут продолжаться на регулярной основе ({period}), пока вы не отмените подписку в соответствии с нашими Условиями обслуживания.",
  "settings.modelProvider.codingPlan.overseasPayment.renewalCancelPrefix":
    "Автопродление можно отключить не позднее чем за 1 день до даты продления в ",
  "settings.modelProvider.codingPlan.overseasPayment.subscriptionSettingLink":
    "настройках подписки",
  "settings.modelProvider.codingPlan.overseasPayment.renewalCancelSuffix": ".",
  "settings.modelProvider.codingPlan.overseasPayment.accountPolicyPrefix":
    "GLM Coding Plan строго ограничен личным использованием подписчиком в рамках ",
  "settings.modelProvider.codingPlan.overseasPayment.supportedProductsLink":
    "официально поддерживаемые продукты",
  "settings.modelProvider.codingPlan.overseasPayment.accountPolicyAfterSupportedProducts":
    ". Совместное использование, перепродажа, передача или доступ третьих лиц строго запрещены. Ненадлежащее, несанкционированное или нарушающее политику использование может привести к немедленному ограничению или блокировке аккаунта без возврата средств. Пожалуйста, соблюдайте наши ",
  "settings.modelProvider.codingPlan.overseasPayment.termsLink": "Условия",
  "settings.modelProvider.codingPlan.overseasPayment.accountPolicyBetween":
    " и ",
  "settings.modelProvider.codingPlan.overseasPayment.policyLink": "Политика",
  "settings.modelProvider.codingPlan.overseasPayment.accountPolicySuffix": ".",
  "settings.modelProvider.codingPlan.overseasPayment.authorizationPrefix":
    "Вы соглашаетесь, что Z.ai спишет с вашей карты указанную сумму сейчас и на регулярной основе согласно вашему плану подписки, пока вы не отмените её в соответствии с нашими ",
  "settings.modelProvider.codingPlan.overseasPayment.authorizationTermsLink":
    "условиями",
  "settings.modelProvider.codingPlan.overseasPayment.authorizationSuffix": ".",
  "settings.modelProvider.codingPlan.paymentDialog.agreementPrefix":
    "Оплата означает, что вы принимаете ",
  "settings.modelProvider.codingPlan.paymentDialog.serviceAgreementLink":
    "сервисное соглашение",
  "settings.modelProvider.codingPlan.paymentDialog.agreementBetween": " и ",
  "settings.modelProvider.codingPlan.paymentDialog.subscriptionAgreementLink":
    "соглашение об автопродлении подписки",
  "settings.modelProvider.codingPlan.paymentDialog.agreementSuffix":
    ". Виртуальные продукты не подлежат возврату после оплаты.",
  "settings.modelProvider.codingPlan.product.soldOut": "Распродано",
  "settings.modelProvider.codingPlan.product.forbidden":
    "Недоступно для этого аккаунта",
  "settings.modelProvider.codingPlan.product.unavailable": "Недоступно",
  "settings.modelProvider.codingPlan.product.subscribeNow": "Подписаться",
  "settings.modelProvider.codingPlan.product.unavailableTooltipPrefix":
    "Этот план недоступен для покупки. ",
  "settings.modelProvider.codingPlan.product.unavailableTooltipLink":
    "подробнее",
  "settings.modelProvider.codingPlan.product.included": "Включено",
  "settings.modelProvider.codingPlan.product.firstPromo":
    "Скидка на первую подписку",
  "settings.modelProvider.codingPlan.product.delay": "Вступает в силу {time}",
  "settings.modelProvider.codingPlan.zai.plan.lite.name": "Lite",
  "settings.modelProvider.codingPlan.zai.plan.lite.summary":
    "Лимиты использования в 3 раза выше, чем у Claude Pro",
  "settings.modelProvider.codingPlan.zai.plan.pro.name": "Pro",
  "settings.modelProvider.codingPlan.zai.plan.pro.summary":
    "Всё из Lite, плюс лимиты в 5 раз выше, чем в Lite",
  "settings.modelProvider.codingPlan.zai.plan.max.name": "Max",
  "settings.modelProvider.codingPlan.zai.plan.max.summary":
    "Всё из Pro, плюс лимиты в 20 раз выше, чем в Lite",
  "settings.modelProvider.codingPlan.bigmodel.plan.lite.name": "Lite",
  "settings.modelProvider.codingPlan.bigmodel.plan.lite.summary":
    "Квота в 3 раза выше, чем у Claude Pro",
  "settings.modelProvider.codingPlan.bigmodel.plan.pro.name": "Pro",
  "settings.modelProvider.codingPlan.bigmodel.plan.pro.summary":
    "Квота в 5 раз выше, чем у Lite, плюс все преимущества Lite",
  "settings.modelProvider.codingPlan.bigmodel.plan.max.name": "Max",
  "settings.modelProvider.codingPlan.bigmodel.plan.max.summary":
    "Квота в 20 раз выше, чем у Lite, плюс все преимущества Pro",
  "settings.modelProvider.codingPlan.bigmodel.purchase.plan.lite.detail0":
    "Базовая квота использования",
  "settings.modelProvider.codingPlan.bigmodel.purchase.plan.lite.detail1":
    "Несложные итерации для небольших репозиториев",
  "settings.modelProvider.codingPlan.bigmodel.purchase.plan.lite.detail2":
    "Новейшие модели добавляются постепенно",
  "settings.modelProvider.codingPlan.bigmodel.purchase.plan.lite.detail3":
    "20+ инструментов разработки",
  "settings.modelProvider.codingPlan.bigmodel.purchase.plan.pro.detail0":
    "Квота в 5 раз выше, чем у Lite",
  "settings.modelProvider.codingPlan.bigmodel.purchase.plan.pro.detail1":
    "Ежедневная разработка для средних репозиториев",
  "settings.modelProvider.codingPlan.bigmodel.purchase.plan.pro.detail2":
    "Приоритетный доступ к новейшим моделям",
  "settings.modelProvider.codingPlan.bigmodel.purchase.plan.pro.detail3":
    "Отобранные MCP-инструменты",
  "settings.modelProvider.codingPlan.bigmodel.purchase.plan.max.detail0":
    "Квота в 20 раз выше, чем у Lite",
  "settings.modelProvider.codingPlan.bigmodel.purchase.plan.max.detail1":
    "Глубокая работа со средними и крупными репозиториями",
  "settings.modelProvider.codingPlan.bigmodel.purchase.plan.max.detail2":
    "Ранний доступ к новейшим моделям",
  "settings.modelProvider.codingPlan.bigmodel.purchase.plan.max.detail3":
    "Приоритет ресурсов в часы пик",
  "settings.modelProvider.codingPlan.zai.purchase.plan.lite.detail0":
    "Включён базовый объём использования",
  "settings.modelProvider.codingPlan.zai.purchase.plan.lite.detail1":
    "Итерации в небольших репозиториях",
  "settings.modelProvider.codingPlan.zai.purchase.plan.lite.detail2":
    "Доступ к новейшим моделям",
  "settings.modelProvider.codingPlan.zai.purchase.plan.lite.detail3":
    "20+ инструментов для кодинга",
  "settings.modelProvider.codingPlan.zai.purchase.plan.pro.detail0":
    "Использование в 5 раз больше, чем в Lite",
  "settings.modelProvider.codingPlan.zai.purchase.plan.pro.detail1":
    "Разработка в средних репозиториях",
  "settings.modelProvider.codingPlan.zai.purchase.plan.pro.detail2":
    "Приоритетный доступ к моделям",
  "settings.modelProvider.codingPlan.zai.purchase.plan.pro.detail3":
    "Отобранные MCP-инструменты",
  "settings.modelProvider.codingPlan.zai.purchase.plan.max.detail0":
    "Использование в 20 раз больше, чем в Lite",
  "settings.modelProvider.codingPlan.zai.purchase.plan.max.detail1":
    "Работа со средними и крупными репозиториями",
  "settings.modelProvider.codingPlan.zai.purchase.plan.max.detail2":
    "Ранний доступ к новым моделям",
  "settings.modelProvider.codingPlan.zai.purchase.plan.max.detail3":
    "Приоритет в часы пик",
  "settings.modelProvider.enabledStatus": "Включён",
  "settings.modelProvider.enableModel": "Включить",
  "settings.modelProvider.disabledStatus": "Отключён",
  "settings.modelProvider.unavailableStatus": "Не готов",
  "settings.modelProvider.readyStatus": "Готов",
  "settings.modelProvider.enableProvider": "Включить провайдера",
  "settings.modelProvider.disableProvider": "Отключить провайдера",
  "settings.modelProvider.renameProvider": "Переименовать",
  "settings.modelProvider.enableCurrentPlan": "Включить текущий план",
  "settings.modelProvider.enableAction": "Включить",
  "settings.modelProvider.disableAction": "Отключить",
  "settings.modelProvider.restoreDefaultAction": "Восстановить по умолчанию",
  "settings.modelProvider.followRecommendedConfig": "Умная настройка",
  "settings.modelProvider.restoreConfig": "Восстановить",
  "settings.modelProvider.resetForm": "Сбросить форму",
  "settings.modelProvider.fieldHelp": "О поле «{field}»",
  "settings.modelProvider.help.contextWindow":
    "Объём контекста (в токенах), который модель может обработать за один раз. ZCode использует это значение для управления контекстом.\nНе превышайте фактический лимит модели.",
  "settings.modelProvider.help.maxOutputTokens":
    "Максимальное количество токенов, которое модель может сгенерировать в одном запросе.\nНе превышайте фактический лимит модели.",
  "settings.modelProvider.help.inputModalities":
    "Задайте типы контента, которые может принимать модель:\n\n- **Текст**: принимает текстовый контент. Обязательно.\n- **Изображения**: принимает изображения.\n- **Видео**: принимает видео.\n- **PDF**: принимает PDF-документы напрямую.",
  "settings.modelProvider.help.outputModalities":
    "Тип контента в ответах модели. Сейчас поддерживается только текст.",
  "settings.modelProvider.help.capabilities":
    "- **Структурированный вывод**: поддерживает ограничения JSON Schema на поля, типы и структуру вывода.\n- **Встроенный веб-поиск**: поддерживает встроенный веб-поиск в API модели.\n- **Системные сообщения посреди диалога**: поддерживает вставку системных инструкций во время диалога.\n\nНе включайте возможности, которые модель не поддерживает.",
  "settings.modelProvider.help.reasoningLevelsOrdered":
    "Задайте уровни рассуждений, доступные в чате. **Они должны быть упорядочены от наименьших затрат на рассуждение к наибольшим**.\nНе настраивайте уровни рассуждений, которые модель не поддерживает.",
  "settings.modelProvider.help.reasoningLevelMapping":
    "Используйте CEL-выражение, чтобы сопоставить текущий уровень рассуждений `reasoningLevel` с полями API-запроса модели. JSON-объект, возвращённый выражением, добавляется в тело исходящего запроса.",
  "settings.modelProvider.help.advanced":
    "**MFJS tool schema**: включает совместимость с Moonshot Flavored JSON Schema — форматом, который обычно используется в API моделей Moonshot Kimi. Включайте, только если этого требует API модели.",
  "settings.modelProvider.help.followRecommendedConfig":
    "Подбирает рекомендуемую конфигурацию по ID модели, Base URL и формату API. ZCode постоянно обновляет рекомендации и автоматически синхронизирует их.\nПри ручном изменении настройка переходит в ручное управление и перестаёт следовать рекомендациям; остальные настройки остаются под управлением умной настройки.",
  "settings.modelProvider.modelDefaultsLoaded":
    "Для этой модели применена умная настройка",
  "settings.modelProvider.modelConfigIncomplete":
    "Конфигурация модели неполна",
  "settings.modelProvider.models": "Список моделей",
  "settings.modelProvider.modelsEmpty":
    "Модели не настроены. Добавьте модель, чтобы использовать её в чате.",
  "settings.modelProvider.addModel": "Добавить модель",
  "settings.modelProvider.modelId": "ID модели",
  "settings.modelProvider.modelDisplayName": "Отображаемое имя",
  "settings.modelProvider.modelApiFormat.anthropic": "Anthropic messages",
  "settings.modelProvider.modelApiFormat.openaiCompatible":
    "OpenAI Compatible",
  "settings.modelProvider.modelApiFormat.openaiResponses": "OpenAI Responses",
  "settings.modelProvider.contextWindow": "Окно контекста",
  "settings.modelProvider.capabilities": "Возможности модели",
  "settings.modelProvider.supportsToolCall": "Вызовы инструментов",
  "settings.modelProvider.supportsJsonSchemaOutput": "Структурированный вывод",
  "settings.modelProvider.supportsNativeWebSearch": "Встроенный веб-поиск",
  "settings.modelProvider.supportsMidConversationSystem":
    "Системные сообщения посреди диалога",
  "settings.modelProvider.requiresMfjsToolSchema": "MFJS tool schema",
  "settings.modelProvider.otherSettings": "Другие настройки",
  "settings.modelProvider.reasoningLevelOptionSpecJson":
    "JSON-спецификация уровней рассуждений",
  "settings.modelProvider.reasoningLevelsOrdered":
    "Уровни рассуждений (от низкого к высокому)",
  "settings.modelProvider.reasoningLevelAdd": "Добавить уровень рассуждений",
  "settings.modelProvider.reasoningLevelMapping":
    "Сопоставление параметров рассуждений",
  "settings.modelProvider.reasoningLevelDelete": "Удалить уровень рассуждений",
  "settings.modelProvider.modelMetadata.invalid.reasoningLevelValues":
    "Уровни рассуждений не могут быть пустыми или повторяться",
  "settings.modelProvider.modelMetadata.invalid.reasoningLevelMap":
    "Некорректное сопоставление параметров рассуждений",
  "settings.modelProvider.contextWindowBadgeLabel": "Окно контекста: {value}",
  "model.capability.vision": "Зрение",
  "settings.modelProvider.advanced": "Расширенные настройки",
  "settings.modelProvider.advancedConfig": "Расширенные настройки",
  "settings.modelProvider.reasoning": "Настройки рассуждений",
  "settings.hooks.advanced": "Расширенные",
  "settings.modelProvider.maxOutputTokens": "Макс. токенов вывода",
  "settings.modelProvider.inputModalities": "Типы входных данных",
  "settings.modelProvider.outputModalities": "Типы выходных данных",
  "settings.modelProvider.modality.text": "Текст",
  "settings.modelProvider.modality.image": "Изображение",
  "settings.modelProvider.modality.video": "Видео",
  "settings.modelProvider.modality.audio": "Аудио",
  "settings.modelProvider.modality.pdf": "PDF",
  "settings.modelProvider.modelMetadata.invalid.id": "Укажите ID модели",
  "settings.modelProvider.modelMetadata.invalid.kinds":
    "Выберите хотя бы один формат API",
  "settings.modelProvider.modelMetadata.invalid.contextWindow":
    "Окно контекста должно быть положительным целым числом",
  "settings.modelProvider.modelMetadata.invalid.maxOutputTokens":
    "Максимальное количество токенов вывода должно быть положительным целым числом",
  "settings.modelProvider.modelMetadata.invalid.inputModalities":
    "Требуется тип входных данных «Текст»",
  "settings.modelProvider.newProviderName": "Новый провайдер",
  "settings.modelProvider.modelsPlaceholder":
    "По одному имени модели в строке",
  "settings.modelProvider.modelsCount": "Моделей: {count}",
  "settings.modelProvider.presetTitle": "Провайдеры",
  "settings.usage.sectionTitle": "Статистика использования",
  "settings.usage.sectionDescription":
    "На основе локальной истории сессий приложения.",
  "settings.usage.tab.appUsage": "Использование приложения",
  "settings.usage.tab.codingPlan": "Individual Plan",
  "settings.usage.sectionDescriptionRemote":
    "Синхронизировано из API мониторинга выбранного провайдера: реальные данные о токенах и инструментах.",
  "settings.usage.remoteTokenHint":
    "Из API использования моделей выбранного провайдера",
  "settings.usage.calls": "Вызовы",
  "settings.usage.toolCallsTotal": "Вызовы инструментов",
  "settings.usage.toolCallsEmpty": "Нет вызовов инструментов за этот период",
  "settings.usage.toolCallsUnit": "вызовов",
  "settings.usage.toolChartTitle": "Разбивка использования инструментов",
  "settings.usage.toolChartDescription":
    "Из API использования инструментов выбранного провайдера: количество вызовов Network Search / Web Reader / Zread.",
  "settings.usage.sourceProvider": "Источник: {provider}",
  "settings.usage.billingBanner.title": "Coding Plan {provider}",
  "settings.usage.billingBanner.description":
    "Подключите аккаунт {provider}, чтобы проверить статус Coding Plan, и продолжайте работать в ZCode после покупки или настройки.",
  "settings.usage.billingBanner.compactDescription":
    "Подключите аккаунт {provider}, чтобы синхронизировать данные об использовании.",
  "settings.usage.billingBanner.buy": "Купить Coding Plan",
  "settings.usage.billingBanner.apiKeys": "API-ключи",
  "settings.usage.billingBanner.usageDetails": "Детали использования",
  "settings.usage.entitlementTitle": "Статус Coding Plan",
  "settings.usage.entitlementDescription":
    "Синхронизирует точный уровень плана, 5-часовой пул промптов, недельную квоту и месячную квоту инструментов из подключённого аккаунта Coding Plan.",
  "settings.usage.entitlementError":
    "Не удалось загрузить данные Coding Plan. Попробуйте позже или проверьте конфигурацию провайдера.",
  "usage.error.entitlement.credential":
    "Подписка Coding Plan не найдена. Переподключите аккаунт Coding Plan или убедитесь, что у аккаунта есть активный план.",
  "usage.error.entitlement.generic":
    "Не удалось загрузить подписку Coding Plan. Повторите позже или проверьте конфигурацию провайдера.",
  "settings.usage.entitlementRemaining": "Использование инструментов",
  "settings.usage.entitlementRealtime":
    "Синхронизировано из API квот провайдера",
  "settings.usage.entitlementHidden": "Провайдер скрыл этот баланс",
  "settings.usage.entitlementPlan": "Активный план",
  "settings.usage.entitlementPlanLevel": "Уровень плана",
  "settings.usage.entitlementNoPlan": "Нет активного Coding Plan",
  "settings.usage.entitlementExpires": "Истекает {date}",
  "settings.usage.entitlementResetTime": "Следующий сброс",
  "settings.usage.entitlementTokenUsage":
    "5-часовой пул промптов: использовано {percent}",
  "settings.usage.quotaTitle": "Остаток квоты",
  "codingPlan.quotaReset.openDialog": "Получить сбросы квоты: {count}",
  "codingPlan.quotaReset.countdown.daysHours": "{days} д {hours} ч",
  "codingPlan.quotaReset.countdown.daysOnly": "{days} д",
  "codingPlan.quotaReset.countdown.hoursMinutes": "{hours} ч {minutes} мин",
  "codingPlan.quotaReset.countdown.hoursOnly": "{hours} ч",
  "codingPlan.quotaReset.countdown.minutesSeconds":
    "{minutes} мин {seconds} с",
  "codingPlan.quotaReset.dialog.title": "Сбрасываемая квота",
  "codingPlan.quotaReset.dialog.remaining": "Остаток квоты",
  "codingPlan.quotaReset.dialog.resettable": "Доступные сбросы",
  "codingPlan.quotaReset.dialog.fiveHour": "Сброс 5-часовой квоты",
  "codingPlan.quotaReset.dialog.week": "Недельный сброс квоты",
  "codingPlan.quotaReset.dialog.expiresIn": "Истекает через {time}",
  "codingPlan.quotaReset.dialog.expiresInSoonest":
    "Ближайший истекает через {time}",
  "codingPlan.quotaReset.dialog.itemCount": "×{count}",
  "codingPlan.quotaReset.opportunity": "Доступно сбросов: {count}",
  "codingPlan.quotaReset.expiresIn": "Истекает через {time}",
  "codingPlan.quotaReset.contextReminder.available":
    "Доступно сбросов: {count}",
  "codingPlan.quotaReset.contextReminder.expiresIn": "Сброс истекает через",
  "codingPlan.quotaReset.contextReminder.dismiss": "Скрыть напоминание",
  "codingPlan.quotaReset.reset": "Сбросить",
  "codingPlan.quotaReset.resetAria": "Сбросить 5-часовую квоту",
  "codingPlan.quotaReset.resetAriaWeek": "Сбросить недельную квоту",
  "codingPlan.quotaReset.success": "Сброс выполнен",
  "codingPlan.quotaReset.failed": "Сброс не удался. Попробуйте ещё раз.",
  "codingPlan.quotaReset.processing": "Сброс 5-часовой квоты…",
  "codingPlan.quotaReset.processingWeek": "Сброс недельной квоты…",
  "codingPlan.quotaReset.done": "Сброс 5-часовой квоты",
  "codingPlan.quotaReset.doneWeek": "Недельный сброс квоты",
  "codingPlan.quotaReset.completed": "Сброшено",
  "codingPlan.quotaReset.completedAt": "Сброшено в {time}",
  "settings.usage.trendsTitle": "Динамика использования",
  "settings.usage.entitlementFiveHourUsage": "Осталось на 5 часов",
  "settings.usage.entitlementWeeklyUsage": "Осталось на неделю",
  "settings.usage.entitlementMonthlyMcpUsage": "Вызовы инструментов",
  "settings.usage.entitlementServerMcpUsage": "ZCode MCP",
  "settings.usage.entitlementResetAt": "Сброс в {time}",
  "settings.usage.entitlementUsageDetails":
    "Детализация использования инструментов",
  "settings.usage.entitlementPromptCap": "5-часовой пул промптов",
  "settings.usage.entitlementPromptCapValue": "{value} промптов",
  "settings.usage.entitlementToolCap": "Месячная квота MCP/инструментов",
  "settings.usage.entitlementToolCapValue": "{value}/мес",
  "settings.usage.entitlementConcurrency": "Приоритет параллельных запросов",
  "settings.usage.entitlementConcurrencyValue": "{value}",
  "settings.usage.entitlementPolicyHint":
    "Значения квот соответствуют текущему руководству по использованию и могут меняться в зависимости от политики платформы.",
  "settings.usage.entitlementLoginRequired": "Требуется вход",
  "settings.usage.entitlementNotConfigured":
    "Нет подключённого аккаунта Coding Plan (Z.ai или BigModel) для проверки квоты. Сначала подключите аккаунт Coding Plan.",
  "settings.usage.entitlementStatusActive": "Активен",
  "settings.usage.entitlementStatusError": "Ошибка",
  "settings.usage.entitlementStatusLoading": "Загрузка",
  "settings.usage.entitlementStatusLoginRequired": "Требуется вход",
  "settings.usage.entitlementStatusNoPlan": "Нет подписки",
  "settings.usage.entitlementStatusNotConfigured": "Не настроено",
  "sidebar.usage.summaryTitle": "Последние 30 дней",
  "sidebar.usage.plan.title": "Остаток использования",
  "sidebar.usage.plan.upgrade": "Улучшить",
  "sidebar.usage.plan.renew": "Продлить",
  "sidebar.usage.plan.codingPlanTitle": "Coding Plan",
  "sidebar.usage.plan.audienceIndividual": "Индивидуальный",
  "sidebar.usage.plan.audienceTeam": "Командный",
  "sidebar.usage.plan.open": "Ещё",
  "sidebar.usage.plan.loading": "Синхронизация…",
  "sidebar.usage.plan.unavailable": "Данные плана пока недоступны.",
  "sidebar.usage.plan.loginRequired":
    "Войдите, чтобы просмотреть использование плана.",
  "sidebar.usage.plan.notConfigured":
    "Подключённый аккаунт Coding Plan не найден.",
  "sidebar.usage.plan.noPlanShort": "Нет плана",
  "sidebar.usage.plan.remainingShort": "Осталось: {value}",
  "sidebar.usage.plan.planTypeValue": "План: {plan}",
  "sidebar.usage.plan.tokensLimit": "Квота токенов",
  "sidebar.usage.plan.timeLimit": "Квота по времени",
  "sidebar.usage.plan.otherLimit": "Квота",
  "sidebar.usage.plan.percentUsed": "Использовано {percent}%",
  "sidebar.usage.plan.remainingValue": "Осталось",
  "sidebar.usage.plan.total": "Всего",
  "sidebar.usage.plan.resetAt": "Сброс в {time}",
  "sidebar.usage.plan.modelUsage": "Использование моделей",
  "sidebar.usage.plan.openStats": "Статистика использования",
  "sidebar.usage.plan.refresh": "Обновить квоту",
  "sidebar.usage.plan.refreshing": "Обновление квоты",
  "sidebar.usage.plan.updateFailed": "Возможна проблема с сетью",
  "sidebar.usage.plan.updated": "Квота обновлена",
  "sidebar.usage.plan.noLimits": "Детали квоты недоступны.",
  "sidebar.usage.plan.remaining": "Остаток квоты инструментов",
  "sidebar.usage.plan.realtime": "Синхронизировано из API квот",
  "sidebar.usage.plan.hidden": "Провайдер скрыл этот баланс",
  "sidebar.usage.plan.currentPlan": "Уровень плана",
  "sidebar.usage.plan.noPlan": "Нет активного Coding Plan",
  "sidebar.usage.plan.expires": "Сброс",
  "sidebar.usage.plan.fiveHour": "5 часов",
  "sidebar.usage.plan.weekly": "На неделю",
  "sidebar.usage.plan.toolCalls": "Вызовы инструментов",
  "sidebar.usage.plan.mcp": "ZCode MCP",
  "sidebar.usage.plan.zcodeMcp": "ZCode MCP",
  "sidebar.usage.plan.zcodeMcpDescription":
    "Суммарная дневная квота для MCP встроенных плагинов ZCode",
  "chat.planUsage.title": "Использование плана",
  "chat.planUsage.titleWithPlan": "Использование плана {plan}",
  "chat.planUsage.providerFallback": "Текущий провайдер",
  "chat.planUsage.open": "Подробнее",
  "chat.planUsage.noPlan":
    "Для этого аккаунта не найден активный Coding Plan. Убедитесь, что подключённый аккаунт оформил подписку.",
  "chat.planUsage.contextWindow": "Текущее окно контекста",
  "chat.planUsage.contextDetail": "{used} / {total}",
  "chat.planUsage.promptPool": "Пул промптов на 5 часов",
  "chat.planUsage.promptReset": "Сброс {time}",
  "chat.planUsage.weeklyQuota": "Недельная квота",
  "chat.planUsage.weeklyReset": "Сброс {time}",
  "chat.planUsage.toolQuota": "Использование MCP / инструментов за месяц",
  "chat.planUsage.toolRemaining":
    "Осталось {remaining} / {total} · сброс {time}",
  "chat.planUsage.toolUsed": "Использовано {used} / {total} · сброс {time}",
  "chat.planUsage.noQuotaLimits":
    "Квота Coding Plan не найдена. Убедитесь, что у подключённого аккаунта есть активный Coding Plan.",
  "usage.error.chatPlan.credential":
    "Не удалось прочитать квоту плана. Переподключите аккаунт Coding Plan или убедитесь, что у аккаунта есть активный план.",
  "usage.error.chatPlan.generic":
    "Не удалось прочитать квоту плана. Повторите позже или проверьте конфигурацию провайдера.",
  "settings.usage.range.all": "За всё время",
  "settings.usage.range.7d": "Последние 7 дней",
  "settings.usage.range.30d": "Последние 30 дней",
  "settings.usage.appUsageRangeTitle": "Период",
  "settings.usage.codingPlanRange.today": "Сегодня",
  "settings.usage.codingPlanRange.7d": "7 дней",
  "settings.usage.codingPlanRange.30d": "30 дней",
  "settings.usage.codingPlanRange.custom": "Произвольный",
  "settings.usage.codingPlanMetric.credits": "Кредиты",
  "settings.usage.codingPlanMetric.usage": "Использование",
  "settings.usage.codingPlanSubject.model": "Модели",
  "settings.usage.codingPlanSubject.tool": "Инструменты",
  "settings.usage.codingPlanLegendTotal": "Всего",
  "settings.usage.healthTitle": "Состояние системы",
  "settings.usage.healthRange.7d": "Последние 7 дней",
  "settings.usage.healthProMaxDecode":
    "Средняя пиковая скорость декодирования (Max&Pro)",
  "settings.usage.healthLiteDecode":
    "Средняя пиковая скорость декодирования (Lite)",
  "settings.usage.refresh": "Обновить",
  "settings.usage.loadingTitle": "Вычисляем использование",
  "settings.usage.appUsageLoadingDescription":
    "Читаем локальную историю сессий приложения, это может занять немного времени.",
  "settings.usage.codingPlanLoadingDescription":
    "Читаем API мониторинга выбранного провайдера, это может занять немного времени.",
  "settings.usage.lastRefreshTime": "Обновлено: {time}",
  "settings.usage.error":
    "Не удалось загрузить статистику использования. Попробуйте позже или проверьте сеть и конфигурацию провайдера.",
  "settings.usage.checkApiKey": "Проверить аккаунт",
  "usage.error.stats.credential":
    "Не удалось загрузить статистику использования. Переподключите аккаунт Coding Plan или убедитесь, что у аккаунта есть активный план.",
  "usage.error.stats.generic":
    "Не удалось загрузить статистику использования. Повторите позже или проверьте сеть и конфигурацию провайдера.",
  "settings.usage.emptyTitle": "Нет данных об использовании",
  "settings.usage.emptyDescription":
    "За выбранный период пока нет данных об использовании.",
  "settings.usage.estimationHint": "Оценка на основе локальной истории сессий",
  "settings.usage.totalTokens": "Использование токенов",
  "settings.usage.tokenUnit": "токенов",
  "settings.usage.creditUnit": "кредитов",
  "settings.usage.sessions": "Сессии",
  "settings.usage.messages": "Сообщения",
  "settings.usage.activeDays": "Активные дни",
  "settings.usage.favoriteModel": "Избранная модель",
  "settings.usage.favoriteModelShare": "доля {share}",
  "settings.usage.longestSession": "Самая длинная сессия",
  "settings.usage.totalUsageDuration": "Общая длительность использования",
  "settings.usage.activityTitle": "Активность",
  "settings.usage.lifetimeTotalTokens": "Всего токенов",
  "settings.usage.lifetimePeakTokens": "Пиковые токены",
  "settings.usage.currentStreak": "Текущая серия",
  "settings.usage.longestStreak": "Самая длинная серия",
  "settings.usage.cacheHitRate": "Доля попаданий в кэш",
  "settings.usage.creditsTotal": "Всего кредитов",
  "settings.usage.averageDailyCredits": "Кредитов в среднем за день",
  "settings.usage.peakHour": "Пиковый час",
  "settings.usage.peakHourTokens": "{tokens} токенов",
  "settings.usage.unknownModel": "Неизвестная модель",
  "settings.usage.heatmapTitle": "Активность токенов",
  "settings.usage.heatmapCell": "{date}\n{tokens} токенов · {turns} сообщений",
  "settings.usage.heatmapToolCell":
    "{date}\n{tokens} токенов · {tools} инструментов",
  "settings.usage.heatmapWeeklyCell":
    "Неделя {date}\n{tokens} токенов · {turns} сообщений",
  "settings.usage.heatmapWeeklyToolCell":
    "Неделя {date}\n{tokens} токенов · {tools} инструментов",
  "settings.usage.heatmapCumulativeCell":
    "Накоплено к неделе {date}\n{tokens} токенов · {turns} сообщений",
  "settings.usage.heatmapCumulativeToolCell":
    "Накоплено к неделе {date}\n{tokens} токенов · {tools} инструментов",
  "settings.usage.heatmapDescription":
    "Самый загруженный день — {day}: около {tokens} токенов.",
  "settings.usage.heatmap.intensity": "Пиковая интенсивность",
  "settings.usage.heatmap.less": "Меньше",
  "settings.usage.heatmap.more": "Больше",
  "settings.usage.heatmap.range.daily": "По дням",
  "settings.usage.heatmap.range.weekly": "По неделям",
  "settings.usage.heatmap.range.cumulative": "Накопительно",
  "settings.usage.dailyChartTitle": "Дневной график токенов",
  "settings.usage.dailyChartDescription":
    "Динамика использования токенов по дням за {days} дней.",
  "settings.usage.dailyChart.peak": "Пиковый день",
  "settings.usage.dailyChart.max": "Макс.",
  "settings.usage.modelChartTitle": "Использование моделей",
  "settings.usage.modelUsageTitle": "Использование моделей",
  "settings.usage.toolUsageTitle": "Использование инструментов",
  "settings.usage.tokenTotal": "Общее использование токенов",
  "settings.usage.timesUnit": " раз",
  "settings.usage.codingPlanNotConfiguredTitle": "Coding Plan не подключён",
  "settings.usage.codingPlanNotConfiguredDescription":
    "Подключите провайдера Coding Plan (Z.ai или BigModel) в настройках моделей, чтобы просматривать квоту плана, использование моделей и инструментов.",
  "settings.usage.codingPlanCurrentConnectionTitle":
    "Текущее подключение не использует Coding Plan",
  "settings.usage.codingPlanCurrentConnectionDescription":
    "Переключите подключение к модели Проекта на Individual Plan или Team Plan, чтобы видеть её квоту и использование здесь.",
  "settings.usage.modelChartDescription":
    "Сейчас наибольшая доля у модели {model}: около {share}.",
  "settings.usage.modelChart.other": "Другие модели",
  "settings.usage.modelChart.input": "Вход",
  "settings.usage.modelChart.cachedInput": "Из кэша",
  "settings.usage.modelChart.uncachedInput": "Без кэша",
  "settings.usage.modelChart.output": "Выход",
  "settings.usage.modelChart.remoteTokens": "Из API использования моделей",
  "settings.usage.duration.day": "д",
  "settings.usage.duration.hour": "ч",
  "settings.usage.duration.minute": "м",
  "settings.usage.duration.second": "с",
  "settings.usage.dayLabel.mon": "Пн",
  "settings.usage.dayLabel.wed": "Ср",
  "settings.usage.dayLabel.fri": "Пт",
  "settings.modelProvider.presetDescription":
    "Встроенные провайдеры Z.ai и BigModel с настройкой через OAuth.",
  "settings.modelProvider.presetEmpty":
    "Ещё не синхронизировано. Сначала выполните вход через OAuth.",
  "settings.modelProvider.customTitle": "Пользовательские провайдеры",
  "settings.modelProvider.refresh": "Обновить",
  "settings.modelProvider.reorderProvider":
    "Перетащите, чтобы изменить порядок провайдера",
  "settings.modelProvider.reorderModel":
    "Перетащите, чтобы изменить порядок модели",
  "settings.modelProvider.empty":
    "Пользовательских провайдеров моделей пока нет",
  "settings.modelProvider.deleteConfirm": "Удалить «{name}»?",
  "settings.modelProvider.deleteConfirmTitle": "Удалить провайдера «{name}»?",
  "settings.modelProvider.deleteConfirmDescription":
    "Это удалит конфигурацию пользовательского провайдера. Связанные изменения на текущей странице настроек не будут восстановлены автоматически.",
  "settings.modelProvider.deleteConfirmAction": "Удалить провайдера",
  "settings.modelProvider.testModel": "Проверить модель",
  "settings.modelProvider.testModel.enableProviderFirst":
    "Сначала включите провайдера",
  "settings.modelProvider.testModel.providerUnavailable":
    "Этот провайдер сейчас недоступен для проверки подключения.",
  "settings.modelProvider.testModel.modelUnavailable":
    "Эта модель сейчас недоступна для проверки подключения.",
  "settings.modelProvider.testModel.connectingWithIdentity":
    "Проверка {provider} / {model}",
  "settings.modelProvider.testModel.successWithIdentity":
    "Подключено: {provider} / {model}",
  "settings.modelProvider.testModel.failed": "Не удалось подключиться",
  "settings.modelProvider.testModel.failedWithIdentity":
    "Не удалось подключиться к {provider} / {model}: {reason}",
  "settings.modelProvider.testModel.localWorkspaceUnavailable":
    "Локальный проект недоступен для проверки подключения.",
  "settings.modelProvider.testModel.error.auth": "Ошибка аутентификации",
  "settings.modelProvider.testModel.error.network": "Сетевая ошибка",
  "settings.modelProvider.testModel.error.server": "Ошибка сервера",
  "settings.modelProvider.testModel.error.unknown": "Проверка не пройдена",
  "settings.modelProvider.testModel.error.noEndpoint": "Эндпоинт не настроен",
  "settings.skills.title": "Скиллы",
  "settings.skills.description":
    "Управляйте скиллами проекта и пользователя. Включённые скиллы можно вызывать в чате через $skill-name.",
  "settings.skills.searchPlaceholder": "Поиск скиллов…",
  "settings.skills.refresh": "Обновить",
  "settings.skills.refreshing": "Обновление…",
  "settings.skills.remoteContext": "Текущий удалённый проект: {target}",
  "settings.skills.empty": "Скиллы не найдены",
  "settings.skills.footerSummary": "Скиллов: {total} · включено: {enabled}",
  "settings.skills.noDescription": "Нет описания",
  "settings.skills.group.local": "Скиллы проекта и личные скиллы",
  "settings.skills.group.plugin": "Скиллы плагинов",
  "settings.skills.filter.label": "Фильтр по источнику",
  "settings.skills.filter.all": "Все",
  "settings.skills.filter.enabled.label": "Фильтр по статусу",
  "settings.resourceFilter.label": "Фильтр по статусу",
  "settings.resourceFilter.all": "Все",
  "settings.resourceFilter.enabled": "Включённые",
  "settings.resourceFilter.disabled": "Отключённые",
  "settings.skills.copyToCommon": "Копировать в общие",
  "settings.skills.removeFromCommon": "Удалить из общих",
  "settings.skills.copiedToCommon": "Скопировано в общие скиллы.",
  "settings.skills.removedFromCommon": "Удалено из общих скиллов.",
  "settings.skills.copyFailed": "Не удалось скопировать скилл.",
  "settings.skills.removeFailed": "Не удалось удалить скилл.",
  "settings.skills.delete.title": "Удалить скилл",
  "settings.skills.delete.description":
    "Удалить «{name}»? Папка скилла будет удалена с диска, отменить это действие невозможно.",
  "settings.skills.create.open": "Новый скилл",
  "settings.skills.create.taskCreateFailed":
    "Не удалось создать новую задачу для выбранного агента. Проверьте его доступность и попробуйте снова.",
  "settings.skills.import.open": "Импортировать скиллы из внешних агентов",
  "settings.skills.import.action": "Импортировать",
  "settings.skills.import.title": "Импорт скиллов из внешних агентов",
  "settings.skills.import.description":
    "Найдите переиспользуемые скиллы в Claude Code, Codex CLI и OpenCode. Импортируются только отсутствующие скиллы.",
  "settings.skills.import.scanning": "Поиск скиллов для импорта…",
  "settings.skills.import.empty":
    "Скиллы для импорта не найдены. Проверьте каталоги скиллов внешних агентов и повторите сканирование.",
  "settings.skills.import.summary": "Найдено скиллов для импорта: {count}",
  "settings.skills.import.scopeLabel": "Область",
  "settings.skills.import.scope.global": "Глобальная",
  "settings.skills.import.scope.project": "Проект",
  "settings.skills.import.scopeEmpty": "В этой области скиллы не найдены.",
  "settings.skills.import.selectAll": "Выбрать все",
  "settings.skills.import.clearAll": "Снять все",
  "settings.skills.import.selectionCount": "Выбрано: {selected}/{total}",
  "settings.skills.import.expandSource": "Показать скиллы",
  "settings.skills.import.collapseSource": "Скрыть скиллы",
  "settings.skills.import.selectSource": "Выбрать все скиллы этого источника",
  "settings.skills.import.deselectSource":
    "Снять выделение со всех скиллов этого источника",
  "settings.skills.import.skillCount": "Скиллов: {count}",
  "settings.skills.import.skillDetailsEmpty":
    "Сведения о скиллах недоступны. Повторите сканирование после обновления служб приложения.",
  "settings.skills.import.itemCount": "Скиллов: {count}",
  "settings.skills.import.importable": "Импортируемые",
  "settings.skills.import.skipReason.targetExists": "Каталог уже существует",
  "settings.skills.import.skipReason.sameNameExists": "Имя уже существует",
  "settings.skills.import.start": "Импортировать выбранные скиллы",
  "settings.skills.import.targetLabel": "Цель импорта",
  "settings.skills.import.target.global": "Импорт в глобальную область",
  "settings.skills.import.target.project": "Импорт в проект",
  "settings.skills.import.modeLabel": "Режим импорта",
  "settings.skills.import.modeHelp": "Справка по режиму импорта",
  "settings.skills.import.mode.copy": "Копирование",
  "settings.skills.import.mode.symlink": "Симлинк",
  "settings.skills.import.mode.copy.description":
    "Скопировать весь каталог скилла в ZCode. Последующие изменения во внешнем каталоге агента не будут синхронизироваться автоматически.",
  "settings.skills.import.mode.symlink.description":
    "Создать ссылку на каталог внешнего скилла агента. ZCode будет учитывать последующие изменения в источнике, но скилл будет зависеть от доступности этого пути.",
  "settings.skills.import.importing": "Импорт скиллов в ZCode",
  "settings.skills.import.imported": "Импортировано",
  "settings.skills.import.skipped": "Пропущено",
  "settings.skills.import.failed": "Ошибка",
  "settings.skills.import.resultList": "Результаты по скиллам",
  "settings.skills.import.resultEmpty": "Результаты по скиллам не получены.",
  "settings.skills.import.completeDescription":
    "Список скиллов обновлён. Существующие скиллы с такими же именами сохранены.",
  "settings.skills.import.finish": "Готово",
  "settings.skills.remoteSync.open": "Синхронизировать скилл",
  "settings.skills.remoteSync.title":
    "Синхронизация скиллов с удалённым хостом",
  "settings.skills.remoteSync.warningTitle":
    "Доступность данных и среды для скиллов",
  "settings.skills.remoteSync.warningDescription":
    "Синхронизация переносит пользовательские скиллы на удалённый хост, но не гарантирует доступность всех зависимых данных и возможностей системной среды. Если скилл недоступен из-за удалённой среды, прав доступа или отсутствующих зависимостей, установите его или добавьте зависимости на удалённом сервере.",
  "settings.skills.remoteSync.target": "Цель: {target}",
  "settings.skills.remoteSync.loading": "Загрузка локальных скиллов…",
  "settings.skills.remoteSync.empty":
    "Локальные пользовательские скиллы не найдены.",
  "settings.skills.remoteSync.filteredEmpty":
    "Доступны только скиллы, которые уже есть на удалённом хосте. Включите «Показывать существующие удалённые скиллы», чтобы увидеть их.",
  "settings.skills.remoteSync.showExisting":
    "Показывать существующие удалённые скиллы",
  "settings.skills.remoteSync.selectAll": "Выбрать все",
  "settings.skills.remoteSync.clearAll": "Снять все",
  "settings.skills.remoteSync.start": "Синхронизировать выбранные",
  "settings.skills.remoteSync.syncing": "Синхронизация скиллов…",
  "settings.skills.remoteSync.existing": "Уже есть на удалённом хосте",
  "settings.skills.remoteSync.expandDescription": "Показать ещё",
  "settings.skills.remoteSync.collapseDescription": "Свернуть",
  "settings.skills.remoteSync.synced": "Синхронизировано",
  "settings.skills.remoteSync.skipped": "Пропущено",
  "settings.skills.remoteSync.failed": "Ошибка",
  "settings.skills.remoteSync.complete": "Синхронизация скиллов завершена.",
  "settings.skills.remoteSync.selectionCount": "Выбрано: {selected}/{total}",
  "settings.skills.remoteSync.noSelection":
    "Выберите хотя бы один отсутствующий скилл.",
  "settings.skills.remoteSync.sizeLimit.selectedContent":
    "Синхронизация не выполнена: объём выбранных скиллов — около {actualSize}, что превышает лимит {maxSize} на одну синхронизацию. Снимите выделение с части скиллов и попробуйте снова. На удалённый хост ничего не записано.",
  "settings.skills.remoteSync.sizeLimit.archive":
    "Синхронизация не выполнена: размер созданного архива — около {actualSize}, что превышает лимит {maxSize} на одну синхронизацию. Снимите выделение с части скиллов и попробуйте снова. На удалённый хост ничего не записано.",
  "settings.skills.remoteSync.sizeLimit.extractedContent":
    "Синхронизация не выполнена: размер распакованного содержимого скиллов — около {actualSize}, что превышает лимит {maxSize} на удалённом хосте. Снимите выделение с части скиллов и попробуйте снова.",
  "settings.skills.userScopeDesktopOnly":
    "На текущем этапе скиллы уровня пользователя доступны только в десктопной версии.",
  "settings.skills.detail.description": "Описание",
  "settings.skills.detail.path": "Путь к файлу",
  "settings.skills.detail.openPath": "Открыть",
  "settings.skills.detail.scope": "Область",
  "settings.skills.detail.status": "Статус",
  "settings.skills.detail.version": "Версия",
  "settings.skills.detail.slug": "Slug",
  "settings.skills.detail.ownerId": "ID владельца",
  "settings.skills.detail.publishedAt": "Дата публикации",
  "settings.skills.detail.enabled": "Включён",
  "settings.skills.detail.disabled": "Отключён",
  "settings.skills.scope.personal": "Личный",
  "settings.skills.scope.plugin": "Плагин",
  "settings.skills.scope.workspaceFallback": "Проект",
  "settings.skills.diagnostics.summary":
    "Диагностика скиллов: ошибок — {errorCount}, предупреждений — {warningCount}",
  "settings.skills.diagnostics.expand": "Развернуть диагностику",
  "settings.skills.diagnostics.collapse": "Свернуть диагностику",
  "settings.subagents.title": "Субагенты",
  "settings.subagents.description":
    "Управляйте Markdown-файлами субагентов уровня пользователя, которые использует ZCode Agent.",
  "settings.subagents.workspaceScopeUnsupported":
    "Создание и редактирование на уровне Проекта не поддерживается",
  "settings.subagents.searchPlaceholder": "Поиск субагентов…",
  "settings.subagents.empty": "Субагенты не найдены",
  "settings.subagents.addNew": "Новый субагент",
  "settings.subagents.addDescription":
    "Укажите имя субагента, инструменты и системный промпт, затем сохраните, чтобы вернуться к списку.",
  "settings.subagents.edit": "Редактировать субагента",
  "settings.subagents.editDescription":
    "Измените конфигурацию субагента, затем сохраните, чтобы вернуться к списку.",
  "settings.subagents.backToList": "Назад",
  "settings.subagents.openUserAgentsFolder":
    "Открыть папку пользовательских субагентов",
  "settings.subagents.noDescription": "Нет описания",
  "settings.subagents.userScopeDesktopOnly":
    "Субагенты уровня пользователя сейчас доступны только в десктоп-версии.",
  "settings.subagents.group.user": "Установленные",
  "settings.subagents.group.plugin": "Субагенты плагинов",
  "settings.subagents.group.plugin.hint":
    "Профили плагинов загружаются из включённых плагинов; здесь можно переопределить только модель и уровень размышлений.",
  "settings.subagents.group.builtIn": "Встроенные субагенты",
  "settings.subagents.group.builtIn.hint":
    "Встроенные профили заданы средой выполнения по умолчанию и не редактируются здесь.",
  "settings.subagents.scope.builtIn": "Встроенный",
  "settings.subagents.scope.plugin": "Плагин",
  "settings.subagents.scope.workspace": "Проект",
  "settings.subagents.scope.label": "Область",
  "settings.subagents.filter.all": "Все",
  "settings.subagents.filter.enabled": "Включённые",
  "settings.subagents.filter.disabled": "Отключённые",
  "settings.subagents.table.name": "Имя",
  "settings.subagents.table.scope": "Область",
  "settings.subagents.table.model": "Модель",
  "settings.subagents.table.tools": "Инструменты",
  "settings.subagents.table.enabled": "Включён",
  "settings.subagents.footerSummary":
    "Субагентов: {total} · включено: {enabled}",
  "settings.subagents.toolsCount": "Инструментов: {count}",
  "settings.subagents.tools.inherit": "Наследовать инструменты",
  "settings.subagents.tools.all": "Все инструменты",
  "settings.subagents.toggleAria": "Переключить «{name}»",
  "settings.subagents.delete.title": "Удалить субагента",
  "settings.subagents.delete.description":
    "Удалить субагента «{name}»? Это действие нельзя отменить.",
  "settings.subagents.form.description":
    "При сохранении Markdown-профиль уровня пользователя записывается в тот же корень хранилища, который использует среда выполнения.",
  "settings.subagents.form.name.label": "Имя",
  "settings.subagents.form.name.placeholder": "code-reviewer",
  "settings.subagents.form.description.label": "Описание",
  "settings.subagents.form.description.placeholder":
    "Краткое описание для модели",
  "settings.subagents.form.model.label": "Модель",
  "settings.subagents.form.permissionMode.label": "Режим разрешений",
  "settings.subagents.form.maxTurns.label": "Макс. число шагов",
  "settings.subagents.form.maxTurns.placeholder": "Наследовать",
  "settings.subagents.form.color.label": "Цвет",
  "settings.subagents.form.tools.label": "Разрешённые инструменты",
  "settings.subagents.form.tools.inheritAll": "Наследовать все",
  "settings.subagents.form.tools.card.title":
    "Управляйте тем, какими инструментами может пользоваться этот субагент.",
  "settings.subagents.form.tools.mode.all": "Все разрешения по умолчанию",
  "settings.subagents.form.tools.mode.custom":
    "Свой набор разрешённых инструментов",
  "settings.subagents.form.disallowedTools.label": "Запрещённые инструменты",
  "settings.subagents.form.skills.label": "Скиллы",
  "settings.subagents.form.background.label": "Запуск в фоне",
  "settings.subagents.form.background.description":
    "Разрешить субагенту запускаться как фоновая задача по запросу модели.",
  "settings.subagents.form.injectAgentsMd.label": "Подключать AGENTS.md",
  "settings.subagents.form.systemPrompt.label": "Системный промпт",
  "settings.subagents.form.systemPrompt.placeholder":
    "Опишите роль и правила этого субагента…",
  "settings.subagents.form.validation.nameLength":
    "Длина должна быть от {min} до {max}",
  "settings.subagents.form.validation.nameCharacters":
    "Допускаются только буквы, цифры и дефисы",
  "settings.subagents.form.validation.descriptionRequired": "Укажите описание",
  "settings.subagents.form.validation.promptRequired":
    "Укажите системный промпт",
  "settings.subagents.form.validation.modelUnavailable":
    "Выберите доступную модель перед сохранением",
  "settings.subagents.form.validation.thoughtLevelUnavailable":
    "Выберите уровень размышлений, поддерживаемый этой моделью",
  "settings.subagents.reasoningUnavailable": "Уровень размышлений недоступен",
  "settings.subagents.model.inherit": "Наследовать",
  "settings.subagents.model.defaultMain": "Наследовать по умолчанию",
  "settings.subagents.model.select": "Выбрать модель",
  "settings.subagents.model.main": "Основная",
  "settings.subagents.model.lite": "Lite",
  "settings.subagents.permissionMode.auto": "Авто",
  "settings.subagents.permissionMode.plan": "План",
  "settings.subagents.color.blue": "Синий",
  "settings.subagents.color.cyan": "Голубой",
  "settings.subagents.color.green": "Зелёный",
  "settings.subagents.color.orange": "Оранжевый",
  "settings.subagents.color.pink": "Розовый",
  "settings.subagents.color.purple": "Фиолетовый",
  "settings.subagents.color.red": "Красный",
  "settings.subagents.color.yellow": "Жёлтый",
  "settings.pluginManaged.badge": "Плагин",
  "settings.pluginManaged.modifyInPlugin":
    "Зарегистрировано плагином. Измените это в плагине.",
  "settings.plugins.title": "Плагины",
  "settings.plugin.scope.user": "Пользователь",
  "settings.plugin.scope.workspaces": "Проекты",
  "settings.plugin.tab.plugins": "Плагины",
  "settings.plugin.tab.mcps": "MCP",
  "settings.plugin.tab.skills": "Скиллы",
  "settings.plugin.tab.commands": "Команды",
  "settings.search.clear": "Очистить поиск",
  "settings.plugin.plugins.installed": "Установленные",
  "settings.plugin.plugins.builtIn": "Встроенные",
  "settings.plugin.mcp.installed": "Установленные",
  "settings.plugin.mcp.plugins": "Плагины",
  "settings.plugin.mcp.pluginsDescription":
    "MCP, предоставляемые установленными плагинами",
  "settings.plugin.mcp.needsAttention": "Требуют внимания",
  "settings.plugin.plugins.searchPlaceholder": "Поиск плагинов…",
  "settings.plugin.plugins.empty":
    "В этой области не установлено ни одного плагина.",
  "settings.plugin.plugins.emptyInstalledTitle": "Плагины не установлены",
  "settings.plugin.plugins.emptyInstalledDescription":
    "Найдите и установите плагины, чтобы добавить MCP, скиллы и многое другое.",
  "settings.plugin.plugins.browse": "Обзор плагинов",
  "settings.plugin.mcp.emptyInstalledTitle": "MCP-серверы не установлены",
  "settings.plugin.mcp.emptyInstalledDescription":
    "Добавьте сервер вручную или импортируйте существующую конфигурацию.",
  "settings.plugin.mcp.newServer": "Новый MCP-сервер",
  "settings.plugin.mcp.searchEmpty": "Нет MCP-серверов по вашему запросу",
  "settings.plugin.skills.emptyInstalledTitle": "Скиллы не установлены",
  "settings.plugin.skills.installed": "Установленные",
  "settings.plugin.skills.emptyInstalledDescription":
    "Создайте скилл или импортируйте его из внешнего агента.",
  "settings.plugin.skills.newSkill": "Новый скилл",
  "settings.plugin.skills.searchEmpty": "Нет скиллов по вашему запросу",
  "settings.plugin.commands.installed": "Установленные",
  "settings.plugin.commands.emptyInstalledTitle": "Команды не установлены",
  "settings.plugin.commands.emptyInstalledDescription":
    "Создайте команду или импортируйте её из внешнего агента.",
  "settings.plugin.commands.searchEmpty": "Нет команд по вашему запросу",
  "settings.plugin.hooks.emptyInstalledTitle": "Хуки не установлены",
  "settings.plugin.hooks.emptyInstalledDescription":
    "Создайте хук для запуска команд при событиях жизненного цикла задач.",
  "settings.plugin.noWorkspace":
    "Откройте проект, чтобы управлять возможностями.",
  "settings.plugin.scopeUnavailableFallback":
    "Этот проект больше недоступен. Показаны настройки плагинов пользователя.",
  "settings.plugin.edit": "Изменить",
  "settings.plugin.done": "Готово",
  "settings.plugin.add": "Добавить",
  "settings.plugin.new": "Создать",
  "settings.plugin.source.plugin": "Плагин",
  "settings.plugins.description":
    "Включайте или отключайте установленные плагины. Плагины объединяют скиллы, команды, хуки и MCP-серверы.",
  "settings.plugins.store.subtitle":
    "Расширяйте ZCode скиллами, командами и MCP-серверами из плагинов",
  "settings.plugins.store.searchPlaceholder": "Поиск плагинов",
  "settings.plugins.store.searchResults": "Результаты поиска ({count})",
  "settings.plugins.store.searchEmpty": "По вашему запросу плагины не найдены",
  "settings.plugins.store.installedStrip": "Установлен",
  "settings.plugins.store.manageInstalled": "Управление установленными",
  "settings.plugins.store.segment.public": "Публичные",
  "settings.plugins.store.segment.personal": "Личные",
  "settings.plugins.store.featured": "Рекомендуемые",
  "settings.plugins.store.category.developerTools": "Инструменты разработчика",
  "settings.plugins.store.category.productivity": "Продуктивность",
  "settings.plugins.store.category.utilities": "Утилиты",
  "settings.plugins.store.category.legal": "Юриспруденция",
  "settings.plugins.store.category.finance": "Финансы",
  "settings.plugins.store.category.template": "Шаблоны",
  "settings.plugins.store.category.other": "Другое",
  "settings.plugins.store.viewMore": "Показать {names} и ещё {count}",
  "settings.plugins.store.viewMoreFew": "Показать {names}",
  "settings.plugins.store.showLess": "Свернуть",
  "settings.plugins.store.install": "Установить",
  "settings.plugins.store.paidPlanBadge": "Coding Plan",
  "settings.plugins.store.requiresPaidPlan":
    "Этот плагин лучше работает с тарифом Coding Plan",
  "settings.plugins.store.tryNow": "Попробовать",
  "settings.plugins.store.sourceMissing":
    "Источник маркетплейса отсутствует. Плагин остаётся работоспособным, но обновления недоступны.",
  "settings.plugins.store.menu.label": "Дополнительные действия",
  "settings.plugins.store.menu.enable": "Включить",
  "settings.plugins.store.menu.disable": "Отключить",
  "settings.plugins.store.menu.resetConfig":
    "Восстановить пользовательскую конфигурацию",
  "settings.plugins.store.back": "Назад",
  "settings.plugins.store.create": "Создать",
  "settings.plugins.store.sources.title": "Источники маркетплейсов",
  "settings.plugins.store.sources.empty":
    "Источники маркетплейсов пока не зарегистрированы",
  "settings.plugins.store.sources.pluginCount": "Плагинов: {count}",
  "settings.plugins.store.sources.lastUpdated": "Обновлено: {time}",
  "settings.plugins.store.sources.refreshFailed": "Ошибка обновления: {time}",
  "settings.plugins.store.sources.update": "Обновить этот маркетплейс",
  "settings.plugins.store.sources.remove": "Удалить этот маркетплейс",
  "settings.plugins.store.section.mcp": "MCP-серверы",
  "settings.plugins.store.section.skills": "Скиллы",
  "settings.plugins.store.section.commands": "Команды",
  "settings.plugins.store.section.agents": "Субагенты",
  "settings.plugins.store.section.hooks": "Хуки",
  "settings.plugins.store.info.title": "Информация",
  "settings.plugins.store.info.developer": "Разработчик",
  "settings.plugins.store.info.category": "Категория",
  "settings.plugins.store.info.version": "Версия",
  "settings.plugins.store.info.website": "Сайт",
  "settings.plugins.store.info.privacyPolicy": "Политика конфиденциальности",
  "settings.plugins.store.info.termsOfService": "Условия использования",
  "settings.plugins.store.personalEmpty":
    "Пока нет плагинов из личных источников. Нажмите «Создать», чтобы добавить источник-маркетплейс.",
  "settings.plugins.filter.label": "Фильтр по статусу",
  "settings.plugins.footerSummary": "Плагинов: {total} · включено: {enabled}",
  "settings.plugins.searchPlaceholder": "Поиск плагинов…",
  "settings.plugins.refresh": "Обновить",
  "settings.plugins.refreshing": "Обновление…",
  "settings.plugins.empty": "Плагины не найдены",
  "settings.plugins.noWorkspace":
    "Откройте проект, чтобы управлять плагинами.",
  "settings.plugins.source.builtin": "Встроенный",
  "settings.plugins.source.fromMarketplace": "Из {marketplace}",
  "settings.plugins.capability":
    "Скиллы: {skills} · Команды: {commands} · Хуки: {hooks} · MCP: {mcp}",
  "settings.plugins.tab.installed": "Установленные",
  "settings.plugins.tab.marketplace": "Обзор",
  "settings.plugins.installed.title": "Установленные",
  "settings.plugins.marketplaces.title": "Маркетплейсы",
  "settings.plugins.marketplaces.count": "Маркетплейсов: {count}",
  "settings.plugins.marketplaces.source":
    "GitHub-репозиторий, git URL, файл или каталог",
  "settings.plugins.marketplaces.chooseDirectory": "Выбрать каталог",
  "settings.plugins.marketplaces.dropHint":
    "Перетащите сюда файл или папку либо выберите каталог.",
  "settings.plugins.marketplaces.validate": "Проверить маркетплейс",
  "settings.plugins.marketplaces.add": "Добавить маркетплейс",
  "settings.plugins.marketplaces.update": "Обновить маркетплейс",
  "settings.plugins.marketplaces.remove": "Удалить маркетплейс",
  "settings.plugins.marketplaces.empty": "Маркетплейсы не добавлены",
  "settings.plugins.marketplaces.official": "Официальный",
  "settings.plugins.marketplaces.plugins": "Плагинов: {count}",
  "settings.plugins.marketplaces.refreshCatalogHint":
    "Обновите, чтобы загрузить официальный каталог.",
  "settings.plugins.marketplacePlugins.title": "Плагины маркетплейса",
  "settings.plugins.marketplacePlugins.empty":
    "Плагины маркетплейса не найдены",
  "settings.plugins.marketplacePlugins.install": "Установить",
  "settings.plugins.marketplacePlugins.installed": "Установлен",
  "settings.plugins.marketplace.searchPlaceholder":
    "Поиск плагинов, скиллов, MCP…",
  "settings.plugins.marketplace.catalogLoading": "Загрузка плагинов…",
  "settings.plugins.marketplace.sourceInfo.label":
    "Сведения об источниках Discover",
  "settings.plugins.marketplace.sourceInfo.title":
    "Discover использует маркетплейсы GitHub",
  "settings.plugins.marketplace.sourceInfo.description":
    "Убедитесь, что этот проект имеет доступ к GitHub. Каталоги, сведения и установка плагинов могут не работать, если GitHub недоступен.",
  "settings.plugins.marketplace.searchResults": "Найдено плагинов: {count}",
  "settings.plugins.marketplace.groupCount": "Плагинов: {count}",
  "settings.plugins.marketplace.expandGroup": "Показать ещё {count}",
  "settings.plugins.marketplace.showMore": "Показать ещё {count}",
  "settings.plugins.marketplace.hiddenInstalledCount": "Ещё {count}",
  "settings.plugins.installedMarketplace.title":
    "Установленные из маркетплейсов",
  "settings.plugins.installedMarketplace.uninstall": "Удалить плагин",
  "settings.plugins.detail.uninstall": "Удалить",
  "settings.plugins.detail.update": "Обновить",
  "settings.plugins.detail.updateAvailable":
    "Доступно обновление → v{version}",
  "settings.plugins.detail.versionChanged": "Доступна другая версия",
  "settings.plugins.detail.updateNewSessionsNote":
    "Вступит в силу в новых сессиях",
  "settings.plugins.checkForUpdates": "Проверить обновления",
  "settings.plugins.checkForUpdates.found":
    "Доступно обновлений плагинов: {count}",
  "settings.plugins.checkForUpdates.none":
    "Все установленные плагины обновлены",
  "settings.plugins.list.updateAvailable": "Обновить",
  "settings.plugins.list.versionChanged": "Изменён",
  "settings.plugins.restore": "Восстановить",
  "settings.plugins.restorableBuiltins.title":
    "Восстановить встроенные плагины",
  "settings.plugins.uninstall.confirmTitle": "Удалить «{name}»?",
  "settings.plugins.uninstall.confirmDescription":
    "Будут удалены кэшированные файлы плагина, каталог его данных и все сохранённые настройки. Это действие нельзя отменить.",
  "settings.plugins.uninstall.confirm": "Удалить",
  "settings.plugins.detail.empty":
    "Выберите плагин, чтобы просмотреть подробности.",
  "settings.plugins.detail.enabled": "Включён",
  "settings.plugins.detail.disabled": "Отключён",
  "settings.plugins.detail.notInstalled": "Не установлен",
  "settings.plugins.detail.components": "Компоненты",
  "settings.plugins.detail.description": "Описание",
  "settings.plugins.detail.source": "Источник",
  "settings.plugins.detail.sourceFrom": "Из {source}",
  "settings.plugins.detail.details": "Подробности",
  "settings.plugins.detail.warnings": "Предупреждения",
  "settings.plugins.detail.items": "Элементов: {count}",
  "settings.plugins.detail.installation": "Установка",
  "settings.plugins.detail.status": "Статус",
  "settings.plugins.detail.moreDetails": "Дополнительные подробности",
  "settings.plugins.detail.componentsEmpty": "Нет компонентов",
  "settings.plugins.detail.componentsWhenEnabled":
    "Включите плагин, чтобы увидеть его компоненты.",
  "settings.plugins.detail.component.agent": "Агенты",
  "settings.plugins.detail.component.command": "Команды",
  "settings.plugins.detail.component.skill": "Скиллы",
  "settings.plugins.detail.component.hook": "Хуки",
  "settings.plugins.detail.component.mcp": "MCP-серверы",
  "settings.plugins.detail.component.lsp": "LSP-серверы",
  "settings.plugins.detail.component.unknown": "Компоненты недоступны",
  "settings.plugins.detail.configuration": "Конфигурация",
  "settings.plugins.detail.hooks": "Хуки",
  "settings.plugins.detail.hook.async": "Асинхронный",
  "settings.plugins.detail.hook.command": "Команда",
  "settings.plugins.detail.hook.defaultMatcher": "Сопоставитель по умолчанию",
  "settings.plugins.detail.hook.diagnosticOnly": "Только диагностика",
  "settings.plugins.detail.hook.runnable": "Выполняемый",
  "settings.plugins.detail.hook.shell": "Оболочка",
  "settings.plugins.detail.hook.sourcePath": "Источник",
  "settings.plugins.detail.hook.statusMessage": "Статус",
  "settings.plugins.detail.hook.timeout": "Тайм-аут",
  "settings.plugins.detail.hook.timeoutMs": "Тайм-аут",
  "settings.plugins.detail.mcpServers": "MCP-серверы",
  "settings.plugins.detail.rootPath": "Корневой путь",
  "settings.plugins.detail.installPath": "Путь установки",
  "settings.plugins.detail.installedAt": "Дата установки",
  "settings.plugins.detail.none": "Нет",
  "settings.plugins.detail.hooksUnavailable":
    "Сведения о хуках не предоставляются текущим протоколом плагинов.",
  "settings.plugins.detail.installForFullDetails":
    "Установите плагин, чтобы просмотреть полный список компонентов, когда среда выполнения его предоставит.",
  "settings.plugins.marketplace.allMarketplaces": "Все маркетплейсы",
  "settings.plugins.marketplace.sectionTitle": "Обзор плагинов",
  "settings.plugins.marketplace.back": "Назад",
  "settings.plugins.marketplace.get": "Установить",
  "settings.plugins.marketplace.installing": "Установка…",
  "settings.plugins.marketplace.componentsLoading": "Загрузка компонентов…",
  "settings.plugins.marketplace.componentsError":
    "Не удалось загрузить список компонентов. Показана только доступная информация.",
  "settings.plugins.marketplace.componentsRetry": "Повторить",
  "settings.plugins.marketplace.componentsEmpty":
    "Этот плагин не объявляет компоненты, либо их не удалось прочитать.",
  "settings.plugins.config.title": "Конфигурация",
  "settings.plugins.config.required": "Обязательно",
  "settings.plugins.config.save": "Сохранить конфигурацию",
  "settings.plugins.config.showSecret": "Показать секрет",
  "settings.plugins.config.hideSecret": "Скрыть секрет",
  "settings.plugins.config.clearSecret": "Очистить сохранённый секрет",
  "settings.plugins.config.undoClearSecret": "Оставить сохранённый секрет",
  "settings.plugins.config.restoreOption":
    "Восстановить унаследованное значение",
  "settings.plugins.config.undoRestoreOption":
    "Оставить переопределение проекта",
  "settings.plugins.config.sensitiveUnavailable":
    "Для настройки этого значения требуется защищённое хранилище.",
  "settings.plugins.import.open": "Импортировать плагины из внешних агентов",
  "settings.plugins.import.title": "Импорт плагинов из внешних агентов",
  "settings.plugins.import.scanning": "Поиск плагинов для импорта…",
  "settings.plugins.import.empty":
    "Плагины для импорта не найдены. Проверьте каталоги плагинов внешних агентов и повторите сканирование.",
  "settings.plugins.import.summary": "Найдено плагинов для импорта: {count}",
  "settings.plugins.import.scopeLabel": "Область",
  "settings.plugins.import.scope.global": "Глобальная",
  "settings.plugins.import.scope.project": "Проект",
  "settings.plugins.import.scopeEmpty": "В этой области плагины не найдены.",
  "settings.plugins.import.selectAll": "Выбрать все",
  "settings.plugins.import.clearAll": "Снять все",
  "settings.plugins.import.selectionCount": "Выбрано: {selected}/{total}",
  "settings.plugins.import.expandSource": "Показать плагины",
  "settings.plugins.import.collapseSource": "Скрыть плагины",
  "settings.plugins.import.selectSource":
    "Выбрать все плагины этого источника",
  "settings.plugins.import.deselectSource":
    "Снять выделение со всех плагинов этого источника",
  "settings.plugins.import.itemCount": "Плагинов: {count}",
  "settings.plugins.import.skipReason.targetExists": "Каталог уже существует",
  "settings.plugins.import.skipReason.sameNameExists": "Плагин уже существует",
  "settings.plugins.import.start": "Импортировать выбранные плагины",
  "settings.plugins.import.targetLabel": "Цель импорта",
  "settings.plugins.import.target.global": "Импорт в глобальную область",
  "settings.plugins.import.target.project": "Импорт в проект",
  "settings.plugins.import.modeLabel": "Режим импорта",
  "settings.plugins.import.modeHelp": "Справка по режиму импорта",
  "settings.plugins.import.mode.copy": "Копирование",
  "settings.plugins.import.mode.symlink": "Симлинк",
  "settings.plugins.import.mode.copy.description":
    "Скопировать весь каталог плагина в ZCode и зарегистрировать его в plugins.dirs. Последующие изменения во внешнем каталоге агента не будут синхронизироваться автоматически.",
  "settings.plugins.import.mode.symlink.description":
    "Создать ссылку на каталог внешнего плагина агента и зарегистрировать её в plugins.dirs. ZCode будет учитывать последующие изменения в источнике, но плагин будет зависеть от доступности этого пути.",
  "settings.plugins.import.importing": "Импорт плагинов в ZCode",
  "settings.plugins.import.imported": "Импортировано",
  "settings.plugins.import.skipped": "Пропущено",
  "settings.plugins.import.failed": "Ошибка",
  "settings.plugins.import.resultList": "Результаты по плагинам",
  "settings.plugins.import.resultEmpty": "Результаты по плагинам не получены.",
  "settings.plugins.import.finish": "Готово",
  "settings.commands.title": "Команды",
  "settings.commands.description":
    "Управление файлами команд ZCode Agent (.md). Команды вызываются в чате в формате /имя-команды.",
  "settings.commands.sourceFilterLabel": "Фильтр по источнику",
  "settings.commands.source.zcodeAgent": "ZCode Agent",
  "settings.commands.add": "Создать",
  "settings.commands.addNew": "Новая команда",
  "settings.commands.addDescription":
    "Заполните название команды и промпт, затем сохраните, чтобы вернуться к списку.",
  "settings.commands.edit": "Изменение команды",
  "settings.commands.editDescription":
    "Измените команду и сохраните, чтобы вернуться к списку.",
  "settings.commands.backToList": "Назад",
  "settings.commands.delete.title": "Удаление команды",
  "settings.commands.delete.description":
    "Удалить команду «{name}»? Это действие нельзя отменить.",
  "settings.commands.empty": "Нет пользовательских команд",
  "settings.commands.searchPlaceholder": "Поиск команд…",
  "settings.commands.group.local": "Пользовательские команды",
  "settings.commands.group.plugin": "Команды плагинов",
  "settings.commands.openUserCommandsFolder":
    "Открыть папку пользовательских команд",
  "settings.commands.noDescription": "Нет описания",
  "settings.commands.form.name.label": "Название",
  "settings.commands.form.name.placeholder": "my-command",
  "settings.commands.form.description.label": "Описание (необязательно)",
  "settings.commands.form.description.placeholder":
    "Краткое описание в меню выбора команд",
  "settings.commands.form.argumentHint.label":
    "Подсказка аргумента (необязательно)",
  "settings.commands.form.argumentHint.placeholder": "например, <file-path>",
  "settings.commands.form.prompt.label": "Промпт",
  "settings.commands.form.prompt.placeholder":
    "Напишите промпт, который будет отправляться при вызове этой команды…",
  "settings.commands.form.validation.nameLength":
    "Длина должна быть от {min} до {max}",
  "settings.commands.form.validation.nameCharacters":
    "Допустимы только буквы, цифры, дефис и подчёркивание",
  "settings.commands.form.validation.promptRequired": "Укажите промпт",
  "settings.commands.import.open": "Импорт команд из внешних агентов",
  "settings.commands.import.action": "Импортировать",
  "settings.commands.import.title": "Импорт команд из внешних агентов",
  "settings.commands.import.scanning": "Поиск команд для импорта…",
  "settings.commands.import.empty":
    "Команд для импорта не найдено. Проверьте каталоги команд внешних агентов и просканируйте снова.",
  "settings.commands.import.summary":
    "Найдено команд, доступных для импорта: {count}",
  "settings.commands.import.scopeLabel": "Область",
  "settings.commands.import.scope.global": "Глобально",
  "settings.commands.import.scope.project": "Проект",
  "settings.commands.import.scopeEmpty": "В этой области команды не найдены.",
  "settings.commands.import.selectAll": "Выбрать все",
  "settings.commands.import.clearAll": "Снять всё",
  "settings.commands.import.selectionCount": "Выбрано: {selected}/{total}",
  "settings.commands.import.expandSource": "Показать команды",
  "settings.commands.import.collapseSource": "Скрыть команды",
  "settings.commands.import.selectSource":
    "Выбрать все команды этого источника",
  "settings.commands.import.deselectSource":
    "Снять выделение со всех команд этого источника",
  "settings.commands.import.itemCount": "Команд: {count}",
  "settings.commands.import.skipReason.targetExists": "Файл уже существует",
  "settings.commands.import.skipReason.sameNameExists": "Имя уже существует",
  "settings.commands.import.start": "Импортировать выбранные команды",
  "settings.commands.import.targetLabel": "Цель импорта",
  "settings.commands.import.target.global": "Импортировать глобально",
  "settings.commands.import.target.project": "Импортировать в проект",
  "settings.commands.import.modeLabel": "Режим импорта",
  "settings.commands.import.modeHelp": "Справка о режиме импорта",
  "settings.commands.import.mode.copy": "Копирование",
  "settings.commands.import.mode.symlink": "Симлинк",
  "settings.commands.import.mode.copy.description":
    "Копирует файл команды в ZCode. Последующие изменения файла у внешнего агента не будут синхронизироваться автоматически.",
  "settings.commands.import.mode.symlink.description":
    "Создаёт ссылку на файл команды внешнего агента. ZCode отслеживает последующие изменения источника, но команда зависит от доступности исходного пути.",
  "settings.commands.import.importing": "Импорт команд в ZCode",
  "settings.commands.import.imported": "Импортировано",
  "settings.commands.import.skipped": "Пропущено",
  "settings.commands.import.failed": "Ошибка",
  "settings.commands.import.resultList": "Результаты команд",
  "settings.commands.import.resultEmpty":
    "Результаты по командам не получены.",
  "settings.commands.import.finish": "Готово",
  "settings.hooks.review.trust": "Доверять",
  "settings.hooks.review.notice":
    "Хуки могут выполняться вне песочницы, поэтому просим проверить все недавно установленные или изменённые хуки",
  "settings.hooks.review.unavailable":
    "Текущее подключение не может пометить этот хук как доверенный.",
  "settings.hooks.review.reason.rejected": "Запрос отклонён",
  "settings.hooks.title": "Хуки",
  "settings.workspaceFileSearch.title": "Область поиска в Проекте",
  "settings.workspaceFileSearch.description":
    "Редактируйте правила .zcodeignore (синтаксис gitignore), задающие область поиска файлов в Проекте. Вступают в силу при следующем поиске после сохранения.",
  "settings.workspaceFileSearch.templateHint":
    "Файла .zcodeignore пока нет: содержимое ниже — исходный предпросмотр (копия .gitignore + исключения по умолчанию); в Проект он будет записан только после сохранения.",
  "settings.workspaceFileSearch.editorLabel":
    "Редактор правил игнорирования для поиска в Проекте",
  "settings.workspaceFileSearch.save": "Сохранить",
  "settings.workspaceFileSearch.saved":
    "Сохранено; вступит в силу при следующем поиске",
  "settings.workspaceFileSearch.saveFailed":
    "Не удалось сохранить; проверьте журналы",
  "settings.workspaceFileSearch.loadFailed":
    "Не удалось загрузить правила игнорирования; проверьте журналы",
  "settings.workspaceFileSearch.resync": "Синхронизировать из .gitignore",
  "settings.workspaceFileSearch.restoreDefaults":
    "Восстановить правила по умолчанию",
  "settings.workspaceFileSearch.transformFailed":
    "Не удалось применить операцию с секцией; проверьте журналы",
  "settings.workspaceFileSearch.reveal": "Показать расположение файла",
  "settings.workspaceFileSearch.revealHint":
    "Сначала сохраните; .zcodeignore лежит в корне Проекта",
  "settings.workspaceFileSearch.unsaved": "Несохранённые изменения",
  "settings.workspaceFileSearch.noWorkspace":
    "Проект не открыт, поэтому настроить правила игнорирования для поиска нельзя.",
  "settings.hooks.description":
    "Управляйте хуками жизненного цикла задач, чтобы автоматически выполнять команды при определённых событиях.",
  "settings.hooks.enabled": "Включён",
  "settings.hooks.disabled": "Отключён",
  "settings.hooks.scopeUnknown": "Область неизвестна",
  "settings.hooks.add": "Новый хук",
  "settings.hooks.edit": "Изменить хук",
  "settings.hooks.delete": "Удалить хук",
  "settings.hooks.deleteDescription": "Удалить хук {event}?",
  "settings.hooks.empty": "Хуки не настроены",
  "settings.hooks.matchAll": "Совпадает со всем",
  "settings.hooks.sessionSnapshot":
    "Изменения хуков применяются к новым сессиям.",
  "settings.hooks.group.configured": "Настроенные хуки",
  "settings.hooks.group.compatibility": "Доступны для импорта",
  "settings.hooks.group.plugins": "Хуки плагинов",
  "settings.hooks.group.installed": "Установленные",
  "settings.hooks.group.legacy": "Устаревшие",
  "settings.hooks.import": "Импортировать",
  "settings.hooks.imported": "Хук импортирован",
  "settings.hooks.event": "Событие",
  "settings.hooks.type": "Исполнитель",
  "settings.hooks.type.process": "Процесс",
  "settings.hooks.type.command": "Команда оболочки",
  "settings.hooks.matcher": "Матчер",
  "settings.hooks.command": "Команда",
  "settings.hooks.timeout": "Таймаут (секунды)",
  "settings.hooks.searchPlaceholder": "Поиск хуков…",
  "settings.hooks.searchEmpty": "Хуки по вашему запросу не найдены.",
  "settings.hooks.backToList": "Назад",
  "settings.hooks.matcherPlaceholder": "напр. Write, Edit, Bash",
  "settings.hooks.matcherHint":
    "Оставьте пустым, чтобы матчер срабатывал на любой ввод для этого события.",
  "settings.hooks.commandPlaceholder": "напр. echo 'Hello from hook'",
  "settings.hooks.args": "Аргументы",
  "settings.hooks.argsPlaceholder": "По одному аргументу argv в строке",
  "settings.hooks.argsHint": "По одному аргументу argv в строке.",
  "settings.hooks.shell": "Оболочка",
  "settings.hooks.shellPlaceholder": "Системная по умолчанию",
  "settings.hooks.async": "Запускать в фоне",
  "settings.hooks.statusMessage": "Сообщение о статусе",
  "settings.hooks.statusMessagePlaceholder": "напр. Проверка проекта",
  "settings.hooks.timeoutHint": "Таймаут в секундах",
  "settings.hooks.customJson": "JSON дополнительных полей",
  "settings.hooks.customJsonObjectError":
    "Дополнительные поля должны быть JSON-объектом.",
  "settings.hooks.customJsonParseError":
    "Не удалось разобрать JSON дополнительных полей.",
  "settingsSync.dialog.title": "Импорт настроек",
  "settingsSync.dialog.description":
    "Будут импортированы только отсутствующие элементы. Существующие настройки будут пропущены автоматически.",
  "settingsSync.action.skip": "Не сейчас",
  "settingsSync.action.rescan": "Сканировать снова",
  "settingsSync.action.rescanning": "Сканирование…",
  "settingsSync.action.importSelected": "Импортировать выбранное",
  "settingsSync.action.importing": "Импорт…",
  "settingsSync.action.finish": "Начать работу с ZCode",
  "settingsSync.agent.zcode": "Агент ZCode",
  "settingsSync.agent.claudeCode": "Claude Code",
  "settingsSync.agent.codexCli": "Codex CLI",
  "settingsSync.agent.openCode": "OpenCode",
  "settingsSync.agent.openClaw": "OpenClaw",
  "settingsSync.agent.augment": "Augment",
  "settingsSync.agent.continue": "Continue",
  "settingsSync.agent.goose": "Goose",
  "settingsSync.agent.qwenCode": "Qwen Code",
  "settingsSync.agent.qode": "Qoder",
  "settingsSync.agent.qodeCn": "Qoder CN",
  "settingsSync.agent.windsurf": "Windsurf",
  "settingsSync.agent.trae": "Trae",
  "settingsSync.agent.traeCn": "Trae CN",
  "settingsSync.agent.kiroCli": "Kiro CLI",
  "settingsSync.agent.roo": "Roo Code",
  "settingsSync.agent.codeBuddy": "CodeBuddy",
  "settingsSync.agent.agents": "Общие .agents",
  "settingsSync.category.providers": "Провайдеры",
  "settingsSync.category.providers.description": "Модели и учётные данные",
  "settingsSync.category.skills": "Скиллы",
  "settingsSync.category.skills.description":
    "Копировать локальные воркфлоу SKILL.md из внешних агентов",
  "settingsSync.category.default.description":
    "Настройки, доступные для импорта.",
  "settingsSync.unit.categoryCount": "Категорий: {count}",
  "settingsSync.unit.itemCount": "Элементов: {count}",
  "settingsSync.selection.selectedCategoryCount": "Выбрано: {count}",
  "settingsSync.selection.reloading": "Обновление настроек для импорта…",
  "settingsSync.selection.selectAll": "Выбрать все",
  "settingsSync.selection.clearAll": "Снять все",
  "settingsSync.status.pending": "Ожидание",
  "settingsSync.status.running": "Импорт",
  "settingsSync.status.success": "Готово",
  "settingsSync.status.skipped": "Пропущено",
  "settingsSync.status.failed": "Ошибка",
  "settingsSync.importing.title": "Импорт настроек",
  "settingsSync.importing.progressLabel": "Общий прогресс",
  "settingsSync.importing.currentTask": "Текущее: {agent} / {category}",
  "settingsSync.importing.finalizing": "Завершение импорта…",
  "settingsSync.importing.summary.success": "Готово: {count}",
  "settingsSync.importing.summary.skipped": "Пропущено: {count}",
  "settingsSync.importing.summary.failed": "Не удалось: {count}",
  "settingsSync.complete.title": "Импорт настроек завершён",
  "settingsSync.complete.summary":
    "Импортировано: {successCount}, пропущено: {skippedCount}, не удалось: {failedCount}.",
  "settingsSync.complete.finished": "Импорт завершён.",
  "settingsSync.discovery.title": "Найдены настройки для импорта",
  "settingsSync.discovery.description":
    "Настройки агентов для импорта больше не сканируются автоматически.",
  "settingsSync.discovery.helper":
    "Будут импортированы только отсутствующие элементы, текущие настройки ZCode не будут перезаписаны.",
  "settingsSync.discovery.agentCount": "Найдено агентов: {count}",
  "settingsSync.discovery.categoryCount": "Найдено категорий: {count}",
  "settingsSync.discovery.error": "Не удалось выполнить сканирование: {error}",
  "settingsSync.discovery.continue": "Продолжить",
  "onboarding.dialog.title": "Добро пожаловать в ZCode",
  "onboarding.dialog.description": "Выберите, как начать первую сессию.",
  "onboarding.wizard.label": "Руководство по миграции",
  "onboarding.welcome.eyebrow": "Первичная настройка",
  "onboarding.welcome.title": "Добро пожаловать в ZCode",
  "onboarding.welcome.start": "Запустить ZCode",
  "onboarding.welcome.migrate": "Руководство по миграции",
  "onboarding.welcome.helper":
    "Импортируйте настройки существующих инструментов сейчас или пропустите и вернитесь к этому позже в «Настройках».",
  "onboarding.step.session": "Сессии",
  "onboarding.step.skillsImport": "Скиллы",
  "onboarding.step.mcpImport": "MCP-серверы",
  "onboarding.step.pluginsImport": "Плагины",
  "onboarding.step.commandsImport": "Команды",
  "onboarding.step.agentsFile": "AGENTS.md",
  "onboarding.step.migration": "Миграция",
  "onboarding.stepDescription.session":
    "Просмотрите найденное и выберите сессии и проекты для миграции.",
  "onboarding.stepDescription.skillsImport":
    "Импортируйте выбранные скиллы из внешних агентов до финальной миграции.",
  "onboarding.stepDescription.mcpImport":
    "Импортируйте выбранные определения MCP-серверов из конфигураций внешних агентов.",
  "onboarding.stepDescription.pluginsImport":
    "Импортируйте выбранные плагины из внешних агентов до финальной миграции.",
  "onboarding.stepDescription.commandsImport":
    "Импортируйте выбранные команды из внешних агентов до финальной миграции.",
  "onboarding.stepDescription.migration":
    "Запустите миграцию и подождите, пока ZCode импортирует выбранные данные.",
  "onboarding.sessions.empty":
    "Проектов пока нет. Просканируйте локальную историю, затем выберите проекты для миграции.",
  "onboarding.sessions.count": "Сессий: {count}",
  "onboarding.sessions.unlimited": "Без ограничений",
  "onboarding.sessions.chooseWorkspace": "Выберите проект",
  "onboarding.agentSettings.empty":
    "Пока импортировать нечего. Просканируйте снова или продолжите без миграции.",
  "onboarding.agentSettings.categoryToggleAllAria":
    "Выбрать или снять «{category}» для всех агентов",
  "onboarding.agentsFile.copyTitle": "Копировать CLAUDE.md в AGENTS.md",
  "onboarding.agentsFile.sourceLabel": "Источник",
  "onboarding.agentsFile.targetLabel": "Цель",
  "onboarding.agentsFile.loading": "Проверка…",
  "onboarding.agentsFile.missingSource":
    "Файл ~/.claude/CLAUDE.md не найден, поэтому пользовательская память Claude не может быть перенесена.",
  "onboarding.agentsFile.error":
    "Не удалось проверить статус миграции AGENTS.md: {error}",
  "onboarding.agentsFile.confirmTitle": "Перезаписать AGENTS.md по умолчанию?",
  "onboarding.agentsFile.confirmDescription":
    "ZCode скопирует {source} в {target}.\nЕсли целевой файл уже существует, конфигурация AGENTS по умолчанию будет перезаписана.",
  "onboarding.agentsFile.confirmAction": "Перезаписать и мигрировать",
  "onboarding.finish.summary.label.imported": "Импортировано",
  "onboarding.finish.summary.label.skipped": "Пропущено",
  "onboarding.finish.summary.label.failed": "Ошибка",
  "onboarding.footer.helper":
    "Можно пропустить в любой момент и продолжить миграцию позже из «Настроек».",
  "onboarding.footer.workspaceSelection": "Выбрано проектов: {count}",
  "onboarding.action.continue": "Продолжить",
  "onboarding.action.beginMigration": "Начать миграцию",
  "onboarding.migration.progress": "Миграция… {progress}%",
  "onboarding.migration.ready": "Подготовка плана миграции…",
  "onboarding.migration.confirmCloseTitle": "Миграция ещё выполняется",
  "onboarding.migration.confirmCloseDescription":
    "Миграция истории ещё идёт. Если закрыть сейчас, текущий импорт будет прерван. Всё равно закрыть?",
  "onboarding.migration.confirmCloseConfirm": "Всё равно закрыть",
  "onboarding.finish.done": "Миграция завершена",
  "onboarding.finish.ready":
    "Перед продолжением просмотрите, что было импортировано.",
  "onboarding.finish.currentWorkspace": "Миграция сессий из {workspace}",
  "onboarding.finish.currentAgentsFile": "Миграция AGENTS.md",
  "onboarding.finish.currentSettings": "Импорт настроек агентов",
  "onboarding.finish.summary.sessions": "Миграция сессий",
  "onboarding.finish.summary.sessions.detail":
    "Импортировано: {imported}, пропущено: {skipped}, с ошибкой: {failed}.",
  "onboarding.finish.summary.settings": "Импорт настроек",
  "onboarding.finish.summary.agentsFile": "AGENTS.md",
  "onboarding.finish.summary.settings.detail":
    "Импортировано: {imported}, пропущено: {skipped}, с ошибкой: {failed}.",
  "chat.empty.title": "Начать диалог",
  "chat.empty.description": "Начните новую задачу в {workspace}",
  "chat.empty.description.beforeWorkspace": "Начните новую задачу в",
  "chat.empty.description.afterWorkspace": "",
  "chat.empty.greeting.morningEarly": "Доброе утро, готов к работе",
  "chat.empty.greeting.morning": "Доброе утро! Чем могу помочь?",
  "chat.empty.greeting.noon": "Перерыв на обед?",
  "chat.empty.greeting.afternoon": "Добрый день! Остальное — на мне.",
  "chat.empty.greeting.evening": "Вечер, сегодня неплохая работа",
  "chat.empty.greeting.lateNight":
    "Уже поздно — не забывайте заботиться о себе.",
  "chat.draft.suggestedPrompt.recentCommits":
    "Проверить коммиты за последние 7 дней",
  "chat.draft.suggestedPrompt.recentCommits.prompt":
    "Проверьте коммиты Git за последние 7 дней в этом проекте, обобщите основные изменения и определите потенциальные риски.",
  "chat.draft.suggestedPrompt.createPdf": "Создать PDF",
  "chat.draft.suggestedPrompt.createPdf.prompt":
    "Создайте PDF-документ на основе содержимого текущего проекта.",
  "chat.draft.suggestedPrompt.plugin.documentSkills": "Document Skills",
  "chat.draft.suggestedPrompt.plugin.github": "Github",
  "chat.draft.suggestedPrompt.pluginUnavailable":
    "Плагин {pluginLabel} не включён или не установлен",
  "chat.draft.suggestedPrompt.pluginFlow.installing": "Установка плагина…",
  "chat.draft.suggestedPrompt.pluginFlow.enabling": "Включение плагина…",
  "chat.draft.suggestedPrompt.pluginFlow.checking":
    "Проверка статуса плагина…",
  "chat.draft.suggestedPrompt.pluginFlow.installConfirmation":
    "Установить плагин {pluginLabel}",
  "chat.draft.suggestedPrompt.pluginFlow.enableConfirmation":
    "Включить плагин {pluginLabel}",
  "chat.draft.suggestedPrompt.pluginFlow.confirm": "Подтвердить",
  "chat.draft.suggestedPrompt.pluginFlow.installSucceeded":
    "Установка выполнена",
  "chat.draft.suggestedPrompt.pluginFlow.installFailed":
    "Не удалось установить плагин",
  "chat.draft.suggestedPrompt.pluginFlow.installFailureToast":
    "Не удалось установить {pluginLabel}: {error}",
  "chat.draft.suggestedPrompt.pluginFlow.installTimedOut":
    "Истекло время ожидания установки",
  "chat.draft.suggestedPrompt.pluginFlow.installReturnedEmpty":
    "Результат установки не содержит плагин",
  "chat.draft.suggestedPrompt.pluginFlow.enableSucceeded": "Плагин включён",
  "chat.draft.suggestedPrompt.pluginFlow.enableFailed":
    "Не удалось включить плагин",
  "chat.empty.workspaceMenu": "Выбрать проект",
  "chat.empty.selectProject": "Выбрать проект",
  "chat.empty.workOutsideProject": "Работать вне проекта",
  "chat.empty.detachProject": "Убрать текущий проект",
  "chat.empty.workspaceSearchPlaceholder": "Поиск проектов",
  "chat.empty.workspaceSearchEmpty": "Нет подходящих проектов",
  "chat.empty.cliMenu": "Выбрать CLI",
  "chat.empty.home": "Главная",
  "chat.empty.createWorkspace.title": "Создать проект",
  "chat.empty.createWorkspace.placeholder": "Имя проекта",
  "chat.empty.createWorkspace.locationHint": "Расположение: {path}",
  "chat.empty.createWorkspace.error.required": "Укажите имя проекта.",
  "chat.empty.createWorkspace.error.separator":
    "Имя проекта не может содержать / или \\\\.",
  "chat.empty.createWorkspace.error.createFailed":
    "Не удалось создать проект.",
  "chat.emptyResult.title": "Нет видимого результата",
  "chat.emptyResult.description":
    "Задача завершилась без сообщений в чате. Возможно, она была остановлена до того, как модель дала ответ.",
  "chat.placeholder.newTask":
    "Спросите ZCode о чём угодно, @ — добавить контекст, / — команды и возможности",
  "chat.placeholder.newTaskMobile": "Спросите ZCode о чём угодно…",
  "chat.placeholder.followUpAsk": "Попросите о дополнительных изменениях",
  "chat.placeholder.followUpQueue":
    "Продолжайте вводить, чтобы поставить изменения в очередь",
  "chat.placeholder.loading": "Инициализация задачи…",
  "chat.attachments.dragHint": "Отпустите, чтобы добавить вложения",
  "chat.composer.workspaceFileDragHint":
    "Отпустите, чтобы упомянуть этот файл или папку",
  "chat.send": "Отправить",
  "chat.scrollToBottom": "Прокрутить вниз",
  "chat.message.edit": "Изменить",
  "chat.message.restore": "Восстановить",
  "chat.message.copy": "Копировать",
  "chat.message.copy.copied": "Скопировано",
  "chat.message.copy.requiresFull":
    "Чтобы скопировать, сначала загрузите сообщение целиком",
  "chat.message.like": "Нравится",
  "chat.message.liked": "Понравилось",
  "chat.message.dislike": "Не нравится",
  "chat.message.disliked": "Не понравилось",
  "chat.message.fork": "Создать форк",
  "chat.message.forking": "Создание форка…",
  "chat.message.fork.unavailable": "Создайте форк после завершения задачи",
  "chat.message.fork.unsupported": "Текущий агент пока не поддерживает форки",
  "chat.message.fork.failed": "Не удалось создать форк сессии: {error}",
  "chat.message.fork.derivedFrom": "Создан форк из диалога",
  "chat.message.fork.derivedFromMissing":
    "Создан форк из более старого диалога (данные о происхождении потеряны)",
  "chat.message.fork.parentMissing": "Исходный диалог больше не существует",
  "chat.message.fork.noCheckpoint": "Контрольная точка для форка не найдена",
  "chat.message.fork.targetMessageMissing":
    "Исходное сообщение больше не существует в диалоге",
  "chat.hooks.label": "Хуки",
  "chat.hooks.source.user": "Пользователь",
  "chat.hooks.source.project": "Проект",
  "chat.hooks.source.plugin": "Плагин",
  "chat.hooks.state.running": "Выполняется",
  "chat.hooks.state.completed": "Завершён",
  "chat.hooks.state.blocked": "Заблокирован",
  "chat.hooks.state.failed": "Ошибка",
  "chat.hooks.state.cancelled": "Отменён",
  "chat.hooks.state.timedOut": "Таймаут",
  "chat.message.mailbox.from": "Новое сообщение от сессии {sessionId}",
  "chat.message.expand": "Развернуть",
  "chat.message.collapse": "Свернуть",
  "chat.userInput.epilogue.label": "Инструкции движка воркфлоу",
  "chat.message.bodyPreview.notice":
    "Ответ слишком большой. Показан только предпросмотр ({previewBytes} / {fullBytes}).",
  "chat.message.bodyPreview.loadFull": "Показать сообщение целиком",
  "chat.message.bodyPreview.loading": "Загрузка…",
  "chat.message.bodyPreview.retry": "Не удалось загрузить, повторить",
  "chat.message.toolSlice.notice":
    "Показано {shown} из {total} вызовов инструментов.",
  "chat.message.toolSlice.loadMore": "Загрузить ещё вызовы инструментов",
  "chat.message.toolSlice.loading": "Загрузка…",
  "chat.message.toolSlice.retry": "Не удалось загрузить, повторить",
  "chat.message.toolSnapshot.notice":
    "Всего {toolCount} вызовов инструментов ({fullBytes}), в предпросмотре {previewBytes}.",
  "chat.message.toolSnapshot.loadAll": "Загрузить все данные инструментов",
  "chat.message.toolSnapshot.loading": "Загрузка…",
  "chat.message.toolSnapshot.retry": "Не удалось загрузить, повторить",
  "chat.message.time.yesterday": "Вчера {time}",
  "chat.message.retry": "Повторить",
  "chat.history.workingFor": "Работает {duration}",
  "chat.history.workedFor": "Работал {duration}",
  "chat.history.worked": "Работал",
  "chat.history.stopped": "Остановлено",
  "chat.history.duration.day": "д",
  "chat.history.duration.hour": "ч",
  "chat.history.duration.minute": "м",
  "chat.history.duration.second": "с",
  "chat.stop": "Остановить",
  "chat.stop.short": "Стоп",
  "chat.promptEnhance.title": "Улучшить промпт",
  "chat.promptEnhance.description":
    "Улучшите текущий черновик с помощью выбранной конфигурации модели.",
  "chat.promptEnhance.cancel": "Отменить улучшение",
  "chat.promptEnhance.cancelDescription":
    "Нажмите ещё раз, чтобы отменить улучшение промпта.",
  "chat.promptEnhance.cancelled": "Улучшение промпта отменено",
  "chat.promptEnhance.empty": "Сначала введите промпт",
  "chat.promptEnhance.unsupported":
    "Выбранная модель пока не поддерживает прямую настройку улучшения промптов.",
  "chat.promptEnhance.error":
    "Не удалось улучшить промпт. Попробуйте ещё раз.",
  "chat.promptEnhance.errorWithDetail": "Не удалось улучшить промпт: {error}",
  "chat.queue.enqueue": "В очередь",
  "chat.queue.title": "Сообщения в очереди ({count})",
  "chat.queue.drag": "Перетащите, чтобы изменить порядок",
  "chat.queue.sendNow": "Скорректировать",
  "chat.queue.runNow": "Запустить сейчас",
  "chat.queue.edit": "Изменить",
  "chat.queue.editDraftConflict":
    "Отправьте или очистите текущий черновик, прежде чем редактировать сообщение в очереди.",
  "chat.queue.editRestoreFailed":
    "Не удалось вернуть сообщение из очереди в поле ввода. Попробуйте ещё раз.",
  "chat.queue.remove": "Удалить сообщение из очереди",
  "chat.queue.turnSteer.steering": "Корректировка диалога",
  "chat.queue.paused.stopped":
    "Очередь приостановлена, так как вы остановили текущий ответ",
  "chat.queue.paused.error":
    "Очередь приостановлена, так как ответ завершился ошибкой",
  "chat.queue.paused.generic": "Очередь приостановлена",
  "chat.queue.resume": "Продолжить",
  "chat.queue.resume.description":
    "Продолжить отправку сообщений из очереди по порядку",
  "chat.queue.sendConfirm.title": "Отправить сообщение?",
  "chat.queue.sendConfirm.description":
    "Вы собираетесь отправить сообщение. Очистить ранее поставленные в очередь сообщения ({count})?",
  "chat.queue.sendConfirm.clear": "Очистить очередь",
  "chat.queue.sendConfirm.keep": "Отправить сообщение",
  "chat.message.turnSteer.guided": "Диалог скорректирован",
  "chat.message.turnSteer.pending": "Ожидание корректировки текущего запуска…",
  "chat.followup.guideCurrent": "Скорректировать текущий запуск",
  "chat.followup.sendNow": "Отправить сейчас",
  "chat.followup.addToQueue": "Добавить в очередь",
  "chat.modelChangeNotice.changed": "Переключено с {fromModel} на {toModel}",
  "chat.preparing": "Подготовка…",
  "chat.remoteGenerating": "Другое устройство отправляет сообщение…",
  "chat.reasoning.thinking": "Думает",
  "chat.reasoning.thought": "Обдумал",
  "chat.reasoning.durationFewSeconds": "несколько секунд",
  "chat.reasoning.durationSeconds": "{seconds} с",
  "chat.contextUsage": "Использование контекста: {used} из {total}",
  "chat.contextUsage.title": "Окна контекста",
  "chat.contextUsageDescription":
    "Текст промпта, вызовы инструментов и ответы делят между собой это окно контекста.",
  "chat.contextUsage.cacheHitRate": "Средний процент попаданий в кэш",
  "chat.contextUsage.breakdown": "Источники контекста",
  "chat.contextUsage.breakdown.messages": "Сообщения",
  "chat.contextUsage.breakdown.systemPrompt": "Системный промпт",
  "chat.contextUsage.breakdown.metaUserContext": "Метаконтекст",
  "chat.contextUsage.breakdown.skills": "Скиллы",
  "chat.contextUsage.breakdown.toolPrompt": "Промпт инструментов",
  "chat.contextUsage.breakdown.systemTools": "Системные инструменты",
  "chat.contextUsage.breakdown.mcpTools": "Инструменты MCP",
  "chat.contextUsage.compress": "Сжать",
  "chat.contextUsage.compressDescription":
    "Отправьте {command}, чтобы сжать текущий контекст",
  "tokenDebug.open": "Открыть отладку токенов",
  "tokenDebug.column.tps": "TPS (токенов/с)",
  "tokenDebug.tpsDescription":
    "Выходные токены ÷ секунды от первого выходного токена до завершения запроса",
  "developerTools.loadError":
    "Не удалось прочитать отладочные данные. Повторяем попытку; предыдущие записи могут быть устаревшими.",
  "tokenDebug.title": "Отладка токенов",
  "tokenDebug.summary.requests": "Основные запросы",
  "tokenDebug.summary.average": "Средняя доля попаданий",
  "tokenDebug.summary.input": "Суммарный ввод",
  "tokenDebug.summary.cacheRead": "Суммарное чтение из кэша",
  "tokenDebug.column.round": "Раунд",
  "tokenDebug.column.input": "Ввод",
  "tokenDebug.column.output": "Вывод",
  "tokenDebug.column.total": "Всего",
  "tokenDebug.column.reasoning": "Рассуждения",
  "tokenDebug.column.cacheRead": "Чтение из кэша",
  "tokenDebug.column.cacheWrite": "Запись в кэш",
  "tokenDebug.column.hitRate": "Доля попаданий",
  "tokenDebug.empty": "Записей токенов основной сессии пока нет",
  "developerTools.title": "Инструменты разработчика",
  "developerTools.tokenSection": "Отладка токенов",
  "developerTools.networkSection": "Состояние сети",
  "developerTools.network.empty": "Записей о состоянии сети модели пока нет",
  "developerTools.network.model": "Модель",
  "developerTools.network.provider": "Провайдер",
  "developerTools.network.attempt": "Попытка",
  "developerTools.network.http": "HTTP",
  "developerTools.network.duration": "Длительность",
  "developerTools.network.retryDelay": "Задержка перед повтором",
  "developerTools.network.requestHeaders": "Заголовки запроса ({count})",
  "developerTools.network.responseHeaders": "Заголовки ответа ({count})",
  "developerTools.network.noHeaders": "Заголовки не записаны",
  "developerTools.network.status.started": "Запрос начат",
  "developerTools.network.status.completed": "Запрос завершён",
  "developerTools.network.status.failed": "Запрос не выполнен",
  "developerTools.network.status.retry": "Запланирован повтор",
  "developerTools.network.status.stalled": "Поток не продвигается",
  "chat.contextCompaction.started": "Сжатие контекста",
  "chat.contextCompaction.retrying":
    "Повторное сжатие контекста ({attempt}/{maxAttempts})",
  "chat.contextCompaction.skipped": "Контекст актуален; сжатие не требуется",
  "chat.contextCompaction.completed": "Контекст сжат",
  "chat.modelChange.switched": "Модель переключена: {from} → {to}",
  "chat.modelChange.using": "Используется модель {model}",
  "chat.contextCompaction.completedAuto": "Контекст сжат автоматически",
  "chat.contextCompaction.failed": "Не удалось сжать контекст",
  "chat.contextCompaction.interrupted": "Сжатие контекста прервано",
  "chat.contextCompaction.retry": "Повторить",
  "chat.goalVerification.checking": "Проверка цели",
  "chat.goalVerification.incomplete": "Цель не достигнута, продолжаем",
  "chat.goalVerification.complete": "Цель достигнута, завершение задачи",
  "chat.goalVerification.cancelled": "Проверка цели прервана",
  "chat.goalVerification.openSummary": "Развернуть сводку",
  "chat.goalBanner.label": "Цель",
  "chat.apiRetryStatus": "Переподключение… {attempt}/{maxRetries}",
  "chat.target.title": "Цель",
  "chat.target.status.active": "Активна",
  "chat.target.status.paused": "Приостановлена",
  "chat.target.status.complete": "Завершена",
  "chat.target.pause": "Приостановить цель",
  "chat.target.resume": "Возобновить цель",
  "chat.target.clear": "Удалить цель",
  "chat.summaryPanel.title": "Статус",
  "chat.summaryPanel.duration.hours": "ч",
  "chat.summaryPanel.duration.minutes": "мин",
  "chat.summaryPanel.duration.seconds": "с",
  "chat.summaryPanel.showMini": "Свернуть в капсулу",
  "chat.summaryPanel.showPanel": "Развернуть статус",
  "chat.summaryPanel.displayMode": "Режим отображения панели статуса",
  "chat.summaryPanel.displayModeAuto": "Разворачивать автоматически",
  "chat.summaryPanel.displayModeExpanded": "Всегда развёрнуто",
  "chat.summaryPanel.displayModeCollapsed": "Всегда свёрнуто",
  "chat.summaryPanel.runningBackgroundTasks": "Фоновые задачи",
  "chat.summaryPanel.runningBackgroundTasksMiniValue": "В фоне: {count}",
  "chat.summaryPanel.runningBackgroundTasksMiniValuePlural": "В фоне: {count}",
  "chat.summaryPanel.stopRunningBackgroundTask": "Остановить фоновую задачу",
  "chat.summaryPanel.openRunningSubagentSession": "Открыть сессию субагента",
  "chat.composer.backgroundWorks.tooltipTerminal":
    "Открыть запущенные терминалы",
  "chat.composer.backgroundWorks.tooltipAgent": "Открыть запущенных агентов",
  "chat.composer.backgroundWorks.tooltipWorkflow":
    "Открыть запущенные воркфлоу",
  "chat.composer.backgroundWorks.tooltipWorkflowDetails":
    "Открыть детали воркфлоу",
  "chat.composer.backgroundWorks.tooltipMixed":
    "Открыть запущенные терминалы и агентов",
  "chat.composer.backgroundWorks.ariaLabel":
    "Открыть запущенные фоновые задачи: {bashCount} Bash, {workflowCount} воркфлоу, {subagentCount} субагентов, всего {count}",
  "chat.summaryPanel.goalIterationValue": "Итерация {count}",
  "chat.summaryPanel.todoGoalIterationGroup": "Итерация {count}",
  "chat.summaryPanel.todoSessionGroup": "Сессия",
  "chat.statusPanel.environment": "Инструменты Git",
  "chat.statusPanel.changes": "Изменения",
  "chat.statusPanel.branch": "Ветка",
  "chat.statusPanel.commitPush": "Коммит / Пуш",
  "chat.statusPanel.clean": "Без изменений",
  "chat.statusPanel.goal": "Цель",
  "chat.statusPanel.sessionPlans": "Планы",
  "chat.statusPanel.planFallback": "План",
  "chat.statusPanel.openPlan": "Открыть план: {title}",
  "chat.statusPanel.todo": "Прогресс",
  "chat.statusPanel.todoCompletedExpanded": "Скрыть выполненные ({count})",
  "chat.statusPanel.todoCompletedFold": "Выполнено: {count}",
  "chat.statusPanel.todoEarlierFold": "Ранее: {count}",
  "chat.statusPanel.todoLaterFold": "Позже: {count}",
  "chat.statusPanel.todoWaitingExpanded": "Скрыть ожидающие ({count})",
  "chat.statusPanel.todoWaitingFold": "Ожидают: {count}",
  "chat.statusPanel.terminals": "Терминалы",
  "chat.statusPanel.agents": "Агенты",
  "chat.statusPanel.workflows": "Воркфлоу",
  "chat.statusPanel.runningStatusValue": "В фоне: {count}",
  "chat.statusPanel.runningStatusValuePlural": "В фоне: {count}",
  "chat.statusPanel.runningAgentsValue": "Выполняется: {count}",
  "chat.statusPanel.runningAgentsValuePlural": "Выполняется: {count}",
  "chat.statusPanel.runningStop": "Остановить",
  "chat.toolbar.model.label": "Выбрать модель",
  "chat.toolbar.draftConfigWriteFailed":
    "Не удалось обновить конфигурацию. Попробуйте ещё раз.",
  "chat.toolbar.model.description":
    "Выбор модели, используемой этой задачей. Сочетание клавиш открывает меню моделей.",
  "chat.toolbar.model.manageModels": "Управление моделями",
  "chat.toolbar.model.searchPlaceholder": "Поиск моделей...",
  "chat.toolbar.model.empty": "Модели не найдены",
  "chat.toolbar.modelSwitch.stage.settingModel": "Переключение модели...",
  "chat.toolbar.modelSwitch.stage.fallbackConfigOption":
    "Откат к API параметров конфигурации...",
  "chat.toolbar.modelSwitch.stage.applyingCustomProvider":
    "Применение пользовательского провайдера моделей...",
  "chat.toolbar.modelSwitch.stage.restartingRuntime":
    "Перезапуск среды выполнения моделей...",
  "chat.toolbar.modelSwitch.stage.syncingSession":
    "Синхронизация модели сессии...",
  "chat.toolbar.modelSwitch.stage.persistingWorkspace":
    "Сохранение модели по умолчанию для проекта...",
  "chat.toolbar.modelSwitch.lockedByRunningTask":
    "Выполняется задача. Завершите её, прежде чем переключать провайдера моделей.",
  "chat.toolbar.modelSwitch.lockedByRunningTask.short": "занято",
  "chat.goal.runningBlocked": "Задайте цель после завершения текущей задачи.",
  "chat.goal.planModeBlocked":
    "Цель недоступна в режиме плана. Переключите режим, чтобы продолжить.",
  "chat.plan.attachmentsBlocked":
    "Команда /plan пока поддерживает только текст. Удалите вложения или контекст и попробуйте снова.",
  "chat.compact.runningBlocked":
    "Сожмите контекст после завершения текущей задачи.",
  "chat.compact.queued":
    "Сжатие поставлено в очередь и выполнится по порядку.",
  "chat.compact.duplicateBlocked":
    "Сжатие контекста уже выполняется или стоит в очереди.",
  "chat.modelSwitch.contextWindowGuard.title":
    "Сжатие контекста перед переключением модели",
  "chat.modelSwitch.contextWindowGuard.description":
    "Контекст этого диалога достиг {used} токенов, что превышает доступный контекст модели {modelName} — {target} токенов после резерва под максимальный вывод.\nСначала сожмите текущий диалог текущей моделью. Если сжатый контекст поместится, ZCode продолжит переключение моделей.",
  "chat.modelSwitch.contextWindowGuard.compress": "Сжать",
  "chat.modelSwitch.contextWindowGuard.runningBlocked":
    "Контекст этого диалога превышает доступный контекст целевой модели после резерва под максимальный вывод. Перед переключением модели диалог нужно сжать, но текущая задача ещё выполняется и сжатие сейчас невозможно. Дождитесь завершения задачи и повторите переключение модели.",
  "chat.modelSwitch.contextWindowGuard.stillTooLarge":
    "После сжатия контекст этого диалога всё ещё превышает доступный контекст целевой модели после резерва под максимальный вывод. Переключение модели отменено.",
  "chat.toolbar.mode.label": "Сменить режим",
  "chat.toolbar.computerUse.label": "Computer Use",
  "chat.toolbar.computerUse.tooltip.idle":
    "Computer Use неактивен — запустится автоматически при первом использовании",
  "chat.toolbar.computerUse.tooltip.starting":
    "Включение плагина Computer Use…",
  "chat.toolbar.computerUse.tooltip.ready":
    "Computer Use готов — просто опишите, что вы хотите от ZCode",
  "chat.toolbar.computerUse.tooltip.permissionRequired":
    "Не хватает разрешений macOS — нажмите, чтобы выдать",
  "chat.toolbar.computerUse.tooltip.error":
    "Не удалось включить Computer Use. Перезапустите приложение ZCode и повторите попытку либо попросите ZCode изучить логи",
  "chat.toolbar.computerUse.tooltip.sessionBusy":
    "Выполняется диалог. Сейчас нельзя переключить Computer Use — попробуйте после его завершения.",
  "chat.toolbar.mode.description":
    "Переключает режим разрешений и выполнения задачи: «по умолчанию», «план», «автопринятие правок».",
  "chat.toolbar.thoughtLevel.label": "Уровень рассуждений",
  "chat.toolbar.thoughtLevel.tooltip": "Уровень рассуждений",
  "chat.toolbar.thoughtLevel.placeholder": "Выберите уровень рассуждений",
  "chat.toolbar.thoughtLevel.description":
    "Регулирует, насколько глубоко агент размышляет перед ответом. Более высокий уровень обычно стабильнее, но медленнее.",
  "chat.toolbar.thoughtLevel.value.off": "Выкл.",
  "chat.toolbar.thoughtLevel.value.on": "Вкл.",
  "chat.toolbar.thoughtLevel.value.minimal": "Минимальный",
  "chat.toolbar.thoughtLevel.value.low": "Низкий",
  "chat.toolbar.thoughtLevel.value.medium": "Средний",
  "chat.toolbar.thoughtLevel.value.high": "Высокий",
  "chat.toolbar.thoughtLevel.value.xhigh": "Очень высокий",
  "chat.toolbar.thoughtLevel.value.max": "Максимум",
  "chat.toolbar.thoughtLevel.value.ultra": "Ультра",
  "chat.longRunning.expand": "Развернуть панель длительных задач",
  "chat.longRunning.collapse": "Свернуть панель длительных задач",
  "chat.longRunning.elapsedSeconds": "Выполняется {seconds} с",
  "chat.longRunning.elapsedMinutesSeconds":
    "Выполняется {minutes} мин {seconds} с",
  "chat.toolCall.status.pending": "Ожидает",
  "chat.toolCall.status.running": "Выполняется",
  "chat.toolCall.status.completed": "Завершено",
  "chat.toolCall.status.failed": "Ошибка",
  "chat.toolCall.status.denied": "Отклонено",
  "chat.toolCall.status.stopped": "Остановлено",
  "chat.toolCall.expandDetails": "Развернуть детали инструмента",
  "chat.toolCall.collapseDetails": "Свернуть детали инструмента",
  "chat.toolCall.childCount": "Дочерних инструментов: {count}",
  "chat.toolCall.loading": "Загрузка…",
  "chat.toolCall.planFile": "Файл плана",
  "chat.toolCall.result": "Результат",
  "chat.toolCall.mcp.callDetails": "Показать детали вызова",
  "chat.toolCall.mcp.result": "Результат",
  "chat.toolCall.mcp.copyResult": "Копировать результат",
  "chat.toolCall.mcp.wrapLines": "Перенос строк",
  "chat.toolCall.mcp.description": "Описание",
  "chat.toolCall.mcp.parameters": "Параметры",
  "chat.toolCall.toolCall": "Вызов инструмента",
  "chat.toolCall.kind.read": "Чтение",
  "chat.toolCall.kind.search": "Поиск",
  "chat.toolCall.kind.write": "Запись",
  "chat.toolCall.kind.edit": "Изменение",
  "chat.toolCall.kind.delete": "Удаление",
  "chat.toolCall.kind.terminal": "Терминал",
  "chat.toolCall.kind.skill": "Скилл",
  "chat.toolCall.kind.sessionContext": "Контекст сессии",
  "chat.toolCall.kind.nodeRepl": "Node.js",
  "chat.toolCall.kind.message": "Сообщение",
  "chat.toolCall.kind.response": "Ответ",
  "chat.toolCall.kind.taskOutput": "Вывод задачи",
  "chat.toolCall.kind.taskStop": "Остановка задачи",
  "chat.toolCall.kind.todo": "Список задач",
  "chat.toolCall.goal.label": "Цель",
  "chat.toolCall.edit.writing": "Запись",
  "chat.toolCall.edit.wrote": "Записано",
  "chat.toolCall.edit.updating": "Обновление",
  "chat.toolCall.edit.updated": "Обновлено",
  "chat.toolCall.edit.deleting": "Удаление",
  "chat.toolCall.edit.deleted": "Удалено",
  "chat.toolCall.edit.editing": "Изменение",
  "chat.toolCall.edit.edited": "Изменено",
  "chat.toolCall.edit.multipleFiles": "Файлов: {count}",
  "chat.toolCall.snapshot.notice":
    "Обрезано полей инструмента: {fields}. Показан предпросмотр {previewBytes} / {fullBytes}.",
  "chat.toolCall.snapshot.loadFull": "Загрузить полные данные инструмента",
  "chat.toolCall.snapshot.loading": "Загрузка…",
  "chat.toolCall.snapshot.retry": "Не удалось загрузить, повторить",
  "chat.toolCall.execute.running": "Выполняется",
  "chat.toolCall.execute.ran": "Выполнено",
  "chat.toolCall.execute.execute": "Выполнить",
  "chat.toolCall.executeGroup.label": "Терминал",
  "chat.toolCall.changesGroup.label": "Изменения",
  "chat.toolCall.changesGroup.file.one": "{count} файл",
  "chat.toolCall.changesGroup.file.other": "{count} файлов",
  "chat.toolCall.changesGroup.tool.one": "{count} инструмент",
  "chat.toolCall.changesGroup.tool.other": "{count} инструментов",
  "chat.toolCall.execute.terminal": "Терминал",
  "chat.toolCall.execute.noOutput": "Нет вывода.",
  "chat.toolCall.executeGroup.command.one": "{count} команда",
  "chat.toolCall.executeGroup.command.other": "{count} команд",
  "chat.toolCall.executeGroup.failed": "С ошибкой: {count}",
  "chat.toolCall.executeGroup.stopped": "Остановлено: {count}",
  "chat.toolCall.nodeRepl.processing": "Выполняется",
  "chat.toolCall.nodeRepl.completed": "Завершено",
  "chat.toolCall.nodeRepl.finished": "Операция завершена",
  "chat.toolCall.nodeRepl.failed": "Сбой операции",
  "chat.toolCall.nodeRepl.denied": "Операция не выполнена",
  "chat.toolCall.nodeRepl.stopped": "Операция остановлена",
  "chat.toolCall.nodeRepl.resetting": "Сброс среды выполнения",
  "chat.toolCall.nodeRepl.reset": "Среда выполнения сброшена",
  "chat.toolCall.nodeRepl.resetFailed": "Не удалось сбросить среду выполнения",
  "chat.toolCall.nodeRepl.configuring": "Настройка рабочей директории",
  "chat.toolCall.nodeRepl.configured": "Рабочая директория настроена",
  "chat.toolCall.nodeRepl.configureFailed":
    "Не удалось настроить рабочую директорию",
  "chat.toolCall.nodeRepl.result": "Результат",
  "chat.toolCall.nodeRepl.noResult": "Нет результата для отображения.",
  "chat.toolCall.nodeRepl.details": "Показать детали выполнения",
  "chat.toolCall.nodeRepl.detailContent": "Детали выполнения",
  "chat.toolCall.nodeRepl.technicalDetails": "Технические детали",
  "chat.toolCall.nodeRepl.copyResult": "Копировать результат",
  "chat.toolCall.nodeRepl.copyDetails": "Копировать детали выполнения",
  "chat.toolCall.nodeRepl.wrapLines": "Перенос строк",
  "chat.toolCall.nodeRepl.resultImage": "Изображение результата",
  "chat.toolCall.nodeRepl.fullResult": "Полный результат сохранён ({size})",
  "chat.toolCall.nodeRepl.openFullResult": "Показать полный результат",
  "chat.toolCall.sendMessage.sending": "Отправка",
  "chat.toolCall.sendMessage.sent": "Отправлено",
  "chat.toolCall.sendMessage.failed": "Не удалось отправить сообщение",
  "chat.toolCall.sendMessage.denied": "Отправка отклонена",
  "chat.toolCall.sendMessage.stopped": "Отправка остановлена",
  "chat.toolCall.sendMessage.target": "Целевой субагент",
  "chat.toolCall.sendMessage.summary": "Сводка",
  "chat.toolCall.sendMessage.message": "Сообщение",
  "chat.toolCall.sendMessage.to": "кому",
  "chat.toolCall.respondToCoordinator.replying": "Отправка ответа",
  "chat.toolCall.respondToCoordinator.queued": "Ответ добавлен в очередь",
  "chat.toolCall.respondToCoordinator.completed": "Ответ отправлен",
  "chat.toolCall.respondToCoordinator.failed": "Не удалось отправить ответ",
  "chat.toolCall.respondToCoordinator.denied": "Ответ отклонён",
  "chat.toolCall.respondToCoordinator.stopped": "Отправка ответа остановлена",
  "chat.toolCall.submitResult.submitting": "Отправка результата",
  "chat.toolCall.submitResult.submitted": "Результат отправлен",
  "chat.toolCall.submitResult.rejected": "Результат отклонён",
  "chat.toolCall.submitResult.stopped": "Отправка результата остановлена",
  "chat.toolCall.submitResult.resultHeading": "Отправленный результат",
  "chat.toolCall.taskOutput.fetching": "Получение вывода",
  "chat.toolCall.taskOutput.completed": "Завершено",
  "chat.toolCall.taskOutput.retrieved": "Вывод получен",
  "chat.toolCall.taskOutput.running": "Задача выполняется",
  "chat.toolCall.taskOutput.timeout": "Время ожидания истекло",
  "chat.toolCall.taskOutput.failed": "Не удалось получить вывод",
  "chat.toolCall.taskOutput.taskFailed": "Задача завершилась с ошибкой",
  "chat.toolCall.taskOutput.denied": "Получение отклонено",
  "chat.toolCall.taskOutput.stopped": "Получение остановлено",
  "chat.toolCall.taskOutput.taskStopped": "Задача остановлена",
  "chat.toolCall.taskOutput.truncated": "Оставшийся вывод опущен.",
  "chat.toolCall.taskStop.stopping": "Остановка",
  "chat.toolCall.taskStop.stopped": "Остановлено",
  "chat.toolCall.taskStop.failed": "Не удалось остановить задачу",
  "chat.toolCall.taskStop.denied": "Остановка отклонена",
  "chat.toolCall.taskStop.cancelled": "Остановка отменена",
  "chat.toolCall.taskStop.taskType": "Тип задачи",
  "chat.toolCall.taskStop.command": "Команда",
  "chat.toolCall.taskStop.description": "Описание задачи",
  "chat.toolCall.taskStop.result": "Результат",
  "chat.toolCall.taskStop.truncated": "Часть деталей задачи обрезана.",
  "chat.toolCall.skill.running": "Выполняется скилл",
  "chat.toolCall.skill.ran": "Скилл выполнен",
  "chat.toolCall.skill.label": "Скилл",
  "chat.toolCall.skill.args": "Аргументы",
  "chat.toolCall.skill.unknown": "Неизвестный скилл",
  "chat.toolCall.skill.noOutput": "Нет вывода.",
  "chat.toolCall.workflow.writing": "Написание воркфлоу",
  "chat.toolCall.workflow.revising": "Изменение воркфлоу",
  "chat.toolCall.workflow.draft": "Черновик воркфлоу",
  "chat.toolCall.workflow.draftOrdinal": "черновик {ordinal}",
  "chat.toolCall.workflow.awaitingConfirmation":
    "Ожидание подтверждения воркфлоу",
  "chat.toolCall.workflow.amend.writing": "Внесение изменения в воркфлоу",
  "chat.toolCall.workflow.amend.revising": "Правка изменения",
  "chat.toolCall.workflow.amend.draft": "Черновик изменения",
  "chat.toolCall.workflow.amend.awaitingConfirmation":
    "Ожидание подтверждения изменения",
  "chat.toolCall.workflow.amend.ran": "Изменение воркфлоу",
  "chat.toolCall.workflow.amend.amended": "Воркфлоу изменён",
  "chat.toolCall.workflow.amend.amends": "Запуск изменений",
  "chat.toolCall.workflow.amend.scriptUnchanged": "скрипт без изменений",
  "chat.toolCall.workflow.running": "Проверка воркфлоу",
  "chat.toolCall.workflow.ran": "Воркфлоу",
  "chat.toolCall.workflow.fallbackName": "Скрипт воркфлоу",
  "chat.toolCall.workflow.feedback": "Замечания компилятора",
  "chat.toolCall.workflow.feedback.lede":
    "Проверка типов не пройдена, поэтому ничего не выполнялось. Замечания отправлены модели на доработку и повторную отправку.",
  "chat.toolCall.workflow.feedback.lede.saved":
    "Сохранённый файл воркфлоу не прошёл проверку типов, поэтому ничего не выполнялось. Замечания отправлены модели, чтобы исправить файл или сохранить исправленную версию.",
  "chat.toolCall.workflow.feedback.count": "{count} замечаний",
  "chat.toolCall.workflow.feedback.countOne": "{count} замечание",
  "chat.toolCall.workflow.feedback.rule": "правило {code}",
  "chat.toolCall.workflow.compiled": "скомпилирован",
  "chat.toolCall.workflow.toFix": "К исправлению: {count}",
  "chat.toolCall.workflow.notRun": "не запускался",
  "chat.toolCall.workflow.truncated": "Часть диагностик опущена.",
  "chat.toolCall.workflow.noScript": "Скрипт воркфлоу не передан.",
  "chat.toolCall.workflow.graph.truncated":
    "Граф слишком большой — часть участников не показана.",
  "chat.toolCall.workflow.graph.lane.script": "Скрипт",
  "chat.toolCall.workflow.graph.lane.unresolved": "Не определён",
  "chat.toolCall.workflow.graph.lane.anonymous": "Анонимный субагент",
  "chat.toolCall.workflow.graph.lane.anonymousIndexed":
    "Анонимный субагент {index}",
  "chat.toolCall.workflow.graph.card.tasks": "{count} задач",
  "chat.toolCall.workflow.graph.card.reads": "{count} чтений",
  "chat.toolCall.workflow.graph.status.running": "выполняется",
  "chat.toolCall.workflow.graph.status.done": "готово",
  "chat.toolCall.workflow.graph.status.failed": "ошибка",
  "chat.toolCall.workflow.graph.status.pending": "ожидается",
  "chat.toolCall.workflow.graph.phase.unphased": "Без фазы",
  "chat.toolCall.workflow.graph.phase.workflow": "Воркфлоу",
  "chat.toolCall.workflow.timeline.rounds": "проходов: {count}",
  "chat.toolCall.workflow.timeline.openAgent": "Открыть переписку {name}",
  "chat.toolCall.workflow.timeline.openScript":
    "Открыть шаги скрипта в фазе {phase}",
  "chat.toolCall.workflow.timeline.roster.done": "Готово: {count}",
  "chat.toolCall.workflow.timeline.roster.running": "Выполняется: {count}",
  "chat.toolCall.workflow.timeline.roster.failed": "С ошибкой: {count}",
  "chat.toolCall.workflow.timeline.roster.pending": "В ожидании: {count}",
  "chat.toolCall.workflow.timeline.roster.more": "Ещё {count}",
  "chat.toolCall.workflow.timeline.roster.moreTitle":
    "Ещё {count} субагентов · показать всех в панели запуска",
  "chat.toolCall.workflow.timeline.roster.door.list":
    "Ещё {count} субагентов · показать списком здесь",
  "chat.toolCall.workflow.timeline.roster.door.fold":
    "Ещё {count} субагентов · свернуть",
  "chat.toolCall.workflow.timeline.roster.unlisted.one":
    "Ещё 1 агент не показан",
  "chat.toolCall.workflow.timeline.roster.unlisted.many":
    "Ещё {count} агентов не показано",
  "chat.toolCall.workflow.timeline.ledge.earlier":
    "{count} предыдущих фаз скрыто прокруткой",
  "chat.toolCall.workflow.timeline.ledge.later":
    "{count} следующих фаз скрыто прокруткой",
  "chat.toolCall.workflow.timeline.scrollbar": "Позиция прокрутки таймлайна",
  "chat.toolCall.workflow.card.started": "Воркфлоу запущен",
  "chat.toolCall.workflow.card.running": "Воркфлоу выполняется",
  "chat.toolCall.workflow.card.completed": "Воркфлоу успешно завершён",
  "chat.toolCall.workflow.card.errored": "Сбой воркфлоу",
  "chat.toolCall.workflow.card.stopped": "Воркфлоу остановлен",
  "chat.toolCall.workflow.card.superseded": "Воркфлоу заменён",
  "chat.toolCall.workflow.card.ended": "Воркфлоу завершён",
  "chat.toolCall.workflow.card.steps": "Шаги: {done}/{total}",
  "chat.toolCall.workflow.card.phase": "{count} фаза",
  "chat.toolCall.workflow.card.phases": "{count} фаз",
  "chat.toolCall.workflow.card.agent": "{count} агент",
  "chat.toolCall.workflow.card.agents": "{count} агентов",
  "chat.toolCall.workflow.card.agentWorking": "{count} агент работает",
  "chat.toolCall.workflow.card.agentsWorking": "{count} агентов работают",
  "chat.toolCall.workflow.card.tokens": "Токенов: {count}",
  "chat.toolCall.workflow.card.round": "раунд {count}",
  "chat.toolCall.workflow.card.rounds": "{count} раундов",
  "chat.toolCall.workflow.card.artifact": "{count} артефакт",
  "chat.toolCall.workflow.card.artifacts": "{count} артефактов",
  "chat.toolCall.workflow.digest.question": "{count} вопрос",
  "chat.toolCall.workflow.digest.questions": "{count} вопросов",
  "chat.toolCall.workflow.digest.showAgents": "Показать субагентов",
  "chat.toolCall.workflow.digest.hideAgents": "Скрыть субагентов",
  "chat.toolCall.workflow.completion.time": "время",
  "chat.toolCall.workflow.completion.tokens": "токены",
  "chat.toolCall.workflow.completion.subagents": "субагенты",
  "chat.toolCall.workflow.completion.phases": "фазы",
  "chat.toolCall.workflow.completion.unavailable": "Нет данных",
  "chat.toolCall.workflow.completion.moreArtifacts": "Ещё: {count}",
  "chat.toolCall.workflow.run.phase.expand": "Показать фазу {name}",
  "chat.toolCall.workflow.run.phase.collapse": "Скрыть фазу {name}",
  "chat.workflowLaunch.scope.project": "Проект",
  "chat.workflowLaunch.scope.global": "Глобальный",
  "chat.workflowLaunch.startedByYou": "Запущено вами из хаба воркфлоу",
  "chat.workflowLaunch.settingsChangedByYou": "Настройки изменены вами",
  "chat.workflowLaunch.settings.model": "Модель субагента",
  "chat.workflowLaunch.settings.limit": "Одновременно, не более",
  "chat.workflowLaunch.settings.sessionModel": "модель сессии",
  "chat.workflowLaunch.settings.machineLimit": "лимит этой машины",
  "chat.workflowLaunch.settings.machineLimitValue": "{n} (лимит этой машины)",
  "chat.toolCall.workflow.save.saving": "Сохранение воркфлоу",
  "chat.toolCall.workflow.save.saved": "Воркфлоу сохранён",
  "chat.toolCall.workflow.save.overwrite": "перезаписать",
  "chat.toolCall.workflow.save.scope.label": "Область действия",
  "chat.toolCall.workflow.save.scope.project": "Проект",
  "chat.toolCall.workflow.save.scope.global":
    "Глобальный · доступен из любого проекта",
  "chat.toolCall.workflow.save.scope.hidesGlobal":
    "Этот воркфлоу скроет глобальный воркфлоу с таким именем",
  "chat.toolCall.workflow.save.scope.hiddenByProject":
    "В этом проекте уже есть воркфлоу с таким именем — он скроет этот воркфлоу здесь",
  "chat.toolCall.workflow.scope.global": "Глобальный",
  "chat.toolCall.workflow.list.listing":
    "Получение списка сохранённых воркфлоу",
  "chat.toolCall.workflow.list.listed": "Сохранённые воркфлоу",
  "chat.toolCall.workflow.list.count": "{count} воркфлоу",
  "chat.toolCall.workflow.list.countOne": "{count} воркфлоу",
  "chat.toolCall.workflow.list.empty":
    "В этом проекте нет сохранённых воркфлоу",
  "chat.toolCall.workflow.list.invalid":
    "Не удалось прочитать файлов: {count}",
  "chat.toolCall.workflow.list.invalidOne":
    "Не удалось прочитать {count} файл",
  "chat.toolCall.workflow.models.listing": "Получение списка моделей",
  "chat.toolCall.workflow.models.listed": "Доступные модели",
  "chat.toolCall.workflow.models.count": "{count} моделей",
  "chat.toolCall.workflow.models.countOne": "{count} модель",
  "chat.toolCall.workflow.models.empty":
    "На этом хосте не настроено ни одной модели",
  "chat.toolCall.workflow.models.provider": "Провайдер",
  "chat.toolCall.workflow.models.current": "текущая",
  "chat.toolCall.workflow.models.levels":
    "Уровни рассуждений: {levels} (по умолчанию {default})",
  "chat.toolCall.workflow.models.levelsNoDefault":
    "Уровни рассуждений: {levels}",
  "chat.toolCall.workflow.models.noLevels": "Нет уровней рассуждений",
  "chat.toolCall.workflow.models.truncated": "Показаны не все модели",
  "automations.pageTab.ariaLabel": "Страница автоматизаций",
  "automations.pageTab.automation": "Автоматизации",
  "automations.pageTab.workflow": "Воркфлоу",
  "workflows.hub.description":
    "Воркфлоу, сохранённые в открытых проектах. Заполните аргументы и запустите их снова.",
  "workflows.hub.sectionTitle": "Сохранённые воркфлоу",
  "workflows.hub.refresh": "Обновить",
  "workflows.hub.createViaChat": "Создать в чате",
  "workflows.hub.group.current": "Текущий",
  "workflows.hub.global.title": "Глобальные",
  "workflows.hub.global.hint": "Видны из любого проекта",
  "workflows.hub.global.empty":
    "Глобальных воркфлоу пока нет. Они подходят для сценариев, не привязанных к конкретному проекту, например для глубоких исследований.",
  "workflows.hub.global.unsupported":
    "Текущий агент не поддерживает глобальные воркфлоу.",
  "workflows.hub.global.noLocalRuntime":
    "Не удалось связаться с локальным агентом, глобальные воркфлоу недоступны.",
  "workflows.hub.empty.title":
    "В открытых проектах пока нет сохранённых воркфлоу",
  "workflows.hub.empty.hint":
    "Создайте воркфлоу в чате с ZCode, а когда он будет готов, попросите сохранить его в проект. Проекты, которые не открыты, здесь не отображаются.",
  "workflows.hub.noWorkspace": "Откройте проект, чтобы увидеть его воркфлоу.",
  "workflows.hub.loadError": "Не удалось прочитать воркфлоу: {error}",
  "workflows.hub.invalid": "Не удалось прочитать файлы: {count}",
  "workflows.hub.invalidOne": "Не удалось прочитать файл: {count}",
  "workflows.hub.card.run": "Запустить",
  "workflows.hub.card.menu": "Другие действия",
  "workflows.hub.card.open": "Подробнее",
  "workflows.hub.card.revise": "Изменить в чате",
  "workflows.hub.card.copyPath": "Копировать путь",
  "workflows.hub.card.promoteToGlobal": "Сделать глобальным",
  "workflows.hub.card.moveToProject": "Переместить в проект…",
  "workflows.hub.card.delete": "Удалить воркфлоу",
  "workflows.hub.card.argsMore": "+{count}",
  "workflows.hub.lastRun.never": "Ещё не запускался",
  "workflows.hub.lastRun.completed": "Завершён",
  "workflows.hub.lastRun.errored": "С ошибкой",
  "workflows.hub.lastRun.running": "Выполняется",
  "workflows.hub.lastRun.stopped": "Остановлен",
  "workflows.hub.copied": "Путь скопирован",
  "workflows.hub.delete.title": "Удалить воркфлоу «{name}»?",
  "workflows.hub.delete.description":
    "Файл {path} будет удалён из проекта. Существующие записи запусков сохранятся.",
  "workflows.hub.delete.confirm": "Удалить",
  "workflows.hub.deleted": "Воркфлоу «{name}» удалён",
  "workflows.hub.deleteFailed": "Не удалось удалить: {reason}",
  "workflows.hub.promote.failed": "Не удалось сделать глобальным: {reason}",
  "workflows.hub.move.toast.project": "Воркфлоу перемещён в {project}",
  "workflows.hub.move.targetExists": "Воркфлоу с таким названием там уже есть",
  "workflows.hub.move.failed": "Не удалось переместить: {reason}",
  "workflows.hub.moveDialog.title": "Переместить в проект",
  "workflows.hub.moveDialog.noLocalProject":
    "Откройте локальный проект, чтобы переместить этот воркфлоу",
  "workflows.hub.moveDialog.submit": "Переместить",
  "workflows.hub.launch.title": "Запуск {name}",
  "workflows.hub.launch.target": "Запустить в",
  "workflows.hub.launch.noLocalProject":
    "Откройте локальный проект, чтобы запустить этот воркфлоу",
  "workflows.hub.launch.required": "Обязательный",
  "workflows.hub.launch.scope.project": "Проект",
  "workflows.hub.launch.scope.global": "Глобально",
  "workflows.hub.launch.note":
    "Запустится сразу в новой сессии в проекте {project}",
  "workflows.hub.launch.cancel": "Отмена",
  "workflows.hub.launch.submit": "Запустить",
  "workflows.hub.launch.error.required": "Обязательное поле",
  "workflows.hub.launch.error.unsupported":
    "Текущий агент не поддерживает прямой запуск воркфлоу",
  "workflows.hub.launch.error.generic": "Не удалось запустить воркфлоу",
  "workflows.hub.detail.tab.definition": "Определение",
  "workflows.hub.detail.tab.history": "История запусков",
  "workflows.hub.detail.projectColumn": "Проект",
  "workflows.hub.detail.copyPath": "Копировать путь",
  "workflows.hub.detail.run": "Запустить",
  "workflows.hub.detail.basics": "Основное",
  "workflows.hub.detail.description": "Описание",
  "workflows.hub.detail.whenToUse": "Когда использовать",
  "workflows.hub.detail.whenToUse.help":
    "Подсказка для ZCode: в каких случаях стоит выбирать этот воркфлоу.",
  "workflows.hub.detail.args": "Аргументы",
  "workflows.hub.detail.args.name": "Название",
  "workflows.hub.detail.args.type": "Тип",
  "workflows.hub.detail.args.required": "Обязательный",
  "workflows.hub.detail.args.default": "По умолчанию",
  "workflows.hub.detail.args.description": "Описание",
  "workflows.hub.detail.args.add": "Добавить аргумент",
  "workflows.hub.detail.args.remove": "Удалить аргумент",
  "workflows.hub.detail.meta.note":
    "Изменяются только метаданные в начале файла; тело скрипта остаётся без изменений.",
  "workflows.hub.detail.meta.discard": "Отменить изменения",
  "workflows.hub.detail.meta.save": "Сохранить метаданные",
  "workflows.hub.detail.meta.saved": "Метаданные сохранены",
  "workflows.hub.detail.meta.saveFailed": "Не удалось сохранить: {reason}",
  "workflows.hub.detail.meta.descriptionRequired": "Укажите описание",
  "workflows.hub.detail.script": "Скрипт",
  "workflows.hub.detail.script.note":
    "Скрипт доступен только для чтения. Чтобы изменить его, доработайте его с ZCode в чате и сохраните новую версию.",
  "workflows.hub.detail.script.copy": "Копировать скрипт",
  "workflows.hub.detail.loadError":
    "Не удалось прочитать этот воркфлоу: {reason}",
  "workflows.hub.detail.notFound": "Этого воркфлоу больше нет в проекте.",
  "workflows.hub.history.empty": "Запусков пока нет.",
  "workflows.hub.history.open": "Открыть запуск",
  "workflows.hub.history.note":
    "Записи запусков берутся из журнала воркфлоу этого проекта и сохраняются после перезапуска. «Открыть запуск» возвращает в чат, где он был запущен, и открывает детали запуска.",
  "workflows.hub.history.tokens": "Токенов: {tokens}",
  "workflows.hub.artifacts.latest": "Последние артефакты",
  "workflows.hub.time.duration.seconds": "{seconds} с",
  "workflows.hub.time.duration.minutes": "{minutes} мин {seconds} с",
  "chat.toolCall.workflow.getRun.fetching": "Проверка статуса воркфлоу",
  "chat.toolCall.workflow.getRun.runningNodes": "Выполняется узлов: {count}",
  "chat.toolCall.workflow.getRun.fetched": "Статус воркфлоу",
  "chat.toolCall.workflow.getRun.nodesLine":
    "Узлов: {observed} · готово: {done} · выполняется: {running} · с ошибками: {failed}",
  "chat.toolCall.workflow.getRun.section.actors": "Субагенты",
  "chat.toolCall.workflow.getRun.section.logTail": "Логи",
  "chat.toolCall.workflow.getRun.section.result": "Результат",
  "chat.toolCall.workflow.getRun.section.error": "Ошибка",
  "chat.toolCall.workflow.getRun.logEmpty": "Логов пока нет",
  "chat.toolCall.workflow.getRun.interruptedHint":
    "Эта сессия не может подтвердить, что этот запуск ещё активен: возможно, он был прерван.",
  "chat.toolCall.workflow.getRun.age": "{age} назад",
  "chat.toolCall.workflow.getRun.truncated":
    "Часть строк не поместилась на этой карточке.",
  "chat.toolCall.workflow.getRun.questionsUnknown":
    "Эта сессия не видит ожидающие вопросы этого запуска. При возобновлении запуска субагент заново задаст то, что ему нужно.",
  "chat.toolCall.workflow.getRun.phase.state.done": "завершено",
  "chat.toolCall.workflow.getRun.phase.state.current": "сейчас",
  "chat.toolCall.workflow.getRun.phase.state.ahead": "впереди",
  "chat.toolCall.workflow.getRun.phase.state.unfinished": "не завершено",
  "chat.toolCall.workflow.getRun.phase.rounds": "{count} раундов",
  "chat.toolCall.workflow.getRun.phase.roundsOne": "{count} раунд",
  "chat.toolCall.workflow.getRun.phase.settled": "Завершено: {count}",
  "chat.toolCall.workflow.getRun.phase.running": "Выполняется: {count}",
  "chat.toolCall.workflow.getRun.phase.unfinished": "Не завершено: {count}",
  "chat.toolCall.workflow.getRun.phase.soFar": "Прошло: {duration}",
  "chat.toolCall.workflow.getRun.subagent.state.idle": "простаивает",
  "chat.toolCall.workflow.getRun.subagent.state.executing": "выполняется",
  "chat.toolCall.workflow.getRun.subagent.state.waiting": "ожидает",
  "chat.toolCall.workflow.getRun.subagent.state.parked": "ждёт ответа",
  "chat.toolCall.workflow.getRun.subagent.state.done": "готов",
  "chat.toolCall.workflow.getRun.subagent.state.failed": "ошибка",
  "chat.toolCall.workflow.getRun.subagent.state.unfinished": "не завершён",
  "chat.toolCall.workflow.getRun.subagent.phase": "фаза {name}",
  "chat.toolCall.workflow.getRun.subagent.parkedOn": "на вопросе {qid}",
  "chat.toolCall.workflow.getRun.subagent.waitingSlot": "ждёт свободный слот",
  "chat.toolCall.workflow.getRun.subagent.waitingBackoff":
    "пауза перед повтором",
  "chat.toolCall.workflow.getRun.subagent.waitedFor": "уже {age}",
  "chat.toolCall.workflow.getRun.subagent.retryIn": "повтор через {duration}",
  "chat.toolCall.workflow.getRun.subagent.inFlightAtStop":
    "выполнялся на момент остановки",
  "chat.toolCall.workflow.getRun.subagent.onStep": "{age} на этом шаге",
  "chat.toolCall.workflow.getRun.subagent.turn": "ход {count}",
  "chat.toolCall.workflow.getRun.subagent.toolCalls":
    "{count} вызовов инструментов",
  "chat.toolCall.workflow.getRun.subagent.toolCallsOne":
    "{count} вызов инструмента",
  "chat.toolCall.workflow.getRun.subagent.lastTool": "последний вызов {name}",
  "chat.toolCall.workflow.getRun.subagent.steps": "{count} шагов",
  "chat.toolCall.workflow.getRun.subagent.stepsOne": "{count} шаг",
  "chat.toolCall.workflow.getRun.subagent.stepsFailed": "{count} с ошибкой",
  "chat.toolCall.workflow.getRun.subagent.task": "задача: {task}",
  "chat.toolCall.workflow.getRun.health.lastProgress":
    "последний прогресс: {age} назад",
  "chat.toolCall.workflow.getRun.health.concurrency":
    "параллелизм {effective}/{cap}",
  "chat.toolCall.workflow.getRun.health.concurrencySince": "уже {age}",
  "chat.toolCall.workflow.getRun.health.stalled": "завис уже {age}",
  "chat.toolCall.workflow.getRun.health.stalledNoClock": "завис",
  "chat.toolCall.workflow.getRun.health.notStalled": "не завис",
  "chat.toolCall.workflow.getRun.health.failures": "Неудач подряд: {count}",
  "chat.toolCall.workflow.getRun.health.failuresOne": "{count} неудача подряд",
  "chat.toolCall.workflow.getRun.health.cachedSteps":
    "Кэшированных шагов: {count}",
  "chat.toolCall.workflow.getRun.health.cachedStepsOne":
    "{count} кэшированный шаг",
  "chat.toolCall.workflow.getRun.health.leftover":
    "Шаги ниже, отмеченные как выполняющиеся ({count}), — это остатки завершившегося процесса, а не текущая работа.",
  "chat.toolCall.workflow.getRun.health.leftoverOne":
    "Шаг ниже, отмеченный как выполняющийся, — это остаток завершившегося процесса, а не текущая работа.",
  "chat.toolCall.workflow.resumeRun.resuming":
    "Возобновление запуска воркфлоу",
  "chat.toolCall.workflow.resumeRun.label": "Запуск воркфлоу возобновлён",
  "chat.toolCall.workflow.resumeRun.inBackground": "Выполняется в фоне",
  "chat.toolCall.workflow.resumeRun.hint":
    "Запуск продолжится под тем же ID: завершённые шаги восстановятся из журнала, незавершённые выполнятся заново. Придёт уведомление о завершении с итоговым результатом.",
  "chat.toolCall.workflow.listRuns.listing":
    "Получение списка запусков воркфлоу",
  "chat.toolCall.workflow.listRuns.listed": "Запуски воркфлоу",
  "chat.toolCall.workflow.listRuns.count": "{count} запусков",
  "chat.toolCall.workflow.listRuns.countOne": "{count} запуск",
  "chat.toolCall.workflow.listRuns.empty": "Запусков воркфлоу пока нет",
  "chat.toolCall.workflow.listRuns.truncated":
    "Показаны только последние запуски",
  "chat.toolCall.workflow.listRuns.ownSession": "эта сессия",
  "chat.toolCall.workflow.listRuns.interrupted": "возможно, прерван",
  "chat.toolCall.workflow.snippet.validating": "Выполнение фрагмента воркфлоу",
  "chat.toolCall.workflow.snippet.ran": "Фрагмент воркфлоу",
  "chat.toolCall.workflow.snippet.passed": "УСПЕШНО",
  "chat.toolCall.workflow.snippet.section.code": "Код",
  "chat.toolCall.workflow.snippet.section.logs": "Логи",
  "chat.toolCall.workflow.snippet.section.response": "Возвращаемое значение",
  "chat.toolCall.workflow.snippet.logsEmpty": "Нет логов",
  "chat.backgroundResult.workflow.completed": "Воркфлоу завершён",
  "chat.backgroundResult.workflow.errored": "Воркфлоу завершился с ошибкой",
  "chat.backgroundResult.workflow.stopped": "Воркфлоу остановлен",
  "chat.backgroundResult.workflow.stall": "Воркфлоу ожидает ответа модели",
  "chat.backgroundResult.workflow.stall.body":
    "Ни один запрос к модели в этом запуске не был успешным уже {minutes} мин. Запуск продолжается и повторяет попытки с задержкой; если он больше не нужен, остановите его из карточки запуска.",
  "chat.backgroundResult.workflow.stall.reason": "Причина повторной попытки",
  "chat.backgroundResult.workflow.stall.cap": "Текущий fan-out",
  "chat.backgroundResult.workflow.waiting": "Субагент ожидает ответа",
  "chat.backgroundResult.workflow.answered": "Вопрос субагента отвечен",
  "chat.backgroundResult.workflow.asked": "Субагент задал вопрос",
  "chat.backgroundResult.workflow.artifacts.more": "+{count}",
  "chat.toolCall.workflow.escalate.asking": "Запрос основному агенту",
  "chat.toolCall.workflow.escalate.asked": "Запрошен основной агент",
  "chat.toolCall.workflow.escalate.question": "Вопрос",
  "chat.toolCall.workflow.escalate.context": "Контекст",
  "chat.toolCall.workflow.escalate.answer": "Ответ",
  "chat.toolCall.workflow.escalate.fallbackName": "Вопрос",
  "chat.toolCall.workflow.resolveQuestion.answering": "Ответ на вопрос",
  "chat.toolCall.workflow.resolveQuestion.answered": "Вопрос отвечен",
  "chat.toolCall.workflow.resolveQuestion.questionId": "ID вопроса",
  "chat.toolCall.workflow.resolveQuestion.answer": "Ответ",
  "chat.toolCall.workflow.resolveQuestion.outcome": "Итог",
  "chat.toolCall.workflow.resolveQuestion.fallbackName": "Ответ",
  "chat.toolCall.workflow.openRunDetails": "Открыть детали запуска",
  "chat.toolCall.workflow.run.status.pending": "Ожидается",
  "chat.toolCall.workflow.run.status.running": "Выполняется",
  "chat.toolCall.workflow.run.status.completed": "Завершён",
  "chat.toolCall.workflow.run.status.errored": "С ошибкой",
  "chat.toolCall.workflow.run.status.stopped": "Остановлен",
  "chat.toolCall.workflow.run.stopReason.user": "вами",
  "chat.toolCall.workflow.run.stopReason.model": "агентом",
  "chat.toolCall.workflow.run.stopReason.provider": "ошибка модели",
  "chat.toolCall.workflow.run.stopReason.interrupted": "процесс завершился",
  "chat.toolCall.workflow.run.stopReason.superseded": "заменён",
  "chat.toolCall.workflow.run.resumable": "можно возобновить",
  "chat.toolCall.workflow.run.amends": "Изменяет запуск",
  "chat.toolCall.workflow.run.supersededBy": "Заменён запуском",
  "chat.toolCall.workflow.run.outcome.ok": "успех",
  "chat.toolCall.workflow.run.outcome.failed": "ошибка",
  "chat.toolCall.workflow.run.outcome.cancelled": "отменён",
  "chat.toolCall.workflow.run.usage.label": "Использование",
  "chat.toolCall.workflow.run.usage.tokens": "{tokens} токенов",
  "chat.toolCall.workflow.run.usage.value": "{tokens} токенов · {steps} шагов",
  "chat.toolCall.workflow.run.truncated":
    "Показаны детали для {shown} из {total} шагов",
  "chat.toolCall.workflow.run.cancel": "Остановить запуск",
  "chat.toolCall.workflow.run.cancelling": "Остановка…",
  "chat.toolCall.workflow.run.cancelDisabled":
    "Остановить можно только выполняющийся воркфлоу.",
  "chat.toolCall.workflow.run.stopHint":
    "Позже запуск можно возобновить; завершённые шаги сохранятся.",
  "chat.toolCall.workflow.run.rejection.cancel.unsupported":
    "Этот агент не умеет останавливать запуски воркфлоу.",
  "chat.toolCall.workflow.run.rejection.cancel.generic":
    "Не удалось остановить запуск ({code}).",
  "chat.toolCall.workflow.run.rejection.resume.superseded":
    "Этот запуск заменён исправленной версией; откройте вместо него новую.",
  "chat.toolCall.workflow.run.rejection.resume.unsupported":
    "Этот агент не умеет возобновлять запуски воркфлоу.",
  "chat.toolCall.workflow.run.rejection.resume.generic":
    "Не удалось возобновить запуск ({code}).",
  "chat.toolCall.workflow.run.resume": "Возобновить запуск",
  "chat.toolCall.workflow.run.resumeHint":
    "Продолжает с места остановки: завершённые шаги используются повторно, прерванные выполняются заново.",
  "chat.toolCall.workflow.run.configure": "Настроить",
  "chat.toolCall.workflow.run.settings.title": "Настройка воркфлоу",
  "chat.toolCall.workflow.run.settings.model": "Модель субагента",
  "chat.toolCall.workflow.run.settings.model.session": "модель сессии",
  "chat.toolCall.workflow.run.settings.model.sessionFallback": "Модель сессии",
  "chat.toolCall.workflow.run.settings.model.unavailable": "недоступна",
  "chat.toolCall.workflow.run.settings.model.noCatalog":
    "У этого агента нет каталога моделей; субагенты остаются на модели сессии.",
  "chat.toolCall.workflow.run.settings.limit":
    "Субагентов одновременно, не более",
  "chat.toolCall.workflow.run.settings.limit.ceiling":
    "эта машина допускает до {n}",
  "chat.toolCall.workflow.run.settings.limit.atCeiling": "= лимит этой машины",
  "chat.toolCall.workflow.run.settings.limit.decrease": "Меньше одновременно",
  "chat.toolCall.workflow.run.settings.limit.increase": "Больше одновременно",
  "chat.toolCall.workflow.run.settings.consequence.running":
    "Остановит текущий запуск и начнёт новый с этими настройками; завершённые шаги сохранятся.",
  "chat.toolCall.workflow.run.settings.consequence.pending":
    "Создаст новый запуск с этими настройками; текущий ещё не начал ни одного шага.",
  "chat.toolCall.workflow.run.settings.consequence.stopped":
    "Продолжится как новый запуск с этими настройками; завершённые шаги сохранятся.",
  "chat.toolCall.workflow.run.settings.consequence.errored":
    "Повторится как новый запуск с этими настройками; завершённые шаги сохранятся.",
  "chat.toolCall.workflow.run.settings.consequence.concurrencyLive":
    "Применится к текущему запуску сразу; новый запуск не создаётся.",
  "chat.toolCall.workflow.run.settings.apply": "Применить",
  "chat.toolCall.workflow.run.settings.applying": "Применение…",
  "chat.toolCall.workflow.run.settings.rejection.unchanged":
    "Это текущие настройки запуска.",
  "chat.toolCall.workflow.run.settings.rejection.unsupported":
    "Этот агент не может менять настройки воркфлоу отсюда.",
  "chat.toolCall.workflow.run.settings.rejection.generic":
    "Не удалось изменить настройки ({code}).",
  "chat.toolCall.workflow.settingsChange.kind": "Настройки изменены",
  "chat.toolCall.workflow.settingsChange.model": "субагенты на {model}",
  "chat.toolCall.workflow.settingsChange.modelSession":
    "субагенты снова на модели сессии",
  "chat.toolCall.workflow.settingsChange.limit": "не более {n} одновременно",
  "chat.toolCall.workflow.settingsChange.limitCeiling":
    "лимит снова по умолчанию для этой машины",
  "chat.toolCall.workflow.run.result.title": "Результат",
  "chat.toolCall.workflow.run.result.completedHint":
    "Этот запуск завершён. Его результат доставлен в чат как фоновое сообщение с результатом.",
  "chat.toolCall.workflow.run.result.erroredTitle":
    "Запуск завершился с ошибкой",
  "chat.toolCall.workflow.run.result.stoppedTitle": "Запуск остановлен",
  "chat.toolCall.workflow.run.result.noError": "Детали ошибки не записаны.",
  "chat.toolCall.workflow.run.artifacts.title": "Артефакты",
  "chat.toolCall.workflow.run.artifacts.expand": "Показать артефакты",
  "chat.toolCall.workflow.run.artifacts.collapse": "Скрыть артефакты",
  "chat.toolCall.workflow.run.artifacts.kind.file": "Файл",
  "chat.toolCall.workflow.run.artifacts.kind.markdown": "Документ",
  "chat.toolCall.workflow.run.artifacts.kind.chart": "Диаграмма",
  "chat.toolCall.workflow.run.artifacts.kind.table": "Таблица",
  "chat.toolCall.workflow.run.artifacts.kind.metrics": "Метрики",
  "chat.toolCall.workflow.run.artifacts.kind.board": "Доска",
  "chat.toolCall.workflow.run.artifacts.version": "v{version}",
  "chat.toolCall.workflow.run.artifacts.versionTail": "v{version}",
  "chat.toolCall.workflow.run.artifacts.versionOf": "v{version} из {total}",
  "chat.toolCall.workflow.run.artifacts.previousVersion": "Предыдущая версия",
  "chat.toolCall.workflow.run.artifacts.nextVersion": "Следующая версия",
  "chat.toolCall.workflow.run.artifacts.open": "Открыть артефакт",
  "chat.toolCall.workflow.run.artifacts.reveal": "Показать в проекте",
  "chat.toolCall.workflow.run.artifacts.copy": "Копировать",
  "chat.toolCall.workflow.run.artifacts.copied": "Скопировано",
  "chat.toolCall.workflow.run.artifacts.openInBrowser": "Открыть в браузере",
  "chat.toolCall.workflow.run.artifacts.openInBrowserNote":
    "Открывает копию из вашего проекта, а не данные, закреплённые за этой версией.",
  "chat.toolCall.workflow.run.artifacts.localOnly":
    "Предпросмотр доступен только в локальном проекте.",
  "chat.toolCall.workflow.run.artifacts.loading": "Загрузка артефакта…",
  "chat.toolCall.workflow.run.artifacts.missing":
    "Этот артефакт больше недоступен.",
  "chat.toolCall.workflow.run.artifacts.loadError":
    "Не удалось загрузить этот артефакт.",
  "chat.toolCall.workflow.run.artifacts.unsupported":
    "Предпросмотр для этого типа файлов недоступен. Файл остаётся доступным в проекте.",
  "chat.toolCall.workflow.run.artifacts.presetInvalid":
    "Это определение дашборда невозможно отобразить.",
  "chat.toolCall.workflow.run.artifacts.unavailable":
    "Сведения об артефактах недоступны в этом чате.",
  "chat.toolCall.workflow.run.artifacts.preset.otherColumn": "Другое",
  "chat.toolCall.workflow.run.artifacts.preset.empty": "Данных пока нет",
  "chat.toolCall.workflow.run.artifacts.preset.items": "{count} элементов",
  "chat.toolCall.workflow.run.questions.title": "Ожидание ответа",
  "chat.toolCall.workflow.run.graph.unavailable":
    "Граф воркфлоу отсутствует в видимой истории этого чата.",
  "chat.toolCall.workflow.run.untracked.title": "Больше не отслеживается",
  "chat.toolCall.workflow.run.untracked.body":
    "Этот запуск не входит в число последних запусков, отслеживаемых в реальном времени. Его запись сохранена полностью.",
  "chat.toolCall.workflow.script.title": "Скрипт",
  "chat.toolCall.workflow.script.notStarted.title":
    "Скрипт пока ничего не выполнил",
  "chat.toolCall.workflow.script.notStarted.body":
    "Чтения, поиски и команды появятся здесь, как только скрипт обратится к проекту.",
  "chat.toolCall.workflow.script.summary.phases": "{count} фаз",
  "chat.toolCall.workflow.script.summary.phases.one": "1 фаза",
  "chat.toolCall.workflow.script.summary.steps": "{count} шагов",
  "chat.toolCall.workflow.script.summary.steps.one": "1 шаг",
  "chat.toolCall.workflow.script.verb.read": "Чтение",
  "chat.toolCall.workflow.script.verb.searched": "Поиск",
  "chat.toolCall.workflow.script.search.in": "в",
  "chat.toolCall.workflow.script.startedAgo": "запущен {ago} назад",
  "chat.toolCall.workflow.script.now": "сейчас",
  "chat.toolCall.workflow.script.result.more": "… ещё {count}",
  "chat.toolCall.workflow.script.unavailable":
    "Эта сессия не может показать шаги скрипта. Обновите CLI, чтобы увидеть их.",
  "chat.toolCall.workflow.script.loadFailed":
    "Не удалось загрузить шаги скрипта: {error}",
  "chat.toolCall.workflow.script.listTruncated":
    "Показаны только первые {count} шагов.",
  "chat.toolCall.workflow.script.kind.step": "Шаг",
  "chat.toolCall.workflow.script.status.exit": "код выхода {code}",
  "chat.toolCall.workflow.script.status.timedOut": "тайм-аут",
  "chat.toolCall.workflow.script.status.replayed": "воспроизведён",
  "chat.toolCall.workflow.script.status.replayedHint":
    "Воспроизведено из журнала более раннего запуска; команда не выполнялась повторно.",
  "chat.toolCall.workflow.script.result.files": "{count} файлов",
  "chat.toolCall.workflow.script.result.matches": "{count} совпадений",
  "chat.toolCall.workflow.script.result.lines": "{count} строк",
  "chat.toolCall.workflow.script.result.empty": "Ничего не найдено.",
  "chat.toolCall.workflow.script.result.loading": "Загрузка…",
  "chat.toolCall.workflow.script.result.loadFailed":
    "Не удалось загрузить результат: {error}",
  "chat.toolCall.workflow.script.result.truncated":
    "Показаны первые {shown} из {total}; полный результат остаётся в журнале.",
  "chat.toolCall.workflow.script.result.stderr": "stderr",
  "chat.toolCall.workflow.script.args.truncated":
    "Аргументы сокращены перед записью в журнал.",
  "chat.toolCall.workflow.run.actor.notStarted.title": "Ещё не запущен",
  "chat.toolCall.workflow.run.actor.notStarted.body":
    "Этому субагенту пока ничего не поручено. Как только будет отправлен его первый шаг, здесь появится переписка.",
  "chat.toolCall.workflow.run.event.runStarted": "Запуск начат",
  "chat.toolCall.workflow.run.event.actorCreated": "Субагент создан",
  "chat.toolCall.workflow.run.event.nodeQueued": "В очереди",
  "chat.toolCall.workflow.run.event.nodeDispatched": "Отправлен",
  "chat.toolCall.workflow.run.event.nodeRepairing":
    "Исправление (попытка {attempt})",
  "chat.toolCall.workflow.run.event.nodeNudged": "Напоминание отправлено",
  "chat.toolCall.workflow.run.event.nodeSettled": "Завершён · {outcome}",
  "chat.toolCall.workflow.run.event.nodeSettledCached":
    "Завершён · {outcome} (из кэша)",
  "chat.toolCall.workflow.run.event.usageUpdated": "Использование обновлено",
  "chat.toolCall.workflow.run.event.log": "Лог",
  "chat.toolCall.workflow.run.event.importCacheClosed":
    "Кэш закрыт из-за записи в проект",
  "chat.toolCall.workflow.run.event.report": "Отправил отчёт",
  "chat.toolCall.workflow.run.event.phaseEntered": "Вход в фазу",
  "chat.toolCall.workflow.run.event.escalationRaised":
    "Запрос основному агенту",
  "chat.toolCall.workflow.run.event.escalationResolved": "Отвечено",
  "chat.toolCall.workflow.run.event.runSettled": "Запуск завершён · {status}",
  "chat.toolCall.workflow.run.event.unknown": "{type}",
  "chat.toolCall.workflow.run.event.nodeWaitingSlot":
    "Ожидание свободного слота",
  "chat.toolCall.workflow.run.event.nodeWaitingBackoff":
    "Ожидание провайдера ({reason}) · повтор через {seconds} с",
  "chat.toolCall.workflow.run.event.nodeExecuting": "Запрос отправлен",
  "chat.toolCall.workflow.run.event.concurrencyChanged":
    "Параллельность: {previous} → {next}",
  "chat.toolCall.workflow.run.event.runCapsChanged":
    "Лимит параллельности: {previous} → {next}",
  "chat.toolCall.workflow.run.throttle.reason.rateLimited": "лимит запросов",
  "chat.toolCall.workflow.run.throttle.reason.overloaded": "перегрузка",
  "chat.toolCall.workflow.run.throttle.reason.offpeak": "внепиковая очередь",
  "chat.toolCall.workflow.run.throttle.reason.transient": "временная ошибка",
  "chat.toolCall.workflow.run.concurrency.label": "Параллельность: {cap}",
  "chat.toolCall.workflow.run.concurrency.cooldown": "пауза до {time}",
  "chat.toolCall.workflow.run.subagentModel.label": "Субагенты: {model}",
  "chat.toolCall.workflow.subagentModel.withLevel":
    "{model} · рассуждения: {level}",
  "chat.toolCall.workflow.subagentModel.tooltip":
    "Субагенты работают на {model}. Основной агент остаётся на модели сессии.",
  "chat.toolCall.todo.updating": "Обновление списка задач",
  "chat.toolCall.todo.updated": "Список задач обновлён",
  "chat.toolCall.search.find": "Поиск",
  "chat.toolCall.search.findWithQuery": "Поиск: {query}",
  "chat.toolCall.search.list": "Список",
  "chat.toolCall.search.listIn": "Список в {cwd}",
  "chat.toolCall.search.searching": "Поиск",
  "chat.toolCall.search.searched": "Выполнен поиск",
  "chat.toolCall.read.reading": "Чтение",
  "chat.toolCall.read.read": "Прочитано",
  "chat.toolCall.sessionContext.reading": "Чтение контекста",
  "chat.toolCall.sessionContext.read": "Прочитать контекст",
  "chat.toolCall.sessionContext.title": "Чтение контекста сессии",
  "chat.toolCall.sessionContext.query": "Запрос",
  "chat.toolCall.sessionContext.result": "Результат",
  "chat.toolCall.sessionContext.noResult": "Контекст не возвращён.",
  "chat.toolCall.explore.label": "Обзор",
  "chat.toolCall.explore.bucket.search.one": "поиск",
  "chat.toolCall.explore.bucket.search.other": "поисков",
  "chat.toolCall.explore.bucket.list.one": "список",
  "chat.toolCall.explore.bucket.list.other": "списков",
  "chat.toolCall.explore.bucket.file.one": "файл",
  "chat.toolCall.explore.bucket.file.other": "файлов",
  "chat.toolCall.explore.bucket.items": "элементов",
  "chat.toolCall.explore.emptySummary": "0 файлов",
  "chat.toolCall.source.subAgent": "Субагент",
  "chat.toolCall.agent.label": "Субагент",
  "chat.toolCall.agent.prompt": "Промпт",
  "chat.toolCall.agent.fallback": "Субагент",
  "chat.toolCall.agent.backgroundProcess": "Фоновый процесс агента",
  "chat.toolCall.agent.backgroundLaunch": "Запуск",
  "chat.toolCall.agent.backgroundLaunchFailed": "Не удалось запустить",
  "chat.toolCall.agent.backgroundLaunching": "Запускается",
  "chat.toolCall.agent.backgroundLaunched": "Запущен",
  "chat.toolCall.agent.backgroundActivity": "Активность",
  "chat.toolCall.agent.backgroundActivityStreaming":
    "Выполняется в фоне, синхронизация вывода",
  "chat.toolCall.agent.backgroundActivityRunningWaiting":
    "Выполняется в фоне, ожидание вывода",
  "chat.toolCall.agent.backgroundActivityReceived": "Получен вывод субагента",
  "chat.toolCall.agent.backgroundActivityWaiting": "Ожидание вывода субагента",
  "chat.toolCall.agent.outputFile": "Файл вывода",
  "chat.toolCall.agent.thought": "Размышление субагента",
  "chat.toolCall.agent.output": "Вывод субагента",
  "chat.toolCall.agent.output.syncing": "Синхронизация",
  "chat.toolCall.agent.output.error": "Не удалось синхронизировать: {error}",
  "chat.toolCall.agent.output.recentRows":
    "Последние строки: {visible} из {total}",
  "chat.toolCall.agent.output.hiddenRows":
    "Пропущены более ранние строки: {count}. Откройте разделённый вид, чтобы увидеть весь вывод.",
  "chat.toolCall.agent.output.empty": "Пока нет вывода",
  "chat.toolCall.copyError": "Копировать",
  "chat.toolCall.copyError.copied": "Скопировано",
  "chat.attachments.add": "Добавить вложение",
  "chat.attachments.add.description":
    "Добавьте файлы к текущему сообщению. Изображения также можно вставлять напрямую.",
  "chat.attachments.remove": "Удалить вложение",
  "chat.attachments.maxFiles": "Можно прикрепить до {count} вложений",
  "chat.attachments.maxFileSize": "Размер вложений — не более {sizeMb} МБ",
  "chat.attachments.readFailed": "Не удалось прочитать вложение: {message}",
  "chat.attachments.missingInlineImageContent":
    "Во вложении-изображении {filename} отсутствует содержимое файла. Добавьте его заново.",
  "chat.attachments.missingInlinePdfContent":
    "Во вложении PDF {filename} отсутствует содержимое файла. Добавьте его заново.",
  "chat.attachments.oversizedInlineImage":
    "Вложение-изображение {filename} слишком большое ({size}). Сожмите его до {maxSize} или меньше и попробуйте снова.",
  "chat.attachments.oversizedInlineVideo":
    "Вложение-видео {filename} слишком большое ({size}). Сожмите его до {maxSize} или меньше и попробуйте снова.",
  "chat.attachments.oversizedInlinePdf":
    "Вложение PDF {filename} слишком большое ({size}). Сожмите его до {maxSize} или меньше и попробуйте снова.",
  "chat.attachments.restoreDropped":
    "Некоторые вложения черновика не удалось восстановить после перезапуска. Добавьте их заново: {filenames}",
  "chat.attachments.clipboardText": "Вставленный текст",
  "chat.attachments.clipboardText.description": "Строк: {lineCount}",
  "chat.attachments.preview.open": "Открыть предпросмотр изображения",
  "chat.attachments.preview.openVideo": "Открыть предпросмотр видео",
  "chat.attachments.preview.openPdf": "Открыть предпросмотр PDF",
  "chat.attachments.preview.title": "Предпросмотр изображения",
  "chat.attachments.preview.pdfLoading": "Загрузка предпросмотра PDF…",
  "chat.attachments.preview.pdfUnavailable":
    "Этот PDF больше недоступен для предпросмотра.",
  "markdownImage.previous": "Предыдущее изображение",
  "markdownImage.next": "Следующее изображение",
  "markdownImage.zoomIn": "Увеличить",
  "markdownImage.zoomOut": "Уменьшить",
  "markdownImage.download": "Скачать изображение",
  "markdownImage.downloadFailed": "Не удалось скачать изображение",
  "markdownImage.downloadStarted": "Загрузка изображения началась",
  "markdownImage.downloadSucceeded": "Изображение сохранено в {path}",
  "chat.attachments.preview.loading": "Загрузка предпросмотра изображения…",
  "chat.attachments.preview.videoLoading": "Загрузка предпросмотра видео…",
  "chat.attachments.preview.unavailable":
    "Это изображение больше недоступно для предпросмотра.",
  "chat.attachments.preview.videoUnavailable":
    "Это видео больше недоступно для предпросмотра.",
  "chat.attachments.preview.videoUnsupported":
    "Это видео можно отправить, но это устройство не поддерживает предпросмотр его формата или кодека.",
  "chat.attachments.upload.waitingSession": "Ожидание сессии",
  "chat.attachments.upload.queued": "Ожидает загрузки",
  "chat.attachments.upload.uploading": "Загрузка {progress}%",
  "chat.attachments.upload.committing": "Завершение загрузки",
  "chat.attachments.upload.ready": "Загрузка завершена",
  "chat.attachments.upload.failed": "Не удалось загрузить: {message}",
  "chat.attachments.upload.runtimeRestarted":
    "Среда выполнения перезапустилась, и это вложение стало недействительным",
  "chat.composer.draftRuntimeRebuilding":
    "Сессия восстанавливается, подождите",
  "chat.attachments.upload.remoteMaterializationRequired":
    "Не удалось подготовить это удалённое вложение, поэтому его локальный путь не был отправлен.",
  "chat.attachments.upload.retry": "Повторить загрузку",
  "chat.composer.actionMenu": "Добавить контекст",
  "chat.composer.insertMentionShortcut":
    "Используйте @, чтобы добавить контекст",
  "chat.composer.insertSessionShortcut":
    "Используйте #, чтобы вставить сессию",
  "chat.composer.insertSlashShortcut": "Используйте / для возможностей",
  "chat.composer.insertSkillShortcut": "Используйте $ для скиллов",
  "chat.send.description": "Отправить текущий текст и вложения.",
  "chat.queue.enqueue.description":
    "Поставить текущий черновик в очередь и отправить его автоматически после завершения текущего ответа.",
  "chat.stop.description":
    "Остановить только текущий ответ. Сообщения в очереди останутся отложенными, пока вы не продолжите отправку.",
  "chat.mention.title": "Упоминание",
  "chat.mention.back": "Назад к категориям",
  "chat.mention.selectItem": "Выберите элемент для вставки в редактор",
  "chat.mention.searchHint":
    "Введите текст для поиска плагинов, файлов или диалогов",
  "chat.mention.searching": "Фильтрация: {query}",
  "chat.mention.emptyResults": "Нет подходящих результатов",
  "chat.mention.category.empty": "Нет доступных категорий",
  "chat.mention.category.files": "Файлы",
  "chat.mention.category.files.description":
    "Поиск по файлам проекта и вставка упоминания",
  "chat.mention.category.files.searching": "Поиск «{query}» по файлам проекта",
  "chat.mention.category.loading": "Поиск…",
  "chat.mention.category.results": "Совпадений: {count}",
  "chat.mention.files.title": "Файлы",
  "chat.mention.files.empty": "Нет подходящих файлов",
  "chat.mention.skills.title": "Скиллы",
  "chat.mention.skills.empty": "Нет подходящих скиллов",
  "chat.mention.skills.searchHint": "Введите текст для поиска скиллов",
  "chat.mention.subagents.title": "Агенты",
  "chat.mention.subagents.empty": "Нет подходящих агентов",
  "chat.mention.whiteboards.title": "Доски",
  "chat.mention.whiteboards.empty": "Нет подходящих досок",
  "chat.mention.whiteboards.strokeCount": "Штрихов: {count}",
  "chat.mention.plugins.title": "Плагины",
  "chat.mention.plugins.empty": "Нет плагинов, которые можно упомянуть",
  "chat.mention.plugins.conflict":
    "Имя конфликтует с другим включённым плагином",
  "chat.mention.sessions.title": "Сессии",
  "chat.mention.sessions.empty": "Нет подходящих недавних сессий",
  "chat.mention.sessions.searchHint":
    "Введите текст для поиска недавних сессий",
  "chat.slash.title": "Команды и возможности",
  "chat.slash.searchHint":
    "Введите текст для поиска команд, скиллов или агентов",
  "chat.slash.app.side.description": "Открыть новый боковой диалог",
  "chat.slash.commands.title": "Команды",
  "chat.slash.skills.title": "Скиллы",
  "chat.slash.skills.empty": "Нет подходящих скиллов",
  "chat.slash.subagents.title": "Агенты",
  "chat.slash.subagents.empty": "Нет подходящих агентов",
  "chat.slash.emptyUnavailable":
    "Для текущей сессии ZCode Agent не передано ни одной слэш-команды",
  "chat.slash.emptyResults": "Нет подходящих слэш-команд",
  "chat.error.connectionLost": "Соединение с агентом потеряно",
  "chat.error.processExited": "Процесс агента неожиданно завершился",
  "chat.error.dismiss": "Скрыть ошибку",
  "chat.error.retry": "Повторить",
  "chat.error.reloginProvider": "Войти в {provider}",
  "chat.error.action.relogin": "Войти снова",
  "chat.error.action.refreshQuota": "Обновить квоту",
  "chat.error.action.switchModel": "Сменить модель",
  "chat.error.action.retryLater": "Повторить позже",
  "chat.error.copyTraceId": "Копировать TraceID",
  "chat.error.copyFull": "Копировать",
  "chat.error.copyFull.copied": "Полные сведения об ошибке скопированы",
  "chat.error.copyFailed":
    "Не удалось скопировать сведения об ошибке: {error}",
  "chat.error.expandDetails": "Показать подробности",
  "chat.error.collapseDetails": "Скрыть подробности",
  "chat.error.feedback": "Сообщить о проблеме",
  "chat.error.feedbackOpened":
    "Открыта форма отзыва с приложенным контекстом ошибки",
  "chat.error.noAvailableModel":
    "Нет доступной модели. Перейдите на другой план или задайте пользовательскую модель.",
  "chat.error.sendFailed": "Не удалось отправить. Попробуйте позже.",
  "chat.error.modelSettings": "Настройки модели",
  "chat.error.setModels": "Настроить",
  "chat.quota.startPlan.bucketDailyLow":
    "У модели {model} осталось {percent} дневной квоты (токенов: {remaining}).",
  "chat.quota.startPlan.bucketActivityLow":
    "У модели {model} осталось {percent} промоквоты (токенов: {remaining}).",
  "chat.quota.startPlan.modelVeryLow":
    "У модели {model} осталось {percent} квоты плана (токенов: {remaining}).",
  "chat.quota.startPlan.modelExhausted":
    "Вся доступная квота модели {model} исчерпана. Смените модель или улучшите план.",
  "chat.quota.startPlan.dailyExhausted":
    "Квота Start Plan исчерпана. Улучшите план или дождитесь сброса квоты.",
  "chat.quota.startPlan.concurrentLimit":
    "Система перегружена. Смените модель, улучшите тарифный план или повторите попытку позже.",
  "chat.quota.startPlan.concurrentLimit.retryExhausted":
    "Система перегружена, лимит автоматических повторов исчерпан. Повторите попытку позже или улучшите тарифный план.",
  "chat.quota.startPlan.concurrentLimit.switchModel":
    "Достигнут предел параллельных запросов к текущей модели. Смените модель, чтобы продолжить текущую задачу.",
  "chat.quota.mcp.quotaExhausted":
    "Суточная квота ZCode MCP «{server}» исчерпана. Она обновится завтра.",
  "chat.quota.mcp.codingPlanRequired":
    "Нет квоты ZCode MCP «{server}». Войдите в аккаунт или оформите Coding Plan, чтобы им воспользоваться.",
  "chat.quota.providerLimited":
    "Достигнута квота аккаунта или лимит текущего плана. Улучшите или измените план, чтобы продолжить.",
  "chat.quota.action.upgrade": "Улучшить план",
  "chat.quota.action.renew": "Продлить",
  "chat.quota.action.switchModel": "Сменить модель",
  "chat.quota.action.switchProvider": "Сменить провайдера",
  "chat.quota.action.refresh": "Обновить квоту",
  "chat.permission.title": "Требуется разрешение",
  "chat.permission.awaitingApproval": "Ожидает подтверждения",
  "chat.permission.approve": "Разрешить",
  "chat.permission.approveAlways": "Всегда разрешать",
  "chat.permission.allowForSession": "Разрешить в этой сессии",
  "chat.permission.responseFailed":
    "Подтверждение не завершено. Повторите попытку.",
  "chat.permission.fullAccess": "Полный доступ",
  "chat.permission.fullAccess.description":
    "Предоставить агенту полный доступ без дальнейших подтверждений.",
  "chat.permission.allowCommand.description":
    "Больше не спрашивать для совпадающих команд в этом проекте",
  "chat.permission.allowCommand": "Всегда разрешать эту команду",
  "chat.permission.allowForProject": "Всегда разрешать в этом проекте",
  "chat.permission.cua.allowForProject":
    "Всегда разрешать Computer Use в этом проекте",
  "chat.permission.cua.allowForProject.description":
    "Больше не спрашивать для официальных действий Computer Use в этом проекте",
  "chat.permission.deny": "Запретить",
  "chat.permission.denyAlways": "Всегда запрещать",
  "chat.permission.files": "Файлы",
  "chat.permission.keyboardHint":
    "Используйте Tab или стрелки для выбора, затем нажмите Enter для подтверждения",
  "chat.permission.scope.commandPrefix": "Префикс команды",
  "chat.permission.scope.exactCommand": "Только точная команда",
  "chat.permission.workflow.title": "Запустить этот воркфлоу?",
  "chat.permission.workflow.showScript": "Показать весь скрипт",
  "chat.permission.workflow.hideScript": "Скрыть весь скрипт",
  "chat.permission.workflow.refine": "Уточнить",
  "chat.permission.workflow.refine.placeholder":
    "Опишите, как изменить воркфлоу…",
  "chat.permission.workflow.allowForSession": "Всегда разрешать в этой сессии",
  "chat.permission.workflow.allowForSession.description":
    "Больше не спрашивать о воркфлоу в этой сессии",
  "chat.permission.workflow.amend.title": "Изменить этот воркфлоу?",
  "chat.permission.workflow.amends": "Изменяет текущий запуск",
  "chat.permission.workflow.amends.running":
    "ещё выполняется, будет остановлен",
  "chat.permission.workflow.amends.scriptUnchanged": "скрипт не изменён",
  "chat.permission.workflow.maxConcurrency":
    "Не более {count} субагентов одновременно",
  "chat.permission.workflow.subagentModel":
    "Субагенты работают на модели {model}",
  "chat.permission.workflow.saved.badge": "Сохранённый воркфлоу",
  "chat.permission.workflow.saved.scope.project": "проект",
  "chat.permission.workflow.saved.args": "Аргументы",
  "chat.permission.workflow.save.title": "Сохранить этот воркфлоу в проект?",
  "chat.permission.workflow.save.overwriteTitle":
    "Перезаписать существующий сохранённый воркфлоу?",
  "chat.permission.workflow.save.overwriteHint":
    "Воркфлоу с таким именем уже существует по этому пути. При сохранении файл будет полностью перезаписан.",
  "chat.permission.workflow.save.path": "Путь",
  "chat.permission.workflow.save.description": "Описание",
  "chat.permission.workflow.save.whenToUse": "Когда использовать",
  "chat.permission.workflow.save.args": "Аргументы",
  "chat.permission.workflow.save.args.name": "Название",
  "chat.permission.workflow.save.args.type": "Тип",
  "chat.permission.workflow.save.args.required": "Обязательный",
  "chat.permission.workflow.save.args.requiredYes": "Обязательный",
  "chat.permission.workflow.save.args.requiredNo": "Необязательный",
  "chat.permission.workflow.save.args.default": "По умолчанию",
  "chat.interactionOrigin.subagent": "Субагент",
  "chat.interactionOrigin.subagent.title": "Запрос от субагента: {agentType}",
  "chat.cuaPermission.openAccessibility":
    "Открыть настройки универсального доступа",
  "chat.cuaPermission.openScreenRecording": "Открыть «Запись экрана»",
  "chat.cuaPermission.opening": "Открытие…",
  "chat.cuaPermission.openFailed":
    "Не удалось открыть разрешения CUA: {error}",
  "chat.elicitation.title": "Требуется ввод",
  "chat.elicitation.keyboardHint":
    "Используйте Tab или стрелки для выбора, затем Enter или пробел для подтверждения",
  "chat.elicitation.customAnswer": "Свой ответ",
  "chat.elicitation.customAnswer.placeholder": "Введите свой ответ…",
  "chat.elicitation.noAnswerProvided": "Ответ не предоставлен",
  "chat.elicitation.noQuestions": "Вопросов нет.",
  "chat.elicitation.dismiss": "Отклонить",
  "chat.elicitation.continue": "Продолжить",
  "chat.elicitation.review": "Проверить",
  "chat.elicitation.submit": "Отправить",
  "chat.elicitation.previousQuestion": "Предыдущий вопрос",
  "chat.elicitation.nextQuestion": "Следующий вопрос",
  "chat.elicitation.countdownSeconds": "{seconds} с",
  "chat.elicitation.expandQuestion": "Развернуть вопрос",
  "chat.elicitation.collapseQuestion": "Свернуть вопрос",
  "chat.elicitation.expandDialog": "Развернуть диалог с вопросами",
  "chat.elicitation.collapseDialog": "Свернуть диалог с вопросами",
  "chat.elicitation.planApproval.approve": "Утвердить",
  "chat.elicitation.planApproval.approveDescription":
    "Выйти из режима плана и начать реализацию.",
  "chat.askQuestion.asking": "Задаём вопросы",
  "chat.askQuestion.asked": "Вопрос задан",
  "chat.askQuestion.questionsCount": "Вопросов: {count}",
  "chat.askQuestion.noAnswerProvided": "Ответ не предоставлен",
  "chat.askQuestion.autoContinued": "Нет ответа; продолжено автоматически",
  "chat.permission.allowOnce.description": "Разрешить только в этот раз",
  "chat.permission.allowAlways.description.command":
    "Больше не спрашивать для этой команды",
  "chat.permission.allowAlways.description.file":
    "Больше не спрашивать для этой файловой операции",
  "chat.permission.allowAlways.description.generic":
    "Больше не спрашивать для такого же запроса разрешений",
  "chat.permission.denyOnce.description": "Отклонить только в этот раз",
  "chat.permission.denyAlways.description.command":
    "Всегда отклонять эту команду в будущем",
  "chat.permission.denyAlways.description.file":
    "Всегда отклонять эту файловую операцию в будущем",
  "chat.permission.denyAlways.description.generic":
    "Всегда отклонять такой же запрос разрешений в будущем",
  "chat.permission.fileChange.add": "Создать",
  "chat.permission.fileChange.update": "Изменить",
  "chat.permission.fileChange.addMany": "Создание файлов: {count}",
  "chat.permission.fileChange.updateMany": "Обновление файлов: {count}",
  "chat.permission.fileChange.mixedMany": "Изменение файлов: {count}",
  "mode.plan": "План",
  "mode.label.glm.build": "Спрашивать перед изменениями",
  "mode.label.glm.edit": "Править автоматически",
  "mode.label.glm.plan": "Режим плана",
  "mode.label.glm.yolo": "Полный доступ",
  "mode.description.glm.build": "Спрашивать перед изменением файлов.",
  "mode.description.glm.edit": "Автоматически править файлы.",
  "mode.description.glm.plan": "Составлять план перед правками.",
  "mode.description.glm.yolo": "Запускать с меньшим числом подтверждений.",
  "todo.panel.title": "Todo",
  "todo.panel.currentTask": "Текущая задача",
  "todo.panel.completed": "Todo выполнено",
  "todo.panel.toggle": "Показать или скрыть панель Todo",
  "planTool.panel.badge": "Панель плана",
  "planTool.panel.planTab": "План",
  "planTool.panel.rawTab": "Исходный",
  "planTool.panel.currentMode": "Режим: {mode}",
  "planTool.panel.modeActions": "Сменить режим",
  "planTool.panel.modeSwitchFailed": "Не удалось сменить режим: {message}",
  "planTool.panel.empty": "Структурированных шагов пока нет.",
  "planTool.panel.expand": "Развернуть план",
  "planTool.panel.collapse": "Свернуть план",
  "planTool.panel.copy": "Копировать план",
  "planTool.panel.copied": "План скопирован",
  "planTool.panel.open": "Открыть план в боковой панели",
  "planTool.panel.viewFull": "Показать план целиком",
  "planTool.panel.syncing": "Синхронизация плана…",
  "planTool.guidance.enterMode": "Включён режим планирования",
  "chat.permission.switchMode.placeholder": "План реализации",
  "zcode.unavailable": "ИИ-агент недоступен",
  "zcode.initFailed": "Не удалось запустить ИИ-агента",
  "zcode.error.providerBusiness.1006":
    "Срок действия вашей сессии истёк. Войдите снова.",
  "zcode.error.providerBusiness.1005":
    "Бесплатная квота на сегодня исчерпана. Обновите план, чтобы продолжить сейчас, или дождитесь сброса квоты.",
  "zcode.error.providerBusiness.3006":
    "Текущая модель не входит в этот план. Переключитесь на доступную модель и повторите попытку.",
  "zcode.error.providerBusiness.3002":
    "Слишком частые запросы. Повторите попытку позже.",
  "zcode.error.providerBusiness.3001":
    "Неверные параметры запроса. Проверьте ввод и повторите попытку.",
  "zcode.error.providerBusiness.3007":
    "Не прошла проверка капчи. Повторите попытку.",
  "zcode.error.providerBusiness.3008":
    "Система перегружена. Смените модель, перейдите на более высокий план или повторите попытку позже.",
  "zcode.error.providerBusiness.3009":
    "Система перегружена. Смените модель, перейдите на более высокий план или повторите попытку позже.",
  "zcode.error.providerBusiness.3010":
    "Система перегружена. Смените модель, перейдите на более высокий план или повторите попытку позже.",
  "zcode.error.providerBusiness.3102":
    "Этот запуск превысил максимальное время одного запуска. Создайте новую задачу вне пиковой нагрузки, чтобы продолжить.",
  "zcode.error.modelSuspiciousEmpty":
    "Модель не вернула содержимое (часто из-за незавершённой капчи, истёкшего токена или проблем с планом). Отправьте запрос ещё раз — перед ним будет выполнена проверка капчи.",
  "zcode.error.providerBusiness.2007":
    "Вышестоящий сервис временно недоступен. Повторите попытку позже.",
  "zcode.error.providerBusiness.429":
    "Слишком частые запросы. Повторите попытку позже.",
  "debugInfo.taskId": "ID задачи",
  "debugInfo.traceId": "ID трассировки",
  "debugInfo.sessionId": "ID сессии",
  "debugInfo.provider": "Провайдер",
  "debugInfo.copied": "Скопировано",
  "resourceManager.title": "Диспетчер ресурсов",
  "resourceManager.loading": "Считывание использования ресурсов…",
  "resourceManager.unavailable": "Мост диспетчера ресурсов недоступен",
  "resourceManager.processCount": "Процессов: {count}",
  "resourceManager.cpu": "ЦП",
  "resourceManager.memory": "Память",
  "resourceManager.storage": "Хранилище",
  "resourceManager.appUsage": "ZCode",
  "resourceManager.systemUsage": "Система",
  "resourceManager.category.base": "Базовые сервисы",
  "resourceManager.category.builtinPlugin": "Встроенные плагины",
  "resourceManager.category.communityPlugin": "Плагины сообщества",
  "resourceManager.empty": "Нет процессов",
  "resourceManager.sampling": "Сбор метрик",
  "resourceManager.column.process": "Процесс",
  "resourceManager.column.pid": "PID",
  "feedback.center.title": "Отзыв",
  "feedback.center.description":
    "Опишите проблему и отслеживайте прогресс после отправки.",
  "feedback.center.submitTitle": "Отправить отзыв",
  "feedback.center.ticketsTitle": "Мои отзывы",
  "feedback.center.backToSubmit": "Вернуться к отправке отзыва",
  "feedback.center.submitTab": "Отправить",
  "feedback.center.ticketsTab": "Мои отзывы",
  "feedback.background.title": "Отправка отзыва",
  "feedback.background.open": "Открыть детали фоновой отправки отзыва",
  "feedback.background.openDetail": "Открыть детали",
  "feedback.background.defaultDetail": "Отправка отзыва продолжится в фоне",
  "feedback.background.expand": "Развернуть статус фоновой отправки отзыва",
  "feedback.background.collapse": "Свернуть статус фоновой отправки отзыва",
  "feedback.background.dismiss": "Скрыть статус фоновой отправки отзыва",
  "feedback.background.pauseLogs": "Приостановить логи",
  "feedback.module.pluginMcp": "Плагин / MCP",
  "feedback.module.agentTaskFailed": "Ошибка задачи агента",
  "feedback.module.modelConfigApiKey": "Настройка модели / API-ключ",
  "feedback.module.modelCallError": "Ошибка вызова модели",
  "feedback.module.permissionConfigSave": "Разрешения / сохранение настроек",
  "feedback.module.sshConnectionFailed": "Сбой подключения SSH",
  "feedback.module.wslConnectionFailed": "Сбой подключения WSL",
  "feedback.module.uiLayoutInteraction": "Раскладка / взаимодействие UI",
  "feedback.module.modelSlowQuota": "Медленный ответ модели / квота",
  "feedback.module.crashInternalError": "Сбой / Внутренняя ошибка",
  "feedback.module.docsUsage": "Документация / вопрос по использованию",
  "feedback.module.other": "Другое",
  "feedback.status.pendingReview": "Отправлен",
  "feedback.status.needInfo": "Нужны уточнения",
  "feedback.status.accepted": "Принят",
  "feedback.status.closedByReply": "Закрыт после ответа",
  "feedback.status.completed": "Завершён",
  "feedback.status.rejected": "Отклонён",
  "feedback.status.inDevelopment": "В разработке",
  "feedback.status.resolved": "Решено",
  "feedback.status.released": "Выпущено",
  "feedback.statusHint.pendingReview":
    "Мы получили отзыв и скоро займёмся им.",
  "feedback.statusHint.needInfo":
    "Нам нужна дополнительная информация. Смотрите ответ команды ниже.",
  "feedback.statusHint.accepted":
    "Ваш отзыв принят. Мы запланируем исправление или улучшение.",
  "feedback.statusHint.closedByReply":
    "Команда продукта ответила и закрыла этот отзыв. Если проблема осталась, отправьте новый.",
  "feedback.statusHint.archived":
    "Команда продукта ответила и закрыла этот отзыв. Если проблема осталась, отправьте новый.",
  "feedback.statusHint.rejected":
    "Этот отзыв пока не в планах. Пояснение можно посмотреть ниже.",
  "feedback.statusHint.inDevelopment":
    "Мы работаем над этим. Обновления появятся ниже.",
  "feedback.statusHint.resolved": "Проблема исправлена и ожидает релиза.",
  "feedback.statusHint.released":
    "Связанное исправление или улучшение уже выпущено. Спасибо за отзыв.",
  "feedback.time.justNow": "только что",
  "feedback.time.minutesAgo": "{count} мин. назад",
  "feedback.time.hoursAgo": "{count} ч. назад",
  "feedback.time.daysAgo": "{count} дн. назад",
  "feedback.time.submittedAt": "Отправлено {time}",
  "feedback.title.fallback": "Отзыв пользователя",
  "feedback.submit.notReported": "Пока не отправлялось",
  "feedback.tickets.newFeedback": "Новый отзыв",
  "feedback.tickets.backToList": "Назад к списку",
  "feedback.tickets.empty.title": "Отзывов пока нет",
  "feedback.tickets.empty.description":
    "Пишите нам, когда столкнётесь с проблемой. Здесь будет появляться прогресс.",
  "feedback.tickets.empty.action": "Отправить отзыв",
  "feedback.tickets.placeholder.title":
    "Выберите отзыв, чтобы посмотреть подробности",
  "feedback.tickets.placeholder.description":
    "Ответы нашей команды появятся здесь. В подробностях вы также можете добавить шаги воспроизведения, скриншоты или логи.",
  "feedback.tickets.group.last24h": "За последние 24 часа",
  "feedback.tickets.group.last7d": "За последние 7 дней",
  "feedback.tickets.group.earlier": "Ранее",
  "feedback.tickets.column.status": "Статус",
  "feedback.tickets.column.description": "Описание проблемы",
  "feedback.tickets.column.id": "ID",
  "feedback.tickets.issuePrefix": "Обращение #",
  "feedback.detail.noActivity": "Активности пока нет",
  "feedback.detail.issueCopy": "Копировать ID проблемы",
  "feedback.detail.issueCopied": "ID проблемы скопирован",
  "feedback.detail.issueCopyFailed": "Не удалось скопировать ID проблемы",
  "feedback.detail.viewFullProcess": "Посмотреть весь процесс",
  "feedback.detail.yourDescription": "Ваше описание",
  "feedback.process.backToDetail": "Назад к деталям",
  "feedback.process.title": "Процесс",
  "feedback.process.currentLatest": "Последнее:",
  "feedback.progress.title": "Прогресс",
  "feedback.progress.currentHandler": "Текущий исполнитель:",
  "feedback.progress.assignee.dev": "Разработчик",
  "feedback.progress.assignee.unassigned": "Не назначен",
  "feedback.progress.stage.submitted": "Отправлен",
  "feedback.progress.stage.reviewing": "На рассмотрении",
  "feedback.progress.stage.inProgress": "В работе",
  "feedback.progress.stage.done": "Готово",
  "feedback.progress.stage.closed": "Закрыт",
  "feedback.timeline.stepCount": "{count} шаг(ов)",
  "feedback.timeline.latestUpdate": "Обновлено {time}",
  "feedback.timeline.syncWhenUpdated":
    "Обновления будут синхронизироваться здесь",
  "feedback.timeline.officialReply": "Ответ команды",
  "feedback.timeline.yourSupplement": "Вы добавили информацию",
  "feedback.timeline.empty":
    "Активности пока нет. О прогрессе мы сообщим здесь.",
  "feedback.timeline.duration": "Заняло {time}",
  "feedback.timeline.assignedToDev": "Передано в разработку",
  "feedback.timeline.event.submitted": "Отзыв отправлен",
  "feedback.timeline.event.progressUpdated": "Прогресс обновлён",
  "feedback.timeline.event.conclusion": "Добавлено заключение",
  "feedback.timeline.event.fullLogUploaded":
    "Полные логи загружены; отзыв отправлен",
  "feedback.timeline.event.statusChanged": "Статус изменён на {status}",
  "feedback.timeline.event.agentSubmitted":
    "Отзыв отправлен через Агента: {name}",
  "feedback.timeline.event.progressUpdatedWithStatus":
    "Прогресс обновлён (статус: {status}): {message}",
  "feedback.timeline.event.progressUpdatedWithMessage":
    "Прогресс обновлён: {message}",
  "feedback.timeline.event.markedStatus": "Отмечено как {status}: {message}",
  "feedback.actor.user": "Пользователь",
  "feedback.actor.productManager": "Продакт-менеджер",
  "feedback.actor.dev": "Разработчик",
  "feedback.duration.instant": "Мгновенно",
  "feedback.duration.lessThanMinute": "Меньше 1 мин",
  "feedback.duration.minutes": "{count} мин",
  "feedback.duration.hours": "{count} ч",
  "feedback.duration.days": "{count} дн.",
  "feedback.supplement.title": "Дополнительная информация",
  "feedback.supplement.description":
    "Здесь можно добавить шаги воспроизведения, пояснения к скриншотам, фрагменты логов или другие детали.",
  "feedback.supplement.continueTitle": "Добавить информацию",
  "feedback.supplement.continueDescription":
    "При просмотре процесса можно добавить шаги воспроизведения, пояснения к скриншотам, фрагменты логов или новые детали.",
  "feedback.supplement.attachmentLimit": "Максимум вложений: {count}",
  "feedback.supplement.attachmentTooLarge":
    "{name} больше 100 МБ и пока не может быть загружен.",
  "feedback.supplement.attachment": "Вложение",
  "feedback.supplement.uploadedAttachments": "Вложения: {names}",
  "feedback.supplement.addAttachment": "Добавить вложение",
  "feedback.supplement.placeholder":
    "Добавьте детали, вставьте скриншот или добавьте локальный файл...",
  "feedback.supplement.removeAttachment": "Удалить {name}",
  "feedback.supplement.attachmentHint":
    "Поддерживаются вставленные скриншоты и локальные файлы. Каждое вложение должно быть меньше 100 МБ.",
  "feedback.supplement.sending": "Отправка",
  "feedback.supplement.send": "Отправить обновление",
  "feedback.type.bug.label": "Ошибка",
  "feedback.type.bug.description": "Ошибки, сбои или неожиданное поведение",
  "feedback.type.usage.label": "Как использовать",
  "feedback.type.usage.description": "Непонятные шаги или настройка",
  "feedback.type.feature.label": "Предложение",
  "feedback.type.feature.description": "Новые возможности или улучшения UX",
  "feedback.type.performance.label": "Низкая производительность",
  "feedback.type.performance.description":
    "Задержки, медленный отклик или проблемы с ресурсами",
  "feedback.submit.bug.sectionTitle": "Что произошло?",
  "feedback.submit.bug.titleLabel": "Заголовок",
  "feedback.submit.bug.titlePlaceholder":
    "Пример: не удаётся подключиться по SSH",
  "feedback.submit.bug.descriptionLabel": "Подробности",
  "feedback.submit.bug.descriptionPlaceholder":
    "Опишите, с чем вы столкнулись: где нажали, что произошло, чего ожидали и была ли ошибка. Мы сохраняем ваше исходное описание и анализируем его после отправки.",
  "feedback.submit.bug.helper.1": "Место",
  "feedback.submit.bug.helper.2": "Шаги воспроизведения",
  "feedback.submit.bug.helper.3": "Ожидаемый результат",
  "feedback.submit.bug.helper.4": "Фактический результат / ошибка",
  "feedback.submit.bug.supplementalDescription": "",
  "feedback.submit.bug.screenshotHint":
    "Вставьте скриншот или добавьте локальный скриншот вложением.",
  "feedback.submit.bug.missingTitle": "Введите заголовок",
  "feedback.submit.bug.missingDescription": "Опишите проблему",
  "feedback.submit.usage.sectionTitle": "Где вы застряли?",
  "feedback.submit.usage.titleLabel": "Заголовок вопроса",
  "feedback.submit.usage.titlePlaceholder":
    "Пример: не понимаю, как настроить удалённое подключение",
  "feedback.submit.usage.descriptionLabel": "Проблемный шаг",
  "feedback.submit.usage.descriptionPlaceholder":
    "Опишите, что вы пытаетесь сделать, где застряли, какой промпт видели и как нам лучше всё объяснить или подсказать.",
  "feedback.submit.usage.helper.1": "Текущая задача",
  "feedback.submit.usage.helper.2": "Проблемный шаг",
  "feedback.submit.usage.helper.3": "Что вы пробовали",
  "feedback.submit.usage.helper.4": "Какая нужна помощь",
  "feedback.submit.usage.supplementalDescription":
    "Модуль и модель помогают нам найти проблему в документации, подсказках или конфигурации по умолчанию.",
  "feedback.submit.usage.screenshotHint":
    "Можно вставить скриншот экрана с проблемой.",
  "feedback.submit.usage.missingTitle": "Введите заголовок вопроса",
  "feedback.submit.usage.missingDescription": "Опишите, где вы застряли",
  "feedback.submit.feature.sectionTitle": "Что вы предлагаете?",
  "feedback.submit.feature.titleLabel": "Заголовок предложения",
  "feedback.submit.feature.titlePlaceholder":
    "Пример: экспорт отчёта по задаче в один клик",
  "feedback.submit.feature.descriptionLabel": "Предложение",
  "feedback.submit.feature.descriptionPlaceholder":
    "Опишите, что добавить или улучшить: сценарий, что сейчас неудобно, идеальное поведение и какую пользу это принесёт.",
  "feedback.submit.feature.helper.1": "Сценарий",
  "feedback.submit.feature.helper.2": "Что сейчас неудобно",
  "feedback.submit.feature.helper.3": "Ожидаемая возможность / взаимодействие",
  "feedback.submit.feature.helper.4": "Польза",
  "feedback.submit.feature.supplementalDescription":
    "Выберите модуль, чтобы мы могли оценить приоритет и влияние.",
  "feedback.submit.feature.screenshotHint":
    "Можно приложить скриншот-пример, эскиз или снимок текущего неудобного экрана.",
  "feedback.submit.feature.missingTitle": "Введите заголовок предложения",
  "feedback.submit.feature.missingDescription": "Опишите предложение",
  "feedback.submit.performance.sectionTitle": "Что работает медленно?",
  "feedback.submit.performance.titleLabel":
    "Заголовок проблемы с производительностью",
  "feedback.submit.performance.titlePlaceholder":
    "Пример: список задач открывается медленно",
  "feedback.submit.performance.descriptionLabel": "Что работает медленно",
  "feedback.submit.performance.descriptionPlaceholder":
    "Опишите, какая операция выполняется медленно, насколько это заметно, повторяется ли каждый раз и примерный объём данных или задачи.",
  "feedback.submit.performance.helper.1": "Операция",
  "feedback.submit.performance.helper.2": "Ощущаемая задержка",
  "feedback.submit.performance.helper.3": "Стабильное воспроизведение",
  "feedback.submit.performance.helper.4": "Масштаб задачи / объём данных",
  "feedback.submit.performance.supplementalDescription":
    "К отчётам о производительности логи прикладываются по умолчанию. Модуль и модель помогают найти медленный участок.",
  "feedback.submit.performance.screenshotHint":
    "Можно приложить скриншоты загрузки, зависания или использования ресурсов.",
  "feedback.submit.performance.missingTitle":
    "Введите заголовок проблемы с производительностью",
  "feedback.submit.performance.missingDescription":
    "Опишите, что работает медленно",
  "feedback.submit.template.bug.problem": "Проблема:",
  "feedback.submit.template.bug.steps": "Шаги:",
  "feedback.submit.template.bug.expected": "Ожидаемый результат:",
  "feedback.submit.template.bug.actual": "Фактический результат / ошибка:",
  "feedback.submit.template.usage.task": "Текущая задача:",
  "feedback.submit.template.usage.blockedStep": "Проблемный шаг:",
  "feedback.submit.template.usage.tried": "Что вы пробовали:",
  "feedback.submit.template.usage.help": "Какая нужна помощь:",
  "feedback.submit.template.feature.scenario": "Сценарий:",
  "feedback.submit.template.feature.currentPain": "Что сейчас неудобно:",
  "feedback.submit.template.feature.expected":
    "Ожидаемая возможность / взаимодействие:",
  "feedback.submit.template.performance.action": "Операция:",
  "feedback.submit.template.performance.delay": "Ощущаемая задержка:",
  "feedback.submit.template.performance.reproducible":
    "Стабильное воспроизведение:",
  "feedback.submit.template.occurredAt": "Время: {timestamp}",
  "feedback.submit.template.occurredAtPrefix": "Время:",
  "feedback.submit.template.proposedAt": "Предложено: {timestamp}",
  "feedback.submit.template.proposedAtPrefix": "Предложено:",
  "feedback.submit.template.section.errorHeading":
    "При использовании возникла ошибка. Пожалуйста, помогите разобраться.",
  "feedback.submit.template.section.errorSummary": "Сводка ошибки",
  "feedback.submit.template.section.errorSummaryLine":
    "Сводка ошибки: {message}",
  "feedback.submit.template.section.errorDetail": "Подробности ошибки",
  "feedback.submit.template.section.errorTraceId": "TraceID: {traceId}",
  "feedback.submit.template.section.copyErrorHeading":
    "Информация об ошибке ZCode",
  "feedback.submit.template.section.notProvided": "Не указано",
  "feedback.submit.template.section.remoteLogEmpty":
    "Логи подключения отсутствуют",
  "feedback.submit.template.section.taskFeedbackTitle":
    "Отзыв о задаче: {title}",
  "feedback.submit.template.section.remoteConnectFailed":
    "Сбой удалённого подключения",
  "feedback.submit.template.section.taskHeading":
    "При работе с этой задачей возникла проблема. Пожалуйста, помогите разобраться.",
  "feedback.submit.template.section.taskInfo": "Сведения о задаче",
  "feedback.submit.template.section.taskTitle": "Название задачи: {title}",
  "feedback.submit.template.section.taskId": "ID задачи: {id}",
  "feedback.submit.template.section.taskWorkspace": "Проект: {path}",
  "feedback.submit.template.section.taskSessionPath": "Сессия задачи: {path}",
  "feedback.submit.template.section.taskLogPath": "Лог задачи: {path}",
  "feedback.submit.template.section.problem": "Проблема",
  "feedback.submit.template.section.whatDoing": "Мои действия",
  "feedback.submit.template.section.expectedResult": "Ожидаемый результат",
  "feedback.submit.template.section.supplement": "Опишите, пожалуйста:",
  "feedback.submit.template.section.remoteHeading":
    "При удалённом подключении возникла ошибка. Пожалуйста, помогите разобраться.",
  "feedback.submit.template.section.remoteLog":
    "Логи подключения (последние 30)",
  "feedback.submit.template.section.remoteEnvironment":
    "Окружение, к которому выполнялось подключение",
  "feedback.submit.template.section.featureSource": "Источник",
  "feedback.submit.type.label": "Тип отзыва",
  "feedback.submit.type.hint":
    "При изменении обновится подсказка по описанию ниже",
  "feedback.submit.simple.descriptionTitle": "Описание проблемы",
  "feedback.submit.simple.descriptionLabel": "Описание",
  "feedback.submit.simple.descriptionPlaceholder":
    "Опишите проблему, где она возникла, чего вы ожидали или что хотите улучшить.",
  "feedback.submit.simple.screenshotTitle": "Скриншоты",
  "feedback.submit.simple.screenshotHint":
    "Вставьте, перетащите изображения сюда или выберите файлы.",
  "feedback.submit.simple.screenshotPrivacyHint":
    "Перед загрузкой проверьте изображения на наличие личных данных.",
  "feedback.submit.simple.contactTitle": "Контакт",
  "feedback.submit.simple.logsTitle": "Логи",
  "feedback.submit.simple.logsLabel": "Загрузить диагностические логи",
  "feedback.submit.simple.logsHint":
    "Выключено по умолчанию. Загружает диагностические логи за сегодня, исключая базы данных, файлы конфигурации и трассировки диалогов с моделью. Автоматическая очистка может удалить не все рабочие данные. Выбирайте внимательно.",
  "feedback.submit.simple.footerHint":
    "Прогресс можно отслеживать позже в разделе «Мои отзывы».",
  "feedback.submit.missingDescription": "Сначала опишите проблему",
  "feedback.submit.addScreenshot": "Добавить скриншот",
  "feedback.submit.removeScreenshot": "Удалить",
  "feedback.submit.contact.label": "Контакт",
  "feedback.submit.contact.hint":
    "Необязательно, для обратной связи. Можно указать другой аккаунт соцсети.",
  "feedback.submit.contact.placeholder":
    "example@domain.com / аккаунт соцсети",
  "feedback.submit.supplemental.title": "Дополнительная информация",
  "feedback.submit.module.label": "Модуль",
  "feedback.submit.severity.label": "Влияние",
  "feedback.submit.model.label": "Текущая модель",
  "feedback.submit.model.unavailable": "Модель не определена",
  "feedback.submit.continueUpload": "Продолжить загрузку",
  "feedback.submit.processing": "Обработка",
  "feedback.submit.submitting": "Отправка",
  "feedback.submit.submit": "Отправить отзыв",
  "feedback.submit.screenshotLimit": "Максимум скриншотов: {count}",
  "feedback.featureRequest.title": "Запросить функцию",
  "feedback.featureRequest.descriptionLabel": "Описание запроса",
  "feedback.featureRequest.descriptionPlaceholder":
    "Пример: хочу сохранять частые промпты во время выполнения задачи, а потом вставлять их одним кликом.",
  "feedback.featureRequest.solutionLabel": "Ожидаемое решение",
  "feedback.featureRequest.solutionPlaceholder":
    "Пример: добавить быстрое меню промптов рядом с полем ввода с действиями «создать», «изменить» и «вставить».",
  "feedback.featureRequest.contactLabel": "Контакт",
  "feedback.featureRequest.reset": "Сбросить",
  "feedback.featureRequest.submit": "Отправить запрос",
  "feedback.featureRequest.missingRequired":
    "Заполните описание запроса и ожидаемое решение",
  "feedback.featureRequest.source":
    "Меню помощи в шапке проекта / Запросить функцию",
  "feedback.featureRequest.submittedToast":
    "Запрос отправлен. Мы внимательно его рассмотрим.",
  "feedback.submission.connectingLabel": "Подключение к службе отзывов",
  "feedback.submission.connectingDetail":
    "Скриншоты и логи продолжат загружаться после создания обращения",
  "feedback.submission.cancelingCreateLabel": "Отмена отправки",
  "feedback.submission.cancelingCreateDetail":
    "Получен запрос на отмену. Останавливаем создание обращения.",
  "feedback.submission.canceledLabel": "Отправка отзыва отменена",
  "feedback.submission.canceledDetail": "Отправка отзыва отменена",
  "feedback.submission.uploadingScreenshotLabel": "Загрузка скриншота",
  "feedback.submission.submittedLabel": "Отзыв отправлен",
  "feedback.submission.submittedDetail": "Мы скоро его рассмотрим.",
  "feedback.submission.submittedToast":
    "Отзыв отправлен. Мы скоро его рассмотрим.",
  "feedback.submission.failedLabel": "Не удалось отправить отзыв",
  "feedback.submission.networkErrorDetail":
    "Не удалось подключиться к службе отзывов. Проверьте сеть, настройки VPN или прокси и попробуйте снова.",
  "feedback.submission.postCreateNetworkErrorDetail":
    "Отзыв создан, но дополнительные материалы не удалось загрузить. Откройте существующий отзыв и добавьте недостающие файлы; повторно его не отправляйте.",
  "feedback.submission.pausingLogLabel": "Приостановка загрузки логов",
  "feedback.submission.pausingLogDetail":
    "Получен запрос на отмену. Пожалуйста, подождите.",
  "feedback.submission.exportingLogLabel": "Экспорт полных логов",
  "feedback.submission.exportingLogDetail":
    "Это может занять несколько секунд в зависимости от размера локальных логов",
  "feedback.submission.uploadingLogLabel": "Загрузка полных логов",
  "feedback.submission.logUploadSuccessLabel": "Загрузка логов завершена",
  "feedback.submission.logUploadPausedLabel": "Загрузка логов приостановлена",
  "feedback.submission.logUploadPausedDetail":
    "Логи нужны для разбора. Пожалуйста, продолжите загрузку.",
  "feedback.submission.preparingUploadDetail": "Подготовка к загрузке",
  "forms.labels.name": "Название",
  "forms.labels.description": "Описание",
  "forms.labels.color": "Цвет",
  "forms.labels.systemPrompt": "Системный промпт",
  "forms.placeholders.agentName": "Введите название субагента",
  "forms.placeholders.agentDescription": "Введите описание субагента",
  "forms.placeholders.agentSystemPrompt": "Введите системный промпт",
  "forms.validation.nameRequired": "Укажите название",
  "forms.validation.nameMinLength":
    "Название должно содержать не менее {min} символов",
  "forms.validation.nameMaxLength":
    "Название не может превышать {max} символов",
  "forms.validation.namePattern":
    "Название может содержать только буквы, цифры и дефисы",
  "forms.validation.descriptionRequired": "Укажите описание",
  "forms.validation.systemPromptRequired": "Укажите системный промпт",
  "forms.validation.agentNameHint":
    "Только буквы, цифры и дефисы, 3-50 символов",
  "forms.validation.agentDescriptionHint":
    "Кратко опишите назначение субагента",
  "forms.validation.agentSystemPromptHint":
    "Определите поведение и возможности субагента",
  "forms.validation.fileExists": "Файл {fileName} уже существует",
  "taskList.cronTaskLabel": "Запланированная задача",
  "taskList.offPeakTaskLabel": "Задача в простое",
  "taskList.workflowRun.ariaLabel": "Запуск воркфлоу {name}: {status}",
  "taskList.workflowRun.moreRuns": "Ещё {count}",
  "taskList.workflowRun.moreStations": "+{count}",
  "taskList.workflowRun.liveCount": "Выполняется воркфлоу: {count}",
  "taskGroup.cronGroupName": "Запланированные задачи",
  "workspace.openScheduledSettings": "Автоматизации",
  "settings.automations.title": "Автоматизации",
  "automations.breadcrumbLabel": "Путь автоматизации",
  "settings.automations.betaBadge": "Бета",
  "automations.noWorkspace":
    "Откройте проект, чтобы управлять его задачами по расписанию.",
  "automations.workspace.label": "Проект",
  "automations.description":
    "Планируйте повторяющиеся задачи или ставьте фоновые задачи в очередь — они выполняются в свободное время.",
  "automations.description.populated":
    "Запускайте задачи по расписанию или когда они понадобятся.",
  "automations.refresh": "Обновить",
  "automations.refreshing": "Обновление…",
  "automations.create": "Создать",
  "automations.createViaChat": "Создать в чате",
  "automations.createViaChat.prompt":
    "Каждый будний день в 9:00 делай сводку изменений кода и дальнейших шагов по этому проекту.",
  "automations.createManually": "Создать задачу по расписанию",
  "automations.list.title": "Задачи по расписанию",
  "automations.createdLabel": "Задача создана",
  "offPeak.notify.completed.title": "Фоновая задача завершена",
  "offPeak.notify.completed.body": "«{title}» успешно завершена.",
  "offPeak.notify.failed.title": "Фоновая задача завершилась с ошибкой",
  "offPeak.notify.failed.body": "«{title}» остановлена с ошибкой.",
  "offPeak.sidebar.groupTitle": "Фоновые задачи",
  "offPeak.newTask.bannerText":
    "Новая функция для подписчиков: создайте «Фоновую задачу» — мы бесплатно выполним её в периоды избытка вычислительных ресурсов.",
  "offPeak.newTask.bannerTipText":
    "Эта функция не расходует квоту вашего тарифного плана и доступна только подписчикам.",
  "offPeak.newTask.carousel.goToSlide":
    "Перейти к шаблону фоновой задачи {index}",
  "offPeak.newTask.template.customize.title": "Свой вариант",
  "offPeak.newTask.template.customize.description":
    "Без шаблона — просто опишите, что нужно сделать.",
  "offPeak.tabs.scheduled": "Запланированные задачи",
  "offPeak.tabs.idle": "Фоновые задачи",
  "automations.statusFilter.all": "Все",
  "automations.statusFilter.inProgress": "Выполняются",
  "automations.statusFilter.completed": "Завершённые",
  "automations.statusFilter.failed": "Неудачные",
  "automations.statusFilter.empty": "Нет задач, соответствующих этому фильтру",
  "offPeak.keepAwakeBanner":
    "Компьютер не уйдёт в сон, пока ZCode выполняет чат.",
  "offPeak.sectionTitle": "Фоновые задачи",
  "offPeak.createButton": "Создать фоновую задачу",
  "offPeak.templates.sectionTitle": "Шаблоны фоновых задач",
  "offPeak.list.empty":
    "Фоновых задач пока нет. Создайте задачу — она будет выполняться вне часов пик без дополнительной оплаты.",
  "offPeak.badge.pausedPosition": "#{position} на паузе",
  "offPeak.action.pauseHint":
    "Задачи, находившиеся на паузе дольше допустимого времени ожидания, будут возвращены в очередь",
  "offPeak.action.continueHint":
    "Если время билета в очереди истекло, кнопка «Продолжить» снова поставит задачу в конец очереди.",
  "offPeak.badge.queuePosition": "#{position} в очереди",
  "offPeak.status.queued": "Ожидает свободных ресурсов",
  "offPeak.status.paused": "На паузе",
  "offPeak.status.running": "Выполняется",
  "offPeak.status.completed": "Успешно",
  "offPeak.status.failed": "Ошибка",
  "offPeak.status.cancelled": "Отменена",
  "offPeak.goToSession": "Перейти к сессии",
  "offPeak.boundSession.label": "Выполняется в: {title}",
  "offPeak.nav.listUnavailable":
    "Не удалось загрузить список фоновых задач. Обновите и повторите попытку.",
  "offPeak.boundSession.hint":
    "Выполняется в этой сессии; если остановить сессию во время выполнения задачи, она будет отменена.",
  "offPeak.chatCreated.boundHint": "Выполняется в этой сессии",
  "offPeak.action.pause": "Пауза",
  "offPeak.action.continue": "Продолжить",
  "offPeak.action.cancel": "Отменить задачу",
  "offPeak.cancel.title": "Отменить фоновую задачу?",
  "offPeak.cancel.description":
    "«{title}» прекратит выполнение. Изменения в файлах, уже внесённые задачей, сохранятся.",
  "offPeak.delete.title": "Удалить эту фоновую задачу?",
  "offPeak.delete.description":
    "Это действие нельзя отменить. Если задача стоит в очереди или выполняется, она будет немедленно остановлена.",
  "offPeak.delete.confirm": "Удалить фоновую задачу",
  "offPeak.error.quota":
    "Достигнут лимит бесплатного тарифа. Повторите попытку позже.",
  "offPeak.error.unavailable":
    "Сервис фоновых задач временно недоступен. Повторите попытку позже.",
  "offPeak.error.generic": "Не удалось выполнить операцию с фоновой задачей.",
  "offPeak.create.title": "Новая фоновая задача",
  "offPeak.create.subtitle":
    "Настройте инструкции и способ выполнения задачи во время простоя.",
  "offPeak.create.defaultTitle": "Без названия",
  "offPeak.edit.title": "Изменение фоновой задачи",
  "offPeak.edit.subtitle":
    "Измените инструкции и способ выполнения задачи во время простоя.",
  "offPeak.modelSelection.repairRequired":
    "Конфигурацию модели нужно обновить. Выберите модель заново и сохраните.",
  "modelSelection.invalidated.fallback":
    "Прежняя выбранная модель больше недоступна. Выбрана текущая модель по умолчанию; проверьте её, прежде чем продолжить.",
  "modelSelection.invalidated.reselect":
    "Прежняя выбранная модель больше недоступна. Выберите модель снова.",
  "offPeak.create.submit": "Создать фоновую задачу",
  "offPeak.edit.save": "Сохранить",
  "offPeak.edit.peakHoursWarning":
    "Эта задача выполняется в часы пик, что может привести к ошибкам.",
  "offPeak.form.soonestAvailable": "Ближайшее доступное время",
  "offPeak.form.titleLabel": "Название задачи",
  "offPeak.form.titlePlaceholder": "например, «Ночной рефакторинг»",
  "offPeak.form.instructionsLabel": "Инструкции",
  "offPeak.form.instructionsPlaceholder":
    "Опишите задачу, которую ZCode может выполнить в фоне: ожидаемый результат и ограничения…",
  "offPeak.form.permissionWarning":
    "Фоновые задачи выполняются без присмотра. Действия, требующие подтверждения, приостановят задачу до вашего ответа.",
  "offPeak.form.modelLabel": "Модель",
  "offPeak.thought.max": "Максимум",
  "offPeak.thought.high": "Высокий",
  "offPeak.thought.low": "Низкий",
  "offPeak.thought.enabled": "Включено",
  "offPeak.thought.off": "Выкл",
  "offPeak.thought.nothink": "Без размышлений",
  "offPeak.form.keepAwakeLabel": "Держать компьютер включённым",
  "offPeak.form.keepAwakeHint":
    "Не даёт компьютеру уходить в сон (общий переключатель; также доступен в «Настройки → Общие»).",
  "offPeak.tab.settings": "Настройки",
  "offPeak.tab.history": "История",
  "offPeak.history.empty": "История пока пуста.",
  "offPeak.history.col.instructions": "Инструкции",
  "offPeak.history.delete": "Удалить историю",
  "offPeak.history.durationMinutes": "{count} мин",
  "offPeak.form.fullAccessHint":
    "Переключите права на «Полный доступ», чтобы снизить число сбоев задач",
  "offPeak.discard.title": "Отменить создание фоновой задачи?",
  "offPeak.discard.description":
    "Изменения текущей фоновой задачи будут потеряны.",
  "offPeak.discard.confirm": "Отменить",
  "offPeak.create.codingPlanOnly": "Только для подписчиков Coding Plan",
  "offPeak.create.availabilityUnavailable":
    "Не удалось проверить доступность. Обновите и повторите попытку.",
  "offPeak.create.limitReachedAt":
    "Достигнут лимит бесплатного тарифа. Следующую задачу можно будет создать через {time}.",
  "offPeak.create.remaining.hoursMinutes": "{hours} ч {minutes} мин",
  "offPeak.create.remaining.hours": "{hours} ч",
  "offPeak.create.remaining.minutes": "{minutes} мин",
  "offPeak.create.remaining.lessThanMinute": "меньше 1 мин",
  "offPeak.create.codingPlanToast":
    "Фоновые задачи доступны только подписчикам Coding Plan.",
  "automations.moreIdeas": "Шаблон задачи по расписанию",
  "automations.templates.unavailable": "Нет доступных шаблонов",
  "automations.runNow": "Запустить сейчас",
  "automations.runNowQueued": "Запущено — скоро начнётся",
  "automations.runNowAlreadyRunning": "Запуск уже выполняется",
  "automations.runNowFailed": "Не удалось запустить",
  "automations.error.create": "Не удалось создать задачу. Попробуйте ещё раз.",
  "automations.error.createLimit":
    "Можно хранить до {limit} задач по расписанию, включая приостановленные, завершённые и неудавшиеся. Удалите одну из них, прежде чем создавать новую.",
  "automations.error.update":
    "Не удалось сохранить изменения. Попробуйте ещё раз.",
  "automations.error.toggle":
    "Не удалось обновить статус задачи. Попробуйте ещё раз.",
  "automations.error.restart":
    "Не удалось перезапустить задачу. Попробуйте ещё раз.",
  "automations.error.delete": "Не удалось удалить задачу. Попробуйте ещё раз.",
  "automations.error.targetNotFound":
    "Задача по расписанию не найдена. Возможно, она была удалена.",
  "automations.edit.newTask": "Новая задача",
  "automations.edit.createSubtitle":
    "Настройте, когда задача запускается, что она делает и как работает.",
  "automations.edit.editSubtitle":
    "Измените, когда задача запускается, что она делает и как работает.",
  "automations.edit.tab.settings": "Настройки",
  "automations.edit.tab.history": "История",
  "automations.edit.createButton": "Создать задачу по расписанию",
  "automations.edit.titlePlaceholder": "Автоматизация без названия",
  "automations.edit.promptPlaceholder":
    "Например: проверьте коммиты за последние 24 часа и составьте сводку вероятных ошибок и исправлений",
  "automations.empty.title": "Задач по расписанию пока нет.",
  "automations.empty.description":
    "Создайте задачу, чтобы запускать промпт по расписанию.",
  "automations.empty.createManually": "Создать вручную",
  "automations.lifecycle.active": "Активна",
  "automations.lifecycle.paused": "Приостановлена",
  "automations.lifecycle.completed": "Завершена",
  "automations.lifecycle.failed": "Сбой",
  "automations.retryQueued": "Повтор #{attempt} в очереди",
  "automations.nextRun": "Следующий запуск {when}",
  "automations.runCount": "Запусков: {count}",
  "automations.runCountLimited": "Запусков: {count}/{max}",
  "automations.pause": "Приостановить",
  "automations.resume": "Продолжить",
  "automations.restart": "Перезапустить",
  "automations.moreActions": "Другие действия",
  "automations.edit": "Изменить",
  "automations.viewHistory": "Открыть историю",
  "automations.delete": "Удалить",
  "automations.delete.title": "Удаление задачи по расписанию",
  "automations.delete.description":
    "Удалить «{title}»? Это действие нельзя отменить.",
  "automations.frequency.hourly": "Каждый час",
  "automations.frequency.daily": "Каждый день",
  "automations.frequency.weekdays": "По будням",
  "automations.frequency.weekly": "Каждую неделю",
  "automations.frequency.monthly": "Каждый месяц",
  "automations.frequency.custom": "Свой вариант",
  "automations.weekday.0": "Вс",
  "automations.weekday.1": "Пн",
  "automations.weekday.2": "Вт",
  "automations.weekday.3": "Ср",
  "automations.weekday.4": "Чт",
  "automations.weekday.5": "Пт",
  "automations.weekday.6": "Сб",
  "automations.weekday.separator": ", ",
  "automations.schedule.hourly": "Каждый час в :{minute}",
  "automations.schedule.daily": "Ежедневно в {time}",
  "automations.schedule.weekdays": "По будням в {time}",
  "automations.schedule.weekly": "Еженедельно по {days} в {time}",
  "automations.schedule.monthly": "Ежемесячно {day}-го числа в {time}",
  "automations.schedule.customMinutes": "Каждые {interval} минут",
  "automations.schedule.customHourly": "Каждые {interval} часов в :{time}",
  "automations.schedule.customDaily": "Каждые {interval} дней в {time}",
  "automations.schedule.custom": "Каждые {interval} {unit} в {time}",
  "automations.schedule.customWeekly":
    "Каждые {interval} недель по {days} в {time}",
  "automations.schedule.customMonthlyDates":
    "Каждые {interval} месяцев числа {days} в {time}",
  "automations.schedule.customMonthlyWeekday":
    "Каждые {interval} месяцев в первый {day} в {time}",
  "automations.schedule.customYearly":
    "Каждые {interval} лет {month}/{day} в {time}",
  "automations.schedule.once": "Однократно",
  "automations.time.soon": "скоро",
  "automations.time.justNow": "только что",
  "automations.time.minutes": "{value} мин",
  "automations.time.hours": "{value} ч",
  "automations.time.days": "{value} д",
  "automations.time.in": "через {amount}",
  "automations.time.ago": "{amount} назад",
  "automations.trigger.schedule": "По расписанию",
  "automations.trigger.manual": "Вручную",
  "automations.chatCreated.defaultTitle": "Задача по расписанию",
  "automations.chatCreated.scheduleFallback": "Создано",
  "automations.chatCreated.open": "Перейти к задачам по расписанию",
  "automations.form.createTitle": "Новая задача по расписанию",
  "automations.form.editTitle": "Изменение задачи по расписанию",
  "automations.form.status.label": "Статус",
  "automations.form.title.label": "Название задачи",
  "automations.form.title.placeholder":
    "Например: ежедневная сводка по стендапу",
  "automations.form.project.localRequired":
    "Сначала откройте локальный проект",
  "automations.form.schedule.label": "Расписание",
  "automations.form.schedule.preview": "Запускается: {summary}",
  "automations.form.schedule.at": "в",
  "automations.form.schedule.monthDayValue": "{month}/{day}",
  "automations.form.schedule.yearDateLabel": "Выберите месяц и день",
  "automations.form.schedule.minutePrefix": "на минуте",
  "automations.form.schedule.minuteSuffix": "",
  "automations.form.schedule.weekdaysLabel": "Выберите дни недели",
  "automations.customRepeat.title": "Настройка повтора",
  "automations.customRepeat.frequency": "Частота повторения",
  "automations.customRepeat.ends": "Окончание",
  "automations.customRepeat.neverEnds": "Бесконечно",
  "automations.customRepeat.endsOption": "До даты",
  "automations.customRepeat.hours": "часов",
  "automations.customRepeat.days": "дней",
  "automations.customRepeat.minutes": "мин",
  "automations.customRepeat.every": "Каждые {interval}",
  "automations.customRepeat.compactFrequency": "Каждые {interval} {unit}",
  "automations.customRepeat.unit.minute": "минут",
  "automations.customRepeat.unit.hour": "часов",
  "automations.customRepeat.unit.day": "дней",
  "automations.customRepeat.unit.week": "недель",
  "automations.customRepeat.unit.month": "месяцев",
  "automations.customRepeat.unit.year": "лет",
  "automations.customRepeat.rule": "Правило повтора",
  "automations.customRepeat.byDate": "По датам",
  "automations.customRepeat.byWeekday": "По дням недели",
  "automations.customRepeat.previousMonth": "Предыдущий месяц",
  "automations.customRepeat.nextMonth": "Следующий месяц",
  "automations.customRepeat.monthLabel": "{month}/{year}",
  "automations.form.dayOfMonth": "День {day}",
  "automations.form.prompt.label": "Инструкции",
  "automations.form.prompt.placeholder":
    "Что эта задача должна делать при каждом запуске?",
  "automations.form.model.label": "Модель",
  "automations.form.model.previewRetry":
    "Не удалось загрузить данные модели. Повторить",
  "automations.form.workspaceUnavailableLabel": "Нет доступного проекта",
  "automations.form.workspaceUnavailable":
    "Откройте доступный проект, прежде чем создавать задачу по расписанию.",
  "automations.form.recurring.label": "Повторять бесконечно",
  "automations.form.recurring.hint":
    "Отключите, чтобы остановить задачу после заданного числа запусков.",
  "automations.form.maxRuns.label": "Максимум запусков",
  "automations.form.maxRuns.placeholder": "Например: 5",
  "automations.form.cancel": "Отмена",
  "automations.form.save": "Сохранить",
  "automations.form.saving": "Сохранение…",
  "automations.unsaved.title": "Удалить черновик задачи?",
  "automations.unsaved.description":
    "Изменения этой задачи по расписанию будут потеряны",
  "automations.unsaved.discard": "Не сохранять",
  "automations.unsaved.save": "Сохранить",
  "automations.runs.title": "История запусков",
  "automations.runs.awakeHint":
    "Задачи по расписанию выполняются только пока компьютер не находится в спящем режиме.",
  "automations.runs.empty": "Запусков пока нет.",
  "automations.runs.col.triggered": "Запущено",
  "automations.runs.col.trigger": "Источник",
  "automations.runs.col.status": "Статус",
  "automations.runs.col.duration": "Длительность",
  "automations.runs.status.running": "Выполняется",
  "automations.runs.status.succeeded": "Выполнен",
  "automations.runs.status.failed": "Сбой",
  "automations.runs.errorUnavailable": "Нет сведений об ошибке",
  "automations.runs.status.stopped": "Остановлен",
  "automations.runs.status.skipped": "Пропущен",
  "automations.runs.openSession": "Перейти к сессии",
  "automations.runs.openSessionFailed":
    "Целевой проект не подключён, поэтому эту сессию нельзя открыть.",
  "automations.runs.delete": "Удалить запуск",
  "automations.runs.prevPage": "Назад",
  "automations.runs.nextPage": "Далее",
  "chat.cuaReadiness.toolsNotLoaded":
    "ZCode Computer Use ещё готовится — инструменты пока не загружены (загружено: {count}). Выдайте разрешения ниже; инструменты появятся, когда помощник будет готов.",
  "chat.cuaReadiness.toolsPreparing":
    "ZCode Computer Use ещё готовится — инструменты пока не загружены. Выдайте разрешения ниже; инструменты появятся, когда помощник будет готов.",
  "chat.toolCall.cua.requestAccess": "Проверить доступ Computer Use",
  "chat.toolCall.cua.appName": "Computer Use",
  "chat.toolCall.cua.group.completedLabel": "Computer Use",
  "chat.toolCall.cua.group.event.one": "{count} событие",
  "chat.toolCall.cua.group.event.other": "{count} событий",
  "chat.toolCall.cua.group.message.one": "{count} сообщение",
  "chat.toolCall.cua.group.message.other": "{count} сообщений",
  "chat.toolCall.cua.listApps": "Список запущенных приложений",
  "chat.toolCall.cua.getAppState": "Считать интерфейс приложения",
  "chat.toolCall.cua.listWindows": "Список окон приложения",
  "chat.toolCall.cua.listWindowsCount": "Окон: {count}",
  "chat.toolCall.cua.screenshot": "Снять весь экран",
  "chat.toolCall.cua.zoom": "Увеличить область экрана",
  "chat.toolCall.cua.openApplication": "Открыть приложение",
  "chat.toolCall.cua.openNamedApplication": "Открыть {app}",
  "chat.toolCall.cua.readNamedApp": "Считать интерфейс: {app}",
  "chat.toolCall.cua.listNamedWindows": "Список окон: {app}",
  "chat.toolCall.cua.openTarget": "Открыть папку «{target}»",
  "chat.toolCall.cua.leftClick": "Клик",
  "chat.toolCall.cua.elementTarget": "Элемент #{index}",
  "chat.toolCall.cua.clickElement": "Клик по элементу #{index}",
  "chat.toolCall.cua.clickElementFailed":
    "Не удалось кликнуть по элементу #{index}",
  "chat.toolCall.cua.clickTarget": "Клик: {target}",
  "chat.toolCall.cua.clickTargetFailed": "Не удалось кликнуть: {target}",
  "chat.toolCall.cua.doubleClick": "Двойной клик",
  "chat.toolCall.cua.tripleClick": "Тройной клик",
  "chat.toolCall.cua.rightClick": "Клик правой кнопкой",
  "chat.toolCall.cua.middleClick": "Клик средней кнопкой",
  "chat.toolCall.cua.scroll": "Прокрутка",
  "chat.toolCall.cua.drag": "Перетаскивание",
  "chat.toolCall.cua.mouseMove": "Переместить указатель",
  "chat.toolCall.cua.type": "Ввести текст",
  "chat.toolCall.cua.typeText": "Ввести «{text}»",
  "chat.toolCall.cua.details.action": "Действие",
  "chat.toolCall.cua.details.result": "Результат",
  "chat.toolCall.cua.details.state": "Возвращённое состояние интерфейса",
  "chat.toolCall.cua.details.raw": "Показать необработанные данные",
  "chat.toolCall.cua.details.rawInput": "Необработанный ввод",
  "chat.toolCall.cua.details.rawOutput": "Необработанный вывод",
  "chat.toolCall.cua.details.app": "Приложение",
  "chat.toolCall.cua.details.operation": "Операция",
  "chat.toolCall.cua.details.value": "Значение",
  "chat.toolCall.cua.details.target": "Цель",
  "chat.toolCall.cua.details.window": "Окно",
  "chat.toolCall.cua.details.focus": "Фокус",
  "chat.toolCall.cua.details.stateId": "ID состояния",
  "chat.toolCall.cua.details.changes": "Изменения интерфейса",
  "chat.toolCall.cua.details.elementTarget": "Элемент интерфейса #{index}",
  "chat.toolCall.cua.details.coordinateTarget": "Координаты {x}, {y}",
  "chat.toolCall.cua.details.changeCounts":
    "Добавлено: {added}, удалено: {removed}",
  "chat.toolCall.cua.details.completed": "Действие выполнено",
  "chat.toolCall.cua.details.failed": "Не удалось выполнить действие",
  "chat.toolCall.cua.details.typed": "Введено символов: {count}",
  "chat.toolCall.cua.details.keyPressed": "Сочетание клавиш отправлено",
  "chat.toolCall.cua.details.opened": "Цель открыта",
  "chat.toolCall.cua.details.observed": "Интерфейс приложения считан",
  "chat.toolCall.cua.details.appsFound":
    "Найдено запущенных приложений: {count}",
  "chat.toolCall.cua.details.noApps": "Запущенные приложения не найдены",
  "chat.toolCall.cua.details.windowsFound": "Найдено окон: {count}",
  "chat.toolCall.cua.details.noWindows": "Окна не найдены",
  "chat.toolCall.cua.details.appList": "Список приложений",
  "chat.toolCall.cua.details.windowList": "Список окон",
  "chat.toolCall.cua.details.active": "Активно",
  "chat.toolCall.cua.details.mainWindow": "Главное окно",
  "chat.toolCall.cua.details.focused": "В фокусе",
  "chat.toolCall.cua.details.untitledWindow": "Окно без названия",
  "chat.toolCall.cua.details.accessReady": "Computer Use готов к работе",
  "chat.toolCall.cua.details.accessIncomplete":
    "Разрешения Computer Use выданы не полностью",
  "chat.toolCall.cua.details.permissions": "Статус разрешений",
  "chat.toolCall.cua.details.environment": "Окружение",
  "chat.toolCall.cua.details.accessibility": "Универсальный доступ",
  "chat.toolCall.cua.details.screenRecording": "Запись экрана",
  "chat.toolCall.cua.details.automation": "Автоматизация",
  "chat.toolCall.cua.details.inputPermission": "Управление вводом",
  "chat.toolCall.cua.details.granted": "Предоставлено",
  "chat.toolCall.cua.details.denied": "Не предоставлено",
  "chat.toolCall.cua.details.unknown": "Неизвестно",
  "chat.toolCall.cua.details.platform": "Платформа",
  "chat.toolCall.cua.details.backend": "Подключение",
  "chat.toolCall.cua.details.permissionOwner": "Владелец разрешения",
  "chat.toolCall.cua.details.elementStale": "Элемент устарел",
  "chat.toolCall.cua.details.failureReason": "Причина сбоя",
  "chat.toolCall.cua.details.elementStaleReason":
    "Интерфейс изменился, и исходный элемент больше недоступен.",
  "chat.toolCall.cua.details.suggestedAction": "Предлагаемое действие",
  "chat.toolCall.cua.details.elementStaleAction":
    "Считайте интерфейс приложения заново и выберите цель в новом состоянии.",
  "chat.toolCall.cua.details.duration": "Длительность ожидания",
  "chat.toolCall.cua.details.waited": "Ожидание: {duration} с",
  "chat.toolCall.cua.details.screenshotCaptured": "Экран захвачен",
  "chat.toolCall.cua.details.screenshot": "Снимок экрана",
  "chat.toolCall.cua.details.screenshotUnavailable":
    "Данные снимка экрана недоступны",
  "chat.toolCall.cua.details.openScreenshot":
    "Открыть предпросмотр снимка экрана",
  "chat.toolCall.cua.details.scope": "Область",
  "chat.toolCall.cua.details.fullScreen": "Полный экран",
  "chat.toolCall.cua.details.dimensions": "Размеры",
  "chat.toolCall.cua.details.format": "Формат",
  "chat.toolCall.cua.details.zoomed": "Область экрана увеличена",
  "chat.toolCall.cua.details.zoomPreview": "Просмотр увеличенной области",
  "chat.toolCall.cua.details.zoomUnavailable":
    "Данные увеличенного изображения недоступны",
  "chat.toolCall.cua.details.region": "Исходная область",
  "chat.toolCall.cua.details.bounds": "Обработка границ",
  "chat.toolCall.cua.details.clamped": "Скорректировано по границам экрана",
  "chat.toolCall.cua.setValue": "Заполнить значение",
  "chat.toolCall.cua.selectText": "Выделить текст",
  "chat.toolCall.cua.key": "Нажать клавишу",
  "chat.toolCall.cua.holdKey": "Удерживать клавишу",
  "chat.toolCall.cua.pressKey": "Нажать {key}",
  "chat.toolCall.cua.pressKeyAction": "Нажать",
  "chat.toolCall.cua.performAction": "Выполнить действие в интерфейсе",
  "chat.toolCall.cua.wait": "Ожидание интерфейса",
  "chat.toolCall.cua.waitDuration": "Ожидание {duration} с",
  "chat.toolCall.cua.seconds": "{duration} с",
  "chat.toolCall.cua.readClipboard": "Прочитать буфер обмена",
  "chat.toolCall.cua.writeClipboard": "Записать в буфер обмена",
  "chat.toolCall.cua.stop": "Остановить управление компьютером",
  "chat.toolCall.cua.default": "Использовать Computer Use",
  "cuaPermission.modal.unavailable":
    "Пока не удалось проверить статус разрешений Helper (возможно, он ещё запускается). Проверьте ещё раз перед открытием Системных настроек.",
  "cuaPermission.live.title": "Computer Use требует разрешений macOS",
  "cuaPermission.live.description":
    "Для запущенной задачи Computer Use нужны разрешения macOS. Открыть руководство по авторизации?",
  "cuaPermission.live.confirm": "Авторизовать",
  "cuaPermission.live.cancel": "Не сейчас",
  "cuaPermission.modal.restartButton": "Перезапустить Helper",
  "cuaPermission.modal.restarting": "Перезапуск Helper…",
  "cuaPermission.modal.restartFailed":
    "Не удалось перезапустить Helper: {error}",
  "cuaPermission.modal.relaunchAppButton": "Перезапустить ZCode",
  "cuaPermission.modal.relaunchAppHint":
    "Не работает после перезапуска Helper? Перезапустите ZCode, чтобы полностью перезагрузить процесс Helper.",
  "cuaPermission.status.granted": "Выдано",
  "cuaPermission.status.missing": "Отсутствует",
  "cuaPermission.status.unknown": "Неизвестно",
  "cuaPermission.status.stale": "Авторизация требует подтверждения",
  "cuaPermission.status.verifying": "Выдано, проверяется",
  "cuaPermission.probeVerifyingHint":
    "Системное разрешение выдано. Сейчас проверяем реальное управление и захват экрана.",
  "cuaPermission.tools.preparing":
    "Системные разрешения и локальное управление готовы. Ожидаем, когда эта сессия загрузит инструменты Computer Use.",
  "cuaPermission.grantAlreadySatisfied": "Это разрешение уже выдано.",
  "cuaPermission.tools.agentUpdateRequired":
    "Подключённый агент слишком стар для безопасной проверки готовности. Обновите или перезапустите его и повторите проверку.",
  "cuaPermission.tools.untrustedRuntime":
    "Инструменты Computer Use найдены, но их источник — не проверенный плагин ZCode. Проверьте установку плагина и повторите проверку.",
  "cuaPermission.perm.accessibility": "Универсальный доступ",
  "cuaPermission.perm.accessibility.purpose":
    "Чтение/управление элементами UI + синтез ввода",
  "cuaPermission.perm.screenRecording": "Запись экрана",
  "cuaPermission.perm.screenRecording.purpose": "Захват экрана",
  "cuaPermission.osFloorTitle":
    "Computer Use требует macOS {minimum} или новее (сейчас примерно macOS {current})",
  "cuaPermission.osFloorDescription":
    "Пожалуйста, обновите macOS перед использованием. На более старых версиях настроить разрешения невозможно.",
  "cuaPermission.ready": "Разрешения готовы",
  "cuaPermission.ready.sessionValidationHint":
    "ZCode проверит инструменты Computer Use для конкретной сессии при запуске вашей первой сессии.",
  "settings.computerUse.title": "Computer Use",
  "settings.computerUse.toggleLabel": "Включить Computer Use",
  "settings.computerUse.toggleDescription":
    "Включение активирует Computer Use — его MCP-сервер и скиллы.",
  "settings.computerUse.composerEntry.label":
    "Показывать кнопку Computer Use в поле ввода",
  "settings.computerUse.composerEntry.description":
    "Если выключено, кнопка скрыта из поля ввода.",
  "settings.computerUse.composerEntry.requiresEnabled":
    "Сначала включите Computer Use, чтобы показать эту кнопку в поле ввода.",
  "settings.computerUse.composerEntry.saveFailed":
    "Не удалось сохранить: {error}",
  "settings.computerUse.pluginDisabledHint":
    "Плагин Computer Use не включён. Включите его в разделе «Плагины», чтобы использовать Computer Use.",
  "settings.computerUse.unsupported.title": "Computer Use здесь недоступен",
  "settings.computerUse.unsupported.remoteDescription":
    "Computer Use пока не поддерживается в SSH, WSL, Docker и других удалённых окружениях. Переключитесь на локальный проект macOS или Windows.",
  "settings.computerUse.unsupported.linuxDescription":
    "Computer Use пока не поддерживается на Linux-десктопах. Переключитесь на локальный проект macOS или Windows.",
  "settings.computerUse.unsupported.badge": "Недоступно здесь",
  "settings.computerUse.unsupported.group":
    "Недоступные встроенные возможности",
  "scheduledPreview.keepAwakeEnabled": "Поддержание активности включено",
  "scheduledPreview.keepAwakeDisabled": "Поддержание активности отключено",
  "scheduledPreview.toast.running": "Выполняется «{title}»…",
  "scheduledPreview.toast.view": "Открыть",
  "scheduledPreview.addSchedule": "Добавить автоматизацию",
};

export default ruRU;
