let themes = [
    {
        themeId: 1,
        title: 'Улучшение условий в офисе',
        description: 'Длительное время наш офис не мог похвастаться достойными условиями труда для наших сотрудников. Но настал период, когда нам нужно обновится. Мы ждём ваших идей и предложений по улучшению условий работы в офисе для достижения высокой производительности.',
        isVote: true,
        isMultiStage: true,
        isFinished: false,
        authorId: 1,
        activeStage: 0,
        stageDate: '2022-03-21',
        stages: [
            {
                title: 'Улучшение обстановки',
                description: 'На этом этапе мы ждём ваши предложений по улучшению обстановки в офисе (может быть кулер для воды или что-то подобное).',
                suggestDays: 5,
                voteDays: 2, 
            },
            {
                title: 'Обоснование концепции',
                description: 'На этом этапе мы ждём ваше обоснование предложенных идеи с точки зрения плюсов для компании и требуемых расходов.'
            },
            {
                title: 'Расчётный план',
                description: 'На этом этапе мы ждём смету вашей концепции улучшения офиса, какие затраты потребуются на её внедрение.'
            },
        ],
        mainPhoto: 'themes/image4.webp',
        photos: [
            'themes/unknown.jpg',
            'themes/unknown.jpg',
            'ideas/image3.jpg',
            'ideas/image2.jpg',
            'ideas/image1.jpg',
            'ideas/image2.jpg',
            'ideas/image3.jpg',
        ],
    },
    {
        themeId: 2,
        title: 'Нужны новые инструменты!',
        description: 'Наша фирма встала в тупик: многие станки и важные инструменты, необходимые нам в производственной деятельности больше не оправдывают себя. Дорогие сотрудники, ждём ваших предложений, как поступить!',
        isVote: true,
        isMultiStage: true,
        isFinished: false,
        authorId: 1,
        activeStage: 1,
        stageDate: '2022-03-22',
        stages: [
            {
                title: 'А что по эффективности?',
                description: 'На данном необходимо описать предложенный вариант с точки зрения его эффективности.',
            },
            {
                title: 'А что насчёт экономической точки зрения?',
                description: 'Предоставьте аргументированный ответ с точки зрения экономической выгоды и затрат для внедрения данного варианта.',
                suggestDays: 3,
                voteDays: 3, 
            },
            {
                title: 'А что по внедряемости?',
                description: 'Опишите перспективы, а также простоту внедряемости предложенного решения.'
            },
        ],
        mainPhoto: 'themes/image1.jpg',
        photos: [
            'ideas/image8.jpg',
            'themes/image1.jpg',
        ],
    },
    {
        themeId: 3,
        title: 'Работа с клиентами',
        description: 'В нашей компании наблюдаются проблемы при общении с клиентами. Нужно что-то сделать!',
        isVote: false,
        isMultiStage: false,
        isFinished: false,
        authorId: 2,
        activeStage: 0,
        stageDate: '2022-03-21',
        stages: [
            {
                title: 'Улучшение обстановки',
                description: 'На этом этапе мы ждём ваши предложений по улучшению обстановки в офисе (может быть кулер для воды или что-то подобное).',
                suggestDays: 5,
                voteDays: 2, 
            },
            {
                title: 'Обоснование концепции',
                description: 'На этом этапе мы ждём ваше обоснование предложенных идеи с точки зрения плюсов для компании и требуемых расходов.'
            },
        ],
        mainPhoto: 'themes/image2.jpg',
        photos: [],
    },
    {
        themeId: 4,
        title: 'Расширение дверной продукции',
        description: 'Так как наша компания занимается производством дверей, то нам необходимо периодически обновлять наш ассортимент предлагаемых вариантов дверей.',
        isVote: false,
        isMultiStage: false,
        isFinished: false,
        authorId: 3,
        activeStage: 0,
        stageDate: '2022-03-21',
        stages: [
            {
                title: 'Улучшение обстановки',
                description: 'На этом этапе мы ждём ваши предложений по улучшению обстановки в офисе (может быть кулер для воды или что-то подобное).',
                suggestDays: 5,
                voteDays: 2, 
            },
            {
                title: 'Обоснование концепции',
                description: 'На этом этапе мы ждём ваше обоснование предложенных идеи с точки зрения плюсов для компании и требуемых расходов.'
            },
        ],
        mainPhoto: 'themes/image3.jpg',
        photos: [],
    },
    {
        themeId: 5,
        title: 'Юбилей компании',
        description: 'Нашей компании скоро исполняется 10 лет. Нам нужно определить, каким образом мы отметим этот знаменательный день.',
        isVote: false,
        isMultiStage: true,
        isFinished: false,
        authorId: 1,
        activeStage: 1,
        stageDate: '2022-03-21',
        stages: [
            {
                title: 'Улучшение обстановки',
                description: 'На этом этапе мы ждём ваши предложений по улучшению обстановки в офисе (может быть кулер для воды или что-то подобное).',
            },
            {
                title: 'Обоснование концепции',
                description: 'На этом этапе мы ждём ваше обоснование предложенных идеи с точки зрения плюсов для компании и требуемых расходов.',
                suggestDays: 5,
                voteDays: 2, 
            },
        ],
        mainPhoto: 'themes/image5.jpg',
        photos: [],
    }
];

