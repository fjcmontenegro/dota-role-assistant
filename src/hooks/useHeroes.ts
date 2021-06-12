import { useEffect, useState } from 'react'
import allHeroes from '../data/allHeroes.json'

type PrimaryAttribute = 'strength' | 'agility' | 'intelligence'
type Roles = {
  Carry: number
  Support: number
  Nuker: number
  Disabler: number
  Jungler: number
  Durable: number
  Escape: number
  Pusher: number
  Initiator: number
}

export type Hero = {
  id: number
  name: string
  image: string
  primaryAttribute: PrimaryAttribute
  complexity: number
  roles: Roles
}

const IMAGE_URL =
  'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/'

const getPrimaryAttribute = (attrNum: number): PrimaryAttribute => {
  if (attrNum === 0) return 'strength'
  if (attrNum === 1) return 'agility'
  return 'intelligence'
}

const getRoles = (roles: number[]): Roles => {
  return {
    Carry: roles[0],
    Support: roles[1],
    Nuker: roles[2],
    Disabler: roles[3],
    Jungler: roles[4],
    Durable: roles[5],
    Escape: roles[6],
    Pusher: roles[7],
    Initiator: roles[8],
  }
}

const getHero = async (name: string): Promise<Hero> => {
  const heroData = await import(`../data/${name}.json`)
  const hero: Hero = {
    id: heroData.id,
    name: heroData.name_loc,
    image: `${IMAGE_URL}${heroData.name.slice(14)}.png`,
    primaryAttribute: getPrimaryAttribute(heroData.primary_attr),
    complexity: heroData.complexity,
    roles: getRoles(heroData.role_levels),
  }
  return hero
}

export const useHeroes = (): Hero[] => {
  const [heroes, setHeroes] = useState<Hero[]>([])

  useEffect(() => {
    const getHeroes = async () => {
      const promises: Promise<Hero>[] = []
      for (let i = 0; i < allHeroes.length; i++) {
        promises.push(getHero(allHeroes[i].name))
      }
      Promise.all(promises).then((hs) => setHeroes(hs))
    }
    getHeroes()
  }, [])

  return heroes
}