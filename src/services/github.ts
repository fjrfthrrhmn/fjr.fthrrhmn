const URL = 'https://github-contributions-api.jogruber.de/v4/';

export const fetchContributionsGithub = async (username: string) => {
  const res = await fetch(`${URL}${username}`)
  return res.json()
}