let ideas = [
    {
        ideaId: 1,
        themeId: 1,
        title: 'Установить современные конфигурации ПК',
        description: 'Считаю необходимым оснастить все рабочие места современными конфигурациями',
        likes: 12,
        mainPhoto: 'ideas/image4.jpg',
        photos: [
            'themes/unknown.jpg',
            'themes/unknown.jpg',
            'ideas/image3.jpg',
            'ideas/image2.jpg',
            'ideas/image1.jpg',
            'ideas/image2.jpg',
            'ideas/image3.jpg',
        ],
        comments: [
            {
                authorId: 2,
                text: 'Я думаю, что этот вопрос поставлен своевременно, так как мерцание монитора без дополнительного фонового освещения очень сильно губит зрение.',
                date: '27.05.2023',
            },
            {
                authorId: 4,
                text: 'Да, я тоже поддерживаю идею, чтобы оснастить все рабочие места комфортным освещением.',
                date: '23.05.2023',
            },
            {
                authorId: 5,
                text: 'Я думаю, что этот вопрос поставлен своевременно, так как мерцание монитора без дополнительного фонового освещения очень сильно губит зрение.',
                date: '28.03.2023',
            },
            {
                authorId: 6,
                text: 'Не знаю, мне кажется это не так важно. Работать можно и при одном свете от экрана монитора.',
                date: '30.03.2023',
            },
        ],
    },
    {
        ideaId: 2,
        themeId: 1,
        title: 'Увеличить скорость интернета',
        description: 'Я разделяю идею об улучшении конфигурации рабочих ПК, но также хочу отметить, что скорость интернета тоже важна',
        likes: 5,
        mainPhoto: 'ideas/image5.webp',
        photos: [],
        comments: [
            {
                authorId: 2,
                text: 'Я думаю, что этот вопрос поставлен своевременно, так как мерцание монитора без дополнительного фонового освещения очень сильно губит зрение.',
                date: '27.05.2023',
            },
            {
                authorId: 4,
                text: 'Да, я тоже поддерживаю идею, чтобы оснастить все рабочие места комфортным освещением.',
                date: '23.05.2023',
            },
            {
                authorId: 5,
                text: 'Я думаю, что этот вопрос поставлен своевременно, так как мерцание монитора без дополнительного фонового освещения очень сильно губит зрение.',
                date: '28.03.2023',
            },
            {
                authorId: 6,
                text: 'Не знаю, мне кажется это не так важно. Работать можно и при одном свете от экрана монитора.',
                date: '30.03.2023',
            },
        ],
    },
    {
        ideaId: 3,
        themeId: 1,
        title: 'Улучшить освещенность рабочих мест',
        description: 'По моему мнению, для создания комфортной обстановки и улучшения отдачи необходимо хорошее освещение рабочих мест сотрудников.',
        likes: 3,
        mainPhoto: 'ideas/image7.jpg',
        photos: [
            'themes/unknown.jpg',
            'themes/unknown.jpg',
            'ideas/image3.jpg',
            'ideas/image2.jpg',
            'ideas/image1.jpg',
            'ideas/image2.jpg',
            'ideas/image3.jpg',
        ],
        comments: [
            {
                authorId: 2,
                text: 'Я думаю, что этот вопрос поставлен своевременно, так как мерцание монитора без дополнительного фонового освещения очень сильно губит зрение.',
                date: '27.05.2023',
            },
            {
                authorId: 4,
                text: 'Да, я тоже поддерживаю идею, чтобы оснастить все рабочие места комфортным освещением.',
                date: '23.05.2023',
            },
            {
                authorId: 5,
                text: 'Я думаю, что этот вопрос поставлен своевременно, так как мерцание монитора без дополнительного фонового освещения очень сильно губит зрение.',
                date: '28.03.2023',
            },
            {
                authorId: 6,
                text: 'Не знаю, мне кажется это не так важно. Работать можно и при одном свете от экрана монитора.',
                date: '30.03.2023',
            },
        ],
    },
    {
        ideaId: 4,
        themeId: 1,
        title: 'Оснастить рабочие места новыми рабочими креслами',
        description: 'Предлагаю установить для всех сотрудников новые офисные кресла, ведь это очень хорошая идея',
        likes: 0,
        mainPhoto: 'ideas/image9.jpg',
        photos: [],
        comments: [
            {
                authorId: 2,
                text: 'Я думаю, что этот вопрос поставлен своевременно, так как мерцание монитора без дополнительного фонового освещения очень сильно губит зрение.',
                date: '27.05.2023',
            },
            {
                authorId: 4,
                text: 'Да, я тоже поддерживаю идею, чтобы оснастить все рабочие места комфортным освещением.',
                date: '23.05.2023',
            },
            {
                authorId: 5,
                text: 'Я думаю, что этот вопрос поставлен своевременно, так как мерцание монитора без дополнительного фонового освещения очень сильно губит зрение.',
                date: '28.03.2023',
            },
            {
                authorId: 6,
                text: 'Не знаю, мне кажется это не так важно. Работать можно и при одном свете от экрана монитора.',
                date: '30.03.2023',
            },
        ],
    },
    {
        ideaId: 5,
        themeId: 1,
        title: 'Установить новый кулер большего объема',
        description: 'В наш офис давно нужно купить кулер.',
        likes: 0,
        mainPhoto: 'ideas/image6.jpg',
        photos: [],
        comments: [
            {
                authorId: 2,
                text: 'Я думаю, что этот вопрос поставлен своевременно, так как мерцание монитора без дополнительного фонового освещения очень сильно губит зрение.',
                date: '27.05.2023',
            },
            {
                authorId: 4,
                text: 'Да, я тоже поддерживаю идею, чтобы оснастить все рабочие места комфортным освещением.',
                date: '23.05.2023',
            },
            {
                authorId: 5,
                text: 'Я думаю, что этот вопрос поставлен своевременно, так как мерцание монитора без дополнительного фонового освещения очень сильно губит зрение.',
                date: '28.03.2023',
            },
            {
                authorId: 6,
                text: 'Не знаю, мне кажется это не так важно. Работать можно и при одном свете от экрана монитора.',
                date: '30.03.2023',
            },
        ],
    },
];

