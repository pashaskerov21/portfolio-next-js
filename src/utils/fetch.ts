export const fetchInformationData = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/information`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export const fetchMenuData = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/menu`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export const fetchProjectData = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/projects`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export const fetchSkillData = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/skills`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}