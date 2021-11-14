import * as React from 'react'
import capitalize from 'lodash.capitalize'

import { usePersonQuery } from '~/gql'
import { DataCell, LoadingCell, NoticeCell, SectionHeader } from '~/ui/components'

export interface PersonViewProps {
  personId: string
}

export function PersonView({ personId }: PersonViewProps) {
  const { data, loading, error } = usePersonQuery({
    variables: {
      personId,
    },
  })

  if (error) {
    return <NoticeCell message="Failed to Load Data" />
  }

  if (loading) {
    return <LoadingCell />
  }

  const vehicles = data?.person?.vehicleConnection?.vehicles ?? []

  return (
    <React.Fragment>
      <section>
        <SectionHeader title="General Information" />
        <DataCell label="Name" value={data?.person?.name!} data-testid="personName" />
        <DataCell label="Eye Color" value={capitalize(data?.person?.eyeColor!)} />
        <DataCell label="Hair Color" value={capitalize(data?.person?.hairColor!)} />
        <DataCell label="Skin Color" value={capitalize(data?.person?.skinColor!)} />
        <DataCell label="Birth Year" value={data?.person?.birthYear!} />
      </section>
      {vehicles.length > 0 && (
        <section>
          <SectionHeader title="Vehicles" />
          {vehicles.map(item => (
            <DataCell key={item?.id} label={item?.name!} />
          ))}
        </section>
      )}
    </React.Fragment>
  )
}