let users = [
    {
        userId: 1,
        name: 'Бобров Пётр Николавевич',
        avatar: 'users/image1.jpg',
        job: 'Сотрудник',
        isBoss: true,
    },
    {
        userId: 2,
        name: 'Мисиков Валентин Петровчи',
        avatar: 'users/image11.jpg',
        job: 'Сотрудник',
        isBoss: true,
    },
    {
        userId: 3,
        name: 'Дьяченко Светлана Алексеевна',
        avatar: 'users/image7.jpg',
        job: 'Сотрудник',
        isBoss: true,
    },
    {
        userId: 4,
        name: 'Кислицина Мария Ивановна',
        avatar: 'users/image2.jpg',
        job: 'Сотрудник',
        isBoss: false,
    },
    {
        userId: 5,
        name: 'Прокопенко Иллирион Илларионович',
        avatar: 'users/image8.jpg',
        job: 'Сотрудник',
        isBoss: false,
    },
    {
        userId: 6,
        name: 'Лемешева Лилия Семёновна',
        avatar: 'users/image10.jpeg',
        job: 'Сотрудник',
        isBoss: false,
    },
]

export function getThemes() {
    return themes;
}

export function getPopularThemes() {
    const themes = getThemes();
    const n = 4;

    return themes.sort(() => 0.5 - Math.random()).slice(0, n);
}

export function getTheme(themeId) {
    return themes.find((theme) => theme.themeId == themeId);
}

export function getThemeIdeasPage(themeId, page) {
    const pageSize = 5;
    return ideas.filter((idea) => idea.themeId == themeId).sort((a, b) => (a.likes < b.likes)||(a.likes == b.likes)&&(a.title >= b.title)).slice(pageSize*page, pageSize*(page+1));
}

export function getIdea(ideaId) {
    return ideas.find((idea) => idea.ideaId == ideaId);
}

export function getUser(userId) {
    return users.find((user) => user.userId == userId);
}