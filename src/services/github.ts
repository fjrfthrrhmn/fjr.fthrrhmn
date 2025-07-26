const URL = 'https://github-contributions-api.jogruber.de/v4/';

export const getContributionsGithub = async (username: string) => {
  const res = await fetch(`${URL}${username}`)
  return res.json()
}