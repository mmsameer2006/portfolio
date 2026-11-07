import { useEffect, useState } from 'react'

// Reads the public repo list straight from GitHub in the visitor's browser.
// If GitHub is unreachable or rate-limited the result stays null and the UI falls back to static content.
const cache = {}

function load(user) {
  if (!cache[user]) {
    cache[user] = fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=updated`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((list) =>
        list
          .filter((r) => !r.fork)
          .map((r) => ({
            name: r.name,
            description: r.description,
            url: r.html_url,
            language: r.language,
            homepage: r.homepage || null,
          })),
      )
      .catch(() => null)
  }
  return cache[user]
}

export function useGithubRepos(user) {
  const [repos, setRepos] = useState(null)
  useEffect(() => {
    let alive = true
    load(user).then((r) => alive && setRepos(r))
    return () => {
      alive = false
    }
  }, [user])
  return repos
}
