import React from 'react'
import { useHeroes } from '../../hooks/useHeroes'
import './HeroesList.scss'
import Hero from '../Hero/Hero'
import { FiltersObject } from '../Filters/Filters'

type Props = {
  filters: FiltersObject
}

const HeroesList = ({ filters }: Props): React.ReactElement => {
  const heroes = useHeroes()
  if (heroes.length) {
    let filteredHeroes = heroes

    if (filters.attribute) {
      filteredHeroes = heroes.filter(
        (hero) => hero.attribute === filters.attribute,
      )
    }
    if (filters.complexity) {
      filteredHeroes = heroes.filter(
        (hero) => hero.complexity === filters.complexity,
      )
    }
    // if has roles filter
    const rolesFilter = Object.values(filters.roles)
    if (rolesFilter.filter((r) => r >= 1).length) {
      // for each hero
      filteredHeroes = heroes.filter((hero) => {
        // convert the roles to an array
        const heroRoles = Object.values(hero.roles)
        // for each role value
        for (let i = 0; i < rolesFilter.length; i++) {
          // if the filter demands something the hero doesn't have
          // don't include the hero
          if (rolesFilter[i] > heroRoles[i]) {
            return false
          }
        }

        console.log(hero.name, rolesFilter, heroRoles, hero.roles)
        // if got here, hero passed
        return true
      })
    }
    return (
      <ul className="HeroesList">
        {filteredHeroes.map((hero) => (
          <Hero key={hero.id} hero={hero} />
        ))}
      </ul>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default HeroesList
