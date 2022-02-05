import getUserLocale from 'get-user-locale'

export const userLanguage = getUserLocale().slice(0,2)
